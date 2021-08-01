# this

1. {window} : 기본 함수들의 수납공간

   - 함수나 변수를 전역공간에서 만들면 {window}에 보관

   ```
       console.log(this); // {window}

       function callThis() {
           console.log(this); // {window}
       }

       callThis();
       window.callThis();
   ```

   ```
   //strct mode
       "use strict";

       console.log(this); // {window}

       function callThis() {
           console.log(this); // undefined
       }

       callThis();
   ```

2. Object내 함수 안에서 -> **그 함수를 가지고 있는 오브젝트**

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

3. 기계 안에서 -> **새로 생성되는 오브젝트**

   ```
      function person(){
          this.name = 'lee' //새로 생성되는 오브젝트(instance)
      }
      var obj = new person();
   ```

4. 이벤트리스너 -> **e.currentTarget**

   ```
    document.getElementById("btn").addEventListener("click", function (e) {
            console.log(this); // e.currentTarget
            console.log(e.currentTarget);

            var arr = [1, 2, 3];
            arr.forEach(function (a) {
            //함수 안에 들어가는 함수를 콜백함수라 부른다
            console.log(this);  // {window} , 함수가 쓰인 위치에 따라 this값이 변함
            });

    var obj2 = {
        names: ["kim", "lee", "park"],
        fnObj: function () {
        console.log(this); // {obj2}
        obj2.names.forEach(function () {
            //근본없는 일반함수
            console.log(this);
        });
        },
        fnObj2: function () {
        console.log(this); // {obj2}
        obj2.names.forEach(() => {
            console.log(this);
        });
        },
    };

    //오브젝트 내에서 콜백함수를 쓴다면 this는?
    obj2.fnObj(); // {window}
    //arrow function안에서의 this는?
    //내부의 this값을 변화시키지 않고 외부 this 그대로 재사용 가능
    obj2.fnObj2(); // {obj2}

   ```
