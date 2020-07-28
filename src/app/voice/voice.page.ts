import { Component, OnInit } from '@angular/core';
import { AudioConfig, ResultReason, SpeechConfig, SpeechRecognizer } from 'microsoft-cognitiveservices-speech-sdk';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.page.html',
  styleUrls: ['./voice.page.scss'],
})
export class VoicePage{

  name = 'Speech To Text';
  private recognizing = false;
  private notification: string;
  innerHtml: string = '';
  private lastRecognized: string = '';
  _recognizer: SpeechRecognizer;
  startButton(event) {
    console.log("start")
    
    if (this.recognizing) {
      this.stop();
      this.recognizing = false;
    }
    else {

      this.recognizing = true;
      console.log("record");

      const audioConfig = AudioConfig.fromDefaultMicrophoneInput();

      const speechConfig = SpeechConfig.fromSubscription("2e034ce056e9485f97b82e49898ec0e2", "eastus");
      speechConfig.speechRecognitionLanguage = 'zh-TW';
      speechConfig.enableDictation();
      this._recognizer = new SpeechRecognizer(speechConfig, audioConfig)
      this._recognizer.recognizing = this._recognizer.recognized = this.recognizerCallback.bind(this)
      this._recognizer.startContinuousRecognitionAsync();
    }
  }

  recognizerCallback(s, e) {
    console.log(e.result.text);
    const reason = ResultReason[e.result.reason];
    console.log(reason);
    if (reason == "RecognizingSpeech") {
      this.innerHtml = this.lastRecognized + e.result.text;
    }
    if (reason == "RecognizedSpeech") {
      this.lastRecognized += e.result.text + "\r\n";
      this.innerHtml = this.lastRecognized;
    }
  }

  stop() {
    this._recognizer.stopContinuousRecognitionAsync(
      stopRecognizer.bind(this),
      function (err) {
        stopRecognizer.bind(this)
        console.error(err)
      }.bind(this)

    )

    function stopRecognizer() {
      this._recognizer.close()
      this._recognizer = undefined
      console.log('stopped')
    }
  }
}
