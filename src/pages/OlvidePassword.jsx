import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from "axios"

const OlvidePassword = () => {

  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    if (email === '' || email.length < 6) {
      setAlerta({
        msg: "Debes colocar un email",
        error: true,
      })
      return
    }

    setAlerta({})

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password`, {email})

      setAlerta({
        msg: data.msg,
        error: false,
      })


    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      })
    }

  }

  const { msg } = alerta

  return (
    <>
    <h1 className="text-sky-600 font-black text-4xl capitalize">
    Recupera tu acceso y continua con tus{' '}
    <span className="text-slate-700">
        proyectos
    </span>
    </h1>
    {msg && <Alerta alerta={alerta} />}
    <form 
      className="my-10 bg-white shadow rounded-lg p-10"
      onSubmit={handleSubmit}  
    >
      <div className="my-5">
          <label 
              htmlFor="email" 
              className="uppercase text-gray-600 block text-xl font-bold"
          >
              Email
          </label>
          <input 
              id="email"
              type={'email'}
              placeholder={'Email de Registro'}
              className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              value={email}
              onChange={ e => setEmail(e.target.value)}
          />
      </div>
      <input 
          type="submit" 
          value={'Envíar instrucciones'}
          className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
      />
    </form>
    <nav className="lg:flex lg:justify-between">
      <Link to={'/'} className="block text-center my-5 text-slate-500 uppercase text-sm">
        ¿Ya tienes una cuenta? Inicia Sesión
      </Link>
      <Link to={'/registrar'} className="block text-center my-5 text-slate-500 uppercase text-sm">
        ¿No tienes una cuenta? Regístrate
      </Link>
    </nav>
    </>
  )
}

export default OlvidePassword