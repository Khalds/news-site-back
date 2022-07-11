const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: "Нет доступа(not authorization)" })
  }

  const [type, token] = authorization.split(" ")

  if (type !== "Bearer") {
    return res.status(401).json({ error: "Неверный тип токен" })
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY)

    next()
  } catch (e) {
    return res.status(401).json({ error: "Ошибка авторизации" + e.toString() })
  }
}
