const loginModal = document.getElementById('login-modal')
const signupModal = document.getElementById('signup-modal')
const login = document.getElementById('login-btn')
const signUp = document.getElementById('signup-btn')
const getStart = document.getElementById('getStart-btn')
const login2 = document.getElementById('login2-btn')
const cross = document.getElementById('cross-btn')
const cross2 = document.getElementById('cross-btn2')
const loginForm = document.getElementById('login-form')
const signupForm = document.getElementById('signup-form')
const loginBtnInForm = document.getElementById('form-login-btn')
const signupBtnInForm = document.getElementById('form-signup-btn')

// login Button Events ------------------------------------------

login.addEventListener('click', (event) =>{
    console.log("it was clicked");
    loginModal.classList.remove('hidden')
    document.querySelector('body').classList.add('overflow-hidden');
})

login2.addEventListener('click', (event) =>{
    console.log("Logged in");
    loginModal.classList.remove('hidden')
    document.querySelector('body').classList.add('overflow-hidden');
})

cross.addEventListener('click', (event) =>{
    console.log("Cross button");
    loginModal.classList.add('hidden')
    document.querySelector('body').classList.remove('overflow-hidden');
})

loginModal.addEventListener('click' , (e) =>{
    loginModal.classList.add('hidden')
    console.log('outside of form');
    document.querySelector('body').classList.remove('overflow-hidden');
    
})

loginForm.addEventListener('click', (e) =>{
    console.log('inside of form');
    e.stopPropagation()
})

signupBtnInForm.addEventListener('click', () =>{
    loginModal.classList.add('hidden')
    signupModal.classList.remove('hidden')
    document.querySelector('body').classList.add('overflow-hidden');
})


// signUp Button Events --------------------------------------------------------------------

signUp.addEventListener('click', (event) =>{
    console.log("it clicked");
    signupModal.classList.remove('hidden')
})

getStart.addEventListener('click', (event) =>{
    console.log("get Start");
    signupModal.classList.remove('hidden')
})

cross2.addEventListener('click', () =>{
    signupModal.classList.add('hidden')
})

signupModal.addEventListener('click', () =>{
    signupModal.classList.add('hidden')
})

signupForm.addEventListener('click', (e) =>{
    e.stopPropagation();
})

loginBtnInForm.addEventListener('click', () =>{
    signupModal.classList.add('hidden')
    loginModal.classList.remove('hidden')
    document.querySelector('body').classList.add('overflow-hidden');
})

// function preserveScroll() {
//     document.querySelector('body').classList.add('overflow-hidden');
// }