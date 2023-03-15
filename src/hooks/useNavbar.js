import { useNavigate } from "react-router-dom";

const useNavbar = () => {
    const navigate = useNavigate();

    const toDashboard = () => {
        navigate("/s1");
    };

    return {
        toDashboard,
    }
};

export default useNavbar;