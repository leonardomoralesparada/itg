import PropTypes from 'prop-types';
import './index.css';

const Input = (props) => (
    <div className="input-container">
        <input 
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
        <div 
            style={{opacity: props.isValidValue ? 1 : 0.25}}
            className="input-icon"
            onClick={props.isValidValue ? props.onNext : null}
        >
            ->
        </div>
    </div>
);

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    onNext: PropTypes.func,
    isValidValue: PropTypes.bool,
};

Input.defaultProps = {
    value: '',
    onChange: () => {},
    placeholder: '',
    onNext: () => {},
    isValidValue: false,
};

export default Input;