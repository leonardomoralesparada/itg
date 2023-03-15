import PropTypes from 'prop-types';
import './index.css';

import ProductButton from '../commons/ProductButton';
import Button from '../commons/Button';

const Product = (props) => (
    <>
    {
        props.isOnlyProduct ? (
            <div className="product-container">
                <div className="product-content">
                    <div>
                        <img 
                            src={props.image} 
                            alt="sombrilla" 
                            width={100} 
                            height={100}
                        />
                    </div>
                    <div className="product-item product-title">
                        {props.title}
                    </div>
                    <div className="product-item product-raw"/>
                    <div className="product-item product-description">
                        {props.description}
                    </div>
                    <div className="product-item product-button">
                        <ProductButton text={props.textButton} onClick={props.onClick} />
                    </div>
                </div>
            </div>
        ) : (
            <div className={'product-container-image'}>
                <div className={`${props.classNameBg}-wallpaper image-bg-size ${props.isButtonShop ? 'dark-bg' : ''}`} />
                {
                    props.isButtonShop && (
                        <div style={{zIndex: 2}}>
                            <Button text="shop" onClick={() => {}} />
                        </div>
                    )
                }
            </div>
        )
    }
    </>
);

Product.propTypes = {
    title: PropTypes.string,
    textButton: PropTypes.string,
    description: PropTypes.string,
    classNameBg: PropTypes.string,
    image: PropTypes.any,
    onClick: PropTypes.func,
    isOnlyProduct: PropTypes.bool,
    isButtonShop: PropTypes.bool,
};

Product.defaultProps = {
    title: '',
    textButton: '',
    description: '',
    classNameBg: 'friend',
    image: null,
    onClick: () => {},
    isOnlyProduct: true,
    isButtonShop: false,
};

export default Product;