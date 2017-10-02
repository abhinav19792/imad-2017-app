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
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
    
    // Capture the list of names and render as a list
    var name = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i<name.length; i++ ) {
        list += '<li>' + name[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};