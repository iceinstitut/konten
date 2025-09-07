fetch("/konten/head.html")
  .then(response => response.text())
  .then(data => {
    const temp = document.createElement("div");
    temp.innerHTML = data;

    // Proses <link> langsung
    temp.querySelectorAll("link").forEach(link => {
      document.head.appendChild(link);
    });

    // Proses <script> manual
    temp.querySelectorAll("script").forEach(oldScript => {
      const newScript = document.createElement("script");
      newScript.src = oldScript.src;
      if (oldScript.defer) newScript.defer = true;
      document.head.appendChild(newScript);
    });
  });
