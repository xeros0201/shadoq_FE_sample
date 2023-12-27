 
 
import './App.css'
import Typo from './components/Typo'
import BtnDanger from './components/button/BtnDanger'

function App() {
 

  return (
    <>
        <Typo size='32' className='font-[700]' > Hello </Typo>
        <BtnDanger onClick={()=> alert("132")} className=' bg-slate-500'> Delete</BtnDanger>
    </>
  )
}

export default App
