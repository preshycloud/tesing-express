const express = require("express")
const app = express()

const port = 9000

const userRoute = require('./routes/userRoute')
const serviceRoute = require('./routes/serviceRoute')
const productRoute = require('./routes/productRoute')

app.get('/', (req, res) => {
    res.send("Welcome Home")
})

app.use(userRoute)
app.use(serviceRoute)
app.use(productRoute)
app.use(express.json())


app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})