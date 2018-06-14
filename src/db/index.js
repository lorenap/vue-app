 import firebase from 'firebase'
 import 'firebase/firestore'

 const config = {
  apiKey: "AIzaSyDvy06WpuS3pzTc5lyDBw3g2_KNtlimDAE",
  authDomain: "vue-app-c3bb9.firebaseapp.com",
  databaseURL: "https://vue-app-c3bb9.firebaseio.com",
  projectId: "vue-app-c3bb9",
  storageBucket: "vue-app-c3bb9.appspot.com",
  messagingSenderId: "990270751889"
 }

 const firebaseapp = firebase.initializeApp(config)

 export default firebaseapp.firestore()
