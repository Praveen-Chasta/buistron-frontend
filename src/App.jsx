import { Toaster } from 'react-hot-toast';
import Articals from './components/Articals/Articals'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {


  return (
    <>
      <Toaster />
      <div className='app'>
          <Articals />
      </div>
    </>
  )
}

export default App
