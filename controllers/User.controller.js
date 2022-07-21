const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User.model")

require("dotenv").config()

module.exports.userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (e) {
      res.json(e.message)
    }
  },

  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body
      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      )
      const user = await User.create({ login, password: hash })

      res.json(user)
    } catch (e) {
      return res.status(400).json({ error: "Пользователь уже существует" })
    }
  },

  loginUser: async (req, res) => {
    try {
      const { login, password } = req.body

      const candidate = await User.findOne({ login })

      if (!candidate) {
        return res.status(401).json({
          error: "Недействительное имя пользователя",
        })
      }
      const valid = await bcrypt.compare(password, candidate.password)

      if (!valid) {
        return res
          .status(401)
          .json({ error: "Недействительный пароль пользователя" })
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
      }

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      })
      res.json({
        userId: payload.id,
        token: token,
        login: payload.login,
      })
    } catch (e) {
      res.json({ error: e.message })
    }
  },

  removeUserById: async (req, res) => {
    const { id } = req.params

    try {
      const user = await User.findByIdAndRemove(id)

      res.json(user)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на удаление" })
    }
  },

  patchUserAdminById: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          role: req.body.role,
        },
        { new: true }
      )
      res.json(user)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },
}
