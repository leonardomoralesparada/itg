import {useState, useMemo, useCallback} from 'react';
import newslettersService from '../services/newsletters';

const useNewsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSentEmail, setSentEmail] = useState(false);
    const [isEmailSaved, setEmailSaved] = useState(false);

    const changeEmail = (event) => {
        setEmail(event.target.value);
    };

    const changeMessage = (event) => {
        setMessage(event.target.value);
    };

    const isValidEmail = useMemo(() => {
        return (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email)
    }, [email]);

    const sendEmail = useCallback(async () => {
        if (isValidEmail && !!message) {
            try {
                await newslettersService.sendEmail({ email, message });
                setSentEmail(true)
            } catch { }
        }
    }, [email, isValidEmail, message]);

    const savedEmail = () => {
        setEmailSaved(true);
    };

    return {
        email,
        message,
        changeEmail,
        isValidEmail,
        isSentEmail,
        sendEmail,
        isEmailSaved,
        savedEmail,
        changeMessage,
    }
};

export default useNewsletter;