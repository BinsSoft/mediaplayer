import { Component, ElementRef, ViewChild } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('selectAudios') audioSelectorRef: ElementRef;
  audioInterval :any;
  progessValue : number = 0;
  files = [];
  audio = {
    player : null,
    active : 0,
    current : '',
    duration : '',
    volumn : true,
    loop : true
  }
  constructor()
  {
    this.audio.player = new Audio();
    
  }
  setVolumn()
  {
    this.audio.volumn = (this.audio.volumn == true)? false: true;
    this.audio.player.muted = (this.audio.volumn == true)? false: true;;
  }
  setLoop()
  {
    this.audio.loop = (this.audio.loop == true)? false: true;
  }
  openAudioSelector()
  {
    this.audioSelectorRef.nativeElement.click();
  }
  clearAll()
  {
    if (this.audio.player.paused == false) {
      this.audio.player.pause();
    }
    this.files = [];
    this.audio.current = "";
    this.audio.duration = "";
    this.progessValue  = 0;
  }
  loadAudio(index) {
    this.audio.active = index;
    let file = this.files[index];
    const audioComponentObj = this;
    audioComponentObj.audio.player.src =file.file
    audioComponentObj.audio.player.load();
    audioComponentObj.playPauseAudio();
    
  }
  playPauseAudio()
  {
    if (this.audio.player.paused == true ) {
      this.audio.player.play();
      this.audioInterval = setInterval(()=>{
        if (this.audio.player.ended) {
          clearInterval(this.audioInterval);
          if (this.audio.active < (this.files.length-1)) {
            this.audio.active ++;
            this.loadAudio(this.audio.active);  
          } else if(this.audio.loop == true) {
            this.audio.active = 0;
            this.loadAudio(this.audio.active);
          }
          
        } else {
          this.audio.current = this.msToHMS(this.audio.player.currentTime);
          this.audio.duration = this.msToHMS(this.audio.player.duration);
          this.progessValue = (this.audio.player.currentTime.toFixed(2) *100)/ this.audio.player.duration;
        }
      },1000);
    } else {
      clearInterval(this.audioInterval);
      this.audio.player.pause();
    }
    
  }
  playForwardBackwardAudio(type)
  {
    let currentTime = this.audio.player.currentTime;

    if (type == 'backward') {
      currentTime -=3;
      if (currentTime < 0) {
        currentTime = 0;
      }
    } else if (type == 'forward') {
      currentTime +=3;
      if (currentTime > this.audio.player.duration) {
        currentTime = this.audio.player.duration;
      }
    }
    this.audio.player.currentTime = currentTime;
  }
  msToHMS( seconds:any ) {
     
      let returnStr = '';
      if (seconds > 3600) {
        let h = parseInt((seconds/3600).toString());
        if (h < 10) {
          returnStr += "0";
        } 
        returnStr +=h+" : ";
        seconds = seconds%3600;
      }
      let m = parseInt((seconds/60).toString());;
      if (m < 10) {
        returnStr += "0";
      }
      returnStr += m+" : ";

      let s  = parseInt((seconds%60).toString());
      if (s < 10) {
        returnStr += "0";
      }
      returnStr += s;
      return returnStr;
  }

  onChange(event: any, input: any) {

      var allPromises = []; 
      var filesList = event.target.files;
     // console.log(filesList);
      for (let file of filesList) {
        allPromises.push(new Promise((resolve, reject)=>{
          var reader = new FileReader();
          const audioComponentObj = this;
          reader.onload = function(e) {
            resolve({
              name : file.name,
              file : this.result
            });
          }
          reader.readAsDataURL(file);
        }));
      }
      Promise.all(allPromises).then((fileList)=>{
        this.files = this.files.concat(fileList);
        if (this.audio.player.paused == true && this.audio.active== 0) { 
          this.loadAudio(0);
        }
        event.target.value = '';
      })
  }

  prevNextAudioChange(type)
  {
    if (type == 'prev') {
      if (this.audio.active > 0){
        this.audio.active -= 1; 
      }
    } else if (type == 'next') {
      if (this.audio.active < (this.files.length-1) ) {
        this.audio.active += 1;
      } else if(this.audio.loop == true) {
        this.audio.active = 0;
      }
      
    }
    this.loadAudio(this.audio.active);
  }

  removeFromPlayList(index) 
  {
    this.files.splice(index,1);
  }
  
}
