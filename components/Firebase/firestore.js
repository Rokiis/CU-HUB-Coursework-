import firebase from 'firebase';

const config = {
    apiKey: "API_CODE",
    authDomain: "my-project-1551985282633.firebaseapp.com",
    databaseURL: "https://my-project-1551985282633.firebaseio.com",
    projectId: "my-project-1551985282633",
    storageBucket: "my-project-1551985282633.appspot.com",
    messagingSenderId: "800261408320"
};
firebase.initializeApp(config);

export default firebase;
