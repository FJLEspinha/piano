import * as Tone from 'tone'
import {createRoot} from 'react-dom/client'
const synth = new Tone.Synth().toDestination();

let notes = ['c4', 'c#4', 'd4' , 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 
'c5', 'c#5', 'd5' , 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5',]

let noteKeys = {
    'a': 'c4', 's': 'd4', 'd': 'e4', 'f': 'f4',
    'g': 'g4', 'h': 'a4', 'j': 'b4', 'k': 'c5'
}
/*
notes.forEach(note => document.getElementById(note)
    .addEventListener('mousedown', () => synth.triggerAttackRelease(note, "8n"))
)
*/

function noteSound(event) {

    synth.triggerAttackRelease(noteKeys[event.key.toLowerCase()], "8n")
}
// teclas de teclado
document.getElementById('body').addEventListener('keypress', noteSound)

// react
function PianoKey(props){
    return  <button className={props.note.length===2 ? 'white': 'black'} 
        onClick={() => synth.triggerAttackRelease(props.note, "8n")} id={props.note}>{props.note}</button>
}
// Componete react
function PianoKeys(){
    
    return notes.map(note =><PianoKey key={note} note={note}/>   )
    
}


// en react esta linea siempre esta y la del importe
const root = createRoot(document.getElementById('root'))
root.render(<PianoKeys/>) //esto es jsx que existe en el mundo de react