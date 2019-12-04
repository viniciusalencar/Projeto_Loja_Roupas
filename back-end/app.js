var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const database = require ('./config/database');
database ('mongodb://localhost:27017/projeto');

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
var testeRouter = require('./routes/teste');
app.use('/teste', testeRouter );

const fornecedor = require('./routes/fornecedor');
app.use('/fornecedor', fornecedor);

const cliente = require('./routes/cliente');
app.use('/cliente', cliente);

const vendedor = require('./routes/vendedor');
app.use('/vendedor', vendedor);

const produto = require('./routes/produto');
app.use('/produto', produto);

const itemvenda = require('./routes/itemvenda');
app.use('/itemvenda', itemvenda);

const vendas = require('./routes/vendas');
app.use('/vendas', vendas);

module.exports = app;
