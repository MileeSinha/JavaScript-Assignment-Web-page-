var allb = document.getElementById("allb");
var cupb = document.getElementById("dogb");
var iceb = document.getElementById("birdb");
var cakeb = document.getElementById("rabitb");
var all = document.getElementById("all");
var cup = document.getElementById("dog");
var ice = document.getElementById("bird");
var cake = document.getElementById("rabit");
var title = document.getElementById("title");
var search = document.getElementById("search");
var body = document.getElementsByTagName("body");
search.addEventListener("keyup", function () {
  var input = search.value.toUpperCase();
  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    var ititle = cards[i].querySelector(".card-title").innerHTML;
    ititle = ititle.toUpperCase();
    if (ititle.includes(input)) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
});
allb.addEventListener("click", function () {
  title.innerHTML = "All";
  dogb.classList.remove("active");
  birdb.classList.remove("active");
  rabitb.classList.remove("active");
  this.classList.add("active");
  dog.style.display = "block";
  bird.style.display = "block";
  rabit.style.display = "block";
});
dogb.addEventListener("click", function () {
  title.innerHTML = "Dogs";
  allb.classList.remove("active");
  this.classList.add("active");
  birdb.classList.remove("active");
  rabitb.classList.remove("active");
  dog.style.display = "block";
  bird.style.display = "none";
  rabit.style.display = "none";
});
birdb.addEventListener("click", function () {
  title.innerHTML = "Birds";
  allb.classList.remove("active");
  dogb.classList.remove("active");
  this.classList.add("active");
  rabitb.classList.remove("active");
  dog.style.display = "none";
  bird.style.display = "block";
  rabit.style.display = "none";
});
rabitb.addEventListener("click", function () {
  title.innerHTML = "Rabits";
  allb.classList.remove("active");
  dogb.classList.remove("active");
  birdb.classList.remove("active");
  this.classList.add("active");
  dog.style.display = "none";
  bird.style.display = "none";
  rabit.style.display = "block";
});
