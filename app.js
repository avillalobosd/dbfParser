const dbfstream = require('dbfstream');
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
 
// this is a top-level await 
(async () => {
    // open the database
    const db = await open({
      filename: '/tmp/database.db',
      driver: sqlite3.Database
    })
})()
 
// var dbf = dbfstream('./dbf/fovisg02.dbf', 'utf-8');
// let fovisg02 =[]
// dbf.on('header', header => {
//     fovisg02.push(header)
//     // console.log(header);
//   });

// dbf.on('data', (data) => {
//         if(data['@deleted']==false){
//             fovisg02.push(data)
//         }else{
//             console.log("NO")
//         }
        
    
   
// });

// dbf.on('end', () => {
//     console.log(fovisg02.length);
// });
