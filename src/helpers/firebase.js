import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "./toastNotify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STOTAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
const contactRef = collection(db, "users");

//! DATABASE FUNCTİON

export const useContactListener = (setCBlogList) => {
  useEffect(() => {
    onSnapshot(contactRef, (snapshot) => {
      setCBlogList(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      //console.log(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
};




export const editContact = ({ id, name, phone, gender }, setEdit) => {
  try {
    const docRef = doc(db, "contact", id);
    updateDoc(docRef, { name, phone, gender });
    setEdit(false);
    toastSuccessNotify("Updated Successfully!");
  } catch (error) {
    toastWarnNotify(error.message);
  }
};

export const deleteContact = (id) => {
  try {
    deleteDoc(doc(db, "contact", id));
    toastErrorNotify("Deleted Successfully");
  } catch (error) {
    toastWarnNotify(error.message);
  }
};

export const addContactItem = (addContact) => {
  try {
    addDoc(contactRef, { ...addContact });
    toastSuccessNotify("Added Successfully!");
    console.log("çalıştı");
  } catch (error) {
    toastWarnNotify(error.message);
  }
};

//! ERİŞİM İZNİ FUNCTİON

export const createUserWithMail = async({ username, email, password }, navigate) => {
  console.log(username);
  createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // eslint-disable-next-line
    //   const user = userCredential.user;
    //   user.displayName = user;
    // })
    // .catch((error) => {
    //   // eslint-disable-next-line
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorMessage);
    //   // setErr(errorMessage.split("/")[1].split("-").join(" ").replace(").", ""));
    // });
  
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      // .then(() => {
      //   // Profile updated!
      //   // ...
      // })
      // .catch((error) => {
        //   // An error occurred
        //   // ...
        // });
        navigate("/");
      };

export const LoginWithMail = (
  { email, password }, navigate
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // toastSuccessNotify("Login is succesfull...");

      navigate("/dashboard");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      // setErr(errorMessage.split("/")[1].split("-").join(" ").replace(").", ""));
      // toastErrorNotify(
      //   errorMessage.split("/")[1].split("-").join(" ").replace(").", "")
    });
};

export const IsLogin = (setUser, setRefresh) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // eslint-disable-next-line
      const uid = user.uid;
      console.log(user.email);
      setUser({ email: user.email });
      setRefresh(true);
    } else {
    }
  });
};

export const LoginWithGoogle = (navigate) => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line
      const token = credential.accessToken;
      // The signed-in user info.
      // eslint-disable-next-line
      const user = result.user;

      navigate("/dashboard");
    })
    .catch((error) => {
      // Handle Errors here.
      // eslint-disable-next-line
      const errorCode = error.code;
      // eslint-disable-next-line
      const errorMessage = error.message;

      // eslint-disable-next-line
      const email = error.customData.email;
      // The AuthCredential type that was used.
      // eslint-disable-next-line
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const singOut = (dispatch, clearUser, clearFavoriteList) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      dispatch(clearUser());
      dispatch(clearFavoriteList());
    })
    .catch((error) => {
      // An error happened.
    });
};
