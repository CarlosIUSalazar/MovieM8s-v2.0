let firebaseConfig = {
    // Your web app's Firebase configuration
      apiKey: "AIzaSyBLo8Qodatxni6vT2np4XGvNVgz1-XTHMY",
      authDomain: "moviem8s.firebaseapp.com",
      databaseURL: "https://moviem8s.firebaseio.com",
      projectId: "moviem8s",
      storageBucket: "moviem8s.appspot.com",
      messagingSenderId: "223030327474",
      appId: "1:223030327474:web:8f756c893c3cd008f6f1ab"
    };

firebase.initializeApp(firebaseConfig);
let dbFavMovies = firebase.firestore();

let table = document.getElementById('table');
dbFavMovies.collection("RealTable").orderBy('Name').onSnapshot((querySnapshot) => {
    table.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        table.innerHTML += `
        <tr>
       <td>${doc.data().Name}</td>
        <td>${doc.data().ImageLink}</td>
        <td>${doc.data().Rating}</td> 
        <td>${doc.data().Year}</td>
        <td>${doc.data().Plot}</td> 
        </tr>
        `
    });
});