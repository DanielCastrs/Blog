import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ModalPerfil from "../../components/perfil/modalperfil/ModalPerfil";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="flex justify-center mx-4">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden">
        <img
          className="w-full h-72 object-cover border-b-8 border-white"
          src="https://i.imgur.com/ZZFAmzo.jpg"
          alt="Capa do Perfil"
        />

        <img
          className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
          src={usuario.foto}
          alt={`Foto de perfil de ${usuario.nome}`}
        />

        <div
          className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-red-900 text-white text-2xl items-center justify-center shadow-lg"
        >
          <div className="flex flex-col justify-center items-center">
            <p className="">Nome: {usuario.nome} </p>
            <p>Email: {usuario.usuario}</p>
          </div>
          <div className="flex justify-around gap-4">
            <div className="flex justify-around gap-4">
              <ModalPerfil />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
