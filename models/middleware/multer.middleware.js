const multer = require("multer")

const storage = multer.diskStorage({
  destination(req, file, cd) {
    cd(null, "images")
  },
  filename(req, file, cd) {
    cd(null, file.originalname)
  },
})

const types = ["image/png", "image/jpeg", "image/jpg", "image/svg"]

const fileFilter = (req, file, cd) => {
  if (types.includes(file.mimetype)) {
    cd(null, true)
  } else {
    cd(null, false)
  }
}

module.exports = multer({ storage, fileFilter })
