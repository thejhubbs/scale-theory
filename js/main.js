function main() {
    initializeScreen('dynamic-box');
}

function initializeScreen(id) {
    var dynamicBox = document.getElementById(id);
    dynamicBox.innerHTML = fretboardRawHTML;

    var defaultGuitar = initializeFretInstrument();
    var defaultScale = initializeScale();
    defaultGuitar.printFretboard();
    defaultScale.printScale();

    initializeMenus(defaultGuitar, defaultScale);
    initializeUserMenu();
}

//Creates a default FretInstrument, prints, and returns it.
function initializeFretInstrument() {
    //Create the default FretInstrument object; starting with Tuning object; standard EADGBE on a 6 string with 24 frets
    var tuningArray = ['E5', 'B4', 'G4', 'D3', 'A2', 'E2'];
    var frets = 23;
    //Function is using array of note/octave pairs as a string, and parsing into Tuning object
    var defaultTuning = Tuning.parseStringNotes(tuningArray);
    //Pass in tuning object and default amount of frets.
    var defaultGuitar = new FretInstrument({ tuning: defaultTuning, number_of_frets: frets });
    //Print the notes on the fretboard.
    return defaultGuitar;
}

function initializeScale() {
    //Default scale is C major.
    defaultKey = new Note({ note: "C", octave: 3 });
    defaultScaleType = ScaleType.grabByName("Major");
    defaultScale = new ScaleInstance({ key: defaultKey, scale: defaultScaleType });
    //Call printScale to highlight the correct notes.
    return defaultScale;
}

function initializeUserMenu() {
    var instructions = document.getElementById("instructions");
    var contact = document.getElementById("contact");
    var body = document.querySelector('body');
    var contactContent = document.getElementById("contactContent");
    var instructionsContent = document.getElementById("instructionsContent");

    body.addEventListener('click', (e)=>{
        if(e.target.getAttribute('id') == 'contact'){
            e.preventDefault();
            instructionsContent.classList.remove('show-menu');
            contactContent.classList.toggle('show-menu');
        }
        else if(e.target.getAttribute('id') == 'instructions'){
            e.preventDefault();
            contactContent.classList.remove('show-menu');
            instructionsContent.classList.toggle('show-menu');
        }
        else {
            instructionsContent.classList.remove('show-menu');
            contactContent.classList.remove('show-menu');
        }
    });
}

function initializeMenus(defaultGuitar, defaultScale) {
    createMenuHTML('key', Note.diatonicKeyChoices(), 0);

    createMenuHTML('category', rawScaleText, 'category');
    createMenuHTML('scale', ScaleType.scalesWithCategory('Basic'), 'name');
 
    createMenuHTML('instrument', rawInstrumentData, 'instrument');
    createMenuHTML('tuning', FretInstrument.tuningsByInstrument('Guitar'), 'description');

    //When changed, update accordingly.
    var keyMenu = document.getElementById('key-menu');
    keyMenu.onchange = function () {
        defaultScale.key = Note.parseNote(keyMenu.value + "3");
        defaultGuitar.printFretboard();
        defaultScale.printScale();
    }

    var categoryMenu = document.getElementById('category-menu');
    categoryMenu.onchange = function() {
        var scales = ScaleType.scalesWithCategory(categoryMenu.value);
        createMenuHTML('scale', scales, 'name');
        defaultScale.scale = ScaleType.grabByName(scales[0]['name']);
        defaultGuitar.printFretboard();
        defaultScale.printScale();
    
    }

    var scaleMenu = document.getElementById('scale-menu');
    scaleMenu.onchange = function () {
        defaultScale.scale = ScaleType.grabByName(scaleMenu.value);
        defaultGuitar.printFretboard();
        defaultScale.printScale();
    }

    var instrumentMenu = document.getElementById('instrument-menu');
    instrumentMenu.onchange = function() {
        var instruments = FretInstrument.tuningsByInstrument(instrumentMenu.value);
        createMenuHTML('tuning', instruments, 'description');
        var newInstrument = FretInstrument.grabByDescription(instruments[0]['description']);
        defaultGuitar = newInstrument;
        defaultGuitar.printFretboard();
        defaultScale.printScale();
    
    }

    var tuningMenu = document.getElementById('tuning-menu');
    tuningMenu.onchange = function () {
        var newInstrument = FretInstrument.grabByDescription(tuningMenu.value);
        defaultGuitar = newInstrument;
        defaultGuitar.printFretboard();
        defaultScale.printScale();
    }
}

function createMenuHTML(id, group, accessor, secondAccessor = null) {
    var menu = document.getElementById(`${id}-menu`);
    var menuOptions = "";
    var checked = [];
    group.forEach((item) => {
        var value = item[accessor];
        if(id == "category"){ var str = `<option value="${value}">[-${value}-]</option>`; }
        else {var str = `<option value="${value}">${value}</option>`;}
        if(checked.indexOf(value) < 0) { menuOptions += str; checked.push(value); }
    });
    menu.innerHTML = menuOptions;
}
