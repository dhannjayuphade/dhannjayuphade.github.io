document.addEventListener("DOMContentLoaded", function () {

  const navHTML = `
  <div class="bottom-nav">
    <a href="index.html">🏠<span>Home</span></a>
    <a href="index2.html">📂<span>Hubs</span></a>
    <a href="gamehub.html">🎮<span>Game</span></a>
    <a href="https://dhannjayuphade.github.io/suvichar/">✅<span>suvichar</a>
    <a href="quizhub.html">🧠<span>Quiz</span></a>
    <a href="ai.html">🤖<span>AI</span></a>
    <a href="login.html">🔐<span>Login</span></a>
  </div>

  <style>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #111;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 12px 0;
    border-top: 2px solid #28a745;
    z-index: 1000;
    box-shadow: 0 -3px 8px rgba(0,0,0,0.6);
  }

  .bottom-nav a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease;
  }

  .bottom-nav a span {
    font-size: 12px;
    margin-top: 3px;
  }

  .bottom-nav a:hover {
    color: #28a745;
    transform: scale(1.2);
  }

  .bottom-nav a.active {
    color: #28a745;
    transform: scale(1.2);
  }

  body {
    padding-bottom: 75px;
  }
  </style>
  `;

  document.body.insertAdjacentHTML("beforeend", navHTML);

  // ===== ACTIVE PAGE DETECT =====
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".bottom-nav a");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

});
