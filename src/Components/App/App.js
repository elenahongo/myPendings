import { useState } from 'react';

import Dashboard from '../Dashboard/Dashboard';
import './App.css';

let nextId = 0

const App = () => {
  const [pendings, setPendings] = useState([])
  const [activeCount, setActiveCount] = useState(0)
  const [doneCount, setDoneCount] = useState(0)

  const handleAddPending = (value) => {
    setPendings([
      ...pendings,
      {
        id: nextId++,
        ...value
      }
    ]);
    if (value.status === 'active') {
      setActiveCount(activeCount + 1)
    } else if (value.status === 'done') {
      setDoneCount(doneCount + 1)
    }
  }
  const handleCompletePending = (id) => {
    let newPendingsState = [...pendings];
    const pendingIndex = newPendingsState.findIndex((element => element.id === id));
    newPendingsState[pendingIndex].status = 'done'
    setPendings(newPendingsState);
    setDoneCount(doneCount + 1)
    setActiveCount(activeCount - 1)
  }
  const handleDeletePending = (id) => {
    let newPendingsState = [...pendings];
    const pendingIndex = newPendingsState.findIndex((element => element.id === id));
    newPendingsState[pendingIndex].status = 'deleted'
    setPendings(newPendingsState);
    setActiveCount(activeCount - 1)
  }

  const activePendings = pendings.filter((element) => element.status === 'active')

  return (
    <div className="container px-0">
      <h1 className='text-center py-2'>My pendings</h1>
      <div className="item dashboard px-5 py-5">
        <Dashboard
          activePendings={activePendings}
          handleAddPending={handleAddPending}
          handleCompletePending={handleCompletePending}
          handleDeletePending={handleDeletePending}
        />
      </div>
      <div className="px-5 py-4">
        <p className="counter">Active: {activeCount}</p>
        <p className="counter mx-4">Done: {doneCount}</p>
      </div>

    </div>
  );
}

export default App;
