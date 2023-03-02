import './App.css'
import Header from './componets/header'
import Footer from './componets/footer'
import Icon from './assets/img/icon.png'


function App() {

  return (
    <div className="container">
      <Header/>
      <main className='main'>
        <form className='form'></form>
        <div className='icon'>
          <img src={Icon} alt="Icon" width="20%" />
        </div>
        <div className='field'>
          <span>CEP</span>
          <input type="text" name='cep' className='input'/>
        </div>

      </main>

      <Footer>

      </Footer>
    </div>
  )
}

export default App
