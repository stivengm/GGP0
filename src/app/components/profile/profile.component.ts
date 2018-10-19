import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  classImageHTML = '';
  nameProfile = '';
  lvlProfile: number;


  dataProfileSoloQ = {
    queueType: "RANKED_SOLO_5x5",
    hotStreak: false,
    wins: 93,
    veteran: false,
    losses: 81,
    playerOrTeamId: "7643235",
    leagueName: "Malphite's Spellbreakers",
    playerOrTeamName: "XGameGamePlay0X",
    inactive: false,
    rank: "V",
    freshBlood: false,
    leagueId: "34f3df20-03bd-11e8-bdba-c81f66cf1159",
    tier: "GOLD",
    leaguePoints: 39
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
    this.nameProfile = this.profileConsumeExample.name;
    this.lvlProfile = this.profileConsumeExample.summonerLevel;
    if (this.dataProfileSoloQ.tier == 'GOLD') {
      this.classImageHTML = 'gold';
    }
  }

}
