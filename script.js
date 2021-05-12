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

const ref = storage.ref("/material");

let fileInput = document.querySelector("#fileInput");
console.log(fileInput);

fileInput.addEventListener("change", (e) => {

    const file = e.target.files[0];
    console.log(file)
    ref.child(file.name).put(file).then(snapshot => {
        console.log(snapshot.state);
    })
})








