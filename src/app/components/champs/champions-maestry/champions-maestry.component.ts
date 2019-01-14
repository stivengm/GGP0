import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions-maestry',
  templateUrl: './champions-maestry.component.html',
  styleUrls: ['./champions-maestry.component.scss']
})
export class ChampionsMaestryComponent implements OnInit {

  marcoMaestry = '';
  iconPlayer = '';

  championClassBG = '';

  idChampions = [];

  // Esto estará Mock

TestArray = [
  {
    championLevel: 7,
    chestGranted: true,
    championPoints: 216804,
    championPointsSinceLastLevel: 195204,
    playerId: 7643235,
    championPointsUntilNextLevel: 0,
    tokensEarned: 0,
    championId: 67,
    lastPlayTime: 1537829879000
  }
]

  champs = [
    'aatrox',
    'ahri',
    'akali',
    'alistar',
    'amumu',
    'anivia',
    'annie',
    'ashe',
    'aurelionsol',
    'azir',
    'brand',
    'braum',
    'caitlyn',
    'camile',
    'cassiopeia',
    'chogath',
    'corki',
    'darius',
    'diana',
    'drmundo',
    'draven',
    'ekko',
    'elise',
    'evelynn',
    'ezreal',
    'fiddlesticks',
    'fiora',
    'fizz',
    'galio',
    'gangplank',
    'garen',
    'gnar',
    'gragas',
    'graves',
    'hecarim',
    'heimerdinger',
    'illaoi',
    'irelia',
    'ivern',
    'janna',
    'jarvaniv',
    'jax',
    'jayce',
    'jhin',
    'jinx',
    'kaisa',
    'kalista',
    'karma',
    'karthus',
    'kassadin',
    'katarina',
    'kayle',
    'kayn',
    'kennen',
    'khazix',
    'kindred',
    'kled',
    'kogmaw',
    'leblanc',
    'leesin',
    'leona',
    'lissandra',
    'lucian',
    'lulu',
    'lux',
    'malphite',
    'malzahar',
    'maokai',
    'masteryi',
    'missfortune',
    'mordekaiser',
    'morgana',
    'nami',
    'nasus',
    'nautilus',
    'nidalee',
    'nocturne',
    'nunu',
    'olaf',
    'oriana',
    'ornn',
    'pantheon',
    'poppy',
    'pyke',
    'quinn',
    'rakan',
    'rammus',
    'reksay',
    'renekton',
    'rengar',
    'riven',
    'rumble',
    'ryze',
    'sejuani',
    'shaco',
    'shen',
    'shyvana',
    'singed',
    'sion',
    'sivir',
    'skarner',
    'sona',
    'soraka',
    'swain',
    'syndra',
    'tahmkench',
    'taliyah',
    'talon',
    'taric',
    'teemo',
    'thresh',
    'tristana',
    'trundle',
    'tryndamere',
    'twistedfate',
    'twitch',
    'udyr',
    'urgot',
    'varus',
    'vayne',
    'veigar',
    'velkoz',
    'vi',
    'viktor',
    'vladimir',
    'volibear',
    'warwick',
    'wukong',
    'xayah',
    'xerath',
    'xinzhao',
    'yasuo',
    'yoric',
    'zac',
    'zed',
    'ziggs',
    'zilean',
    'zoe',
    'zyra',
    'neeko'
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

  constructor() { }

  ngOnInit() {
    // Colocar For para la lista de campeones de maestría 

    // ifChampsId
    // if (this.champs[1] = 'Vayne') {
    //   this.championClassBG = 'vayne'
    // }
    // if (this.champs[2] = 'Vayne') {
    //   this.championClassBG = 'ashe'
    // }

    this.marcoMaestry = 'http://static.lolskill.net/img/championmastery/border/' + this.championsMaestry.championLevel + '.png';

    if (this.championsMaestry.championLevel == 7) {
      this.marcoMaestry == 'http://static.lolskill.net/img/championmastery/border/7.png';
    }
    if (this.championsMaestry.championLevel == 6) {
      this.marcoMaestry == 'http://static.lolskill.net/img/championmastery/border/6.png';
    }
    if (this.championsMaestry.championLevel == 5) {
      this.marcoMaestry == 'http://static.lolskill.net/img/championmastery/border/5.png';
    }
    if (this.championsMaestry.championLevel == 4) {
      this.marcoMaestry == 'http://static.lolskill.net/img/championmastery/border/4.png';
    }
    if (this.championsMaestry.championLevel == 3) {
      this.marcoMaestry == 'http://static.lolskill.net/img/championmastery/border/3.png';
    }
    if (this.championsMaestry.championLevel == 2) {
      this.marcoMaestry == 'http://static.lolskill.net/img/championmastery/border/2.png';
    }
    if (this.championsMaestry.championLevel == 1) {
      this.marcoMaestry == 'http://static.lolskill.net/img/championmastery/border/1.png';
    }
  }

}
