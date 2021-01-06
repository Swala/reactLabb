import React, { useState } from "react";
import Employee from "./Employee";


function EmployeeList(){

    const [employees, setEmployees] = useState ([
        {
            name: "Virginia Woolf",
            email: "v.woolf@lighthouse.com",
            phone: "012-3123",
            skills: "Writer, Advancing womens rights",
            avatar: "https://i.imgur.com/ebHfuth.png",
            },
        {
            name: "Ester Blenda",
            email: "rebel@gmail.com",
            phone: "012-34766",
            skills: "Investigating journalism, Adventurer",
            avatar: "https://i.imgur.com/TUhCrsY.png",
            },    
        {
            name: "F. Scott Fitzgerald",
            email: "dandy@gatsbymail.com",
            phone: "012-3778",
            skills: "Life of the party, Marrying rich",
            avatar: "https://i.imgur.com/t9HFQvX.png",
            },   
    ]);

    function handleAddEmployee(){
        let addRecruits =
            {
                name: "Oscar Wilde",
                email: "dorian@greymail.com",
                phone: "012-3987",
                skills: "Satire, Irish witiness",
                avatar: "https://i.imgur.com/Q9qFt3m.png",
            }; 

        setEmployees (function (prevState){
            return [...prevState, addRecruits]
        });
    } 

    return (
        <>  
            <h2>EmployeeList</h2>
            <button className ="button" onClick= {() =>
                handleAddEmployee()
            }>Add Employee</button>
            <Employee employeesData = {employees}/>
        </>
    ) 
          
}

export default EmployeeList;
