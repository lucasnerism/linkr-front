import { PageContainer, Rigth, Left, CustomLink } from "./style";


export default function SignUpPage(){
    const {user, setUser} = useContext(UserContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
  }

    function handleSubmit(e) {
        e.preventDefault();

        const promise = api.signIn({ ...formData });
        promise.then((response) => {
        console.log(response.data);
        const {idUser, token, name} = response.data;
        setUser({idUser, token, name});
        localStorage.setItem("user", JSON.stringify({idUser, token, name}))
        navigate("/home");
    });

        promise.catch((error) => {
        if ( error.response.status === 404 || error.response.status === 401) {
            alert('Verifique se os dados foram preenchidos corretamente');
        };
     
    });
  }

    return (
        <PageContainer>
            <Left>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </Left> 

            <Rigth>
                <input
                placeholder="e-mail"
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}>
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

