# arrow function

- 함수를 만드는 이유

  - 코드들을 기능으로 묶고 싶을 때
  - *입출력 기계*를 만들고 싶을 때

- 함수를 만드는 방법

  - `function 함수명(){}`
  - `var 함수명 = function(){}`
  - **`var 함수명 = () => {}`** => arrow function

- arrow function의 장점

  - *입출력 기계*를 만들 때 보기 쉽다.
  - 소괄호 생략 가능(파라미터가 하나 밖에 없을 때)
    - **`var 함수명 = a => {}`**
  - 코드 한줄이면 중괄호도 생략 가능
    - **`var 함수명 = a => a + 10;`**

- arrow functon 예시

  - forEach 콜백함수
    ```
        [1,2,3,4].forEach( a => console.log(a) );
    ```
  - 이벤트리스너
    ```
        document.getElementById('버튼').addEventListener('click',
        (e) => {
            this; // 일반 이벤트리스너에서 this값은 e.currentTarget이지만
                  // arrow function 이벤트리스너에서 this값은 바깥의 this와 같다.
            e.currentTarget; // 이걸 쓰면 됨 ㅎ
        });
    ```
  - Object안의 함수
    ```
        var obj = {
            fn1 : function(){},
            fn2 : () => {}
        }
        obj.fn2();
    ```
