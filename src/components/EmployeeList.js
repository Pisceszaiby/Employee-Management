import React from 'react';
import { useState, useEffect } from 'react';
function EmployeeList() {
    const [allEmployees, setEmployees] = useState([]);
    const getEmployeeList = async () => {
        const url = 'http://localhost:4000/employees/';
        try {
            const response = await fetch(url);
            var result = await response.json();

            setEmployees(result);
        } catch (error) {
            console.error(error);
        };
    };
    useEffect(() => {
        getEmployeeList();
    }, []);

    return (
        <div class="list">
            <h1>Employee List</h1>
            {allEmployees.map(employee => (
                <div class="card">


                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 col-lg-6 col-md-6">

                                <h1>{employee.firstName}{employee.secondName}</h1>
                                <p>{employee.email}</p>
                                <p>{employee.phone}</p>

                            </div>
                            <div class="col-sm-12 col-lg-6 col-md-6">
                                <button class="btn">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 41.8335C12.5699 41.8383 4.9677 36.7624 1.74098 28.9742C-1.48575 21.1861 0.299056 12.221 6.26251 6.26251C11.5277 0.997308 19.2019 -1.05899 26.3943 0.86821C33.5867 2.79541 39.2046 8.41331 41.1318 15.6057C43.059 22.7981 41.0027 30.4723 35.7375 35.7375C31.8364 39.6563 26.5295 41.8514 21 41.8335ZM4.33334 21.3583C4.43192 30.5276 11.919 37.8949 21.0886 37.8458C30.2583 37.7963 37.6657 30.349 37.6657 21.1792C37.6657 12.0094 30.2583 4.56204 21.0886 4.5125C11.919 4.46346 4.43192 11.8308 4.33334 21V21.3583ZM15.6021 29.3333L12.6667 26.3958L18.0625 21L12.6667 15.6042L15.6042 12.6667L21 18.0625L26.3958 12.6667L29.3333 15.6042L23.9375 21L29.3333 26.3958L26.3979 29.3333L21 23.9375L15.6042 29.3333H15.6021Z" fill="white" />
                                    </svg>
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}



export default EmployeeList;