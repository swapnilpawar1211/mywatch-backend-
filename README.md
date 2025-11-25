# mywatch-backend

Simple Node.js + Express backend for mywatch.com.

## Run locally
1. Install dependencies:
   ```
   npm install
   ```
2. Start server:
   ```
   npm start
   ```
3. API endpoints:
   - GET /watches
   - GET /watches/:id
   - POST /cart   (body: { "id": <watchId> })
   - GET /cart
   - DELETE /cart

## Deploy to Render
1. Push this repository to GitHub.
2. On Render, create a new Web Service and connect to the repo.
3. Use:
   - Build command: `npm install`
   - Start command: `npm start`
Render will provide a public URL (e.g. https://mywatch-backend.onrender.com).
