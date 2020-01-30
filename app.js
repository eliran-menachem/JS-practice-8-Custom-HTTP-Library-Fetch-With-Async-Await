const http = new EasyHTTP;

// GET Users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

// Create User
http.post('https://jsonplaceholder.typicode.com/users', {name: 'Eliran Menachem',
username: "Eliran", email: "eliran.menachem@gmail.com"
})
.then(data => console.log(data))
.catch(err => console.log(err));

// Update User
http.put('https://jsonplaceholder.typicode.com/users/1',{name: 'Eliran Menachem',
username: "Eliran", email: "eliran.menachem@gmail.com"
})
.then(data => console.log(data))
.catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err => console.log(err));



