# AgricLearningApp
An offline-friendly Agriculture learning application for SS1–SS3 students, covering WAEC/NECO syllabus topics with structured notes, images, and daily motivational Bible verses.
# 🌾 Agriculture Learning App (SS1–SS3)

An interactive, mobile‑responsive Agriculture learning application for **Senior Secondary School students (SS1–SS3)**, aligned with the **WAEC and NECO syllabus**. Built using **HTML, CSS, and JavaScript**, this app is simple, offline‑friendly, and easy to update.

---

## ✨ Features

* 📘 **SS1–SS3 Class Navigation** – Easy switching between class levels
* 📚 **WAEC / NECO‑based Content** – Structured topics and notes
* 🎯 **Active State Navigation** – Clear indication of selected class
* 📱 **Mobile Responsive Design** – Works smoothly on phones, tablets, and desktops
* ✝️ **Daily Motivation / Bible Verse** – Random verse displayed on app load
* 🖼️ **Images & Illustrations Support**
* 🔌 **Offline Friendly** – No backend or internet required
* ✏️ **Easy Content Update** – Edit notes directly in HTML

---

## 🛠️ Technologies Used

* **HTML5** – Structure and content
* **CSS3** – Styling and responsive layout
* **JavaScript (Vanilla)** – Navigation logic and daily verse generator

No frameworks. No libraries. Beginner‑friendly.

---

## 📂 Project Structure

```
agriculture-learning-app/
│
├── index.html   # App structure & content
├── style.css    # Styling & responsiveness
├── app.js       # App logic & daily verse
└── README.md    # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone or Download

```bash
git clone https://github.com/your-username/agriculture-learning-app.git
```

Or download the ZIP and extract it.

---

### 2️⃣ Run the App

Simply open **index.html** in any modern web browser:

```
Double‑click index.html
```

✅ No installation required

---

## ✏️ How to Update Content

### 🔹 Update Topics & Notes

Open `index.html` and edit the content inside the sections:

```html
<section id="SS1" class="level hidden">
  <article class="topic">
    <h2>Introduction to Agriculture</h2>
    <p>Your new content here...</p>
  </article>
</section>
```

Save and refresh the browser.

---

### 🔹 Update Daily Bible Verses

Open `app.js` and add or edit verses in the array:

```javascript
const verses = [
  { text: "Whatever you do, do it with all your heart.", ref: "Colossians 3:23" },
  { text: "The diligent hands bring wealth.", ref: "Proverbs 10:4" }
];
```

---

## 🌍 Deploy with GitHub Pages

1. Push files to GitHub
2. Go to **Repository → Settings → Pages**
3. Select:

   * Branch: `main`
   * Folder: `/root`
4. Save

Your app will be live at:

```
https://your-username.github.io/agriculture-learning-app/
```

---

## 🎯 Target Users

* Senior Secondary School Students (SS1–SS3)
* Teachers & Schools
* WAEC / NECO Candidates
* Christian Schools & Learning Centers

---

## 🔮 Future Improvements

* Teacher in‑app content editor
* Student login & progress tracking
* Quizzes and CBT‑style tests
* Full WAEC / NECO syllabus coverage
* Android APK version

---

## 🤝 Contributing

Contributions are welcome.
Feel free to fork this repository and improve the project.

---

## 📜 License

This project is open‑source and free to use for educational purposes.

---

**Built with ❤️ for learning, growth, and excellence.**
