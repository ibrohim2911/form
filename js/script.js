const signinBtn = document.querySelector('.signinBtn')
const signupBtn = document.querySelector('.signupBtn')
const formbx = document.querySelector('.formbx')
const body = document.querySelector('body')
signupBtn.onclick = function(){
    formbx.classList.add('active')
    body.classList.add('active')
}
signinBtn.onclick = function(){
    formbx.classList.remove('active')
    body.classList.remove('active')
}
