import React, { useState, useMemo } from 'react';

//React 및 특정 Hooks (useState, useMemo)

function App_useMemo() {

	//useState Hook을 사용하여 상태 변수(number) 및 업데이트 함수(setNumber) 생성

	const [number, setNumber] = useState(0); //'number'라는 상태 변수와 해당 값을 업데이트할 수 있는 함수 생성
	const [otherValue, setOtherValue] = useState(0); //'otherValue'라는 상태 변수와 해당 값을 업데이트할 수 있는 함수 생성
	//useState(0) =>>>> 기본값 0

	//오랜 시간이 걸리는 계산을 수행하는 함수
	const longComputation = (num) => {
		console.log('long computer is running...'); //계산이 길게 실행되고 있다는 멘트 출력(로그)
		let value = 0;
		for(let i = 0; i < 100000000; i++) { //100000000까지 루프 돌면서 무작위로 값을 누적
			value += Math.random();
		}
		return num * value; //주어진 숫자와 계산된 값의 곱을 반환
	}

	//useMemo 훅을 사용하여 메모이제이션된 값을 계산
	const computedValue = useMemo(() => { // 'number'가 변경될 때마다 'longComputation' 함수를 호출하여 새로운 값 계산
		return longComputation(number); 
	}, [number]); //'number'가 변경될 때마다 재계산

	return (

		<div>
			<div>
				{/* 버튼 클릭시 => setNumber을 호출하여 number을 1씩 증가시키는 이벤트 핸들러 */}
				<button onClick={() => setNumber(number => number +1)}>Increment Number  
				({number})
				</button>
			</div>
			<div>
				{/* 버튼 클릭시 => setOtherValue를 호출하여 otherValue을 1씩 증가시키는 이벤트 핸들러 */}
				<button onClick={() => setOtherValue(otherValue => otherValue + 1)}>Increment Other Value
				({otherValue})
				</button>
			</div>
			<div>
				Computed value: {computedValue}
				{/* 메모제이션된 값 표시 */}
			</div>
		</div>

	);


}

export default App_useMemo;