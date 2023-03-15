import PropTypes from 'prop-types';
import './index.css';
import useNavbar from '../../hooks/useNavbar';
import { Image } from '../../assets';

const NavBar = (props) => (
    <div className="navbar-container">
        <div className='navbar-content'>
            <div className='navbar-item' onClick={props.toDashboard}>
                <img src={Image.sombrilla} className='navbar-icon' />
                <div className="navbar-title">sombrilla</div>
            </div>
            <div className='navbar-item' onClick={props.toDashboard}>
                <img src={Image.facebook} className='navbar-icon' />
                <div className="navbar-title">carro</div>
            </div>
            <div className='navbar-item' onClick={props.toDashboard}>
                <img src={Image.telefono} className='navbar-icon' />
                <div className="navbar-title">telefono</div>
            </div>
            <div className='navbar-item' onClick={props.toDashboard}>
                <img src={Image.licuadora} className='navbar-icon' />
                <div className="navbar-title">licuadora</div>
            </div>
        </div>
    </div>
);

NavBar.propTypes = {
    toDashboard: PropTypes.func,
};

NavBar.defaultProps = {
    toDashboard: () => {},
};

const NabBarHoc = () => {
    const hook = useNavbar();
    return <NavBar {...hook} />;
};

export default NabBarHoc;