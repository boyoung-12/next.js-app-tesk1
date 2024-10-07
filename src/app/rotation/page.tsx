"use client";

import React, { useEffect, useState } from "react";
import { getChampions, getVersions } from "@/utils/serverApi";
import Image from "next/image";
import { ChampionData } from "@/types/Champion";

//https://kr.api.riotgames.com/lol/platform/v3/champion-rotations 로테이션응답

//CSR
const RotationPage = () => {
  const [filteredChampion, setFilteredChampion] = useState<ChampionData[]>([]);
  const [version, setVersion] = useState("");

  useEffect(() => {
    const fetchRotationData = async () => {
      const originUrl = window.origin;
      const version = await getVersions();

      if (typeof version === "string") setVersion(version);
      //질문 버전이 적용이 안됨
      //->version 타입이 string | { message: string;} 이래서 그런건데
      //그래서 타입이 string일 때만 setVersion에 넣어주는 것으로 처리해주면됨

      const response = await fetch(`${originUrl}/api/rotation`, {
        method: "GET",
      });

      const rotationData = await response.json();

      const ExtractFreeChampionIds = rotationData.data.freeChampionIds;

      // const { data: championsData } = await getChampions();
      //이렇게
      const res = await getChampions();
      if (res.message) {
        return res.message;
      }
      if (res.data) {
        const championsData: ChampionData[] = res.data;
        const filterdChampionsData: ChampionData[] = championsData.filter(
          (champion) => ExtractFreeChampionIds.includes(Number(champion.key))
        );

        setFilteredChampion(filterdChampionsData);
      }
    };
    fetchRotationData();
  }, []);

  return (
    <div>
      <div className="flex pt-5 pb-5 text-3xl">이번주 무료 챔피언</div>
      <div className="flex flex-wrap gap-10 justify-center">
        {filteredChampion.map((champion) => (
          <div
            key={champion.key}
            className="flex flex-col w-72 h-72 bg-red-300 items-center justify-evenly"
          >
            <Image
              width={200}
              height={200}
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`}
              alt={champion.id}
            />

            <div className="flex flex-col items-center gap-3">
              <h1>{champion.name}</h1>
              <h2>{champion.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotationPage;

// const rotationPage = () => {
//   const click = () => {
//     fetch("http://localhost:3000/api/rotation", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then(console.log);
//   };

//   return (
//     <div>
//       <div>로테이션페이지</div>
//       <button onClick={click}>버튼</button>
//     </div>
//   );
// };

// export default rotationPage;
