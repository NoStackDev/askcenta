export async function fetchCities() {
  // const res = await fetch("https://www.askcenta.ng/api/cities", {
  //   method: "OPTIONS",
  //   next: {
  //     revalidate: 3600 * 6,
  //   },
  // });

  // if (!res.ok)
  //   throw new Error(
  //     "failed to fetch cities from https://www.askcenta.ng/api/cities"
  //   );

  // return res.json();
  return Promise.resolve(cities);
}

export async function fetchStates() {
  // const res = await fetch("https://askcenta.ng/api/states", {
  //   method: "OPTIONS",
  //   next: {
  //     revalidate: 3600 * 6,
  //   },
  // });

  // if (!res.ok)
  //   throw new Error(
  //     "failed to fetch states from https://askcenta.ng/api/states"
  //   );

  // return res.json();
  return Promise.resolve(states);
}

const cities = {
  data: [
    {
      id: 1,
      city: "Bamburu",
      state: "Abuja",
    },
    {
      id: 2,
      city: "Mararaba",
      state: "Abuja",
    },
    {
      id: 3,
      city: "Gwarinpa",
      state: "Abuja",
    },
    {
      id: 4,
      city: "Gwagwalada",
      state: "Abuja",
    },
    {
      id: 5,
      city: "Maitama",
      state: "Abuja",
    },
    {
      id: 6,
      city: "Garki",
      state: "Abuja",
    },
    {
      id: 7,
      city: "Asokoro",
      state: "Abuja",
    },
    {
      id: 8,
      city: "Karu",
      state: "Abuja",
    },
    {
      id: 9,
      city: "Kubwa",
      state: "Abuja",
    },
    {
      id: 10,
      city: "Kurunduma",
      state: "Abuja",
    },
    {
      id: 11,
      city: "Jikwoyi",
      state: "Abuja",
    },
    {
      id: 12,
      city: "Masaka",
      state: "Abuja",
    },
    {
      id: 13,
      city: "New Nyanya",
      state: "Abuja",
    },
    {
      id: 14,
      city: "Karki",
      state: "Abuja",
    },
    {
      id: 15,
      city: "Yoba",
      state: "Abuja",
    },
    {
      id: 16,
      city: "Zuba",
      state: "Abuja",
    },
    {
      id: 17,
      city: "Aba",
      state: "Abia",
    },
    {
      id: 18,
      city: "Abiriba",
      state: "Abia",
    },
    {
      id: 19,
      city: "Amaeke",
      state: "Abia",
    },
    {
      id: 20,
      city: "Arochukwu",
      state: "Abia",
    },
    {
      id: 21,
      city: "Bende",
      state: "Abia",
    },
    {
      id: 22,
      city: "Igbere",
      state: "Abia",
    },
    {
      id: 23,
      city: "Nbawsi",
      state: "Abia",
    },
    {
      id: 24,
      city: "Ohafia",
      state: "Abia",
    },
    {
      id: 25,
      city: "Omoba",
      state: "Abia",
    },
    {
      id: 26,
      city: "Ovim",
      state: "Abia",
    },
    {
      id: 27,
      city: "Umuahia",
      state: "Abia",
    },
    {
      id: 28,
      city: "Umudike",
      state: "Abia",
    },
    {
      id: 29,
      city: "Ganye",
      state: "Adamawa",
    },
    {
      id: 30,
      city: "Gombi",
      state: "Adamawa",
    },
    {
      id: 31,
      city: "Guyuk",
      state: "Adamawa",
    },
    {
      id: 32,
      city: "Jimeta",
      state: "Adamawa",
    },
    {
      id: 33,
      city: "Mayo Belwa",
      state: "Adamawa",
    },
    {
      id: 34,
      city: "Michika",
      state: "Adamawa",
    },
    {
      id: 35,
      city: "Mubi",
      state: "Adamawa",
    },
    {
      id: 36,
      city: "Numan",
      state: "Adamawa",
    },
    {
      id: 37,
      city: "Yola",
      state: "Adamawa",
    },
    {
      id: 38,
      city: "Eket",
      state: "Akwa Ibom",
    },
    {
      id: 39,
      city: "Etinan",
      state: "Akwa Ibom",
    },
    {
      id: 40,
      city: "Ibeno",
      state: "Akwa Ibom",
    },
    {
      id: 41,
      city: "Ibiono-Ibom",
      state: "Akwa Ibom",
    },
    {
      id: 42,
      city: "Ikot Abasi",
      state: "Akwa Ibom",
    },
    {
      id: 43,
      city: "Ikot Ekpene",
      state: "Akwa Ibom",
    },
    {
      id: 44,
      city: "Itu",
      state: "Akwa Ibom",
    },
    {
      id: 45,
      city: "Mkpat-Enin",
      state: "Akwa Ibom",
    },
    {
      id: 46,
      city: "Nsitubom",
      state: "Akwa Ibom",
    },
    {
      id: 47,
      city: "Oron",
      state: "Akwa Ibom",
    },
    {
      id: 48,
      city: "Ukanafun",
      state: "Akwa Ibom",
    },
    {
      id: 49,
      city: "Uyo",
      state: "Akwa Ibom",
    },
    {
      id: 50,
      city: "Abagana",
      state: "Anambra",
    },
    {
      id: 51,
      city: "Abba",
      state: "Anambra",
    },
    {
      id: 52,
      city: "Adazi Ani",
      state: "Anambra",
    },
    {
      id: 53,
      city: "Adazi Enu",
      state: "Anambra",
    },
    {
      id: 54,
      city: "Adazi Nnukwu",
      state: "Anambra",
    },
    {
      id: 55,
      city: "Aguleri",
      state: "Anambra",
    },
    {
      id: 56,
      city: "Agulu",
      state: "Anambra",
    },
    {
      id: 57,
      city: "Alor",
      state: "Anambra",
    },
    {
      id: 58,
      city: "Amaokpala",
      state: "Anambra",
    },
    {
      id: 59,
      city: "Amawbia",
      state: "Anambra",
    },
    {
      id: 60,
      city: "Atani",
      state: "Anambra",
    },
    {
      id: 61,
      city: "Awka",
      state: "Anambra",
    },
    {
      id: 62,
      city: "Awka-Etiti",
      state: "Anambra",
    },
    {
      id: 63,
      city: "Awkuzu",
      state: "Anambra",
    },
    {
      id: 64,
      city: "Ekwulobia",
      state: "Anambra",
    },
    {
      id: 65,
      city: "Enugwu-Agidi",
      state: "Anambra",
    },
    {
      id: 66,
      city: "Enugwu-Ukwu",
      state: "Anambra",
    },
    {
      id: 67,
      city: "Ichida",
      state: "Anambra",
    },
    {
      id: 68,
      city: "Igbo-Ukwu",
      state: "Anambra",
    },
    {
      id: 69,
      city: "Ihiala",
      state: "Anambra",
    },
    {
      id: 70,
      city: "Isuofia",
      state: "Anambra",
    },
    {
      id: 71,
      city: "Nanka",
      state: "Anambra",
    },
    {
      id: 72,
      city: "Nawfia",
      state: "Anambra",
    },
    {
      id: 73,
      city: "Nawgu",
      state: "Anambra",
    },
    {
      id: 74,
      city: "Neni",
      state: "Anambra",
    },
    {
      id: 75,
      city: "Nibo",
      state: "Anambra",
    },
    {
      id: 76,
      city: "Nkpor",
      state: "Anambra",
    },
    {
      id: 77,
      city: "Nnewi",
      state: "Anambra",
    },
    {
      id: 78,
      city: "Nnobi",
      state: "Anambra",
    },
    {
      id: 79,
      city: "Oba",
      state: "Anambra",
    },
    {
      id: 80,
      city: "Obosi",
      state: "Anambra",
    },
    {
      id: 81,
      city: "Ogidi",
      state: "Anambra",
    },
    {
      id: 82,
      city: "Okija",
      state: "Anambra",
    },
    {
      id: 83,
      city: "Oko",
      state: "Anambra",
    },
    {
      id: 84,
      city: "Onitsha",
      state: "Anambra",
    },
    {
      id: 85,
      city: "Oraifite",
      state: "Anambra",
    },
    {
      id: 86,
      city: "Otuocha",
      state: "Anambra",
    },
    {
      id: 87,
      city: "Ozubulu",
      state: "Anambra",
    },
    {
      id: 88,
      city: "Ukpo",
      state: "Anambra",
    },
    {
      id: 89,
      city: "Umuchu",
      state: "Anambra",
    },
    {
      id: 90,
      city: "Umudioka",
      state: "Anambra",
    },
    {
      id: 91,
      city: "Umuleri",
      state: "Anambra",
    },
    {
      id: 92,
      city: "Umunnachi",
      state: "Anambra",
    },
    {
      id: 93,
      city: "Umunya",
      state: "Anambra",
    },
    {
      id: 94,
      city: "Unubi",
      state: "Anambra",
    },
    {
      id: 95,
      city: "Alkaleri",
      state: "Bauchi",
    },
    {
      id: 96,
      city: "Azare",
      state: "Bauchi",
    },
    {
      id: 97,
      city: "Bauchi",
      state: "Bauchi",
    },
    {
      id: 98,
      city: "Dass",
      state: "Bauchi",
    },
    {
      id: 99,
      city: "Jamaare",
      state: "Bauchi",
    },
    {
      id: 100,
      city: "Misau",
      state: "Bauchi",
    },
    {
      id: 101,
      city: "Ningi",
      state: "Bauchi",
    },
    {
      id: 102,
      city: "Tafawa-Belawa",
      state: "Bauchi",
    },
    {
      id: 103,
      city: "Amasoma",
      state: "Bayelsa",
    },
    {
      id: 104,
      city: "Brass",
      state: "Bayelsa",
    },
    {
      id: 105,
      city: "Kaiama",
      state: "Bayelsa",
    },
    {
      id: 106,
      city: "Koluama",
      state: "Bayelsa",
    },
    {
      id: 107,
      city: "Nembe",
      state: "Bayelsa",
    },
    {
      id: 108,
      city: "Ogbia",
      state: "Bayelsa",
    },
    {
      id: 109,
      city: "Oloibiri",
      state: "Bayelsa",
    },
    {
      id: 110,
      city: "Opokuma",
      state: "Bayelsa",
    },
    {
      id: 111,
      city: "Oporama",
      state: "Bayelsa",
    },
    {
      id: 112,
      city: "Sagbama",
      state: "Bayelsa",
    },
    {
      id: 113,
      city: "Yenagoa",
      state: "Bayelsa",
    },
    {
      id: 114,
      city: "Mbiama",
      state: "Bayelsa",
    },
    {
      id: 115,
      city: "Makurdi",
      state: "Benue",
    },
    {
      id: 116,
      city: "Gboko",
      state: "Benue",
    },
    {
      id: 117,
      city: "Katsina-Ala",
      state: "Benue",
    },
    {
      id: 118,
      city: "Obi",
      state: "Benue",
    },
    {
      id: 119,
      city: "Otukpa",
      state: "Benue",
    },
    {
      id: 120,
      city: "Otukpo",
      state: "Benue",
    },
    {
      id: 121,
      city: "Ugbokolo",
      state: "Benue",
    },
    {
      id: 122,
      city: "Vandeikya",
      state: "Benue",
    },
    {
      id: 123,
      city: "Maiduguri",
      state: "Borno",
    },
    {
      id: 124,
      city: "Biu",
      state: "Borno",
    },
    {
      id: 125,
      city: "Chibok",
      state: "Borno",
    },
    {
      id: 126,
      city: "Damboa",
      state: "Borno",
    },
    {
      id: 127,
      city: "Konduga",
      state: "Borno",
    },
    {
      id: 128,
      city: "Calabar",
      state: "Cross River",
    },
    {
      id: 129,
      city: "Akamkpa",
      state: "Cross River",
    },
    {
      id: 130,
      city: "Akpabuyo",
      state: "Cross River",
    },
    {
      id: 131,
      city: "Bakassi",
      state: "Cross River",
    },
    {
      id: 132,
      city: "Biase",
      state: "Cross River",
    },
    {
      id: 133,
      city: "Ikom",
      state: "Cross River",
    },
    {
      id: 134,
      city: "Obanliku",
      state: "Cross River",
    },
    {
      id: 135,
      city: "Obubra",
      state: "Cross River",
    },
    {
      id: 136,
      city: "Obudu",
      state: "Cross River",
    },
    {
      id: 137,
      city: "Odukpani",
      state: "Cross River",
    },
    {
      id: 138,
      city: "Ogoja",
      state: "Cross River",
    },
    {
      id: 139,
      city: "Ugep",
      state: "Cross River",
    },
    {
      id: 140,
      city: "Yakurr",
      state: "Cross River",
    },
    {
      id: 141,
      city: "Asaba",
      state: "Delta",
    },
    {
      id: 142,
      city: "Abraka",
      state: "Delta",
    },
    {
      id: 143,
      city: "Agbor",
      state: "Delta",
    },
    {
      id: 144,
      city: "Burutu",
      state: "Delta",
    },
    {
      id: 145,
      city: "Effurun",
      state: "Delta",
    },
    {
      id: 146,
      city: "Koko",
      state: "Delta",
    },
    {
      id: 147,
      city: "Kwale",
      state: "Delta",
    },
    {
      id: 148,
      city: "Oghara",
      state: "Delta",
    },
    {
      id: 149,
      city: "Ogwashi Ukwu",
      state: "Delta",
    },
    {
      id: 150,
      city: "Okuokoko",
      state: "Delta",
    },
    {
      id: 151,
      city: "Oleh",
      state: "Delta",
    },
    {
      id: 152,
      city: "Ovwian",
      state: "Delta",
    },
    {
      id: 153,
      city: "Ozoro",
      state: "Delta",
    },
    {
      id: 154,
      city: "Sapele",
      state: "Delta",
    },
    {
      id: 155,
      city: "Ughelli",
      state: "Delta",
    },
    {
      id: 156,
      city: "Warri",
      state: "Delta",
    },
    {
      id: 157,
      city: "Aboh",
      state: "Delta",
    },
    {
      id: 158,
      city: "Abakaliki",
      state: "Ebonyi",
    },
    {
      id: 159,
      city: "Afikpo",
      state: "Ebonyi",
    },
    {
      id: 160,
      city: "Amasiri",
      state: "Ebonyi",
    },
    {
      id: 161,
      city: "Edda",
      state: "Ebonyi",
    },
    {
      id: 162,
      city: "Ikwo",
      state: "Ebonyi",
    },
    {
      id: 163,
      city: "Ishiagu",
      state: "Ebonyi",
    },
    {
      id: 164,
      city: "Nkalagu",
      state: "Ebonyi",
    },
    {
      id: 165,
      city: "Okposi",
      state: "Ebonyi",
    },
    {
      id: 166,
      city: "Onicha",
      state: "Ebonyi",
    },
    {
      id: 167,
      city: "Onueke",
      state: "Ebonyi",
    },
    {
      id: 168,
      city: "Uburu",
      state: "Ebonyi",
    },
    {
      id: 169,
      city: "Unwana",
      state: "Ebonyi",
    },
    {
      id: 170,
      city: "Abudu",
      state: "Edo",
    },
    {
      id: 171,
      city: "Afuze",
      state: "Edo",
    },
    {
      id: 172,
      city: "Auchi",
      state: "Edo",
    },
    {
      id: 173,
      city: "Benin City",
      state: "Edo",
    },
    {
      id: 174,
      city: "Ekpoma",
      state: "Edo",
    },
    {
      id: 175,
      city: "Ewu",
      state: "Edo",
    },
    {
      id: 176,
      city: "Fugar",
      state: "Edo",
    },
    {
      id: 177,
      city: "Ibillo",
      state: "Edo",
    },
    {
      id: 178,
      city: "Igarra",
      state: "Edo",
    },
    {
      id: 179,
      city: "Igueben",
      state: "Edo",
    },
    {
      id: 180,
      city: "Irrua",
      state: "Edo",
    },
    {
      id: 181,
      city: "Okpella",
      state: "Edo",
    },
    {
      id: 182,
      city: "Sabongida-Ora",
      state: "Edo",
    },
    {
      id: 183,
      city: "Ubiaja",
      state: "Edo",
    },
    {
      id: 184,
      city: "Urhonigbe",
      state: "Edo",
    },
    {
      id: 185,
      city: "Uromi",
      state: "Edo",
    },
    {
      id: 186,
      city: "Uzebba",
      state: "Edo",
    },
    {
      id: 187,
      city: "Ado-Ekiti",
      state: "Ekiti",
    },
    {
      id: 188,
      city: "Afao",
      state: "Ekiti",
    },
    {
      id: 189,
      city: "Aisegba",
      state: "Ekiti",
    },
    {
      id: 190,
      city: "Aramoko-Ekiti",
      state: "Ekiti",
    },
    {
      id: 191,
      city: "Ayedun",
      state: "Ekiti",
    },
    {
      id: 192,
      city: "Efon",
      state: "Ekiti",
    },
    {
      id: 193,
      city: "Emure",
      state: "Ekiti",
    },
    {
      id: 194,
      city: "Erinmope",
      state: "Ekiti",
    },
    {
      id: 195,
      city: "Ido",
      state: "Ekiti",
    },
    {
      id: 196,
      city: "Igede",
      state: "Ekiti",
    },
    {
      id: 197,
      city: "Ijero",
      state: "Ekiti",
    },
    {
      id: 198,
      city: "Ikere",
      state: "Ekiti",
    },
    {
      id: 199,
      city: "Ikole",
      state: "Ekiti",
    },
    {
      id: 200,
      city: "Ilawe",
      state: "Ekiti",
    },
    {
      id: 201,
      city: "Ise",
      state: "Ekiti",
    },
    {
      id: 202,
      city: "Iye",
      state: "Ekiti",
    },
    {
      id: 203,
      city: "Iyin",
      state: "Ekiti",
    },
    {
      id: 204,
      city: "Ode",
      state: "Ekiti",
    },
    {
      id: 205,
      city: "Odo-Oro",
      state: "Ekiti",
    },
    {
      id: 206,
      city: "Ogotun",
      state: "Ekiti",
    },
    {
      id: 207,
      city: "Okemesi",
      state: "Ekiti",
    },
    {
      id: 208,
      city: "Omuo",
      state: "Ekiti",
    },
    {
      id: 209,
      city: "Otun",
      state: "Ekiti",
    },
    {
      id: 210,
      city: "Oye-Ekiti",
      state: "Ekiti",
    },
    {
      id: 211,
      city: "Enugu",
      state: "Enugu",
    },
    {
      id: 212,
      city: "9Th Mile Corner",
      state: "Enugu",
    },
    {
      id: 213,
      city: "Abor",
      state: "Enugu",
    },
    {
      id: 214,
      city: "Achi",
      state: "Enugu",
    },
    {
      id: 215,
      city: "Agbogugu",
      state: "Enugu",
    },
    {
      id: 216,
      city: "Agbudu",
      state: "Enugu",
    },
    {
      id: 217,
      city: "Akegbe Ugwu",
      state: "Enugu",
    },
    {
      id: 218,
      city: "Akpugo",
      state: "Enugu",
    },
    {
      id: 219,
      city: "Akwuke",
      state: "Enugu",
    },
    {
      id: 220,
      city: "Amagunze",
      state: "Enugu",
    },
    {
      id: 221,
      city: "Amechi",
      state: "Enugu",
    },
    {
      id: 222,
      city: "Amechi Idodo",
      state: "Enugu",
    },
    {
      id: 223,
      city: "Amodu",
      state: "Enugu",
    },
    {
      id: 224,
      city: "Amokwe",
      state: "Enugu",
    },
    {
      id: 225,
      city: "Amoli",
      state: "Enugu",
    },
    {
      id: 226,
      city: "Amuri",
      state: "Enugu",
    },
    {
      id: 227,
      city: "Aninri",
      state: "Enugu",
    },
    {
      id: 228,
      city: "Awgu",
      state: "Enugu",
    },
    {
      id: 229,
      city: "Eha-Amufu",
      state: "Enugu",
    },
    {
      id: 230,
      city: "Eke",
      state: "Enugu",
    },
    {
      id: 231,
      city: "Emene",
      state: "Enugu",
    },
    {
      id: 232,
      city: "Ezeagu",
      state: "Enugu",
    },
    {
      id: 233,
      city: "Ihe",
      state: "Enugu",
    },
    {
      id: 234,
      city: "Isu Awaa",
      state: "Enugu",
    },
    {
      id: 235,
      city: "Ituku",
      state: "Enugu",
    },
    {
      id: 236,
      city: "Lejja",
      state: "Enugu",
    },
    {
      id: 237,
      city: "Mgbowo",
      state: "Enugu",
    },
    {
      id: 238,
      city: "Mpu",
      state: "Enugu",
    },
    {
      id: 239,
      city: "Nara",
      state: "Enugu",
    },
    {
      id: 240,
      city: "Nenwe",
      state: "Enugu",
    },
    {
      id: 241,
      city: "Ngwo",
      state: "Enugu",
    },
    {
      id: 242,
      city: "Nike",
      state: "Enugu",
    },
    {
      id: 243,
      city: "Nkanu",
      state: "Enugu",
    },
    {
      id: 244,
      city: "Nkerefi",
      state: "Enugu",
    },
    {
      id: 245,
      city: "Nsukka",
      state: "Enugu",
    },
    {
      id: 246,
      city: "Obe",
      state: "Enugu",
    },
    {
      id: 247,
      city: "Oduma",
      state: "Enugu",
    },
    {
      id: 248,
      city: "Ogbaku",
      state: "Enugu",
    },
    {
      id: 249,
      city: "Ogboduaba",
      state: "Enugu",
    },
    {
      id: 250,
      city: "Oji River",
      state: "Enugu",
    },
    {
      id: 251,
      city: "Okpanku",
      state: "Enugu",
    },
    {
      id: 252,
      city: "Okpatu",
      state: "Enugu",
    },
    {
      id: 253,
      city: "Opi",
      state: "Enugu",
    },
    {
      id: 254,
      city: "Ozalla",
      state: "Enugu",
    },
    {
      id: 255,
      city: "Udenu",
      state: "Enugu",
    },
    {
      id: 256,
      city: "Udi",
      state: "Enugu",
    },
    {
      id: 257,
      city: "Ugbawka",
      state: "Enugu",
    },
    {
      id: 258,
      city: "Ugbo",
      state: "Enugu",
    },
    {
      id: 259,
      city: "Ugwuaji",
      state: "Enugu",
    },
    {
      id: 260,
      city: "Ugwuoba",
      state: "Enugu",
    },
    {
      id: 261,
      city: "Umana",
      state: "Enugu",
    },
    {
      id: 262,
      city: "Uzouwani",
      state: "Enugu",
    },
    {
      id: 263,
      city: "Lnyi",
      state: "Enugu",
    },
    {
      id: 264,
      city: "Gombe",
      state: "Gombe",
    },
    {
      id: 265,
      city: "Bajoga",
      state: "Gombe",
    },
    {
      id: 266,
      city: "Billiri",
      state: "Gombe",
    },
    {
      id: 267,
      city: "Dukku",
      state: "Gombe",
    },
    {
      id: 268,
      city: "Kaltungo",
      state: "Gombe",
    },
    {
      id: 269,
      city: "Owerri",
      state: "Imo",
    },
    {
      id: 270,
      city: "Amaimo",
      state: "Imo",
    },
    {
      id: 271,
      city: "Emekuku",
      state: "Imo",
    },
    {
      id: 272,
      city: "Etiti",
      state: "Imo",
    },
    {
      id: 273,
      city: "Ideato",
      state: "Imo",
    },
    {
      id: 274,
      city: "Ihiagwa",
      state: "Imo",
    },
    {
      id: 275,
      city: "Mbaise",
      state: "Imo",
    },
    {
      id: 276,
      city: "Mgbidi",
      state: "Imo",
    },
    {
      id: 277,
      city: "Nkwerre",
      state: "Imo",
    },
    {
      id: 278,
      city: "Obowu",
      state: "Imo",
    },
    {
      id: 279,
      city: "Oguta",
      state: "Imo",
    },
    {
      id: 280,
      city: "Okigwe",
      state: "Imo",
    },
    {
      id: 281,
      city: "Orlu",
      state: "Imo",
    },
    {
      id: 282,
      city: "Umudim",
      state: "Imo",
    },
    {
      id: 283,
      city: "Uzoagba",
      state: "Imo",
    },
    {
      id: 284,
      city: "Dutse",
      state: "Jigawa",
    },
    {
      id: 285,
      city: "Birnin Kudu",
      state: "Jigawa",
    },
    {
      id: 286,
      city: "Gumel",
      state: "Jigawa",
    },
    {
      id: 287,
      city: "Hadejia",
      state: "Jigawa",
    },
    {
      id: 288,
      city: "Kazaure",
      state: "Jigawa",
    },
    {
      id: 289,
      city: "Ringim",
      state: "Jigawa",
    },
    {
      id: 290,
      city: "Kaduna",
      state: "Kaduna",
    },
    {
      id: 291,
      city: "Kachia",
      state: "Kaduna",
    },
    {
      id: 292,
      city: "Kafanchan",
      state: "Kaduna",
    },
    {
      id: 293,
      city: "Kagoro",
      state: "Kaduna",
    },
    {
      id: 294,
      city: "Zaria",
      state: "Kaduna",
    },
    {
      id: 295,
      city: "Zonkwa",
      state: "Kaduna",
    },
    {
      id: 296,
      city: "Kano",
      state: "Kano",
    },
    {
      id: 297,
      city: "Dala",
      state: "Kano",
    },
    {
      id: 298,
      city: "Dambatta",
      state: "Kano",
    },
    {
      id: 299,
      city: "Garzo",
      state: "Kano",
    },
    {
      id: 300,
      city: "Gwale",
      state: "Kano",
    },
    {
      id: 301,
      city: "Gwarzo",
      state: "Kano",
    },
    {
      id: 302,
      city: "Hotoro",
      state: "Kano",
    },
    {
      id: 303,
      city: "Kabuga",
      state: "Kano",
    },
    {
      id: 304,
      city: "Karaye",
      state: "Kano",
    },
    {
      id: 305,
      city: "Nassarawa",
      state: "Kano",
    },
    {
      id: 306,
      city: "Katsina",
      state: "Katsina",
    },
    {
      id: 307,
      city: "Bakori",
      state: "Katsina",
    },
    {
      id: 308,
      city: "Batagarawa",
      state: "Katsina",
    },
    {
      id: 309,
      city: "Daura",
      state: "Katsina",
    },
    {
      id: 310,
      city: "Funtua",
      state: "Katsina",
    },
    {
      id: 311,
      city: "Jibia",
      state: "Katsina",
    },
    {
      id: 312,
      city: "Kankia",
      state: "Katsina",
    },
    {
      id: 313,
      city: "Zango",
      state: "Katsina",
    },
    {
      id: 314,
      city: "Birnin Kebbi",
      state: "Kebbi",
    },
    {
      id: 315,
      city: "Argungu",
      state: "Kebbi",
    },
    {
      id: 316,
      city: "Bagudo",
      state: "Kebbi",
    },
    {
      id: 317,
      city: "Jega",
      state: "Kebbi",
    },
    {
      id: 318,
      city: "Kamba",
      state: "Kebbi",
    },
    {
      id: 319,
      city: "Koko",
      state: "Kebbi",
    },
    {
      id: 320,
      city: "Yauri",
      state: "Kebbi",
    },
    {
      id: 321,
      city: "Zuru",
      state: "Kebbi",
    },
    {
      id: 322,
      city: "Lokoja",
      state: "Kogi",
    },
    {
      id: 323,
      city: "Ankpa",
      state: "Kogi",
    },
    {
      id: 324,
      city: "Anyigba",
      state: "Kogi",
    },
    {
      id: 325,
      city: "Dekina",
      state: "Kogi",
    },
    {
      id: 326,
      city: "Egbe",
      state: "Kogi",
    },
    {
      id: 327,
      city: "Idah",
      state: "Kogi",
    },
    {
      id: 328,
      city: "Itakpe",
      state: "Kogi",
    },
    {
      id: 329,
      city: "Kabba",
      state: "Kogi",
    },
    {
      id: 330,
      city: "Koton-Karfe",
      state: "Kogi",
    },
    {
      id: 331,
      city: "Okene",
      state: "Kogi",
    },
    {
      id: 332,
      city: "Illorin",
      state: "Kwara",
    },
    {
      id: 333,
      city: "Afon",
      state: "Kwara",
    },
    {
      id: 334,
      city: "Ajasse-Ipo",
      state: "Kwara",
    },
    {
      id: 335,
      city: "Buari",
      state: "Kwara",
    },
    {
      id: 336,
      city: "Edidi",
      state: "Kwara",
    },
    {
      id: 337,
      city: "Erin-Lie",
      state: "Kwara",
    },
    {
      id: 338,
      city: "Esie",
      state: "Kwara",
    },
    {
      id: 339,
      city: "Gure",
      state: "Kwara",
    },
    {
      id: 340,
      city: "Igbaja",
      state: "Kwara",
    },
    {
      id: 341,
      city: "Jebba",
      state: "Kwara",
    },
    {
      id: 342,
      city: "Kaiama",
      state: "Kwara",
    },
    {
      id: 343,
      city: "Lafiagi",
      state: "Kwara",
    },
    {
      id: 344,
      city: "Offa",
      state: "Kwara",
    },
    {
      id: 345,
      city: "Oke-Onigbin",
      state: "Kwara",
    },
    {
      id: 346,
      city: "Omu-Aran",
      state: "Kwara",
    },
    {
      id: 347,
      city: "Osi",
      state: "Kwara",
    },
    {
      id: 348,
      city: "Patigi",
      state: "Kwara",
    },
    {
      id: 349,
      city: "Lioffa",
      state: "Kwara",
    },
    {
      id: 350,
      city: "Liota",
      state: "Kwara",
    },
    {
      id: 351,
      city: "Abule",
      state: "Lagos",
    },
    {
      id: 352,
      city: "Adeniyi Jones",
      state: "Lagos",
    },
    {
      id: 353,
      city: "Agege",
      state: "Lagos",
    },
    {
      id: 354,
      city: "Agidingbi",
      state: "Lagos",
    },
    {
      id: 355,
      city: "Aguda",
      state: "Lagos",
    },
    {
      id: 356,
      city: "Ajah",
      state: "Lagos",
    },
    {
      id: 357,
      city: "Ajegunle",
      state: "Lagos",
    },
    {
      id: 358,
      city: "Ajeromi-Ifelodun",
      state: "Lagos",
    },
    {
      id: 359,
      city: "Akerele",
      state: "Lagos",
    },
    {
      id: 360,
      city: "Akoka",
      state: "Lagos",
    },
    {
      id: 361,
      city: "Alaba",
      state: "Lagos",
    },
    {
      id: 362,
      city: "Alagomeji",
      state: "Lagos",
    },
    {
      id: 363,
      city: "Alausa",
      state: "Lagos",
    },
    {
      id: 364,
      city: "Alimosho",
      state: "Lagos",
    },
    {
      id: 365,
      city: "Amuwo Odofin",
      state: "Lagos",
    },
    {
      id: 366,
      city: "Anthony Village",
      state: "Lagos",
    },
    {
      id: 367,
      city: "Apapa",
      state: "Lagos",
    },
    {
      id: 368,
      city: "Badagry",
      state: "Lagos",
    },
    {
      id: 369,
      city: "Bariga",
      state: "Lagos",
    },
    {
      id: 370,
      city: "Coker",
      state: "Lagos",
    },
    {
      id: 371,
      city: "Dolphin Estate",
      state: "Lagos",
    },
    {
      id: 372,
      city: "Dopemu",
      state: "Lagos",
    },
    {
      id: 373,
      city: "Egbeda",
      state: "Lagos",
    },
    {
      id: 374,
      city: "Ebute Metta",
      state: "Lagos",
    },
    {
      id: 375,
      city: "Epe",
      state: "Lagos",
    },
    {
      id: 376,
      city: "Eti-Osa",
      state: "Lagos",
    },
    {
      id: 377,
      city: "Festac Town",
      state: "Lagos",
    },
    {
      id: 378,
      city: "Gbagada",
      state: "Lagos",
    },
    {
      id: 379,
      city: "Idumota",
      state: "Lagos",
    },
    {
      id: 380,
      city: "Ifako - Ijaiye",
      state: "Lagos",
    },
    {
      id: 381,
      city: "Ijesha",
      state: "Lagos",
    },
    {
      id: 382,
      city: "Ijora",
      state: "Lagos",
    },
    {
      id: 383,
      city: "Ikeja",
      state: "Lagos",
    },
    {
      id: 384,
      city: "Ikorodu",
      state: "Lagos",
    },
    {
      id: 385,
      city: "Ikoyi",
      state: "Lagos",
    },
    {
      id: 386,
      city: "Ilasamaja",
      state: "Lagos",
    },
    {
      id: 387,
      city: "Ilupeju",
      state: "Lagos",
    },
    {
      id: 388,
      city: "Iwaya",
      state: "Lagos",
    },
    {
      id: 389,
      city: "Iyana Ipaja",
      state: "Lagos",
    },
    {
      id: 390,
      city: "Jibowu",
      state: "Lagos",
    },
    {
      id: 391,
      city: "Ketu",
      state: "Lagos",
    },
    {
      id: 392,
      city: "Kosofe",
      state: "Lagos",
    },
    {
      id: 393,
      city: "Ladipo",
      state: "Lagos",
    },
    {
      id: 394,
      city: "Lagos Island",
      state: "Lagos",
    },
    {
      id: 395,
      city: "Lagos Mainland",
      state: "Lagos",
    },
    {
      id: 396,
      city: "Lawanson",
      state: "Lagos",
    },
    {
      id: 397,
      city: "Lekki",
      state: "Lagos",
    },
    {
      id: 398,
      city: "Marina",
      state: "Lagos",
    },
    {
      id: 399,
      city: "Maryland",
      state: "Lagos",
    },
    {
      id: 400,
      city: "Masha",
      state: "Lagos",
    },
    {
      id: 401,
      city: "Maza Maza",
      state: "Lagos",
    },
    {
      id: 402,
      city: "Mende",
      state: "Lagos",
    },
    {
      id: 403,
      city: "Mile 2",
      state: "Lagos",
    },
    {
      id: 404,
      city: "Mushin",
      state: "Lagos",
    },
    {
      id: 405,
      city: "Obalende",
      state: "Lagos",
    },
    {
      id: 406,
      city: "Obanikoro",
      state: "Lagos",
    },
    {
      id: 407,
      city: "Ogba",
      state: "Lagos",
    },
    {
      id: 408,
      city: "Ogudu",
      state: "Lagos",
    },
    {
      id: 409,
      city: "Ojo",
      state: "Lagos",
    },
    {
      id: 410,
      city: "Ojodu",
      state: "Lagos",
    },
    {
      id: 411,
      city: "Ojodu Berger",
      state: "Lagos",
    },
    {
      id: 412,
      city: "Ojota",
      state: "Lagos",
    },
    {
      id: 413,
      city: "Ojuelegba",
      state: "Lagos",
    },
    {
      id: 414,
      city: "Olodi",
      state: "Lagos",
    },
    {
      id: 415,
      city: "Onigbongbo",
      state: "Lagos",
    },
    {
      id: 416,
      city: "Onipanu",
      state: "Lagos",
    },
    {
      id: 417,
      city: "Oniru",
      state: "Lagos",
    },
    {
      id: 418,
      city: "Opebi",
      state: "Lagos",
    },
    {
      id: 419,
      city: "Oregun",
      state: "Lagos",
    },
    {
      id: 420,
      city: "Oshodi - Isolo",
      state: "Lagos",
    },
    {
      id: 421,
      city: "Palmgrove",
      state: "Lagos",
    },
    {
      id: 422,
      city: "Papa Ajao",
      state: "Lagos",
    },
    {
      id: 423,
      city: "Sabo",
      state: "Lagos",
    },
    {
      id: 424,
      city: "Satellite Town",
      state: "Lagos",
    },
    {
      id: 425,
      city: "Shomolu",
      state: "Lagos",
    },
    {
      id: 426,
      city: "Surulere",
      state: "Lagos",
    },
    {
      id: 427,
      city: "Takwa Bay",
      state: "Lagos",
    },
    {
      id: 428,
      city: "Tinubu Square",
      state: "Lagos",
    },
    {
      id: 429,
      city: "Victoria Garden City",
      state: "Lagos",
    },
    {
      id: 430,
      city: "Victoria Island",
      state: "Lagos",
    },
    {
      id: 431,
      city: "Yaba",
      state: "Lagos",
    },
    {
      id: 432,
      city: "Lafia",
      state: "Nasarawa",
    },
    {
      id: 433,
      city: "Akwanga",
      state: "Nasarawa",
    },
    {
      id: 434,
      city: "Doma",
      state: "Nasarawa",
    },
    {
      id: 435,
      city: "Eggon",
      state: "Nasarawa",
    },
    {
      id: 436,
      city: "Karu",
      state: "Nasarawa",
    },
    {
      id: 437,
      city: "Keffi",
      state: "Nasarawa",
    },
    {
      id: 438,
      city: "Wamba",
      state: "Nasarawa",
    },
    {
      id: 439,
      city: "Minna",
      state: "Niger",
    },
    {
      id: 440,
      city: "Bida",
      state: "Niger",
    },
    {
      id: 441,
      city: "Kotangora",
      state: "Niger",
    },
    {
      id: 442,
      city: "Lapai",
      state: "Niger",
    },
    {
      id: 443,
      city: "Mokwa",
      state: "Niger",
    },
    {
      id: 444,
      city: "Suleja",
      state: "Niger",
    },
    {
      id: 445,
      city: "Zungeru",
      state: "Niger",
    },
    {
      id: 446,
      city: "Abeokuta",
      state: "Ogun",
    },
    {
      id: 447,
      city: "Ago-Iwoye",
      state: "Ogun",
    },
    {
      id: 448,
      city: "Ayetoro",
      state: "Ogun",
    },
    {
      id: 449,
      city: "Ifo",
      state: "Ogun",
    },
    {
      id: 450,
      city: "Sagamu",
      state: "Ogun",
    },
    {
      id: 451,
      city: "Sango Ota",
      state: "Ogun",
    },
    {
      id: 452,
      city: "Agbara",
      state: "Ogun",
    },
    {
      id: 453,
      city: "Ajebo",
      state: "Ogun",
    },
    {
      id: 454,
      city: "Arepo",
      state: "Ogun",
    },
    {
      id: 455,
      city: "Ibafo",
      state: "Ogun",
    },
    {
      id: 456,
      city: "Ibese",
      state: "Ogun",
    },
    {
      id: 457,
      city: "Iboro",
      state: "Ogun",
    },
    {
      id: 458,
      city: "Igbesa",
      state: "Ogun",
    },
    {
      id: 459,
      city: "Igbogila",
      state: "Ogun",
    },
    {
      id: 460,
      city: "Ijebu Ife",
      state: "Ogun",
    },
    {
      id: 461,
      city: "Ijebu Itele",
      state: "Ogun",
    },
    {
      id: 462,
      city: "Ijebu Ode",
      state: "Ogun",
    },
    {
      id: 463,
      city: "Ijebu-Igbo",
      state: "Ogun",
    },
    {
      id: 464,
      city: "Ijoko",
      state: "Ogun",
    },
    {
      id: 465,
      city: "Ikenne Remo",
      state: "Ogun",
    },
    {
      id: 466,
      city: "Ilaro",
      state: "Ogun",
    },
    {
      id: 467,
      city: "Imeko",
      state: "Ogun",
    },
    {
      id: 468,
      city: "Iperin",
      state: "Ogun",
    },
    {
      id: 469,
      city: "Iperu Remo",
      state: "Ogun",
    },
    {
      id: 470,
      city: "Isara-Remo",
      state: "Ogun",
    },
    {
      id: 471,
      city: "Itori",
      state: "Ogun",
    },
    {
      id: 472,
      city: "Magboro",
      state: "Ogun",
    },
    {
      id: 473,
      city: "Mowe",
      state: "Ogun",
    },
    {
      id: 474,
      city: "Ode-Remo",
      state: "Ogun",
    },
    {
      id: 475,
      city: "Ofada",
      state: "Ogun",
    },
    {
      id: 476,
      city: "Ogijo",
      state: "Ogun",
    },
    {
      id: 477,
      city: "Owode",
      state: "Ogun",
    },
    {
      id: 478,
      city: "Akure",
      state: "Ondo",
    },
    {
      id: 479,
      city: "Akungba",
      state: "Ondo",
    },
    {
      id: 480,
      city: "Arigidi-Akoko",
      state: "Ondo",
    },
    {
      id: 481,
      city: "Ifon",
      state: "Ondo",
    },
    {
      id: 482,
      city: "Ijare",
      state: "Ondo",
    },
    {
      id: 483,
      city: "Ikare",
      state: "Ondo",
    },
    {
      id: 484,
      city: "Ikare-Akoko",
      state: "Ondo",
    },
    {
      id: 485,
      city: "Ilara-Mokin",
      state: "Ondo",
    },
    {
      id: 486,
      city: "Ile-Oluji",
      state: "Ondo",
    },
    {
      id: 487,
      city: "Irele",
      state: "Ondo",
    },
    {
      id: 488,
      city: "Oka-Akoko",
      state: "Ondo",
    },
    {
      id: 489,
      city: "Okitipupa",
      state: "Ondo",
    },
    {
      id: 490,
      city: "Ondo Town",
      state: "Ondo",
    },
    {
      id: 491,
      city: "Ore",
      state: "Ondo",
    },
    {
      id: 492,
      city: "Owo",
      state: "Ondo",
    },
    {
      id: 493,
      city: "Osogbo",
      state: "Osun",
    },
    {
      id: 494,
      city: "Ede",
      state: "Osun",
    },
    {
      id: 495,
      city: "Ejigbo",
      state: "Osun",
    },
    {
      id: 496,
      city: "Esa-Oke",
      state: "Osun",
    },
    {
      id: 497,
      city: "Ikire",
      state: "Osun",
    },
    {
      id: 498,
      city: "Ila Orangun",
      state: "Osun",
    },
    {
      id: 499,
      city: "Ile-Ife",
      state: "Osun",
    },
    {
      id: 500,
      city: "Ilesa",
      state: "Osun",
    },
    {
      id: 501,
      city: "Ilobu",
      state: "Osun",
    },
    {
      id: 502,
      city: "Iwo",
      state: "Osun",
    },
    {
      id: 503,
      city: "Oke-Ila Orangun",
      state: "Osun",
    },
    {
      id: 504,
      city: "Ibadan",
      state: "Oyo",
    },
    {
      id: 505,
      city: "Ado-Awaye",
      state: "Oyo",
    },
    {
      id: 506,
      city: "Ago-Amodu",
      state: "Oyo",
    },
    {
      id: 507,
      city: "Akanran",
      state: "Oyo",
    },
    {
      id: 508,
      city: "Egbeda",
      state: "Oyo",
    },
    {
      id: 509,
      city: "Eruwa",
      state: "Oyo",
    },
    {
      id: 510,
      city: "Fiditi",
      state: "Oyo",
    },
    {
      id: 511,
      city: "Idi Ayunre",
      state: "Oyo",
    },
    {
      id: 512,
      city: "Igangan",
      state: "Oyo",
    },
    {
      id: 513,
      city: "Igbo-Ora",
      state: "Oyo",
    },
    {
      id: 514,
      city: "Igboho",
      state: "Oyo",
    },
    {
      id: 515,
      city: "Ilora",
      state: "Oyo",
    },
    {
      id: 516,
      city: "Iresa Adu",
      state: "Oyo",
    },
    {
      id: 517,
      city: "Iseyin",
      state: "Oyo",
    },
    {
      id: 518,
      city: "Kisi",
      state: "Oyo",
    },
    {
      id: 519,
      city: "Lalupon",
      state: "Oyo",
    },
    {
      id: 520,
      city: "Lanlate",
      state: "Oyo",
    },
    {
      id: 521,
      city: "Ogbomosho",
      state: "Oyo",
    },
    {
      id: 522,
      city: "Okeho",
      state: "Oyo",
    },
    {
      id: 523,
      city: "Oyo",
      state: "Oyo",
    },
    {
      id: 524,
      city: "Saki",
      state: "Oyo",
    },
    {
      id: 525,
      city: "Jos",
      state: "Plateau",
    },
    {
      id: 526,
      city: "Barkin Ladi",
      state: "Plateau",
    },
    {
      id: 527,
      city: "Bukuru",
      state: "Plateau",
    },
    {
      id: 528,
      city: "Langtang",
      state: "Plateau",
    },
    {
      id: 529,
      city: "Pankshin",
      state: "Plateau",
    },
    {
      id: 530,
      city: "Shendam",
      state: "Plateau",
    },
    {
      id: 531,
      city: "Vom",
      state: "Plateau",
    },
    {
      id: 532,
      city: "Abonnema",
      state: "Rivers",
    },
    {
      id: 533,
      city: "Abua-Odual",
      state: "Rivers",
    },
    {
      id: 534,
      city: "Ahoada",
      state: "Rivers",
    },
    {
      id: 535,
      city: "Bane",
      state: "Rivers",
    },
    {
      id: 536,
      city: "Bonny",
      state: "Rivers",
    },
    {
      id: 537,
      city: "Bori",
      state: "Rivers",
    },
    {
      id: 538,
      city: "Buguma",
      state: "Rivers",
    },
    {
      id: 539,
      city: "Degema",
      state: "Rivers",
    },
    {
      id: 540,
      city: "Elele",
      state: "Rivers",
    },
    {
      id: 541,
      city: "Eleme",
      state: "Rivers",
    },
    {
      id: 542,
      city: "Gokana",
      state: "Rivers",
    },
    {
      id: 543,
      city: "Igrita",
      state: "Rivers",
    },
    {
      id: 544,
      city: "Ikwerre",
      state: "Rivers",
    },
    {
      id: 545,
      city: "Obio Akpor",
      state: "Rivers",
    },
    {
      id: 546,
      city: "Okrika",
      state: "Rivers",
    },
    {
      id: 547,
      city: "Omoku",
      state: "Rivers",
    },
    {
      id: 548,
      city: "Onne",
      state: "Rivers",
    },
    {
      id: 549,
      city: "Opobo",
      state: "Rivers",
    },
    {
      id: 550,
      city: "Oyigbo",
      state: "Rivers",
    },
    {
      id: 551,
      city: "Port Harcourt",
      state: "Rivers",
    },
    {
      id: 552,
      city: "Rumuokoro",
      state: "Rivers",
    },
    {
      id: 553,
      city: "Sokoto",
      state: "Sokoto",
    },
    {
      id: 554,
      city: "Bodinga",
      state: "Sokoto",
    },
    {
      id: 555,
      city: "Gada",
      state: "Sokoto",
    },
    {
      id: 556,
      city: "Gwadabawa",
      state: "Sokoto",
    },
    {
      id: 557,
      city: "Ilela",
      state: "Sokoto",
    },
    {
      id: 558,
      city: "Tambulwal",
      state: "Sokoto",
    },
    {
      id: 559,
      city: "Wamakko",
      state: "Sokoto",
    },
    {
      id: 560,
      city: "Wurno",
      state: "Sokoto",
    },
    {
      id: 561,
      city: "Yabo",
      state: "Sokoto",
    },
    {
      id: 562,
      city: "Jalingo",
      state: "Taraba",
    },
    {
      id: 563,
      city: "Bali",
      state: "Taraba",
    },
    {
      id: 564,
      city: "Gashaka",
      state: "Taraba",
    },
    {
      id: 565,
      city: "Ibi",
      state: "Taraba",
    },
    {
      id: 566,
      city: "Kurmi",
      state: "Taraba",
    },
    {
      id: 567,
      city: "Sardauna",
      state: "Taraba",
    },
    {
      id: 568,
      city: "Takun",
      state: "Taraba",
    },
    {
      id: 569,
      city: "Wukari",
      state: "Taraba",
    },
    {
      id: 570,
      city: "Zing",
      state: "Taraba",
    },
    {
      id: 571,
      city: "Damaturu",
      state: "Yobe",
    },
    {
      id: 572,
      city: "Gashua",
      state: "Yobe",
    },
    {
      id: 573,
      city: "Giedam",
      state: "Yobe",
    },
    {
      id: 574,
      city: "Nguru",
      state: "Yobe",
    },
    {
      id: 575,
      city: "Potiskum",
      state: "Yobe",
    },
    {
      id: 576,
      city: "Gusau",
      state: "Zamfara",
    },
    {
      id: 577,
      city: "Anka",
      state: "Zamfara",
    },
    {
      id: 578,
      city: "Bakura",
      state: "Zamfara",
    },
    {
      id: 579,
      city: "Bungudu",
      state: "Zamfara",
    },
    {
      id: 580,
      city: "Gummi",
      state: "Zamfara",
    },
    {
      id: 581,
      city: "Kaura Namoda",
      state: "Zamfara",
    },
    {
      id: 582,
      city: "Maradun",
      state: "Zamfara",
    },
    {
      id: 583,
      city: "Maru",
      state: "Zamfara",
    },
    {
      id: 584,
      city: "Shinkafi",
      state: "Zamfara",
    },
    {
      id: 585,
      city: "Talata-Mafara",
      state: "Zamfara",
    },
    {
      id: 586,
      city: "Tsafe",
      state: "Zamfara",
    },
    {
      id: 587,
      city: "Zurmi",
      state: "Zamfara",
    },
  ],
};

const states = {
  data: [
    {
      id: 1,
      name: "Abuja",
    },
    {
      id: 2,
      name: "Abia",
    },
    {
      id: 3,
      name: "Adamawa",
    },
    {
      id: 4,
      name: "Akwa Ibom",
    },
    {
      id: 5,
      name: "Anambra",
    },
    {
      id: 6,
      name: "Bauchi",
    },
    {
      id: 7,
      name: "Bayelsa",
    },
    {
      id: 8,
      name: "Benue",
    },
    {
      id: 9,
      name: "Borno",
    },
    {
      id: 10,
      name: "Cross River",
    },
    {
      id: 11,
      name: "Delta",
    },
    {
      id: 12,
      name: "Ebonyi",
    },
    {
      id: 13,
      name: "Edo",
    },
    {
      id: 14,
      name: "Ekiti",
    },
    {
      id: 15,
      name: "Enugu",
    },
    {
      id: 16,
      name: "Gombe",
    },
    {
      id: 17,
      name: "Imo",
    },
    {
      id: 18,
      name: "Jigawa",
    },
    {
      id: 19,
      name: "Kaduna",
    },
    {
      id: 20,
      name: "Kano",
    },
    {
      id: 21,
      name: "Katsina",
    },
    {
      id: 22,
      name: "Kebbi",
    },
    {
      id: 23,
      name: "Kogi",
    },
    {
      id: 24,
      name: "Kwara",
    },
    {
      id: 25,
      name: "Lagos",
    },
    {
      id: 26,
      name: "Nasarawa",
    },
    {
      id: 27,
      name: "Niger",
    },
    {
      id: 28,
      name: "Ogun",
    },
    {
      id: 29,
      name: "Ondo",
    },
    {
      id: 30,
      name: "Osun",
    },
    {
      id: 31,
      name: "Oyo",
    },
    {
      id: 32,
      name: "Plateau",
    },
    {
      id: 33,
      name: "Rivers",
    },
    {
      id: 34,
      name: "Sokoto",
    },
    {
      id: 35,
      name: "Taraba",
    },
    {
      id: 36,
      name: "Yobe",
    },
    {
      id: 37,
      name: "Zamfara",
    },
  ],
};
