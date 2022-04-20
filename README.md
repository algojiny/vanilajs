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
