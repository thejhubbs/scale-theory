class Note {
    constructor(attr) {
        this.note = attr.note;
        this.integerNote = Note.diatonic().indexOf(this.note);
        this.octave = attr.octave;
    }

    static parseNote(string){
        var note, octave;
        if(string.length == 2){
            note = string[0];
            octave = parseInt(string[1]);
        } else if (string.length == 3) {
            note = string[0] + string[1];
            octave = parseInt(string[2]);
        }
        return new Note({note: note, octave: octave});
    }

    static diatonic(){
        return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    }

    step(amount){
        var newNote = Note.diatonic()[(this.integerNote + amount) % 12];
        var newOctave = this.octave;
        if(this.integerNote + amount >= 12) {
            newOctave++;
        }
        return new Note({note: newNote, octave: newOctave});
    }
}

class ScaleType {
    constructor(attr) {
        this.name = attr.name;
        this.description = attr.description;
        this.pattern = attr.pattern;
    }

    static grabByName(name){
        var scale;
        rawScaleText.forEach((item) => {
            if(item.name == name){
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

    getNoteFromScale(position){
        //For convention and calling, the root should be position 1, octave position 8. 
        //Accounting for index arrays starting at 0
        position = position-1;
        //Factor for octaves
        var octaves = Math.floor(position/7);

        position = position % 7;

        var distance_from_root = this.scale.pattern[position]
        return this.key.step( distance_from_root + (octaves * 12) );
    }

    //Shorthand for above that uses array indexes.
    note(position){
        return this.getNoteFromScale(position+1);
    }

    notesInScale() {
        //Returns array of note objects
        var notes = [];
        for(let i =0; this.scale.pattern.length > i; i++){
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
            for(let i =0; i < frets.length; i++){
                frets[i].classList.add("highlighted-fret");
            }
        });
    }


}


class Tuning { 
    constructor(attr){
        this.strings = attr.strings;
    }

    static parseStringNotes(array_of_notes){
        var string_array = [];
        array_of_notes.forEach((item) => {
            string_array.push(Note.parseNote(item));
        });
        return new Tuning( {strings: string_array} );
    }

    
}

class FretInstrument {
    constructor(attr) {
        this.tuning = attr.tuning;
        this.number_of_frets = attr.number_of_frets;        
    }

    printFretboard(){
        var fretboardHTML = "";
        this.tuning.strings.reverse().forEach((item)=>{
            var returnHTML = item.note + item.octave + "| ";

            for(let i=0; i < this.number_of_frets; i++) {
                var fretNote = item.step(i);
                returnHTML = returnHTML + "<span class='fret " + fretNote.note + "-note '>" + fretNote.note + " </span> ";
            }

            fretboardHTML += "<div>" + returnHTML + "</div>";
        
        });
        document.getElementById('fretboard').innerHTML = fretboardHTML;
    }




}


