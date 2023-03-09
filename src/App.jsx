import { useForm } from 'react-hook-form'
import './App.css'
import Header from './componets/header'
import Footer from './componets/footer'
import Icon from './assets/img/icon.png'


function App() {
  const {register, setValue, setFocus} = useForm() 
  function checkCep(e){
    const cep = e.target.value
    console.log(cep)

    if(cep.length !== 8)
    return;

    fetch(`https:viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then ((data) => {
     setValue('CIDADE', data.localidade)
     setValue('ESTADO', data.uf)
     setValue('BAIRRO', data.bairro)
     setValue('LOGRADOURO', data.logradouro)
     if (data.logradouro){
      setFocus('numero')
     }else{
      setFocus('rua')
     }
  })
  }
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
            {...register('CEP')}
            onBlur={checkCep}
            className='input'>
            </input>
          </div>

          <div className='field'>
            <span className='label'>LOGRADOURO</span>
            <input type='text' 
            //placeholder='Digite o LOGRADOURO'
            name = "LOGRADOURO"
            {...register('LOGRADOURO')}
            className='input'>
            </input>
          </div>

          <div className='field'>
            <span className='label'>NUMERO</span>
            <input type='text' 
           //placeholder='Digite o NUMERO'
            name = "NUMERO"
            {...register('NUMERO')}
            className='input'>
            </input>
          </div>

          <div className='field'>
            <span className='label'>BAIRRO</span>
            <input type='text' 
            //placeholder='Digite o BAIRRO'
            name = "BAIRRO"
            {...register('BAIRRO')}
            className='input'>
            </input>
          </div>

          <div className='field'>
            <span className='label'>CIDADE</span>
            <input type='text' 
            //placeholder='Digite o CIDADE'
            name = "CIDADE"
            {...register('CIDADE')}
            className='input'>
            </input>
          </div>

          <div className='field'>
            <span className='label'>ESTADO</span>
            <input type='text' 
            //placeholder='Digite o ESTADO'
            name = "ESTADO"
            {...register('ESTADO')}
            className='input'>
            </input>
          </div>

        </form>
      </main>
<Footer></Footer>
    </div>
  )
}

export default App
