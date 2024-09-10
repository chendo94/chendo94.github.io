// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqHztmRTP4Jx5-uj69EeV6FUZtaqtb4VI",
  authDomain: "my-app-registro.firebaseapp.com",
  databaseURL: "https://my-app-registro-default-rtdb.firebaseio.com",
  projectId: "my-app-registro",
  storageBucket: "my-app-registro.appspot.com",
  messagingSenderId: "101227800599",
  appId: "1:101227800599:web:35e25c36969e6809871452",
  measurementId: "G-ZYHZWQQTL6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// User credentials
const users = {
    "8441565604": "clave1",
    "8443427502": "clave2",
    "8448937902": "clave3"
};

function login() {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    if (users[phone] && users[phone] === password) {
        document.querySelector('.login').classList.add('hidden');
        document.querySelector('.register').classList.remove('hidden');
    } else {
        alert('Número o clave incorrecta.');
    }
}

function registerPayment() {
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const amount = document.getElementById('amount').value;

    if (date && location && amount) {
        const paymentRef = database.ref('payments').push();
        paymentRef.set({
            date,
            location,
            amount
        }).then(() => {
            alert('Pago registrado exitosamente.');
            document.querySelector('.register').reset(); // Clear form fields
        }).catch(error => {
            alert('Error al registrar el pago: ' + error.message);
        });
    } else {
        alert('Por favor, completa todos los campos.');
    }
}
