const author = require('../controllers/authors.js')
var path = require("path");



module.exports = function(app){

    app.get("/showAll", author.index);

    app.get("/showOne:_id", author.findAuthor)

    app.post("/add", author.postNew)

    app.put("/edit/:_id", (req,res) => {
        author.editAuthor (req, res)
    });

    app.delete("/destroy/:_id",(req,res) =>{
        author.deleteAuthor(req,res)
    });

    app.all("*",(req,res,next)=> {
        res.sendFile(path.resolve("./authors/dist/authors/index.html"))
    });
}