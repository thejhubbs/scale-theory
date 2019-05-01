
//
//ScaleType Tests
//
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

d_3_note = Note.parseNote("D3");
cs_4_note = Note.parseNote("C#4");

if(!(d_3_note.note === "D")){console.log( "KEY.PARSENOTE() Should be D:" +  d_3_note.note);}
if(!(d_3_note.octave === 3)){console.log( "KEY.PARSENOTE() Should be 3:" +  d_3_note.octave);}

if(!(cs_4_note.note === "C#")){console.log( "KEY.PARSENOTE() Should be C#:" +  cs_4_note.note);}
if(!(cs_4_note.octave === 4)){console.log( "KEY.PARSENOTE() Should be 4:" +  cs_4_note.octave);}

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


