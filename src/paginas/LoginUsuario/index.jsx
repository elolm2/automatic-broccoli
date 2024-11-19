import { Link } from "react-router-dom"

export const LoginUsuario = () => {
    return(
        <div className='container'>
        <form className='form-usuario'>

          <div>
            <label>Nome</label>
            <input className='input-campo-texto' placeholder="Nome" type='nome'/>
          </div>

          <div>
          <label>Email</label>
            <input className='input-campo-texto' placeholder="Email" type='email'/>
          </div>

          <div >
          <label>CPF</label>
            <input className='input-campo-texto' placeholder="CPF" type='cpf'/>
          </div>
          
        <div>
          <label>Filiais</label>
          <select className='campo-selecao' type='campoSelecao'>
            <option>Barbalha</option>
            <option>Dansul</option>
            <option>Forquilha</option>
            <option>GD</option>
            <option>GDBAT</option>
            <option>Itaitinga</option>
          </select>
          </div>

        <div className='check-box'>
          <label>
            <input type='checkbox'/>
            <span>Pix</span>
          </label>  
        </div>

        <div>
          <Link to='/CadastroCampanhas'>
            <button className='btn-criar-usuario'>Criar Usuario</button>
          </Link>
        </div>

        </form>
      </div>
    )
}