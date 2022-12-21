const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const programmingLanguagesRouter = require('./routes/programmingLanguages')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res ) => {
    
    res.json({message : "OK"})
})

app.use("/languages", programmingLanguagesRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
})

app.listen(PORT, () => {
    console.log(`server is listening in http://localhost:${PORT}`);
})