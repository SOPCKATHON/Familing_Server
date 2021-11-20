# 👨‍👩‍👧‍👦 Familing_Server

## 서비스명

**Familing** <br>
(2021.11.20 ~ 2021.11.21)

## 서비스 소개

**"가족과의 추억 스탬프 아카이빙 서비스"** <br>
여성가족부 통계 자료에 따르면 가족과의 여가시간은 평일 1~2시간 이하인 경우가 74.2%라고 합니다. <br>
그만큼 가족과 보내는 시간이 적다는 이야기인데요. <br>

저희는 가장 작은 공동체인 가족과의 보내는 시간이 적다는 것에 문제를 느끼고, <br>
이를 해결하고자 행동심리학을 이용하여 가족들과 함께하는 시간을 늘리는 방식으로 문제를 해결하고자 합니다. <br>

가족과의 추억을 남기면 스탬프를 획득하는 방식으로 보상감을 느끼게 하였으며 지난달 대비 이번달의 가족과 <br>
보낸 시간을 카운팅 하여 가족과 더 많은 시간을 보내도록 동기부여 합니다. <br>

저희는 이런 방식을 통하여 많은 분들이 '가족'에 대한 의미를 되새기고 보다 더 친밀한 관계를 형성하도록 돕는 서비스가 될 것입니다.

## 개발 담당

### [이승헌](https://github.com/lsh328328)

```
- 월별 memory list GET
- 마이페이지의 memory 개수 GET
```

### [조윤서](https://github.com/healing99)

```
- 특정 memory GET
- memory POST
```

## 📂 Folder Structure

```markdown
📦functions
┣ 📂api
┃ ┣ 📂routes
┃ ┃ ┣ 📂memory
┃ ┃ ┃ ┣ 📜memoryListGET.js
┃ ┃ ┃ ┣ 📜memoryGET.js
┃ ┃ ┃ ┣ 📜memoryPOST.js
┃ ┃ ┃ ┣ 📜index.js
┃ ┃ ┣ 📂profile
┃ ┃ ┃ ┣ 📜profileGET.js
┃ ┃ ┃ ┣ 📜index.js
┣ 📂config
┃ ┣ 📜dbConfig.js
┣ 📂constants
┃ ┣ 📜responseMessage.js
┃ ┣ 📜statusCode.js
┣ 📂db
┃ ┣ 📜db.js
┃ ┣ 📜memory.js
┃ ┣ 📜index.js
┣ 📂lib
┃ ┣ 📜util.js
┃ ┣ 📜convertSnakeToCamel.js
┣ 📜.eslintrc.js
┣ 📜.prettierrc.js
┣ 📜index.js
```

## 💻 Code Convention

### 💬 Commit Message Rules

```
[feat] : 새로운 기능 추가
[update] : 기존 파일 수정 및 보완
[fix] : 버그 수정
[docs] : 문서 추가, 수정 및 변경
[style] : 코드 포맷팅, 로직의 변화는 없이 띄어쓰기나 탭 문자 등의 사소한 변화
[refactor] : 리팩토링
[test] : 테스트 코드 수정 및 변경 (로직 변화 없음)
[chore] : 그 외의 변경사항 (주석 추가, 삭제 등)
```

**Example**

```
[feat] : 로그인 api 추가
[fix] : 회원가입 버그 수정
```

### 🔅 Branches

- `main` : 메인 브랜치
  - `main`에 직접적인 commit, push는 가급적 금지합니다
  - 작업 전, 반드시 `main` 브랜치를 pull 받고 시작합니다
    ```
    git pull origin main
    ```
- `develop` : develop 브랜치
  - 계획한 모든 기능 구현 & 테스트 통과 시 `main` 브랜치로 Pull Request를 보내서 Merge 합니다
- `feature/기능` : 해당 기능 개발 브랜치
  - 작업 완료 시 `main` 브랜치로 Pull Request를 보냅니다
  - 기능 개발 시 `feature/기능` 브랜치를 파서 관리합니다
    ```
    git branch feature/기능
    ```
- 작은 기능별로 `commit message rules`에 따라 커밋을 진행합니다
- 다 쓴 브랜치는 삭제합니다

## 🏁 Dependencies Module

```
{
  "name": "functions",
  "description": "Cloud Functions for Firebase",
  "scripts": {
    "lint": "eslint .",
    "serve": "firebase emulators:start --only functions",
    "shell": "firebase functions:shell",
    "start": "npm run shell",
    "deploy": "firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "14"
  },
  "main": "index.js",
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "dayjs": "^1.10.7",
    "dotenv": "^10.0.0",
    "eslint-config-prettier": "^8.3.0",
    "express": "^4.17.1",
    "firebase-admin": "^9.8.0",
    "firebase-functions": "^3.14.1",
    "helmet": "^4.6.0",
    "hpp": "^0.2.3",
    "lodash": "^4.17.21",
    "pg": "^8.7.1"
  },
  "devDependencies": {
    "eslint": "^7.6.0",
    "eslint-config-google": "^0.14.0",
    "firebase-functions-test": "^0.2.0",
    "swagger-jsdoc": "^6.1.0",
    "swagger-ui-express": "^4.1.6"
  },
  "private": true
}
```

## ✨ Base URL

```
https://asia-northeast3-familing-33c14.cloudfunctions.net/api
```

## ERD Diagram

![familing_erd](https://user-images.githubusercontent.com/49135797/142743442-7b1d82fe-275f-4767-9802-ae9c4f3883c6.png)

## Table

<img src="https://user-images.githubusercontent.com/49135797/142743061-d0e6b2b5-7769-4059-830f-66507ae98300.png" width = 360/>

## API 명세서

### 👉 [API 명세서](https://creative-mollusk-bff.notion.site/API-22900d3126d747ea9a77a2888bcf8e84)
