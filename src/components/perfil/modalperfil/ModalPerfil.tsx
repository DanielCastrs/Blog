import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./ModalPerfil.css";

function ModalPerfil() {
  return (
    <>
      <Popup
        trigger={
          <button
            type="submit"
            className="rounded bg-red-400 flex justify-center hover:bg-red-500 text-white w-22 py-1 shadow-lg shadow-red-500/50"
          >
            Alterar
          </button>
        }
        modal
      ></Popup>
    </>
  );
}

export default ModalPerfil;
