function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
    //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //     document.getElementById("hamburger-nav").style.height = "10vh";
    //   } else {
    //     document.getElementById("hamburger-nav").style.height = "16vh";
    //   }

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("hamburger-nav").style.height = "10vh";

    document.getElementById("desktop-nav").style.height = "12vh";
  
    } else {
        document.getElementById("hamburger-nav").style.height = "16vh";

    document.getElementById("desktop-nav").style.height = "16vh";
  }
}

