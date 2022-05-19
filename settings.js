const fs = require('fs')
const chalk = require('chalk')

//---------( APIKEY )---------//
global.APIs = {
zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

//---------( SETTING )---------//
global.owner = ['6282252285143','6285600380823']
global.premium = ['6282252285143','6285600380823']
global.ownernomer = '6282252285143'
global.ownername = 'Ryan AdT'
global.botname = 'RynzZBot'
global.footer = 'Ryan AdT'
global.thumb = fs.readFileSync('./image/fake.jpg')
global.veloriy = fs.readFileSync('./image/kagura.mp4')
global.sessionName = 'session'
global.packname = '© X-One Bot Ryan 🔥  LR X ONE : 6282252285143'
global.author = '2022'
global.sp = '⭔'

//---------( INFO )---------//
global.youtube = '-'
global.ig = 'https://instagram.com/yann.xyz_88'
global.mygc = 'https://chat.whatsapp.com/Hh71t3HGLE0EL22nxxCnT3'
global.myweb = 'https://github.com/RyanXone'
global.email = 'jbyannstore@gmail.com'
global.region = 'spanish'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'
global.limitawal = {
premium: "Infinity",
free: 8,
}

//---------( RANDOM IMAGE )---------//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//---------( MESSAGES )---------//
global.mess = {
success: '*Done.*',
admin: '*Fitur Khusus Admin Group!*',
botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
owner: '*Fitur Khusus Owner Bot*',
group: '*Fitur Digunakan Hanya Untuk Group!*',
private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Sedang Di Proses..._',
error: '_Fitur Sedang Error!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//---------( PEMBATAS )---------//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})