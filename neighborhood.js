restaurantList = [
    "http://127.0.0.1:5500/thaibodia.jpeg",
    "http://127.0.0.1:5500/ihop.jpeg",
    "http://127.0.0.1:5500/phoHaNoi.webp",
    "http://127.0.0.1:5500/mathilde.jpeg"

];

restaurantInfoList = [
    "Thaibodia, Address: 338 S Main St, Milpitas, CA 95035",
    "iHop, Address: 200 Beach St, San Francisco, CA 94133",
    "Pho Ha Noi, Address: 969 Story Rd, Unit 6048San Jose, CA 95122",
    "Mathilde Bistro, Address: 315 5th St, San Francisco, CA 94107"
]

const displayRestaurant = document.querySelector('#displayRestaurant');
const localRestaurantsBtn = document.querySelector('#localRestaurants');
const restaurantInfo = document.querySelector('#restaurantInfo');
localRestaurantsBtn.addEventListener('click', () => {
    displayRestaurant.textContent = "";
    restaurantInfo.innerHTML = "";
    const randomRestaturant = document.createElement('img');
    const randomIndex = Math.floor(Math.random()*restaurantList.length);
    console.log(randomIndex);
    console.log(restaurantList[randomIndex]);
    randomRestaturant.src = restaurantList[randomIndex];
    // randomRestaturant.src = "http://127.0.0.1:5500/thaibodia.jpeg";
    displayRestaurant.appendChild(randomRestaturant);
    restaurantInfo.innerHTML = restaurantInfoList[randomIndex];
})



