function main() {
    const defaultGuitar = initializeFretInstrument();
    const defaultScale = initializeScale();

    initializeMenu('key', Note.diatonicKeyChoices(), 0);
    initializeMenu('scale', rawScaleText, 'name');
    initializeMenu('instrument', rawInstrumentData, 'description');

}

//Creates a default FretInstrument, prints, and returns it.
function initializeFretInstrument() {
    //Create the default FretInstrument object; starting with Tuning object; standard EADGBE on a 6 string with 24 frets
    var tuningArray = ["E2", "A2", "D3", "G4", "B4", "E5"];
    var frets = 24;
    //Function is using array of note/octave pairs as a string, and parsing into Tuning object
    var defaultTuning = Tuning.parseStringNotes(tuningArray);
    //Pass in tuning object and default amount of frets.
    var defaultGuitar = new FretInstrument({tuning: defaultTuning, number_of_frets: frets});
    //Print the notes on the fretboard.
    defaultGuitar.printFretboard();
    return defaultGuitar;
}

function initializeScale(){
    //Default scale is C major.
    defaultKey = new Note({note: "C", octave: 3});
    defaultScaleType = ScaleType.grabByName("Major");
    defaultScale = new ScaleInstance({key: defaultKey, scale: defaultScaleType});
    //Call printScale to highlight the correct notes.
    defaultScale.printScale();
    return defaultScale;
}

function initializeMenu(id, group, accessor){
    var menu = document.getElementById(`${id}-menu`);
    var menuOptions = "";
    group.forEach((item) => {
        menuOptions += `<option>${item[accessor]}</option>`;
    });
    menu.innerHTML = menuOptions;
}