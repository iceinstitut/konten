
function loadComponent(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function() {
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");
});
