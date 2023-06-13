//const os = require('os')

// informação sobre o usuário atual__
//const user = os.userInfo()
//console.log(user);

// system uptime em segundos__
//console.log(os.uptime());


//const currentOs = {
//    name: os.type(),
//    release: os.release(),
//    totalMem: os.totalmem(),
 //   freeMeme: os.freemem(),
//}
//console.log(currentOs);

// path, caminho 
//const path = require('path')

//const filePath = path.join('/content', 'join', 'text.txt')


// file reading
//const {readFileSync, writeFileSync} = require('fs')
// const fs = require('fs') também serve
//const first = readFileSync('./first.txt', 'utf8')
//const second = readFileSync('./second.txt', 'utf-8')

// writeFileSync('./result-sync.txt', `Here is the resut: ${currentOs.name}`)
//console.log(first)
//console.log(second)

//console.log(path.sep);

//forma 1 de ler um arquivo
//const {readFile, writeFile} = require('fs');
//const { rejects } = require('assert');

//readFile('./result-sync.txt', 'utf8', (err, result) => {
 //   if (err) {
 //       console.log(err);
 //       return
 //   }
 //   console.log(result);
//})


//forma 2
// Uma forma melhor de fazer isso ali em cima é assim: 
//const { readFile } = require('fs')

//const getText = (path) => {//
 //   return new Promise((resolve, reject) => {
//        readFile(path, 'utf8', (err, data) => {
 //           if (err) {
 //               reject(err)
 //           } else {
 //               resolve(data)
 //           }
   //     })
 //   })
//}
//getText('./result-sync.txt')
 //   .then((result) => console.log(result))
// .catch((err) => console.log(err))

// NENHUM DESSES DOIS JEITOS É O JEITO CERTO E SIM O SEGUINTE:

const { readFile, writeFile } = require('fs').promises
const util = require('util')
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./result-sync.txt', 'utf8')
        await writeFile('./novo arquivo.txt', `Esse é um novo arquivo de texto criado com magia`, {flag: 'a'})
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}
start()
//const log = require('./logger.js')
//log('message')
//const path = require('path');
//let pathObj = path.parse(__filename);






    //const names = require('./2-names')
   // const digaOla = require('./1-globals')
   // const data = require('./3-otherWayToExport')
   // require('./4-funcSum')
   // console.log(data.items)
   // console.log(data.singlePerson)
    //digaOla(names.jhon)
    //digaOla(names.peter)
    //digaOla(names.gabriel)
    
















