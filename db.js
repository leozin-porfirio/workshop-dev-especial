const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./workshop-dev-especial.db')

db.serialize(function(){
    // Criar a Tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
    
    // Inserir dado na Tabela
    // const query = `
    //INSERT INTO ideas(
    //    image,
    //    title,
    //    category,
    //    description,
    //    link
    //) VALUES(?,?,?,?,?);
    //`

    //const values = [
    //    "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    //    "Meditação",
    //    "Mentalidade",
    //    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente pariatur earum praesentium dolor sint!",
    //    "https://rocketseat.com.br"
    //]

    //db.run(query, values, function(err){
    //    if (err) return console.log(err)

    //    console.log(this)
    //})

    // Deletar um dado da Tabela
    //db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
    //    if (err) return console.log(err)

    //    console.log("Deletei", this)
    //})

    // Consultar dados na Tabela
    //db.all(`SELECT * FROM ideas`, function(err, rows){
    //    if (err) return console.log(err)

    //    console.log(rows)
    //})
})

module.exports = db
