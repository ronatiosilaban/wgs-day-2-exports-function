//deklarasi fs
const fs = require('fs');
//deklarasi readline
const readline = require('readline');

//untuk sign in data dan output ke terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//deklarasi nama folder & file
const folder = './data'
const filepath = "./data/contacts.json";


//pengkondisian apabila folder tidak ada atau file tidak ada, akan dibuat folder & baru
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder)
}
if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, '[]')
}

const pertanyaan = (ask) => {
    return new Promise((resolve, reject) => {
        rl.question(ask, (jawaban) => {
            resolve(jawaban)
        })

    })
}


const getcontacts = (Name, Number, Email) => {
    const contact = [Name, Number, Email];
    const file = fs.readFileSync(filepath, 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync(filepath, JSON.stringify(contacts));
    console.log("Terimakasih sudah memasukkan data!");
    rl.close()
}

//exports function yang ingin dipanggil di file js lain
module.exports = { pertanyaan, getcontacts }


