

function loading() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedDataJSON = localStorage.getItem('newdata');

    if (storedDataJSON) {
        const storedData = JSON.parse(storedDataJSON);

        if (email === storedData.email && password === storedData.password) {
            alert("Login successful!");
            window.location.href = 'index.html';
         
        } else {
            alert("Invalid email or password. Please try again.");
        }
    } else {
        alert("No user data found. Please sign up.");
    }
}
