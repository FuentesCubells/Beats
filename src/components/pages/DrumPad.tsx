import './drumpad.css'
import PadWrapper from "../pads/padWrapper"
import Renderer from "../renderer/rendered"



function DrumPad (){
    return(
        <div className="drumPad-wrapper">
            <Renderer></Renderer>
            <PadWrapper></PadWrapper>
        </div>
    )
}

export default DrumPad