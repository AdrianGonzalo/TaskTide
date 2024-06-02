class Text extends Component {
    constructor(text){
        super()

        this.addClass('Text')
        this.setText(text)
    }

    setText(text) {
        this.container.innerText = text
    }

    hide(){
        this.container.style.display = 'none'
    }

    show(){
        this.container.style.display = 'block'
    }
}