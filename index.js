const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Basic HTML page with better structure
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CI/CD Pipeline Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #F0F0F0;
        }
        .container {
          text-align: center;
          padding: 2rem;
          background-color: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          border-radius: 8px;
        }
        h1 {
          color: #007ACC;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.1rem;
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Hello from CI/CD Pipeline!</h1>
        <p>This Node.js app was deployed using GitHub Actions and Docker Hub 🎉</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
