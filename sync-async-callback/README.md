# sync/async & callback

- 동기식처리(synchronous) : 한번에 한줄씩 차례로 실행

  ```
      console.log(1);
      console.log(2);
      console.log(3);
      // 1,2,3
  ```

- 비동기식 처리(asynchronous)

  - **Web API**와 연관된 특수한 함수들을 사용하면 다른 작업부터 비동기식으로 처리한다.

  ```
      console.log(1);
      setTimeout(()=>{console.log(2)},1000);
      element.addEventListener('click',function(){});
      $.ajax();
      // 비동기식처리를 도와주는 함수 > 자바스크립트를 실행하는 브라우저 덕분에 가능
      console.log(3);
      // 1,3,2
  ```

  - 순차적으로 실행하려면 ? **콜백함수**를 사용해야한다.

- 콜백함수
  ```
      setTimeout(콜백함수,1000);
      element.addEventListener('click',콜백함수);
  ```
  - 콜백함수를 이용한 함수 디자인
  - 함수 디자인 패턴일 뿐 동기비동기아님!
