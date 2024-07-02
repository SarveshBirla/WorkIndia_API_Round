import mysql from 'mysql2/promise';


const pool= mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'sab2112003',
    database: 'shorts'
    
  });

export default pool;