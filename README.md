<div align="center">

  <img src="https://img.shields.io/badge/CAMPUSCODE-DASHBOARD%20RECREATION-7458F8?style=for-the-badge&logo=react&logoColor=white" alt="CampusCode Dashboard Recreation" />

  <h1>CampusCode Dashboard Recreation - Round-1</h1>
  

  <p>
    A bold, student-first event platform recreated with React, reusable UI components,
    animated transitions, and a focused dashboard experience.
  </p>

  <p>
    <a href="https://re-build-26-campus-code.vercel.app/">
      <img src="https://img.shields.io/badge/Explore%20Live%20Site-7458F8?style=for-the-badge&logo=vercel&logoColor=white" alt="Explore live site" />
    </a>
    <a href="https://github.com/ArnavRajDas/ReBuild-26_CampusCode">
      <img src="https://img.shields.io/badge/View%20Source-181717?style=for-the-badge&logo=github&logoColor=white" alt="View source code" />
    </a>
  </p>

  <p>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    
  </p>

</div>

<br />


## A student platform with an arena mindset

CampusCode is a front-end recreation of a modern student ecosystem where people can discover events, join competitions, build teams, and keep track of their progress.

The experience is designed around a clear journey:

```text
Discover  →  Create an account  →  Enter the dashboard  →  Join events  →  Track activity
```

This project was created for the **CampusCode Dashboard Recreation challenge** with an emphasis on visual detail, component reuse, responsive layouts, and a complete multi-page flow.

## Live experience

<div align="center">

### [Open the CampusCode Landing page ↗](https://re-build-26-campus-code.vercel.app/)



</div>



> Authentication in this recreation is browser-based. Users and the active session are stored in `localStorage`; no production backend is connected.

## Demo video

<div align="center">

  <!-- Replace the link below with the GitHub-generated video URL when publishing the showcase. -->
  

https://github.com/user-attachments/assets/fc3ac17d-9288-43aa-89a0-5490e31b5826


  <p><i>A short walkthrough of the CampusCode landing page, authentication flow, and student dashboard.</i></p>

</div>

## Inside the experience

### 01 / Landing page

The public entry point introduces the CampusCode identity through a large editorial hero, high-contrast typography, community messaging, event-focused sections, and clear calls to action.

### 02 / Registration and login

The authentication screens use a shared visual frame and reusable form components. The flow includes:

- Student account registration
- Password confirmation
- CAPTCHA generation on registration
- Login validation
- Protected dashboard navigation
- Animated login security state

### 03 / Student overview

The dashboard brings the most important student activity into one place:

- Welcome and profile context
- Featured event highlight
- Activity statistics
- Event discovery cards
- Sidebar navigation
- Responsive content sections

### 04 / Events

The events area is built for quick scanning and discovery. Users can switch between:

- All events
- Hackathons
- Quizzes

Each event card presents its status, description, key facts, and a clear next action.

### 05 / My Events

The personal activity view collects registered events in one space, including registration details, team information, status, and an entry point into each event journey.

## Routes at a glance

| Screen | Path | Description |
| --- | --- | --- |
| Landing | `/` | Public CampusCode introduction |
| Login | `/login` | Existing user access |
| Register | `/register` | New student account creation |
| Student overview | `/student` | Protected dashboard home |
| Events | `/student/events` | Filterable event discovery |
| My Events | `/student/my-events` | Registered event activity |

## Design and interaction details

The recreation keeps the interface energetic without making it difficult to use:

- **Editorial layout:** oversized headings, strong spacing, and modular content blocks
- **Color system:** ink, cream, purple, lime, and accent colors used consistently across pages
- **Motion layer:** route fade transitions powered by Framer Motion
- **Cursor glow:** subtle pointer-following ambient light on the main experience
- **Hover states:** tactile responses for buttons, navigation, cards, and calls to action
- **Responsive styling:** page-specific layouts adapt across desktop and smaller screens
- **Shared auth shell:** registration and login remain visually connected while serving different flows

## Built with

| Tool | Role in the project |
| --- | --- |
| React | Component-based application UI |
| React Router | Client-side navigation and protected routes |
| Vite | Development server and production bundling |
| Framer Motion | Page transitions and motion effects |
| CSS | Responsive layout, visual system, and interaction states |
| Browser localStorage | Demo users and session persistence |

## Project structure

```text
Round1.1/
└── React/
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    ├── src/
    │   ├── assets/
    │   │   └── what-is-campuscode.mp4
    │   ├── components/
    │   │   ├── auth/
    │   │   ├── common/
    │   │   ├── events/
    │   │   ├── landing/
    │   │   ├── motion/
    │   │   └── student/
    │   ├── data/
    │   │   └── eventsData.js
    │   ├── hooks/
    │   ├── pages/
    │   │   ├── Dashboard/
    │   │   ├── Events/
    │   │   ├── Login/
    │   │   ├── MyEvents/
    │   │   ├── Register/
    │   │   └── StudentDashboard/
    │   ├── styles/
    │   │   ├── pages/
    │   │   └── shared/
    │   ├── utils/
    │   │   └── auth.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```






- A remote database
- Production authentication
- Real event registration APIs
- Persistent cross-device user accounts
- Server-side form validation

The local data layer keeps the project easy to run and lets the complete interface be explored without additional services.

## Author

**Arnav Raj**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ArnavRajDas)

---

## Credits

Created as part of the **ReBuild '26 — CampusCode Dashboard Recreation** challenge.

<div align="center">

  <br />
  <strong>Build ideas. Find your people. Enter the arena.</strong>

</div>
