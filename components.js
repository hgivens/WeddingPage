/* text input for adding item to checklist */


/* header, main, and footer components */
Vue.component('custom-header', {
  template: `
    <header>
      <div id="header">
        <h1>Mr. & Mrs. Shannon 2021!</h1>
      </div>  
    </header>`
})

Vue.component('custom-carousel', {
  data: function() {
    return {
      
    }
  },
  template: `
    <div id="carousel">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"  aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        
        <!-- the pictures for the carrasol-->

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="Photos/DSC05043.jpg" class="d-block w-100" alt="engagement photos">
          </div>
          <div class="carousel-item">
            <img src="Photos/DSC05081.jpg" class="d-block w-100" alt="engagement photos">
          </div>
          <div class="carousel-item">
            <img src="Photos/DSC05157.jpg" class="d-block w-100" alt="engagement photos">
          </div>
          <div class="carousel-item">
            <img src="Photos/DSC05188.jpg" class="d-block w-100" alt="engagement photos">
          </div>
          <div class="carousel-item">
            <img src="Photos/DSC05255.jpg" class="d-block w-100" alt="engagement photos">
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
    </div>`
})
Vue.component('custom-info', {
  template: `
  <main>
    <div id="detail">
      <div id="date"> 
        <h2>Save the Date! </h2>
        <h4>Wedding of Tylor Shannon & Hannah Givens</h4>
        <p>November 14, 2021</p>
      </div>
     
      <div id="schecule">
        <h2> Schecule </h2>
        <p>Arrival 3:00pm, Ceremony 3:30pm, Dinner 5:00pm, End 10:30pm </p>
        <p class="decoration">— —    ♥♥♥    — — </p>
      </div>
      

      
      <div id="dinner">
        <h2> Dinner Details </h2>
        <p>There will be 2 dinner options:</p>
        <p>Dinner One:Meatlofe </p>
        <p> Dinner Two: Roast pork with gravy</p>
        <p> side of potatos, green beans, corn, and a salad.</p>

        <p class="decoration">— —    ♥♥♥    — — </p>
      </div>
      
      <div id="location">
        <h2> Location </h2>
        <p>Butler Acres, 22552 Hwy 24 Dover, Mo 64022 </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12368.295111753217!2d-93.6535954!3d39.1957723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6aaa25fdde7dc700!2sButler%20Acres!5e0!3m2!1sen!2sus!4v1613977400365!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

        <p class="decoration">— —     ♥♥♥    — — </p>
      </div>
      
      <div id="rsvp">
        <h2> Contact for R.S.V.P. </h2> 
        <p>please include how many is attending and how many of each mael option and of any food algeries.</p>
        <p>Phone Number: (417)-812-9989 or (417)812-9908</p>
        <p>Email: givenshananh10@gmail.com </p>

        <p class="decoration">— —    ♥♥♥    — — </p>
      </div>
      
      <div id="registry">
        <h2> Registry </h2>
        <p>Wedding registry at amazon.com/wedding. Go to find a registry, enter Hannah Givens and compare wedding information. </p>
        <a class="btn btn-primary" href="https://www.amazon.com/wedding/registry/35DVPA6UP9J80?ref=wr_search_page_result_5" role="button">Wedding registry</a>

        <p class="decoration">— —    ♥♥♥    — — </p>
        <p>BYOB but some drinks will be provided.</p>
      </div>
      

      
    </div>
    <div id="about">
      <h2>Our Story!</h2>
      <p>Its a simple one, it gose how you would expect it to. It was 2017 I started at pizza hut and started to make new friends, Tylor being one of them. One thing lead to another and we find ourselfs flirting, then dating now where here! In 2019 we moved to Springfield MO so I could persue college. then in Oct. of 2020 during the pandemic we deceded to move forward! Now will will be combinding 2 families into one this November!  </p>
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