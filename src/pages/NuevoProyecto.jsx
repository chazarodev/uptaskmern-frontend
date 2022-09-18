import Formulario from "../components/Formulario"

const NuevoProyecto = () => {
  return (
    <>
        <h1 className="text-4xl font-black">
            Crear Proyecto
        </h1>
        <div className='mt-10 flex justify-center'>
            <Formulario />
        </div>
    </>
  )
}

export default NuevoProyecto