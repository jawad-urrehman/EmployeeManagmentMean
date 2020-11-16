var express = require('express');

var routes = express.Router();

var Employee = require('../model/employeeModel');

routes.get('/employees',function(req,res,next){
    Employee.find(function(err,docs){
            res.json(docs);
    });
});

routes.get('/employee/:id',function(req,res){
    Employee.findById({_id:req.params.id},function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json(docs);
        }
    });
});

routes.put('/employee/:id',function(req,res,next){
    var update ={
        name:req.body.name,
        phone:req.body.phone,
        department:req.body.department,
        salary:req.body.salary
    };
    Employee.findByIdAndUpdate({_id:req.params.id},update,function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"update successfully"})
        }
    });
});

routes.post('/employee',function(req,res,next){
    var emp =new Employee({
        name:req.body.name,
        phone:req.body.phone,
        department:req.body.department,
        salary:req.body.salary
    });

    emp.save(function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"employee added success"})
        }
    });

    
});

routes.delete('/employee/:id',function(req,res,next){
    Employee.remove({_id:req.params.id},function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"delete success"})
        }
    });
});



module.exports = routes;