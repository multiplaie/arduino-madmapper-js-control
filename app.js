if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function success(midiAccess){
    console.log(midiAccess)
}

function failure(){
    console.log('nope')
}