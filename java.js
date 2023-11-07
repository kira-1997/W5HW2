let trig=document.getElementById("trigger")
let trans=document.getElementById("trans")
let besid=document.getElementById("besid")
let big=document.getElementById('bigPic')
let changeDog = document.querySelectorAll(".h");
let changeDog1 = document.querySelectorAll(".card-title");
let changeDog2 = document.querySelectorAll(".card-text");





trig.addEventListener('click',function(){
trans.src='https://img.pikbest.com/origin/09/16/96/28SpIkbEsTTPw.png!w700wp'
besid.src='https://media.istockphoto.com/id/1198100351/photo/portrait-of-beautiful-and-fluffy-tri-colored-tabby-cat-at-home-natural-light.jpg?s=612x612&w=0&k=20&c=4p4gjq48aYnD9jNQf9yazpGCpn620btJ5H8VJX3OElo='
big.src='https://img.freepik.com/premium-photo/beautiful-girl-with-her-cute-cat_807689-403.jpg'

changeDog.forEach((item) => {
    item.innerHTML = item.innerHTML.replaceAll("Dog", "Cat");});

changeDog1.forEach((item) => {
    item.innerHTML = item.innerHTML.replaceAll("Dog", "Cat");});

changeDog2.forEach((item) => {
    item.innerHTML = item.innerHTML.replaceAll("Dog", "Cat");});

let doggy=document.getElementById('doggy').innerHTML.replaceAll("Doggy", "Cat")
document.getElementById("doggy").innerHTML=doggy

});


/* hamburgur navbar */

const hamburger=document.querySelector('.hamburger')
const navLinks=document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
 navLinks.classList.toggle('active');
});




