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
    document.querySelector('.' + parentCls).appendChild(form);
}

Form.prototype.createHeadliner = function(text) {
    this.text = text;
    let headliner = document.createElement('h1');
    headliner.textContent = text;
    document.querySelector('.in_form').appendChild(headliner);
}

Form.prototype.createInput = function(type, value, cls) {
    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('placeholder', value);
    document.querySelector('.' + cls).appendChild(input);
}

Form.prototype.createButton = function(cls) {
    let submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.textContent = 'Submit';
    document.querySelector('.' + cls).appendChild(submit);
}

function SignIn() {
}
SignIn.prototype = Object.create(Form.prototype);

function SignUp() {
}
SignUp.prototype = Object.create(Form.prototype);

window.onload = function() {
    let newSignIn = new SignIn();
    newSignIn.createBlock('in');
    newSignIn.createForm('in_form', 'in');
    newSignIn.createHeadliner('Sign In');
    newSignIn.createInput('text', 'Login', 'in_form');
    newSignIn.createInput('password', 'Password', 'in_form');
    newSignIn.createButton('in_form');

    let newSignUp = new SignUp();
    newSignUp.createBlock('up');
    newSignIn.createForm('up_form', 'up');
    newSignIn.createHeadliner('Sign Up');
    newSignIn.createInput('text', 'Login', 'up_form');
    newSignIn.createInput('email', 'Email', 'up_form');
    newSignIn.createInput('password', 'Password', 'up_form');
    newSignIn.createInput('password', 'Confirm Password', 'up_form');
    newSignIn.createButton('up_form');
}