const rawScaleText = [
    {
        name: "Major",
        pattern: [0, 2, 4, 5, 7, 9, 11],
        category: "Basic Scales"
    },
    {
        name: "Minor",
        pattern: [0, 2, 3, 5, 7, 8, 10],
        category: "Basic Scales"
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
        pattern: [0, 3, 5, 7, 10],
        category: "Pentatonic"
    },
    {
        name: "Blues Pentatonic Minor",
        pattern: [0, 2, 3, 5, 7, 10, 11],
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
        category: "Basic Scales"
    }


];

//MUST ADD ONE TO PHSICAL FRET TO ACCOUNT FOR OPEN STRING POSITION
const rawInstrumentData = [
    //GUITAR
    //---------------
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
        tuningArray: ['D#5', 'A#4', 'F#4', 'C#3', 'G#2', 'C#2'],
        description: "Drop D, down 1/2",
        instrument: "Guitar"
    }, 
    {
        number_of_frets: 25,
        tuningArray: ['D5', 'B4', 'G4', 'D3', 'A2', 'D2'],
        description: "Double Drop D Tuning",
        instrument: "Guitar"
    }, 
    {
        number_of_frets: 25,
        tuningArray: ['D5', 'A4', 'G4', 'D3', 'A2', 'D2'],
        description: "DADGAD Tuning",
        instrument: "Guitar"
    }, 
    {
        number_of_frets: 25,
        tuningArray: ['D5', 'A4', 'F#4', 'D3', 'A2', 'D2'],
        description: "Open D Tuning",
        instrument: "Guitar"
    }, 
    {
        number_of_frets: 25,
        tuningArray: ['E5', 'B4', 'G#4', 'E3', 'B2', 'E2'],
        description: "Open E Tuning",
        instrument: "Guitar"
    }, 
    {
        number_of_frets: 25,
        tuningArray: ['D5', 'B4', 'G4', 'D3', 'G2', 'D2'],
        description: "Open G Tuning",
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
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'E2', 'B1'],
        description: "7 String Standard Tuning",
        instrument: "Guitar"
    },

    {
        number_of_frets: 25,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'E2', 'A1'],
        description: "7 Str Drop A Tuning",
        instrument: "Guitar"
    },
    
    {
        number_of_frets: 25,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'E2', 'B1', 'F#1'],
        description: "8 String Standard Tuning",
        instrument: "Guitar"
    },

    {
        number_of_frets: 25,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'E2', 'B1', 'E1'],
        description: "8 Str Drop E Tuning",
        instrument: "Guitar"
    },

    //Bass
    //---------------
    {
        number_of_frets: 25,
        tuningArray: ['G2', 'D2', 'A1', 'E1'],
        description: "Standard Tuning EADG",
        instrument: "Bass"
    },
    {
        number_of_frets: 25,
        tuningArray: ['G2', 'D2', 'A1', 'D1'],
        description: "Drop D DADG",
        instrument: "Bass"
    },
    {
        number_of_frets: 25,
        tuningArray: ['G2', 'D2', 'A1', 'E1', 'B0'],
        description: "5 String Standard BEADG",
        instrument: "Bass"
    },
    {
        number_of_frets: 25,
        tuningArray: ['C3', 'G2', 'D2', 'A1', 'E1', 'B0'],
        description: "6 String Standard BEADGC",
        instrument: "Bass"
    },

    //Ukelele
    //---------------
    {
        number_of_frets: 17,
        tuningArray: ['A4', 'E4', "C4", "G4"],
        description: "Soprano Uke",
        instrument: "Ukelele"
    },
    {
        number_of_frets: 17,
        tuningArray: ['A4', 'E4', "C4", "G4"],
        description: "Concert Uke",
        instrument: "Ukelele"
    },
    {
        number_of_frets: 17,
        tuningArray: ['A4', 'E4', "C4", "G4"],
        description: "Tenor Uke",
        instrument: "Ukelele"
    },
    {
        number_of_frets: 17,
        tuningArray: ['E4', 'B4', "G4", "D4"],
        description: "Baritone Uke",
        instrument: "Ukelele"
    },
    //BANJO
    //---------------
    {
        number_of_frets: 17,
        tuningArray: ['D3', 'B3', 'G2', 'D2', 'G4'],
        description: "Standard Open G",
        instrument: "Banjo"
    },

    {
        number_of_frets: 17,
        tuningArray: ['D3', 'B3', 'G2', 'C2', 'G4'],
        description: "Banjo C Tuning",
        instrument: "Banjo"
    },
    {
        number_of_frets: 17,
        tuningArray: ['D3', 'C3', 'G2', 'C2', 'G4'],
        description: "Double C Tuning",
        instrument: "Banjo"
    },
    
    //Mandolin
    //---------------
    {
        number_of_frets: 17,
        tuningArray: ['E3', 'A3', 'D2', 'G2'],
        description: "Standard Mandolin",
        instrument: "Mandolin"
    }
];

const fretboardRawHTML = `
<hr />
<section id="menu">
    <select id="key-menu"></select>
    <br class="mobile-only" />
    <select id="category-menu"></select>
    <select id="scale-menu"></select>
    <br class="mobile-only" />
    <select id="instrument-menu"></select>
    <select id="tuning-menu"></select>
</section>

<hr />

<section id="fretboard"></section>
`;




