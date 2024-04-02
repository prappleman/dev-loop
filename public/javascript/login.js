async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const userExists = await checkUserExists(username); // Function to check if user exists

        if (userExists) {
            const response = await fetch('/api/users/login', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText);
            }
        } else {
            alert('User does not exist. Please sign up first.');
        }
    }
}

async function checkUserExists(username) {
    const response = await fetch(`/api/users/${username}`);
    const userData = await response.json();
    return response.ok && userData.id;
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
