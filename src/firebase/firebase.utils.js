import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAskcOkzWmYd2G9beHEzLSs-o-y-_yLHVs",
    authDomain: "alireza-ecommerce-db.firebaseapp.com",
    databaseURL: "https://alireza-ecommerce-db.firebaseio.com",
    projectId: "alireza-ecommerce-db",
    storageBucket: "alireza-ecommerce-db.appspot.com",
    messagingSenderId: "178833034551",
    appId: "1:178833034551:web:05f985d8eaa0d37e121eb2",
    measurementId: "G-DPFY6QHBJR"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase
    .auth
    .GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase