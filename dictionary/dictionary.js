show=()=>{
let word=document.getElementById('dem').value;
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response)=>{
    return response.json();
}).then((data)=>{
    var definition = data[0].meanings[0].definitions[0].definition;
    console.log(word)
    
    document.getElementById('res').innerHTML=definition;
    
}
)
}