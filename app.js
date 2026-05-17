let bodyColor = document.getElementById("hi");
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (bodyColor.style.backgroundColor === "white") {
    bodyColor.style.backgroundColor = "black";
    bodyColor.style.color = "white";
    icon.className = "fa-solid fa-sun";
  } else {
    bodyColor.style.backgroundColor = "white";
    bodyColor.style.color = "black";
    icon.className = "fa-solid fa-moon";
  }
};
