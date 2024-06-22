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
var transJogjaStops = [
  { name: "Halte Alfa (Transmart)", coords: [-7.7829, 110.3757] },
  { name: "Halte Ambarukmo", coords: [-7.7797, 110.4085] },
  { name: "Halte Bandara Adisujtipto", coords: [-7.7881, 110.4318] },
  { name: "Halte Banguntapan 2", coords: [-7.83, 110.4154] },
  { name: "Halte Cik Di Tiro", coords: [-7.7825, 110.372] },
  { name: "Halte De Brito", coords: [-7.7833, 110.3669] },
  { name: "Halte Dr. YAP", coords: [-7.7826, 110.3764] },
  { name: "Halte Gamping", coords: [-7.782, 110.3211] },
  { name: "Halte Gedung Juang", coords: [-7.7943, 110.3684] },
  { name: "Halte Gedung Wanita", coords: [-7.798, 110.3763] },
  { name: "Halte Gembira Loka", coords: [-7.8037, 110.3951] },
  { name: "Halte Instiper 2", coords: [-7.7701, 110.4074] },
  { name: "Halte Janti Bawah Flyover", coords: [-7.7915, 110.4131] },
  { name: "Halte Janti Utara", coords: [-7.7919, 110.4138] },
  { name: "Halte Jayakarta", coords: [-7.796, 110.4137] },
  { name: "Halte JEC", coords: [-7.8195, 110.4027] },
  { name: "Halte Jogja Bisnis", coords: [-7.7836, 110.3814] },
  { name: "Halte Kehutanan", coords: [-7.7671, 110.3708] },
  { name: "Halte KHA Dahlan (Ngadiwinatan)", coords: [-7.8045, 110.3551] },
  { name: "Halte KHA Dahlan (PAPMI)", coords: [-7.804, 110.3555] },
  { name: "Halte Kridosono", coords: [-7.7856, 110.3751] },
  { name: "Halte Maguwo", coords: [-7.7881, 110.4318] },
  { name: "Halte Malioboro 1 (Inna Garuda)", coords: [-7.7893, 110.3657] },
  { name: "Halte Malioboro 2 (Kepatihan)", coords: [-7.792, 110.3645] },
  {
    name: "Halte Malioboro 3 (Pasar Beringharjo)",
    coords: [-7.7972, 110.3685],
  },
  { name: "Halte Mall Sahid J-Walk", coords: [-7.7963, 110.4053] },
  { name: "Halte Mangkubumi", coords: [-7.7837, 110.3663] },
  { name: "Halte Monjali 1", coords: [-7.7594, 110.3697] },
  { name: "Halte Museum Biologi", coords: [-7.8003, 110.3734] },
  { name: "Halte Museum Perjuangan", coords: [-7.809, 110.3673] },
  { name: "Halte Ngabean", coords: [-7.8055, 110.3522] },
  { name: "Halte Ngeksigondo Basen", coords: [-7.7967, 110.3549] },
  { name: "Halte Nitikan", coords: [-7.8096, 110.3751] },
  { name: "Halte Pakualaman", coords: [-7.8014, 110.3683] },
  { name: "Halte Panti Rapih", coords: [-7.7821, 110.3707] },
  { name: "Halte RS Bethesda", coords: [-7.793, 110.37] },
  { name: "Halte RS Hardjolukito", coords: [-7.815, 110.4138] },
  { name: "Halte RS Sardjito 1", coords: [-7.7702, 110.3712] },
  { name: "Halte RS Sardjito 2", coords: [-7.7703, 110.3702] },
  { name: "Halte RSI Hidayatullah", coords: [-7.8074, 110.4024] },
  { name: "Halte Samirono", coords: [-7.7769, 110.3914] },
  { name: "Halte Samsat", coords: [-7.7886, 110.3698] },
  { name: "Halte Sanata Dharma", coords: [-7.7827, 110.3877] },
  { name: "Halte SD Pujokusuman", coords: [-7.8008, 110.3771] },
  { name: "Halte Senopati 1", coords: [-7.7993, 110.3708] },
  { name: "Halte Senopati 2", coords: [-7.7993, 110.3708] },
  { name: "Halte SGM 1", coords: [-7.8065, 110.3906] },
  { name: "Halte SGM 2", coords: [-7.8065, 110.3906] },
  { name: "Halte SMA N 1", coords: [-7.783, 110.3665] },
  { name: "Halte SMA N 7", coords: [-7.7836, 110.3674] },
  { name: "Halte SMK Muhammadiyah 3", coords: [-7.8045, 110.3647] },
  { name: "Halte Stikes Guna Bangsa", coords: [-7.7785, 110.3756] },
  { name: "Halte Sudirman (Bumiputera)", coords: [-7.7819, 110.3715] },
  { name: "Halte Sudirman (Santika)", coords: [-7.7806, 110.3711] },
  { name: "Halte Tegal Gendu 1", coords: [-7.8, 110.3677] },
  { name: "Halte Tentara Pelajar (SMP N 14)", coords: [-7.7978, 110.3505] },
  { name: "Halte Terminal Condong Catur", coords: [-7.7628, 110.3934] },
  { name: "Halte Terminal Giwangan", coords: [-7.8262, 110.3957] },
  { name: "Halte Terminal Jombor", coords: [-7.7649, 110.3598] },
  { name: "Halte UPN Veteran", coords: [-7.7769, 110.4098] },
  { name: "Halte Urip Sumoharjo", coords: [-7.7813, 110.3688] },
  { name: "Halte Vokasi UGM 1", coords: [-7.7668, 110.3687] },
  { name: "Halte XT Square", coords: [-7.8129, 110.376] },
];

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

var tempatWisata = [
  { name: "Malioboro", coords: [-7.792354, 110.365785] },
  { name: "Tugu Station", coords: [-7.789307, 110.363005] },
  { name: "Kridosono Stadium", coords: [-7.782903, 110.375475] },
  {
    name: "Keraton Yogyakarta Keraton Ngayogyakarta Hadiningrat",
    coords: [-7.806721, 110.364839],
  },
  { name: "Taman Sari Taman Sari", coords: [-7.81058, 110.35841] },
  {
    name: "Museum Benteng Vredeburg Vredeburg Museum",
    coords: [-7.80054, 110.36709],
  },
  { name: "Malioboro Malioboro Yogyakarta", coords: [-7.792354, 110.365785] },
  {
    name: "Taman Pintar Taman Pintar Yogyakarta",
    coords: [-7.801438, 110.366778],
  },
  {
    name: "Museum Sonobudoyo Museum Sonobudoyo Unit I",
    coords: [-7.801822, 110.363849],
  },
  { name: "Candi Prambanan Prambanan Temple", coords: [-7.75202, 110.4928] },
  {
    name: "Alun-Alun Kidul Bringin Kembar Yogyakarta",
    coords: [-7.813336, 110.360953],
  },
  {
    name: "Pasar Beringharjo Beringharjo Market",
    coords: [-7.798888, 110.367335],
  },
  {
    name: "Jogja National Museum Jogja National Museum",
    coords: [-7.803971, 110.360091],
  },
  {
    name: "De Mata Trick Eye Museum De Mata Trick Eye Museum",
    coords: [-7.810152, 110.37655],
  },
  {
    name: "Situs Warungboto Situs Warungboto",
    coords: [-7.802642, 110.388428],
  },
  { name: "Tugu Jogja Yogyakarta Monument", coords: [-7.782885, 110.367075] },
  { name: "Stasiun Jogja Yogyakarta", coords: [-7.789228, 110.363091] },
  {
    name: "Bandara Adisutjipto Adisutjipto Airport",
    coords: [-7.788965, 110.432026],
  },
  { name: "Ambarukmo Mall Ambarrukmo Plaza", coords: [-7.782716, 110.408844] },
  {
    name: "Jogja Night Tours Yogyakarta Night Tours - Meeting Point Klasik : Historical Walking and Food Tour",
    coords: [-7.797068, 110.370529],
  },
  {
    name: "Kebun Binatang Gembira Loka Gembira Loka Zoo",
    coords: [-7.792917, 110.397116],
  },
  { name: "Pakuwon Mall Pakuwon Mall Jogja", coords: [-7.760072, 110.374233] },
  {
    name: "Jogja Exotarium Mini Zoo Jogja Exotarium Mini Zoo",
    coords: [-7.75217, 110.314962],
  },
  { name: "Sleman City Hall Sleman City Hall", coords: [-7.73373, 110.360134] },
  {
    name: "Museum Pusat TNI AU Dirgantara Central Museum of the Air Force Dirgantara Mandala",
    coords: [-7.787945, 110.432526],
  },
  {
    name: "Mrican Boat and Fishing Spot Mrican Boat and Fishing Spot",
    coords: [-7.779504, 110.417744],
  },
  {
    name: "Sindu Kusuma Edupark Sindu Kusuma Edupark (SKE)",
    coords: [-7.761553, 110.350289],
  },
  { name: "Jogja City Mall Jogja City Mall", coords: [-7.752974, 110.366159] },
  { name: "Galleria Mall Galeria Mall", coords: [-7.782399, 110.38075] },
  {
    name: "Museum Omah Jayeng Museum Omah Jayeng ꧋ꦩꦸꦱꦺꦪꦸꦩ꧀ꦎꦩꦃꦗꦪꦺꦁ",
    coords: [-7.802362, 110.359275],
  },
  { name: "Museum Sandi Museum Sandi", coords: [-7.782509, 110.375173] },
  { name: "Museum Affandi Affandi Museum", coords: [-7.782923, 110.398239] },
  {
    name: "Museum Sejarah Jawa History Of Java Museum (HOJM)",
    coords: [-7.834846, 110.368321],
  },
  { name: "Stasiun Lempuyangan Lempuyangan", coords: [-7.789787, 110.377669] },
  { name: "Stasiun Maguwo Stasiun Maguwo", coords: [-7.789865, 110.436056] },
  { name: "Senyum Tamanan Senyum Tamanan", coords: [-7.831691, 110.366522] },
];

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

var transJogjaTPB = [
  {
    name: "TPB AA YKPN",
    coords: [-7.797891, 110.373836],
  },
  {
    name: "TPB AM Sangaji 1",
    coords: [-7.786675, 110.367675],
  },
  {
    name: "TPB AM Sangaji 2",
    coords: [-7.786771, 110.367829],
  },
  {
    name: "TPB AMIK BSI",
    coords: [-7.792712, 110.402735],
  },
  {
    name: "TPB Among Rogo 1",
    coords: [-7.826683, 110.366989],
  },
  {
    name: "TPB Among Rogo 2",
    coords: [-7.826684, 110.367032],
  },
  {
    name: "TPB APMD 1",
    coords: [-7.833813, 110.378314],
  },
  {
    name: "TPB APMD 2",
    coords: [-7.833825, 110.37836],
  },
  {
    name: "TPB Astra Isuzu",
    coords: [-7.785747, 110.404263],
  },
  {
    name: "TPB ATK Yogyakarta",
    coords: [-7.781721, 110.361632],
  },
  {
    name: "TPB Banguntapan 1",
    coords: [-7.843545, 110.35756],
  },
  {
    name: "TPB Bayeman 1",
    coords: [-7.783447, 110.374198],
  },
  {
    name: "TPB Bayeman 2",
    coords: [-7.783418, 110.374247],
  },
  {
    name: "TPB Bhayangkara",
    coords: [-7.797818, 110.363824],
  },
  {
    name: "TPB Binamarga",
    coords: [-7.805004, 110.363204],
  },
  {
    name: "TPB Biologi UGM",
    coords: [-7.771561, 110.388633],
  },
  {
    name: "TPB BKD DIY",
    coords: [-7.789753, 110.36994],
  },
  {
    name: "TPB BKPM DIY",
    coords: [-7.790733, 110.366593],
  },
  {
    name: "TPB Blok O",
    coords: [-7.790121, 110.379147],
  },
  {
    name: "TPB BRI Cabang Bantul",
    coords: [-7.889087, 110.336708],
  },
  {
    name: "TPB BTN",
    coords: [-7.804624, 110.363691],
  },
  {
    name: "TPB Budi Mulia 1",
    coords: [-7.775336, 110.404022],
  },
  {
    name: "TPB Budi Mulia 2",
    coords: [-7.775317, 110.40397],
  },
  {
    name: "TPB Demak Ijo 1",
    coords: [-7.819894, 110.363106],
  },
  {
    name: "TPB Demak Ijo 2",
    coords: [-7.819902, 110.363154],
  },
  {
    name: "TPB Dentes Ruko Godean",
    coords: [-7.772792, 110.370689],
  },
  {
    name: "TPB Diponegoro",
    coords: [-7.787519, 110.372822],
  },
  {
    name: "TPB Dishub DIY",
    coords: [-7.778624, 110.380398],
  },
  {
    name: "TPB Disnaker",
    coords: [-7.799794, 110.371446],
  },
  {
    name: "TPB Dongkelan 1",
    coords: [-7.772875, 110.382434],
  },
  {
    name: "TPB Dongkelan 2",
    coords: [-7.772863, 110.382466],
  },
  {
    name: "TPB Edotel Kalasan",
    coords: [-7.781435, 110.447099],
  },
  {
    name: "TPB Eks Bioskop Mataram",
    coords: [-7.791212, 110.365138],
  },
  {
    name: "TPB Eks Borobudur Plaza",
    coords: [-7.774516, 110.377876],
  },
  {
    name: "TPB Eks Stasiun KA Bantul 1",
    coords: [-7.903831, 110.33417],
  },
  {
    name: "TPB Eks Stasiun KA Bantul 2",
    coords: [-7.903831, 110.33417],
  },
  {
    name: "TPB FKG UGM 1",
    coords: [-7.775749, 110.371491],
  },
  {
    name: "TPB FKG UGM 2",
    coords: [-7.775765, 110.371528],
  },
  {
    name: "TPB Galeria Mall",
    coords: [-7.789022, 110.366679],
  },
  {
    name: "TPB Gambiran 1",
    coords: [-7.800554, 110.364289],
  },
  {
    name: "TPB Gambiran 2",
    coords: [-7.800552, 110.364333],
  },
  {
    name: "TPB Gedung Keuangan",
    coords: [-7.797601, 110.366017],
  },
  {
    name: "TPB Giant Godean",
    coords: [-7.769928, 110.382855],
  },
  {
    name: "TPB Glagahsari",
    coords: [-7.819694, 110.354845],
  },
  {
    name: "TPB Graha Asus",
    coords: [-7.80005, 110.373161],
  },
  {
    name: "TPB Grand Pacific",
    coords: [-7.794018, 110.369337],
  },
  {
    name: "TPB Grand Tjokro",
    coords: [-7.802378, 110.364618],
  },
  {
    name: "TPB Grand Zuri",
    coords: [-7.800761, 110.36795],
  },
  {
    name: "TPB Gudang SGM 1",
    coords: [-7.802133, 110.400535],
  },
  {
    name: "TPB Gudang SGM 2",
    coords: [-7.802142, 110.400585],
  },
  {
    name: "TPB Hayam Wuruk 1",
    coords: [-7.789989, 110.376288],
  },
  {
    name: "TPB Hayam Wuruk 2",
    coords: [-7.789974, 110.376322],
  },
  {
    name: "TPB Hotel Pramesthi",
    coords: [-7.792033, 110.365565],
  },
  {
    name: "TPB Hotel Utara",
    coords: [-7.793208, 110.366138],
  },
  {
    name: "TPB Hotel Vidi",
    coords: [-7.79573, 110.36837],
  },
  {
    name: "TPB Hyundai",
    coords: [-7.791051, 110.403303],
  },
  {
    name: "TPB Instiper 1",
    coords: [-7.786801, 110.367801],
  },
  {
    name: "TPB Jlagran",
    coords: [-7.780782, 110.383616],
  },
  {
    name: "TPB Jogja City Mall 1",
    coords: [-7.788835, 110.368876],
  },
  {
    name: "TPB Jogja City Mall 2",
    coords: [-7.78882, 110.368876],
  },
  {
    name: "TPB Jogokaryan 1",
    coords: [-7.779138, 110.372368],
  },
  {
    name: "TPB Jogokaryan 2",
    coords: [-7.779124, 110.372409],
  },
  {
    name: "TPB Jokteng Kulon",
    coords: [-7.812827, 110.39456],
  },
  {
    name: "TPB Jokteng Wetan",
    coords: [-7.811301, 110.396001],
  },
  {
    name: "TPB Kampus UPP 2 FIP UNY",
    coords: [-7.789932, 110.371182],
  },
  {
    name: "TPB Kantor Kalurahan Sidoarum",
    coords: [-7.896328, 110.340523],
  },
  {
    name: "TPB Kantor Kalurahan Sukoharjo 2",
    coords: [-7.817601, 110.335166],
  },
  {
    name: "TPB Kantor Kalurahan Wedomartani 1",
    coords: [-7.74974, 110.357002],
  },
  {
    name: "TPB Kantor Kalurahan Wedomartani 2",
    coords: [-7.749735, 110.357063],
  },
  {
    name: "TPB Kantor Kapanewon Bantul",
    coords: [-7.883065, 110.336907],
  },
  {
    name: "TPB Kantor Kapanewon Godean 1",
    coords: [-7.778325, 110.383519],
  },
  {
    name: "TPB Kantor Kapanewon Godean 2",
    coords: [-7.778344, 110.383547],
  },
  {
    name: "TPB Kantor Kapanewon Ngaglik 1",
    coords: [-7.775024, 110.394027],
  },
  {
    name: "TPB Kantor Kapanewon Ngaglik 2",
    coords: [-7.775034, 110.394051],
  },
  {
    name: "TPB Kantor Kesbangpol 1",
    coords: [-7.793115, 110.363647],
  },
  {
    name: "TPB Kantor Kesbangpol 2",
    coords: [-7.79312, 110.363692],
  },
  {
    name: "TPB Karang Gede 1",
    coords: [-7.767198, 110.398834],
  },
  {
    name: "TPB Karang Gede 2",
    coords: [-7.76722, 110.398846],
  },
  {
    name: "TPB Karangjati 1",
    coords: [-7.783405, 110.379529],
  },
  {
    name: "TPB Karangjati 2",
    coords: [-7.783402, 110.379568],
  },
  {
    name: "TPB Karangwaru 1",
    coords: [-7.800413, 110.363781],
  },
  {
    name: "TPB Karangwaru 2",
    coords: [-7.80041, 110.363832],
  },
  {
    name: "TPB Katamso",
    coords: [-7.784026, 110.386872],
  },
  {
    name: "TPB Kentungan",
    coords: [-7.778901, 110.3878],
  },
  {
    name: "TPB Ketandan",
    coords: [-7.804948, 110.365481],
  },
  {
    name: "TPB Ki Penjawi 1",
    coords: [-7.743235, 110.359258],
  },
  {
    name: "TPB Ki Penjawi 2",
    coords: [-7.743243, 110.359335],
  },
  {
    name: "TPB KKP Yogyakarta",
    coords: [-7.805459, 110.36647],
  },
  {
    name: "TPB Kledokan",
    coords: [-7.781968, 110.363953],
  },
  {
    name: "TPB Kosudgama",
    coords: [-7.797604, 110.354423],
  },
  {
    name: "TPB Kotabaru",
    coords: [-7.793968, 110.368207],
  },
  {
    name: "TPB KR 1",
    coords: [-7.789938, 110.371297],
  },
  {
    name: "TPB KR 2",
    coords: [-7.789938, 110.37131],
  },
  {
    name: "TPB KUA Depok 1",
    coords: [-7.780755, 110.393017],
  },
  {
    name: "TPB KUA Depok 2",
    coords: [-7.780765, 110.39305],
  },
  {
    name: "TPB Lapangan Karang 1",
    coords: [-7.771572, 110.393091],
  },
  {
    name: "TPB Lapangan Karang 2",
    coords: [-7.77156, 110.393103],
  },
  {
    name: "TPB Lapangan Kasihan 1",
    coords: [-7.812801, 110.387091],
  },
  {
    name: "TPB Lapangan Kasihan 2",
    coords: [-7.8128, 110.387128],
  },
  {
    name: "TPB Lembah UGM 1",
    coords: [-7.772923, 110.375315],
  },
  {
    name: "TPB Lembah UGM 2",
    coords: [-7.772928, 110.375386],
  },
  {
    name: "TPB Lempuyangan 1",
    coords: [-7.792582, 110.370687],
  },
  {
    name: "TPB Lempuyangan 2",
    coords: [-7.792587, 110.370711],
  },
  {
    name: "TPB Letjen Suprapto",
    coords: [-7.804697, 110.362186],
  },
  {
    name: "TPB Lowanu",
    coords: [-7.78051, 110.369682],
  },
  {
    name: "TPB Madukismo 1",
    coords: [-7.826484, 110.360642],
  },
  {
    name: "TPB Madukismo 2",
    coords: [-7.826487, 110.360694],
  },
  {
    name: "TPB Makam Gajah 1",
    coords: [-7.801399, 110.398228],
  },
  {
    name: "TPB Makam Gajah 2",
    coords: [-7.801386, 110.398264],
  },
  {
    name: "TPB Makam Sorogenen",
    coords: [-7.801405, 110.402028],
  },
  {
    name: "TPB MAN 2 Sleman 1",
    coords: [-7.754741, 110.371158],
  },
  {
    name: "TPB MAN 2 Sleman 2",
    coords: [-7.754741, 110.371158],
  },
  {
    name: "TPB Mandala Krida 1",
    coords: [-7.798423, 110.366128],
  },
  {
    name: "TPB Mandala Krida 2",
    coords: [-7.798416, 110.366176],
  },
  {
    name: "TPB Manggung",
    coords: [-7.78867, 110.364169],
  },
  {
    name: "TPB Masjid Panembahan",
    coords: [-7.804891, 110.366558],
  },
  {
    name: "TPB Mirota Godean 1",
    coords: [-7.770259, 110.38264],
  },
  {
    name: "TPB Mirota Godean 2",
    coords: [-7.770268, 110.382676],
  },
  {
    name: "TPB MM UGM",
    coords: [-7.773919, 110.387155],
  },
  {
    name: "TPB MMTC",
    coords: [-7.7886, 110.366907],
  },
  {
    name: "TPB Monjali 2",
    coords: [-7.765776, 110.395204],
  },
  {
    name: "TPB Mualimin 1",
    coords: [-7.789493, 110.360156],
  },
  {
    name: "TPB Mualimin 2",
    coords: [-7.789493, 110.360156],
  },
  {
    name: "TPB Museum Bahari 1",
    coords: [-7.811419, 110.366015],
  },
  {
    name: "TPB Neutron Godean 1",
    coords: [-7.769751, 110.383111],
  },
  {
    name: "TPB Neutron Godean 2",
    coords: [-7.76976, 110.383138],
  },
  {
    name: "TPB Ngeksigondo Diklat PU",
    coords: [-7.757566, 110.37482],
  },
  {
    name: "TPB Nogotirto",
    coords: [-7.788074, 110.406546],
  },
  {
    name: "TPB Olive Kentucky",
    coords: [-7.783522, 110.398676],
  },
  {
    name: "TPB PA Muhammadiyah",
    coords: [-7.782521, 110.378594],
  },
  {
    name: "TPB Pakuwon Mall",
    coords: [-7.772567, 110.409143],
  },
  {
    name: "TPB Palbapang",
    coords: [-7.816103, 110.370824],
  },
  {
    name: "TPB Pandeyan",
    coords: [-7.79255, 110.359051],
  },
  {
    name: "TPB Panti Rapih",
    coords: [-7.797913, 110.36743],
  },
  {
    name: "TPB Pasar Bantul 1",
    coords: [-7.883348, 110.336285],
  },
  {
    name: "TPB Pasar Bantul 2",
    coords: [-7.883331, 110.336349],
  },
  {
    name: "TPB Pasar Demangan",
    coords: [-7.797842, 110.37115],
  },
  {
    name: "TPB Pasar Gading",
    coords: [-7.780361, 110.376265],
  },
  {
    name: "TPB Pasar Gamping",
    coords: [-7.761882, 110.374909],
  },
  {
    name: "TPB Pasar Giwangan 1",
    coords: [-7.815645, 110.384346],
  },
  {
    name: "TPB Pasar Giwangan 2",
    coords: [-7.815636, 110.384371],
  },
  {
    name: "TPB Pasar Jangkang 1",
    coords: [-7.847899, 110.355171],
  },
  {
    name: "TPB Pasar Jangkang 2",
    coords: [-7.847911, 110.355183],
  },
  {
    name: "TPB Pasar Kalasan 1",
    coords: [-7.78162, 110.447827],
  },
  {
    name: "TPB Pasar Kalasan 2",
    coords: [-7.781636, 110.447866],
  },
  {
    name: "TPB Pasar Kolombo 1",
    coords: [-7.769656, 110.391855],
  },
  {
    name: "TPB Pasar Kolombo 2",
    coords: [-7.769657, 110.391903],
  },
  {
    name: "TPB Pasar Kranggan Selatan",
    coords: [-7.785918, 110.36368],
  },
  {
    name: "TPB Pasar Kranggan Timur",
    coords: [-7.78588, 110.363729],
  },
  {
    name: "TPB Pasar Legi 1",
    coords: [-7.807373, 110.364944],
  },
  {
    name: "TPB Pasar Legi 2",
    coords: [-7.807373, 110.364944],
  },
  {
    name: "TPB Pasar Niten 1",
    coords: [-7.785777, 110.376863],
  },
  {
    name: "TPB Pasar Niten 2",
    coords: [-7.785774, 110.37691],
  },
  {
    name: "TPB Pasar Pathuk",
    coords: [-7.800841, 110.363083],
  },
  {
    name: "TPB Pasar Sepeda Tunjungsari",
    coords: [-7.814428, 110.364902],
  },
  {
    name: "TPB Pasar Serangan",
    coords: [-7.803595, 110.365122],
  },
  {
    name: "TPB Pasar Telo 1",
    coords: [-7.811593, 110.354699],
  },
  {
    name: "TPB Pasar Telo 2",
    coords: [-7.811604, 110.354744],
  },
  {
    name: "TPB Pasty 1",
    coords: [-7.785272, 110.378746],
  },
  {
    name: "TPB Pasty 2",
    coords: [-7.785274, 110.378783],
  },
  {
    name: "TPB PDAM Monjali",
    coords: [-7.766666, 110.404782],
  },
  {
    name: "TPB Pegadaian",
    coords: [-7.790517, 110.366438],
  },
  {
    name: "TPB Pelem Gurih 1",
    coords: [-7.800679, 110.405129],
  },
  {
    name: "TPB Pelem Gurih 2",
    coords: [-7.800682, 110.405173],
  },
  {
    name: "TPB Perpusda",
    coords: [-7.799547, 110.363682],
  },
  {
    name: "TPB Perumahan Nogotirto",
    coords: [-7.78837, 110.407222],
  },
  {
    name: "TPB Pilar 1",
    coords: [-7.782945, 110.377872],
  },
  {
    name: "TPB Pilar 2",
    coords: [-7.782934, 110.377922],
  },
  {
    name: "TPB Plengkung Gading",
    coords: [-7.780414, 110.376091],
  },
  {
    name: "TPB PLN Gardu Induk",
    coords: [-7.799242, 110.364253],
  },
  {
    name: "TPB Polsek Banguntapan",
    coords: [-7.829043, 110.395703],
  },
  {
    name: "TPB Polsek Bulaksumur 1",
    coords: [-7.774794, 110.365659],
  },
  {
    name: "TPB Polsek Bulaksumur 2",
    coords: [-7.774808, 110.365685],
  },
  {
    name: "TPB Polsek Depok Timur 1",
    coords: [-7.763727, 110.413715],
  },
  {
    name: "TPB Polsek Depok Timur 2",
    coords: [-7.763717, 110.413736],
  },
  {
    name: "TPB Pramuka",
    coords: [-7.77179, 110.379615],
  },
  {
    name: "TPB PU PJN",
    coords: [-7.78488, 110.406518],
  },
  {
    name: "TPB Purawisata 1",
    coords: [-7.788642, 110.369843],
  },
  {
    name: "TPB Purawisata 2",
    coords: [-7.788642, 110.369843],
  },
  {
    name: "TPB Purnomo Mebel",
    coords: [-7.790681, 110.35698],
  },
  {
    name: "TPB Pusat Kuliner Belut Godean",
    coords: [-7.774999, 110.382588],
  },
  {
    name: "TPB Puskesmas Ngaglik 1",
    coords: [-7.771441, 110.387174],
  },
  {
    name: "TPB Puskesmas Ngaglik 2",
    coords: [-7.771431, 110.38721],
  },
  {
    name: "TPB Puskesmas Ngemplak 1",
    coords: [-7.78393, 110.394004],
  },
  {
    name: "TPB Puskesmas Ngemplak 2",
    coords: [-7.783942, 110.394033],
  },
  {
    name: "TPB Raminten 1",
    coords: [-7.807678, 110.360478],
  },
  {
    name: "TPB Raminten 2",
    coords: [-7.807678, 110.360478],
  },
  {
    name: "TPB Raya Kabunan 1",
    coords: [-7.787666, 110.36751],
  },
  {
    name: "TPB Raya Kabunan 2",
    coords: [-7.787666, 110.36751],
  },
  {
    name: "TPB RS JIH",
    coords: [-7.787943, 110.37731],
  },
  {
    name: "TPB RS PKU Muhammadiyah Gamping",
    coords: [-7.757079, 110.365165],
  },
  {
    name: "TPB RS Queen Latifa",
    coords: [-7.802032, 110.36469],
  },
  {
    name: "TPB Rs. Bhayangkara",
    coords: [-7.791096, 110.370496],
  },
  {
    name: "TPB Ruba Graha 1",
    coords: [-7.790437, 110.36775],
  },
  {
    name: "TPB Ruba Graha 2",
    coords: [-7.790444, 110.367787],
  },
  {
    name: "TPB Ruko Babarsari",
    coords: [-7.779665, 110.392653],
  },
  {
    name: "TPB Rumah Sakit Mitra Paramedika 1",
    coords: [-7.777989, 110.404253],
  },
  {
    name: "TPB Rumah Sakit Mitra Paramedika 2",
    coords: [-7.77799, 110.404292],
  },
  {
    name: "TPB Salakan Baru",
    coords: [-7.771342, 110.38684],
  },
  {
    name: "TPB Santren",
    coords: [-7.764909, 110.366071],
  },
  {
    name: "TPB SD N Selomulyo 1",
    coords: [-7.748869, 110.326097],
  },
  {
    name: "TPB SD N Selomulyo 2",
    coords: [-7.748872, 110.326129],
  },
  {
    name: "TPB SD Rejowinangun",
    coords: [-7.799655, 110.374555],
  },
  {
    name: "TPB SGM",
    coords: [-7.78462, 110.384318],
  },
  {
    name: "TPB Simpang Cepit 1",
    coords: [-7.791879, 110.375904],
  },
  {
    name: "TPB Simpang Cepit 2",
    coords: [-7.791873, 110.375936],
  },
  {
    name: "TPB Simpang Diklat DIY 1",
    coords: [-7.782896, 110.370929],
  },
  {
    name: "TPB Simpang Diklat DIY 2",
    coords: [-7.782904, 110.370956],
  },
  {
    name: "TPB Simpang Gose 1",
    coords: [-7.782778, 110.380055],
  },
  {
    name: "TPB Simpang Gose 2",
    coords: [-7.782789, 110.380085],
  },
  {
    name: "TPB Simpang Kasongan 1",
    coords: [-7.826844, 110.366438],
  },
  {
    name: "TPB Simpang Kasongan 2",
    coords: [-7.826851, 110.366464],
  },
  {
    name: "TPB Simpang Kronggahan",
    coords: [-7.785818, 110.377737],
  },
  {
    name: "TPB Simpang Munggur 1",
    coords: [-7.800346, 110.374922],
  },
  {
    name: "TPB Simpang Palem Raya 1",
    coords: [-7.801516, 110.37606],
  },
  {
    name: "TPB Simpang Palem Raya 2",
    coords: [-7.801514, 110.376095],
  },
  {
    name: "TPB Simpang Tajem Kabunan 1",
    coords: [-7.78648, 110.366642],
  },
  {
    name: "TPB Simpang Tajem Kabunan 2",
    coords: [-7.786492, 110.366679],
  },
  {
    name: "TPB Simpang Wojo",
    coords: [-7.782491, 110.38761],
  },
  {
    name: "TPB SMA N 1 Bantul 1",
    coords: [-7.888819, 110.336261],
  },
  {
    name: "TPB SMA N 1 Bantul 2",
    coords: [-7.888819, 110.336261],
  },
  {
    name: "TPB SMA N 2 Ngaglik 1",
    coords: [-7.783878, 110.389848],
  },
  {
    name: "TPB SMA N 2 Ngaglik 2",
    coords: [-7.783871, 110.389891],
  },
  {
    name: "TPB SMA N 5 Yogyakarta",
    coords: [-7.788007, 110.383511],
  },
  {
    name: "TPB SMK N 3 Yogyakarta",
    coords: [-7.783557, 110.383416],
  },
  {
    name: "TPB SMK N 5",
    coords: [-7.776118, 110.374172],
  },
  {
    name: "TPB SMK N Depok 1",
    coords: [-7.764312, 110.414745],
  },
  {
    name: "TPB SMK N Depok 2",
    coords: [-7.764314, 110.414793],
  },
  {
    name: "TPB SMK Seni 1",
    coords: [-7.771741, 110.368803],
  },
  {
    name: "TPB SMK Seni 2",
    coords: [-7.771734, 110.368842],
  },
  {
    name: "TPB SMK Tajem",
    coords: [-7.787189, 110.366374],
  },
  {
    name: "TPB SMP Kanisius 1",
    coords: [-7.789673, 110.366517],
  },
  {
    name: "TPB SMP Kanisius 2",
    coords: [-7.789681, 110.366547],
  },
  {
    name: "TPB SMP Muhammadiyah 3 1",
    coords: [-7.781631, 110.400478],
  },
  {
    name: "TPB SMP N 1 Yogyakarta",
    coords: [-7.783659, 110.37085],
  },
  {
    name: "TPB SMP N 11",
    coords: [-7.77708, 110.410556],
  },
  {
    name: "TPB SMP N 4 Depok",
    coords: [-7.774096, 110.406176],
  },
  {
    name: "TPB SMP N 4 Pakem 1",
    coords: [-7.808555, 110.429852],
  },
  {
    name: "TPB SMP N 4 Pakem 2",
    coords: [-7.808555, 110.429852],
  },
  {
    name: "TPB SMP N 6 Yogyakarta",
    coords: [-7.787155, 110.373202],
  },
  {
    name: "TPB SMP N 9 1",
    coords: [-7.764833, 110.399545],
  },
  {
    name: "TPB SMP N 9 2",
    coords: [-7.76483, 110.399591],
  },
  {
    name: "TPB SMP Negeri 2 Ngaglik 1",
    coords: [-7.788731, 110.390064],
  },
  {
    name: "TPB SMP Negeri 2 Ngaglik 2",
    coords: [-7.78874, 110.390097],
  },
  {
    name: "TPB Sosrowijayan",
    coords: [-7.793583, 110.366635],
  },
  {
    name: "TPB SPBU Dukuh 1",
    coords: [-7.760479, 110.368441],
  },
  {
    name: "TPB SPBU Dukuh 2",
    coords: [-7.760485, 110.368474],
  },
  {
    name: "TPB SPBU Kaliurang 1",
    coords: [-7.615653, 110.428049],
  },
  {
    name: "TPB SPBU Kaliurang 2",
    coords: [-7.615669, 110.428091],
  },
  {
    name: "TPB Stasiun Lempuyangan",
    coords: [-7.791465, 110.370765],
  },
  {
    name: "TPB STIE YKPN 1",
    coords: [-7.789274, 110.381545],
  },
  {
    name: "TPB STIE YKPN 2",
    coords: [-7.789268, 110.381589],
  },
  {
    name: "TPB Superindo Jakal 1",
    coords: [-7.737999, 110.399633],
  },
  {
    name: "TPB Superindo Jakal 2",
    coords: [-7.738003, 110.399689],
  },
  {
    name: "TPB Superindo Sonosewu",
    coords: [-7.778712, 110.365701],
  },
  {
    name: "TPB Suryotomo",
    coords: [-7.770919, 110.360992],
  },
  {
    name: "TPB Susteran Novisiat",
    coords: [-7.794522, 110.365174],
  },
  {
    name: "TPB Taman Makam Pahlawan",
    coords: [-7.795979, 110.367835],
  },
  {
    name: "TPB Taman Siswa 1",
    coords: [-7.787178, 110.358856],
  },
  {
    name: "TPB Taman Siswa 2",
    coords: [-7.787175, 110.358886],
  },
  {
    name: "TPB Tamantirto 1",
    coords: [-7.82744, 110.363236],
  },
  {
    name: "TPB Tamantirto 2",
    coords: [-7.827442, 110.363276],
  },
  {
    name: "TPB Tarumartani 1",
    coords: [-7.776678, 110.376446],
  },
  {
    name: "TPB Tarumartani 2",
    coords: [-7.77667, 110.376478],
  },
  {
    name: "TPB Tegal Gendu 2",
    coords: [-7.741781, 110.434111],
  },
  {
    name: "TPB Tegal Turi 1",
    coords: [-7.716546, 110.373104],
  },
  {
    name: "TPB Tegal Turi 2",
    coords: [-7.716541, 110.37315],
  },
  {
    name: "TPB Tejokusuman",
    coords: [-7.783894, 110.371689],
  },
  {
    name: "TPB Teknik UGM 1",
    coords: [-7.771096, 110.378696],
  },
  {
    name: "TPB Teknik UGM 2",
    coords: [-7.771088, 110.378744],
  },
  {
    name: "TPB Teras 2",
    coords: [-7.778807, 110.367865],
  },
  {
    name: "TPB Terminal Bangunan",
    coords: [-7.780809, 110.368472],
  },
  {
    name: "TPB Terminal Pakem",
    coords: [-7.753394, 110.42847],
  },
  {
    name: "TPB Terminal Prambanan",
    coords: [-7.75292, 110.492166],
  },
  {
    name: "TPB TNI AL 1",
    coords: [-7.828769, 110.366414],
  },
  {
    name: "TPB TNI AL 2",
    coords: [-7.828777, 110.366447],
  },
  {
    name: "TPB Tugu Adipura Bantul",
    coords: [-7.894652, 110.335627],
  },
  {
    name: "TPB TVRI",
    coords: [-7.789697, 110.374651],
  },
  {
    name: "TPB UAD",
    coords: [-7.790239, 110.411746],
  },
  {
    name: "TPB UAD Ringroad Selatan 1",
    coords: [-7.787956, 110.411793],
  },
  {
    name: "TPB UAD Ringroad Selatan 2",
    coords: [-7.787966, 110.411826],
  },
  {
    name: "TPB UII 1",
    coords: [-7.777046, 110.41285],
  },
  {
    name: "TPB UII 2",
    coords: [-7.777042, 110.412899],
  },
  {
    name: "TPB UIN Sunan Kalijaga 1",
    coords: [-7.771168, 110.377891],
  },
  {
    name: "TPB UIN Sunan Kalijaga 2",
    coords: [-7.771161, 110.377939],
  },
  {
    name: "TPB UMY 1",
    coords: [-7.762848, 110.366774],
  },
  {
    name: "TPB UMY 2",
    coords: [-7.762841, 110.366821],
  },
  {
    name: "TPB Universitas Aisyiyah",
    coords: [-7.767906, 110.399637],
  },
  {
    name: "TPB Universitas Alma Ata",
    coords: [-7.770412, 110.396423],
  },
  {
    name: "TPB UNU Yogyakarta",
    coords: [-7.79252, 110.401951],
  },
  {
    name: "TPB UNY (Colombo)",
    coords: [-7.786536, 110.40152],
  },
  {
    name: "TPB UNY Gejayan",
    coords: [-7.782933, 110.389732],
  },
  {
    name: "TPB UPY",
    coords: [-7.798866, 110.378768],
  },
  {
    name: "TPB UTY Glagahsari",
    coords: [-7.748973, 110.351819],
  },
  {
    name: "TPB UTY Ringroad Utara 1",
    coords: [-7.751835, 110.365043],
  },
  {
    name: "TPB UTY Ringroad Utara 2",
    coords: [-7.751836, 110.365087],
  },
  {
    name: "TPB Veteran",
    coords: [-7.783949, 110.363436],
  },
  {
    name: "TPB Vokasi UGM 2",
    coords: [-7.780341, 110.37353],
  },
  {
    name: "TPB Wedangan Kampoeng 1",
    coords: [-7.817915, 110.358032],
  },
  {
    name: "TPB Wedangan Kampoeng 2",
    coords: [-7.817923, 110.358065],
  },
  {
    name: "TPB Westlake 1",
    coords: [-7.78367, 110.40024],
  },
  {
    name: "TPB Westlake 2",
    coords: [-7.783671, 110.40028],
  },
  {
    name: "TPB Widya Wiwaha 1",
    coords: [-7.782836, 110.386862],
  },
  {
    name: "TPB Widya Wiwaha 2",
    coords: [-7.782842, 110.386895],
  },
  {
    name: "TPB Wirogunan 1",
    coords: [-7.790963, 110.36053],
  },
  {
    name: "TPB Wirogunan 2",
    coords: [-7.790957, 110.360577],
  },
  {
    name: "TPB Wirosaban",
    coords: [-7.790004, 110.395948],
  },
  {
    name: "TPB Wisma Martha 1",
    coords: [-7.780335, 110.40875],
  },
  {
    name: "TPB Wisma Martha 2",
    coords: [-7.78034, 110.408785],
  },
  {
    name: "TPB Wonocatur",
    coords: [-7.831791, 110.388756],
  },
  {
    name: "TPB Yakkum 1",
    coords: [-7.784775, 110.363153],
  },
  {
    name: "TPB Yakkum 2",
    coords: [-7.784781, 110.363195],
  },
];

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
