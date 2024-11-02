//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu
var rightTopContSelector = document.querySelector('.rightTopCont');

var selectedMovie = moviesList[0];

//---select list
// --title
var createSelectorHeader = document.createElement('p');
createSelectorHeader.textContent = "SELECT YOUR MOVIE";
rightTopContSelector.appendChild(createSelectorHeader);

// --new cated elements
var movieSelectElement = document.createElement('select');
movieSelectElement.className = "movieSelector";

moviesList.forEach((movie, i) => {
    const opp = document.createElement('option');
    opp.value = movie;
    opp.textContent = `${movie.movieName} $${movie.price}`;

    movieSelectElement.appendChild(opp);
});

rightTopContSelector.appendChild(movieSelectElement);


// --selected movie name
// --title
var createSelectorHeaderName = document.createElement('p');
createSelectorHeaderName.textContent = "MOVIE NAME";
rightTopContSelector.appendChild(createSelectorHeaderName);

var movieName = document.createElement('div');
movieName.id = "movieName";
rightTopContSelector.appendChild(movieName);


// --title
var createSelectorHeaderPrice = document.createElement('p');
createSelectorHeaderPrice.textContent = "MOVIE PRICE";
rightTopContSelector.appendChild(createSelectorHeaderPrice);

var moviePrice = document.createElement('div');
moviePrice.id = "moviePrice";
rightTopContSelector.appendChild(moviePrice);

function refreshNameAndPrice() {
    movieName.textContent = `${selectedMovie.movieName}`;
    moviePrice.textContent = `$ ${selectedMovie.price}`;
}
refreshNameAndPrice();

//Add eventLister to each unoccupied seat
movieSelectElement.addEventListener('change', function () {
    const selectedItem = moviesList[this.selectedIndex];

    selectedMovie = selectedItem;
    refreshNameAndPrice();
});

// --selected sites
let selectedSites = [];
let occupiedSites = [];
var selectedSheetsElement = document.querySelector('#selectedSeatsHolder');

// selectedSheetsElement.
const selectedSeatsCount = document.getElementById("numberOfSeat");
const selectedTotalPrice = document.getElementById("totalPrice");
function refreshSeatsCountAndPrice() {
    selectedSeatsCount.textContent = selectedSites.length;
    selectedTotalPrice.textContent = `$ ${selectedSites.reduce((acc, price) => acc + selectedMovie.price, 0)}`;
}
const noSelectedSeat = document.querySelector(".noSelected");

const selectedSeatsHolder = document.querySelector("#selectedSeatsHolder");

function newSeatSelected() {
    selectedSeatsHolder.innerHTML = "";
    if (selectedSites.length == 0) {
        const emptySelectedSeats = document.createElement('span');
        emptySelectedSeats.className = "noSelected";
        emptySelectedSeats.textContent = "No Seat Selected";
        selectedSeatsHolder.appendChild(emptySelectedSeats);
    } else {
        selectedSites.forEach((seatNumber) => {
            const newSelected = document.createElement('div');
            newSelected.className = 'selectedSeatNumber';
            newSelected.textContent = seatNumber;

            return selectedSeatsHolder.appendChild(newSelected);
        });
    }
    refreshSeatsCountAndPrice();
}
newSeatSelected();

const seatElement = document.querySelectorAll('.seat');

seatElement.forEach((e, sn) => {
    e.addEventListener('click', function () {
        if (e.className.includes('occupied')) {
            return;
        }

        if (e.className.includes('selected')) {
            e.className = "seat";
            const index = selectedSites.indexOf(sn);
            if (index > -1) {
                selectedSites.splice(index, 1);
            }
            newSeatSelected();
            return;
        }
        selectedSites.push(sn);
        e.className = "seat selected";
        newSeatSelected();
    });
});

function resetUiWithOccupied() {
    seatElement.forEach((e, sn) => {
        if ([0, 1, 2].includes(sn)) {
            return;
        }
        if (occupiedSites.includes(sn)) {
            e.className = "seat occupied";
        } else {
            e.className = "seat";
        }
    });
}

//Add eventLsiter to continue Button
const selectedEventProceedBtnBooking = document.getElementById("proceedBtn");
selectedEventProceedBtnBooking.addEventListener('click', function () {
    console.log("proceed button clicked!");
    const confirm = window.confirm("Hello");
    if (confirm) {
        occupiedSites.push(...selectedSites);
        selectedSites = [];
        newSeatSelected();
        resetUiWithOccupied();
    }
});
//Add eventListerner to Cancel Button
const selectedEventCancelBtnBooking = document.getElementById("cancelBtn");
selectedEventCancelBtnBooking.addEventListener('click', function () {
    console.log("cancel button clicked!");
    selectedSites = [];
    newSeatSelected();
    resetUiWithOccupied();
});