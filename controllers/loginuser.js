import pool from "../config/db.js";
import bcrypt from 'bcrypt';

export const loginUser = async (req,res)=>{
    try{
     const username=req.body.username;
  const password=req.body.password;
  

  const data = await pool.query('SELECT * FROM `users` WHERE `username`= ? ',[username])
  console.log(username);
  console.log(data[0][0].password);
  var access_token="";
  if(data[0][0].password==password){
 const saltRounds = 10;
 
 bcrypt.hash(password, saltRounds).then( async function(hash) {
   
    const data2 =  await pool.query('INSERT INTO `access_token` (`token`)  VALUES (?)',[hash]);
    if(data2){
        res.status(200).send({
            status:"Login Succesful",
            status_code:200,
            user_id:data[0].id,
            access_token:hash
            })
    }  
}).catch((err)=>{
    console.log(err);
});
  }
  else {
    res.status(401).send({
        status: "Incorrect usernam/password .Please Retry",
        status_code:401
    })
  }
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            status:"fail",
            error
        }  
        )
    }
  

}