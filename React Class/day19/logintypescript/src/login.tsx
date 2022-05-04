import { FC } from "react";


interface LoginModel {
    email: string,
    password: string
}

const Login:FC<LoginModel> = (props) => {
    return (
        <div>
            <form>
                <label htmlFor="email" />
                <input type="email" placeholder="Enter Email" />
                <label htmlFor="email" />
                <input type="password" placeholder="Enter Password" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;