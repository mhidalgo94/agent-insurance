import 'bulma/css/bulma.min.css';
import './base-var.css';
import './app.css';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
