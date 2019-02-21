const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings

// Coloca el puerto a utilizar
app.set('port', process.env.PORT || 3000);

// Middlewares

//Morgan genera información acerca de las peticiones 
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/task.routes'));

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto ${app.get('port')}`);
});