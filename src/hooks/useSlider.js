import {useState, useMemo, useEffect} from 'react';

const useSlider = (props) => {
    const {index = 1, saveSliderStatus = () => {}} = props || {};
    const [sliderIndex, setSliderIndex] = useState(index);

    const title = useMemo(() => {
        return sliderIndex === 1 ? 
            'Estár comodo, nunca fue tan fácil' :
            sliderIndex === 2 ? 
            'Porque la vida es solo una' : 
            'A vivir se dijo, porque hay Dios'
    }, [sliderIndex]);

    useEffect(() => {
        setSliderIndex(index);
    }, [index]);

    return {
        title,
        sliderIndex,
        changeSliderIndex: saveSliderStatus,
    }
};

export default useSlider;