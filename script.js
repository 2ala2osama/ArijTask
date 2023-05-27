
// to open navbar
function openNavbar() {
  document.getElementById("navbar").style.width = "100%";
}
//to close navbar
function closeNavbar() {
  document.getElementById("navbar").style.width = "0%";
}
// to flip the hexagon
function flipHexagon(id) {
  let hexagon = document.getElementById(id);  
  if (!hexagon.classList.contains("flip")) {
    hexagon.classList.add("flip");
  } else {
    hexagon.classList.remove("flip");
  }
}