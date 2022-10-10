import { useState } from "react"
import useProyectos from "../hooks/useProyectos"
import Alerta from "./Alerta"

const FormularioColaborador = () => {

    const [email, setEmail] = useState('')

    const {alerta, mostrarAlerta, submitColaborador} = useProyectos()

    const handleSubmit = e => {
        e.preventDefault()

        if (email === '') {
            mostrarAlerta({
                msg: 'Debes escribir un email',
                error: true
            })
        }

        submitColaborador(email)
    }

    const {msg} = alerta

  return (
    <form
        className="bg-white py-10 px-5 w-full md:w-1/2 rounded-lg shadow"
        onSubmit={handleSubmit}
    >
        {msg && <Alerta alerta={alerta} />}
        <div className="mb-5">
            <label 
                htmlFor="email"
                className='text-gray-700 font-bold text-sm uppercase'
            >
                Email Colaborador
            </label>
            <input 
                type="email"
                id='email'
                placeholder='Email del usuario'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={email}
                onChange={e => setEmail(e.target.value)} 
            />
        </div>
        <input 
            type="submit"
            className='bg-sky-600 hover:bg-sky-700 text-white uppercase p-3 w-full font-bold cursor-pointer transition-colors rounded text-sm' 
            value='Buscar colaborador' 
        />
    </form>
  )
}

export default FormularioColaborador