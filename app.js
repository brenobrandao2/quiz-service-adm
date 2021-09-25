import express from 'express'
import quizRouter from './src/routes/quiz.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/quiz', quizRouter)

app.listen(3000)