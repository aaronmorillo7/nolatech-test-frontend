import { useState } from "react";
import Box from "../components/common/Box";
import FieldInput from "../components/common/FieldInput";
import Button from "../components/common/Button";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleLogin = () => {
    dispatch(login({ email: emailValue, password: passwordValue }));
  };

  return (
    <section className="w-full md:max-w-md flex justify-center items-center h-screen">
      <Box>
        <div className="grow flex flex-col justify-center gap-4">
          <h1 className="text-center text-xl bold">Inicio de sesión</h1>
          <form
            className="grid gap-2"
            onSubmit={(event) => event.preventDefault()}
          >
            <FieldInput
              label="Email"
              type="text"
              placeholder="Ingresa tu correo"
              isRequired={true}
              value={emailValue}
              onChange={handleEmailChange}
            />
            <FieldInput
              label="Password"
              type="password"
              placeholder="Ingresa tu contraseña"
              isRequired={true}
              value={passwordValue}
              onChange={handlePasswordChange}
            />
            <p className="text-center">
              ¿No tienes una cuenta? Creala <Link className="font-bold" to="/signup">Aquí</Link>{" "}
            </p>
            <div className="flex justify-center mt-2">
              <Button
                text="Iniciar sesión"
                isDisabled={!emailValue || !passwordValue}
                onClick={handleLogin}
              />
            </div>
          </form>
        </div>
      </Box>
    </section>
  );
};

export default Login;
