import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBUphgViW2NgcMglciHf3tS8LMMfXFC_9E",
  authDomain: "chat-room-a42b9.firebaseapp.com",
  databaseURL: "https://chat-room-a42b9-default-rtdb.firebaseio.com",
  projectId: "chat-room-a42b9",
  storageBucket: "chat-room-a42b9.appspot.com",
  messagingSenderId: "830993674820",
  appId: "1:830993674820:web:d0f04c654513bffc1a0211",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((user) => {
      const name = user.user.displayName;
      const email = user.user.email;
      const photoURL = user.user.photoURL;
      toast.success(`Welcome ${name}`);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("Email", email);
      sessionStorage.setItem("photoUrl", photoURL);
    })
    .catch((error) => {
      toast.warning(`Welcome ${error}`);
    });
};
