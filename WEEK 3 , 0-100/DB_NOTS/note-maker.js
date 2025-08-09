const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://aryanjhaop:y8AczO8vm6v2PD90@cluster0.dn3bnq9.mongodb.net/notesApp")
app.use(express.json());

const allNotes = mongoose.model('keepNotes',  {title : String, content : String, author : String});

app.post("/upload", function(req,res){
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;

    const newNote = new allNotes({
        title : title,
        content : content,
        author : author,
    })

    newNote.save();

    res.send("updated")
})
app.listen(3030);