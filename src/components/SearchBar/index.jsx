import { useContext, useState } from "react";
import { Button, Container, Form, Input, User } from "./style.jsx";
import { DebounceInput } from "react-debounce-input";
import { FaSearch } from "react-icons/fa";
import { Link, createSearchParams } from "react-router-dom";
import api from "../../services/api.js";
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";

export default function SearchBar() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const { localToken } = useContext(LogInContext);

  const handleChange = (e) => {
    setName(e.target.value);
    const query = createSearchParams({ name: e.target.value });
    api.searchUsers(query.toString(), localToken.token)
      .then(res => {
        setUsers(res.data);
        console.log(res.data)
      })
      .catch(err => console.log(err?.response?.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = createSearchParams({ name });
    api.searchUsers(query.toString(), localToken.token)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err?.response?.data));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          onChange={handleChange}
          element={Input}
          placeholder={'Search for people'}
          data-test="search"
        />
        <Button><FaSearch className="react-icon" /></Button>
      </Form>
      {name ? <div>
        {users?.map(user =>
          <User key={user.id} data-test="user-search">
            <Link to={`/user/${user.id}`}>
              <img src={user.image} alt={user.name} />
              <p>{user.name}<span>{user.following ? " • following" : ""}</span></p>
            </Link>
          </User>
        )}
      </div> : ""}

    </Container>
  );
}