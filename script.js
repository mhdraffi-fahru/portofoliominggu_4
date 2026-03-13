document.addEventListener("DOMContentLoaded", function(){

/* =====================
   1 DARK / LIGHT MODE
===================== */

const toggle = document.getElementById("themeToggle");
const icon = document.querySelector(".icon");

toggle.addEventListener("change", function(){

if(this.checked){
document.body.classList.add("light");
icon.textContent="☀️";
}else{
document.body.classList.remove("light");
icon.textContent="🌙";
}
   
document.body.offsetHeight;   

});

/* =====================
   2 STICKY NAVBAR
===================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }

});


/* =====================
   3 SMOOTH SCROLL
===================== */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const targetID = this.getAttribute("href");
    const targetSection = document.querySelector(targetID);

    if(targetSection){
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


/* =====================
   4 VALIDASI FORM
===================== */

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const nama = form.nama.value.trim();
  const email = form.email.value.trim();
  const pesan = form.pesan.value.trim();

  if(nama === "" || email === "" || pesan === ""){
    msg.textContent="⚠️ Semua form harus diisi.";
    msg.style.color="red";
    return;
  }

  if(!email.includes("@")){
    msg.textContent="⚠️ Format email tidak valid.";
    msg.style.color="red";
    return;
  }

  msg.textContent="✅ Pesan berhasil dikirim!";
  msg.style.color="lightgreen";

  form.reset();

});

});
