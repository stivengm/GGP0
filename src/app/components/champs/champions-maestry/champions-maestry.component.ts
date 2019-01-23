import { Component, OnInit } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-champions-maestry',
  templateUrl: './champions-maestry.component.html',
  styleUrls: ['./champions-maestry.component.scss']
})
export class ChampionsMaestryComponent implements OnInit {
  championPoint: number;
  marcoMaestry = '';
  iconPlayer = '';
  championClassBG = '';

  idChampions = [];

  // Esto estará Mock

  TestArray = [
    {
      "championLevel": 7,
      "chestGranted": true,
      "championPoints": 216804,
      "championPointsSinceLastLevel": 195204,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 67,
      "lastPlayTime": 1537829879000
    },
    {
      "championLevel": 7,
      "chestGranted": true,
      "championPoints": 126342,
      "championPointsSinceLastLevel": 104742,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 64,
      "lastPlayTime": 1537839277000
    },
    {
      "championLevel": 7,
      "chestGranted": true,
      "championPoints": 125930,
      "championPointsSinceLastLevel": 104330,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 154,
      "lastPlayTime": 1536539185000
    },
    {
      "championLevel": 7,
      "chestGranted": true,
      "championPoints": 117911,
      "championPointsSinceLastLevel": 96311,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 22,
      "lastPlayTime": 1537832526000
    },
    {
      "championLevel": 7,
      "chestGranted": true,
      "championPoints": 116344,
      "championPointsSinceLastLevel": 94744,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 202,
      "lastPlayTime": 1537656288000
    },
    {
      "championLevel": 7,
      "chestGranted": true,
      "championPoints": 102504,
      "championPointsSinceLastLevel": 80904,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 1,
      "lastPlayTime": 1537323826000
    },
    {
      "championLevel": 7,
      "chestGranted": true,
      "championPoints": 84681,
      "championPointsSinceLastLevel": 63081,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 157,
      "lastPlayTime": 1534092424000
    },
    {
      "championLevel": 7,
      "chestGranted": true,
      "championPoints": 82810,
      "championPointsSinceLastLevel": 61210,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 55,
      "lastPlayTime": 1537235708000
    },
    {
      "championLevel": 7,
      "chestGranted": false,
      "championPoints": 59236,
      "championPointsSinceLastLevel": 37636,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 245,
      "lastPlayTime": 1535134585000
    },
    {
      "championLevel": 7,
      "chestGranted": true,
      "championPoints": 57106,
      "championPointsSinceLastLevel": 35506,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 133,
      "lastPlayTime": 1537933199000
    },
    {
      "championLevel": 6,
      "chestGranted": true,
      "championPoints": 52941,
      "championPointsSinceLastLevel": 31341,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 7,
      "lastPlayTime": 1531939225000
    },
    {
      "championLevel": 6,
      "chestGranted": false,
      "championPoints": 49976,
      "championPointsSinceLastLevel": 28376,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 2,
      "championId": 24,
      "lastPlayTime": 1537837257000
    },
    {
      "championLevel": 6,
      "chestGranted": true,
      "championPoints": 47836,
      "championPointsSinceLastLevel": 26236,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 53,
      "lastPlayTime": 1534813122000
    },
    {
      "championLevel": 6,
      "chestGranted": false,
      "championPoints": 38160,
      "championPointsSinceLastLevel": 16560,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 17,
      "lastPlayTime": 1488680493000
    },
    {
      "championLevel": 5,
      "chestGranted": false,
      "championPoints": 34181,
      "championPointsSinceLastLevel": 12581,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 25,
      "lastPlayTime": 1537210061000
    },
    {
      "championLevel": 6,
      "chestGranted": true,
      "championPoints": 33293,
      "championPointsSinceLastLevel": 11693,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 1,
      "championId": 23,
      "lastPlayTime": 1537671439000
    },
    {
      "championLevel": 5,
      "chestGranted": true,
      "championPoints": 32274,
      "championPointsSinceLastLevel": 10674,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 12,
      "lastPlayTime": 1537317844000
    },
    {
      "championLevel": 6,
      "chestGranted": false,
      "championPoints": 31273,
      "championPointsSinceLastLevel": 9673,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 11,
      "lastPlayTime": 1515978146000
    },
    {
      "championLevel": 6,
      "chestGranted": false,
      "championPoints": 30842,
      "championPointsSinceLastLevel": 9242,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 84,
      "lastPlayTime": 1534048506000
    },
    {
      "championLevel": 5,
      "chestGranted": false,
      "championPoints": 30123,
      "championPointsSinceLastLevel": 8523,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 1,
      "championId": 427,
      "lastPlayTime": 1498009884000
    },
    {
      "championLevel": 5,
      "chestGranted": true,
      "championPoints": 29453,
      "championPointsSinceLastLevel": 7853,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 1,
      "championId": 222,
      "lastPlayTime": 1534644095000
    },
    {
      "championLevel": 5,
      "chestGranted": false,
      "championPoints": 24743,
      "championPointsSinceLastLevel": 3143,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 1,
      "championId": 36,
      "lastPlayTime": 1498676407000
    },
    {
      "championLevel": 5,
      "chestGranted": false,
      "championPoints": 23487,
      "championPointsSinceLastLevel": 1887,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 107,
      "lastPlayTime": 1530565787000
    },
    {
      "championLevel": 5,
      "chestGranted": false,
      "championPoints": 22300,
      "championPointsSinceLastLevel": 700,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 86,
      "lastPlayTime": 1480704506000
    },
    {
      "championLevel": 5,
      "chestGranted": false,
      "championPoints": 21648,
      "championPointsSinceLastLevel": 48,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 0,
      "tokensEarned": 0,
      "championId": 89,
      "lastPlayTime": 1537659083000
    },
    {
      "championLevel": 4,
      "chestGranted": true,
      "championPoints": 21537,
      "championPointsSinceLastLevel": 8937,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 63,
      "tokensEarned": 0,
      "championId": 32,
      "lastPlayTime": 1532140282000
    },
    {
      "championLevel": 4,
      "chestGranted": true,
      "championPoints": 21499,
      "championPointsSinceLastLevel": 8899,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 101,
      "tokensEarned": 0,
      "championId": 412,
      "lastPlayTime": 1536535607000
    },
    {
      "championLevel": 4,
      "chestGranted": true,
      "championPoints": 20251,
      "championPointsSinceLastLevel": 7651,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1349,
      "tokensEarned": 0,
      "championId": 45,
      "lastPlayTime": 1537901970000
    },
    {
      "championLevel": 4,
      "chestGranted": true,
      "championPoints": 19872,
      "championPointsSinceLastLevel": 7272,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1728,
      "tokensEarned": 0,
      "championId": 54,
      "lastPlayTime": 1535295829000
    },
    {
      "championLevel": 4,
      "chestGranted": false,
      "championPoints": 19394,
      "championPointsSinceLastLevel": 6794,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2206,
      "tokensEarned": 0,
      "championId": 16,
      "lastPlayTime": 1515901180000
    },
    {
      "championLevel": 4,
      "chestGranted": false,
      "championPoints": 19345,
      "championPointsSinceLastLevel": 6745,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2255,
      "tokensEarned": 0,
      "championId": 110,
      "lastPlayTime": 1534640978000
    },
    {
      "championLevel": 4,
      "chestGranted": true,
      "championPoints": 18477,
      "championPointsSinceLastLevel": 5877,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3123,
      "tokensEarned": 0,
      "championId": 40,
      "lastPlayTime": 1537146480000
    },
    {
      "championLevel": 4,
      "chestGranted": false,
      "championPoints": 17037,
      "championPointsSinceLastLevel": 4437,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 4563,
      "tokensEarned": 0,
      "championId": 420,
      "lastPlayTime": 1523902783000
    },
    {
      "championLevel": 4,
      "chestGranted": false,
      "championPoints": 16717,
      "championPointsSinceLastLevel": 4117,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 4883,
      "tokensEarned": 0,
      "championId": 27,
      "lastPlayTime": 1529819005000
    },
    {
      "championLevel": 4,
      "chestGranted": true,
      "championPoints": 13901,
      "championPointsSinceLastLevel": 1301,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 7699,
      "tokensEarned": 0,
      "championId": 29,
      "lastPlayTime": 1528035929000
    },
    {
      "championLevel": 4,
      "chestGranted": false,
      "championPoints": 12735,
      "championPointsSinceLastLevel": 135,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 8865,
      "tokensEarned": 0,
      "championId": 18,
      "lastPlayTime": 1507656038000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 11676,
      "championPointsSinceLastLevel": 5676,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 924,
      "tokensEarned": 0,
      "championId": 28,
      "lastPlayTime": 1531333686000
    },
    {
      "championLevel": 3,
      "chestGranted": true,
      "championPoints": 10992,
      "championPointsSinceLastLevel": 4992,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1608,
      "tokensEarned": 0,
      "championId": 80,
      "lastPlayTime": 1533749674000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 10944,
      "championPointsSinceLastLevel": 4944,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1656,
      "tokensEarned": 0,
      "championId": 10,
      "lastPlayTime": 1502813459000
    },
    {
      "championLevel": 3,
      "chestGranted": true,
      "championPoints": 10118,
      "championPointsSinceLastLevel": 4118,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2482,
      "tokensEarned": 0,
      "championId": 51,
      "lastPlayTime": 1537898793000
    },
    {
      "championLevel": 3,
      "chestGranted": true,
      "championPoints": 9660,
      "championPointsSinceLastLevel": 3660,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2940,
      "tokensEarned": 0,
      "championId": 15,
      "lastPlayTime": 1537745354000
    },
    {
      "championLevel": 3,
      "chestGranted": true,
      "championPoints": 9479,
      "championPointsSinceLastLevel": 3479,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3121,
      "tokensEarned": 0,
      "championId": 81,
      "lastPlayTime": 1537653921000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 9388,
      "championPointsSinceLastLevel": 3388,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3212,
      "tokensEarned": 0,
      "championId": 19,
      "lastPlayTime": 1496807205000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 9315,
      "championPointsSinceLastLevel": 3315,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3285,
      "tokensEarned": 0,
      "championId": 122,
      "lastPlayTime": 1536511352000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 8982,
      "championPointsSinceLastLevel": 2982,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3618,
      "tokensEarned": 0,
      "championId": 5,
      "lastPlayTime": 1502661918000
    },
    {
      "championLevel": 3,
      "chestGranted": true,
      "championPoints": 8852,
      "championPointsSinceLastLevel": 2852,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3748,
      "tokensEarned": 0,
      "championId": 497,
      "lastPlayTime": 1529982831000
    },
    {
      "championLevel": 3,
      "chestGranted": true,
      "championPoints": 8373,
      "championPointsSinceLastLevel": 2373,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 4227,
      "tokensEarned": 0,
      "championId": 236,
      "lastPlayTime": 1534718389000
    },
    {
      "championLevel": 3,
      "chestGranted": true,
      "championPoints": 8022,
      "championPointsSinceLastLevel": 2022,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 4578,
      "tokensEarned": 0,
      "championId": 104,
      "lastPlayTime": 1532457014000
    },
    {
      "championLevel": 3,
      "chestGranted": true,
      "championPoints": 7904,
      "championPointsSinceLastLevel": 1904,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 4696,
      "tokensEarned": 0,
      "championId": 78,
      "lastPlayTime": 1536531740000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 7469,
      "championPointsSinceLastLevel": 1469,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 5131,
      "tokensEarned": 0,
      "championId": 75,
      "lastPlayTime": 1502583924000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 7458,
      "championPointsSinceLastLevel": 1458,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 5142,
      "tokensEarned": 0,
      "championId": 35,
      "lastPlayTime": 1529000663000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 7024,
      "championPointsSinceLastLevel": 1024,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 5576,
      "tokensEarned": 0,
      "championId": 8,
      "lastPlayTime": 1532024691000
    },
    {
      "championLevel": 3,
      "chestGranted": true,
      "championPoints": 6828,
      "championPointsSinceLastLevel": 828,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 5772,
      "tokensEarned": 0,
      "championId": 44,
      "lastPlayTime": 1537320543000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 6688,
      "championPointsSinceLastLevel": 688,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 5912,
      "tokensEarned": 0,
      "championId": 14,
      "lastPlayTime": 1528338396000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 6158,
      "championPointsSinceLastLevel": 158,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 6442,
      "tokensEarned": 0,
      "championId": 21,
      "lastPlayTime": 1528677877000
    },
    {
      "championLevel": 3,
      "chestGranted": false,
      "championPoints": 6002,
      "championPointsSinceLastLevel": 2,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 6598,
      "tokensEarned": 0,
      "championId": 92,
      "lastPlayTime": 1526704582000
    },
    {
      "championLevel": 2,
      "chestGranted": true,
      "championPoints": 4759,
      "championPointsSinceLastLevel": 2959,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1241,
      "tokensEarned": 0,
      "championId": 9,
      "lastPlayTime": 1498702032000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 4689,
      "championPointsSinceLastLevel": 2889,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1311,
      "tokensEarned": 0,
      "championId": 106,
      "lastPlayTime": 1498415478000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 4403,
      "championPointsSinceLastLevel": 2603,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1597,
      "tokensEarned": 0,
      "championId": 37,
      "lastPlayTime": 1536537123000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 4235,
      "championPointsSinceLastLevel": 2435,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1765,
      "tokensEarned": 0,
      "championId": 99,
      "lastPlayTime": 1537938347000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 4202,
      "championPointsSinceLastLevel": 2402,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1798,
      "tokensEarned": 0,
      "championId": 74,
      "lastPlayTime": 1523904811000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 4168,
      "championPointsSinceLastLevel": 2368,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1832,
      "tokensEarned": 0,
      "championId": 429,
      "lastPlayTime": 1529433720000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 3952,
      "championPointsSinceLastLevel": 2152,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2048,
      "tokensEarned": 0,
      "championId": 498,
      "lastPlayTime": 1511465574000
    },
    {
      "championLevel": 2,
      "chestGranted": true,
      "championPoints": 3837,
      "championPointsSinceLastLevel": 2037,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2163,
      "tokensEarned": 0,
      "championId": 238,
      "lastPlayTime": 1533926692000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 3682,
      "championPointsSinceLastLevel": 1882,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2318,
      "tokensEarned": 0,
      "championId": 77,
      "lastPlayTime": 1530207629000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 3671,
      "championPointsSinceLastLevel": 1871,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2329,
      "tokensEarned": 0,
      "championId": 120,
      "lastPlayTime": 1506713396000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 3305,
      "championPointsSinceLastLevel": 1505,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2695,
      "tokensEarned": 0,
      "championId": 62,
      "lastPlayTime": 1493089288000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 3281,
      "championPointsSinceLastLevel": 1481,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2719,
      "tokensEarned": 0,
      "championId": 142,
      "lastPlayTime": 1528673517000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 3271,
      "championPointsSinceLastLevel": 1471,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2729,
      "tokensEarned": 0,
      "championId": 56,
      "lastPlayTime": 1488478348000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 3050,
      "championPointsSinceLastLevel": 1250,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2950,
      "tokensEarned": 0,
      "championId": 266,
      "lastPlayTime": 1496370027000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 3006,
      "championPointsSinceLastLevel": 1206,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 2994,
      "tokensEarned": 0,
      "championId": 114,
      "lastPlayTime": 1512751242000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 2988,
      "championPointsSinceLastLevel": 1188,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3012,
      "tokensEarned": 0,
      "championId": 203,
      "lastPlayTime": 1524937784000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 2976,
      "championPointsSinceLastLevel": 1176,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3024,
      "tokensEarned": 0,
      "championId": 121,
      "lastPlayTime": 1527042981000
    },
    {
      "championLevel": 2,
      "chestGranted": true,
      "championPoints": 2734,
      "championPointsSinceLastLevel": 934,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3266,
      "tokensEarned": 0,
      "championId": 98,
      "lastPlayTime": 1537935872000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 2674,
      "championPointsSinceLastLevel": 874,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3326,
      "tokensEarned": 0,
      "championId": 115,
      "lastPlayTime": 1500135012000
    },
    {
      "championLevel": 2,
      "chestGranted": true,
      "championPoints": 2532,
      "championPointsSinceLastLevel": 732,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3468,
      "tokensEarned": 0,
      "championId": 13,
      "lastPlayTime": 1534642848000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 2161,
      "championPointsSinceLastLevel": 361,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3839,
      "tokensEarned": 0,
      "championId": 3,
      "lastPlayTime": 1500600007000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 2078,
      "championPointsSinceLastLevel": 278,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 3922,
      "tokensEarned": 0,
      "championId": 119,
      "lastPlayTime": 1532972961000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 1987,
      "championPointsSinceLastLevel": 187,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 4013,
      "tokensEarned": 0,
      "championId": 79,
      "lastPlayTime": 1526868576000
    },
    {
      "championLevel": 2,
      "chestGranted": false,
      "championPoints": 1952,
      "championPointsSinceLastLevel": 152,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 4048,
      "tokensEarned": 0,
      "championId": 26,
      "lastPlayTime": 1534184174000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 1529,
      "championPointsSinceLastLevel": 1529,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 271,
      "tokensEarned": 0,
      "championId": 240,
      "lastPlayTime": 1496803152000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 1392,
      "championPointsSinceLastLevel": 1392,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 408,
      "tokensEarned": 0,
      "championId": 76,
      "lastPlayTime": 1532976417000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 1301,
      "championPointsSinceLastLevel": 1301,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 499,
      "tokensEarned": 0,
      "championId": 4,
      "lastPlayTime": 1513017227000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 1120,
      "championPointsSinceLastLevel": 1120,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 680,
      "tokensEarned": 0,
      "championId": 68,
      "lastPlayTime": 1477846088000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 1089,
      "championPointsSinceLastLevel": 1089,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 711,
      "tokensEarned": 0,
      "championId": 57,
      "lastPlayTime": 1530564362000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 1027,
      "championPointsSinceLastLevel": 1027,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 773,
      "tokensEarned": 0,
      "championId": 117,
      "lastPlayTime": 1537834982000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 954,
      "championPointsSinceLastLevel": 954,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 846,
      "tokensEarned": 0,
      "championId": 85,
      "lastPlayTime": 1546541997000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 826,
      "championPointsSinceLastLevel": 826,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 974,
      "tokensEarned": 0,
      "championId": 432,
      "lastPlayTime": 1533694651000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 824,
      "championPointsSinceLastLevel": 824,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 976,
      "tokensEarned": 0,
      "championId": 90,
      "lastPlayTime": 1499912192000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 810,
      "championPointsSinceLastLevel": 810,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 990,
      "tokensEarned": 0,
      "championId": 82,
      "lastPlayTime": 1530315366000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 777,
      "championPointsSinceLastLevel": 777,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1023,
      "tokensEarned": 0,
      "championId": 20,
      "lastPlayTime": 1476402302000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 773,
      "championPointsSinceLastLevel": 773,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1027,
      "tokensEarned": 0,
      "championId": 48,
      "lastPlayTime": 1451414982000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 762,
      "championPointsSinceLastLevel": 762,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1038,
      "tokensEarned": 0,
      "championId": 555,
      "lastPlayTime": 1528857345000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 643,
      "championPointsSinceLastLevel": 643,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1157,
      "tokensEarned": 0,
      "championId": 61,
      "lastPlayTime": 1544554331000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 616,
      "championPointsSinceLastLevel": 616,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1184,
      "tokensEarned": 0,
      "championId": 38,
      "lastPlayTime": 1517425362000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 590,
      "championPointsSinceLastLevel": 590,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1210,
      "tokensEarned": 0,
      "championId": 41,
      "lastPlayTime": 1529970723000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 576,
      "championPointsSinceLastLevel": 576,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1224,
      "tokensEarned": 0,
      "championId": 31,
      "lastPlayTime": 1496792981000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 561,
      "championPointsSinceLastLevel": 561,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1239,
      "tokensEarned": 0,
      "championId": 105,
      "lastPlayTime": 1528043297000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 451,
      "championPointsSinceLastLevel": 451,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1349,
      "tokensEarned": 0,
      "championId": 111,
      "lastPlayTime": 1536025198000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 358,
      "championPointsSinceLastLevel": 358,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1442,
      "tokensEarned": 0,
      "championId": 102,
      "lastPlayTime": 1489430215000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 347,
      "championPointsSinceLastLevel": 347,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1453,
      "tokensEarned": 0,
      "championId": 254,
      "lastPlayTime": 1541128585000
    },
    {
      "championLevel": 1,
      "chestGranted": true,
      "championPoints": 347,
      "championPointsSinceLastLevel": 347,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1453,
      "tokensEarned": 0,
      "championId": 96,
      "lastPlayTime": 1530145793000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 322,
      "championPointsSinceLastLevel": 322,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1478,
      "tokensEarned": 0,
      "championId": 33,
      "lastPlayTime": 1516388272000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 312,
      "championPointsSinceLastLevel": 312,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1488,
      "tokensEarned": 0,
      "championId": 43,
      "lastPlayTime": 1479690958000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 272,
      "championPointsSinceLastLevel": 272,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1528,
      "tokensEarned": 0,
      "championId": 63,
      "lastPlayTime": 1488043840000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 256,
      "championPointsSinceLastLevel": 256,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1544,
      "tokensEarned": 0,
      "championId": 201,
      "lastPlayTime": 1480137369000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 206,
      "championPointsSinceLastLevel": 206,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1594,
      "tokensEarned": 0,
      "championId": 91,
      "lastPlayTime": 1540853300000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 172,
      "championPointsSinceLastLevel": 172,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1628,
      "tokensEarned": 0,
      "championId": 223,
      "lastPlayTime": 1507337541000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 156,
      "championPointsSinceLastLevel": 156,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1644,
      "tokensEarned": 0,
      "championId": 141,
      "lastPlayTime": 1502476649000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 126,
      "championPointsSinceLastLevel": 126,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1674,
      "tokensEarned": 0,
      "championId": 6,
      "lastPlayTime": 1523298721000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 120,
      "championPointsSinceLastLevel": 120,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1680,
      "tokensEarned": 0,
      "championId": 143,
      "lastPlayTime": 1527553981000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 106,
      "championPointsSinceLastLevel": 106,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1694,
      "tokensEarned": 0,
      "championId": 267,
      "lastPlayTime": 1504196643000
    },
    {
      "championLevel": 1,
      "chestGranted": false,
      "championPoints": 96,
      "championPointsSinceLastLevel": 96,
      "playerId": 7643235,
      "championPointsUntilNextLevel": 1704,
      "tokensEarned": 0,
      "championId": 161,
      "lastPlayTime": 1529971952000
    }
  ]

  champs = [
    // 'aatrox',
    // 'ahri',
    // 'akali',
    // 'alistar',
    // 'amumu',
    // 'anivia',
    // 'annie',
    // 'ashe',
    // 'aurelionsol',
    // 'azir',
    // 'brand',
    // 'braum',
    // 'caitlyn',
    // 'camile',
    // 'cassiopeia',
    // 'chogath',
    // 'corki',
    // 'darius',
    // 'diana',
    // 'drmundo',
    // 'draven',
    // 'ekko',
    // 'elise',
    // 'evelynn',
    // 'ezreal',
    // 'fiddlesticks',
    // 'fiora',
    // 'fizz',
    // 'galio',
    // 'gangplank',
    // 'garen',
    // 'gnar',
    // 'gragas',
    // 'graves',
    // 'hecarim',
    // 'heimerdinger',
    // 'illaoi',
    // 'irelia',
    // 'ivern',
    // 'janna',
    // 'jarvaniv',
    // 'jax',
    // 'jayce',
    // 'jhin',
    // 'jinx',
    // 'kaisa',
    // 'kalista',
    // 'karma',
    // 'karthus',
    // 'kassadin',
    // 'katarina',
    // 'kayle',
    // 'kayn',
    // 'kennen',
    // 'khazix',
    // 'kindred',
    // 'kled',
    // 'kogmaw',
    // 'leblanc',
    // 'leesin',
    // 'leona',
    // 'lissandra',
    // 'lucian',
    // 'lulu',
    // 'lux',
    // 'malphite',
    // 'malzahar',
    // 'maokai',
    // 'masteryi',
    // 'missfortune',
    // 'mordekaiser',
    // 'morgana',
    // 'nami',
    // 'nasus',
    // 'nautilus',
    // 'nidalee',
    // 'nocturne',
    // 'nunu',
    // 'olaf',
    // 'oriana',
    // 'ornn',
    // 'pantheon',
    // 'poppy',
    // 'pyke',
    // 'quinn',
    // 'rakan',
    // 'rammus',
    // 'reksay',
    // 'renekton',
    // 'rengar',
    // 'riven',
    // 'rumble',
    // 'ryze',
    // 'sejuani',
    // 'shaco',
    // 'shen',
    // 'shyvana',
    // 'singed',
    // 'sion',
    // 'sivir',
    // 'skarner',
    // 'sona',
    // 'soraka',
    // 'swain',
    // 'syndra',
    // 'tahmkench',
    // 'taliyah',
    // 'talon',
    // 'taric',
    // 'teemo',
    // 'thresh',
    // 'tristana',
    // 'trundle',
    // 'tryndamere',
    // 'twistedfate',
    // 'twitch',
    // 'udyr',
    // 'urgot',
    // 'varus',
    // 'vayne',
    // 'veigar',
    // 'velkoz',
    // 'vi',
    // 'viktor',
    // 'vladimir',
    // 'volibear',
    // 'warwick',
    // 'wukong',
    // 'xayah',
    // 'xerath',
    // 'xinzhao',
    // 'yasuo',
    // 'yoric',
    // 'zac',
    // 'zed',
    // 'ziggs',
    // 'zilean',
    // 'zoe',
    // 'zyra',
    // 'neeko'
  ]

  arrayPuntage = [

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
    this.TestArray.forEach(element => {
      if (element.championId == 1) {
        element.championId = this.champs.push('annie');
        this.arrayPuntage.push(element.championPoints);
        this.championPoint = element.championPoints;
      }
      if (element.championId == 7) {
        element.championId = this.champs.push('leblanc');
        this.arrayPuntage.push(element.championPoints);
        this.championPoint = element.championPoints;
      }
      if (element.championId == 11) {
        element.championId = this.champs.push('akali');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 12) {
        element.championId = this.champs.push('masteryi');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 17) {
        element.championId = this.champs.push('teemo');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 22) {
        element.championId = this.champs.push('ashe');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 23) {
        element.championId = this.champs.push('tryndamere');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 24) {
        element.championId = this.champs.push('jax');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 25) {
        element.championId = this.champs.push('morgana');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 32) {
        element.championId = this.champs.push('leona ');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 36) {
        element.championId = this.champs.push('jinx');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 53) {
        element.championId = this.champs.push('blitzcrank');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 55) {
        element.championId = this.champs.push('katarina');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 64) {
        element.championId = this.champs.push('leesin');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 67) {
        element.championId = this.champs.push('vayne');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 84) {
        element.championId = this.champs.push('morgana');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 86) {
        element.championId = this.champs.push('rengar');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 89) {
        element.championId = this.champs.push('garen');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 107) {
        element.championId = this.champs.push('drmundo');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 133) {
        element.championId = this.champs.push('quinn');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 154) {
        element.championId = this.champs.push('zac');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 157) {
        element.championId = this.champs.push('yasuo');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 202) {
        element.championId = this.champs.push('jhin');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 222) {
        element.championId = this.champs.push('ivern');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 245) {
        element.championId = this.champs.push('ekko');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 412) {
        element.championId = this.champs.push('amumu');
        this.championPoint = element.championPoints;
      }
      if (element.championId == 427) {
        element.championId = this.champs.push('alistar');
        this.championPoint = element.championPoints;
      }
    });
    this.marcoMaestry = 'http://static.lolskill.net/img/championmastery/border/' + this.championsMaestry.championLevel + '.png';
    // If marcos según maestría
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
