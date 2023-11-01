// Local Storage
let nameForm = document.getElementById('username').value;
let usernameForm = document.getElementById('usernameUser').value;
let emailForm = document.getElementById('email').value;
let senhaForm = document.getElementById('senha').value;
let confSenhaForm = document.getElementById('confSenha').value;
let dataForm = document.getElementById('dtNasc').value;
let cepForm = document.getElementById('cep').value;
let ruaForm = document.getElementById('rua').value;
let numForm = document.getElementById('num').value;
let bairroForm = document.getElementById('bairro').value;
let cidadeForm = document.getElementById('cidade').value;
let ufForm = document.getElementById('uf').value;

let dados = {name: nameForm, username: usernameForm, email: emailForm, senha: senhaForm, data: dataForm, cep: cepForm, rua: ruaForm, num: numForm, bairro: bairroForm, cidade: cidadeForm, uf: ufForm}

let usernameSalvo = JSON.parse(localStorage.getItem(dados)).username;
let senhaSalvo = JSON.parse(localStorage.getItem(dados)).senha;

const cadastrar = document.getElementById('cadastrar');
const aprender = document.getElementById('aprender');
const aprenderCSS = document.getElementById('aprenderCSS');
const aprenderHTML = document.getElementById('aprenderHTML');
const voltarC = document.getElementById('voltarC');
const voltarS = document.getElementById('voltarS');
const relCadastro = document.getElementById('relCadastro');
const recSenha = document.getElementById('recSenha');
const tempoAtraso1 = 1500;
const tempoAtraso2 = 3500;

if (cadastrar || aprender) {
    cadastrar.addEventListener('click', function () {
        window.location.href = 'cadastro.html';
    });
    
    aprender.addEventListener('click', function () {
        const errorMessage = document.getElementById("errorMessageCadastro");
        if (document.getElementById('usernameUser').value == "" || document.getElementById('password').value == ""){
            errorMessage.textContent = "Nem todos os campos estão preenchidos!";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "Login bem-sucedido!";
            errorMessage.style.color = "green";
            setTimeout(function () {
                errorMessage.textContent = "Redirecionando...";
                errorMessage.style.color = "black";
            }, tempoAtraso1);
            setTimeout(function () {
                window.location.href = "index.html";
            }, tempoAtraso2);
        }
    });

} else if (aprenderCSS || aprenderHTML) {
    aprenderCSS.addEventListener('click', function () {
        window.location.href = 'leiaC.html';
    });
    aprenderHTML.addEventListener('click', function () {
        window.location.href = 'leiaH.html';
    });
} else if (voltarC || relCadastro) {
    voltarC.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
    relCadastro.addEventListener('click', function () {
        localStorage.setItem(usernameForm, JSON.stringify(dados));
        const errorMessage = document.getElementById("errorMessageCadastro");
        if (document.getElementById('username').value == "" || document.getElementById('usernameUser').value == "" || document.getElementById('email').value == "" || document.getElementById('senha').value == "" || document.getElementById('confSenha').value == "" || document.getElementById('dtNasc').value == "" || document.getElementById('cep').value == "" || document.getElementById('rua').value == "" || document.getElementById('num').value == "" || document.getElementById('bairro').value == "" || document.getElementById('cidade').value == "" || document.getElementById('uf').value == "") {
            errorMessage.textContent = "Nem todos os campos estão preenchidos!";
            errorMessage.style.color = "red";
        } else if (document.getElementById('senha').value != document.getElementById('confSenha').value) {
            errorMessage.textContent = "Senhas não conferem!";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "Cadastro bem-sucedido!";
            errorMessage.style.color = "green";
            setTimeout(function () {
                errorMessage.textContent = "Redirecionando...";
                errorMessage.style.color = "black";
            }, tempoAtraso1);
            setTimeout(function () {
                window.location.href = "login.html";
            }, tempoAtraso2);
        }
    });
} else if (voltarS || recSenha) {
    voltarS.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
    recSenha.addEventListener('click', function () {
        const errorMessage = document.getElementById("errorMessageSenha");
        if (document.getElementById('password').value == "" || document.getElementById('confPasswd').value == "") {
            errorMessage.textContent = "Nem todos os campos estão preenchidos!";
            errorMessage.style.color = "red";
        } else if (document.getElementById('password').value != document.getElementById('confPasswd').value) {
            errorMessage.textContent = "Senhas não conferem!";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "Senha recuperada!";
            errorMessage.style.color = "green";
            setTimeout(function () {
                errorMessage.textContent = "Redirecionando...";
                errorMessage.style.color = "black";
            }, tempoAtraso1);
            setTimeout(function () {
                window.location.href = "login.html";
            }, tempoAtraso2);
        }
    });
};