import React from "react";

function Signup(props) {
    console.log("props", props);
    return(
        <div>
            <h3>Signup</h3>
        <div>
        <p>Username</p>
            <input className="form-control w-100" 
            type="text" 
            placeholder="got@gmail.com" 
            value={props.email} 
            autoFocus 
            required
            onChange={(e) => props.handleEmail(e)}/>
        </div>
        <div>
            <p>Password</p>
            <input className="form-control" 
            type="Password" 
            placeholder="got255" 
            value={props.password} 
            required
            onChange={(e) => props.handlePassword(e)}/></div>
        <div>
            <button className="btn btn-primary mt-2 w-100" onClick={() => props.handleSignup()}>Sign up</button>
            <div className="d-flex align-items-center justify-content-center">
                <p className="text-center mt-3 mr-1">Have an account?</p>
                <button className="btn btn-link px-0"onClick={() => props.setHasAccount(!props.hasAccount)}>Sing in</button>
            </div>
        </div>
        </div>
        
    );
}
export default Signup;