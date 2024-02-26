import express from 'express';
import {dirname,join} from 'path';
import {fileURLToPath} from 'url';

import indexRoutes from './routes/index.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

// Establezco config. con Metodo set (Vistas y ruta de las vistas)

console.log(join(__dirname,'views'));
app.set('views', join(__dirname,'views'));
app.set('view engine','ejs');

// Para utilizar las Routes, le indico aqui que debe usar con metodo use()

app.use(indexRoutes); // Var o metodo 'indexRoutes' declarado en linea 5 con 'import'

app.use(express.static(join(__dirname,'public')))

// primer URl de mi Servidor
// se movieron los app.get() a ./src/routes/index.js 


app.listen(process.env.PORT || 3000)
console.log('Servidor escuchando por Puerto: ',process.env.PORT || 3000);


