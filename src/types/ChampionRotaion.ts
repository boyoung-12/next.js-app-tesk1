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
// 로테이션(넘버)이랑 챔피언목록(스트링)이랑 서로 타입이 다르기 때문에 이거 일치시켜줘야되고 나중에
// 그리고 챔피언 key값이 key가 로테이션에서 key값 freeChampionIds와 똑같은거임 이부분 주의해서 일치시켜줘야함
//     Object.values(obj) 이렇게 해주면 객체로 되어있는 형식을 배열로 만들어줌
