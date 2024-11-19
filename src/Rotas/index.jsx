import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { LoginUsuario } from '../paginas/LoginUsuario'
import { CadastroCampanhas } from '../paginas/CadastroCampanhas'
import { FormItensFoco } from '../paginas/FormItensFoco'
import { CampanhaSalty } from '../paginas/CampanhaSalty'
import { PositivacaoCruzada } from '../paginas/PositivacaoCruzada'

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
              <Route path='/' element={<LoginUsuario />} />  
              <Route path='/CadastroCampanhas' element={<CadastroCampanhas />} />
              <Route path='/FormItensFoco' element={<FormItensFoco />} />
              <Route path='/CampanhaSalty' element={<CampanhaSalty /> } />
              <Route path='/PositivacaoCruzada' element={<PositivacaoCruzada />} />
            </Routes>
        </Router>
    )
}