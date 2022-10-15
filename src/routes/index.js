/* ---------------------------- import de express --------------------------- */
import {Router} from "express"
/* ------------------- import de clase contenedora y otros ------------------ */
import {Contenedor}  from '../components/contenedor.js'
import {verificarRequest} from '../components/utils.js'
/* --------------------------- constantes globales -------------------------- */
const router = Router();
const productos = new Contenedor('producto.txt')

/* ---------------------------------- rutas --------------------------------- */
router.get('/', (req, res)=>{
    res.render('home')
})

/* --------- GET '/api/productos/' -> devuelve todos los productos. --------- */
router.get('/productos', async (req, res)=>{
    try{
        const productosAll = await productos.getAll()
        if ( productosAll){
            res.render('productos', {productos : productosAll})
        }
    }
    catch(error){
        res.status(500).send('Error en el servidor')
    }
});

/* ------  POST '/api/productos/' -> recibe y agrega un producto, y lo devuelve con su id asignado. ----- */
router.post('/productos', async (req, res)=>{
    try{
        const nuevoProducto = req.body;
        req.body.price = parseFloat(req.body.price) //en el formulario es requerido que sea number
        const verificaRequest = verificarRequest(req.body);
        if(typeof(verificaRequest)!== "string"){ //Si devuelve String es un error
            await productos.save(nuevoProducto)
            res.redirect('/')
        } else res.json({error: verificaRequest})        
    }catch(error){
        res.status(500).send('Error en el servidor')
    }    
})

export{router}