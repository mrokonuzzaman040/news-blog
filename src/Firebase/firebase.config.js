import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB5dosF-4K7ocnj-7qRaoD0NnAWJNkZT20",
    authDomain: "news-blog-151ba.firebaseapp.com",
    projectId: "news-blog-151ba",
    storageBucket: "news-blog-151ba.appspot.com",
    messagingSenderId: "532703327439",
    appId: "1:532703327439:web:ba22dfa3d2b380117a73ba"
};

const app = initializeApp(firebaseConfig);
export default app;