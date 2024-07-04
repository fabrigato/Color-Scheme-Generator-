const colorInput = document.getElementById("color-input")
const mode = document.getElementById("mode")
const getSchemeBtn = document.getElementById("get-scheme-btn")
const main = document.getElementById("main")

getSchemeBtn.addEventListener("click", function(){
    const hexValue = colorInput.value.substring(1)
    main.innerHTML = ""
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${mode.value}`)
    .then(resp => resp.json())
    .then(data => {
            data.colors.map(color => {
            main.innerHTML += ` 
                                <div class="wrapper">
                                <div class="scheme-container" id="${color.hex.value}">
                                </div>
                                <p class="hex-value" id="hex-value">${color.hex.value}</p>
                                </div>`
                                
            document.getElementById(`${color.hex.value}`).style.background = color.hex.value
            }).join("")      
            
})
 })
    