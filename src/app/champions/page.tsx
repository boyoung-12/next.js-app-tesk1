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
      <div className="flex pt-5 pb-5 text-3xl pl-[75px] font-bold text-red-600">
        챔피언목록
      </div>
      <div className="flex flex-wrap gap-10 justify-center ">
        {data.map((champion) => (
          <Link
            href={`/champions/${champion.id}`}
            key={champion.key}
            className="flex flex-col w-72 h-72 items-center justify-evenly border-[3px] rounded-md border-red-600"
          >
            <Image
              priority
              width={200}
              height={200}
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`}
              alt={champion.id}
            />

            <div className="flex flex-col items-center gap-1">
              <h1 className="text-lg font-bold">{champion.name}</h1>
              <h2 className="font-bold  text-gray-600">{champion.title}</h2>
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
