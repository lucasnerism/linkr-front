import { useContext, useState } from "react";
import { Button, Container, Form, Input, User } from "./style.jsx";
import { DebounceInput } from "react-debounce-input";
import { FaSearch } from "react-icons/fa";
import { Link, createSearchParams } from "react-router-dom";
import api from "../../services/api.js";

export default function SearchBar() {
  const [users, setUsers] = useState([]);
  // const { token } = useContext()
  const token = "";

  const handleChange = (e) => {
    const name = e.target.value;
    const query = createSearchParams({ name });
    api.searchUsers(query.toString(), token)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err?.response.data));
  };

  return (
    <Container>
      <Form>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          onChange={handleChange}
          element={Input}
          placeholder={'Search for people'}
        />
        <Button><FaSearch className="react-icon" /></Button>
      </Form>
      {users.length !== 0 ? <div>
        {users?.map(user =>
          <User>
            <Link to={`/user/${user.id}`}>
              <img src={user.image} alt={user.name} />
              <p>{user.name}</p>
            </Link>
          </User>
        )}
      </div> : ""
      }
    </Container>
  );
}