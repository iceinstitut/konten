fetch("head.html")
  .then(response => response.text())
  .then(data => {
    document.head.insertAdjacentHTML("beforeend", data);
  });