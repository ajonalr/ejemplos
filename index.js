require('dotenv').config()

const express = require('express')
const morgan = require('morgan')


const userRoute = require('./routes/user.routes')
const productRoute = require('./routes/product.routes')
const sequelize = require('./database/connection')


const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/user', userRoute)
app.use('/product', productRoute)

const PORT = process.env.PORT || 3000


sequelize.sync({
    force: false
})
.then(() => {
        console.log('🔄 Tablas sincronizadas con éxito.');
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ No se pudo sincronizar la base de datos:', err);
    });

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
