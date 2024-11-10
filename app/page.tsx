export default function Home() {
  return (
    <div>
      <MyButton name="한" nickname="승호" today={new Date()}/>
    </div>
  );
}

// button 나는 버튼을 생성하는 JS함수
type TParams = {
  name: string
  nickname: string
  today: Date
}

// button버튼위에 뜰 문자
// function MyButton(params: TParams) {
//   return <div>I am {params.name} my name is {para  ms.nickname} my age {params.age} time{params.today.getDate()}</div>
// }

function MyButton(params: TParams) {
  return(
  <div
    className="bd-red-500 text-xl w-[500px] h-[700px]"
    style={{ backgroundColor: "rgb(203 213 225" }}
  >
    I am {params.name} my name is {params.nickname}.{" "}
    {params.today.getDate()}
  </div>
  );
}
