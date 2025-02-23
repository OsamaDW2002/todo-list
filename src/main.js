import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <main >
    <div id="calender-container">
        <div class="dayName"><p>Saturday</p></div>
        <div class="dayName"><p>Sunday</p></div>
        <div class="dayName"><p>Monday</p></div>
        <div class="dayName"><p>Tuesday</p></div>
        <div class="dayName"><p>Wednesday</p></div>
        <div class="dayName"><p>Thursday</p></div>
        <div class="dayName"><p>Friday</p></div>
        
        <script ></script> 
    </div>
  </main>
`

setupCounter(document.querySelector('#counter'))
