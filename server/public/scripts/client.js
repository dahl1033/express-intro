console.log("hello from JS");

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery');
    // GET request
    getRandomQuote();
}

function getRandomQuote(){
    console.log('getting random quote');
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
        // response is the res.send in server.js
    }).then(function(response){
        //response from server
        console.log('response =', response);
        appendToDom(response);
    });
}

function appendToDom(dataToAppend){
    $('#output').empty();
    $('#output').append(dataToAppend.quote,'<br/>~ ', dataToAppend.author);
}