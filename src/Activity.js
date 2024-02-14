import './Activity.css';

const Activity = (props) => {
    return ( 
        <div className="activity-container">
            <div className="activity-title">
                <p>{props.title}</p>
            </div>
            <div className="activity-description">
                <p id='desctiption-container'>{props.description}</p>
                <p>{props.completerd}</p>
                <button id={props.id}>Delete</button>
            </div>
        </div>

     );
}
 
export default Activity;