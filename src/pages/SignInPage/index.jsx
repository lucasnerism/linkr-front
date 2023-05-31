import { PageContainer, Rigth, Left, CustomLink  } from "../SignUpPage/style";


export default function SignInPage(){
    return (
        <PageContainer>
            <Left>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </Left> 

            <Rigth>
                <input
                placeholder="e-mail">
                </input>
                <input
                placeholder="password">
                </input>

                <button>Log In</button>

                <CustomLink to="/sign-up">First time? Create an account!</CustomLink>
            </Rigth>

        </PageContainer>
    )

};
