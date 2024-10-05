// 이거아이템들 https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json

export interface Item {
  data: {
    [key: string]: {
      name: string;
      plaintext: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      gold: {
        total: number;
        sell: number;
      };
    };
  };
}
