const mongoose = require('mongoose');

const url = "mongodb+srv://ednaldo1901:DfgzQwL9Ux93mERg@cluster0.xu9gm.mongodb.net/livraria";

mongoose.connect(url)
    .then(() => {
        console.log('Conectado ao MongoDB!');
    })
    .catch((erro) => {
        console.log('Erro ao conectar ao MongoDB:', erro);
    });

mongoose.Promise = global.Promise;

module.exports = mongoose;




