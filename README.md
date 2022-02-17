# Simple script to sens midi from NodeJs

there is an exemple of how sending midi signal with a web page.


## Install 

You need to install NodeJs, express and easymidi.

```
mkdir Project
cd Project
npm init
npm install express
npm install easymidi
```

To complete the operation, install [LoopMidi](https://www.tobias-erichsen.de/software/loopmidi.html). It will create a virtual MIDI Controller
![LoopMidi](https://i.imgur.com/VDTLX2X.png)

AND

Install [Midi-OX](http://www.midiox.com/). It helps you to check logs from Midi signal.

--- 

## Configure

### LoopMidi
Start LoopMidi and create a virtual midi controller

### Midi-OX
Start midi-OX and link loopMidi with

### Main.js
Remplace the name of vitual midi device into main.js at line 3

``` 
let output = new easymidi.Output("HERE THE NAME OF THE DEVICE") 
```

---

## Start

Start the script main.js to display the web page.
```
node mais.js
```

And go to [localhost:3000](http://localhost:3000)

Each time you click on the "on/off" button, you send a midi signal that can be check in Midi-OX monitor

![monitor](https://res.cloudinary.com/practicaldev/image/fetch/s--0W2RUksL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/kGJHXr6.png)

The signal is start by easymidi, thought Loopmidi and catch by Midi-OX

---

## Source

Checkout the [easymidi documentation](https://github.com/dinchak/node-easymidi) to see all your possibilities.

You can see how it used with this [video](https://www.youtube.com/watch?v=vW2Lve_hMzg) 

Enjoy !