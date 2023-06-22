import React from 'react';
function Form() {
    return (
        <div>

            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="firstName" class="col-form-label">First Name</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="firstName" class="form-control" aria-describedby="firstName" />
                </div>

            </div>
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="lastName" class="col-form-label">Last Name</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="lastName" class="form-control" aria-describedby="lastName" />
                </div>

            </div>
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="email" class="col-form-label">Email</label>
                </div>
                <div class="col-auto">
                    <input type="email" id="email" class="form-control" aria-describedby="email" />
                </div>

            </div>
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="phone" class="col-form-label">Phone</label>
                </div>
                <div class="col-auto">
                    <input type="number" id="phone" class="form-control" aria-describedby="phone" />
                </div>

            </div>
        </div>
    );

}



export default Form;