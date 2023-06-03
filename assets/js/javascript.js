document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".mobile-box").style.display = "block";
});

document.querySelector(".navbar-toggle").addEventListener("click", function () {
  document.querySelector(".pension-box").style.display = "block";
});


document.querySelector(".burger-cross").addEventListener("click", function () {
  document.querySelector(".mobile-box").style.display = "none";
});

document.querySelector(".burger-cross-2").addEventListener("click", function () {
  document.querySelector(".pension-box").style.display = "none";
});
