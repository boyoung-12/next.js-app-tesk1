"use server";

import { ChampionData, ChampionDetail } from "../types/Champion";
import { Item } from "../types/Item";

//try catch는 컴포넌트에서 사용해줘야한다.
// = Avoid using try/catch for expected errors in Server Actions.

//Data Dragon API의 버전 정보 가져오기
export async function getVersions(): Promise<string | { message: string }> {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    {}
  );

  if (!res.ok) {
    return { message: "에러입니다" };
  }
  //이 리턴에대한 타입을 정의해줘야함 위에 Promise<string> 는 성공했을때 그리고 실패했을때에대한 것도 마찬가지로 넣어줘야함.

  const data: string[] = await res.json();

  return data[0];
}

//챔피언 목록 데이터 가져오기
export async function getChampions() {
  const version = await getVersions();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {}
  );

  if (!res.ok) {
    return { message: "에러입니다" };
  }

  const response = await res.json();

  const championsArray: ChampionData[] = Object.values(response.data);

  return { data: championsArray };
}

//특정 챔피언 상세 정보 API 엔드포인트
export async function getChampionDetail(id: string) {
  const version = await getVersions();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`, //id값이 동적으로 들어옴 그래서 Aatrox 대신 id를 넣어줌
    {}
  );

  if (!res.ok) {
    return { message: "에러입니다" };
  }

  const response: ChampionDetail = await res.json();

  return { data: response.data[id] };
}

//아이템 목록 API 엔드포인트
export async function getItems() {
  const version = await getVersions();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    {}
  );

  if (!res.ok) {
    return { message: "에러입니다" };
  }

  const response: Item = await res.json();

  const ItemsArray = Object.values(response.data);

  console.log("ItemsArray", ItemsArray);
  //여기도 콘솔이 안찍힘

  return { data: ItemsArray };
}

// const obj = {
//     "1": {
//     "abc": "123"
//     }
//     }
