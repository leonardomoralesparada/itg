import PropTypes from 'prop-types';
import "./index.css";

const Button = (props) => (
    <div
        className="button-container" 
        onClick={props.onClick}
    >
        {props.text}
    </div>
);

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: '',
    onClick: () => {},
};

export default Button;