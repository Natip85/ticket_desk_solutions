const express = require('express');
const router = express.Router();
const verify_logged_in = require('../middleware/verify_logged_in')
const validator = require('validator');
const joi = require('joi');
const Employee = require('./../models/employeeModel')

/*
* GET http://localhost:3001/api/employees/search/:searchTerm
*/
router.get("/search/:searchTerm", async (req, res)=>{
  const searchRegex = new RegExp(req.params.searchTerm, 'i');
  const employee = await Employee.find({name: {$regex:searchRegex}})
  res.status(200).json(employee)
})


/*
* GET http://localhost:3001/api/employees
*/
router.get('/', async (req, res)=>{
 try {
            const result = await Employee.find({});
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting customers' });
        }

    })

/*
* POST http://localhost:3001/api/employees
*/
router.post('/', async (req, res)=>{
 try {
            const schema = joi.object({
                name: joi.string().min(2).max(100).required(),
                email: joi.string().required().email(),
                phone: joi.string().max(20).min(6),
                bDay: joi.string().min(2).max(100)
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error adding employee';
            }

            const employee = new Employee(value);
            const newEmployee = await employee.save();
            res.json(newEmployee);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error adding employee` });
        }
      })



module.exports = router;