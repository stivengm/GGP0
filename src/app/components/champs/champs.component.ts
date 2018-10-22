import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champs',
  templateUrl: './champs.component.html',
  styleUrls: ['./champs.component.css']
})
export class ChampsComponent implements OnInit {

  profile = [
    { "profileIconId": 1588, "name": "XGameGamePlay0X", "summonerLevel": 99, "accountId": 202220047, "id": 7643235, "revisionDate": 1539724335000 }
  ]
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
  }

}
