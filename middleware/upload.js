const multer = require("multer");
const mime = require("mime-types");
const path = require("path");

// const multerStorageData = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, "../public/uploads"));
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(
//             null,
//             `${file.fieldname}-${uniqueSuffix}.${mime.extension(
//                 file.mimetype,
//             )}`,
//         );
//     },
// });

const storage = multer.memoryStorage()
const upload = multer({ storage: storage  });
// ini untuk export file agar bisaa di gunakan pada file lain
module.exports = upload;