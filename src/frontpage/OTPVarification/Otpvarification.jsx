import React from 'react'

export const Otpvarification = () => {
  return (
    <div className="agent-signup-whole-div">
      <ToastContainer />
      <div className='agent-signup-form-div'>
        <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>Sign Up</h1>
        <Form className="agent-signup-form">
        
            <label>Name *</label>
            <Form.Control type="text" name='name' value={name} placeholder="Enter name" style={{ marginBottom: "15px" }} onChange={(e) => inputHandle(e)} />
           
            {errorname ?
              <div className="error_div">{errorname}</div>
              : null}
          
            <Form.Label>Mobile Number*</Form.Label>
            <Form.Control type="number" name='phone' value={phone} onChange={(e) => inputHandle(e)} placeholder="Enter Mobile number" style={{ marginBottom: "15px" }} />
            {errorphone ?
              <div className="error_div">{errorphone}</div>
              : null}
            <Form.Label>Email *</Form.Label>
            <Form.Control type="text" name='email' value={email} onChange={(e) => inputHandle(e)} placeholder="Enter email" style={{ marginBottom: "15px" }} />
            {erroremail ?
              <div className="error_div">{erroremail}</div>
              : null}
         
            <label htmlFor='password'>Password *</label>
            <Form.Control type="password" name='password' value={password} onChange={(e) => inputHandle(e)} placeholder="Password" style={{ marginBottom: "15px" }} />
            {errorpassword ?
              <div className="error_div">{errorpassword}</div>
              : null}
       
            {/* <Form.Check type="checkbox" label="Remember me" /> */}
         

          {/* <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin"> */}
          <Button className="agent-signup-btn" variant="primary" onClick={(e) => handlesignUpSubmit(e)} type="submit" >
            SIGN UP
          </Button>
          {/* </Link> */}
          <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin">
            <Button className="agent-signup-btn" variant="primary" type="submit" >
            Already have an account? LOG IN
            </Button>
          </Link>
        </Form>
      </div>
    </div>

  )
}


