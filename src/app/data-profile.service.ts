import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './dataProfile';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataProfileService {

  key = 'RGAPI-05f1f720-6554-4f3e-a25d-4f0007431e12';

  constructor(private httpClient: HttpClient) {
    console.log("Se cosumirá un servicio.");
  }

  getData() {
    return this.httpClient.get<{Post}>('https://la1.api.riotgames.com/lol/summoner/v3/summoners/by-name/XGameGamePlay0X?api_key='+ this.key);
  }

}