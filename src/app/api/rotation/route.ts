import { NextResponse } from "next/server";
import { Rotation } from "../../../types/ChampionRotaion";

// 일단 이거 에러처리 방법 알아보기

export async function GET() {
  const key = process.env.RIOT_API_KEY;
  try {
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore <-이건 eslint 오류때문에 꺼준 것
        headers: { "X-Riot-Token": key },
      }
    );
    const data: Rotation = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error }
      // { message: error.status.message },
      // {
      //   status: error.status.status_code,
      // }
    );
  }
}

//위에 get이 어떻게 동작하는지 설명하자면
//주소창에 여기 경로를 입력하는 순간 ex)http://localhost:3000/api/rotation
//여기 경로에 있는 get함수가 실행 되는 것임(원래 주소창에 입력하면 default 함수가 get임).
//그래서 이 함수 안에 있는 fetch로 인해 엔트포인트에 있는 데이터가 불러와지고 (api key를 header에 넣어줘야 가져올수있음)
//그 데이터들이 내가 설정한 type(data: Rotation )에 맞춰서 response 안에 들어가져서 정보들을 가져올 수 있다.
//여기서 { data } 이렇게 객체형태로 감싸주는 이유는 뭐였더라,,

//여기서 이 경로안에 get뿐만아니라 post patch push와 같은 함수들이있다고 했을때 이건 어떻게 동작할까?
//post를 예를 들어보면 내가 이 api를 불러올 page에서 클릭버튼을 눌렀을때 실행되어지는 함수안에 fetch를 써서 경로 ex)http://localhost:3000/api/rotation를 넣어주고
//객체로 method:POST 이렇게 해주고 body:{내가 넣어줄 정보들} 이렇게 해주면 버튼을 눌렀을때
//그 경로로가서 method:POST에 해당하는 함수가 실행되어지는것이다.

// const obj = {
//     "1": {
//     "abc": "123"
//     }
//     }

// 로테이션(넘버)이랑 챔피언목록(스트링)이랑 서로 타입이 다르기 때문에 이거 일치시켜줘야되고 나중에
// 그리고 챔피언 key값이 key가 로테이션에서 key값 freeChampionIds와 똑같은거임 이부분 주의해서 일치시켜줘야함
//     Object.values(obj) 이렇게 해주면 객체로 되어있는 형식을 배열로 만들어줌
