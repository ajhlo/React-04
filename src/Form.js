import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
      <form>
        <input name="firstName"></input>
        <input name="lastName"></input>
        <input name="phone"></input>
        <textarea name="message"></textarea>        
      </form> 
    )
  }

  export default Form;