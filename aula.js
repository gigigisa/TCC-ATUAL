import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app-combat.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-analytics-compat.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5XUscVAeIt7OKKeU08MupoK5UchV1K64",
    authDomain: "aula-3c218.firebaseapp.com",
    databaseURL: "https://aula-3c218-default-rtdb.firebaseio.com",
    projectId: "aula-3c218",
    storageBucket: "aula-3c218.appspot.com",
    messagingSenderId: "1028722652881",
    appId: "1:1028722652881:web:6b7c0c8815f33ae7c2b7f0",
    measurementId: "G-FDP2EDD4WZ"
  };

  firebaseConfig.initializeApp(firebaseConfig);

  /*document.querySelector('#Benviar').addEventListener('click,'function(){
    const email= document.getElementById('email').value;
    const senha= document.getElementById('senha').value;

    firebase.auth.signInWithEmailAndPassword(email, senha)
    .then(response =>{
        alert("Usuario conectado com sucesso!");
    });
    .catch(error =>{
        alert("Usuario não encontrado | email ou seha incorretos");
        console.log("Erro!", erro);
   });
  });/*
  
  //redefinir senha//