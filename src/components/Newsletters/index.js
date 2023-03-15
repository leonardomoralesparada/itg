import PropTypes from 'prop-types';
import './index.css';
import Input from '../commons/Input';
import useNewsletter from '../../hooks/useNewsletter';

const Newsletters = (props) => (
    <div className="newsletters-container">
        <div className="newsletters-content">
            <div className="newsletters-subtitle">
                newsletter
            </div>
            <div className="newsletters-title">
                suscribete
            </div>
            <div className="newsletters-p">
                Y enterate de todas las novedades
            </div>
            <div className="newsletter-input">
                {props.isSentEmail && (<div>Hemos recibido tu solicitud</div>)}
                {
                    !props.isEmailSaved && (
                        <Input 
                            value={props.email}
                            placeholder={"Ingresa tu email"}
                            onChange={props.changeEmail}
                            isValidValue={props.isValidEmail}
                            onNext={props.savedEmail}
                        />
                    )
                }
                {
                    props.isEmailSaved && !props.isSentEmail && (
                        <Input 
                            value={props.message}
                            placeholder={"Ingresa tu mensaje"}
                            onChange={props.changeMessage}
                            isValidValue={!!props.message}
                            onNext={props.sendEmail}
                        />
                    )
                }
            </div>
        </div>
    </div>
);

Newsletters.propTypes = {
    email: PropTypes.string,
    changeEmail: PropTypes.func,
    isValidEmail: PropTypes.bool,
    isSentEmail: PropTypes.bool,
    sendEmail: PropTypes.func,
    isEmailSaved: PropTypes.bool,
    savedEmail: PropTypes.func,
};

Newsletters.defaultProps = {
    email: '',
    changeEmail: () => {},
    isValidEmail: false,
    isSentEmail: false,
    sendEmail: () => {},
    isEmailSaved: false,
    savedEmail: () => {},
};

const NewslettersHoc = () => {
    const hook = useNewsletter();
    return <Newsletters {...hook} />;
};

export default NewslettersHoc;