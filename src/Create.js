import "./create.css"
import { useState, useContext } from "react";
import userContext from "./context.js";
import Card from 'react-bootstrap/Card';

export default function Create() {
  let user = useContext(userContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [val, setVal] = useState("none")
  const [vale, setVale] = useState("block")
  const [fom, setFom] = useState('block')

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(validationErrors).length === 0) {
      user.users=[...user.users,{name: name, email: email,password:password, balance: 0}];

      alert("Account Created Successfully")
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
      setVal("block")
      setVale("none")
      setFom("none")
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <>
      <div className="color">
        <div className="login">
          <Card className="form">
            <form onSubmit={handleSubmit} style={{ display: `${fom}` }}>
              <span>CREATE ACCOUNT</span>
              <hr />

              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="form-control inp_text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {errors.name && <i className="error">{errors.name}</i>}

              <input
                type="email"
                name="email"
                placeholder="Enter email id"
                className="form-control inp_text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {errors.email && <i className="error">{errors.email}</i>}

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                maxlength="12"   minLength="8" 
                value={password}
              />
              {errors.password && <i className="error">{errors.password}</i>}

              <button type="submit" disabled={!(password)} style={{ display: `${vale}` }}>Create Account</button><br /><br />

            </form>
            <button type="submit" className="button" id="ad" style={{ display: `${val}` }} onClick={() => { setFom("block"); setVal("none"); setVale("block") }}>Add User</button>
          </Card>
        </div>
      </div>
    </>
  );
}
