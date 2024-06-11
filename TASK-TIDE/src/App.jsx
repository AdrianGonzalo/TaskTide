import { useState } from 'react'
import './App.css'

import Link from './components/core/Link'
import Title_h1 from './components/core/Title_h1'
import Title_h2 from './components/core/Title_h2'
import Field from './components/core/Field'
import SubmitButton from './components/core/SubmitButton'
import View from './components/library/View'
import FormWithFeedback from './components/library/FormWithFeedback'



function App() {
  console.log('App -> render')

  const [view, setView] = useState('login')

  return <>
    {view === 'register' && <View tag='main'>

      <Title_h1>TASK TIDE</Title_h1>

      <FormWithFeedback className="Form FormWithFeedback RegisterForm">
        <Title_h2>REGISTER</Title_h2>

        <Field id='username' >USERNAME</Field>

        <Field id='email' >E-MAIL</Field>

        <Field id='password' >PASSWORD</Field>

        <Field id='repeatPassword' >REPEAT PASSWORD</Field>

        <SubmitButton>REGISTER</SubmitButton>

        <Link href="" className="Link">LOGIN</Link>
      </FormWithFeedback>
    </View>}

    {view === 'login' && <View tag='main'>

      <Title_h1>TASK TIDE</Title_h1>

      <FormWithFeedback className="Form FormWithFeedback RegisterForm">
        <Title_h2>LOGIN</Title_h2>

        <Field id='username' >USERNAME</Field>

        <Field id='password' >PASSWORD</Field>

        <SubmitButton>LOGIN</SubmitButton>

        <Link href="" className="Link">REGISTER</Link>
      </FormWithFeedback>
    </View>}

    {view === 'home' && <View tag='main'>

      <Title_h1>TASK TIDE</Title_h1>

      <View tag='main'></View>

      <footer></footer>
    </View>}
  </>
}

export default App