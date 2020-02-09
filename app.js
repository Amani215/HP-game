//private key
const key = '$2a$10$eGkdptUndJyrJ5F6Nj4dqeb6jkh0w7uW6epilhov6PxMUrHLa8R8a'

let name

//show the names from the api
document.getElementById('start').addEventListener('click',getNames)
document.getElementById('restart').addEventListener('click',getNames)
function getNames(e){
    fetch(`https://www.potterapi.com/v1/characters?key=${key}`)
    .then(res => {
        return res.json()
    })
    .then(names => {
        let output =''
        for(let i=15; i<21; i++){
            output += `<li class="name" draggable="true">${names[i].name}</li>`
        }
        document.querySelector('.container-names').innerHTML=output
        
        name = Array.from(document.querySelectorAll('.name'))
        console.log(name)
        name.forEach(element => {
            element.addEventListener('dragstart',dragStart)
            element.addEventListener('dragend',dragEnd)
        });
    })
    .catch(err => console.log(err))
}

const houses = document.querySelectorAll('.house')

//drag functions
function dragStart(){
    setTimeout(() => (this.className = 'invisible'),0)
}

function dragEnd(){
}