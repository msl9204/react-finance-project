import * as firebase from "firebase/app";
// import "firebase/firestore";
import "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
};

firebase.initializeApp(config);

export const db = firebase.auth();
