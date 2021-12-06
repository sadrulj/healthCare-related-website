import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import SignIn from "../pages/Login/SignIn/SignIn";
import SignUp from "../pages/Login/SignUp/SignUp";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(user, email, password);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const destination = location?.state?.from || "/home";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const toggleLogin = (e) => {
    toggleLogin ? <SignIn /> : <SignUp />;
    setIsLogin(e.target.checked);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    if (e.target.value.length < 6) {
      console.error("Password must be at least 6 characters");
    } else {
      setPassword(e.target.value);
    }
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { email, displayName, photoURL } = result.user;
        const userInfo = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(userInfo);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const processLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { email, displayName, photoURL } = result.user;
        const userInfo = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(userInfo);
        setIsLogin(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    error,
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    processLogin,
    isLogin,
    toggleLogin,
    isLoading,
    logOut,
  };
};

export default useFirebase;
