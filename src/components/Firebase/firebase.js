import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0GLRPyJttqIdWJvr-ul0Jm_Et5L_WCuE",
    authDomain: "my-project-1551985282633.firebaseapp.com",
    databaseURL: "https://my-project-1551985282633.firebaseio.com",
    projectId: "my-project-1551985282633",
    storageBucket: "my-project-1551985282633.appspot.com",
    messagingSenderId: "800261408320"
};

firebase.initializeApp(config);
firebase.auth()
export default firebase;