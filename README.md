# ๐จโ๐ฉโ๐งโ๐ฆ Familing_Server

## ์๋น์ค๋ช

**Familing** <br>
(2021.11.20 ~ 2021.11.21)

## ์๋น์ค ์๊ฐ

**"๊ฐ์กฑ๊ณผ์ ์ถ์ต ์คํฌํ ์์นด์ด๋น ์๋น์ค"** <br>
์ฌ์ฑ๊ฐ์กฑ๋ถ ํต๊ณ ์๋ฃ์ ๋ฐ๋ฅด๋ฉด ๊ฐ์กฑ๊ณผ์ ์ฌ๊ฐ์๊ฐ์ ํ์ผ 1~2์๊ฐ ์ดํ์ธ ๊ฒฝ์ฐ๊ฐ 74.2%๋ผ๊ณ  ํฉ๋๋ค. <br>
๊ทธ๋งํผ ๊ฐ์กฑ๊ณผ ๋ณด๋ด๋ ์๊ฐ์ด ์ ๋ค๋ ์ด์ผ๊ธฐ์ธ๋ฐ์. <br>

์ ํฌ๋ ๊ฐ์ฅ ์์ ๊ณต๋์ฒด์ธ ๊ฐ์กฑ๊ณผ์ ๋ณด๋ด๋ ์๊ฐ์ด ์ ๋ค๋ ๊ฒ์ ๋ฌธ์ ๋ฅผ ๋๋ผ๊ณ , <br>
์ด๋ฅผ ํด๊ฒฐํ๊ณ ์ ํ๋์ฌ๋ฆฌํ์ ์ด์ฉํ์ฌ ๊ฐ์กฑ๋ค๊ณผ ํจ๊ปํ๋ ์๊ฐ์ ๋๋ฆฌ๋ ๋ฐฉ์์ผ๋ก ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๊ณ ์ ํฉ๋๋ค. <br>

๊ฐ์กฑ๊ณผ์ ์ถ์ต์ ๋จ๊ธฐ๋ฉด ์คํฌํ๋ฅผ ํ๋ํ๋ ๋ฐฉ์์ผ๋ก ๋ณด์๊ฐ์ ๋๋ผ๊ฒ ํ์์ผ๋ฉฐ ์ง๋๋ฌ ๋๋น ์ด๋ฒ๋ฌ์ ๊ฐ์กฑ๊ณผ <br>
๋ณด๋ธ ์๊ฐ์ ์นด์ดํ ํ์ฌ ๊ฐ์กฑ๊ณผ ๋ ๋ง์ ์๊ฐ์ ๋ณด๋ด๋๋ก ๋๊ธฐ๋ถ์ฌ ํฉ๋๋ค. <br>

์ ํฌ๋ ์ด๋ฐ ๋ฐฉ์์ ํตํ์ฌ ๋ง์ ๋ถ๋ค์ด '๊ฐ์กฑ'์ ๋ํ ์๋ฏธ๋ฅผ ๋์๊ธฐ๊ณ  ๋ณด๋ค ๋ ์น๋ฐํ ๊ด๊ณ๋ฅผ ํ์ฑํ๋๋ก ๋๋ ์๋น์ค๊ฐ ๋  ๊ฒ์๋๋ค.

## ๊ฐ๋ฐ ๋ด๋น

### [์ด์นํ](https://github.com/lsh328328)

```
- ์๋ณ memory list GET
- ๋ง์ดํ์ด์ง์ memory ๊ฐ์ GET
```

### [์กฐ์ค์](https://github.com/healing99)

```
- ํน์  memory GET
- memory POST
```

## ๐ Folder Structure

```markdown
๐ฆfunctions
โฃ ๐api
โ โฃ ๐routes
โ โ โฃ ๐memory
โ โ โ โฃ ๐memoryListGET.js
โ โ โ โฃ ๐memoryGET.js
โ โ โ โฃ ๐memoryPOST.js
โ โ โ โฃ ๐index.js
โ โ โฃ ๐profile
โ โ โ โฃ ๐profileGET.js
โ โ โ โฃ ๐index.js
โฃ ๐config
โ โฃ ๐dbConfig.js
โฃ ๐constants
โ โฃ ๐responseMessage.js
โ โฃ ๐statusCode.js
โฃ ๐db
โ โฃ ๐db.js
โ โฃ ๐memory.js
โ โฃ ๐index.js
โฃ ๐lib
โ โฃ ๐util.js
โ โฃ ๐convertSnakeToCamel.js
โฃ ๐.eslintrc.js
โฃ ๐.prettierrc.js
โฃ ๐index.js
```

## ๐ป Code Convention

### ๐ฌ Commit Message Rules

```
[feat] : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ
[update] : ๊ธฐ์กด ํ์ผ ์์  ๋ฐ ๋ณด์
[fix] : ๋ฒ๊ทธ ์์ 
[docs] : ๋ฌธ์ ์ถ๊ฐ, ์์  ๋ฐ ๋ณ๊ฒฝ
[style] : ์ฝ๋ ํฌ๋งทํ, ๋ก์ง์ ๋ณํ๋ ์์ด ๋์ด์ฐ๊ธฐ๋ ํญ ๋ฌธ์ ๋ฑ์ ์ฌ์ํ ๋ณํ
[refactor] : ๋ฆฌํฉํ ๋ง
[test] : ํ์คํธ ์ฝ๋ ์์  ๋ฐ ๋ณ๊ฒฝ (๋ก์ง ๋ณํ ์์)
[chore] : ๊ทธ ์ธ์ ๋ณ๊ฒฝ์ฌํญ (์ฃผ์ ์ถ๊ฐ, ์ญ์  ๋ฑ)
```

**Example**

```
[feat] : ๋ก๊ทธ์ธ api ์ถ๊ฐ
[fix] : ํ์๊ฐ์ ๋ฒ๊ทธ ์์ 
```

### ๐ Branches

- `main` : ๋ฉ์ธ ๋ธ๋์น
  - `main`์ ์ง์ ์ ์ธ commit, push๋ ๊ฐ๊ธ์  ๊ธ์งํฉ๋๋ค
  - ์์ ์ , ๋ฐ๋์ `main` ๋ธ๋์น๋ฅผ pull ๋ฐ๊ณ  ์์ํฉ๋๋ค
    ```
    git pull origin main
    ```
- `develop` : develop ๋ธ๋์น
  - ๊ณํํ ๋ชจ๋  ๊ธฐ๋ฅ ๊ตฌํ & ํ์คํธ ํต๊ณผ ์ `main` ๋ธ๋์น๋ก Pull Request๋ฅผ ๋ณด๋ด์ Merge ํฉ๋๋ค
- `feature/๊ธฐ๋ฅ` : ํด๋น ๊ธฐ๋ฅ ๊ฐ๋ฐ ๋ธ๋์น
  - ์์ ์๋ฃ ์ `main` ๋ธ๋์น๋ก Pull Request๋ฅผ ๋ณด๋๋๋ค
  - ๊ธฐ๋ฅ ๊ฐ๋ฐ ์ `feature/๊ธฐ๋ฅ` ๋ธ๋์น๋ฅผ ํ์ ๊ด๋ฆฌํฉ๋๋ค
    ```
    git branch feature/๊ธฐ๋ฅ
    ```
- ์์ ๊ธฐ๋ฅ๋ณ๋ก `commit message rules`์ ๋ฐ๋ผ ์ปค๋ฐ์ ์งํํฉ๋๋ค
- ๋ค ์ด ๋ธ๋์น๋ ์ญ์ ํฉ๋๋ค

## ๐ Dependencies Module

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

## โจ Base URL

```
https://asia-northeast3-familing-33c14.cloudfunctions.net/api
```

## ERD Diagram

![familing_erd](https://user-images.githubusercontent.com/49135797/142743442-7b1d82fe-275f-4767-9802-ae9c4f3883c6.png)

## Table

<img src="https://user-images.githubusercontent.com/49135797/142743061-d0e6b2b5-7769-4059-830f-66507ae98300.png" width = 360/>

## API ๋ช์ธ์

### ๐ [API ๋ช์ธ์](https://creative-mollusk-bff.notion.site/API-22900d3126d747ea9a77a2888bcf8e84)
