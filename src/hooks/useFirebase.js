import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  const signInWithGitHub = () => {
    const gitHubProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitHubProvider).then((result) => {
      setUser(result.user);
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
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    signOut(auth).then(() => {});
  };
  return {
    user,
    signInUsingGoogle,
    signInWithGitHub,
    logOut,
  };
};

export default useFirebase;
