# catopia

## 개발세팅
1. 로컬에 vanilajs 파일 다운로드
2. vscode로 파일 열어준 후 "ctrl + ~" 키로 터미널 열어줌
3. npm install 로 필수모듈 다운로드 //
4. 2개의 터미널을 열어 각각 npm run start // npm run server 입력
<br>
npm run start: 작업파일 번들링 (웹팩 번들링)
<br>
npm run server: 라이브서버 기능 + 서버역할


## 구조
1. src폴더에서만 작업하면됨.. npm run start(웹팩 번들링)이 puplic 폴더에 배포가능한 코드로 번들링해줌 *puplic 폴더는 직접 안건드림
2. 기본이 src/index.html이고 새로운 페이지 만들때는 src/views 폴더내에 html 파일생성 // 추가로 webpack.config.js 파일에 html이름만 추가 *파일열어보면 친절히 써있음
3. 모든 html파일은 동일한 js/css 파일을 인풋합 *index.html 열어보면 알수있음
4. javascript와 scss 파일은 1개의 파일만 번들링됨 <- 이부분은 추가 설명필요하니 문의
5. scss 는 css전처리기라 불림. scss는 css로 변환된후 적용됨 // 이 변환기능이 npm run start(웹팩 번들링)
6. scss 활용법은 문의 또는 개발물 참고
[scss] (https://sass-lang.com/documentation/at-rules/mixin)



## 개발 목표
* [x] 깃/깃허브를 활용한 협업
* [x] 컴포넌트를 구성해 개발
* [x] 바닐라js를 사용해 자바스트립트 숙련도 향상
* [x] Scss 학습
* [x] 반응형 홈페이지 제작



## 역할 분담
**주영석**
1. HTML
  * 홍보페이지 개발 src/index.html
  * 메인페이지 개발 src/views/home.html
  * 회원가입페이지 개발 src/views/join.html
2. js
  * 헤더 메뉴 구현
  * 로그인/로그아웃 구현
  * 슬라이더 구현
  * 스크롤 이벤트 구현
---
**이진영**
1. HTML
 * 장바구니페이지 개발 src/basket.html
 * 이벤트페이지 개발 src/event.html
 * 갤러리페이지 개발 src/gallery.html
---
## 자주 생기는 에러
 * webpack 파일에 html이름 넣은다음에 터미널 다시 시작해야 할수도있음(잘모름)
 * scss/screen 폴더에서 각 페이지 css작업후 style.scss 에 @import 하는것 필수 // js도 똑같은 논리
 * scss 작업시 mixin 과 variable 파일 import해줘야 mixin 이랑 variable 사용가능
 * 계속해서 원인을 알수없는 에러가 생기면 첫째로 npm을 처음부터 다시 실행해보고 그래도 안되면 전버전으로 백업
   (중요한 작업끝나면 항시 커밋해주는게 좋음)
