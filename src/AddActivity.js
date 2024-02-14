import './AddActivity.css';

const AddActivity = () => {
    return (  
        <div className="add-activity">
            <input type="text" id="title" placeholder="title"></input>
            <input type="text" id = "description" placeholder="description"></input>
            <button>Add</button>
        </div>
    );
}
 
export default AddActivity;