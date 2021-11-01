import { useState } from "react";
import initializeAuthentication from "../Components/Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  return {
    user,
    setUser,
    signInWithGoogle,
  };
};

export default useFirebase;
