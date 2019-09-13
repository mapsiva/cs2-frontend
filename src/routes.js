import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import ListMovies from "./pages/Movies/ListMovies";
import Login from "./pages/Login";
import Genres from "./pages/Genres";
import Users from "./pages/Users";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <Route path="/movies" exact component={ListMovies} />
      <Route path="/movies/:id" exact component={ListMovies} />
      <Route path="/genres" exact component={Genres} />
      <Route path="/users" exact component={Users} />
    </BrowserRouter>
  );
}
