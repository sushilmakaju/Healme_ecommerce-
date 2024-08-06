// const math = require('./math') //import the math module
// // const filereading = require('./file') //import the math module

const connectDB = require("./src/config/db")

// let sum = math.add(1,2)
// console.log(sum)

// let sub = math.subtract(1,2)
// console.log(sub)

// let div = math.divide(1,2)
// console.log(div)

// let mul = math.multiply(1,2)
// console.log(mul)


// const fs = require('fs');

// fs.readFile('node.txt', 'utf-8', (err, data) =>{
//     if (err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// // Create (Write data to a file)
// const createFile = (fileName, content) => {
//     fs.writeFile(fileName, content, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log(`File ${fileName} created successfully`);
//     });
// };
// createFile('node.txt', 'This is the initial content.');

// // Update (Append data to a file)
// const updateFile = (fileName, content) => {
//     fs.appendFile(fileName, content, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log(`File ${fileName} updated successfully`);
//     });
// };
// updateFile('node.txt', '\nThis is appended content.');

// const deleteFile = (fileName) => {
//     fs.unlink(fileName, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log(`File ${fileName} deleted successfully`);
//     });
// };
// deleteFile('node.txt');

// const http = require("http")

// const server = http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type': 'text/plain'})
//     res.end('helloworld')
// })

// server.listen(8080, () => {
//     console.log("server is running on port 8080")
// })



// app.get("/",(req, res) =>{
//     res.send("Hello world");
// }
// )
// app.listen(port, () =>{
//     console.log("server is running")
// })

// const users = [
//     {id:1 , name:"ram"},
//     {id:2 , name:"ramu"},
//     {id:3 , name:"rai"}
// ]

// app.get("/users/:id",(req, res)=>{
//     const id= parseInt(req.params.id);
//     const user = users.find(user => user.id === id)
//     if (user){
//         res.json(user)
//     }else{
//         res.status(404).send("user not found")
//     }
// })

const userProfileRoutes = require('./src/routes/userprofileroutes')
const profileRoutes = require('./src/routes/profileRoutes')
const authRoutes = require('./src/routes/authuser_route')
const categoryRoutes = require('./src/routes/categoryRoutes')
const productRoutes = require('./src/routes/productroutes')
const cors = require('cors')
const express = require('express'); 
const app = express();
const port = 4000;
require("dotenv").config();

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Healme')
//   .then(() => console.log('Connected!'));


connectDB()


  app.use(express.json());
  app.use(cors());

  app.use('/user', userProfileRoutes)
  app.use('/api/auth', authRoutes)
  app.use('/api/category', categoryRoutes)
  app.use('/api', productRoutes)

  // Serve static files from the 'uploads' directory
  app.use("/uploads", express.static(__dirname + "/uploads"));

  app.use('/api/profile', profileRoutes);

  app.listen(port, () =>{
      console.log("server is running : ", {port});
  })