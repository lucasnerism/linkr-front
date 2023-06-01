import { PageContainer, Rigth, Left, CustomLink  } from "../SignUpPage/style";
import api from "../../services/api";
import { useContext, useState } from "react";
import { LogInContext } from "../../contexts/PersistenLogInContext";
import { useNavigate } from "react-router-dom";

export default function SignInPage(){
    const {localToken, setLocalToken} = useContext(LogInContext);
    const [formData, setFormData] = useState({email:'', password:''});
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)


    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
    
        const promise = api.signIn({ ...formData });
        promise.then((response) => {
          console.log(response.data);
          const {user_id, token, profile_picture} = response.data;
          setLocalToken({user_id, token, profile_picture});
          localStorage.setItem("user", JSON.stringify({user_id, token, profile_picture}));
          setLoading(false)
          navigate("/timeline");
        });
    
        promise.catch((error) => {
            setLoading(false)
          if ( error.response.status === 404 || error.response.satus === 401) {
            alert('Verifique se os dados foram preenchidos corretamente');
          }
         
        });
      }
    return (
        <PageContainer>
            <Left>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </Left> 

            <Rigth>
                <form onSubmit={handleSubmit}>
                <input
                placeholder="e-mail"
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required>
                </input>

                <input
                placeholder="password"
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required>
                </input>

                <button disabled={loading} type="submit">Log In</button>
                </form>

                <CustomLink to="/sign-up">First time? Create an account!</CustomLink>
            </Rigth>

        </PageContainer>
    )

};
