import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import fotopersonal from './public/assets/images/fotopersonal.jpg'

document.querySelector('#app').innerHTML = `
  <div class="h-screen relative">

    <div class="fixed top-0 w-full h-[8vh] flex justify-between p-3 bg-slate-900">

      <div>
        <a href="" class="text-white text-lg font-semibold">Marcos Arellano</a>
      </div>

      <div>
        <div class="bg-white rounded">
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

    <div class="h-[100vh] pt-28 bg-[url('/public/assets/images/bgfull.jpg')] bg-cover py-12">

      <div class="h-[70vh] w-[80vw] bg-slate-900 m-auto rounded-md justify-center flex-col">

        <div class="h-[60vh] py-2 w-full">
          <div class="py-3 px-3">
            <img src="${fotopersonal}" alt="" class="h-[40vh] aspect-square m-auto rounded-full border-4">
          </div>
          
          <div class="text-center py-2">
            <h1 class="text-4xl font-bold text-white py-2">Marcos Arellano</h1>
            <p class="text-white font-semibold">Bachiller en Ing. Mecatronica</p>
          </div>

        </div>
        
        <div class="h-[10vh] flex justify-center gap-3 py-3">
          <div class="px-2 py-1">
            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            
          </div>
          
          <div class="px-2 py-1">
            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
            
          </div>
            

          <div class="px-2 py-1">
            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"/></svg>
          </div>

          <div class="px-2 py-1">
            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
      
          </div>
        
        </div>
        
      </div>
    </div>
    

    <div class="h-[92vh] bg-slate-900 px-4">
        
      <div class="text-center py-2 h-[27vh]">
        <h1 class="text-white text-4xl font-bold">Sobre mi</h1>
        <p class="text-white py-4 text-justify">
          Hola, soy Marcos Arellano. Soy bachiller en ingenieria mecatronica, he llevado algunos cursos full stack. Me gustaria crecer profesionalmente como desarrollador web
        </p>
      </div>

      <div class="h-[65vh]">
        <h2 class="text-white text-xl font-semibold">
          Datos personales
        </h2>
        
        <div class="grid grid-cols-2 gap-2 py-2 text-white">
          <p>Cumpleaños:</p>
          <p>08-09-1997</p>
          <p>Telefono:</p>
          <p>+51 939 827 124</p>
          <p>Email:</p>
          <p class="text-ellipsis overflow-hidden">arellano.vilchez.marcos.alejandro@gmail.com</p>
          <p>Cargo:</p>
          <p>Freelance</p>
          <p>Nacionalidad:</p>
          <p>Peruano</p>
        </div>

        <div>

          <h2 class="text-white text-xl font-semibold">
            Mis intereses
          </h2>

          <div class="grid grid-cols-3 gap-2 py-2 text-white">

            <div class="h-[10vh] bg-black w-[20vw] m-auto border rounded-md py-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-white m-auto" height="2em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z"/></svg>
              <p class="text-center py-1 font-semibold text-xs">LEER</p>
            </div>

            <div class="h-[10vh] bg-black w-[20vw] m-auto border rounded-md py-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-white m-auto" height="2em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"/></svg>
              <p class="text-center py-1 font-semibold text-xs">DEPORTE</p>
            </div>

            <div class="h-[10vh] bg-black w-[20vw] m-auto border rounded-md py-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-white m-auto" height="2em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
              <p class="text-center py-1 font-semibold text-xs">MÚSICA</p>
            </div>

            <div class="h-[10vh] bg-black w-[20vw] m-auto border rounded-md py-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-white m-auto" height="2em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/></svg>
              <p class="text-center py-1 font-semibold text-xs">VIAJAR</p>
            </div>

            

            <div class="h-[10vh] bg-black w-[20vw] m-auto border rounded-md py-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-white m-auto" height="2em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>
              <p class="text-center py-1 font-semibold text-xs">ANIME</p>
            </div>
            
          </div>
  
        </div>
        
      </div>    
      
    </div>

    <div class="h-[92vh] bg-slate-900 px-4">

      <div class="text-center py-2 h-[10vh]">
        <h1 class="text-white text-4xl font-bold">Curriculum</h1>
      </div>

      <div class="text-center h-[80vh]">

        <div class="py-2 h-[30vh] w-[80vw] border-r-4 border-r-emerald-300 text-white text-justify border">
          <div class="pr-2 relative">
            <h2 class="text-lg font-semibold">Bachiller</h2>
            <h3 class="text-emerald-300">Universidad Nacional de Piura</h3>
            <h4 class="text-sm text-emerald-300">2016-2022</h4>
            <p>
              Bachiller en ingeniero mecatronica con diplomados en desarrollo web full stack, que me proporcionan el conocimiento necesario para poder desarrollarme profesionalmente en el are de desarrollo web            
            </p>

            <hr class="bg-emerald-300 absolute -right-9 px-4 top-1/2 h-1">
            <hr class="bg-emerald-300 absolute -right-10 px-1 top-[49%] h-2 rounded-2xl">
          </div>
          
          
        </div>

        <div class="py-2 h-[20vh] w-[80vw] border-r-4 border-r-emerald-300 text-white text-justify border">
          <div class="pr-2 relative">
            <h2 class="text-lg font-semibold">Desarrollo de aplicaciones con PHP 7.0, Laravel y PostgreSQL</h2>
            <h3 class="text-emerald-300">CETI</h3>
            <h4 class="text-sm text-emerald-300">2022-2023</h4>

            <hr class="bg-emerald-300 absolute -right-9 px-4 top-1/2 h-1">
            <hr class="bg-emerald-300 absolute -right-10 px-1 top-[48%] h-2 rounded-2xl">
          </div>
        
      </div>

    </div>



  </div>
`

setupCounter(document.querySelector('#counter'))
