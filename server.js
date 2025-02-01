const express = require("express")
const path = require("path")
const UsersComponent = require("./UsersComponent")
const app = new express()
const PORT = 8080



const usersComponent = new UsersComponent("./state.json")
//cose da implementare
//autoidentificazione
//signup -- mandare il codice in un'altra pagina 


// Per abilitare il parsing delle form in formato urlencoded
app.use(express.urlencoded({ extended: true }))

// Middleware per servire i file statici
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendStatus(501) //TODO, 501 è lo stato del "not implemented"
})

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/login.html"))
})

app.post("/login", (req, res) => {
  console.log(req.body)
  res.sendStatus(501) //TODO
})

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/signup.html"))
})

app.post("/signup", (req, res) => {
  console.log(req.body)
  res.sendStatus(501) //TODO
})
//sta cercando di individuare ciò che abbiamo chiesto
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./public/404.html"))
})
app.listen(PORT, () => console.log("server listening on port", PORT))


