import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
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
    {championsId: 'diana', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'drmundo', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'draven', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'ekko', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'elise', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'evelynn', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'ezreal', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'fiddlesticks', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'fiora', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'fizz', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'galio', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'gangplank', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'garen', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'gnar', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'gragas', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'graves', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'hecarim', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'heimerdinger', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'illaoi', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'irelia', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'ivern', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'janna', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'jarvaniv', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'jax', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'jayce', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'jhin', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'jinx', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'kaisa', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'kalista', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'karma', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'karthus', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'kassadin', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'katarina', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'kayle', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'kayn', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'kennen', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'khazix', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'kindred', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'kled', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'kogmaw', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'leblanc', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'leesin', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'leona', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'lissandra', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'lucian', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'lulu', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'lux', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'malphite', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'malzahar', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'maokai', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'masteryi', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'missfortune', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'mordekaiser', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'morgana', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'nami', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'nasus', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'nautilus', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'nidalee', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'nocturne', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'nunu', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'olaf', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'oriana', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'ornn', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'pantheon', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'poppy', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'pyke', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'quinn', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'rakan', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'rammus', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'reksay', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'renekton', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'rengar', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'riven', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'rumble', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'ryze', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'sejuani', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'shaco', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'shen', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'shyvana', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'singed', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'sion', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'sivir', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'skarner', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'sona', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'soraka', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'swain', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'syndra', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'tahmkench', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'taliyah', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'talon', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'taric', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'teemo', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'thresh', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'tristana', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'trundle', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'tryndamere', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'twistedfate', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'twitch', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'udyr', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'urgot', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'varus', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'vayne', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'veigar', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'velkoz', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'vi', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'viktor', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'vladimir', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'volibear', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'warwick', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'wukong', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'xayah', rolPrincipal: 'ADC', RP: '', PI: ''},
    {championsId: 'xerath', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'xinzhao', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'yasuo', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'yoric', rolPrincipal: 'TOP', RP: '', PI: ''},
    {championsId: 'zac', rolPrincipal: 'JG', RP: '', PI: ''},
    {championsId: 'zed', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'ziggs', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'zilean', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'zoe', rolPrincipal: 'MID', RP: '', PI: ''},
    {championsId: 'zyra', rolPrincipal: 'SUPP', RP: '', PI: ''},
    {championsId: 'Neeko', rolPrincipal: 'MID', RP: '', PI: ''},
  ]

  constructor() { }

  ngOnInit() {
    document.getElementById('championIdRouter');
    console.log('aRouter: ' + document.getElementById('championIdRouter'));
    console.log('aClassRouter: ' + document.getElementsByClassName('championIdRouter'));
  }

}
