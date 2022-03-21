import { useState } from "react";
import View from "./View.js";
import Form from "./Form.js";
import "./App.css";

const App = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    message: ""
  });

  return (
    <div className="App">
      <Form functions={[inputs, setInputs]}/>
      <View inputs={inputs} />
    </div>
  );
}

export default App;