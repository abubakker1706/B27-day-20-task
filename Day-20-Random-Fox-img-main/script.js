

function randfox() {
    fetch(`https://randomfox.ca/floof/`)
    .then(res=> res.json())
    .then(data => {
        let result= document.getElementById('result');
        result.innerHTML= `<img src="${data.image}"/> `
    })
}
