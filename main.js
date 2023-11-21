import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="h-screen">

    <div class="h-[8vh] flex justify-between p-4 bg-slate-400">
      <div>
          <a>Marcos Arellano</a>
      </div>
      <div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> 
        </div>
        <div class="hidden">
          <ul class="">
            <li>Inicio</li>
            <li>Sobre Mi</li>
            <li>Skill</li>
            <li>Curriculum</li>
            <li>Portafolio</li>
          <li>Contacto</li>
          </ul>
        </div>
        
      </div>
    </div>

    <div class="h-[92vh] bg-[url('/public/assets/images/bgfull.jpg')] bg-cover py-8">

      <div class="h-[50vh] w-[80vw] bg-slate-600 m-auto rounded-md">
        
      </div>


      <div>
      
      </div>
      <div>
      
      </div>
      <div>
      
      </div>
    
    
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
