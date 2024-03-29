import React, { useState } from "react";

function RegisterForm({ Register, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();
        Register(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h1>Register</h1>
                <p>Enter your personal details </p>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div><br />
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div><br />
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div> <br></br>
                <input className="button" type="submit" value="REGISTER" />

            </div>

        </form>


    )
}

export default RegisterForm;