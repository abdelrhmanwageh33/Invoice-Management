import express from 'express'
import  connectDB  from './config/db'
import itemRoutes from './routes/itemRoutes'
import dotenv from "dotenv";
import cors from "cors"
const app = express()
const port = 3000
dotenv.config();
app.use(express.json())
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
connectDB()

app.use('/api/invoices',itemRoutes)
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})


