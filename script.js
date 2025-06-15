const products = [
 {
    id: 1,
    brand: "MAXSHOT",
    name: "V1-Sportscooter-7.8Ah",
    image: "https://m.media-amazon.com/images/I/61k4-BeZhmL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "21",
    charging: "4",
    maxpower: 350,
    topspeed: 19,
    weightlimit: 264,
    rating: "⭐4.4 (1088+)",
    priceRange: 199,
    orderUrl: "https://www.amazon.com/MAXSHOT-Electric-Scooter-Suspension-Escooter/dp/B0D8JG4K75"
  },
 {
    id: 2,
    brand: "VOLPAM",
    name: "Electric Scooter, 350W/500W, 8.5'/10' Tires",
    image: "https://m.media-amazon.com/images/I/61rNHvDqiiL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "21",
    charging: "5",
    maxpower: 350,
    topspeed: 16,
    weightlimit: 264,
    rating: "⭐4.3 (849+)",
    priceRange: 179,
    orderUrl: "https://www.amazon.com/VOLPAM-Electric-Scooter-Scooter-8-5-12Miles-350W/dp/B0DQQ2B6DZ"
  },
   {
    id: 3,
    brand: "TS TST GRP LLC",
    name: "Electric Scooter for Adult, Up to 19 MPH and 20 Miles",
    image: "https://m.media-amazon.com/images/I/71NZb5YW4KL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "15",
    charging: "6",
    maxpower: 350,
    topspeed: 19,
    weightlimit: 31,
    rating: "⭐4.6 (130+)",
    priceRange: 169,
    orderUrl: "https://www.amazon.com/TST-Electric-Pneumatic-Portable-Commuting/dp/B0DY7ZFN7G"
  },
     {
    id: 4,
    brand: "iScooter",
    name: "Electric Scooter for Adults & Teens",
    image: "https://m.media-amazon.com/images/I/71b2ia2P2LL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "18",
    charging: "6",
    maxpower: 350,
    topspeed: 19,
    weightlimit: 220,
    rating: "⭐4.1 (153+)",
    priceRange: 199,
    orderUrl: "https://www.amazon.com/iScooter-Electric-Scooter-18Miles-Foldable/dp/B0DMNC1QJ5"
  },
     {
    id: 5,
    brand: "WERHY",
    name: "Electric Scooter, 350W/500W Motor, Top Speed 16/19/22 mph",
    image: "https://m.media-amazon.com/images/I/71jigGfSPbL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "12",
    charging: "4",
    maxpower: 350,
    topspeed: 16,
    weightlimit: 256,
    rating: "⭐4.4 (193+)",
    priceRange: 279,
    orderUrl: "https://www.amazon.com/Electric-Scooter-10Tires-Foldable-H5-187Wh-350W/dp/B0F24FNRG4"
  },

  {
    id: 6,
    brand: "5TH WHEEL",
    name: "V30PRO Electric Scooter, 10 Solid Tires, 350W Motor & 18 MPH",
    image: "https://m.media-amazon.com/images/I/716+aYxcwUL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "19.9",
    charging: "5.5",
    maxpower: 350,
    topspeed: 19.9,
    weightlimit: 264,
    rating: "⭐4.5 (672+)",
    priceRange: 259,
    orderUrl: "https://www.amazon.com/5TH-WHEEL-Electric-Scooter-Signals/dp/B0C36HLS1B"
  },

    {
    id: 7,
    brand: "Roinside ",
    name: "Electric Scooter - 350W Motor, 8.5 Solid Tires",
    image: "https://m.media-amazon.com/images/I/61AqqFEpj0L._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "21",
    charging: "5",
    maxpower: 350,
    topspeed: 19,
    weightlimit: 265,
    rating: "⭐4.4 (1058+)",
    priceRange: 199,
    orderUrl: "https://www.amazon.com/Roinside-Electric-Scooter-Adults-Scooter/dp/B0D5B9LG2T"
  },
     {
    id: 8,
    brand: "WERHY",
    name: "Scooter, 20/22/27 Miles Long Range, 8.5'/10'/14' Tire",
    image: "https://m.media-amazon.com/images/I/61LJbtlOGDL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "22",
    charging: "5",
    maxpower: 500,
    topspeed: 22,
    weightlimit: 265,
    rating: "⭐4.6 (199+)",
    priceRange: 279,
    orderUrl: "https://www.amazon.com/Electric-Scooter-Foldable-Commuting-H7-20miles-19mph/dp/B0DQ418HST"
  },
  {
    id: 9,
    brand: "Qlaway",
    name: "E Scooter for Adults 19-22 MPH 350/500W",
    image: "https://m.media-amazon.com/images/I/61Gxk24l2DL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "22",
    charging: "5",
    maxpower: 350,
    topspeed: 19,
    weightlimit: 264,
    rating: "⭐4.2 (337+)",
    priceRange: 189,
    orderUrl: "https://www.amazon.com/Qlaway-Scooter-350W-Motorized-Foldable/dp/B0DSDSXN9Y"
  },
  {
    id: 10,
    brand: "NAVIC",
    name: "Electric Scooter Adults,Max 19/22/27/49 Miles Ranges",
    image: "https://m.media-amazon.com/images/I/61Ir9NSDKgL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "6.19",
    charging: "4",
    maxpower: 350,
    topspeed: 19,
    weightlimit: 264,
    rating: "⭐4.3 (278+)",
    priceRange: 249,
    orderUrl: "https://www.amazon.com/NAVIC-Electric-Scooter-Suspension-Escooter/dp/B0DR7TQJZ1"
  },
   {
    id: 11,
    brand: "iScooter",
    name: "Electric Scooter for Adults, 18/12 Miles Long",
    image: "https://m.media-amazon.com/images/I/71AXs9YbHzL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "12",
    charging: "6",
    maxpower: 350,
    topspeed: 18,
    weightlimit: 220,
    rating: "⭐4.4 (709+)",
    priceRange: 169,
    orderUrl: "https://www.amazon.com/iScooter-Electric-Scooter-Commuting-Control/dp/B0D1QNPB8Y"
  },
      {
    id: 12,
    brand: "INVANTI",
    name: "E30 Electric Scooter with Smart APP, 19.9 Miles Range",
    image: "https://m.media-amazon.com/images/I/61Tzi0D-8KL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "19.9",
    charging: "5",
    maxpower: 700,
    topspeed: 18,
    weightlimit: 265,
    rating: "⭐4.4 (170+)",
    priceRange: 209,
    orderUrl: "https://www.amazon.com/INVANTI-Electric-Scooter-Suspension-Foldable/dp/B0DGDGLP94"
  },
   {
    id: 13,
    brand: "iScooter",
    name: "Electric Scooter, 10' Tires, 800W Motor E-Scooter",
    image: "https://m.media-amazon.com/images/I/61Z2CHIgAeL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "25",
    charging: "7",
    maxpower: 800,
    topspeed: 25,
    weightlimit: 264,
    rating: "⭐4.3 (553+)",
    priceRange: 519,
    orderUrl: "https://www.amazon.com/iScooter-Electric-Scooter-Adults-Motor/dp/B0BLWBXTBX?th=1"
  },
     {
    id: 14,
    brand: "NIU",
    name: "Electric Scooter for Adults - NIU E-Scooter for Commute 600W-900W Max Power",
    image: "https://m.media-amazon.com/images/I/51LpRlJaK5L._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "18",
    charging: "5",
    maxpower: 600,
    topspeed: 17.4,
    weightlimit: 265,
    rating: "⭐4.0 (1441+)",
    priceRange: 379,
    orderUrl: "https://www.amazon.com/NIU-Electric-Scooter-Adults-Suspension/dp/B0DBTM46NK?th=1"
  },
  {
    id: 15,
    brand: "I INMOTION",
    name: "Scooter for Big and Tall People - Heavy Duty Electric Scooter for Adults 300lbs",
    image: "https://m.media-amazon.com/images/I/5135BQisutL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "59",
    charging: "3.5",
    maxpower: 1000,
    topspeed: 25,
    weightlimit: 308,
    rating: "⭐3.7 (156+)",
    priceRange: 799,
    orderUrl: "https://www.amazon.com/dp/B0CW2XDHQJ?th=1"
  },
    {
    id: 16,
    brand: "Hiboy",
    name: "S2 Series Electric Scooter, 8.5'-12' Tires, Up to 17-38 Miles",
    image: "https://m.media-amazon.com/images/I/61e-7RnMi0L._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "17",
    charging: "5",
    maxpower: 350,
    topspeed: 19,
    weightlimit: 300,
    rating: "⭐4.3 (3862+)",
    priceRange: 329,
    orderUrl: "https://www.amazon.com/Hiboy-Electric-Scooter-Long-Range-Commuting/dp/B086JHCJTX"
  },
    {
    id: 17,
    brand: "Kugookirin",
    name: "G2Max/G2Master Electric Scooter with Seat, Powerful 1000W",
    image: "https://m.media-amazon.com/images/I/61gWfkRIWUL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "40",
    charging: "5",
    maxpower: 1000,
    topspeed: 40,
    weightlimit: 264,
    rating: "⭐4.3 (251+)",
    priceRange: 999,
    orderUrl: "https://www.amazon.com/Electric-Quadruple-Absorption-350W-Commuting/dp/B0CYX4RQS4"
  },
      {
    id: 18,
    brand: "NIU",
    name: "Electric Scooter for Adults - NIU E-Scooter for Commute",
    image: "https://m.media-amazon.com/images/I/51a9lgNL2-L._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "30",
    charging: "5",
    maxpower: 900,
    topspeed: 20,
    weightlimit: 265,
    rating: "⭐4.0 (1441+)",
    priceRange: 689,
    orderUrl: "https://www.amazon.com/NIU-300P-All-Terrain-Suspension-Pneumatic/dp/B0D86LFCSG"
  },
     {
    id: 19,
    brand: "Segway",
    name: "Ninebot E2 Plus II/ E2 Pro Electric Scooter, 15.5 mph Top Speed",
    image: "https://m.media-amazon.com/images/I/51CF+E51jqL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "16",
    charging: "7.5",
    maxpower: 500,
    topspeed: 15,
    weightlimit: 198,
    rating: "⭐4.3 (2123+)",
    priceRange: 369,
    orderUrl: "https://www.amazon.com/Segway-Electric-Suspension-Shock-Absorbing-Certified/dp/B0F62SVY89"
  },
    {
    id: 20,
    brand: "MAXSHOT",
    name: "Electric Scooter for Adults, 8.5'/10' Tires, 19/22Mph",
    image: "https://m.media-amazon.com/images/I/61b3nLYJ7ML._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "21",
    charging: "4",
    maxpower: 350,
    topspeed: 19,
    weightlimit: 264,
    rating: "⭐4.4 (1116+)",
    priceRange: 239,
    orderUrl: "https://www.amazon.com/Electric-Scooter-Folding-Scooter-Suspension/dp/B0DR2Z1F19"
  },
  {
    id: 21,
    brand: "I INMOTION",
    name: "Scooter for Hilly Area Riders, Dual Motor Inmotion Climber Electric Scooter for Adults",
    image: "https://m.media-amazon.com/images/I/81RXns37iJL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "35",
    charging: "9",
    maxpower: 750,
    topspeed: 23.7,
    weightlimit: 287,
    rating: "⭐4.0 (170+)",
    priceRange: 599,
    orderUrl: "https://www.amazon.com/Scooter-Riders-Inmotion-Climber-Electric/dp/B0BRQ6R8Y3"
  },
    {
    id: 22,
    brand: "Hurtle",
    name: "Electric Scooter, 350W/500W Motor, Max 30 Miles Range",
    image: "https://m.media-amazon.com/images/I/61X8gmpjNEL._AC_SY879_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "25",
    charging: "6",
    maxpower: 500,
    topspeed: 19,
    weightlimit: 330,
    rating: "⭐4.0 (157+)",
    priceRange: 299,
    orderUrl: "https://www.amazon.com/Hurtle-Folding-Electric-Scooter-Scooter/dp/B0BQ4SDL38"
  },
     {
    id: 23,
    brand: "NIU",
    name: "Electric Scooter for Adults - NIU E-Scooter for Commute 600W-900W Max Power",
    image: "https://m.media-amazon.com/images/I/51HYhk7YOFL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "37.3",
    charging: "6",
    maxpower: 1000,
    topspeed: 23.7,
    weightlimit: 265,
    rating: "⭐4.0 (1441+)",
    priceRange: 999,
    orderUrl: "https://www.amazon.com/NIU-300X-Electric-Scooter-Triple-Braking/dp/B0DD7F9RPH"
  },
      {
    id: 24,
    brand: "Gotrax",
    name: "G4 Series Electric Scooter for Adults, 500-650W Motor",
    image: "https://m.media-amazon.com/images/I/61k4zwFDC4L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "25",
    charging: "6",
    maxpower: 500,
    topspeed: 20,
    weightlimit: 264,
    rating: "⭐4.3 (2160+)",
    priceRange: 549,
    orderUrl: "https://www.amazon.com/dp/B08VW45139"
  },
   {
    id: 25,
    brand: "Hiboy",
    name: "S2 Pro/S2 MAX Electric Scooter, 500W Motor, 10' Solid Tires",
    image: "https://m.media-amazon.com/images/I/61xpDfP-eXL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "25.6",
    charging: "8",
    maxpower: 500,
    topspeed: 19,
    weightlimit: 220,
    rating: "⭐4.4 (6265+)",
    priceRange: 467,
    orderUrl: "https://www.amazon.com/Hiboy-Pro-Electric-Scooter-Long-Range/dp/B086N23QBD"
  },
  {
    id: 26,
    brand: "VOLPAM",
    name: "Electric Scooter, 350W Motor, 21-23 Miles Long Range, 19 Mph Speed",
    image: "https://m.media-amazon.com/images/I/610iAqUIbXL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "23",
    charging: "5",
    maxpower: 350,
    topspeed: 19,
    weightlimit: 264,
    rating: "⭐4.0 (1283+)",
    priceRange: 199,
    orderUrl: "https://www.amazon.com/Hiboy-Pro-Electric-Scooter-Long-Range/dp/B086N23QBD"
  },
  {
    id: 27,
    brand: "Hiboy",
    name: "S2 Series Electric Scooter, 8.5'-12' Tires, Up to 17-38 Miles Range, 350W/500W Powerful Motor",
    image: "https://m.media-amazon.com/images/I/61IL3pvk8JL._AC_SX679_.jpg",
    alt: "Bulova Marine Star Automatic Diver",
    distance: "25",
    charging: "5",
    maxpower: 500,
    topspeed: 19,
    weightlimit: 220,
    rating: "⭐4.3 (3864+)",
    priceRange: 467,
    orderUrl: "https://www.amazon.com/Hiboy-Electric-Scooter-500W-Commuting/dp/B0F2Z8NHYW"
  }

]

function renderProducts(products) {
    console.log('Rendering products:', products.length);
  const container = document.getElementById('products-container');
  let html = '';
  for (let i = 0; i < products.length; i += 2) {
    html += '<div class="row">';
    for (let j = 0; j < 2; j++) {
      const p = products[i + j];
      if (!p) continue;
      const side = j === 0 ? 'left-item' : 'right-item';
      html += `
        <div class="${side}" data-brand="${p.brand}" data-movement="${p.movement}" data-size="${p.size}" data-range="${p.priceRange}" data-style="${p.style}">
          <div class="watch">
            <div class="img-container">
                 <img src="${p.image}" alt="${p.alt}">
            </div>
          </div>
          <div class="description">
           <span><strong>${p.brand} ${p.name}</strong></span>
            <table><tbody>
              <tr><th scope="row">Max Distance</th><td>${p.distance} Miles</td></tr>
              <tr><th scope="row">Charging Time</th><td>${p.charging} Hours</td></tr>
              <tr><th scope="row">Max Power</th><td>${p.maxpower} W</td></tr>
              <tr><th scope="row">Top Speed</th><td>${p.topspeed} MPH</td></tr>
              <tr><th scope="row">Rating</th><td>${p.rating}</td></tr>
            </tbody></table>
            <a class="order" href="${p.orderUrl}" target="_blank" rel="noopener noreferrer"><span class="bi bi-amazon me-2"> Order Now   </span><strong>$${p.priceRange}</strong></a>
          </div>
        </div>
      `;
      
    }
 
    html += '</div>';
  }
  
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
  renderProducts(products);
  const maxpowerFilter = document.getElementById('maxpower-filter');
  const brandFilter = document.getElementById('brand-filter');
  const chargingFilter = document.getElementById('charging-filter');
  const distanceFilter = document.getElementById('distance-filter');
  const topspeedFilter = document.getElementById('topspeed-filter');
  const weightlimitFilter = document.getElementById('weightlimit-filter');
  const sortPrice = document.getElementById('sort-price');

  function applyFilters() {
    const maxpowerValue = maxpowerFilter.value;
    const checkedBrands = Array.from(brandFilter.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    const chargingValue = chargingFilter.value;
    const distanceValue = distanceFilter.value;
    const topspeedValue = topspeedFilter.value;
    const weightlimitValue = weightlimitFilter.value;
    const sortValue = sortPrice.value;
    let filtered = products;

    if (maxpowerValue) {
      filtered = filtered.filter(p => parseFloat(p.maxpower) === parseFloat(maxpowerValue));
    }

     if (checkedBrands.length > 0) {
    filtered = filtered.filter(p => checkedBrands.includes(p.brand.trim()));
  }

    if (chargingValue) {
      filtered = filtered.filter(p => p.charging === chargingValue);
    }

    if (distanceValue) {
    filtered = filtered.filter(p => parseFloat(p.distance) >= parseFloat(distanceValue));
   }

   if (topspeedValue) {
      filtered = filtered.filter(p => parseFloat(p.topspeed) >= parseFloat(topspeedValue));
    }
    if (weightlimitValue) {
  filtered = filtered.filter(p => parseInt(p.weightlimit) >= parseInt(weightlimitValue));
}
if (sortValue === "asc") {
    filtered.sort((a, b) => a.priceRange - b.priceRange);
  } else if (sortValue === "desc") {
    filtered.sort((a, b) => b.priceRange - a.priceRange);
  }else {
    filtered.sort((a, b) => a.id - b.id);
  }

renderProducts(filtered);
  }



    const toggleBtn = document.getElementById('toggle-filters');
  const filtersPanel = document.getElementById('filters-panel');
  if (toggleBtn && filtersPanel) {
    toggleBtn.addEventListener('click', function() {
      if (filtersPanel.style.display === 'none' || filtersPanel.style.display === '') {
        filtersPanel.style.display = 'flex';
      } else {
        filtersPanel.style.display = 'none';
      }
    });
  }



  if (maxpowerFilter) maxpowerFilter.addEventListener('change', applyFilters);
  if (chargingFilter) chargingFilter.addEventListener('change', applyFilters);
  if (distanceFilter) distanceFilter.addEventListener('input', applyFilters);
  if (topspeedFilter) topspeedFilter.addEventListener('input', applyFilters);
  if (weightlimitFilter) weightlimitFilter.addEventListener('input', applyFilters);
  brandFilter.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', applyFilters);
});
if (sortPrice) sortPrice.addEventListener('change', applyFilters);
});