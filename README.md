# SYN Class

**AI-powered attendance, marked from a single class photo.**

SYN Class recognizes students by face or voice and keeps every attendance record in one place. This repository contains the landing page that introduces the project and links to the live app.

**Live app:** https://synclass-main.streamlit.app/

## Features

- **Face analysis:** upload a class photo and match each face against enrolled students.
- **Sequential voice ID:** students say "Present" one by one, and each voice is compared with its stored embedding.
- **QR-driven roster:** every subject has a join code, link and QR code, so students enroll themselves.
- **Review before saving:** teachers check each match and confirm or discard the report.
- **Attendance records:** saved sessions are listed by time, subject and students present.

## Tech stack

| Area | Tools |
| --- | --- |
| Platform | Streamlit, Flask |
| Face recognition | face_recognition, dlib |
| Voice recognition | Resemblyzer, Librosa |
| Database and auth | Supabase (PostgreSQL) |

This repository holds only the Flask landing page. The Streamlit app is deployed separately.

## Project structure

```
app.py                 Flask app (single route)
templates/index.html   Page content and links
static/css/style.css   Styles (colors and fonts are variables at the top)
static/js/script.js    Role tabs and step viewer
static/img/            Logo, icon and demo screenshots (WebP)
vercel.json            Vercel deployment config
```

## Run locally

```bash
pip install -r requirements.txt
python app.py
```

Then open http://127.0.0.1:5002.

## Deploy

`vercel.json` is already set up for Vercel's Python runtime. Import the repository in Vercel and deploy.

## Customize

- **Text and links:** edit `templates/index.html`. The app link is the `app_url` variable at the top of `<body>`.
- **Colors and fonts:** change the CSS variables at the top of `static/css/style.css`.
- **Screenshots:** replace the files in `static/img/demo/`.

## Author

**Prithwish Banerjee**

- GitHub: [prithwish-banerjee](https://github.com/prithwish-banerjee)
- LinkedIn: [Prithwish Banerjee](https://www.linkedin.com/in/prithwish-banerjee-624a59359)
- Email: prithwishb60@gmail.com
