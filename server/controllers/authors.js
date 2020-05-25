const {Author} = require('../models/authorsModel.js')
// bycrypt const goes here


module.exports = {
    // index route
    index: (req,res)=>{
        Author.find()
            .then(data =>{
                console.log(data)
                res.json(data);
            })
    },

    // post form route
    postNew: (req,res)=>{
        const author = new Author();
        author.name = req.body.name
        author.save()  
            .then(addAuthor => {
                console.log("We created:", addAuthor)
                res.json(addAuthor)
            })
            .catch(err => {
                console.log("Error saving Author:", err)
                res.json(err)
            })
    },

    findAuthor: (req,res)=>{
        Author.findOne({_id:req.params.id})
            .then(author =>{
                console.log(author)
                res.json(author)
            })
            .catch(err=>{
                res.json(err)
            })
        },

    deleteAuthor: (req,res)=>{
        console.log("params",req.params)
        Author.deleteOne({_id:req.params._id})
            .then(deleteAuthor => {
                res.json(deleteAuthor)
            })
            .catch(err=>{
                console.log('Error eliminating author:', err)
                res.json(err)
            })
        },
        
    editAuthor: (req,res)=>{
        console.log("params",req.params)
        console.log(req.body)
        Author.findOne({_id:req.params._id})
            .then(author => {
                console.log(author)
                author.name = req.body.name
                author.save()
                    .then(editAuthor =>{
                        res.json(editAuthor)
                    })
                })
            .catch(err=>{
                console.log('Error saving author', err)
            })
        }
    }