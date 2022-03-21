const Form = (props) => {
  const [inputs, setInputs] = props.functions;
  
  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <form> 
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={inputs.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={inputs.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={inputs.message}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}

export default Form;