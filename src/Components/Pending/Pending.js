import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Draggable from 'react-draggable'

import './Pending.css';


const Pending = ({
  id,
  priority,
  text,
  status,
  handleCompletePending,
  handleDeletePending,
  dueDate,
}) => {

  let tomorrow = moment().add(1,'days');

  return (
    <Draggable>
      <div
        className={`pendingContainer px-3 mx-2 mb-3 ${moment(dueDate).isAfter(tomorrow, 'day') ? 'onTime' : 'criticalTime' }`}
      >
        <p className='pendingText my-2'>
          {text}
        </p>
        <p className='pendingData my-1'>Status: {_.capitalize(status)}</p>
        <p className='pendingData my-1'>Priority: {_.capitalize(priority)}</p>
        <p className='pendingData my-1'>Due Date: {dueDate}</p>
        <div className='actions my-1'>

          <Button
            size="sm"
            variant="primary"
            onClick={() => handleCompletePending(id)}
          >
            <FontAwesomeIcon icon={faCheck} />
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => handleDeletePending(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </div>
    </Draggable>
  );
}

export default Pending;
