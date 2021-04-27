import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyB8xSMtW7dWjZMvuTeAZ2pCwb80LqTZyFM",
  authDomain: "okidokicasecom.firebaseapp.com",
  databaseURL: "https://okidokicasecom-default-rtdb.firebaseio.com",
  projectId: "okidokicasecom",
  storageBucket: "gs://okidokicasecom.appspot.com",
  messagingSenderId: "116147824841",
  appId: "1:116147824841:web:e36be4ef8d47a5039fc518",
});

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .use(messagePlugin)
      .mount("#app");
  }
});
