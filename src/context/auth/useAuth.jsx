import { useContext } from "react";
import AuthContext from "./AuthContext";

// custom hook to use auth context
const useAuth = () => {
    return useContext(AuthContext);
};
export default useAuth;