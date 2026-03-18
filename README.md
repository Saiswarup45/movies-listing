# 🎬 MovieZone - Movie Search & Rating App

## 📌 Overview

MovieHub is a modern React-based web application that allows users to search movies, view details, check IMDb ratings, add favorites, and give their own ratings. It uses the OMDb API to fetch real-time movie data.

---
## Live Demo
[MovieZone](https://movies-listing-ebon.vercel.app/)

---

## 🚀 Features

* 🔍 Search movies by name
* ⭐ View IMDb ratings
* 📝 Rate movies (stored in localStorage)
* ❤️ Add / remove favorites
* 🎥 Watch trailers (YouTube search)
* 📱 Fully responsive design
* 🖼️ Handles missing posters with placeholder

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** CSS
* **API:** OMDb API
* **Routing:** React Router
* **Storage:** LocalStorage

---

## 📂 Project Structure

```bash
movie_rating_app/
│
├── dist/                  # Build output
├── node_modules/
│
├── src/
│   ├── api/
│   │   └── movieApi.js
│   │
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── RatingStars.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Favorites.jsx
│   │   └── MovieDetails.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
│
├── .env                   # API key (VITE_MOVIE_API_KEY)
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/moviehub.git
cd moviehub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add API Key

Create a `.env` file in root:

```env
VITE_MOVIE_API_KEY=your_api_key_here
```

Get your API key from: https://www.omdbapi.com/

---

## ▶️ Run the Project

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 🔑 API Used

This project uses the OMDb API to fetch movie data such as:

* Title
* Year
* Poster
* IMDb Rating
* Plot & Details

---

## 💡 Key Functionalities

### 🔍 Movie Search

Users can search any movie using the search bar.

### ⭐ Ratings

* IMDb rating from API
* User rating stored locally

### ❤️ Favorites

* Add/remove movies
* Stored in browser localStorage

### 🎥 Trailer

Redirects to YouTube search for movie trailers.

---

## 🧠 Future Improvements

* 🔥 Trending movies section
* 🎞️ Genre filter
* 📊 Sort by rating/year
* 🌙 Dark/Light mode
* ☁️ Backend for storing user data

---

## 👨‍💻 Author

**Saiswarup swain**

---

## 📜 License

This project is for learning and portfolio purposes.

---
