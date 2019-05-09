const rawScaleText = [
    {
        name: "Major",
        pattern: [0, 2, 4, 5, 7, 9, 11],
        category: "Basic"
    },
    {
        name: "Minor",
        pattern: [0, 2, 3, 5, 7, 8, 10],
        category: "Basic"
    },
    {
        name: "Ionian",
        pattern: [0, 2, 4, 5, 7, 9, 11],
        category: "Modes"
    },
    {
        name: "Dorian",
        pattern: [0, 2, 3, 5, 7, 9, 10],
        category: "Modes"
    },
    {
        name: "Phrygian",
        pattern: [0, 1, 3, 5, 7, 8, 10],
        category: "Modes"
    },
    {
        name: "Lydian",
        pattern: [0, 2, 4, 6, 7, 9, 11],
        category: "Modes"
    },
    {
        name: "Mixolydian",
        pattern: [0, 2, 4, 5, 7, 9, 10],
        category: "Modes"
    },
    {
        name: "Aeolian",
        pattern: [0, 2, 3, 5, 7, 8, 10],
        category: "Modes"
    },
    {
        name: "Locrian",
        pattern: [0, 1, 3, 5, 6, 8, 10],
        category: "Modes"
    },
    
    {
        name: "Pentatonic Major",
        pattern: [0, 2, 4, 7, 9],
        category: "Pentatonic"
    },
    {
        name: "Pentatonic Minor",
        pattern: [0, 3, 5, 7, 8],
        category: "Pentatonic"
    },
    {
        name: "Blues Pentatonic Minor",
        pattern: [0, 2, 3, 5, 7, 8, 10],
        category: "Pentatonic"
    },

    {
        name: "Major Triad",
        pattern: [0, 4, 7],
        category: "Chords"

    },
    {
        name: "Minor Triad",
        pattern: [0, 3, 7],
        category: "Chords"
    },
    {
        name: "7 Triad",
        pattern: [0, 4, 7, 10],
        category: "Chords"
    },
    {
        name: "m7 Triad",
        pattern: [0, 3, 7, 10],
        category: "Chords"
    },

    {
        name: "Chromatic",
        pattern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        category: "Basic"
    }


];

//MUST ADD ONE TO PHSICAL FRET TO ACCOUNT FOR OPEN STRING POSITION
const rawInstrumentData = [
    {
        number_of_frets: 23,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'E2'],
        description: "Standard Tuning EADGBE",
        instrument: "Guitar"

    }, 
    {
        number_of_frets: 25,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'D2'],
        description: "Drop D Tuning",
        instrument: "Guitar"
    }, 
    {
        number_of_frets: 25,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'E2', 'B1'],
        description: "7 String Standard Tuning",
        instrument: "Guitar"
    },
    {
        number_of_frets: 25,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'C2'],
        description: "Drop C Tuning",
        instrument: "Guitar"
    },
    {
        number_of_frets: 25,
        tuningArray: ['G3', 'D2', 'A1', 'E1'],
        description: "Standard Tuning EADG",
        instrument: "Bass"
    },
    {
        number_of_frets: 17,
        tuningArray: ['D3', 'B3', 'G2', 'D2', 'G4'],
        description: "Standard Open G",
        instrument: "Banjo"
    }
];

const fretboardRawHTML = `
<hr />
<section id="menu">
    <select id="key-menu"></select>
    <select id="category-menu"></select>
    <select id="scale-menu"></select>
    <select id="instrument-menu"></select>
    <select id="tuning-menu"></select>
</section>

<hr />

<section id="fretboard"></section>
`;




