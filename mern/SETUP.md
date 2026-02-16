# Quick Setup Guide

## Installation Steps

### 1. Backend Setup
```bash
cd backend
npm install
npm run start:dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 3. MongoDB Setup
Make sure MongoDB is running on localhost:27017 or update the connection string in backend/.env

## Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Seed Sample Data (Optional)
You can use the API endpoints to add sample data:

### Add Daily Manna
```bash
curl -X POST http://localhost:5000/daily-manna \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2024-01-15",
    "title": "Walking in Faith",
    "scripture": "Hebrews 11:1",
    "verse": "Now faith is confidence in what we hope for and assurance about what we do not see.",
    "content": "Faith is the foundation of our Christian walk...",
    "prayer": "Lord, strengthen our faith daily...",
    "reflection": "How can I demonstrate faith today?"
  }'
```

### Add Magazine
```bash
curl -X POST http://localhost:5000/magazines \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Bible Standard",
    "month": "January",
    "year": 2024,
    "coverImage": "/images/magazine-jan-2024.jpg",
    "pdfUrl": "/pdfs/magazine-jan-2024.pdf",
    "description": "Monthly spiritual publication",
    "isPublished": true
  }'
```

### Add Event
```bash
curl -X POST http://localhost:5000/events \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sunday Worship Service",
    "date": "2024-12-25",
    "time": "10:00 AM",
    "location": "Main Church Hall",
    "description": "Join us for Christmas worship",
    "speaker": "Pastor John Smith"
  }'
```

## Troubleshooting

### Port Already in Use
- Backend: Change PORT in backend/.env
- Frontend: Set PORT=3001 in frontend/.env

### MongoDB Connection Error
- Ensure MongoDB is running: `sudo systemctl start mongod`
- Check connection string in backend/.env

### Module Not Found
- Delete node_modules and package-lock.json
- Run `npm install` again
