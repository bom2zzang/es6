# getter, setter

- object내의 함수들을 괄호 없이 쓸 수 있게 만들어주는 키워드
- 데이터의 무결성을 보존하기 위해 쓰는 키워드

> 원본 데이터는 immutable해야 한다.<br/>
> 데이터를 수정하거나 출력할 때 직접 원본 데이터를 만지는게 아니라 함수로 간접적으로 다루는 것이 대세

- 함수를 만들어 object 데이터를 다루는 이유

  - object 안의 데이터가 복잡할 수록 함수 만들어 놓는게 데이터를 꺼내기 쉽다.
  - 내부에 있는 변수는 건드리지 않아서 실수를 방지할 수 있어 안전하다.
  - 미리 함수를 만들어 놓으면 매번 기능개발할 필요가 없다.

- get/set
  - es5부터 지원
  - object 내 함수에 get/set 키워드 이용
  - 데이터를 사용할 때 소괄호를 쓰지 않아도 됨
  - get : 데이터 꺼내기, return 값 필요, 파라미터가 없어야 함.
  - set : 데이터 입력/수정, 파라미터가 있어야 함.