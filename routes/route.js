const express = require('express');
const router = express.Router();

const School = require('../models/schools');

router.get('/schools', (req, res, next)=>{
    School.find(function(err,schools){
        res.json(schools);
    });
});

router.post('/school',(req, res, next)=>{
    let newSchool = new School({
        school_name: req.body.school_name,
		school_address: req.body.school_address,
		year_of_establishment: req.body.year_of_establishment,
		school_location: req.body.school_location,
		school_email: req.body.school_email,
		nos_of_classes: req.body.nos_of_classes,
		nos_of_pre_pry_classes: req.body.nos_of_pre_pry_classes,
		nos_of_pry_classes: req.body.nos_of_pry_classes
    });

    newSchool.save((err,School)=>{
        if(err)
        {
            res.json({msg: 'failed to add School'});
        }
        else{
            res.json({msg: 'School added successfully'});;
        }
    });
});

router.put('/school/:id', function(req, res){
    School.findOneAndUpdate({
        _id:req.params.id
    },{$set:{school_name:req.body.school_name}},
    {upsert:true},
        function(err, newSchool){
            if(err){
                console.log('error occured');
            }else{
                console.log(newSchool);
                res.send(newSchool);;
            }
        });
    });

router.delete('/school/:id',(req, res, next)=>{
    School.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports = router;