let span = document.querySelector('#clicks')
let btn = document.querySelector('#btn')

let click = 0

span.innerHTML = `clicks = mm`
btn.addEventListner('click', () => {
  click++
  span.innerHTML = `clicks = ${click}`
})
setInterval(() => {
  click += 1
  span.innerHTML = `clicks = ${click}`
},1000)
