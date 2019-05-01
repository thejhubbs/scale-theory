const rawScaleText = [
    {
        name: "Major",
        pattern: [0, 2, 4, 5, 7, 9, 11],
        description: "A happy sounding scale"
    },
    {
        name: "Minor",
        pattern: [0, 2, 3, 5, 7, 8, 10],
        description: "A sad sounding scale"
    }

];

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
        var notes = [];
        for(let i =0; this.scale.pattern.length > i; i++){
            notes.push(this.note(i));
        }
        return notes;

    }
}

class Note {
    constructor(attr) {
        this.note = attr.note;
        this.integerNote = Note.diatonic().indexOf(this.note);
        this.octave = attr.octave;
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

majorScale = ScaleType.grabByName("Major");
minorScale = ScaleType.grabByName("Minor");
console.log(majorScale);
console.log(minorScale);

//
//KEY TESTS
//
key = new Note({note: "C", octave: 3});
if(!(key.note === "C")){ console.log(key.note); }
if(!(key.integerNote === 0)){ console.log(key.integerNote); }
if(!(key.octave === 3)){ console.log(key.octave); }

if(!(key.step(0).note === "C")){console.log( "KEY.STEP() Should be C:" +  key.step(0).note);}
if(!(key.step(0).octave === 3)){console.log( "KEY.STEP() Should be 3:" +  key.step(0).octave);}

if(!(key.step(1).note === "C#")){console.log( "KEY.STEP() Should be C#:" +  key.step(1).note);}
if(!(key.step(1).octave === 3)){console.log( "KEY.STEP() Should be 3:" +  key.step(1).octave);}

if(!(key.step(2).note === "D")){console.log( "KEY.STEP() Should be D:" +  key.step(2).note);}
if(!(key.step(2).octave === 3)){console.log( "KEY.STEP() Should be 3:" +  key.step(2).octave);}

if(!(key.step(12).note === "C")){console.log( "KEY.STEP() Should be C:" +  key.step(12).note);}
if(!(key.step(12).octave === 4)){console.log( "KEY.STEP() Should be 4:" +  key.step(12).octave);}

if(!(key.step(13).note === "C#")){console.log( "KEY.STEP() Should be C#:" +  key.step(13).note);}
if(!(key.step(13).octave === 4)){console.log( "KEY.STEP() Should be 4:" +  key.step(13).octave);}


//
//SCALE INSTANCE TESTS
//
cMajorScale = new ScaleInstance({key: key, scale: majorScale});
if(!(cMajorScale.getNoteFromScale(1).note === "C")){console.log( "SCALEINSTANCE.GETNOTEFROMSCALE(1) Should be C:" + cMajorScale.getNoteFromScale(1).note );}
if(!(cMajorScale.getNoteFromScale(3).note === "E")){console.log( "SCALEINSTANCE.GETNOTEFROMSCALE(3) Should be E:" +  cMajorScale.getNoteFromScale(3).note );}
if(!(cMajorScale.getNoteFromScale(5).note === "G")){console.log( "SCALEINSTANCE.GETNOTEFROMSCALE(5) Should be G:" +  cMajorScale.getNoteFromScale(5).note );}
if(!(cMajorScale.getNoteFromScale(8).note === "C")){console.log(  "SCALEINSTANCE.GETNOTEFROMSCALE(8) Should be C:" + cMajorScale.getNoteFromScale(8).note );}
if(!(cMajorScale.getNoteFromScale(11).note === "F")){console.log(  "SCALEINSTANCE.GETNOTEFROMSCALE(11) Should be F:" + cMajorScale.getNoteFromScale(11).note );}

if((cMajorScale.notesInScale())){console.log(cMajorScale.notesInScale());};

aKey = new Note({note: "A", octave: 3});
aMinorScale = new ScaleInstance({key: aKey, scale: minorScale});

if((cMajorScale.notesInScale())){console.log(aMinorScale.notesInScale());};


