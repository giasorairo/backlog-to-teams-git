import * as functions from 'firebase-functions';
import * as express from "express";    // こう

const app = express();

app.get('/hello', (req, res) => {
  // レスポンスの設定
  res.send('Hello express!')
});

// エンドポイントを追加
app.get('user/:userId', (req, res) => {
  const users = [
    { id: 1, name: 'りゅうおう' },
    { id: 2, name: 'ハーゴン' },
    { id: 3, name: 'バラモス' },
    { id: 4, name: 'ゾーマ' },
    { id: 5, name: 'ピサロ' },
  ];
  // req.params.userIdでURLの後ろにつけた値をとれる
  const targetUser = users.find((user) => user.id === Number(req.params.userId));
  res.send(targetUser);
});


const api = functions.https.onRequest(app);
module.exports = { api };

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
