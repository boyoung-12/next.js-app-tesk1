// 이거 로테이션 응답데이터타입 https://kr.api.riotgames.com/lol/platform/v3/champion-rotations

export interface Rotation {
  freeChampionIds: number[];
}

// {
//     "freeChampionIds": [
//       5,
//       8,
//       10,
//       14,
//       43,
//       59,
//       82,
//       83,
//       84,
//       92,
//       110,
//       112,
//       114,
//       121,
//       142,
//       143,
//       236,
//       429,
//       526,
//       555
//     ],
//     "freeChampionIdsForNewPlayers": [
//       222,
//       254,
//       33,
//       82,
//       131,
//       350,
//       54,
//       17,
//       18,
//       37,
//       51,
//       145,
//       134,
//       89,
//       875,
//       80,
//       115,
//       91,
//       113,
//       112
//     ],
//     "maxNewPlayerLevel": 10
//   }
