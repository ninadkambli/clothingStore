import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAuCNr_L84ygInylJMxcNNe7-PhQYGwbVA",
    authDomain: "crwn-clothing-db-d172e.firebaseapp.com",
    projectId: "crwn-clothing-db-d172e",
    storageBucket: "crwn-clothing-db-d172e.appspot.com",
    messagingSenderId: "831235491877",
    appId: "1:831235491877:web:467092f2d6811673a557cc"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const googleprovider = new GoogleAuthProvider()
  googleprovider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);

  export const db = getFirestore()
  export const createUserDocumentFromAuth = async(userAuth,addtionalInformation = {}) =>{
    if(!userAuth) return
    const userDocRef = doc(db,'users',userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...addtionalInformation
        })
      }catch(error){
        console.log('error creating an user', error.message)
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
  }

  export const signOutUser = async() => await signOut(auth)

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)

  





