const rawScaleText = [
    {
        name: "Major",
        pattern: [0, 2, 4, 5, 7, 9, 11]
    },
    {
        name: "Minor",
        pattern: [0, 2, 3, 5, 7, 8, 10]
    },
    {
        name: "Dorian",
        pattern: [0, 2, 3, 5, 7, 9, 10]
    },
    {
        name: "Phrygian",
        pattern: [0, 1, 3, 5, 7, 8, 10]
    },
    {
        name: "Lydian",
        pattern: [0, 2, 4, 6, 7, 9, 11]
    },
    {
        name: "Mixolydian",
        pattern: [0, 2, 4, 5, 7, 9, 10]
    },
    {
        name: "Aeolian",
        pattern: [0, 2, 3, 5, 7, 8, 10]
    },
    {
        name: "Locrian",
        pattern: [0, 1, 3, 5, 6, 8, 10]
    },
    
    {
        name: "Pentatonic Major",
        pattern: [0, 2, 4, 7, 9]
    },
    {
        name: "Pentatonic Minor",
        pattern: [0, 2, 4, 7, 9]
    },
    {
        name: "Blues Pentatonic Minor",
        pattern: [0, 2, 3, 5, 7, 8, 10]
    },


    {
        name: "Chromatic",
        pattern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }


];

rawInstrumentData = [
    {
        number_of_frets: 24,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'E2'],
        description: "Guitar, Standard Tuning, 24 frets"
    }, 
    {
        number_of_frets: 24,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'D2'],
        description: "Guitar, Drop D Tuning, 24 frets"
    }, 
    {
        number_of_frets: 24,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'E2', 'B1'],
        description: "Guitar, 7 String Standard Tuning, 24 frets"
    },
    {
        number_of_frets: 24,
        tuningArray: ['E5', 'B4', 'G4', 'D3', 'A2', 'C2'],
        description: "Guitar, Drop C Tuning, 24 frets"
    },
    {
        number_of_frets: 24,
        tuningArray: ['G3', 'D2', 'A1', 'E1'],
        description: "Bass, Standard Tuning, 24 frets"
    }
];