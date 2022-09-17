import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignupForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

  //useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if(response) {
  //       const userDocRef = await createUserDocumentFromAuth(auth);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); // destructured from response object
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;

// sprinkler blowout
//18 oct 10-11
