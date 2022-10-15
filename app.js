import express from 'express'
import { router } from './src/routes/index.js';
import { engine } from 'express-handlebars'
/* ----------------------- inicializacion del servidor ---------------------- */
const app = express();
app.listen(3000, ()=> console.log("Server listening on port 3000"));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

/* ---------------------- definicion motor de plantilla --------------------- */
app.engine('hbs', engine({extname: 'hbs'}))
app.set('views', './src/views') //ubicacion de templates
app.set('view engine', 'hbs') // definitar motor para express



app.use(express.static('public'))
app.use('/', router)
