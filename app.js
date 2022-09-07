
//pemanggilan function dari file function.js kedalam variable
const func = require('./function')

const main = async () => {
    const Name = await func.pertanyaan('Masukan Nama ?');
    const Number = await func.pertanyaan('masukan Number ?');
    const Email = await func.pertanyaan('masukan email ? ')
    func.getcontacts(Name, Number, Email)
}

main()

