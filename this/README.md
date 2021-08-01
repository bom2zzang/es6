# THIS

1. {window} : 기본 함수들의 수납공간
2. Object내 함수 안에서 쓰면 **그 함수를 가지고 있는 오브젝트** 를 뜻함
   - 함수나 변수를 전역공간에서 만들면 {window}에 보관

- 자바스크립트

  ```
    console.log(this); // {window}

    function callThis() {
        console.log(this); // {window}
    }

    callThis();
    window.callThis();
  ```

- 자바스크립트 strct mode

  ```
    "use strict";

    console.log(this); // {window}

    function callThis() {
        console.log(this); // undefined
    }

    callThis();
  ```

- Object 내 함수 안

  ```
    var obj = {
        data: "kim",
        fnObj: function () {
        console.log(this);
        },
    };
    obj.data;   // kim
    obj.fnObj(); // {obj}

    var obj2 = {
        data: {
        fnObj: function () {  //fnObj(){}로도 사용 가능
            console.log(this);
        },
        fnArrow: () => {
            console.log(this);
        },
        },
    };
    obj2.data.fnObj();  // {fnObj}
    obj2.data.fnArrow();    // {window}
  ```
