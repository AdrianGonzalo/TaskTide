class RegisterForm extends FormWithFeedback {
    constructor() {
        super()

        this.addClass('RegisterForm')

        const registerTitle = new Heading(1)
        registerTitle.addClass('RegisterTitle')
        registerTitle.setText('REGISTER')

        const usernameField = new Field('username', 'text', 'USERNAME')
        // usernameField.setPlaceholder('username')

        const emailField = new Field('email', 'email', 'E-MAIL')
        // emailField.setPlaceholder('example@gmail.com')

        const passwordField = new Field('password', 'password', 'PASSWORD')
        // passwordField.setPlaceholder('password')

        const submitButton = new SubmitButton('REGISTER')
        submitButton.addClass('FormButton')

        const loginLink = new Link
        loginLink.addClass('LoginLink')
        loginLink.setText('LOGIN')
        loginLink.onClick(event => {
            event.preventDefault()

            setTimeout(() => location.href = '../login', 1000)
        })

        this.add(registerTitle)
        this.add(usernameField)
        this.add(emailField)
        this.add(passwordField)
        this.add(submitButton)
        this.add(loginLink)

        this.onSubmit(event => {
            event.preventDefault()

            const username = this.getUsername()
            const email = this.getEmail()
            const password = this.getPassword()

            try {
                logic.registerUser(username, email, password, error => {
                    if (error) {
                        this.setFeedback(error.message + '. please, correct it')

                        return
                    }

                    this.clear()

                    this.setFeedback('user successfully registered', 'success')

                    this.onRegistered()
                })
            } catch (error) {
                if (error instanceof ContentError)
                    this.setFeedback(error.message + '. please, correct it')
                else if (error instanceof MatchError)
                    this.setFeedback(error.message + '. please, retype them')
                else if (error instanceof DuplicityError)
                    this.setFeedback(error.message + '. please, enter new one')
                else
                    this.setFeedback('sorry there was an error, please try again')
            }
        })

    }

    getUsername() {
        const usernameField = this.children[3]

        return usernameField.getValue()
    }

    getEmail() {
        const emailField = this.children[2]

        return emailField.getValue()
    }

    getPassword() {
        const passwordField = this.children[4]

        return passwordField.getValue()
    }

    onRegistered(listener) {
        this.onRegistered = listener
    }
}
