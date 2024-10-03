import React from "react";
import { getItems } from "@/utils/serverApi";
//why the place in front of the slash is not .. but @?
//@는 경로 별칭. 예를들면 내가 있는 폴더에서 상위폴더를 가기위해선 ..를 해야되는데 여기서 정확한 경로를 확인하는 번거러움을 줄이기위해
// @를 써주면 현재 내 폴더를 기준으로 경로를 설정하는게 아니라 @자체가 src을 뜻하기 때문에 src를 기준으로 더 쉽게 해당경로를 찾을 수 있게된다.
//이건  tsconfih.json에서 path 부분을 보면 어떻게 쓸건인지 확인가능

const ItemsPage = async () => {
  const { data } = await getItems();

  return (
    <div>
      <div>아이템 목록</div>
      <div>{data.data["1001"].name}</div>
    </div>
  );
};

export default ItemsPage;
