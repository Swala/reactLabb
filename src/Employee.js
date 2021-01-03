
function Employee ({employeesData}){
    return (
        <>
        <div> 
            {employeesData.map(function (employeesData){
                return (
                <div className = "EmployeeDiv">
                    <img className = "avatar" alt = "profile picture" src = {employeesData.avatar}/>
                    <div className="infoDiv">
                        <h3>{employeesData.name}</h3>
                        <p>Email: {employeesData.email}</p>
                        <p>Phone: {employeesData.phone}</p>
                        <p>Skills: {employeesData.skills}</p>
                    </div>
                    
                </div>)        
            })}   
        </div>
    </>    
    )
}        

export default Employee;