const {Query} = require("../models");

const getAllEmployees = async () => {
    return Query("SELECT * FROM employees");
};

const getEmployeeById = async (id) => {
    return Query("SELECT * FROM employees WHERE EmployeeID = ?", [id]);
};

const getEmployeeByName = async (name) => {
    return Query("SELECT * FROM employees WHERE Name = ?", [name]);
};

const updateEmployee = async (user, id) => {
    return Query("UPDATE employees SET ? WHERE EmployeeID = ?", [user,id])
};

const insertEmployee = async (user) => {
    return Query("INSERT INTO employees SET ?", [user]);
}
 const deleteEmployee = async (id) => {
     return Query("DELETE FROM employees WHERE EmployeeID = ?", [id]);
 }

module.exports = {
    getAllEmployees,
    getEmployeeById,
    getEmployeeByName,
    insertEmployee,
    deleteEmployee,
    updateEmployee
};