import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champs',
  templateUrl: './champs.component.html',
  styleUrls: ['./champs.component.css']
})
export class ChampsComponent implements OnInit {

  marcoMaestry = '';
  profile = [
    { "profileIconId": 1588, "name": "XGameGamePlay0X", "summonerLevel": 99, "accountId": 202220047, "id": 7643235, "revisionDate": 1539724335000 }
  ]

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


  profileConsumeExample = {
    profileIconId: 1588,
    name: "XGameGamePlay0X",
    summonerLevel: 99,
    accountId: 202220047,
    id: 7643235,
    revisionDate: 1539724335000
  }

  constructor() { }

  ngOnInit() {
    // console.log(this.profile);
    if (this.championsMaestry.championLevel == 7) {
      this.marcoMaestry == 'http://static.lolskill.net/img/championmastery/border/7.png';
    }
  }

}
