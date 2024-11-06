import Pad from './pad/pad';
import './padWrapper.css';
import * as Tone from 'tone';

function PadWrapper({setActivePad} : any) {

    const playKick = async () => {
        await Tone.start();
        const membrane = new Tone.MembraneSynth({
            pitchDecay: 0.05,
            octaves: 4,
            oscillator: { type: 'sine' },
            envelope: { attack: 0.01, decay: 0.4, sustain: 0.01, release: 1.2 }
        }).toDestination();
        membrane.triggerAttackRelease('C2', '8n');
        setActivePad({
            type: 'kick',
            attack: 0.01,
            decay: 0.4,
            release: 1.2,
            octaves: 4
        });
    };
    
    const playSnare = async () => {
        await Tone.start();
        const noise = new Tone.NoiseSynth({
            noise: { type: 'pink' },
            envelope: { attack: 0.01, decay: 0.2, sustain: 0, release: 1.2 }
        }).toDestination();
        noise.triggerAttackRelease('16n');
        setActivePad({
            type: 'snare',
            attack: 0.01,
            decay: 0.2,
            release: 1.2,
            octaves: 1
        });
    };
    
    const playHihat = async () => {
        await Tone.start();
        const metal = new Tone.MetalSynth({
            envelope: { attack: 0.001, decay: 0.1, release: 0.1 },
            harmonicity: 5.1,
            modulationIndex: 32,
            resonance: 4000,
            octaves: 1.5
        }).toDestination();
        metal.triggerAttackRelease('C1', '16n');
        setActivePad({
            type: 'hihat',
            attack: 0.001,
            decay: 0.1,
            release: 0.1,
            octaves: 1.5
        });
    };
    
    const playClap = async () => {
        await Tone.start();
        const noise = new Tone.NoiseSynth({
            noise: { type: 'pink' },
            envelope: { attack: 0.01, decay: 0.2, sustain: 0.1, release: 0.8 }
        }).toDestination();
        noise.triggerAttackRelease('16n');
        setActivePad({
            type: 'clap',
            attack: 0.01,
            decay: 0.2,
            release: 0.8,
            octaves: 1
        });
    };
    
    const playTom = async () => {
        await Tone.start();
        const tom = new Tone.MembraneSynth({
            pitchDecay: 0.05,
            octaves: 7,
            oscillator: { type: 'triangle' },
            envelope: { attack: 0.01, decay: 0.4, sustain: 0.1, release: 1.0 }
        }).toDestination();
        tom.triggerAttackRelease('A2', '8n');
        setActivePad({
            type: 'tom',
            attack: 0.01,
            decay: 0.4,
            release: 1.0,
            octaves: 7
        });
    };
    
    const playCymbal = async () => {
        await Tone.start();
        const noise = new Tone.NoiseSynth({
            noise: { type: 'white' },
            envelope: { attack: 0.01, decay: 0.2, sustain: 0, release: 0.5 }
        }).toDestination();
        noise.triggerAttackRelease('16n');
        setActivePad({
            type: 'cymbal',
            attack: 0.01,
            decay: 0.2,
            release: 0.5,
            octaves: 1
        });
    };
    
    const playBongo = async () => {
        await Tone.start();
        const bongo = new Tone.MembraneSynth({
            pitchDecay: 0.05,
            octaves: 2,
            oscillator: { type: 'sine' },
            envelope: { attack: 0.01, decay: 0.1, sustain: 0.1, release: 0.5 }
        }).toDestination();
        bongo.triggerAttackRelease('G2', '8n');
        setActivePad({
            type: 'bongo',
            attack: 0.01,
            decay: 0.1,
            release: 0.5,
            octaves: 2
        });
    };
    
    const playCowbell = async () => {
        await Tone.start();
        const metal = new Tone.MetalSynth({
            envelope: { attack: 0.001, decay: 0.2, release: 0.3 },
            harmonicity: 5.1,
            modulationIndex: 32,
            resonance: 4000,
            octaves: 1.5
        }).toDestination();
        metal.triggerAttackRelease('C3', '16n');
        setActivePad({
            type: 'cowbell',
            attack: 0.001,
            decay: 0.2,
            release: 0.3,
            octaves: 1.5
        });
    };
    
    // Nuevo instrumento 1: Bass Drum
    const playBassDrum = async () => {
        await Tone.start();
        const membrane = new Tone.MembraneSynth({
            pitchDecay: 0.1,
            octaves: 6,
            oscillator: { type: 'triangle' },
            envelope: { attack: 0.01, decay: 0.5, sustain: 0.01, release: 0.8 }
        }).toDestination();
        membrane.triggerAttackRelease('C2', '16n');
        setActivePad({
            type: 'bassdrum',
            attack: 0.01,
            decay: 0.5,
            release: 0.8,
            octaves: 6
        });
    };
    
    // Nuevo instrumento 2: Snare Roll
    const playSnareRoll = async () => {
        await Tone.start();
        const noise = new Tone.NoiseSynth({
            noise: { type: 'pink' },
            envelope: { attack: 0.009, decay: 0.2, sustain: 0.3 }
        }).toDestination();
        noise.triggerAttackRelease('16n', '2n');
        setActivePad({
            type: 'snareRoll',
            attack: 0.009,
            decay: 0.2,
            release: 1,
            octaves: 1
        });
    };
    
    // Nuevo instrumento 3: Tom Drum
    const playTomDrum = async () => {
        await Tone.start();
        const tom = new Tone.MembraneSynth({
            pitchDecay: 0.05,
            octaves: 3,
            oscillator: { type: 'sine' },
            envelope: { attack: 0.01, decay: 0.4, sustain: 0.1, release: 1.0 }
        }).toDestination();
        tom.triggerAttackRelease('B2', '8n');
        setActivePad({
            type: 'tomDrum',
            attack: 0.01,
            decay: 0.4,
            release: 1.0,
            octaves: 3
        });
    };
    
    // Nuevo instrumento 4: Clap Roll
    const playClapRoll = async () => {
        await Tone.start();
        const noise = new Tone.NoiseSynth({
            noise: { type: 'pink' },
            envelope: { attack: 0.02, decay: 0.2, sustain: 0.3, release: 1.0 }
        }).toDestination();
        noise.triggerAttackRelease('16n', '2n');
        setActivePad({
            type: 'clapRoll',
            attack: 0.02,
            decay: 0.2,
            release: 1.0,
            octaves: 1
        });
    };
    

    return (
        <div className="pad-Wrapper">
            <Pad label="0" onClick={playKick}/>
            <Pad label="1" onClick={playSnare} />
            <Pad label="2" onClick={playHihat} />
            <Pad label="3" onClick={playClap} />
            <Pad label="4" onClick={playTom} />
            <Pad label="5" onClick={playCymbal} />
            <Pad label="6" onClick={playBongo} />
            <Pad label="7" onClick={playCowbell} />
            <Pad label="8" onClick={playBassDrum} />
            <Pad label="9" onClick={playSnareRoll} />
            <Pad label="10" onClick={playTomDrum} />
            <Pad label="11" onClick={playClapRoll} />
            <Pad label="12" onClick={playBassDrum} />
            <Pad label="13" onClick={playSnareRoll} />
            <Pad label="14" onClick={playTomDrum} />
            <Pad label="15" onClick={playClapRoll} />
        </div>
    );
}

export default PadWrapper;
