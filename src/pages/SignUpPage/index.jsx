import { PageContainer, Rigth, Left, CustomLink } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import api from "../../services/api";


export default function SignUpPage() {
  const [formData, setFormData] = useState({ email: '', password: '', username: '', profile_picture: '' });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);


    const promise = api.signUp({ ...formData });
    promise.then((response) => {
      setLoading(false);
      navigate("/");
    });
    promise.catch((error) => {
      setLoading(false);
      if (error.response.status === 422) {
        alert("O cadastro falhou. Verifique se os dados foram preenchidos corretamente!");
      } else if (error.response.status === 409) {
        alert("Email já utilizado");
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
            data-test="email"
            placeholder="e-mail"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required>
          </input>

          <input
            data-test="password"
            placeholder="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required>
          </input>

          <input
            data-test="username"
            placeholder="username"
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            required>
          </input>

          <input
            data-test="picture-url"
            placeholder="picture url"
            type="text"
            name="profile_picture"
            onChange={handleChange}
            value={formData.profile_picture}
            required>
          </input>

          <button data-test="sign-up-btn" disabled={loading} type="submit">Sign Up</button>
        </form>


        <CustomLink data-test="login-link" to="/">Switch back to log in</CustomLink>
      </Rigth>

    </PageContainer>
  );

};

