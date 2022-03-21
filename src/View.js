const View = (props) => {
    const inputs = props.inputs;
    return (
        <>
        <h1>This is your input</h1>
        <p>First name: {inputs.firstname}</p>
        <p>Last name: {inputs.lastname}</p>
        <p>Phone: {inputs.phone}</p>
        <p>Message: {inputs.message}</p>
        </>
    )
}

export default View;