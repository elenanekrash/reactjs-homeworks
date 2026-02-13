import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// Type the config object
const firebaseConfig: Record<string, string> = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN",
    projectId: "YOUR_ID",
    storageBucket: "YOUR_BUCKET",
    messagingSenderId: "YOUR_SENDER",
    appId: "YOUR_APP_ID",
};

// Explicitly type the app
const app: FirebaseApp = initializeApp(firebaseConfig);

// Explicitly type auth
export const auth: Auth = getAuth(app);
