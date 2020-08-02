import { Component, OnInit } from '@angular/core';
import { AudioConfig, ResultReason, SpeechConfig, SpeechRecognizer } from 'microsoft-cognitiveservices-speech-sdk';
import { GetAllIngredientService } from '../services/get-all-ingredient.service';
import { never } from 'rxjs';
import { NavController } from '@ionic/angular';

// interface resultArray {
//   id: number;
//   name: string;
// }

@Component({
  selector: 'app-voice',
  templateUrl: './voice.page.html',
  styleUrls: ['./voice.page.scss'],
})
export class VoicePage{

  startRecognize: boolean;
  allIngredient;


  name = 'Speech To Text';
  private recognizing = false;
  // innerHtml: string = '';
  private lastRecognized: string = '';
  _recognizer: SpeechRecognizer;

  constructor(private getAllIngredientService: GetAllIngredientService, private navCtrl: NavController) {
  }

  start() {

    // 先呼叫Ingredient API，不然太大包
    this.getAllIngredientService.request().subscribe( data =>{
      this.allIngredient = data;
     });

    console.log('start');
    this.startRecognize = true; // 用來判斷是否hidden

    this.recognizing = true;

    const audioConfig = AudioConfig.fromDefaultMicrophoneInput();

    const speechConfig = SpeechConfig.fromSubscription('2e034ce056e9485f97b82e49898ec0e2', 'eastus');
    speechConfig.speechRecognitionLanguage = 'zh-TW';
    speechConfig.enableDictation();
    this._recognizer = new SpeechRecognizer(speechConfig, audioConfig);
    this._recognizer.recognizing = this._recognizer.recognized = this.recognizerCallback.bind(this);
    this._recognizer.startContinuousRecognitionAsync();
  }

  recognizerCallback(s, e) {
    // console.log(e.result.text);
    const reason = ResultReason[e.result.reason];
    // console.log(reason);
    // if(reason === 'RecognizingSpeech') {
    //   this.innerHtml = this.lastRecognized + e.result.text;
    // }
    if (reason === 'RecognizedSpeech') {
      this.lastRecognized += e.result.text + '\r\n';
      // this.innerHtml = this.lastRecognized;
      console.log(this.lastRecognized);
    }
  }

  stop() {
    this.startRecognize = false; // 用來判斷是否hidden
    this.recognizing = false;

    this._recognizer.stopContinuousRecognitionAsync(
      stopRecognizer.bind(this),
      function(err) {
        stopRecognizer.bind(this);
        console.error(err);
      }.bind(this)
    );

    function stopRecognizer() {
      this._recognizer.close();
      this._recognizer = undefined;
      console.log('stopped');
    }

    // 做語句分析配對食材
    this.recognizeAllIngredient();
  }

  recognizeAllIngredient() {
    localStorage.removeItem('voiceResult');
    localStorage.removeItem('voiceResultName');
    let voiceResultID = [null];
    let voiceResultName = [null];
    let j = 0;

    // 與資料庫做比對
    for (let i = 0 ; i <= this.allIngredient.response.data.length ; i++) {
      if (this.lastRecognized.includes(this.allIngredient.response.data[i]?.ingredient_name)) {
        voiceResultID[j] = (this.allIngredient.response.data[i].ingredient_id);
        voiceResultName[j] = (this.allIngredient.response.data[i].ingredient_name);
        j++;
       } else if ((this.allIngredient.response.data[i]?.ingredient_alias_1 !== null) &&
        (this.lastRecognized.includes(this.allIngredient.response.data[i]?.ingredient_alias_1))) {
        voiceResultID[j] = (this.allIngredient.response.data[i].ingredient_id);
        voiceResultName[j] = (this.allIngredient.response.data[i].ingredient_name);
        j++;
       } else if ((this.allIngredient.response.data[i]?.ingredient_alias_2 !== null) &&
       (this.lastRecognized.includes(this.allIngredient.response.data[i]?.ingredient_alias_2))) {
        voiceResultID[j] = (this.allIngredient.response.data[i].ingredient_id);
        voiceResultName[j] = (this.allIngredient.response.data[i].ingredient_name);
        j++;
      } else if ((this.allIngredient.response.data[i]?.ingredient_alias_3 !== null) &&
      (this.lastRecognized.includes(this.allIngredient.response.data[i]?.ingredient_alias_3))) {
        voiceResultID[j] = (this.allIngredient.response.data[i].ingredient_id);
        voiceResultName[j] = (this.allIngredient.response.data[i].ingredient_name);
        j++;
     }
    }

    console.log(voiceResultID);
    console.log(voiceResultName);
    localStorage.setItem('voiceResultID', voiceResultID.toString());
    localStorage.setItem('voiceResultName', voiceResultName.toString());
    this.navCtrl.navigateBack('main');
  }
}
