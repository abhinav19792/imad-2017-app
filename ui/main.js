// Counter Code
var button = document.getElementById('counter');

button.onclick = function() {
    
    // Create a request object 
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in variable.
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    // Make the request
    request.open('GET', 'http://abhinav81728.imad.hasura-app.io/counter', true);
    request.send(null);
};

// Submit name
var submit = document.getElementById('submit_btn1');
submit.onclick = function() {
    
        // Create a request object 
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in variable.
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200) {
                // Capture the list of names and render as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i<names.length; i++ ) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;           
            }
        }
    };
    
    // Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://abhinav81728.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);    
    
};

// Submit Username/Password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
        // Create a request object 
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in variable.
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200) {
                console.log('user logged in');
                alert('Logged in Successfully');
            } else if (request.status === 403) {
                alert('Username/Password is incorrect! Please try again');
            } else if (request.status === 500) {
                alert('Something went wrong on the server');
            } else if (request.status === 502) {
                alert('Bad Gateway!');
            }
        }
    };
    
    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://abhinav81728.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));    
    
};