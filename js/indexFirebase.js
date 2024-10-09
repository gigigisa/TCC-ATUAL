import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCHV4TMM33wG1ipmiuzS_NUDx8s0LrvzSQ",
    authDomain: "cherryblossomcb.firebaseapp.com",
    databaseURL: "https://cherryblossomcb-default-rtdb.firebaseio.com",
    projectId: "cherryblossomcb",
    storageBucket: "cherryblossomcb.appspot.com",
    messagingSenderId: "981485780049",
    appId: "1:981485780049:web:5b1a934a3d4999a8d94c70"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const email=document.querySelector('#Digite seu email');
const password=document.querySelector('#Digite sua senha');

const addItem = async (data) => {
    const newItemRef = ref(db, 'Cadastro'); 
    const newItemKey = push(newItemRef).key; 

    try {
        await set(ref(db, `Cadastro/${newItemKey}`), data);
        console.log('Documento adicionado com ID: ', newItemKey);
    } catch (error) {
        console.error('Erro ao adicionar documento: ', error);
    }
};

CADASTRAR.addEventListener('click', () => {
    addItem({ 
        nome: nome.value, 
        ra: ra.value 
    });
});
    