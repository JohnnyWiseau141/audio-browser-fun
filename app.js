const lugiaCry = new Audio("./audio/lugia.mp3")


const lugiaImg = document.querySelector('#lugia')
const notLugiaImg = document.querySelector("#notLugia")



lugiaImg.addEventListener("click", evt => {
    lugiaCry.play()
})

notLugiaImg.addEventListener("click", evt => {
    if (evt.target.id !== 'notLugia'){
        const audioElement = new Audio(`./audio/${evt.target.id}.mp3`)
        console.log(evt.target.id)
        audioElement.play()
    }
})