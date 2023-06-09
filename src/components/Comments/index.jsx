import {AiOutlineComment} from "react-icons/ai";
import {BsSend} from "react-icons/bs"
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import api from "../../services/api.js";
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";

export default function Comments(props){
    const [display, setDisplay] = useState("none")
    const { localToken } = useContext(LogInContext);
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({ comment: ''});

  
    useEffect(() => {
      setLoading(true);
      api.getPostComments(props.post_id, localToken.token)
        .then(res => {
          setComments(res.data);
          setLoading(false);
          console.log(res.data)
        })
        .catch(err => {
          console.log(err?.response?.data);
          setLoading(false);
        });
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
    
        api.createComments(props.post_id, { ...formData }, localToken.token)
        .then((response) => {
            console.log(response.data)
          
        })
        .catch((error) => {
          setLoading(false);
          if (error.response.status === 404 || error.response.status === 401) {
            alert('O comentário não pode estar vazio!');
          }
        });

    }

    if (loading) return <></>;

    return(
        <>
            <Container>
                <button onClick={() => setDisplay("flex")}><AiOutlineComment className="react-icon"/></button>
                <p>{comments.length} comments</p>
            </Container>
            <CommentsContainer display={display}>
                {comments.map(c => 
                                <Comment>
                                <img src={c.profile_picture}/>
                                <div>
                                    <h1>{c.name} <span>• following</span></h1>
                                    <h2>{c.comment}</h2>
                                </div>
            
                            </Comment>
                    )}


                <AddComment>
                    <img src={localToken.profile_picture}/>
                    <form onSubmit={handleSubmit}>
                    <input 
                    placeholder="write a comment..."
                    name="comment"
                    type="text"
                    onChange={handleChange}
                    value={formData.comment}></input>
                    <button type="submit"><BsSend className="react-icon"/></button>

                    </form>
                    
                </AddComment>

            </CommentsContainer>
</>

    )
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 45px;
  top: 135px;
  left: 17px;
  z-index: 2;
  button{
    width: 21px;
    height: 21px;
    display: flex;
    padding: 0;
    border: none;
    background: none;
    justify-content: center;
    align-items: center;
  }
  .react-icon{
    font-size: 20px;
    color:#FFFFFF
  }
  p{
    width: 45px;
    font-family: 'Lato';    
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 4px;
  }
`;

export const CommentsContainer = styled.div`
    display: ${props => props.display};
    flex-direction: column ;
    width: 611px;
    min-height: 100px;
    box-sizing: border-box;
    padding: 15px;
    background: #1E1E1E;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin-top: 0;
    margin-left: 0;
`;

export const Comment = styled.div`
display: flex;
align-items: center;
margin-bottom: 16px;
img{
    width: 39px;
    height: 39px;
    margin-top: 5px;
    border: 1px solid black;
    background-color: blue;
    /* background: url(image.png); */
    border-radius: 26.5px;
}
div{
    margin-left: 18px;
}
h1{
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #F3F3F3;
}
h2{
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #ACACAC;
}
span{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #565656;


}`;

export const AddComment = styled.div`
display: flex;
align-items: center;
img{
    width: 39px;
    height: 39px;
    margin-top: 5px;
    border: 1px solid black;
    background-color: blue;
    /* background: url(image.png); */
    border-radius: 26.5px;
};
input{
width: 510px;
height: 39px;
background: #252525;
border-radius: 8px;
border: none;
padding: 5px;
margin-left: 14px;

font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.05em;
color: #575757;
}
.react-icon{
    font-size: 20px;
    color:#FFFFFF;
  }
  button{
    width: 21px;
    height: 21px;
    display: flex;
    padding: 0;
    border: none;
    background: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 25px;
    right: 45px;
  }`

