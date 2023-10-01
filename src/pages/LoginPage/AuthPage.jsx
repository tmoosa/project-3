import SignUpForm from '../../SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

function AuthPage(props) {
    return (
        <main>
            <SignUpForm setUser={props.setUser} />
            <LoginForm setUser={props.setUser} />
        </main>
    )
}

export default AuthPage