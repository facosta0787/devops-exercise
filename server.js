const app = require('./app')

app.listen(3000, (error) => {
  if(error){
    console.log(error)
    process.exit(1)
}
console.log(`[app-log] Server is running and listening on http://localhost:3000`)
})