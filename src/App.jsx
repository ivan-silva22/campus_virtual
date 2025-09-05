import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/views/Login';
import Footer from './components/common/Footer';
import PanelDocente from './components/views/panelDocente/PanelDocenteCursos';
import PanelDocenteInicio from './components/views/panelDocente/PanelDocenteInicio';
import PanelDocenteMensaje from './components/views/panelDocente/PanelDocenteMensaje';


function App() {
  

  return (
    <>
     {/* <Login/> */}
     {/* <PanelDocente/> */}
     {/* <PanelDocenteInicio/> */}
     <PanelDocenteMensaje/>
     {/* <Footer/> */}
    </>
  )
}

export default App
