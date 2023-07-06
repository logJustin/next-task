import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'

export default function ListItem({ task }) {
    return (
        <li className="list-item">
            <div className="info-container">
                <TickIcon />
                <p className="task-title">{task.title}</p>
                <ProgressBar />
            </div>

            <div className='button-container'>
                <button className='edit'>EDIT</button>
                <button className='delete'>DELETE</button>
            </div>
        </li>
    );
}