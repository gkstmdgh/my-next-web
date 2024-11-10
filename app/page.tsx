export default function Home() {
  return (
    <div>
      <MyButton name="한" nickname="승호" age={18} today={new Date()}/>
    </div>
  );
}

// button 나는 버튼을 생성하는 JS함수
type TParams = {
  name: string
  nickname: string
  age: number
  today: Date
}

// button버튼위에 뜰 문자
// function MyButton(params: TParams) {
//   return <div>I am {params.name} my name is {params.nickname} my age {params.age} time{params.today.getDate()}</div>
// }

function MyButton(params: TParams) {
  return <div className="bg-red-500">  I am {params.name} my name is {params.nickname} time{params.today.getDate()}</div>
}

