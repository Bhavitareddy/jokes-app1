import React from "react"
import './index.css'



function LoginForm(){
    return(
        <div className=" wrapper bg-dark d-flex align-items-center justify-content-center w-100">
          <form className="login rounded">
            <h1 className="mb-3">Login Form</h1>
            <form>
              <div className="form-group mb-2">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-label"></input>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control"></input>
            </div>
            <div className="form-group form-check mb-2">
                <input type="checkbox" className="form-check-input"></input>
                <label htmlFor="check" className="form-check-label">Remember me</label>
            </div>
            <button type="submit" className="btn btn-success w-100 mt-2"SIGN IN>
            </form>

        </div>

    </div>
            
        
    )
}