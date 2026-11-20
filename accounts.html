/* accounts.js – lets one browser keep several logged-in accounts and switch between them (like Google).
   Every account lives in its own Firebase "app slot". The slot in use is saved in localStorage ("acctActive").
   All pages call getSlotApp() instead of initializeApp(), so they all follow the active account. */
import { initializeApp, getApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

export const CONFIG = {
  apiKey: "AIzaSyDz443NrLvqfceSGMzNPThMS3vuJ2z0vPY",
  authDomain: "dhannjay-website.firebaseapp.com",
  databaseURL: "https://dhannjay-website-default-rtdb.firebaseio.com",
  projectId: "dhannjay-website",
  storageBucket: "dhannjay-website.firebasestorage.app",
  messagingSenderId: "73314948186",
  appId: "1:73314948186:web:e7d64f04ba3221a21df463",
  measurementId: "G-Y76NHS7ZV8"
};

const LIST = 'acctList', ACTIVE = 'acctActive', PREV = 'acctPrev';
const read = (k, d) => { try{ const v = localStorage.getItem(k); return v === null ? d : v; }catch(e){ return d; } };
const write = (k, v) => { try{ localStorage.setItem(k, v); }catch(e){} };
const erase = k => { try{ localStorage.removeItem(k); }catch(e){} };

/* the remembered accounts of this browser: [{slot, uid, name, email, photo}] */
export function accounts(){
  try{ const a = JSON.parse(read(LIST, '[]')); return Array.isArray(a) ? a : []; }catch(e){ return []; }
}
function saveList(a){ write(LIST, JSON.stringify(a)); }

export function activeSlot(){ return read(ACTIVE, 'main'); }
export function setActive(slot){ write(ACTIVE, slot); }

/* the Firebase app of the active account ("main" = the normal default app, so old logins keep working) */
export function getSlotApp(slot){
  slot = slot || activeSlot();
  const name = slot === 'main' ? undefined : slot;
  try{ return getApp(name); }catch(e){ return initializeApp(CONFIG, name); }
}

/* start adding another account: switch to a fresh empty slot, remember where we came from */
export function newSlot(){
  write(PREV, activeSlot());
  const s = 'a' + Date.now().toString(36);
  setActive(s);
  return s;
}
export const isAdding = () => !!read(PREV, '');
export function clearAdding(){ erase(PREV); }
export function cancelAdding(){ const p = read(PREV, ''); if(p) setActive(p); erase(PREV); }

/* small square picture so the list stays light */
function thumb(url){
  return new Promise(res=>{
    if(!url) return res('');
    if(/^https:\/\//.test(url)) return res(url.length < 600 ? url : '');
    const im = new Image();
    im.onload = ()=>{
      try{
        const c = document.createElement('canvas'); c.width = c.height = 64;
        const s = Math.min(im.width, im.height);
        c.getContext('2d').drawImage(im, (im.width-s)/2, (im.height-s)/2, s, s, 0, 0, 64, 64);
        res(c.toDataURL('image/jpeg', .7));
      }catch(e){ res(''); }
    };
    im.onerror = ()=>res('');
    im.src = url;
  });
}

async function dropAuth(slot){
  try{ await signOut(getAuth(getSlotApp(slot))); }catch(e){}
}

/* save / refresh the entry of the active account */
export async function remember(info){
  const slot = activeSlot();
  const photo = await thumb(info.photo);
  let a = accounts();
  const dup = a.filter(x => x.uid === info.uid && x.slot !== slot);   // same person logged in twice: keep one
  a = a.filter(x => !(x.uid === info.uid && x.slot !== slot));
  const rec = { slot, uid:info.uid, name:info.name || '', email:info.email || '', photo };
  const i = a.findIndex(x => x.slot === slot);
  if(i >= 0) a[i] = rec; else a.push(rec);
  saveList(a);
  dup.forEach(d => dropAuth(d.slot));
}

/* log an account out of this browser and forget it */
export async function removeAccount(slot){
  await dropAuth(slot);
  saveList(accounts().filter(x => x.slot !== slot));
}

/* slot to show after the active account has gone */
export function nextSlot(){
  const a = accounts();
  return a.length ? a[0].slot : 'main';
}
