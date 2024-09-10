document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Diccionario con números de teléfono y sus respectivas claves únicas
    const validUsers = {
        "8448937902": "800800",
        "8441565604": "600600",
        "8443427502": "400400"
    };

    if (validUsers[phone] && validUsers[phone] === password) {
        document.querySelector('.login-container').classList.add('hidden');
        document.querySelector('.payment-container').classList.remove('hidden');
    } else {
        alert('Número de teléfono o clave incorrectos');
    }
});

document.getElementById('submitPayment').addEventListener('click', function() {
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const amount = document.getElementById('amount').value;

    if (date && location && amount) {
        alert(`Pago registrado:\nFecha: ${date}\nLugar: ${location}\nMonto: $${amount}`);
        // Aquí se puede agregar lógica para guardar los datos en una base de datos o similar.
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
