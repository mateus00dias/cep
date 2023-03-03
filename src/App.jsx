import './App.css'
import Header from './componets/header'
import Footer from './componets/footer'
import Icon from './assets/img/icon.png'


function App() {

  return (
    <div className="container">
      <Header/>
      <main className="main">
        <form className='form'>
          <div className='icon'>
            <img src={Icon} alt='icon.png' width="20%" ></img>
          </div>
          <div className='field'>
            <span className='label'>CEP</span>
            <input type='text' 
            placeholder='Digite o CEP'
            name = "CEP"
            className='input'></input>
          </div>
        </form>
      </main>
<Footer></Footer>
    </div>
  )
}

export default App
