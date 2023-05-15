import { useContext } from "react";
import userContext from "./context.js";
import Card from 'react-bootstrap/Card';
import "./Allpages.css"

export default function Alldata() {
  let user = useContext(userContext);
 
  return (
    <>
    <div className="color" >
   <div className="login">
      {user.users.map((item, key) => (
        <Card className="form">
     <h3>ALLDATA</h3>
    <Card.Header>User   {key+1}</Card.Header>
    <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{item.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{item.email}</td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>{item.password}</td>
              </tr>
              <tr>
                <td>Balance:</td>
                <td>{item.balance}</td>
              </tr>
            </tbody>
          </table>
    </Card>
      ))}
    </div>
    </div>
    </>
  );
}