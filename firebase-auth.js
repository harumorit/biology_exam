// firebase-auth.js
import { auth, db } from "./firebase-init.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

/**
 * users/{uid} に保存するデータ形
 * { wrongs: string[] }
 */

export function watchAuthState(onChange) {
  return onAuthStateChanged(auth, async (user) => {
    onChange(user || null);
  });
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

export async function logout() {
  await signOut(auth);
}

// ---- Firestore: wrongs のロード/セーブ ----
export async function loadWrongs(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return [];
  const data = snap.data();
  return Array.isArray(data.wrongs) ? data.wrongs : [];
}

export async function saveWrongs(uid, wrongs) {
  const ref = doc(db, "users", uid);
  // merge: true で他のデータを壊さない
  await setDoc(ref, { wrongs }, { merge: true });
}
