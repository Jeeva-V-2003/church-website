# Bible Standard Ministries - LHMM Website

A professional, modern multi-page religious website built with the MERN stack and NestJS, featuring elegant design, smooth animations, and comprehensive content management.

## 🌟 Features

### Multi-Page Architecture
- **Home Page**: Hero section with floating animations, feature cards, and today's manna preview
- **Daily Manna**: Full devotional content with scripture, reflection, and prayer sections
- **Magazines**: Grid layout with magazine covers, download functionality, and detail pages
- **Events**: Tabbed interface for upcoming/past events with detailed event pages
- **About**: Mission statement, core values, and ministry history timeline
- **Contact**: Contact form with information cards and social media links

### Design Features
- **Elegant Religious Theme**: Warm brown and sand color palette
- **Glass Morphism Effects**: Modern translucent design elements
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Mobile-first approach
- **Floating Elements**: Dynamic background animations
- **Hover Effects**: Interactive card transformations

## 🚀 Tech Stack

### Backend
- **NestJS**: Enterprise-grade Node.js framework
- **MongoDB**: NoSQL database with Mongoose ODM
- **TypeScript**: Type-safe development
- **Class Validator**: Input validation
- **RESTful API**: Clean API architecture

### Frontend
- **React 18**: Modern React with hooks
- **React Router v6**: Multi-page routing
- **Framer Motion**: Animation library
- **Axios**: HTTP client
- **React Icons**: Icon library
- **CSS3**: Custom styling with modern effects

## 📁 Project Structure

```
mern/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── daily-manna/
│   │   │   ├── magazine/
│   │   │   └── events/
│   │   ├── common/
│   │   ├── config/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── common/
    │   │       ├── Navbar.js
    │   │       └── Footer.js
    │   ├── pages/
    │   │   ├── HomePage.js
    │   │   ├── DailyMannaPage.js
    │   │   ├── MagazinePage.js
    │   │   ├── MagazineDetailPage.js
    │   │   ├── EventsPage.js
    │   │   ├── EventDetailPage.js
    │   │   ├── AboutPage.js
    │   │   └── ContactPage.js
    │   ├── styles/
    │   ├── App.js
    │   └── index.js
    ├── public/
    └── package.json
```

## ⚡ Quick Start

```bash
# Clone and setup entire project
git clone https://github.com/Jeeva-V-2003/church-website.git
cd church-website
npm run setup
npm run dev
```

Project will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

### Backend Setup

```bash
cd mern/backend
npm install
```

Create `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/lhmm
PORT=5000
NODE_ENV=development
```

Start backend:
```bash
npm run start:dev
```

Backend runs on: http://localhost:5000

### Frontend Setup

```bash
cd mern/frontend
npm install
npm start
```

Frontend runs on: http://localhost:3000

## 📡 API Endpoints

### Daily Manna
- `GET /daily-manna/today` - Get today's devotion
- `GET /daily-manna/all` - Get all devotions
- `GET /daily-manna/:date` - Get devotion by date
- `POST /daily-manna` - Create new devotion

### Magazines
- `GET /magazines` - Get all published magazines
- `GET /magazines/latest` - Get latest magazine
- `GET /magazines/:id` - Get magazine by ID
- `POST /magazines` - Create new magazine

### Events
- `GET /events` - Get all events
- `GET /events/upcoming` - Get upcoming events
- `GET /events/past` - Get past events
- `GET /events/:id` - Get event by ID
- `POST /events` - Create new event

## 🎨 Design System

### Color Palette
- Primary: `#8B4513` (Saddle Brown)
- Secondary: `#D4A574` (Tan)
- Accent: `#C19A6B` (Camel)
- Light: `#F5E6D3` (Champagne)
- Dark: `#3E2723` (Dark Brown)

### Typography
- Primary Font: Georgia, Times New Roman (Serif)
- Elegant and readable for religious content

### Effects
- Glass morphism with backdrop blur
- Smooth hover transitions
- Floating bubble animations
- Card elevation on hover
- Gradient backgrounds

## 🔧 Customization

### Adding New Pages
1. Create page component in `frontend/src/pages/`
2. Create corresponding CSS in `frontend/src/styles/`
3. Add route in `App.js`
4. Add navigation link in `Navbar.js`

### Modifying Colors
Update CSS variables in `frontend/src/styles/App.css`:
```css
:root {
  --primary: #8B4513;
  --secondary: #D4A574;
  /* ... */
}
```

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🚀 Deployment

### Backend Deployment
- Deploy to Heroku, AWS, or DigitalOcean
- Set environment variables
- Configure MongoDB Atlas for production

### Frontend Deployment
- Build: `npm run build`
- Deploy to Netlify, Vercel, or AWS S3
- Update API endpoint in production

## 📄 License
© 2024 Bible Standard Ministries. All rights reserved.

## 🤝 Contributing
This is a ministry project. For contributions, please contact the ministry administration.

## 📞 Support
For technical support or questions:
- Email: info@biblestandard.org
- Phone: +1 (555) 123-4567

---

Built with ❤️ for spreading the Gospel
