import { Component,OnInit } from '@angular/core';

import {missionService} from './service/mission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [missionService]
})
export class AppComponent implements OnInit{

  constructor(
    private missionService : missionService
  ){

  }
  ngOnInit(){
    this.getFnc();
  }

  title = 'eve1012';
  menu = []
  async getFnc(){
    await this.missionService.getMission().subscribe((result)=>{
      console.log(result);
      this.menu = result;
    })
  }
  getMsg(event){
    this.title = event;
  }
}
