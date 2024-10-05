import React from "react";
import { getChampionDetail, getVersions } from "@/utils/serverApi";
import Image from "next/image";
import { PropsForChampionDetail } from "@/types/Champion";

//https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/Aatrox.json 챔피언디테일

//메타데이터 최적화 하기
const ChampionsDetailPage = async (props: PropsForChampionDetail) => {
  const { id } = props.params;
  const { data } = await getChampionDetail(id);
  const version = await getVersions();

  // console.log("data", data);

  // console.log("props", props);
  //params { params: { id: 'Ahri' }, searchParams: {} }

  return (
    <div className="max-w-screen-xl">
      <div className="flex flex-col w-full ">
        <div className="flex flex-col justify-around mx-auto gap-10 ">
          {/* 마진 엑스축 오토 왜안됨? 저스티파이도 안됨  */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">{data?.id}</h1>
            <p className="text-xl">{data?.title}</p>
            <Image
              width={200}
              height={200}
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`}
              alt={data?.id || ""}
            />

            <p>{data?.lore}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl">{data?.id}의 스킬</p>
            <div className="flex flex-wrap gap-10 ">
              {data?.spells.map((spell) => (
                <div
                  key={spell.id}
                  className="flex flex-col bg-red-400 w-80 h-48 gap-3 my-auto"
                >
                  <p className="text-lg">{spell.name}</p>
                  <Image
                    width={50}
                    height={50}
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.id}.png`}
                    alt={spell.id || ""}
                  />
                  <p className="text-sm">{spell.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsDetailPage;
