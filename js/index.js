
document.addEventListener("DOMContentLoaded" , function() {

  document.querySelector('#viewTrainInfoBtn').addEventListener('click', () => {
    const detailsSection = document.querySelector('#trainTrackerDetails');
  
    if (detailsSection) {
        const sectionOffsetTop = detailsSection.offsetTop;
        window.scrollTo({
            top: sectionOffsetTop,
            behavior: 'smooth'
        });
    }
  });
  
  const BASE_URL = 'https://run.mocky.io/v3/99e3e479-e1af-427f-8855-c5bda3e618d8'

  fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
        'content-Type' : 'application/json',
    }
})
.then((res) => res.json())
.then(data => {
    console.log(data)
    document.querySelector("#vehicle-name").innerText = `The train you are traveling with is ${data.vehicle} `
})


fetch(`${BASE_URL}`)
  .then((res) => res.json())
  .then(data => {
    console.log(data.stops.stop)
    data.stops.stop.forEach((stop, index) => {
      const stationSelector = document.querySelector(`#stationName${index}`);
      if (stationSelector) {
        stationSelector.innerText = `Station: ${stop.station}`;
      }

      const detailsSelector = document.querySelector(`#stationDetails${index}`);
      if (detailsSelector) {
        detailsSelector.querySelector('.platform').innerText = `Platform: ${stop.platform}`;
        detailsSelector.querySelector('.delay').innerText = `Number of delays: ${stop.delay}`;
        detailsSelector.querySelector('.departure-delay').innerText = `Number of delayed departures: ${stop.departureDelay}`;
        detailsSelector.querySelector('.departure-canceled').innerText = `Number of canceled departures: ${stop.departureCanceled}`;
        detailsSelector.querySelector('.arrival-delay').innerText = `Number of delayed arrivals: ${stop.arrivalDelay}`;
        detailsSelector.querySelector('.arrival-canceled').innerText = `Number of canceled arrivals: ${stop.arrivalCanceled}`;
        detailsSelector.querySelector('.isExtrastop').innerText = `Number of extra stops: ${stop.isExtraStop}`;
      }
    })
  })

  
    
    const searchInput = document.getElementById("search");
    const stationCards = document.querySelectorAll(".card");

    searchInput.addEventListener("keyup", function() {
        const searchText = searchInput.value.toLowerCase();

        stationCards.forEach(card => {
            const stationName = card.querySelector("img").alt.toLowerCase();

            if (stationName.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });


  })

