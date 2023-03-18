import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import CreatePendingModal from '../CreatePendingModal/CreatePendingModal';
import Pending from '../Pending/Pending';
import './Dashboard.css';

const Dashboard = ({
  activePendings,
  handleAddPending,
  handleCompletePending,
  handleDeletePending,
}) => {
  const [displayModal, setDisplayModal] = useState(false)

  const handleSubmit = (values) => {
    console.log(values)
    handleAddPending(values)
    setDisplayModal(false)
  }

  const handleClose = () => setDisplayModal(false);
  const handleShow = () => setDisplayModal(true);

  return (
    <>
      <div className="dashboardContainer">
        <button className="addButton mx-2" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlus} size="5x" />
        </button>
        {activePendings.map((pending) => (
          <Pending
            handleCompletePending={handleCompletePending}
            handleDeletePending={handleDeletePending}
            key={pending.id}
            {...pending}
          />
        ))}
      </div>
      {displayModal && (
        <CreatePendingModal
          handleClose={handleClose}
          show={displayModal}
          handleSubmit={handleSubmit}
          activePendings={activePendings}
        />
      )}
    </>
  );
}

export default Dashboard;
