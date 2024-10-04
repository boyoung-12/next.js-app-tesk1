// 이거 챔피언들 https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json
// 챔피언들 디테일 뒤에 이름이 동적으로들어감 https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/Aatrox.json
//배열구조로 변경
export interface Champion {
  data: {
    [key: string]: {
      id: string;
      key: string;
      name: string;
      title: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
    };
  };
}

export interface ChampionDetail {
  data: {
    [key: string]: {
      id: string;
      key: string;
      name: string;
      title: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      lore: string;
      spells: [
        {
          id: string;
          name: string;
          description: string;
          image: {
            full: string;
            sprite: string;
            group: string;
            x: number;
            y: number;
            w: number;
            h: number;
          };
        }
      ];
    };
  };
}
