import User from '/user.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='new-card'>
        <div className="image">
          <img src={User} style={{scale: '200%'}} alt="" />
        </div>
        <div className="forms">
          <label htmlFor="">Email address</label>
          <input type="email" name='email' />
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <div className="options">
          <button className='b1'>Send</button>
          <button className='b2'>Register</button>
        </div>
      </div>
    </>
  )
}

export default App
