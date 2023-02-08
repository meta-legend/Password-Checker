const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("static"))

app.post('/api', (req, res) => {
  const key = process.env['KEY']
  var output = "";
  if (req.body.key == key) {
    output = "successful"  
  } else {
    output = "incorrect key"
  }
  const response = {
    "authenticated": output 
  }
  res.send(response);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server started on port ${port}`)})