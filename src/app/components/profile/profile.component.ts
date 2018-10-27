import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  sectionMmr = '';

  @Input() nameSummoner: any;
  searchKey = '';
  profileMMR: any;
  urlMMR = 'http://lan.op.gg/summoner/ajax/mmr/summonerName='

  classMarcoImage = '';
  classImageHTML = '';
  classImageHTMLFlex = '';
  nameProfile = '';
  lvlProfile: number;
  img = 'http://opgg-static.akamaized.net/images/profile_icons/profileIcon1588.jpg';

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

  dataProfileFlex = {
    queueType: "RANKED_FLEX_SR",
    hotStreak: false,
    wins: 4,
    veteran: false,
    losses: 6,
    playerOrTeamId: "7643235",
    leagueName: "Vi's Duelists",
    playerOrTeamName: "XGameGamePlay0X",
    inactive: false,
    rank: "IV",
    freshBlood: true,
    leagueId: "b9cf3850-fdb6-11e7-a79b-d4ae52a6fefd",
    tier: "SILVER",
    leaguePoints: 0
}

  profileConsumeExample = {
    profileIconId: 1588,
    name: "XGameGamePlay0X",
    summonerLevel: 99,
    accountId: 202220047,
    id: 7643235,
    revisionDate: 1539724335000
  }

  constructor() {
    
  }

  ngOnInit() {
    this.profileMMR = this.urlMMR + this.profileConsumeExample.name
    console.log(this.profileMMR);
    this.nameProfile = this.profileConsumeExample.name;
    this.lvlProfile = this.profileConsumeExample.summonerLevel;
    // MARCO IMAGE!
    if (this.dataProfileSoloQ.tier == 'GOLD') {
      this.classMarcoImage = 'marcoImageGold';
    }
    // SóloQ
    // BRONZE
    if (this.dataProfileSoloQ.tier == 'BRONZE') {
      if (this.dataProfileSoloQ.rank == 'I') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/bronze_1.png';
      }
      if (this.dataProfileSoloQ.rank == 'II') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/bronze_2.png';
      }
      if (this.dataProfileSoloQ.rank == 'III') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/bronze_3.png';
      }
      if (this.dataProfileSoloQ.rank == 'IV') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/bronze_4.png';
      }
      if (this.dataProfileSoloQ.rank == 'V') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/bronze_5.png';
      }
    }
    // SILVER!
    if (this.dataProfileSoloQ.tier == 'SILVER') {
      if (this.dataProfileSoloQ.rank == 'I') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/silver_1.png';
      }
      if (this.dataProfileSoloQ.rank == 'II') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/silver_2.png';
      }
      if (this.dataProfileSoloQ.rank == 'III') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/silver_3.png';
      }
      if (this.dataProfileSoloQ.rank == 'IV') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/silver_4.png';
      }
      if (this.dataProfileSoloQ.rank == 'V') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/silver_5.png';
      }
    }
    // GOLD!
    if (this.dataProfileSoloQ.tier == 'GOLD') {
      if (this.dataProfileSoloQ.rank == 'I') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/gold_1.png';
      }
      if (this.dataProfileSoloQ.rank == 'II') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/gold_2.png';
      }
      if (this.dataProfileSoloQ.rank == 'III') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/gold_3.png';
      }
      if (this.dataProfileSoloQ.rank == 'IV') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/gold_4.png';
      }
      if (this.dataProfileSoloQ.rank == 'V') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/gold_5.png';
      }
    }
    // PLATINUM 
    if (this.dataProfileSoloQ.tier == 'PLATINUM') {
      if (this.dataProfileSoloQ.rank == 'I') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/platinum_1.png';
      }
      if (this.dataProfileSoloQ.rank == 'II') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/platinum_2.png';
      }
      if (this.dataProfileSoloQ.rank == 'III') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/platinum_3.png';
      }
      if (this.dataProfileSoloQ.rank == 'IV') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/platinum_4.png';
      }
      if (this.dataProfileSoloQ.rank == 'V') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/platinum_5.png';
      }
    }
    // DIAMOND
    if (this.dataProfileSoloQ.tier == 'DIAMOND') {
      if (this.dataProfileSoloQ.rank == 'I') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/diamond_1.png';
      }
      if (this.dataProfileSoloQ.rank == 'II') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/diamond_2.png';
      }
      if (this.dataProfileSoloQ.rank == 'III') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/diamond_3.png';
      }
      if (this.dataProfileSoloQ.rank == 'IV') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/diamond_4.png';
      }
      if (this.dataProfileSoloQ.rank == 'V') {
        this.classImageHTML = 'http://opgg-static.akamaized.net/images/medals/diamond_5.png';
      }
    }

    // flex
    // SILVER!
    if (this.dataProfileFlex.tier == 'SILVER') {
      if (this.dataProfileSoloQ.rank == 'I') {
        this.classImageHTMLFlex = 'http://opgg-static.akamaized.net/images/medals/silver_1.png';
      }
      if (this.dataProfileSoloQ.rank == 'II') {
        this.classImageHTMLFlex = 'http://opgg-static.akamaized.net/images/medals/silver_2.png';
      }
      if (this.dataProfileSoloQ.rank == 'III') {
        this.classImageHTMLFlex = 'http://opgg-static.akamaized.net/images/medals/silver_3.png';
      }
      if (this.dataProfileSoloQ.rank == 'IV') {
        this.classImageHTMLFlex = 'http://opgg-static.akamaized.net/images/medals/silver_4.png';
      }
      if (this.dataProfileSoloQ.rank == 'V') {
        this.classImageHTMLFlex = 'http://opgg-static.akamaized.net/images/medals/silver_5.png';
      }
    }
  }

  mmr() {
    this.sectionMmr = `
    <iframe src="http://lan.op.gg/summoner/ajax/mmr/summonerName=XGameGamePlay0X" class="iframeMmr"></iframe>
    `;
  }

}
