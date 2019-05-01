function main() {
    var defaultTuning = Tuning.parseStringNotes(["E2", "A2", "D3", "G4", "B4", "E5"]);
    var defaultGuitar = new FretInstrument({tuning: defaultTuning, number_of_frets: 24});
    defaultGuitar.printFretboard();
    
}

