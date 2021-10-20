//use express
let express = require ('express')

//instantiate an express router to parse and direct url requests
router = express.Router()

//add model ref
Teetime = require('../models/teetime')

router.get('/',(req,res) => {
    //use Artist model to fetch all documents from collection in mongodb
    Teetime.find((err,teetimes) =>{
        if(err){
            console.log(err)
            res.end(err)
        }
        else{
            console.log(teetimes)
            res.render('teetimes/index',{
                teetimes:teetimes
            })
        }
    })

})

// GET: teetimes/create
router.get('/create',(req,res)=>{
    res.render('teetimes/create',{
        title:'Add a new TeeTime'
    })
})

// POST: teetimes/create
router.post('/teetimes/create',(req,res)=>{
    TeeTime.create({
        name: req.body.name
    },(err, newTeetime)=>{
        if(err){
            console.log(err)
            res.end(err)
        }
        else{
            res.redirect('/teetimes')
        }
    })
})
module.exports = router