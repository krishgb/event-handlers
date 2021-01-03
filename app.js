// Mouse Elements---------------------------------------
const mouse_move = document.getElementById('mouse-move'),
      mouse_up   = document.getElementById('mouse-up'),
      mouse_over = document.getElementById('mouse-over') 

// Mouse Events-----------------------------------------
mouse_move.addEventListener("mousemove", (e) => {
    mouse_move.style.backgroundColor = `#${e.offsetX}${e.offsetY}`
})

mouse_move.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = ""
})

mouse_up.addEventListener('mousedown', e => {
    e.target.style.backgroundColor = "white"
    e.target.style.color = "black"
})

mouse_up.addEventListener('mouseup', e => {
    e.target.style.backgroundColor = ""
    e.target.style.color = "white"
})

mouse_over.addEventListener('mouseover', e => {
    mouse_over.style.fontSize = "20px"
})

mouse_over.addEventListener("mouseout", (e) => {
    mouse_over.style.fontSize = ""
})


// Key Elements-------------------------------------------------------
const key_up_input      = document.getElementById('key_up_input'),
      key_up_output     = document.getElementById('key_up_output'),
      key_up_pressed    = document.getElementById('key_up_pressed'),
      key_down_input    = document.getElementById('key_down_input'),
      key_down_output   = document.getElementById('key_down_output'),
      key_down_pressed  = document.getElementById('key_down_pressed'),
      key_press_input   = document.getElementById('key_press_input'),
      key_press_output  = document.getElementById('key_press_output'),
      key_press_pressed = document.getElementById('key_press_pressed')

// Key Events-----------------------------------------------------------
key_up_input.addEventListener('keyup', () => {
    key_up_output.value = key_up_input.value
    key_up_pressed.value = parseInt(key_up_pressed.value) + 1
})

key_down_input.addEventListener('keydown', () => {
    key_down_output.value = key_down_input.value
    key_down_pressed.value = parseInt(key_down_pressed.value) + 1
})

key_press_input.addEventListener('keypress', () => {
    key_press_output.value = key_press_input.value
    key_press_pressed.value = parseInt(key_press_pressed.value) + 1
})


// Context Menu Events
document.getElementById('right-click-here').addEventListener('contextmenu', (e) => {
    if(document.getElementById('checkbox').checked) e.preventDefault()
    document.querySelector('#hidden-p b').textContent = parseInt(document.querySelector('#hidden-p b').textContent) + 1
    document.getElementById('hidden-p').hidden = false
})


// Context Menu Events
document.form.addEventListener('blur', e => {
    e.target.style.backgroundColor = 'white'
    e.target.style.color = 'black'
}, true)


document.form.addEventListener('focus', e => {
    e.target.style.backgroundColor = 'black'
    e.target.style.color = 'white'
}, true)
    

