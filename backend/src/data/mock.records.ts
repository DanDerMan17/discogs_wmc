import { Genre } from "../models/enums";

export const mockRecords = [

    // ─── THE BEATLES ───────────────────────────────────
    { title: "Please Please Me", artist: "The Beatles", year: 1963, genre: Genre.Beat, coverUrl: "https://i.scdn.co/image/ab67616d00001e02dbeec63ad914c973e75c24df" },
    { title: "With the Beatles", artist: "The Beatles", year: 1963, genre: Genre.Beat, coverUrl: "https://i.scdn.co/image/ab67616d00001e02608a63ad5b18e99da94a3f73" },
    { title: "A Hard Day's Night", artist: "The Beatles", year: 1964, genre: Genre.Beat, coverUrl: "" },
    { title: "Beatles for Sale", artist: "The Beatles", year: 1964, genre: Genre.Beat, coverUrl: "https://i.scdn.co/image/ab67616d00001e0255612ece447bec5d62c68375" },
    { title: "Help!", artist: "The Beatles", year: 1965, genre: Genre.Beat, coverUrl: "https://i.scdn.co/image/ab67616d00001e02e3e3b64cea45265469d4cafa" },
    { title: "Rubber Soul", artist: "The Beatles", year: 1965, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02ed801e58a9ababdea6ac7ce4" },
    { title: "Revolver", artist: "The Beatles", year: 1966, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e0228b8b9b46428896e6491e97a" },
    { title: "Sgt. Pepper's Lonely Hearts Club Band", artist: "The Beatles", year: 1967, genre: Genre.Psychedelic, coverUrl: "https://i.scdn.co/image/ab67616d00001e0234ef8f7d06cf2fc2146f420a" },
    { title: "Magical Mystery Tour", artist: "The Beatles", year: 1967, genre: Genre.Psychedelic, coverUrl: "https://i.scdn.co/image/ab67616d00001e02692d9189b2bd75525893f0c1" },
    { title: "The Beatles (White Album)", artist: "The Beatles", year: 1968, genre: Genre.Rock, coverUrl: "" },
    { title: "Yellow Submarine", artist: "The Beatles", year: 1969, genre: Genre.Psychedelic, coverUrl: "https://i.scdn.co/image/ab67616d00001e02d807dd713cdfbeed142881e2" },
    { title: "Abbey Road", artist: "The Beatles", year: 1969, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25" },
    { title: "Let It Be", artist: "The Beatles", year: 1970, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e0284243a01af3c77b56fe01ab1" },

    // ─── THE ROLLING STONES ────────────────────────────
    { title: "The Rolling Stones", artist: "The Rolling Stones", year: 1964, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e02329024dd3a0b300a24586db2" },
    { title: "The Rolling Stones No. 2", artist: "The Rolling Stones", year: 1965, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e02ade1843699bf51399b70303a" },
    { title: "Out of Our Heads", artist: "The Rolling Stones", year: 1965, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e0205c5be85b64eaff732f7cb0b" },
    { title: "Aftermath", artist: "The Rolling Stones", year: 1966, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02bad7062c3fd2f2d037989694" },
    { title: "Between the Buttons", artist: "The Rolling Stones", year: 1967, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e028260863a56134f1516913d7f" },
    { title: "Their Satanic Majesties Request", artist: "The Rolling Stones", year: 1967, genre: Genre.Psychedelic, coverUrl: "https://i.scdn.co/image/ab67616d00001e0263a1d46bf691ebd45e3cb393" },
    { title: "Beggars Banquet", artist: "The Rolling Stones", year: 1968, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e0244934a06d21864415376f5f2" },
    { title: "Let It Bleed", artist: "The Rolling Stones", year: 1969, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e022af30c881bb23cfb82a8cf99" },
    { title: "Sticky Fingers", artist: "The Rolling Stones", year: 1971, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02a1d9c9969f2a7ed27e449a3c" },
    { title: "Exile on Main St.", artist: "The Rolling Stones", year: 1972, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02ba42bfcfeed19018b1f8cab8" },
    { title: "Goats Head Soup", artist: "The Rolling Stones", year: 1973, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02fa3c4374e2cdd3cc1636c79b" },
    { title: "It's Only Rock 'n Roll", artist: "The Rolling Stones", year: 1974, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02473ef0648c80a371719223b7" },

    // ─── JETHRO TULL ───────────────────────────────────
    { title: "This Was", artist: "Jethro Tull", year: 1968, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e027c93f7c6762dcbcedfd1c23d" },
    { title: "Stand Up", artist: "Jethro Tull", year: 1969, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e0201760906028d3ea549f10a8c" },
    { title: "Benefit", artist: "Jethro Tull", year: 1970, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e0204e75e2458078ed9b5ab0230" },
    { title: "Aqualung", artist: "Jethro Tull", year: 1971, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02be6e758fe8300a72eceddb8f" },
    { title: "Thick as a Brick", artist: "Jethro Tull", year: 1972, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02ac3a8af2b259525f9f0034df" },
    { title: "A Passion Play", artist: "Jethro Tull", year: 1973, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02e7f140ff1d02885bcfb24656" },
    { title: "War Child", artist: "Jethro Tull", year: 1974, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02bc8529e7c09b08d51e84cfa2" },
    { title: "Minstrel in the Gallery", artist: "Jethro Tull", year: 1975, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e027fae915bf104f82a61d01eb6" },

    // ─── TRAFFIC ───────────────────────────────────────
    { title: "Mr. Fantasy", artist: "Traffic", year: 1967, genre: Genre.Psychedelic, coverUrl: "https://i.scdn.co/image/ab67616d00001e02607f5d1d15bdb8a450840ccf" },
    { title: "Traffic", artist: "Traffic", year: 1968, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e023f53a2f0cc5764a4477e1d30" },
    { title: "John Barleycorn Must Die", artist: "Traffic", year: 1970, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e0211aeda9d00fe58f8a08c5525" },
    { title: "The Low Spark of High Heeled Boys", artist: "Traffic", year: 1971, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e0235f303dac15ef3f9d3a48d00" },
    { title: "Shoot Out at the Fantasy Factory", artist: "Traffic", year: 1973, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e029de29b4522edb507ce49f36b" },

    // ─── BLIND FAITH ───────────────────────────────────
    { title: "Blind Faith", artist: "Blind Faith", year: 1969, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e0227f2d001b8f00603795ec93f" },

    // ─── CREAM ─────────────────────────────────────────
    { title: "Fresh Cream", artist: "Cream", year: 1966, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e0293a3bb62961a598ecaad1f75" },
    { title: "Disraeli Gears", artist: "Cream", year: 1967, genre: Genre.Psychedelic, coverUrl: "https://i.scdn.co/image/ab67616d00001e02db1fb2dede292908e86d94d7" },
    { title: "Wheels of Fire", artist: "Cream", year: 1968, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e025c7731f5acdcb2d02d78b7ee" },
    { title: "Goodbye", artist: "Cream", year: 1969, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e026e14114e634f57610bc24170" },

    // ─── YES ───────────────────────────────────────────
    { title: "Yes", artist: "Yes", year: 1969, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02a87828118f6c39a6e9257d3e" },
    { title: "Time and a Word", artist: "Yes", year: 1970, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e021373b065300f97397fda16d7" },
    { title: "The Yes Album", artist: "Yes", year: 1971, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02a87828118f6c39a6e9257d3e" },
    { title: "Fragile", artist: "Yes", year: 1971, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e025b6ff520a41ff9b0f29f701e" },
    { title: "Close to the Edge", artist: "Yes", year: 1972, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02593f4d2b1bcf28ac44459ddf" },
    { title: "Tales from Topographic Oceans", artist: "Yes", year: 1973, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e022ac13cc406daca534d18c26d" },
    { title: "Going for the One", artist: "Yes", year: 1977, genre: Genre.Prog_Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02fff6321a79c0ba5e4e7f5125" },

    // ─── MAHAVISHNU ORCHESTRA ──────────────────────────
    { title: "The Inner Mounting Flame", artist: "Mahavishnu Orchestra", year: 1971, genre: Genre.Jazz, coverUrl: "https://i.scdn.co/image/ab67616d00001e0299aac389fefa414a182a68aa" },
    { title: "Birds of Fire", artist: "Mahavishnu Orchestra", year: 1973, genre: Genre.Jazz, coverUrl: "https://i.scdn.co/image/ab67616d00001e02a0edf8119d8326ed45b45bdc" },
    { title: "Visions of the Emerald Beyond", artist: "Mahavishnu Orchestra", year: 1975, genre: Genre.Jazz, coverUrl: "https://i.scdn.co/image/ab67616d00001e02003ce14d5cd6a2153098d345" },
    { title: "Inner Worlds", artist: "Mahavishnu Orchestra", year: 1976, genre: Genre.Jazz, coverUrl: "" },

    // ─── LED ZEPPELIN ──────────────────────────────────
    { title: "Led Zeppelin", artist: "Led Zeppelin", year: 1969, genre: Genre.Blues, coverUrl: "https://i.scdn.co/image/ab67616d00001e02c8a11e48c91a982d086afc69" },
    { title: "Led Zeppelin II", artist: "Led Zeppelin", year: 1969, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02fc4f17340773c6c3579fea0d" },
    { title: "Led Zeppelin III", artist: "Led Zeppelin", year: 1970, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e0290a50cfe99a4c19ff3cbfbdb" },
    { title: "Led Zeppelin IV", artist: "Led Zeppelin", year: 1971, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02c8a11e48c91a982d086afc69" },
    { title: "Houses of the Holy", artist: "Led Zeppelin", year: 1973, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e021aa47e71c4edfeaddb65cd54" },
    { title: "Physical Graffiti", artist: "Led Zeppelin", year: 1975, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e02765b0617b572bdd1dbdc7d8e" },
    { title: "Presence", artist: "Led Zeppelin", year: 1976, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e0227f6c518a8e36d45b5e7d95e" },
    { title: "In Through the Out Door", artist: "Led Zeppelin", year: 1979, genre: Genre.Rock, coverUrl: "https://i.scdn.co/image/ab67616d00001e0215aa25b0b3b972a7be623605" },
];
