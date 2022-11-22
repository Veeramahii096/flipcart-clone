import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='Log1'>
      <div className='Log1_inner'>
        <div className='L1_Inner'>
        <div className='L1'>
        
        <div><span className='L1_t2' >Login</span>
        <p className='L1_t1'>Get access to your Orders, Wishlist and Recommendations</p></div>
        <img  className='ack' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png
'></img>
      </div>
        </div>
      
      <div className='L2'>
      <div>
        <form>
          <div className='inner_L2'>
         
            
            <input className='inputs' type='text' placeholder='Enter Email/Phone Number'  ></input></div>
            <div>
            <input className='inputs1' type='pass' placeholder='Password'/>
          </div>

          
          <div className='inner_L3'>By continuing, you agree to Flipkart's<a class="_2ARnXM" target="_blank" href="/pages/terms">Terms of Use</a> and <a class="_2ARnXM" target="_blank" href="/pages/privacypolicy">Privacy Policy</a>.</div>
        <div className='OTP'> <div ><button className='otp1'>Login</button></div>
            <div className='OP'><span>OR</span></div>

            <div ><button className='otp'>Request OTP</button></div>

            <div className='inner_L4'><p>New To Flipkart?</p><p>
                Create An Account</p></div></div>
                  
        </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
