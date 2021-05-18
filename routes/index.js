const express = require("express");
const {
    getAllEmployees,
    getEmployeeById,
    insertEmployee,
    deleteEmployee,
    updateEmployee
} = require("../db/queries/employees.js")
const router = express.Router();

router.get("/employees/:id?", async (req, res, next) =>{
    try{
        const { id } = req.params;
        console.log(id);

        let data;
        if (id){  
            data = await getEmployeeById(id);
        }else {
            data = await getAllEmployees()
        }
        res.json(data);
    }catch(error) {
        next(error);
    }
});

router.post("/employees", async (req, res, next) =>{
    const {body} = req;
    try {
        let data = await insertEmployee(body);
        res.json(data);
    }catch(error) {
        next(error);
    }
})

router.put("/employees/:id", async (req, res, next) =>{
    let {body} = req;
    let{id} = req.params;
    try {
        let data = await updateEmployee(body, id);
        res.json(data);
    }catch(error) {
        next(error);
    }
})

router.delete("/employees/:id", async (req, res, next) =>{
    let{id} = req.params;
    try {
        let data = await deleteEmployee(id);
        res.json(data);
    }catch(error) {
        next(error);
    }
})

module.exports = {router};