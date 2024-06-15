
function registrarUsaurio(event) {

    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;


    console.log(nome);
    console.log(email);


    var mysql = require("mysql2");


    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "projetoCadastroEletronjs",
    });


    connection.connect(function (error) {
        if (error) {
            console.log(error.code);
            console.log(error.fatal);
        }
    })



    var query = `INSERT INTO cadastro (nome,email) VALUES ("${nome.value}", "${email.value}")`;



    connection.query(query, function (error) {
        if (error) {
            console.log("Ocorreu um erro ao inserir no banco de dados")
        } else {
            alert("Usuário cadastrado com sucesso")
        }
    })
}


var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", registrarUsaurio);