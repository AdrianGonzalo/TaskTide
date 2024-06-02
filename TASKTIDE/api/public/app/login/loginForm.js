class LoginForm extends FormWithFeedback{
    constructor() {
        super()

        this.addClass('LoginForm')

        const loginTitle = new Heading(1)
        loginTitle.addClass('LoginTitle')
        loginTitle.setText('LOGIN')

        const usernameField = new Field('username', 'text', 'USERNAME')

        const passwordField = new Field('password', 'password', 'PASSWORD')

        const submitButton = new SubmitButton('LOGIN')
        submitButton.addClass('FormButton')


        const loginLink = new Link
        loginLink.addClass('LoginLink')
        loginLink.setText('REGISTER')
        loginLink.onClick(event => {
            event.preventDefault()

            setTimeout(() => location.href = '../register', 1000)
        })

        this.add(loginTitle)
        this.add(usernameField)
        this.add(passwordField)
        this.add(submitButton)
        this.add(loginLink)
        
        this.onSubmit(event => {
            event.preventDefault()

            const username = this.getUsername()
            const password = this.getPassword()

            try{
                logic.loginUser(username, password, error => {
                    if(error){
                        this.setFeedback(error.message + ', please, correct it')

                        return
                    }
                    this.clear()
            
                    this.setFeedback('user successfully logged in', 'success')
                     
                    this.onLoggedIn()
                })
            }catch(error){
                if (error instanceof ContentError) 
                    this.setFeedback(error.message + '. please, repeat it')
                
                else if(error instanceof MatchError)
                    this.setFeedback('wrong credentials')
        
                else
                    this.setFeedback('sorry, there was an error, please try again later')
            }
        })
    }

        getUsername() {
            const usernameField = this.children[0]

            return usernameField.getValue()
        }

        getPassword() {
            const passwordField = this.children[1]

            return passwordField.getValue()
        }

        onLoggedIn(listener) {
            this.onLoggedIn = listener
        }
}