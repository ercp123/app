import HeaderLogin from './subComponents/header';
import FormComponent from './subComponents/form';
import FooterLogin from './subComponents/footer';
import {LoginWrapper} from './styled'
const LoginMainComponent = () => {

    return (
        <LoginWrapper>
            <HeaderLogin />
            <FormComponent />
            <FooterLogin />
        </LoginWrapper>
    )
}
export default LoginMainComponent;