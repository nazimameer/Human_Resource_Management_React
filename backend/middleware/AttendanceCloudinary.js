const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dryyxpwdn",
  api_key: "327651128498575",
  api_secret: "ZnrqgmQCZpW0eDT7rKoMBEKgcBM"
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Attendance",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});           
  


const multer = require("multer");
const fileFilter = (req, file, cb) => {
  if (!["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
    return cb(new Error("File is not an image"));
  }
  return cb(null, true);
};

const upload = multer({ storage, fileFilter});

module.exports = (req, res, next) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      if (err.message === "File is not an image")
      return res.json({imageError:'Selected file is not an image'})
    }
    return next();   
  });
}; 
