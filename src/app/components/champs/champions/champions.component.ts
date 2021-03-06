import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  testInnerHTML = "";
  champions = [
    { championsId: 'aatrox', rolPrincipal: 'TOP', RP: '975', EA: '6300', history: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae libero aliquid ipsum, sequi placeat, qui tenetur vero iste quasi, quisquam soluta! Delectus quaerat error, mollitia iste ipsum id exercitationem rem?', urlChampion: '/aatrox' },
    { championsId: 'ahri', rolPrincipal: 'MID', RP: '880', EA: '4800', history: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae libero aliquid ipsum, sequi placeat, qui tenetur vero iste quasi, quisquam soluta! Delectus quaerat error, mollitia iste ipsum id exercitationem rem?', urlChampion: '/ahri' },
    { championsId: 'akali', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'alistar', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'amumu', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'anivia', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'annie', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'ashe', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'aurelionsol', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'azir', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'brand', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'braum', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'caitlyn', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'camile', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'cassiopeia', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'chogath', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'corki', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'darius', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'diana', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'drmundo', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'draven', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'ekko', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'elise', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'evelynn', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'ezreal', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'fiddlesticks', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'fiora', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'fizz', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'galio', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'gangplank', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'garen', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'gnar', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'gragas', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'graves', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'hecarim', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'heimerdinger', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'illaoi', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'irelia', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'ivern', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'janna', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'jarvaniv', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'jax', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'jayce', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'jhin', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'jinx', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'kaisa', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'kalista', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'karma', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'karthus', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'kassadin', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'katarina', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'kayle', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'kayn', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'kennen', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'khazix', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'kindred', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'kled', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'kogmaw', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'leblanc', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'leesin', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'leona', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'lissandra', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'lucian', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'lulu', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'lux', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'malphite', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'malzahar', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'maokai', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'masteryi', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'missfortune', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'mordekaiser', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'morgana', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'nami', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'nasus', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'nautilus', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'nidalee', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'nocturne', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'nunu', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'olaf', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'oriana', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'ornn', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'pantheon', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'poppy', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'pyke', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'quinn', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'rakan', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'rammus', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'reksay', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'renekton', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'rengar', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'riven', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'rumble', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'ryze', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'sejuani', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'shaco', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'shen', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'shyvana', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'singed', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'sion', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'sivir', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'skarner', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'sona', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'soraka', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'swain', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'syndra', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'tahmkench', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'taliyah', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'talon', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'taric', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'teemo', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'thresh', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'tristana', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'trundle', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'tryndamere', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'twistedfate', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'twitch', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'udyr', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'urgot', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'varus', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'vayne', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'veigar', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'velkoz', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'vi', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'viktor', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'vladimir', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'volibear', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'warwick', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'wukong', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'xayah', rolPrincipal: 'ADC', RP: '', EA: '' },
    { championsId: 'xerath', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'xinzhao', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'yasuo', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'yoric', rolPrincipal: 'TOP', RP: '', EA: '' },
    { championsId: 'zac', rolPrincipal: 'JG', RP: '', EA: '' },
    { championsId: 'zed', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'ziggs', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'zilean', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'zoe', rolPrincipal: 'MID', RP: '', EA: '' },
    { championsId: 'zyra', rolPrincipal: 'SUPP', RP: '', EA: '' },
    { championsId: 'neeko', rolPrincipal: 'MID', RP: '', EA: '' },
  ]
  ChampionProfile = '';
  History = '';
  passive = '';
  habilidadQ = '';
  habilidadW = '';
  habilidadE = '';
  habilidadR = '';
  constructor() { }

  ngOnInit() {
    this.testInnerHTML = "<div class='Hola'>Hola Mundo.</div>";
  }

  goProfile() {
    this.champions.forEach(element => {
      console.log(element);
      if (element.urlChampion = '/aatrox') {
        document.getElementById("sectionChampions").style.display = 'none';
        this.History = element.history;
        this.ChampionProfile === '/aatrox';
        this.passive = 'passiveAatrox';
        this.habilidadQ = 'aatroxQ';
        this.habilidadW = 'aatroxW';
        this.habilidadE = 'aatroxE';
        this.habilidadR = 'aatroxR';
      }
      if (element.urlChampion === '/ahri') {
        console.log(window.URL)
        document.getElementById("sectionChampions").style.display = 'none';
        this.ChampionProfile = 'ahri';
        this.passive = 'passiveAhri';
        this.habilidadQ = 'ahriQ';
        this.habilidadW = 'ahriW';
        this.habilidadE = 'ahriE';
        this.habilidadR = 'ahriR';
      }
    });
  }

  back() {
    document.getElementById("sectionChampions").style.display = 'block';
    document.getElementById("sectionProfileChampions").style.display = 'none';
  }

}
