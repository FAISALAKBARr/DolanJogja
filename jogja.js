import { transJogjaStops } from "./halte.js";
import { transJogjaTPB } from "./tpb.js";
import { tempatWisata } from "./tourist.js";
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

transJogjaStops.forEach(function (stop) {
  var redMarker = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  var marker = L.marker(stop.coords, { icon: redMarker }).addTo(map);
  marker.bindPopup("<b>Bus Stop: </b>" + stop.name);
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

  var marker = L.marker(tempat.coords, { icon: goldMarker }).addTo(map);
  marker.bindPopup("<b>Tempat Wisata: </b>" + tempat.name);
});

transJogjaTPB.forEach(function (stop) {
  var redMarker = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  var marker = L.marker(stop.coords, { icon: redMarker }).addTo(map);
  marker.bindPopup("<b>TPB : </b>" + stop.name);
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
  "TransJogja Stops": L.layerGroup(
    transJogjaStops.map((stop) =>
      L.marker(stop.coords).bindPopup("<b>Bus Stop: </b>" + stop.name)
    )
  ).addTo(map),
};

L.control.layers(baseLayers, overlays).addTo(map);

/*===================================================
                          SEARCH BUTTON
      ===================================================*/

L.Control.geocoder().addTo(map);

// Fungsi A* untuk mencari rute tercepat
function aStar(start, end, graf) {
  // Set variabel node awal dan node akhir
  const startNode = graf[start];
  const endNode = graf[end];

  // Inisialisasi openSet dan closedSet
  let openSet = [startNode];
  const closedSet = [];

  // Inisialisasi gScore dan fScore
  const gScore = {};
  const fScore = {};
  Object.keys(graf).forEach((node) => {
    gScore[node] = Infinity;
    fScore[node] = Infinity;
  });
  gScore[start] = 0;
  fScore[start] = heuristic(startNode, endNode);

  while (openSet.length > 0) {
    // Ambil node dengan fScore terendah dari openSet
    const current = getLowestFScoreNode(openSet, fScore);

    if (current === end) {
      return reconstructPath(graf, start, end);
    }

    // Hapus current dari openSet dan tambahkan ke closedSet
    openSet = openSet.filter((node) => node !== current);
    closedSet.push(current);

    // Iterasi melalui tetangga-tetangga current
    Object.keys(graf[current].neighbors).forEach((neighbor) => {
      if (closedSet.includes(neighbor)) {
        return; // Skip jika neighbor sudah di closedSet
      }

      // Hitung gScore baru
      const tentativeGScore =
        gScore[current] + graf[current].neighbors[neighbor];

      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor); // Tambahkan neighbor ke openSet jika belum ada
      } else if (tentativeGScore >= gScore[neighbor]) {
        return; // Skip jika ini bukan rute terbaik
      }

      // Update nilai gScore dan fScore neighbor
      gScore[neighbor] = tentativeGScore;
      fScore[neighbor] = gScore[neighbor] + heuristic(graf[neighbor], endNode);
    });
  }

  return null; // Jika tidak ditemukan rute
}

// Fungsi heuristik (misalnya menggunakan jarak Euclidean)
function heuristic(nodeA, nodeB) {
  const dx = nodeB.coords[0] - nodeA.coords[0];
  const dy = nodeB.coords[1] - nodeA.coords[1];
  return Math.sqrt(dx * dx + dy * dy);
}

// Fungsi untuk mendapatkan node dengan fScore terendah dari openSet
function getLowestFScoreNode(openSet, fScore) {
  let lowestNode = openSet[0];
  openSet.forEach((node) => {
    if (fScore[node] < fScore[lowestNode]) {
      lowestNode = node;
    }
  });
  return lowestNode;
}

// Fungsi untuk merekonstruksi path dari start ke end
function reconstructPath(graf, start, end) {
  const path = [end];
  let current = end;
  while (current !== start) {
    current = graf[current].cameFrom;
    path.unshift(current);
  }
  return path;
}

function tampilkanRute(rute) {
  L.polyline(rute, { color: "blue" }).addTo(map);
}

// Event listener untuk tombol pencarian rute
document.getElementById("cariRuteBtn").addEventListener("click", function () {
  const start = document.getElementById("startInput").value; // Ambil lokasi awal dari input
  const end = document.getElementById("endInput").value; // Ambil lokasi tujuan dari input
  const ruteTerdekat = aStar(start, end, grafTransjogja); // Hitung rute terdekat menggunakan A*
  tampilkanRute(ruteTerdekat); // Tampilkan rute terdekat pada peta
});
