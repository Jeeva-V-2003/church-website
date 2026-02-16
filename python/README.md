# LHMM Website - Flask Version

Bible Standard Ministries - LHMM India Website built with Flask

## Setup

1. Create virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
python app.py
```

4. Open browser to: http://localhost:5000

## Features

- Home page with dispensation chart and motto card
- About page with LHMM history and editors
- Resources page (Magazines and Bible Studies)
- Responsive design
- LHMM-specific doctrines and beliefs
- Tamil language section

## Structure

```
python/
├── app.py              # Flask application
├── requirements.txt    # Python dependencies
├── templates/          # HTML templates
│   ├── base.html
│   ├── index.html
│   ├── about.html
│   └── resources.html
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── bg.jpg
│       ├── dispensation_chart.jpg
│       └── motto.png
```
