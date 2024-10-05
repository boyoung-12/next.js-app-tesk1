import React from "react";
import { getItems, getVersions } from "@/utils/serverApi";
import Image from "next/image";
//why the place in front of the slash is not .. but @?
//@는 경로 별칭. 예를들면 내가 있는 폴더에서 상위폴더를 가기위해선 ..를 해야되는데 여기서 정확한 경로를 확인하는 번거러움을 줄이기위해
// @를 써주면 현재 내 폴더를 기준으로 경로를 설정하는게 아니라 @자체가 src을 뜻하기 때문에 src를 기준으로 더 쉽게 해당경로를 찾을 수 있게된다.
//이건  tsconfih.json에서 path 부분을 보면 어떻게 쓸건인지 확인가능

//https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json 아이템목록
const ItemsPage = async () => {
  const { data } = await getItems();
  const version = await getVersions();

  // console.log("데이타타", data);

  return (
    <div className="max-w-screen-xl">
      <div className="flex flex-col w-full ">
        <div className="flex pt-5 pb-5 text-3xl">아이템 목록</div>
        <div className="flex flex-wrap gap-10 justify-center">
          {data?.map((item) => (
            <div
              key={item.name}
              className="bg-red-400 w-44 h-72 justify-center items-center"
              // 이거 왜 중간 정렬 안됨?
            >
              <Image
                width={120}
                height={120}
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                alt={item.name}
              />
              <h1 className="text-xl">{item.name}</h1>
              <p>{item.plaintext}</p>
              <p className="text-sm">가격:{item.gold.total}</p>
              <p className="text-sm">팔때:{item.gold.sell}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
