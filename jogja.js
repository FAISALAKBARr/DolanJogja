import { transJogjaStops } from "./halte.js";
import { transJogjaTPB } from "./tpb.js";
import { tempatWisata } from "./tourist.js";

const graphTransjogja = {
  "Kridosono Stadium": { 
    coords: [-7.787617833616197, 110.3740941506823], 
    neighbors: { 
      "Museum Sandi": 0.8,
      "Malioboro": 1.4,
      "Tugu Jogja": 1.3, 
      "Stasiun Jogja Yogyakarta": 1.5
    }
  },
  "Keraton Yogyakarta": { 
    coords: [-7.805403528649651, 110.36404827952317], 
    neighbors: { 
      "Taman Sari": 1.0, 
      "Museum Benteng Vredeburg": 1.2 
    }
  },
  "Taman Sari": { 
    coords: [-7.806662439872549, 110.35916238301554], 
    neighbors: { 
      "Keraton Yogyakarta": 1.0, 
      "Alun-Alun Kidul": 1.5 
    }
  },
  "Museum Benteng Vredeburg": { 
    coords: [-7.799945831544429, 110.36634449384196], 
    neighbors: { 
      "Keraton Yogyakarta": 1.2, 
      "Pasar Beringharjo": 0.5 
    }
  },
  "Malioboro": { 
    coords: [-7.792507758394169, 110.3658560988557], 
    neighbors: { 
      "Museum Sandi": 1.6,
      "Tugu Jogja": 1.7,
      "Stasiun Jogja Yogyakarta": 0.8, 
      "Kridosono Stadium": 1.4
    }
  },
  "Taman Pintar": { 
    coords: [-7.80052267842781, 110.36765509486403], 
    neighbors: { 
      "Museum Benteng Vredeburg": 0.4 
    }
  },
  "Museum Sonobudoyo": { 
    coords: [-7.802192458946981, 110.36392800679293], 
    neighbors: { 
      "Keraton Yogyakarta": 0.5, 
      "Alun-Alun Kidul": 1.2 
    }
  },
  "Candi Prambanan": { 
    coords: [-7.751786697772417, 110.4915210142942], 
    neighbors: {} 
  },
  "Alun-Alun Kidul": { 
    coords: [-7.811740011679767, 110.36320539486422], 
    neighbors: { 
      "Taman Sari": 1.5, 
      "Museum Sonobudoyo": 1.2 
    }
  },
  "Pasar Beringharjo": { 
    coords: [-7.798588770526954, 110.36574782370013], 
    neighbors: { 
      "Museum Benteng Vredeburg": 0.5 
    }
  },
  "Jogja National Museum": { 
    coords: [-7.8000005669452825, 110.35338420835511], 
    neighbors: {} 
  },
  "Situs Warungboto": { 
    coords: [-7.809992135227927, 110.39328029486413], 
    neighbors: {} 
  },
  "Tugu Jogja": { 
    coords: [-7.782751694938285, 110.36708639895151], 
    neighbors: {
      "Museum Sandi": 0.8,
      "Malioboro": 1.7,
      "Kridosono Stadium": 1.3, 
      "Stasiun Jogja Yogyakarta": 1.0, 
    } 
  },
  "Stasiun Jogja Yogyakarta": { 
    coords: [-7.78912753407445, 110.36346289486379], 
    neighbors: { 
      "Museum Sandi": 1.5,
      "Tugu Jogja": 1.0,
      "Kridosono Stadium": 1.5, 
      "Malioboro": 0.8 
    }
  },
  "Bandara Adisutjipto": { 
    coords: [-7.78884719369178, 110.43075259671775], 
    neighbors: {} 
  },
  "Ambarrukmo Plaza Mall": { 
    coords: [-7.782386234764126, 110.40112775662398], 
    neighbors: {} 
  },
  "Jogja Night Tour": { 
    coords: [-7.797316436561621, 110.365317394864], 
    neighbors: {} 
  },
  "Kebun Binatang Gembira Loka": { 
    coords: [-7.803796695408634, 110.39791851266814], 
    neighbors: {} 
  },
  "Pakuwon Mall": { 
    coords: [-7.758682301385627, 110.39925510438991], 
    neighbors: {} 
  },
  "Jogja Exotarium Mini Zoo": { 
    coords: [-7.728713703511676, 110.35850755886717], 
    neighbors: {} 
  },
  "Sleman City Hall": { 
    coords: [-7.719709636508096, 110.36197971525586], 
    neighbors: {} 
  },
  "Museum Pusat TNI AU Dirgantara": { 
    coords: [-7.789367475038897, 110.41638427200716], 
    neighbors: {} 
  },
  "Mrican Boat and Fishing Spot": { 
    coords: [-7.835038783318986, 110.39469342529327], 
    neighbors: {} 
  },
  "Sindu Kusuma Edupark": { 
    coords: [-7.7677083137960645, 110.35560203262627], 
    neighbors: {} 
  },
  "Jogja City Mall": { 
    coords: [-7.753061677114781, 110.36205172098134], 
    neighbors: {} 
  },
  "Galleria Mall": { 
    coords: [-7.782617209463334, 110.38015270960855], 
    neighbors: {} 
  },
  "Museum Omah Jayeng": { 
    coords: [-7.799350467469541, 110.37395119584289], 
    neighbors: {} 
  },
  "Museum Sandi": { 
    coords: [-7.78442734042371, 110.3722330479683], 
    neighbors: {
      "Museum Sandi": 1.5,
      "Tugu Jogja": 1.0,
      "Malioboro": 1.5, 
      "Kridosono Stadium": 0.8 
    } 
  },
  "Museum Affandi": { 
    coords: [-7.782585439863173, 110.39752889214583], 
    neighbors: {} 
  },
  "Museum Sejarah Jawa": { 
    coords: [-7.841182007359104, 110.36337679708396], 
    neighbors: {} 
  },
  "Stasiun Lempuyangan": { 
    coords: [-7.791014742429463, 110.37659535536245], 
    neighbors: {} 
  },
  "Stasiun Maguwo": { 
    coords: [-7.784603850602844, 110.43790163632335], 
    neighbors: {} 
  },
  "Senyum Tamanan": { 
    coords: [-7.847577389596583, 110.38950386885593], 
    neighbors: {} 
  },
};

/*===================================================
                      OSM  LAYER
    ===================================================*/

var map = L.map("map").setView([-7.797068, 110.370529], 13); // Centered on Yogyakarta
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
osm.addTo(map);

/*===================================================
                          MARKER
      ===================================================*/

// Example marker for a TransJogja bus stop

var transJogjaStopsGroup = L.layerGroup();
var tempatWisataGroup = L.layerGroup();
var transJogjaTPBGroup = L.layerGroup();

transJogjaStops.forEach(function (stop) {
  var redMarker = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  var marker = L.marker(stop.coords, { icon: redMarker }).bindPopup(
    "<b>Bus Stop: </b>" + stop.name
  );
  transJogjaStopsGroup.addLayer(marker);
});

tempatWisata.forEach(function (tempat) {
  var goldMarker = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  var marker = L.marker(tempat.coords, { icon: goldMarker }).bindPopup(
    "<b>Tempat Wisata: </b>" + tempat.name
  );
  tempatWisataGroup.addLayer(marker);
});

transJogjaTPB.forEach(function (stop) {
  var greenMarker = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  var marker = L.marker(stop.coords, { icon: greenMarker }).bindPopup(
    "<b>TPB: </b>" + stop.name
  );
  transJogjaTPBGroup.addLayer(marker);
});

// Add all marker groups to the map initially
transJogjaStopsGroup.addTo(map);
tempatWisataGroup.addTo(map);
transJogjaTPBGroup.addTo(map);

// Event listeners for checkboxes
document
  .getElementById("transJogjaStopsCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      map.addLayer(transJogjaStopsGroup);
    } else {
      map.removeLayer(transJogjaStopsGroup);
    }
  });

document
  .getElementById("tempatWisataCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      map.addLayer(tempatWisataGroup);
    } else {
      map.removeLayer(tempatWisataGroup);
    }
  });

document
  .getElementById("transJogjaTPBCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      map.addLayer(transJogjaTPBGroup);
    } else {
      map.removeLayer(transJogjaTPBGroup);
    }
  });
/*===================================================
                          TILE LAYER
      ===================================================*/

var CartoDB_DarkMatter = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }
);
CartoDB_DarkMatter.addTo(map);

// Google Map Layer
var googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

// Satellite Layer
var googleSat = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

var Stamen_Watercolor = L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abcd",
    minZoom: 1,
    maxZoom: 16,
    ext: "jpg",
  }
);

/*===================================================
                          LAYER CONTROL
      ===================================================*/

var baseLayers = {
  Satellite: googleSat,
  "Google Map": googleStreets,
  "Water Color": Stamen_Watercolor,
  OpenStreetMap: osm,
};

var overlays = {
  "TransJogja Stops": transJogjaStopsGroup,
  "Tempat Wisata": tempatWisataGroup,
  "TransJogja TPB": transJogjaTPBGroup,
};

L.control.layers(baseLayers, overlays).addTo(map);

/*===================================================
                          SEARCH BUTTON
      ===================================================*/

      L.Control.geocoder().addTo(map);

     // Find Closest Node Function
function findClosestNode(coords) {
  let closestNode = null;
  let minDistance = Infinity;

  Object.keys(graphTransjogja).forEach((node) => {
    const nodeCoords = graphTransjogja[node].coords;
    const distance = Math.sqrt(
      Math.pow(nodeCoords[0] - coords[0], 2) +
        Math.pow(nodeCoords[1] - coords[1], 2)
    );
    if (distance < minDistance) {
      closestNode = node;
      minDistance = distance;
    }
  });

  return closestNode;
}

// Heuristic Function
function heuristic(coords1, coords2) {
  return Math.sqrt(
    Math.pow(coords1[0] - coords2[0], 2) + Math.pow(coords1[1] - coords2[1], 2)
  );
}

// A* Algorithm Function
function aStar(start, end, graph) {
  let openSet = [start];
  const cameFrom = {};

  const gScore = { [start]: 0 };
  const fScore = { [start]: heuristic(graph[start].coords, graph[end].coords) };

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      gScore[node] = Infinity;
      fScore[node] = Infinity;
    }
  });

  while (openSet.length > 0) {
    const current = openSet.reduce((a, b) => (fScore[a] < fScore[b] ? a : b));

    if (current === end) {
      const path = [];
      let temp = current;
      while (temp !== start) {
        path.push(graph[temp].coords);
        temp = cameFrom[temp];
      }
      path.push(graph[start].coords);
      return path.reverse();
    }

    openSet = openSet.filter((node) => node !== current);

    for (const neighbor in graph[current].neighbors) {
      const tentativeGScore = gScore[current] + graph[current].neighbors[neighbor];
      if (tentativeGScore < (gScore[neighbor] || Infinity)) {
        cameFrom[neighbor] = current;
        gScore[neighbor] = tentativeGScore;
        fScore[neighbor] = tentativeGScore + heuristic(graph[neighbor].coords, graph[end].coords);
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  return null;
}

// Function to Display the Route on the Map
function tampilkanRute(rute) {
  const polyline = L.polyline(rute, { color: 'blue' }).addTo(map);
  map.fitBounds(polyline.getBounds());
}

// Event Listener for Search Route Button
document.getElementById("cariRuteBtn").addEventListener("click", function () {
  const start = document.getElementById("startInput").value;
  const end = document.getElementById("endInput").value;

  const startLocation = searchLocation(start);
  const endLocation = searchLocation(end);

  if (!startLocation || !endLocation) {
    alert('Lokasi tidak ditemukan');
    return;
  }

  const startNode = findClosestNode(startLocation);
  const endNode = findClosestNode(endLocation);

  if (!startNode || !endNode) {
    alert('Node terdekat tidak ditemukan');
    return;
  }

  const ruteTerdekat = aStar(startNode, endNode, graphTransjogja);
  if (ruteTerdekat) {
    tampilkanRute(ruteTerdekat);
  } else {
    alert('Rute tidak ditemukan');
  }
});
/*===================================================
                      SEARCH FUNCTION
===================================================*/

// Mencari koordinat halte atau tempat wisata berdasarkan nama
function searchLocation(name) {
  let foundLocation = null;

  transJogjaStops.forEach(function (stop) {
    if (stop.name.toLowerCase() === name.toLowerCase()) {
      foundLocation = stop.coords;
    }
  });

  if (!foundLocation) {
    tempatWisata.forEach(function (tempat) {
      if (tempat.name.toLowerCase() === name.toLowerCase()) {
        foundLocation = tempat.coords;
      }
    });
  }
  if (!foundLocation) {
    transJogjaTPB.forEach(function (stop) {
      if (stop.name.toLowerCase() === name.toLowerCase()) {
        foundLocation = stop.coords;
      }
    });
  }

  return foundLocation;
}

// Event listener untuk tombol pencarian lokasi
document.getElementById("cariRuteBtn").addEventListener("click", function () {
  const startInput = document.getElementById("startInput").value;
  const endInput = document.getElementById("endInput").value;

  const startLocation = searchLocation(startInput);
  const endLocation = searchLocation(endInput);

  if (startLocation) {
    map.setView(startLocation, 15);
    L.popup()
      .setLatLng(startLocation)
      .setContent(`<b>${startInput}</b>`)
      .openOn(map);
  }

  if (endLocation) {
    map.setView(endLocation, 15);
    L.popup()
      .setLatLng(endLocation)
      .setContent(`<b>${endInput}</b>`)
      .openOn(map);
  }

  if (!startLocation && !endLocation) {
    alert("Lokasi tidak ditemukan");
  }
});
