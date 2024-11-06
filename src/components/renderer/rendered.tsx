import Actions from '../actions/actions';
import './renderer.css';
import WaveVisualizer from './visualizer/visualizer';

function Renderer({ activePad }: any) {
    return (
        <div className='renderer-wrapper'>
            <div className='renderer'>
            <WaveVisualizer activePad={activePad} />
            </div>
            <div className='action-wrapper'>
                <Actions />
                <Actions />
                <Actions />
            </div>
        </div>
    );
}

export default Renderer;
