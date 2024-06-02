const view = new Component(document.body)
view.addClass('View')

const title = new Heading(1)
title.addClass('Title')
title.setText('TASK TIDE')
// title.style.border = "2px solid rgba(104, 48, 48, 1)";
title.onClick(() => alert('Ready to start managing your tasks? :)'))

const loginForm = new LoginForm
loginForm.addClass('LoginForm')
// registerForm.onRegistered(() => setTimeout(() => location.href = '../login', 1000))

const background = new Image
background.addClass('Background')
background.setUrl('../assets/sea.jpg')

view.add(title)
view.add(loginForm)
view.add(background)