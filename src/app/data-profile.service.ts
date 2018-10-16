import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './dataProfile';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataProfileService {

  constructor(private httpClient: HttpClient) {
    console.log("Se cosumirá un servicio.");
  }

  getData() {
    return this.httpClient.get('https://la1.api.riotgames.com/lol/summoner/v3/summoners/by-name/XGameGamePlay0X?api_key=RGAPI-1e3dc4ef-bb80-4253-a368-6c0a51a31339');
  }

}
