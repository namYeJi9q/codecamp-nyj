import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCWqRdgVcMc6cf7B5LYxabmTlDLHqNBKVg",
  authDomain: "climbingground.firebaseapp.com",
  projectId: "climbingground",
  storageBucket: "climbingground.appspot.com",
  messagingSenderId: "324426905667",
  appId: "1:324426905667:web:571190b15c6ffcd9617cf6",
  measurementId: "G-SP4WL6FFDZ",
};

export const firebaseapp = initializeApp(firebaseConfig);
