import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nameProfile = '';
  lvlProfile : number;

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
    console.log("nameProfile:" + this.nameProfile);
  }

}
