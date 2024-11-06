import './pad.css';

function Pad({ label, onClick, isRecording }: any) {

    return (
        <div className='pad-wrapper'>
            <span className={`indicator ${isRecording ? 'active' : ''}`}></span>
            <div className='pad' onClick={onClick}>
                <span>{label}</span>
            </div>
        </div>
    );
}

export default Pad;
