import "./styledButton.css";

const StyledButton = (props) => {

    // html class
    return (
        <button className="styledButton">{props.title}</button>
    )
}

export default StyledButton;