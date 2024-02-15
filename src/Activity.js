import './Activity.css';
import { useState } from 'react';
import AddActivity from './AddActivity';

const Activity = () => {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const id = Date.now();
    setActivities((a) => [
      ...a,
      {
        id: id,
        title: title,
        description: description,
        completed: false,
      },
    ]);
    console.log(activities);
  };

  const handleDeleteActivity = (id) => {
    setActivities((a) => a.filter((activity) => activity.id !== id));
  };

  const handleCompleteActivity = (id) => {
    setActivities((a) =>
      a.map((activity) => {
        if (activity.id === id) {
          return { ...activity, completed: !activity.completed };
        }
        return activity;
      })
    );
  };

  return (
    <div>
        <div className='add'>
        <AddActivity handleAddActivity={handleAddActivity} />
        </div>
    <div className='activities'>
    {activities.map((activity) => (
        <div key={activity.id} className="activity-container">
          <div className="activity-title">
            <p>{activity.title}</p>
          </div>
          <div className="activity-description">
            <p id="description-container">{activity.description}</p>
            <p>{activity.completed ? 'Completed' : 'Not Completed'}</p>
            <button
              id={activity.id}
              onClick={(e) => {
                handleDeleteActivity(parseInt(e.target.id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Activity;
