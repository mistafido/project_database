const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


const UserRouter = require("./routes/User")
const EmployeeRouter = require("./routes/Employee")
const ProjectRouter = require("./routes/Project")
const ReportRouter = require("./routes/Report")
const ContractorRouter = require("./routes/Contractor")

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.use('/user', UserRouter);
app.use('/employee', EmployeeRouter)
app.use('/contractor', ContractorRouter)
app.use('/project', ProjectRouter)
app.use('/report', ReportRouter)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})