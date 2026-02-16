#!/bin/bash

echo "🚀 Starting LHMM Website..."
echo ""

# Install root dependencies
echo "📦 Installing concurrently..."
npm install

# Start both servers
echo ""
echo "✨ Starting Backend (Port 5000) and Frontend (Port 3000)..."
npm start
