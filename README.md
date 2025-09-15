# 🍿 usePopcorn

A movie tracking app built with **React**, where you can search for movies, view details, and keep track of what you’ve watched.  
This project was created as part of practicing React hooks, component composition, and custom hooks.

---

## 🚀 Features

- 🔍 **Search movies** using the OMDb API.  
- 🎬 **View movie details** (title, year, poster, plot, ratings).  
- ⭐ **Track watched movies** and store them in local storage.  
- 📊 **Watched summary** with average ratings and runtime.  
- ⚡ **Custom hooks** for movies, local storage, and keyboard events.  
- 🎨 **Reusable UI components** (`Box`, `Main`, `Loader`, etc.).  

---

## 🛠️ Tech Stack

- [React](https://react.dev/) (functional components + hooks)  
- [OMDb API](https://www.omdbapi.com/) for movie data  
- Custom hooks (`useMovies`, `useLocalStorageState`, `useKey`)  
- CSS for styling  

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/usepopcorn.git
   cd usepopcorn
   
2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start the development server**
    ```bash
    npm start
    ```

---

## 📂 Project Structure
```
src/
│ App.js
│ index.js
│ index.css
│
├── components/
│ ├── Navbar/
│ │ ├── NavBar.jsx
│ │ ├── Logo.jsx
│ │ ├── Search.jsx
│ │ └── NumResults.jsx
│ │
│ ├── Movies/
│ │ ├── MoviesList.jsx
│ │ └── Movie.jsx 
│ │
│ ├── Watched/
│ │ ├── WatchedList.jsx
│ │ ├── WatchedMovie.jsx
│ │ ├── WatchedSummary.jsx
│ │ └── MovieDetails.jsx
│ │
│ └── UI/
│ ├── Main.jsx
│ ├── Box.jsx
│ ├── Loader.jsx
│ └── ErrorMessage.jsx
│
└── hooks/
   ├── useMovies.js
   ├── useLocalStorageState.js
   └── useKey.js

```
