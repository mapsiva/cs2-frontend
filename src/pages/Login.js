import React, { useState, useEffect } from "react";

import api from "../services/api";
import { login, isAuthenticated } from "../services/auth";
import CurrentUser from "../components/CurrentUser";
export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated()) {
      history.push("/movies");
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/login", {
      email,
      password
    });

    if (!response.data.token) {
      alert("E-mail ou senha incorretos! Tente novamente");
    } else {
      login(response.data.token);
      history.push("/movies");
    }
  }

  return (
    <div>
      <CurrentUser nameUser="Marcio" />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="e-mail"
            type="text"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            placeholder="password"
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
