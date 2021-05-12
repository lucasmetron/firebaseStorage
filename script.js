var firebaseConfig = {
    apiKey: "AIzaSyDXk6wBaQpZ45b2I0w8vUkQpNURPhW_Q6w",
    authDomain: "escoladolucas-81f7c.firebaseapp.com",
    projectId: "escoladolucas-81f7c",
    storageBucket: "escoladolucas-81f7c.appspot.com",
    messagingSenderId: "1087501509532",
    appId: "1:1087501509532:web:38728aa2fd2de513bdde59",
    measurementId: "G-CJ1J9VFDPD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const ref1 = storage.ref("/material");
const ref2 = storage.ref("/material/Lista-2.pdf")

ref2.getDownloadURL().then(url => {
    console.log(url)
})

ref1.listAll().then(res => {
    console.log(res.items)
    res.items[0].getDownloadURL().then(url => {
        console.log(url)
    })
})

