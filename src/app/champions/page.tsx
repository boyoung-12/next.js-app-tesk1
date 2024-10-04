import { getChampions, getVersions } from "@/utils/serverApi";
import Link from "next/link";
import React from "react";
import Image from "next/image";

//https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json 챔피언목록
//https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/Aatrox.json 챔피언디테일

export const revalidate = 86400;

const ChampionsPage = async () => {
  const { data } = await getChampions();
  const version = await getVersions();

  return (
    <div className="max-w-screen-xl">
      <div className="flex flex-col w-full ">
        <div className="flex pt-5 pb-5">챔피언목록</div>
        <div className="flex flex-wrap gap-10 justify-center">
          {data?.map((champion) => (
            <Link
              href={`/champions/${champion.id}`}
              key={champion.key}
              className="flex flex-col w-72 h-72 bg-red-300 items-center justify-evenly"
            >
              <Image
                className="rounded-sm object-scale-down"
                width={40}
                height={40}
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`}
                alt={champion.id}
              />
              {/* w-40 h-40 bg-red-900 */}

              <div className="flex flex-col items-center gap-3">
                <h1>{champion.name}</h1>
                <h2>{champion.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionsPage;

// {/* <div>{JSON.stringify(data)}</div> */}
//이렇게 해주면 객체로 이뤄진 데이터를 화면상에 보려고할때 string으로 바꿔 확인가능

// [aatrox:{key:"266",id:"aatrox"}]

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
