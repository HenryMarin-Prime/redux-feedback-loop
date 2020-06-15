const express =require('express');
const router = express.Router();
const pool = require('../modules/pool');

//server routes
//get route
router.get('/', (req,res)=>{
    console.log('in router.get');
    let queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
    pool.query(queryText).then((result)=>{
        console.log('router.get SUCCESSFUL!!!', result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log('Error in router.get', error);
        res.sendStatus(500);
    })
})

module.exports = router;