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
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="firstName" className="col-form-label">First Name</label>
                </div>
                <div className="col-auto">
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

            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="lastName" className="col-form-label">Last Name</label>
                </div>
                <div className="col-auto">
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

            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="email" className="col-form-label">Email</label>
                </div>
                <div className="col-auto">
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

            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="phone" className="col-form-label">Phone</label>
                </div>
                <div className="col-auto">
                    <input
                        type="tel"
                        required
                        id="phone"
                        className="form-control"
                        aria-describedby="phone"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-primary" onClick={handleReset}>Clear</button>
        </form>
    );
}

export default Form;
