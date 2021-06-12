// Write your solution in this file!
const employee = {
    name: "John Smith",
    streetAddress: "123 Main St"
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign({}, employee, {[key]: value}); 
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign(employee, {[key]: value}); 
}

function deleteFromEmployeeByKey(obj, key, value){
    const newEmployee = {...employee}; 
    delete newEmployee[key];
    return newEmployee; 
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete employee[key]; 
    return employee; 
}

