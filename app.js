  
var btn = document.querySelector("#btn");
var textInput = document.querySelector("#text-input");
var translationMainSpan = document.querySelector("#translation");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with server! try again later")
}

function clickEventHandler() {
    var inputText = textInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            translationMainSpan.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btn.addEventListener("click", clickEventHandler)