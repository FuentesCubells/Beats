// Actions.jsx
import './actions.css';

function Actions({ toggleRecording, isRecording } : any) {
    return (
        <div className='action-wrapper'>
            <div 
                className={`action-pad record ${isRecording ? 'active' : ''}`}
                onClick={toggleRecording}>
                <span>{isRecording ? 'STOP' : 'REC'}</span>
            </div>
        </div>
    );
}

export default Actions;
