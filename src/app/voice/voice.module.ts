import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VoicePageRoutingModule } from './voice-routing.module';
import { VoicePage } from './voice.page';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
    IonicModule,
    VoicePageRoutingModule,
    // BrowserAnimationsModule
  ],
  declarations: [VoicePage],
})
export class VoicePageModule {}
