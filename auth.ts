import { signInWithRedirect, signOut } from "firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";

const signInWithGoogle = async () => {
    try {
        await signInWithRedirect(auth, googleProvider);
    } catch (error) {
        console.error("Google Sign-In Error", error)
    }
};

const logout = async () => {
    await signOut(auth);
}

export {
    signInWithGoogle, logout
};