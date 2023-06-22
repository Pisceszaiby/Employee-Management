import React, { useState } from 'react';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {

        // Create an object with the form data
        const formData = {
            firstName,
            lastName,
            email,
            phone
        };

        // Make the POST request
        fetch('http://localhost:4000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log(data);
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    };

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='employeeHeading'><h1>New Employee</h1></div>


            <div className="row mb-3">
                <div className="col-sm-3 ">
                    <label htmlFor="firstName" className="col-sm-12 col-form-label">First Name <span class="asterisk">*</span></label>

                </div>
                <div className="col-sm-9">
                    <input
                        type="text"
                        required
                        id="firstName"
                        className="form-control"
                        aria-describedby="firstName"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-3">
                    <label htmlFor="lastName" className="col-sm-12 col-form-label">Last Name <span class="asterisk">*</span></label>

                </div>
                <div className="col-sm-9">
                    <input
                        type="text"
                        required
                        id="lastName"
                        className="form-control"
                        aria-describedby="lastName"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                    />
                </div>

            </div>

            <div className="row mb-3">
                <div className="col-sm-3">
                    <label htmlFor="email" className=" col-sm-12 col-form-label">Email <span class="asterisk">*</span></label>

                </div>
                <div className="col-sm-9">
                    <input
                        type="email"
                        required
                        id="email"
                        className="form-control"
                        aria-describedby="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-3">
                    <label htmlFor="phone" className="col-sm-12 col-form-label">Phone <span class="asterisk">*</span></label>

                </div>
                <div className="col-sm-9">
                    <input
                        type="number"
                        required
                        id="phone"
                        className="form-control"
                        aria-describedby="phone"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                    />
                </div>
            </div>

            <button type="submit" className=" ml-auto btn submit btn-primary">ADD</button>
            <button type="reset" className="btn clear btn-primary" onClick={handleReset}>Clear All</button>
        </form>
    );
}

export default Form;
