// 🔥 Auto Inject CSS
const style = document.createElement("style");
style.innerHTML = `

body{transition:0.5s}

/* 🌊 Underwater */
body.underwater{
  animation:wave 3s infinite ease-in-out;
  filter:hue-rotate(180deg) blur(1px);
}
@keyframes wave{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(10px)}
}

/* 🔁 Roll */
body.roll{
  transform:rotate(360deg);
  transition:1s;
}

/* 🧲 Gravity */
.fall{
  animation:fall 1s forwards;
}
@keyframes fall{
  to{transform:translateY(500px);opacity:0.5}
}

/* 👻 Horror */
body.horror{
  background:black;
  color:red;
  animation:flicker 0.2s infinite;
}
@keyframes flicker{
  0%,100%{opacity:1}
  50%{opacity:0.85}
}

/* 🌫 Fog */
.fog{
  position:fixed;
  width:100%;
  height:100%;
  background:rgba(200,200,200,0.1);
  animation:fogMove 10s linear infinite;
}
@keyframes fogMove{
  from{transform:translateX(0)}
  to{transform:translateX(200px)}
}

/* 🩸 Blood */
.blood{
  position:fixed;
  top:0;
  width:100%;
  height:0;
  background:red;
  animation:drip 3s forwards;
}
@keyframes drip{
  to{height:100px}
}

/* 💥 Ripple */
.ripple{
  position:fixed;
  border-radius:50%;
  background:rgba(0,150,255,0.4);
  transform:scale(0);
  animation:ripple 0.6s linear;
}
@keyframes ripple{
  to{transform:scale(10);opacity:0}
}

/* 🎛 Panel */
.fun-panel{
  position:fixed;
  bottom:90px;
  right:20px;
  background:#111;
  padding:10px;
  border-radius:10px;
  z-index:9999;
}
.fun-panel button{
  margin:5px;
  padding:8px;
  background:#333;
  color:white;
  border:none;
  border-radius:5px;
}
`;
document.head.appendChild(style);

// 🎮 Fun Object
const Fun = {

  underwater(){
    document.body.classList.toggle("underwater");
  },

  roll(){
    document.body.classList.add("roll");
    setTimeout(()=>document.body.classList.remove("roll"),1000);
  },

  gravity(){
    document.querySelectorAll("*").forEach((el,i)=>{
      setTimeout(()=>el.classList.add("fall"), i*50);
    });
  },

  horror(){
    document.body.classList.toggle("horror");

    let f=document.createElement("div");
    f.className="fog";
    document.body.appendChild(f);

    let b=document.createElement("div");
    b.className="blood";
    document.body.appendChild(b);

    setTimeout(()=>{f.remove();b.remove()},3000);
  },

  full(){
    this.underwater();
    this.gravity();
    this.roll();
  },

  reset(){
    document.body.className="";
    document.querySelectorAll(".fall").forEach(e=>e.classList.remove("fall"));
  }

};

// 🎛 Auto Panel Inject
const panel = document.createElement("div");
panel.className="fun-panel";
panel.innerHTML = `
<button onclick="Fun.underwater()">🌊</button>
<button onclick="Fun.roll()">🔁</button>
<button onclick="Fun.gravity()">🧲</button>
<button onclick="Fun.horror()">👻</button>
<button onclick="Fun.full()">🎮</button>
<button onclick="Fun.reset()">♻</button>
`;
document.body.appendChild(panel);

// 💥 Ripple
document.addEventListener("click",(e)=>{
  let r=document.createElement("div");
  r.className="ripple";
  r.style.left=e.clientX+"px";
  r.style.top=e.clientY+"px";
  document.body.appendChild(r);
  setTimeout(()=>r.remove(),600);
});

// ⌨️ Keyboard
document.addEventListener("keydown",(e)=>{
  if(e.key==="u") Fun.underwater();
  if(e.key==="g") Fun.gravity();
  if(e.key==="r") Fun.roll();
  if(e.key==="h") Fun.horror();
});

// ⏱ Auto Mode (30 sec)
setInterval(()=>{
  let arr=["underwater","gravity","roll"];
  let rand=arr[Math.floor(Math.random()*arr.length)];
  Fun.reset();
  Fun[rand]();
},30000);
