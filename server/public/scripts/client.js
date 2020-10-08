console.log("hello from JS");

$(document).ready(onReady);

function onReady() {
    // perform GET request
    getQuotes();

    $('#submit').on('click', submitQuote);
}

function submitQuote() {
    // grabbing value from the dom
    let quote = $('#quote').val();
    let author = $('#author').val();
    console.log('clicked', quote, author);
    // send data to server via post request
    $.ajax({
        method: 'POST',
        url: '/submitQuotes',
        data: {
            quote: quote,
            author: author
        }
    }).then(function (response) {
        console.log('response: ', response);
        getQuotes();
    }).catch(function (error) {
        //notifying the user of an error in post request
        alert(error);
    });
}


function getQuotes() {
    console.log("get the quote");
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then(function (response) {
        console.log('response', response);
        appendToDom(response);
    });
}

function appendToDom(dataToAppend) {
    $('#output').empty();
    // take the response from the server
    // append it to #output so it shows up on the DOM
    for (let i = 0; i < dataToAppend.length; i++) {
        $('#output').append(`
            <p>${dataToAppend[i].quote}</p>
            <i>from: ${dataToAppend[i].author}</i>
        `)
    }
}