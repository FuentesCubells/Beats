import Actions from '../actions/actions'
import './renderer.css'
import WaveVisualizer from './visualizer/visualizer'


function Renderer({isKickActive}: any) {
    return (
        <>
            <div className='renderer-wrapper'>
                <div className='renderer'>
                    <WaveVisualizer isKickActive={isKickActive}></WaveVisualizer>
                </div>
                <div className='action-wrapper'>
                    <Actions></Actions>
                    <Actions></Actions>
                    <Actions></Actions>
                </div>
            </div>
        </>
    )
}


export default Renderer