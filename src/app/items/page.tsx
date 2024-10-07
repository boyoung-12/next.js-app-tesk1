import React from "react";
import { getItems, getVersions } from "@/utils/serverApi";
import Image from "next/image";
import { randomUUID } from "crypto";

//why the place in front of the slash is not .. but @?
//@는 경로 별칭. 예를들면 내가 있는 폴더에서 상위폴더를 가기위해선 ..를 해야되는데 여기서 정확한 경로를 확인하는 번거러움을 줄이기위해
// @를 써주면 현재 내 폴더를 기준으로 경로를 설정하는게 아니라 @자체가 src을 뜻하기 때문에 src를 기준으로 더 쉽게 해당경로를 찾을 수 있게된다.
//이건  tsconfih.json에서 path 부분을 보면 어떻게 쓸건지 확인가능

//https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json 아이템목록

//SSG
const ItemsPage = async () => {
  const version = await getVersions();
  const res = await getItems();

  console.log("res", res);

  if (res.message) {
    return res.message;
  }

  if (!res.data) {
    return <div>Loading...</div>;
  }

  const data = res.data;

  //질문 : data구조가 좀 이상함 왜냐하면 res를 콘솔찍으면 [{},{}, ..]이렇게 나오는데
  //그러면 res.data를 한다고하면 오류가 나는게 정상인데 이상하게 잘됨
  // -> 이거 애초에 구조가 {data:[{},{}]}이렇게 res에 들어오기때문에
  //res.data하면 [{},{}] 이렇게 쓸 수 있는거임
  //심지어 타입설정도 안해줫는데 알아서 타입도 찾음
  //->server action에서 이미 타입 설정을 해줬기때문에 거기서 한번 구조를 잡으면
  //여기선 따로 타입설정 해 줄 필요없음

  return (
    <div className="flex flex-col w-full">
      <div className="flex pt-5 pb-5 text-3xl pl-[75px] font-bold text-red-600">
        아이템 목록
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {data.map((item) => (
          <div
            key={randomUUID()}
            className="flex flex-col w-44 h-72 items-center justify-evenly px-2 border-[3px] rounded-md border-red-600"
            // 이거 왜 중간 정렬 안됨?
          >
            <Image
              width={120}
              height={120}
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt={item.name}
            />
            <h1 className="text-xl font-bold text-red-600">{item.name}</h1>
            <div className="h-14 font-bold text-green-500 text-center overflow-y-auto">
              {item.plaintext}
            </div>
            <p className="text-sm font-bold">가격:{item.gold.total}</p>
            <p className="text-sm font-bold">팔때:{item.gold.sell}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
