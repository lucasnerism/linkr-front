import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/index.jsx";
import { useEffect, useState, useContext } from "react";
import api from "../../services/api.js";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  // const { token } = useContext();
  const token = "";

  useEffect(() => {
    api.getUserById(id)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err?.response.data));
  }, []);

  return (
    <>
      {/* {
        { user.name }
        {user.posts?.map(post => <post></post>)}      
      } */}
    </>
  );
}