import logo from "/logo.svg"
import background from "/background.png"
import { toast } from 'react-toastify';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycby1QHJYtrfoYpRQ4GZyDAE4P-EjlitQPDh1QD6XXMM8mXhS5rGHXFkMH9NiLEDw5KGlCA/exec"
    fetch(url, ({
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: (`Email=${e.target.email.value}`)
    })).then(res=>res.text()).then(data=>{
      toast.success("Успешно")
      e.target.email.value = ""
      console.log(data)
    }).catch(error=>console.log(error))
  }

  return (
    <div className="main">
      <img src={background} alt="" className="background"/>

      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="title">Join to <span>mentalio</span></div>

      <div className="desc">Получите одним из первых к революционной платформе по обучению и получите 1 месяц бесплатно ко всему функционалу</div>

      <form className="form" onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="yourgmail@gmail.com" required={true}/>
        <button>Присоединиться</button>
      </form>
    </div>
  )
}

export default App
