import { StyledLogin } from "./style"
import logo  from "../../assets/CDC_logo_white 1.svg"
import { FormLogin } from "../../components/FormLogin"

export const Login = () =>{


    return (
        <StyledLogin>

            <aside className="LogoAside">
                <img src={logo} className="imgLogo" alt="CDC - logo"/>
            </aside>
            <div className="formDiv">
                <FormLogin/>
            </div>

        </StyledLogin>
    )
}

