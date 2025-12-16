// ================= DAILY VERSE LOGIC =================
const verses = [
  { text: "Whatever you do, do it with all your heart.", ref: "Colossians 3:23" },
  { text: "The diligent hands bring wealth.", ref: "Proverbs 10:4" },
  { text: "Those who sow in tears shall reap in joy.", ref: "Psalm 126:5" },
  { text: "Commit your work to the Lord, and your plans will succeed.", ref: "Proverbs 16:3" },
  { text: "The hard worker will be rewarded.", ref: "Proverbs 12:14" }
];

function loadDailyVerse() {
  const random = verses[Math.floor(Math.random() * verses.length)];
  const textEl = document.getElementById('verseText');
  const refEl = document.getElementById('verseRef');

  if (textEl && refEl) {
    textEl.textContent = `“${random.text}”`;
    refEl.textContent = random.ref;
  }
}

window.addEventListener('DOMContentLoaded', loadDailyVerse);

function showSection(id, btn) {
  // Hide all sections
  document.querySelectorAll('.level').forEach(section => {
    section.classList.add('hidden');
  });

  // Show selected section
  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.classList.remove('hidden');
  }

  // Remove active state from all buttons
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.remove('active');
  });

  // Add active state to clicked button
  if (btn) {
    btn.classList.add('active');
  }
}
