const express=require ('express')
const app =express()
const port =3000
const path =require('path');
let first_proj_path=path.join(__dirname,'public' );
app.use(express.static(path.join(__dirname, 'public')));//to make image appear.
app.get('/',(req,res)=>{
         res.sendFile(`${first_proj_path}/home.html`);
     });
     app.get('/about',(req,res)=>{
        res.sendFile(`${first_proj_path}/about.html`);
    });
    app.get('/ContactUs',(req,res)=>{
        res.sendFile(`${first_proj_path}/contactUs.html`);
    });
    app.use((req,res,next)=>{
    res.status(404).end()
    });
   app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})
//to open this ,write in terminal : node server.js