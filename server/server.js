require('./config/config');


const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      usuariosRuta = require('../routes/usuariosRuta'),
      loginRuta = require('../routes/loginRuta'),
      authRuta = require('../routes/authRuta'); 
      app = express(),
      cors = require('cors');

// Conexión a base de datos
mongoose.connect("mongodb://localhost:27017/CMS", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        .then(() => console.log('Base de datos en linea'))
        .catch((error) => console.log('Error'));

// Middlewares
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a las APIs de CMS' );
});
app.use('/user', usuariosRuta);
app.use('/user/login', loginRuta);
app.use('/user/auth', authRuta);

app.listen(process.env.PORT, () => console.log('Estoy vivo'));