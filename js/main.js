
class FretInstrument {
    constructor(attr) {
        this.tuning = attr.tuning;
        this.number_of_frets = attr.number_of_frets;        
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

low_e_string = new Note({note: "E", octave: 2});
a_string = new Note({note: "A", octave: 2});
d_string = new Note({note: "D", octave: 3});
g_string = new Note({note: "G", octave: 4});
b_string = new Note({note: "B", octave: 4});
high_e_string = new Note({note: "E", octave:5});

standardTuning = new Tuning( {strings: [ low_e_string, a_string, d_string, g_string, b_string, high_e_string ]} );
standardParseTuning = Tuning.parseStringNotes(["E2", "A2", "D3", "G4", "B4", "E5"]);
console.log(standardParseTuning);
console.log(standardTuning);

sgGuitar = new FretInstrument({tuning: standardTuning, number_of_frets: 24});
miniGuitar = new FretInstrument({tuning: standardTuning, number_of_frets: 16});
console.log(sgGuitar);
console.log(miniGuitar);