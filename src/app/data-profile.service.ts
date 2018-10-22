import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './dataProfile';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataProfileService {

  key = 'RGAPI-7443ce23-81a8-436b-9bf4-04988f09fc74';

  constructor(private httpClient: HttpClient) {
    // console.log("Se cosumirá un servicio.");
  }

  getData() {
    return this.httpClient.get<{Post}>('http://lan.op.gg/summoner/ajax/mmr/summonerName=xgamegameplay0x');
  }

}