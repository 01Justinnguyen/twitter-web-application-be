import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import userRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'
import { defaultErrorHandler } from '~/middlewares/error.middlewares'

config()
databaseService.connect()

const app = express()
const PORT = process.env.PORT || 8888

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: process.env.API_ROOT,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE']
  })
)

app.use('/users', userRouter)

// Error handler
app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
