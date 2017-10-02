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
                span.innerHTML = counter.toString();
            }
        }
    }
    
    // Make the request
    request.open('GET', 'http://abhinav81728.imad.hasura-app.io', true);
    request, send(null);
}