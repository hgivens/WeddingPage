/* text input for adding item to checklist */


/* header, main, and footer components */
Vue.component('custom-header', {
  template: `
    <header>
      <h1>Mr. & Mrs. Shannon 2021!</h1>
    </header>`
})

Vue.component('custom-main', {
  data: function() {
    return {
      
    }
  },
  template: `
  <main>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"  aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      
      <--! the pictures for the carrasol-->

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="Photos/DSC05043.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="Photos/DSC05081.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="Photos/DSC05157.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="Photos/DSC05188.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="Photos/DSC05255.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="Photos/DSC05282 (1).jpg" class="d-block w-100" alt="05282">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <br>
    <div>
      <h2>Save the Date! </h2>
      <p>Text Goes here!</p>
    </div>
  </main>`
})

Vue.component('custom-footer', {
  template: `
  <footer>
    <p>Created by the bride Hannah Givens &copy 2021</p>
  </footer>`
})

let vm = new Vue({
  el: '#app'
})