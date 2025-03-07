import { signInWithRedirect, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

const registerWithEmail = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        console.log("Verification email sent!");
    } catch (error) {
        console.log("Registration error:", error);
    }
};

const LogInWithEmail = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User Logged in successfully!"); 
    } catch (error) {
        console.error("Login error:", error);
    }
};

export {
    signInWithGoogle, LogInWithEmail, logout, registerWithEmail
};