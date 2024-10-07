import Image from "next/image";
import Link from "next/link";

export default function Home() {
  //https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
  //사진 png임 넣으셈

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-6">
      <div className="flex flex-col items-center">
        <h1>리그 오브 레전드 정보 앱</h1>
        <p> Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      </div>
      <div className="flex flex-col items-center">
        <Link href={"/champions"} className="bg-slate-500 ">
          <Image
            priority
            style={{
              width: "auto",
              height: "auto",
            }}
            width={450}
            height={100}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg`}
            alt={"1"}
          />
        </Link>
        <p>챔피언 목록보기</p>
      </div>
      <div className="flex flex-col items-center">
        <Link href={"/rotation"} className="bg-slate-500 ">
          <Image
            priority
            style={{
              width: "auto",
              height: "auto",
            }}
            width={450}
            height={100}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_3.jpg`}
            alt={"2"}
          />
        </Link>
        <p>금주 로테이션 확인</p>
      </div>
      <div className="flex flex-col items-center">
        <Link href={"/items"} className="bg-slate-500  ">
          <Image
            style={{
              width: "auto",
              height: "auto",
            }}
            width={450}
            height={100}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_1.jpg`}
            alt={"3"}
          />
        </Link>
        <p>아이템 목록보기</p>
      </div>
    </div>
  );
}
