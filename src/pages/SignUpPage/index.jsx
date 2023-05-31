import { PageContainer, Rigth, Left, CustomLink } from "./style";


export default function SignUpPage(){
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
                <input
                placeholder="username">
                </input>
                <input
                placeholder="picture url">
                </input>

                <button>Sign Up</button>

                <CustomLink to="/sign-in">Switch back to log in</CustomLink>
            </Rigth>

        </PageContainer>
    )

};

