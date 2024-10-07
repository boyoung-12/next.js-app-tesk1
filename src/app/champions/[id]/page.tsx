import React from "react";
import { getChampionDetail, getVersions } from "@/utils/serverApi";
import Image from "next/image";
import { ChampionData, PropsForChampionDetail } from "@/types/Champion";

//https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/Aatrox.json 챔피언디테일

//SSG

export const generateMetadata = async (props: PropsForChampionDetail) => {
  return { title: `champion/${props.params.id}` };
};

const ChampionsDetailPage = async (props: PropsForChampionDetail) => {
  const { id } = props.params;
  const version = await getVersions();
  const res = await getChampionDetail(id);

  if (res.message) {
    return res.message;
  }

  if (!res.data) {
    return <div>Loading...</div>;
  }

  //res.message를 받았다는 것은 getChampionDetail함수에서 error가 나왔을때는 message를
  //내보내기로 했으니깐 이땐 사실상 undefined으로 데이터가 없는것까지 함포하고있는것인데,
  //왜 잘들어온 데이터에대해서도 !res.data 이렇게 만들어줘서 undefined에대한 처리를 해주는지 이해가 안감.
  //챔피언페이지에선 res.message와 res.data이렇게 두가지 처리만 해줬는데 말이지,,
  //->

  const data: ChampionData = res.data;

  console.log("res", res);

  // console.log("props", props);
  //params { params: { id: 'Ahri' }, searchParams: {} }

  return (
    <div className="px-36">
      <div className="flex flex-col justify-around mx-auto gap-10 my-[15px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-red-600">{data.id}</h1>
          <p className="text-xl font-bold  text-gray-600">{data.title}</p>
          <Image
            width={200}
            height={200}
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`}
            alt={data.id || ""}
          />

          <p className="text-lg font-semibold">{data.lore}</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold">{data.id}의 스킬</p>
          <div className="flex flex-wrap gap-10 ">
            {data?.spells.map((spell) => (
              <div
                key={spell.id}
                className="flex flex-col w-80 h-48 gap-3 my-auto border-[3px] rounded-md border-red-600 p-[15px]"
              >
                <p className="text-lg font-semibold ">{spell.name}</p>
                <Image
                  width={50}
                  height={50}
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.id}.png`}
                  alt={spell.id || ""}
                />
                <p className="text-sm font-semibold h-14 overflow-y-auto">
                  {spell.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsDetailPage;
