import { getChampions, getVersions } from "@/utils/serverApi";
import Link from "next/link";
import React from "react";
import Image from "next/image";

//https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json 챔피언목록

export const revalidate = 86400;

//ISR
const ChampionsPage = async () => {
  const version = await getVersions();
  const res = await getChampions();

  if (res.message) {
    return res.message;
  }

  if (!res.data) {
    return <div>Loading...</div>;
  }

  const data = res.data;

  return (
    <div>
      <div className="flex pt-5 pb-5 text-3xl">챔피언목록</div>
      <div className="flex flex-wrap gap-10 justify-center ">
        {data.map((champion) => (
          <Link
            href={`/champions/${champion.id}`}
            key={champion.key}
            className="flex flex-col w-72 h-72 bg-red-300 items-center justify-evenly"
          >
            <Image
              priority
              width={200}
              height={200}
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`}
              alt={champion.id}
            />

            <div className="flex flex-col items-center gap-3">
              <h1>{champion.name}</h1>
              <h2>{champion.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;

// {/* <div>{JSON.stringify(data)}</div> */}
//이렇게 해주면 객체로 이뤄진 데이터를 화면상에 보려고할때 string으로 바꿔 확인가능

// [{
//   version: '14.19.1',
//   id: 'Milio',
//   key: '902',
//   name: '밀리오',
//   title: '온화한 불꽃'},{
//     version: '14.19.1',
//     id: 'Mil',
//     key: '912',
//     name: '밀',
//     title: '온화한 미소'}]
