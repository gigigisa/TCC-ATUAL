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
const btn = document.querySelector('#cadastro');
const email = document.querySelector('#email');
const password = document.querySelector('#password');







const addItem = async (data) => {
    const newItemRef = ref(db, 'Cadastro');
    const newItemKey = push(newItemRef).key;

    try {
        await set(ref(db, `Cadastro/${newItemKey}`), data);
        console.log('Documento adicionado com ID: ', newItemKey);
        alert('Cliente cadastrado com sucesso!');
        window.location.href = 'produtos2.html';
    } catch (error) {
        console.error('Erro ao adicionar documento: ', error);
        alert('Erro ao cadastrar o cliente. Tente novamente.');
    }
};

// Função para validar os campos de nome e RA
const validarCampos = () => {
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    return true;
};


btn.addEventListener('click', () => {
    if (validarCampos()) {
        addItem({
            email: email.value,
            password: password.value
        });
        
       
    }
});


    //PEGAR O EMAIL CADASTRADO
    // GET pelo ra

