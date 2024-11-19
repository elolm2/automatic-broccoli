import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CadastroCampanhas = () => {
  // estado para amazenar a seleção do usuario
  const[CampanhaSelecionada, setCampanhaSelecionada] = useState("");
  const navigate = useNavigate();

// função para atualizar o estado toda vez que uma campanha for selecionada
  const handleChange = (e) => {
    setCampanhaSelecionada(e.target.value);
  };

  // função chamada quando o formulario for enviado
   //usa o switch para direcionar para a rota certa quando campanha for escolhida
   // prevent.Default = impede o carregamento da pagina
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (CampanhaSelecionada) {
      case "campanha1":
        navigate("/FormItensFoco");
        break;
        case "campanha2":
        navigate("/CampanhaSalty");
        break;
        case "campanha3":
        navigate("/PositivacaoCruzada");
        break;
      default:
        break;
    }
  };

    return(
        <div className='container'>
        <form className='form-usuario' onSubmit={handleSubmit}>

        <div>
          <label>Campanhas</label>
          <select className='campo-selecao' value={CampanhaSelecionada} onChange={handleChange}>
            <option>{""}</option>
            <option value="campanha1">Itens Foco</option>
            <option value="campanha2">Campanha Salty</option>
            <option value="campanha3">Positivação Cruzada</option>
          </select>
          </div>

          <div>
            <button type='submit' className='btn-criar-usuario'>Prosseguir</button>
        </div>

        </form>
        </div>
    )
}