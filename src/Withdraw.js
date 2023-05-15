import { useContext } from "react";
import userContext from "./context";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import "./Allpages.css"

export default function Withdraw() {
  let user = useContext(userContext);
  let len=[user.users.length]
  let [currbalance, setCurrbalance] = useState(user.users[len-1].balance);
  let [withdraw, setWithdraw] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("withdraw", withdraw);
    if(withdraw >=0 && withdraw < currbalance){
      setCurrbalance(Number(currbalance) - Number(withdraw));
      
    }
    else{
      alert("Insufficient Balance")
    }
    setInputValue(e.target.value);
    setIsButtonDisabled(true);
  }

  function handlewithdrawChange(e) {
    setWithdraw(e.target.value);
    setIsButtonDisabled(e.target.value === '' || e.target.value <= 0);
  }

  user.users[len-1].balance = currbalance;

  return (
    <div className="color" >
      
      <div className="login">
    <Card className="form">
      <center>
        <form onSubmit={handleSubmit}>
          <h3>WITHDRAW</h3>
          <hr/>
        <h5>Balance: {currbalance}</h5>
        <hr/>
          <input type="number" placeholder= 'Enter the Amount' value={inputValue} onChange={handlewithdrawChange} />
          <input type="submit"  disabled={isButtonDisabled} value="Withdraw" />
        </form>
      </center>
    </Card>
    </div>
    </div>
  );
}
