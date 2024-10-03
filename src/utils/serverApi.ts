"use server";

import { Champion, ChampionDetail } from "../types/Champion";
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

  const data: Champion = await res.json();

  return { data };
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
  //아이디가 유요하지 않을경우 에러메세지와 상태코드 반환로직 필요

  const data: ChampionDetail = await res.json();

  return { data };
}

//아이템 목록 API 엔드포인트
export async function getItems() {
  const version = await getVersions();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    {}
  );

  const data: Item = await res.json();

  return { data };
}

// export async function getItems() {
//   try {
//     const res = await fetch(
//       "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json",
//       {}
//     );
//     const data: Item = await res.json();

//     return { data };
//   } catch (error) {
//     return (
//       { message: error.status.message }, //여기만 왜?
//       {
//         status: error.status.status_code,
//       }
//     );
//   }
// }
