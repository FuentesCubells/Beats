import './drumpad.css'
import PadWrapper from "../pads/padWrapper"
import Renderer from "../renderer/rendered"
import { useState } from 'react';


function DrumPad (){

    const [activePad, setActivePad] = useState(null);

    return(
        <div className="drumPad-wrapper">
            <Renderer activePad={activePad} />
            <PadWrapper setActivePad={setActivePad} />
        </div>
    )
}

export default DrumPad