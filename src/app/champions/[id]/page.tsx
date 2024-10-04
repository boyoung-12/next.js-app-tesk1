import React from "react";
import { getChampionDetail } from "@/utils/serverApi";

const ChampionsDetailPage = async (id) => {
  const { data } = await getChampionDetail(id);

  return (
    <div>
      <div>detailpage{data}</div>
    </div>
  );
};

export default ChampionsDetailPage;
