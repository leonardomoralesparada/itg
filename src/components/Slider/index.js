import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import Button from '../commons/Button';
import sliderActions from '../../state/actions/slider';

import useSlider from '../../hooks/useSlider';

const Slider = (props) => (
    <div className={`slider-container beach${props.sliderIndex}-wallpaper`}>
        <div className="slider-content">
            <div />
            <div className='slider-title'>
                {props.title}
            </div>
            <div>
                <div className="button-center">
                    <Button text="shop" />
                </div>
                <div className='circle-content'>
                    <div 
                        onClick={() => props.changeSliderIndex(1)} 
                        className={`circle ${props.sliderIndex != 1 ? 'blur' : ''}`}
                    />
                    <div 
                        onClick={() => props.changeSliderIndex(2)} 
                        className={`circle ${props.sliderIndex != 2 ? 'blur' : ''}`}
                    />
                    <div 
                        onClick={() => props.changeSliderIndex(3)} 
                        className={`circle ${props.sliderIndex != 3 ? 'blur' : ''}`}
                    />
                </div>
            </div>
        </div>
    </div>
);

Slider.propTypes = {
    title: PropTypes.string,
    changeSliderIndex: PropTypes.func,
    sliderIndex: PropTypes.number,
};

Slider.defaultProps = {
    title: '',
    changeSliderIndex: () => {},
    sliderIndex: 1,
};

const SliderHoc = (props) => {
    console.log(props)
    const hook = useSlider(props);
    return <Slider {...hook} />;
};


const mapState = (state) => state.slider;

const mapDispatch = {
    saveSliderStatus: sliderActions.saveSliderStatus,
};

export default connect(mapState, mapDispatch)(SliderHoc);