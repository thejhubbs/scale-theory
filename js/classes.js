class Note {
    constructor(attr) {
        this.note = attr.note;
        this.integerNote = Note.diatonic().indexOf(this.note);
        this.octave = attr.octave;
    }

    static parseNote(string) {
        var note, octave;
        if (string.length == 2) {
            note = string[0];
            octave = parseInt(string[1]);
        } else if (string.length == 3) {
            note = string[0] + string[1];
            octave = parseInt(string[2]);
        }
        return new Note({ note: note, octave: octave });
    }

    static diatonic() {
        return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    }

    //this is unfortuantely necessary as easiest fix for use of diatonic() with initializeMenu function; 
    //Those requirements assume youre passing hash, but instead we nest the strings and we call accessor 0
    static diatonicKeyChoices() {
        return [["C"], ["C#"], ["D"], ["D#"], ["E"], ["F"], ["F#"], ["G"], ["G#"], ["A"], ["A#"], ["B"]];
    }

    step(amount) {
        var rawNoteValue = this.integerNote + amount;
        var newNote = Note.diatonic()[rawNoteValue % 12];
        var newOctave = this.octave + Math.floor(rawNoteValue / 12);
        return new Note({ note: newNote, octave: newOctave });
    }
}

class ScaleType {
    constructor(attr) {
        this.name = attr.name;
        this.description = attr.description;
        this.pattern = attr.pattern;
    }

    get length() {
        return this.pattern.length;
    }

    static grabByName(name) {
        var scale;
        rawScaleText.forEach((item) => {
            if (item.name == name) {
                scale = item;
            }
        });
        return new ScaleType(scale);
    }

}

class ScaleInstance {
    constructor(attr) {
        this.scale = attr.scale;
        this.key = attr.key;
    }

    getNoteFromScale(position) {
        //For convention and calling, the root should be position 1, octave position 8. 
        //Accounting for index arrays starting at 0
        position = position - 1;
        var scaleLength = this.scale.length;

        //Factor for octaves
        var octaves = Math.floor(position / scaleLength);
        position = position % scaleLength;

        var distance_from_root = this.scale.pattern[position]
        return this.key.step(distance_from_root + (octaves * 12));
    }

    //Shorthand for above that uses array indexes.
    note(position) {
        return this.getNoteFromScale(position + 1);
    }

    notesInScale() {
        //Returns array of note objects
        var notes = [];
        for (let i = 0; this.scale.pattern.length > i; i++) {
            notes.push(this.note(i));
        }
        return notes;

    }

    noteStringArray() {
        //Returns array of just the note strings
        var noteStrings = [];
        this.notesInScale().forEach((item) => {
            noteStrings.push(item.note);
        });
        return noteStrings;
    }

    printScale() {
        var notes = this.noteStringArray();
        notes.forEach((note) => {
            var frets = document.getElementsByClassName(`${note}-note`);
            for (let i = 0; i < frets.length; i++) {
                frets[i].classList.add("highlighted-fret");
                if (note === notes[0]) {
                    frets[i].classList.add("root-fret");
                }
            }
        });

        var rootFrets = document.getElementsByClassName('root-fret');
        var fretboard = document.getElementById('fretboard');

        for (let i = 0; i < rootFrets.length; i++) {

            rootFrets[i].addEventListener('mouseover', (e) => {
                rootFrets[i].classList.add("hover-fret");
            });
            rootFrets[i].addEventListener('mouseout', (e) => {
                rootFrets[i].classList.remove("hover-fret");
            });

            rootFrets[i].addEventListener('click', (e) => {
                fretboard.scrollLeft = rootFrets[i].offsetLeft - 16;
                
                var s ="";
                while( s = document.querySelector('.selected-fret')){
                    s.classList.remove('selected-fret');
                }

                var fretNumber = rootFrets[i].getAttribute('fret');

                for (let j = 0; j < 5; j++) {
                    var fretNum = j + parseInt(fretNumber)
                    var fretsToHighlight = document.getElementsByClassName(`${fretNum}-fret`);
                
                    for (let k = 0; k < fretsToHighlight.length; k++) {
                        fretsToHighlight[k].classList.add('selected-fret');
                    }
                
                }

            });
        }


    }


}


class Tuning {
    constructor(attr) {
        this.strings = attr.strings;
    }

    static parseStringNotes(array_of_notes) {
        var string_array = [];
        array_of_notes.forEach((item) => {
            string_array.push(Note.parseNote(item));
        });
        return new Tuning({ strings: string_array });
    }


}

class FretInstrument {
    constructor(attr) {
        this.tuning = attr.tuning;
        this.number_of_frets = attr.number_of_frets;
    }

    printFretboard() {
        var fretboardHTML = "";
        this.tuning.strings.forEach((item) => {
            var returnHTML = "<span class='fret string-name'>" + item.note + item.octave + " | </span>";

            for (let i = 0; i < this.number_of_frets; i++) {
                var fretNote = item.step(i);
                returnHTML = returnHTML + "<span class='fret " + fretNote.note + "-note " + i + "-fret' fret='" + i + "'>" + fretNote.note + "</span>";
            }

            fretboardHTML += "<div>" + returnHTML + "</div>";

        });

        //When to write the fret number
        var fretArray = [0, 3, 5, 7, 10];
        var fretHTML = "<span class='fret'></span>";
        for (let i = 0; i < this.number_of_frets; i++) {
            var printFret = "";
            if (fretArray.includes(i % 12)) { printFret = i; }
            fretHTML += "<span class='fret string-name'>" + printFret + "</span>";
        }
        fretHTML = "<div>" + fretHTML + "</div>";

        document.getElementById('fretboard').innerHTML = fretHTML + fretboardHTML + fretHTML;

    }

    static grabByDescription(description) {
        var fretInstrument;
        rawInstrumentData.forEach((item) => {
            if (item.description == description) {
                fretInstrument = item;
            }
        });
        return new FretInstrument({ tuning: Tuning.parseStringNotes(fretInstrument.tuningArray), number_of_frets: fretInstrument.number_of_frets });
    }


}


