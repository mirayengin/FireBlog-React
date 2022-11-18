import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { isLogin } from "../auth/firebase";

const PrivateRouter = () => {
  const [user, setUser] = useState(false);
  const [state, setState] = useState(false);

  isLogin(setUser, setState);

  return <>{state && (user ? <Outlet /> : <Navigate to="/login" />)}</>;
};

export default PrivateRouter;
