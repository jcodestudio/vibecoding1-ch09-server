// --- 1. 필요한 프로그램들을 불러옵니다. ---
const express = require('express'); 

// --- 2. 서버의 기본 설정을 합니다. ---
const app = express(); 
const port = process.env.PORT || 8080;

// --- 3. 손님(클라이언트)의 요청에 어떻게 응답할지 결정합니다. ---

// 메인 페이지: HTML과 CSS를 코드 안에 직접 넣어 보냅니다. (폴더 없이 파일 하나로!)
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>초간단 서버</title>

        </head>
        <body>
            <h1>서버가 아주 간단하게 작동 중입니다! 🚀</h1>

        </body>
        </html>
    `);
});

// JSON 데이터 응답
app.get('/api', (req, res) => {
    res.json({ "msg": "Hello world" });
});

// --- 4. 서버를 시작합니다. ---
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`);
    });
}

// Vercel 배포를 위해 수고해주는 코드
module.exports = app;