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

router.post( '/', (req, res) => {
    const feedback = req.body;
    console.log( `in router.post...`, feedback );

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    
    pool.query( queryText, [ Number(feedback.feeling), Number(feedback.understanding), Number(feedback.support), feedback.comments ] )
        .then( (response) =>{
            console.log( 'Post good', response);
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log( `Could not add feedback to DB`, error );
            res.sendStatus(500);
        })
})

module.exports = router;