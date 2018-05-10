const express = require('express');
const expressMongoDb = require('express-mongo-db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3080;

app.use(expressMongoDb('mongodb://localhost/passe'));
app.use(bodyParser());
app.use(cors());


// métodos para inserir e visualizar informações no banco de dados
// cadastro
app.get('/cadastro', function (req, res) {
    req.db.collection('cadastro').find().toArray(function (erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }

        res.send(dados);
    });
});


app.post('/cadastro', (req, res) => {

    req.db.collection('cadastro').save(req.body, (err, data) => {
        if (!err)
            res.status(200).json({"Dados inseridos!");
        else
            res.status(500).json({ "LALA": "LALA" })
    })


});

// app.post('/cadastro', function (req, res) {
//     req.db.collection('cadastro').insert(req.body, function (erro, dados) {
//         if (erro) {
//             res.status(500).send('Um erro ocorreu!');
//             return;
//         }
//         res.send('Dados inseridos!');
//     });
// });

// ==============================FIM DOS MÉTODOS===============================



// métodos para inserir e visualizar informações no banco de dados
// LOGIN
app.get('/login', function (req, res) {
    req.db.collection('login').find().toArray(function (erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }

        res.send(dados);
    });
});

app.post('/cadastro', (req, res) => {

    req.db.collection('cadastro').save(req.body, (err, data) => {
        if (!err)
            res.status(200).json({"Dados inseridos!");
        else
            res.status(500).json({ "LALA": "LALA" })
    })


});

// app.post('/login', function (req, res) {
//     req.db.collection('login').insert(req.body, function (erro, dados) {
//         if (erro) {
//             res.status(500).send('Um erro ocorreu!');
//             return;
//         }
//         res.send('Dados inseridos!');
//     });
// });

// ==============================FIM DOS MÉTODOS===============================

//Porta por onde o servidor vai estar escutando

app.listen(port, function () {
    console.log('Servidor rodando na porta 3080');
});