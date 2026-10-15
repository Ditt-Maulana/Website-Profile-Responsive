const themeButton = document.getElementById("themeButton");
const textButton = document.getElementById("textButton");
const introText = document.getElementById("introText");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀️ Tema";
  } else {
    themeButton.textContent = "🌙 Tema";
  }
});

textButton.addEventListener("click", function () {
  if (introText.textContent === "Saya tertarik pada dunia teknologi, pemrograman, dan pengembangan website.") {
    introText.textContent = "Saya ingin terus belajar, membuat proyek bermanfaat, dan mengembangkan kemampuan di bidang teknologi.";
    textButton.textContent = "Kembalikan Teks";
  } else {
    introText.textContent = "Saya tertarik pada dunia teknologi, pemrograman, dan pengembangan website.";
    textButton.textContent = "Ubah Teks";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
