function main() {
    var defaultGuitar = initializeFretInstrument();
    var defaultScale = initializeScale();
    defaultGuitar.printFretboard();
    defaultScale.printScale();
    initializeMenus(defaultGuitar, defaultScale);


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
    return defaultGuitar;
}

function initializeScale(){
    //Default scale is C major.
    defaultKey = new Note({note: "C", octave: 3});
    defaultScaleType = ScaleType.grabByName("Major");
    defaultScale = new ScaleInstance({key: defaultKey, scale: defaultScaleType});
    //Call printScale to highlight the correct notes.
    return defaultScale;
}

function initializeMenus(defaultGuitar, defaultScale){
    createMenuHTML('key', Note.diatonicKeyChoices(), 0);
    createMenuHTML('scale', rawScaleText, 'name');
    createMenuHTML('instrument', rawInstrumentData, 'description');

    var keyMenu = document.getElementById('key-menu');
    keyMenu.onchange = function(){
        defaultScale.key = Note.parseNote(keyMenu.value + "3");
        defaultGuitar.printFretboard();
        defaultScale.printScale();
    }

    var scaleMenu = document.getElementById('scale-menu');
    scaleMenu.onchange = function(){
        defaultScale.scale = ScaleType.grabByName(scaleMenu.value);
        defaultGuitar.printFretboard();
        defaultScale.printScale();
    }

    var instrumentMenu = document.getElementById('instrument-menu');
    instrumentMenu.onchange = function(){
        var newInstrument = FretInstrument.grabByDescription(instrumentMenu.value);
        defaultGuitar = newInstrument;
        defaultGuitar.printFretboard();
        defaultScale.printScale();
    }
}

function createMenuHTML(id, group, accessor){
    var menu = document.getElementById(`${id}-menu`);
    var menuOptions = "";
    group.forEach((item) => {
        menuOptions += `<option value="${item[accessor]}">${item[accessor]}</option>`;
    });
    menu.innerHTML = menuOptions;
}