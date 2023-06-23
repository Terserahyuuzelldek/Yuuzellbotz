const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["628811365099@s.whatsapp.net"] // ISI NOMOR MU
global.nomerOwner = "628811365099"//ISI NOMOR MU
global.nomorOwner = ['628811365099']//ISI NOMOR MU
global.namaDeveloper = "𝙍𝙮𝙪𝙪𝙯𝙞𝙣𝙣 𝙖𝙯𝙖𝙯𝙚𝙡"
global.namaBot = "Yuuzellbotz"
global.packname = ""
global.author = "Sticker By Yuuzell"
global.thumb = fs.readFileSync("./thumb.jpg")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh Dayy & Sanzz
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/