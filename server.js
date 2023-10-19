const express = require('express');
const db = require('./db');
const logger = require('morgan');
const cors = require('cors')

const proteinController = require('./controllers/proteinController');
const creatineController = require('./controllers/creatineController');
const stimController = require('./controllers/stimController');
const multiController = require('./controllers/multiController');


const PORT = process.env.PORT || 3001;


const app = express();
app.use(express.json())
app.use(cors())
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('Server running on port 3001. Connected to mongoDB')
})

app.get('/protein', proteinController.getAllProtein)
app.get('/protein/:id', proteinController.getProteinById)
app.post('/protein', proteinController.createProtein)
app.put('/protein/:id', proteinController.updateProtein)
app.delete('/protein/:id', proteinController.deleteProtein)

app.get('/multi', multiController.getAllMulti)
app.get('/multi/:id', multiController.getMultiById)
app.post('/multi', multiController.createMulti)
app.put('/multi/:id', multiController.updateMulti)
app.delete('/multi/:id', multiController.deleteMulti)


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
    })