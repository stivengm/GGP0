import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from './dataProfile';
import { Mmr } from './Mmr';
import { environment } from 'src/environments/environment';

import { from } from 'rxjs';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*", 'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT" })};

@Injectable({
  providedIn: 'root'
})
export class DataProfileService {

  constructor(private httpClient: HttpClient) {
  }

  // getConfig() {
  //   return this.httpClient.get<Profile[]>(environment.urlDataProfile, httpOptions);
  // }

  // getMmr() {
  //   return this.httpClient.get<Mmr>(environment.urlMMR, httpOptions);
  // }

  // getData() {
  //   return this.httpClient.get<Post>('http://lan.op.gg/summoner/ajax/mmr/summonerName=xgamegameplay0x');
  // }

}