const FunMode = {

  underwater() {
    document.body.classList.toggle("underwater");
    this.save("underwater");
  },

  roll() {
    document.body.classList.add("roll");
    setTimeout(() => {
      document.body.classList.remove("roll");
    }, 1000);
  },

  gravity() {
    let items = document.querySelectorAll("div, img, p, h1, button");
    items.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("fall");
      }, i * 80);
    });
    this.save("gravity");
  },

  reset() {
    document.body.classList.remove("underwater", "roll");
    document.querySelectorAll(".fall").forEach(el => {
      el.classList.remove("fall");
    });
    localStorage.removeItem("funMode");
  },

  save(mode){
    localStorage.setItem("funMode", mode);
  },

  load(){
    let mode = localStorage.getItem("funMode");
    if(mode === "underwater") this.underwater();
    if(mode === "gravity") this.gravity();
  }

};

// Auto load last mode
window.onload = () => FunMode.load();

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if(e.key === "u") FunMode.underwater();
  if(e.key === "g") FunMode.gravity();
  if(e.key === "r") FunMode.roll();
  if(e.key === "x") FunMode.reset();
});
