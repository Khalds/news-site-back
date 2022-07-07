const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(require("./routes/User.route"))
app.use(require("./routes/Category.route"))
app.use(require("./routes/Comment.route"))
app.use(require("./routes/News.route"))

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
