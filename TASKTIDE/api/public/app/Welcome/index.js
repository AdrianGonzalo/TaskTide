const view = new Component(document.body)
view.addClass('View')

const title = new Heading(1)
title.addClass('Title')
title.setText('TASK TIDE')
// title.style.border = "2px solid rgba(104, 48, 48, 1)";
title.onClick(() => alert('Ready to start managing your tasks? :)'))

const square = new Square 
square.addClass('Square')

const titleWelcome = new Heading(1)
titleWelcome.addClass('TitleWelcome')
titleWelcome.setText('WELCOME')
square.add(titleWelcome)

const textWelcome = new Text
textWelcome.addClass('TextWelcome')
textWelcome.setText('Welcome to Task-Tide, the to-do definitive. In this application you can organize yourself in a simple way, making your day more productive')
square.add(textWelcome)

const textWelcome2 = new Text
textWelcome2.addClass('TextWelcome')
textWelcome2.setText('Thanks for trusting us :)')
square.add(textWelcome2)

const buttonWelcome = new Button
buttonWelcome.setText('LOG IN')
buttonWelcome.addClass('ButtonWelcome')
square.add(buttonWelcome)

buttonWelcome.onClick(event => {
    event.preventDefault()

    setTimeout(() => location.href = '../home', 1000)
})

const background = new Image
background.addClass('Background')
background.setUrl('../assets/sea.jpg')

view.add(title)
view.add(square)
view.add(background)