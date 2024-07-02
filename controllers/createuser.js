
import pool from "../config/db.js";
export const createUser= async (req,res)=>{
    try{
    
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
   
    const data= await pool.query('INSERT INTO `users` (`username`, `password`, `email`) VALUES (? ,? , ?) ',[username,password,email]);
    if(!data){
        res.status(500).send(
            {
                status:"fail",
                message:"incorrect inputs"
            }
        )
    }
    res.status(200).send({
        status:"Account created Succesfully",
        status_code:200,
        user_id:data[0].id
    })
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