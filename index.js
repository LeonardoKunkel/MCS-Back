const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      personalRuta = require('./routes/personalRuta'),
      app = express(),
      cors = require('cors');

// Conexión a base de datos
mongoose.connect("mongodb://localhost:27017/CMS", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        .then(() => console.log('Base de datos en línea'))
        .catch((error) => console.log('Error'));

// Middlewares
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/personal', personalRuta);

//Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a las APIs de CMS' );
});

app.listen('3000', () => console.log('Está vivo'));