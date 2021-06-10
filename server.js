// constant email and password for admin
const email = "kingbook@gmail.com";
const password = "kingbook";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const ejs = require("ejs");

// model import
const Note = require("./models/Note");
const indexRouter = require("./routes");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));


let notes

mongoose.connect(
    "mongodb+srv://ihtiyor:ihtiyor12345@cluster0.og8zg.mongodb.net/notesDB",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
);

// my own routes for telegram bot
indexRouter(app);


//home routes
app.get("/", function (req, res) {
    return res.render("index");
});

app.post("/", async (req, res, nexts) => {
    try {
        const books = ["Ingliz - O'zbek", "Ingliz - Rus", "Rus - O'zbek"];
        const { tab, title, content } = req.body;

        await Note.create({
            name: title,
            phone: content,
            book: books[tab],
            // date: Date().toLocaleString()
            // date: new Date(),
            date: Date().toLocaleString("en-UZ")
        });

        res.redirect("/");
    } catch (err) {
        res.redirect("/")
        console.warn(err)
    }
});

app.get("/indexmap", function (req, res) {
    return res.render("indexMap");
});


//courses routes

app.get("/kurslar", function (req, res) {
    return res.render("kurslar");
});

app.get("/api/kurslar", async function (req, res) {
    const courses = await Note.find().sort({ date: 'desc' })
    res.send(courses)
})

app.post("/api/kurslar", async (req, res, next) => {
    try {
        const course = await Note.create(req.body)

        // res.send(course)
        res.redirect("/kurslar")
    } catch (error) {
        // res.redirect("/kurslar")
        console.log(error)
    }
})

// delete method
app.post('/api/kurslar/:id', async (req, res,next) => {
    try {
        const deletedCourse = await Note.findByIdAndDelete(req.params.id)
        notes = await Note.find().sort({ date: 'desc' })
        res.send("Ushbu muvaffaqiyatli o'chirildi ")
    } catch (error) {
        // res.redirect("/kurslar")
        console.log(error)
    }
})


// admin routes
app.get("/admin", (req, res, nexts) => {
    console.warn("salom2");
    res.redirect("/login");
});

app.get("/admin", (req, res) => {
    res.render("index.ejs", { name: req.user.name });
});

app.post("/admin", async (req, res, nexts) => {
    console.log("req.isAuth");
    notes = await Note.find().sort({ date: 'desc' })
    if (req.body.email == email && req.body.password == password) {
        res.render("admin", { notes });
    } else {
        res.redirect("/login");
    }
});




//login route
app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/login", async (req, res, next) => {
    notes = await Note.find().sort({ date: 'desc' })
    if (req.body.email == email && req.body.password == password) {
        console.warn("wqertyu");
        res.redirect("/admin", { notes });
    } else {
        res.redirect("/login");
    }
});


//user route
app.get("/user", async (req, res) => {
    let note = await Note.find();
    res.json(note);
});

//added for login

//added for login
// app.use(passport.initialize());
// app.use(passport.session());


//----//

app.listen(4000, function () {
    console.log("server is running on 4000");
});
