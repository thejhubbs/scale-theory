function main() {
    //Create the default FretInstrument object; starting with Tuning object; standard EADGBE on a 6 string with 24 frets
    var tuning = ["E2", "A2", "D3", "G4", "B4", "E5"];
    var frets = 24;
    //Function is using array of note/octave pairs as a string, and parsing into Tuning object
    var defaultTuning = Tuning.parseStringNotes(tuning);
    //Pass in tuning object and default amount of frets.
    var defaultGuitar = new FretInstrument({tuning: defaultTuning, number_of_frets: frets});
    //Print the notes on the fretboard.
    defaultGuitar.printFretboard();

    //Default scale is C major.
    defaultKey = new Note({note: "C", octave: 3});
    defaultScaleType = ScaleType.grabByName("Major");
    defaultScale = new ScaleInstance({key: defaultKey, scale: defaultScaleType});
    //Call printScale to highlight the correct notes.
    defaultScale.printScale();



}

