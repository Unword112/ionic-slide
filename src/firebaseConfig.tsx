import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAgPb1PWhgodriuZ-f6atUG371OvCfRa_s",
    authDomain: "fir-219d1.firebaseapp.com",
    projectId: "fir-219d1",
    storageBucket: "fir-219d1.appspot.com",
    messagingSenderId: "576108716783",
    appId: "1:576108716783:web:55e811f708e7e6f1f6b11a",
    measurementId: "G-5V46KD18P5"
};

firebase.initializeApp(firebaseConfig);

export async function loginUser(username: string, password: string) {
    //auth firebase
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(username, password);
        console.log(res);
    }catch (error){
        console.log(error);
    }
}