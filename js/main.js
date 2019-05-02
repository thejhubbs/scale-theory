function main() {
    //Create the default tuning, standard EADGBE on a 6 string
    var defaultTuning = Tuning.parseStringNotes(["E2", "A2", "D3", "G4", "B4", "E5"]);
    // 
    var defaultGuitar = new FretInstrument({tuning: defaultTuning, number_of_frets: 24});
    defaultGuitar.printFretboard();

    
    key = new Note({note: "C", octave: 3});
    majorScale = ScaleType.grabByName("Major");
    


}

