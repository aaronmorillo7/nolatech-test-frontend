import { useState } from "react";
import Box from "../components/common/Box";
import FieldInput from "../components/common/FieldInput";
import Button from "../components/common/Button";
import { useDispatch } from "react-redux";
import { signup } from "../store/reducers/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [departmentValue, setDepartmentValue] = useState("");
  const [roleValue, setRoleValue] = useState(3);
  const [ageValue, setAgeValue] = useState();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstNameValue(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastNameValue(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartmentValue(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAgeValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSignup = () => {
    dispatch(
      signup({
        first_name: firstNameValue,
        last_name: lastNameValue,
        department: departmentValue,
        age: ageValue,
        role: roleValue,
        email: emailValue,
        genre: "M",
        password: passwordValue,
      })
    );
  };

  return (
    <section className="w-full md:max-w-md flex justify-center items-center h-screen">
      <Box>
        <div className="grow flex flex-col justify-center gap-4">
          <h1 className="text-center text-xl bold">Crear cuenta</h1>
          <form
            className="grid gap-2"
            onSubmit={(event) => event.preventDefault()}
          >
            <FieldInput
              label="Nombre"
              type="text"
              placeholder="Ingresa tu nombre"
              isRequired={true}
              value={firstNameValue}
              onChange={handleFirstNameChange}
            />
            <FieldInput
              label="Apellido"
              type="text"
              placeholder="Ingresa tu apellido"
              isRequired={true}
              value={lastNameValue}
              onChange={handleLastNameChange}
            />
            <FieldInput
              label="Age"
              type="number"
              placeholder="Ingresa tu edad"
              isRequired={true}
              value={ageValue}
              onChange={handleAgeChange}
            />
            <FieldInput
              label="Departamento"
              type="text"
              placeholder="Ingresa tu departamento"
              isRequired={true}
              value={departmentValue}
              onChange={handleDepartmentChange}
            />
            <FieldInput
              label="Email"
              type="text"
              placeholder="Ingresa tu correo"
              isRequired={true}
              value={emailValue}
              onChange={handleEmailChange}
            />
            <FieldInput
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              isRequired={true}
              value={passwordValue}
              onChange={handlePasswordChange}
            />
            <p className="text-center">
              ¿Ya tienes una cuenta? Inicia sesión{" "}
              <Link className="font-bold" to="/login">
                Aquí
              </Link>{" "}
            </p>
            <div className="flex justify-center mt-2">
              <Button
                text="Registrarse"
                isDisabled={
                  !firstNameValue ||
                  !lastNameValue ||
                  !departmentValue ||
                  !ageValue ||
                  !emailValue ||
                  !passwordValue
                }
                onClick={handleSignup}
              />
            </div>
          </form>
        </div>
      </Box>
    </section>
  );
};

export default Signup;
