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


// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const btn = document.querySelector('#redefinirsenha');

const email = document.querySelector('#email')
const password = document.querySelector('#email')
const btn = document.querySelector('#email')



// GET pelo email
const getItemByEmail = async (email) => {
    const itemsRef = ref(db, 'Cadastro'); // Altere 'Alunos' para a sua coleção
    try {
        const snapshot = await get(itemsRef);
        if (snapshot.exists()) {
            const items = snapshot.val(); // Obtenha todos os dados como um objeto
            let foundItem = null;

            // Percorre sua coleção para encontrar pelo RA
            Object.keys(items).forEach((key) => {
                if (items[key].email === email) {
                    foundItem = { key, ...items[key] }; // Salva o documento encontrado
                }
            });



            if (foundItem) {
                console.log('Email encontrado:', foundItem);
            } else {
                console.log('Nenhum email encontrado:', email);
            }
        } else {
            console.log('Nenhum email encontrado!');
        }
    } catch (error) {
        console.error('Erro ao obter o email: ', error);
    }
};


// Exemplo de uso:
getItemByEmail('outroluiz@gmail.com'); 
// Altere 'RA_DO_ALUNO' para o RA real
