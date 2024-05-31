let cardList= document.getElementById("cardList")
let carArray = [
  {
    name: "Toyota Supra",
    Price: "PKR- 1.53 Crore",
    Mileage: "68-KM/L",
    image: "https://imgd.aeplcdn.com/642x361/cw/ec/37988/Toyota-Etios-Cross-Exterior-146348.jpg?wm=1&q=80"
  },
  {
    name: "BMW X7",
    Price: "PKR- 2.9 Crore",
    Mileage: "11-KM/L",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/10571/1689673096346/front-left-side-47.jpg"
  },
  {
    name: "Audi Q8",
    Price: "PKR- 3.3 Crore",
    Mileage: "10-KM/L",
    image: "https://cdn.motor1.com/images/mgl/mrY7q/s1/audi-q8-tfsi-e-quattro-2020.jpg"
  },
  {
    name: "Mercedes-Benz",
    Price: "PKR- 4.0 Crore",
    Mileage: "6-KM/L",
    image: "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/6d51b5e5a23adfbfc8a751521dbdb1c4.png"
  },
  {
    name: "Porsche Cayenne",
    Price: "PKR- 2.75 Crore",
    Mileage: "8-KM/L",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/porsche-cayenne-s-e-hybrid-6.jpg?width=1024&height=682"
  },
  {
    name: "Land Range Rover",
    Price: "PKR- 3.5 Crore",
    Mileage: "9-KM/L",
    image: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107719/range-rover-exterior-left-front-three-quarter-37.jpeg?isig=0&q=80"
  },
  {
    name: "Lexus LX",
    Price: "PKR- 3.2 Crore",
    Mileage: "6.5-KM/L",
    image: "https://i.pinimg.com/originals/a2/59/c6/a259c6bec49f263e9066bcb15b8eab50.png"
  },
  {
    name: "Ferrari Roma",
    Price: "PKR- 5.0 Crore",
    Mileage: "8-KM/L",
    image: "https://oracleoftime.com/wp-content/uploads/2022/08/Ferrari-Roma-Review-%C2%A9-Photo-Max-Earey-5.jpg"
  },
  {
    name: "Lamborghini Urus",
    Price: "PKR- 6.0 Crore",
    Mileage: "7-KM/L",
    image: "https://c0.wallpaperflare.com/preview/796/118/508/lamborghini-urus-lamborghini-urus-sports-utility-vehicle.jpg"
  },
  {
    name: "Tesla Model S",
    Price: "PKR- 2.5 Crore",
    Mileage: "104-KM/L",
    image: "https://images.pexels.com/photos/11139552/pexels-photo-11139552.jpeg?cs=srgb&dl=pexels-adaptphotos-11139552.jpg&fm=jpg"
  }
];


carArray.forEach(function(data , index){
  let ele = `
  <div class="wrapper">
    <div class="banner-image"> <img src="${data.image}" alt=""> </div>
        <h1> ${data.name}</h1>
        <p>${data.Price}</p>
       <p>${data.Mileage}</p>
       <p>FEEDBACK</p>
       <p id="${index}">${data.feed}</p>
       <div class="button-wrapper"> 
          <button class="btn outline" onclick="feedback(this)">FeedBack</button>
          <button class="btn fill" onclick="delet(this)">Delete</button>
      </div>
        </div>
       
  </div>`
  // console.log(element.parentElement.parentElement)
  cardList.innerHTML += ele
})

function renderCarList() {
  cardList.innerHTML = "";
  carArray.forEach(function(data, index) {
    let ele = `
    <div class="wrapper">
      <div class="banner-image"> <img src="${data.image}" alt=""> </div>
          <h1> ${data.name}</h1>
          <p>${data.Price}</p>
         <p>${data.Mileage}</p>
         <p>FEEDBACK</p>
         <p id="${index}">${data.feed}</p>
         <div class="button-wrapper"> 
            <button class="btn outline" onclick="feedback(this)">FeedBack</button>
            <button class="btn fill" onclick="delet(this)">Delete</button>
        </div>
          </div>
         
    </div>`;
    cardList.innerHTML += ele;
  });
}

function feedback(element){
  let prom = prompt("Please Give Me Feedback")
  let index = element.parentElement.previousElementSibling.id
  carArray[index].feed = prom
  
  renderCarList()

    console.log(element.parentElement.previousElementSibling , "carArray>" , carArray)
    // console.log(carArray[index])
}



function delet(element){
  let index = element.parentElement.previousElementSibling.id;
  carArray.splice( index , 1 )

  renderCarList()
  console.log(carArray)
}
delet()