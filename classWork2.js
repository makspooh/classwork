// FORM
function Form() {
}

Form.prototype.createBlock = function(cl) {
    let block = document.createElement('div');
    block.classList.add(cl);
    document.body.appendChild(block);
}

Form.prototype.createForm = function(cls, parentCls) {
    let form = document.createElement('form');
    form.classList.add(cls);
    form.setAttribute('method', 'POST');
    document.querySelector('.' + parentCls).appendChild(form);
}

Form.prototype.createHeadliner = function(text, cls) {
    this.text = text;
    let headliner = document.createElement('h1');
    headliner.textContent = text;
    document.querySelector(cls).appendChild(headliner);
}

Form.prototype.createInput = function(type, value, cls, pcls) {
    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('placeholder', value);
    input.setAttribute('required', '');
    input.classList.add(cls);
    document.querySelector('.' + pcls).appendChild(input);
}

Form.prototype.createCheckbox = function(type, value, cls) {
    let p = document.createElement('p');
    let checkBox = document.createElement('input');

    p.classList.add('checkbox');
    p.textContent = 'Is admin?';
    checkBox.setAttribute('type', type);
    checkBox.setAttribute('value', value);
    document.querySelector('.' + cls).appendChild(p);
    document.querySelector('.checkbox').appendChild(checkBox);
}

Form.prototype.createButton = function(cls) {
    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.classList.add('submit');
    document.querySelector('.' + cls).appendChild(submit);
}

function SignIn() {
}
SignIn.prototype = Object.create(Form.prototype);

function SignUp() {
}
SignUp.prototype = Object.create(Form.prototype);

// USERS
let users = new Array;

function User(role, name, password) {
    this.role = role;
    this.name = name;
    this.password = password;
}

User.prototype.showNews = function() {
}

User.prototype.changeNameAndPaswword = function() {
}

User.prototype.logOut = function() {
}

function Admin() {
    User.apply(this, arguments);
}
Admin.prototype = Object.create(User.prototype);

Admin.prototype.changeNews = function() {
}

Admin.prototype.deleteNews = function() {
}

function Guest() {
    User.apply(this, arguments);
}
Guest.prototype = Object.create(User.prototype);

// CREATE ELEMENTS
window.onload = function() {
    let signIn = document.createElement('a');
    let signUp = document.createElement('a');
    
    signIn.textContent = 'Sign In';
    signIn.setAttribute('href', '#');
    signIn.style.marginRight = '50px';

    signUp.textContent = 'Sign Up';
    signUp.setAttribute('href', '#');

    document.querySelector('body').appendChild(signIn);
    document.querySelector('body').appendChild(signUp);

    signIn.addEventListener('click', function() {
        if (document.querySelector('.up')) {
            document.querySelector('.up').remove();
        }

        if (document.querySelector('.in')) {
            return;
        } else {
            let newSignIn = new SignIn();
            newSignIn.createBlock('in');
            newSignIn.createForm('in_form', 'in');
            newSignIn.createHeadliner('Sign In', '.in_form');
            newSignIn.createInput('text', 'Login', 'login', 'in_form');
            newSignIn.createInput('password', 'Password', 'password', 'in_form');
            newSignIn.createButton('in_form');
        }

        let form = document.querySelector('form');
    
        form.addEventListener('submit', function() {
            console.log('Hello');
        })
        console.log(users);
    })

    signUp.addEventListener('click', function() {
        if (document.querySelector('.in')) {
            document.querySelector('.in').remove();
        }

        if (document.querySelector('.up')) {
            return;
        } else {
            let newSignUp = new SignUp();
            newSignUp.createBlock('up');
            newSignUp.createForm('up_form', 'up');
            newSignUp.createHeadliner('Sign Up', '.up_form');
            newSignUp.createInput('text', 'Login', 'login', 'up_form');
            newSignUp.createInput('password', 'Password', 'password', 'up_form');
            newSignUp.createInput('password', 'Confirm Password', 'confirmPassword', 'up_form');
            newSignUp.createCheckbox('checkbox', 'Is Admin?', 'up_form');
            newSignUp.createButton('up_form');
        }

        let form = document.querySelector('form');
        let name = document.querySelector('.login');
        let password = document.querySelector('.password');
        let confirmPassword = document.querySelector('.confirmPassword');
        let checkBox = document.querySelector('.checkbox');
        
        let users = [];

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let obj = {
                id: '',
                name: name.value,
                role: checkBox ? 'admin' : 'guest',
                password: password.value
            }
            users.push(obj);
            console.log(users);
        })
    })
}