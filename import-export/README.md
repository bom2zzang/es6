# import/export

- export default 문법

  - `import 가져올거 from 경로`
  - `export default 내보낼거`
    - file당 export default는 한 번만 쓸 수 있다.

- 여러개를 내보내는 export 문법

  - `import { 가져올것들 } from 경로`
  - `export { 내보낼것들 }`

- export와 export default 동시 사용 가능

- 변수명은 새로 지을 수 있다

  - `import { 변수 as 새변수명 } from 경로`

- 모든걸 다 import 해오는 \* 기호
  - `import * as 변수들명 from 경로`

---

- 두둥
  - IE에서는 호환이 안된다.
  - `<script src=''>` 호환성 좋게 개발하려면 이걸 씁시다...? 엥
