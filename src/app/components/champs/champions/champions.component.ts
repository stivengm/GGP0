import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions = [
    {championsId: 'aatrox', rolPrincipal : 'TOP', RP: '975', PI: '6300'},
    {championsId: 'ahri', rolPrincipal : 'MID', RP: '880', PI: '4800'},
    {championsId: 'akali', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'alistar', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'amumu', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'anivia', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'annie', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'ashe', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'aurelionsol', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'azir', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'brand', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'braum', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'caitlyn', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'camile', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'cassiopeia', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'chogath', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'corki', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'darius', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'diana'},
    {championsId: 'drmundo'},
    {championsId: 'draven'},
    {championsId: 'ekko'},
    {championsId: 'elise'},
    {championsId: 'evelynn'},
    {championsId: 'ezreal'},
    {championsId: 'fiddlesticks'},
    {championsId: 'fiora'},
    {championsId: 'fizz'},
    {championsId: 'galio'},
    {championsId: 'gangplank'},
    {championsId: 'garen'},
    {championsId: 'gnar'},
    {championsId: 'gragas'},
    {championsId: 'graves'},
    {championsId: 'hecarim'},
    {championsId: 'heimerdinger'},
    {championsId: 'illaoi'},
    {championsId: 'irelia'},
    {championsId: 'ivern'},
    {championsId: 'janna'},
    {championsId: 'jarvaniv'},
    {championsId: 'jax'},
    {championsId: 'jayce'},
    {championsId: 'jhin'},
    {championsId: 'jinx'},
    {championsId: 'kaisa'},
    {championsId: 'kalista'},
    {championsId: 'karma'},
    {championsId: 'karthus'},
    {championsId: 'kassadin'},
    {championsId: 'katarina'},
    {championsId: 'kayle'},
    {championsId: 'kayn'},
    {championsId: 'kennen'},
    {championsId: 'khazix'},
    {championsId: 'kindred'},
    {championsId: 'kled'},
    {championsId: 'kogmaw'},
    {championsId: 'leblanc'},
    {championsId: 'leesin'},
    {championsId: 'leona'},
    {championsId: 'lissandra'},
    {championsId: 'lucian'},
    {championsId: 'lulu'},
    {championsId: 'lux'},
    {championsId: 'malphite'},
    {championsId: 'malzahar'},
    {championsId: 'maokai'},
    {championsId: 'masteryi'},
    {championsId: 'missfortune'},
    {championsId: 'mordekaiser'},
    {championsId: 'morgana'},
    {championsId: 'nami'},
    {championsId: 'nasus'},
    {championsId: 'nautilus'},
    {championsId: 'nidalee'},
    {championsId: 'nocturne'},
    {championsId: 'nunu'},
    {championsId: 'olaf'},
    {championsId: 'oriana'},
    {championsId: 'ornn'},
    {championsId: 'pantheon'},
    {championsId: 'poppy'},
    {championsId: 'pyke'},
    {championsId: 'quinn'},
    {championsId: 'rakan'},
    {championsId: 'rammus'},
    {championsId: 'reksay'},
    {championsId: 'renekton'},
    {championsId: 'rengar'},
    {championsId: 'riven'},
    {championsId: 'rumble'},
    {championsId: 'ryze'},
    {championsId: 'sejuani'},
    {championsId: 'shaco'},
    {championsId: 'shen'},
    {championsId: 'shyvana'},
    {championsId: 'singed'},
    {championsId: 'sion'},
    {championsId: 'sivir'},
    {championsId: 'skarner'},
    {championsId: 'sona'},
    {championsId: 'soraka'},
    {championsId: 'swain'},
    {championsId: 'syndra'},
    {championsId: 'tahmkench'},
    {championsId: 'taliyah'},
    {championsId: 'talon'},
    {championsId: 'taric'},
    {championsId: 'teemo'},
    {championsId: 'thresh'},
    {championsId: 'tristana'},
    {championsId: 'trundle'},
    {championsId: 'tryndamere'},
    {championsId: 'twistedfate'},
    {championsId: 'twitch'},
    {championsId: 'udyr'},
    {championsId: 'urgot'},
    {championsId: 'varus'},
    {championsId: 'vayne'},
    {championsId: 'veigar'},
    {championsId: 'velkoz'},
    {championsId: 'vi'},
    {championsId: 'viktor'},
    {championsId: 'vladimir'},
    {championsId: 'volibear'},
    {championsId: 'warwick'},
    {championsId: 'wukong'},
    {championsId: 'xayah'},
    {championsId: 'xerath'},
    {championsId: 'xinzhao'},
    {championsId: 'yasuo'},
    {championsId: 'yoric'},
    {championsId: 'zac'},
    {championsId: 'zed'},
    {championsId: 'ziggs'},
    {championsId: 'zilean'},
    {championsId: 'zoe'},
    {championsId: 'zyra'},
  ]

  constructor() { }

  ngOnInit() {
    document.getElementById('championIdRouter');
    console.log('aRouter: ' + document.getElementById('championIdRouter'));
    console.log('aClassRouter: ' + document.getElementsByClassName('championIdRouter'));
  }

}
