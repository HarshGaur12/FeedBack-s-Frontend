const loginModal = document.getElementById('login-modal')
const signupModal = document.getElementById('signup-modal')
const login = document.querySelectorAll('.login-btn')
const signUp = document.querySelectorAll('.signup-btn')
const getStart = document.getElementById('getStart-btn')
const cross = document.getElementById('cross-btn')
const cross2 = document.getElementById('cross-btn2')
const loginForm = document.getElementById('login-form')
const signupForm = document.getElementById('signup-form')
const signupBtnInForm = document.getElementById('form-signup-btn')
const hamModal = document.getElementById('ham-modal')
const hamBtn = document.getElementById('ham-btn')
const hamForm = document.getElementById('ham-form')

// Functions ----------------------------------------------------------

function preserveScroll() {
    document.querySelector('body').classList.add('overflow-hidden');
}

function addScroll() {
    document.querySelector('body').classList.remove('overflow-hidden');
}

// login Button Events ------------------------------------------

login.forEach(btn => {
    btn.addEventListener('click', () =>{
        loginModal.classList.remove('hidden')
        signupModal.classList.add('hidden')
        preserveScroll()
    });
});

cross.addEventListener('click', (event) =>{
    loginModal.classList.add('hidden')
    addScroll()
})

loginModal.addEventListener('click' , (e) =>{
    loginModal.classList.add('hidden')
    addScroll()
})

loginForm.addEventListener('click', (e) =>{
    e.stopPropagation()
})


// signUp Button Events --------------------------------------------------------------------

signUp.forEach(btn => {
    btn.addEventListener('click', () =>{
        signupModal.classList.remove('hidden')
        loginModal.classList.add('hidden')
        preserveScroll()
    })
})


cross2.addEventListener('click', () =>{
    signupModal.classList.add('hidden')
    addScroll()
})

signupModal.addEventListener('click', () =>{
    signupModal.classList.add('hidden')
    addScroll()
})

signupForm.addEventListener('click', (e) =>{
    e.stopPropagation();
})


// Hamburger Modal ---------------------------------------------------

window.addEventListener('resize', () =>{
    if(window.innerWidth > 768){
        hamModal.classList.add('hidden')
    }
});

hamBtn.addEventListener('click', () =>{
    if(hamModal.classList.contains('hidden')){
        hamModal.classList.remove('hidden')
    }
    else{
        hamModal.classList.add('hidden')
    }
})

hamModal.addEventListener('click', () =>{
    hamModal.classList.add('hidden')
})

hamForm.addEventListener('click', (e) =>{
    e.stopPropagation();
});

document.addEventListener('click', (e) =>{
    if(!hamModal.contains(e.target) && e.target !== hamBtn){
        hamModal.classList.add('hidden')
    }
})
