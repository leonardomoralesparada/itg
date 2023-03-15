import PropTypes from 'prop-types';
import "./index.css";

const ProductButton = (props) => (
    <div
        className="product-button-text" 
        onClick={props.onClick}
    >
        > {props.text}
    </div>
);

ProductButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

ProductButton.defaultProps = {
    text: '',
    onClick: () => {},
};

export default ProductButton;