import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function ListMovies({ match }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("/movies");

      setMovies(response.data);
    }
    loadMovies();
  }, []);
  return (
    <div>
      <Link to="/logout">Sair</Link>
      {movies.length === 0 ? (
        <div>Nenhum filme Cadastrado!</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.name}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
