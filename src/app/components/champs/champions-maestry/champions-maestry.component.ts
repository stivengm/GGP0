import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions-maestry',
  templateUrl: './champions-maestry.component.html',
  styleUrls: ['./champions-maestry.component.css']
})
export class ChampionsMaestryComponent implements OnInit {

  marcoMaestry = '';
  iconPlayer = '';

  championClassBG = '';

  idChampions = [];

  championsMaestry = {
    championLevel: 7,
    chestGranted: true,
    championPoints: 215661,
    championPointsSinceLastLevel: 194061,
    playerId: 7643235,
    championPointsUntilNextLevel: 0,
    tokensEarned: 0,
    championId: 67,
    lastPlayTime: 1537829879000
  }

  constructor() { }

  ngOnInit() {


    // Colocar For para la lista de campeones de maestría 
    
    // ifChampsId
    if (this.championsMaestry.championId == 67) {
      this.championClassBG = 'vayne'
    }
    if (this.championsMaestry.championId == 67) {
      this.championClassBG = 'ashe'
    }

    this.marcoMaestry = 'http://static.lolskill.net/img/championmastery/border/'+this.championsMaestry.championLevel+'.png';

    // if (this.championsMaestry.championLevel == 7) {
    //   this.marcoMaestry == 'http://static.lolskill.net/img/championmastery/border/7.png';
    //   // ifMock
    //   if (this.championsMaestry.championId == 67) {
    //     this.iconPlayer = '';
    //   }
    // }
  }

}
