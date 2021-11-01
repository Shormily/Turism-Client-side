import { useContext } from "react";
import { AuthContext } from "../Components/contexts/AuthProvider";

const useAuth = () => useContext(AuthContext);

export default useAuth;
