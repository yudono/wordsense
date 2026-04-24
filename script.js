// =====================================================
// DATA: Cluster semantik (Indonesian Nouns Only)
// =====================================================
const CLUSTERS = {
  cosmic: {
    words: ["matahari","surya","fajar","senja","ufuk","pelangi","malam","komet","galaksi","planet","konstelasi","nebula","asteroid","meteor","langit","bintang","bulan","candra","purnama","hilal","rembulan","angkasa","antariksa","roket","satelit","astronaut","merkurius","venus","mars","jupiter","saturnus","uranus","neptunus","pluto","teropong","observatorium","planetarium","supernova","cakrawala","khatulistiwa","kutub","gravitasi","orbit","rotasi","revolusi","atmosfer","ozon","radiasi","massa","energi","partikel","gelombang"]
  },
  water: {
    words: ["air","laut","sungai","danau","es","uap","hujan","ombak","gelombang","dermaga","perahu","sampan","kapal","banjir","embun","kabut","salju","telaga","rawa","sumur","pompa","keran","kolam","waduk","bendungan","irigasi","tsunami","badai","topan","akuarium","saringan","dispenser","samudera","arus","air terjun","kanal","selokan","parit","jangkar","pelabuhan","pantai","pasir","kerang","rumput laut","ikan","paus","lumba-lumba","hiu","gurita","cumi","udang","kepiting","ubur-ubur","kapal selam","kano","rakit","kapal feri"]
  },
  animal: {
    words: ["kucing","anjing","burung","ikan","ayam","sapi","kambing","babi","kerbau","kuda","gajah","harimau","singa","monyet","ular","buaya","tikus","kelelawar","kupu-kupu","lebah","semut","lalat","nyamuk","jangkrik","katak","kura-kura","penyu","lumba-lumba","paus","hiu","udang","kepiting","cumi","gurita","merpati","elang","beo","merak","penguin","rubah","serigala","rusa","koala","panda","beruang","zebra","jerapah","kelinci","hamster","iguana","biawak","tokek","cicak","kodok","belalang","unta","flamingo","bangau","kakaktua","murai","orangutan","gorila","badak","banteng","kijang","landak","musang","tupai","domba","bekek","angsa","gagak","jalak","pipit"]
  },
  food: {
    words: ["nasi","mie","ayam","daging","sayur","buah","roti","kue","gorengan","sate","bakso","rendang","soto","martabak","tempe","tahu","telur","susu","kopi","teh","jus","es krim","bumbu","bawang","cabai","merica","garam","gula","minyak","kecap","saus","mentega","tepung","beras","jagung","kentang","wortel","tomat","bayam","kangkung","selada","apel","mangga","jeruk","durian","rambutan","manggis","semangka","melon","pisang","stroberi","anggur","salak","nanas","jambu","duku","kelapa","avokad","cokelat","permen","kacang","keripik","biskuit","sereal","yogurt","keju","burger","pizza","pasta","sushi","steak","sup","bubur","opor","rawon","pecel","lontong","ketupat","kerupuk","siomay","batagor","seblak","piring","sendok","garpu","mangkok","gelas","cangkir","teko","panci","wajan","pisau","kompor","kulkas"]
  },
  house: {
    words: ["rumah","gedung","kantor","sekolah","masjid","gereja","toko","pasar","mall","hotel","rumah sakit","pabrik","gudang","garasi","dapur","kamar","ruang tamu","kamar mandi","atap","dinding","lantai","pintu","jendela","pagar","taman","halaman","teras","loteng","lift","tangga","koridor","meja","kursi","lemari","kasur","bantal","selimut","rak","lampu","kipas","ac","televisi","karpet","gorden","cermin","wastafel","shower","toilet","genteng","keramik","semen","bata","kayu","besi","baja","kaca","plafon","kunci","apartemen","villa","candi","menara","tanah","sofa","lemari pakaian","mesin cuci","kulkas","kompor","oven","jemuran"]
  },
  body: {
    words: ["kepala","rambut","mata","hidung","mulut","telinga","leher","bahu","tangan","jari","dada","perut","punggung","pinggang","paha","betis","kaki","kulit","tulang","otot","darah","jantung","paru-paru","otak","hati","ginjal","nadi","obat","dokter","perawat","apotek","resep","vitamin","virus","bakteri","infeksi","alergi","luka","jerawat","memar","kuku","bibir","gigi","lidah","dagu","pipi","dahi","usus","lambung","empedu","saraf","sel","hormon","protein","lemak","karbohidrat"]
  },
  emotion: {
    words: ["cinta","kasih sayang","kebahagiaan","kegembiraan","kesedihan","kemarahan","ketakutan","kecemasan","kekhawatiran","kebingungan","kejutan","rasa malu","kebanggaan","iri hati","kebencian","kejengkelan","keberanian","kesabaran","harapan","kekecewaan","keresahan","kegelisahan","ketenangan","kedamaian","rasa syukur","kerinduan","obsesi","emosi","perasaan","jiwa","mental","trauma","stres","depresi","fobia","empati","simpati","kenangan","nostalgia","memori","mimpi","inspirasi","ambisi","impian","doa","rasa kagum","rasa muak","rasa jijik","frustrasi","putus asa","kepercayaan diri","keyakinan","keraguan"]
  },
  family: {
    words: ["ayah","ibu","bapak","mama","papa","anak","saudara","kakak","adik","paman","bibi","kakek","nenek","buyut","cucu","keponakan","sepupu","ipar","menantu","mertua","keluarga","suami","istri","pacar","teman","sahabat","tetangga","rekan","komunitas","masyarakat","negara","bangsa","warga","rakyat","pernikahan","perceraian","tunangan","lamaran","mahar","resepsi","warisan","orang tua","keturunan","silsilah","leluhur"]
  },
  education: {
    words: ["sekolah","kuliah","universitas","kampus","guru","dosen","murid","siswa","mahasiswa","kelas","pelajaran","matematika","fisika","kimia","biologi","bahasa","sejarah","geografi","ekonomi","sosiologi","ujian","tes","rapor","nilai","skor","prestasi","beasiswa","ijazah","wisuda","toga","buku","pensil","pulpen","penghapus","penggaris","tas","perpustakaan","laboratorium","tugas","makalah","skripsi","tesis","disertasi","penelitian","riset","kurikulum","diskusi","presentasi","seminar","bengkel","jurnal","artikel","referensi","sarjana","magister","doktor","profesor","rektor","dekan","jurusan"]
  },
  nature: {
    words: ["pohon","kayu","daun","batang","akar","bunga","rumput","hutan","gunung","lembah","bukit","tebing","jurang","laut","pantai","pulau","tanah","pasir","batu","kerikil","lereng","puncak","kawah","gunung berapi","letusan","lava","gempa","tanah longsor","kebakaran","konservasi","taman nasional","ekosistem","habitat","flora","fauna","savana","gurun","oasis","terumbu karang","mangrove","rawa","danau","sungai","air terjun","gletser","iklim","polusi","limbah","daur ulang"]
  },
  technology: {
    words: ["komputer","laptop","hp","telepon","internet","wifi","aplikasi","situs","website","media sosial","email","kata sandi","akun","video","foto","kamera","layar","monitor","papan ketik","tetikus","pengeras suara","mikrofon","pengisi daya","baterai","memori","prosesor","perangkat lunak","perangkat keras","sistem operasi","kode","pemrograman","pengembang","peretas","virus","server","basis data","robot","drone","pencetak","kabel","jaringan","data","algoritma"]
  },
  transport: {
    words: ["mobil","motor","sepeda","bus","kereta","pesawat","kapal","helikopter","taksi","ojek","kendaraan","roda","ban","mesin","bensin","solar","rem","klakson","lampu","kaca spion","setir","sabuk pengaman","helm","jalan","jembatan","terowongan","persimpangan","rambu","parkir","garasi","bengkel","suku cadang","knalpot","radiator","tiket","paspor","bandara","pelabuhan","terminal","stasiun"]
  },
  music: {
    words: ["musik","lagu","melodi","irama","nada","harmoni","tempo","not","lirik","syair","band","grup","penyanyi","gitar","bass","drum","piano","biola","seruling","gamelan","angklung","kendang","gong","konser","festival","studio","album","kaset","piringan hitam","radio","pengeras suara","mikrofon"]
  },
  sport: {
    words: ["olahraga","sepak bola","basket","voli","bulu tangkis","tenis","renang","atletik","lari","maraton","tinju","gulat","beladiri","silat","karate","taekwondo","panjat tebing","selancar","sepeda","balap","senam","yoga","pusat kebugaran","latihan","pelatih","atlet","pemain","tim","pertandingan","kompetisi","turnamen","piala","medali","juara","wasit","stadion","lapangan","gawang","jaring","raket"]
  },
  art: {
    words: ["seni","lukisan","gambar","sketsa","karya","kanvas","cat","kuas","pensil","patung","ukiran","keramik","porselen","mosaik","kolase","fotografi","lensa","galeri","museum","pameran","seniman","pelukis","pematung","fotografer","desainer","kurator","kolektor","estetika","warna","ilustrasi","komik","kartun","animasi","inspirasi"]
  },
  work: {
    words: ["kerja","pekerjaan","profesi","karir","gaji","upah","penghasilan","kantor","perusahaan","departemen","jabatan","manajer","direktur","staf","karyawan","buruh","kontrak","magang","lamaran","wawancara","rekrutmen","tunjangan","bonus","lembur","rapat","presentasi","tenggat waktu","proyek","tugas","data"]
  },
  religion: {
    words: ["agama","tuhan","nabi","rasul","malaikat","surga","neraka","doa","ibadah","puasa","zakat","sedekah","haji","umrah","masjid","gereja","pura","vihara","kelenteng","kitab suci","iman","dosa","pahala","ampunan","syukur","sabar","ulama","pendeta","biksu","imam","umat","ritual","khotbah","perayaan"]
  },
  color_shape: {
    words: ["merah","biru","kuning","hijau","ungu","jingga","merah muda","cokelat","hitam","putih","abu-abu","emas","perak","warna","lingkaran","persegi","segitiga","persegi panjang","belah ketupat","trapesium","oval","bintang","bentuk","garis","titik","sudut","kubus","balok","bola","tabung","kerucut","piramida"]
  },
  time: {
    words: ["waktu","detik","menit","jam","hari","minggu","bulan","tahun","dekade","abad","milenium","pagi","siang","sore","malam","fajar","senja","kemarin","hari ini","besok","lusa","sekarang","masa depan","masa lalu","sejarah","kalender","tanggal","januari","februari","maret","april","mei","juni","juli","agustus","september","oktober","november","desember","senin","selasa","rabu","kamis","jumat","sabtu","minggu","musim"]
  },
  money: {
    words: ["uang","rupiah","koin","uang kertas","pendapatan","gaji","upah","komisi","bonus","hadiah","beasiswa","pinjaman","hutang","aset","kekayaan","tabungan","investasi","saham","emas","properti","laba","rugi","bunga","pajak","anggaran","bank","dompet","brankas","harga","diskon","voucher","modal","dompet digital"]
  },
  weather: {
    words: ["cuaca","suhu","panas","dingin","kelembaban","hujan","badai","angin","petir","guntur","awan","kabut","embun","pelangi","matahari","terik","musim","kemarau","bencana","banjir","tanah longsor","kekeringan","prakiraan"]
  },
  clothing: {
    words: ["baju","pakaian","kaos","kemeja","gaun","rok","celana","jins","jaket","mantel","jas","batik","kebaya","sarung","kain","jas hujan","selimut","syal","sarung tangan","kaos kaki","sepatu","sandal","sepatu bot","topi","gelang","kalung","cincin","anting","tas","ransel","dompet","sabuk","dasi","kancing","resleting","saku","kerah","seragam"]
  },
  science_math: {
    words: ["sains","matematika","fisika","kimia","biologi","astronomi","geologi","ilmu","teori","rumus","angka","variabel","fungsi","grafik","geometri","statistik","peluang","data","logika","hipotesis","eksperimen","laboratorium","elemen","atom","molekul","senyawa","reaksi","energi","gaya","gravitasi","magnet","listrik","cahaya","bunyi","panas","suhu","sel","dna","gen","evolusi","ekosistem","spesies","bakteri","virus","jamur","tanaman","hewan","manusia"]
  },
  geography: {
    words: ["geografi","peta","bumi","dunia","benua","negara","bangsa","ibu kota","kota","desa","wilayah","daerah","provinsi","kabupaten","perbatasan","pulau","samudera","teluk","selat","semenanjung","gunung","lembah","sungai","danau","rawa","hutan","gurun","iklim","ekuator","kompas","populasi","penduduk","migrasi"]
  },
  history_politics: {
    words: ["sejarah","politik","pemerintahan","negara","bangsa","rakyat","warga","masyarakat","hukum","undang-undang","kebijakan","kekuasaan","pemimpin","presiden","menteri","gubernur","raja","ratu","kaisar","sultan","kerajaan","republik","demokrasi","ideologi","pemilu","partai","parlemen","kabinet","birokrasi","diplomasi","perang","konflik","damai","perjanjian","revolusi","kemerdekaan","proklamasi","pahlawan","tokoh","peristiwa","monumen","museum"]
  },
  hobbies: {
    words: ["hobi","kegemaran","hiburan","permainan","olahraga","seni","musik","buku","novel","komik","puisi","lukisan","sketsa","fotografi","kamera","film","teater","tarian","kuliner","taman","tanaman","ikan","gunung","tenda","sepeda","catur","kartu","koleksi","kerajinan","wisata","liburan"]
  },
  tools_hardware: {
    words: ["alat","perkakas","mesin","peralatan","bengkel","konstruksi","bangunan","paku","palu","obeng","sekrup","baut","mur","kunci","tang","gergaji","bor","penggaris","meteran","amplas","lem","cat","kuas","kabel","listrik","sakelar","steker","lampu","baterai","generator","dinamo","motor","pipa","keran","katup","selang","pompa","tangki","besi","baja","kayu","keramik"]
  },
  law_crime: {
    words: ["hukum","undang-undang","keadilan","pengadilan","hakim","jaksa","pengacara","saksi","tersangka","terdakwa","narapidana","penjara","sel","kriminal","kejahatan","pencurian","perampokan","pembunuhan","korupsi","suap","penipuan","polisi","detektif","borgol","patroli","tilang","sidang","vonis","hukuman","denda","bukti","laporan"]
  },
  mythology_folklore: {
    words: ["mitologi","mitos","legenda","dongeng","cerita rakyat","dewa","dewi","tuhan","bidadari","raksasa","peri","naga","garuda","hantu","setan","iblis","jin","surga","neraka","sihir","kutukan","mantra","jimat","pusaka","keris","pedang"]
  },
  advanced_emotions: {
    words: ["kesedihan","kegembiraan","ketakutan","kemarahan","kecemasan","kebanggaan","kekecewaan","kerinduan","penyesalan","kecemburuan","kepercayaan","kedamaian","ketenangan","kebingungan","kegelisahan","kepuasan","kejutan","rasa syukur","rasa hormat","pengampunan","kasih sayang"]
  }
};

const EXTRA_WORDS = ["kursi","meja","buku","pena","kertas","lampu","pintu","jendela","lantai","atap","dinding","tas","sepatu","baju","celana","topi","kunci","jam","dompet","hp","kabel","botol","gelas","piring","sendok","garpu","pisau","wajan","panci","kompor","sabun","sikat","handuk","cermin","sisir","bantal","guling","kasur","selimut","lemari","rak","sofa","karpet","gorden","kipas","ac","tv","radio","kulkas","mesin cuci","setrika","payung","sepeda","motor","mobil","helm","ban","rem","gas","stang","jok","knalpot","mesin","oli","bensin","jalan","trotoar","pagar","pohon","bunga","rumput","tanah","pasir","batu","air","api","angin","awan","hujan","panas","dingin","terang","gelap","pagi","siang","sore","malam","hari","minggu","bulan","tahun","orang","pria","wanita","anak","bayi","kakak","adik","ayah","ibu","kakek","nenek","paman","bibi","sepupu","teman","sahabat","guru","murid","dokter","perawat","polisi","tentara","petani","nelayan","pedagang","buruh","supir","karyawan","bos","raja","ratu","presiden","menteri","rakyat","warga","bangsa","negara","kota","desa","kantor","sekolah","pasar","mall","hotel","bank","masjid","gereja","pura","vihara","hutan","gunung","pantai","laut","sungai","danau","kebun","sawah","ladang","kandang","hewan","binatang","kucing","anjing","burung","ayam","sapi","kambing","kuda","gajah","ikan","ular","buaya","monyet","tikus","nyamuk","lalat","semut","lebah","laba-laba","kupu-kupu","nasi","roti","mie","daging","telur","sayur","buah","apel","pisang","jeruk","mangga","tomat","cabai","bawang","garam","gula","kopi","teh","susu","jus","es","kue","permen","cokelat","obat","vitamin","darah","tulang","otot","kulit","rambut","mata","hidung","mulut","telinga","tangan","kaki","perut","dada","jantung","paru-paru","otak","hati","jiwa","nyawa","akal","ilmu","pena","pensil","penggaris","penghapus","seragam","rapor","ijazah","uang","rupiah","koin","tabungan","hutang","modal","laba","rugi","harga","diskon","tiket","kartu","surat","foto","gambar","lukisan","patung","musik","lagu","nada","suara","bunyi","kata","bahasa","cerita","novel","komik","puisi","doa","mantra","sihir","hantu","setan","malaikat","tuhan","agama","iman","dosa","pahala","surga","neraka","kematian","kelahiran","hidup","mati","waktu","detik","menit","jam","tanggal","mimpi","angan","harapan","cinta","benci","senang","sedih","marah","takut","malu","bangga","sabar","ikhlas","syukur"];

// =====================================================
// GAME STATE
// =====================================================
const state = {
  targetWord: '',
  targetCluster: '',
  totalRanked: 0,
  guesses: [],       // [{word, rank, isNew}]
  guessedSet: new Set(),
  won: false,
  puzzleId: 1
};

// Cache cluster data per puzzle
let cachedCluster = null;
let cachedRankedMap = null; // Changed to Map for O(1) lookups
let cachedRankedArr = null;

// =====================================================
// UTILITAS
// =====================================================

// Seedable random
function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Normalisasi kata
function normalize(word) {
  return word.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

// Hash string sederhana
function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

// =====================================================
// RANKING SYSTEM
// =====================================================

function initPuzzle(id) {
  // Gunakan hash tanggal sebagai seed agar puzzle harian konsisten
  const today = new Date();
  const seed = id || (today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate());
  const rng = seededRandom(seed);

  // Pilih cluster acak
  const clusterKeys = Object.keys(CLUSTERS);
  const ci = Math.floor(rng() * clusterKeys.length);
  const clusterName = clusterKeys[ci];
  const cluster = CLUSTERS[clusterName];

  // Dedup + filter kata valid
  const seen = new Set();
  const validWords = [];
  for (const w of cluster.words) {
    const nw = normalize(w);
    if (nw.length >= 2 && !seen.has(nw)) {
      seen.add(nw);
      validWords.push(nw);
    }
  }

  // Pilih target
  const ti = Math.floor(rng() * validWords.length);
  const target = validWords[ti];

  // Shuffle ranking dalam cluster
  for (let i = validWords.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [validWords[i], validWords[j]] = [validWords[j], validWords[i]];
  }

  // Bangun ranked array
  const ranked = [];
  for (let i = 0; i < validWords.length; i++) {
    if (validWords[i] === target) {
      ranked.push({ word: target, rank: 1 });
    } else {
      ranked.push({ word: validWords[i], rank: i + 2 });
    }
  }

  // Tambahkan kata dari cluster lain
  const otherWords = new Set();
  for (const [key, cl] of Object.entries(CLUSTERS)) {
    if (key === clusterName) continue;
    for (const w of cl.words) {
      const nw = normalize(w);
      if (nw.length >= 2 && !seen.has(nw)) {
        seen.add(nw);
        otherWords.add(nw);
      }
    }
  }
  let baseRank = ranked.length + 1;
  const otherArr = [...otherWords];
  for (let i = otherArr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [otherArr[i], otherArr[j]] = [otherArr[j], otherArr[i]];
  }
  for (const w of otherArr) {
    ranked.push({ word: w, rank: baseRank++ });
  }

  // Tambahkan EXTRA_WORDS
  const extraSeen = new Set();
  for (const w of EXTRA_WORDS) {
    const nw = normalize(w);
    if (nw.length >= 2 && !seen.has(nw)) {
      seen.add(nw);
      extraSeen.add(nw);
    }
  }
  const extraArr = [...extraSeen];
  for (let i = extraArr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [extraArr[i], extraArr[j]] = [extraArr[j], extraArr[i]];
  }
  for (const w of extraArr) {
    ranked.push({ word: w, rank: baseRank++ });
  }

  // Bangun ranked Map untuk lookup cepat
  cachedRankedMap = new Map();
  for (const r of ranked) {
    cachedRankedMap.set(r.word, r.rank);
  }
  cachedRankedArr = ranked;
  cachedCluster = clusterName;

  return { target, clusterName, totalRanked: ranked.length };
}

function getRank(word) {
  const nw = normalize(word);
  if (!nw || nw.length < 2) return null;

  if (!cachedRankedMap) return null;

  if (cachedRankedMap.has(nw)) {
    return cachedRankedMap.get(nw);
  }

  // Kata baru yang belum ada di database — beri ranking jauh
  return state.totalRanked + hashStr(nw) % 5000 + 100;
}

// =====================================================
// WARNA BERDASARKAN RANKING
// =====================================================

function getColor(rank) {
  if (rank === 1) return { bg: 'rgba(245,158,11,.15)', border: '#F59E0B', text: '#F59E0B', bar: '#F59E0B' };
  if (rank <= 10) return { bg: 'rgba(34,197,94,.12)', border: '#22C55E', text: '#22C55E', bar: '#22C55E' };
  if (rank <= 50) return { bg: 'rgba(34,197,94,.08)', border: 'rgba(34,197,94,.5)', text: '#4ADE80', bar: '#4ADE80' };
  if (rank <= 200) return { bg: 'rgba(234,179,8,.08)', border: 'rgba(234,179,8,.5)', text: '#FACC15', bar: '#EAB308' };
  if (rank <= 500) return { bg: 'rgba(249,115,22,.08)', border: 'rgba(249,115,22,.5)', text: '#FB923C', bar: '#F97316' };
  return { bg: 'rgba(239,68,68,.06)', border: 'rgba(239,68,68,.3)', text: '#F87171', bar: '#EF4444' };
}

function getEmoji(rank) {
  if (rank === 1) return '🟨';
  if (rank <= 10) return '🟩';
  if (rank <= 200) return '🟨';
  return '🟥';
}

// =====================================================
// UI RENDERING
// =====================================================

function renderGuess(guess, idx) {
  const c = getColor(guess.rank);
  const maxBar = 100;
  const barW = Math.max(3, Math.min(maxBar, (maxBar / Math.sqrt(guess.rank)) * 10));
  const isNew = guess.isNew;

  const row = document.createElement('div');
  row.className = `guess-row rounded-xl px-3 py-2.5 flex items-center gap-3 ${isNew ? 'guess-new' : ''}`;
  row.style.cssText = `background:${c.bg};border:1px solid ${c.border}30;opacity:0;`;

  // Kata
  const wordEl = document.createElement('span');
  wordEl.className = 'font-display font-semibold text-sm flex-1 truncate';
  wordEl.style.color = c.text;
  wordEl.textContent = guess.word;

  // Progress bar
  const barWrap = document.createElement('div');
  barWrap.className = 'flex-1 max-w-[140px] h-2 rounded-full overflow-hidden';
  barWrap.style.background = 'rgba(255,255,255,.04)';

  const bar = document.createElement('div');
  bar.className = 'h-full rounded-full bar-anim';
  bar.style.cssText = `background:${c.bar};--bw:${barW}%;width:0;`;

  barWrap.appendChild(bar);

  // Ranking
  const rankEl = document.createElement('span');
  rankEl.className = 'font-display font-bold text-sm tabular-nums shrink-0';
  rankEl.style.color = guess.rank === 1 ? '#F59E0B' : 'var(--muted)';
  rankEl.textContent = '#' + guess.rank;

  row.appendChild(wordEl);
  row.appendChild(barWrap);
  row.appendChild(rankEl);

  return row;
}

function renderAllGuesses() {
  const container = document.getElementById('guessList');
  const empty = document.getElementById('emptyState');

  // Sort: ranking terkecil dulu, tapi yang paling baru (isNew) naik
  const sorted = [...state.guesses].sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank;
    return a.isNew ? -1 : 1;
  });

  // Hapus semua kecuali emptyState
  const rows = container.querySelectorAll('.guess-row');
  rows.forEach(r => r.remove());

  if (sorted.length > 0 && empty) empty.style.display = 'none';
  else if (empty) empty.style.display = '';

  for (const g of sorted) {
    container.appendChild(renderGuess(g));
  }

  // Scroll ke atas untuk lihat ranking terbaik
  container.scrollTop = 0;
}

function updateStats() {
  document.getElementById('guessCount').textContent = state.guesses.length;
  document.getElementById('puzzleNum').textContent = state.puzzleId;

  // Tampilkan hint jika sudah >3 tebakan
  const hintWrap = document.getElementById('hintWrap');
  const hintChip = document.getElementById('hintChip');
  if (state.guesses.length >= 3 && !state.won) {
    hintWrap.classList.remove('hidden');
    // Cari tebakan terbaik yang bukan jawaban
    const best = state.guesses
      .filter(g => g.rank > 1)
      .sort((a, b) => a.rank - b.rank)[0];
    if (best && best.rank <= 500) {
      hintChip.textContent = 'Dekat! Ikuti arah ini';
    } else if (best && best.rank <= 1000) {
      hintChip.textContent = 'Mulai hangat...';
    } else {
      hintChip.textContent = 'Coba kategori lain';
    }
  } else {
    hintWrap.classList.add('hidden');
  }
}

// =====================================================
// TOAST
// =====================================================

function showToast(msg, type = 'info') {
  const box = document.getElementById('toastBox');
  const t = document.createElement('div');
  const colors = {
    info: 'background:var(--card);border:1px solid var(--border);color:var(--text)',
    success: 'background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.3);color:#22C55E',
    error: 'background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.3);color:#EF4444',
    warn: 'background:rgba(234,179,8,.15);border:1px solid rgba(234,179,8,.3);color:#EAB308'
  };
  t.className = 'toast-in px-4 py-2 rounded-xl text-sm font-body shadow-lg';
  t.style.cssText = colors[type] || colors.info;
  t.textContent = msg;
  box.appendChild(t);

  setTimeout(() => {
    t.className = t.className.replace('toast-in', 'toast-out');
    setTimeout(() => t.remove(), 300);
  }, 2200);
}

// =====================================================
// CONFETTI
// =====================================================

function spawnConfetti() {
  const colors = ['#F59E0B','#22C55E','#EAB308','#F97316','#EF4444','#EC4899','#8B5CF6','#06B6D4'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.cssText = `
      left:${Math.random()*100}vw;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      width:${6+Math.random()*8}px;
      height:${6+Math.random()*8}px;
      border-radius:${Math.random()>.5?'50%':'2px'};
      --cd:${1.5+Math.random()*2}s;
      --cdl:${Math.random()*.8}s;
    `;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// =====================================================
// MODAL
// =====================================================

function showModal(id) {
  const m = document.getElementById(id);
  m.classList.remove('hidden');
  // Trap focus
  const focusable = m.querySelectorAll('button, [tabindex]');
  if (focusable.length) focusable[0].focus();
}

function hideModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// =====================================================
// SHARE
// =====================================================

function shareResult() {
  const sorted = [...state.guesses].sort((a, b) => a.isNew ? -1 : 1);
  let text = `I played Contexto Indonesia #${state.puzzleId} and got it in ${state.guesses.length} guesses.\n\n`;
  for (const g of sorted) {
    text += getEmoji(g.rank) + ' ' + g.rank + '\n';
  }
  text += '\nCoba mainin: contexto.me';

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Disalin ke clipboard!', 'success');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;left:-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast('Disalin ke clipboard!', 'success');
  } catch {
    showToast('Gagal menyalin', 'error');
  }
  document.body.removeChild(ta);
}

// =====================================================
// GAME LOGIC
// =====================================================

function makeGuess(rawWord) {
  if (state.won) return;

  const word = normalize(rawWord);
  if (!word || word.length < 2) {
    showToast('Kata terlalu pendek (min. 2 huruf)', 'warn');
    return;
  }

  if (state.guessedSet.has(word)) {
    showToast('Sudah pernah ditebak!', 'warn');
    return;
  }

  const rank = getRank(word);
  if (rank === null) {
    showToast('Kata tidak dikenali', 'error');
    return;
  }

  state.guessedSet.add(word);

  // Tandai tebakan sebelumnya bukan baru
  for (const g of state.guesses) g.isNew = false;

  state.guesses.push({ word, rank, isNew: true });

  renderAllGuesses();
  updateStats();

  // Cek menang
  if (rank === 1) {
    state.won = true;
    setTimeout(() => {
      spawnConfetti();
      document.getElementById('winWord').textContent = word;
      document.getElementById('winNum').textContent = state.guesses.length;
      showModal('winModal');
      document.getElementById('shareBtn').classList.remove('hidden');
      document.getElementById('shareBtn').style.display = 'flex';
      document.getElementById('hintWrap').classList.add('hidden');
    }, 400);
  }

  // Clear input
  document.getElementById('guessInput').value = '';
  document.getElementById('guessInput').focus();
}

function startNewGame(customId) {
  const id = customId || (Date.now() % 10000);
  const puzzle = initPuzzle(id);

  state.targetWord = puzzle.target;
  state.targetCluster = puzzle.clusterName;
  state.totalRanked = puzzle.totalRanked;
  state.guesses = [];
  state.guessedSet = new Set();
  state.won = false;
  state.puzzleId = customId || Math.floor(Math.random() * 999) + 1;

  // Reset UI
  document.getElementById('guessList').innerHTML = '';
  const empty = document.getElementById('emptyState');
  if (empty) {
    document.getElementById('guessList').appendChild(empty);
    empty.style.display = '';
  }
  document.getElementById('guessInput').value = '';
  document.getElementById('shareBtn').classList.add('hidden');
  document.getElementById('shareBtn').style.display = '';
  document.getElementById('hintWrap').classList.add('hidden');
  hideModal('winModal');

  updateStats();

  console.log('%c[DEBUG] Jawaban: ' + puzzle.target + ' (Cluster: ' + puzzle.clusterName + ')', 'color:#F59E0B;font-weight:bold');
}

// =====================================================
// EVENT LISTENERS
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  // Mulai game
  startNewGame();

  const input = document.getElementById('guessInput');
  const guessBtn = document.getElementById('guessBtn');

  // Tombol tebak
  guessBtn.addEventListener('click', () => makeGuess(input.value));

  // Enter key
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      makeGuess(input.value);
    }
  });

  // Tombol bantuan
  document.getElementById('helpBtn').addEventListener('click', () => showModal('helpModal'));

  // Tombol new game
  document.getElementById('newGameBtn').addEventListener('click', () => {
    startNewGame();
    showToast('Puzzle baru dimulai!', 'info');
  });

  // Tombol share (header)
  document.getElementById('shareBtn').addEventListener('click', shareResult);

  // Tombol share (modal menang)
  document.getElementById('winShareBtn').addEventListener('click', shareResult);

  // Tutup modal via data-close
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-close');
      hideModal(id);
    });
  });

  // Escape tutup modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ['winModal', 'helpModal'].forEach(id => hideModal(id));
    }
  });

  // Hover effect pada icon-btn
  document.querySelectorAll('.icon-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.borderColor = 'rgba(245,158,11,.3)';
      btn.style.color = 'var(--accent)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.borderColor = 'var(--border)';
      btn.style.color = 'var(--muted)';
    });
  });
});