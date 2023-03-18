import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PendingSchema from './ValidationSchema';

import './CreatePendingModal.css'

const CreatePendingModal = ({ show, handleClose, handleSubmit }) => {
  const today = new Date();
  const date = today.toISOString().substring(0, 10);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new pending</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ priority: 'medium', text: '', status: 'active', dueDate: date }}
          validationSchema={PendingSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='my-2'>
                <label htmlFor="priority">Priority</label>
                <Field
                  className="formField"
                  as="select"
                  name="priority"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Field>
                <ErrorMessage className='error' name="priority" component="div" />
                <label htmlFor="text">Text</label>
                <Field as='textarea' className="formField textArea" type="text" name="text" />
                <ErrorMessage className='error' name="text" component="div" />
                <label htmlFor="dueDate">Due Date</label>
                <Field className="formField" type="date" name="dueDate" />
                <ErrorMessage className='error' name="dueDate" component="div" />
                <label htmlFor="status">Status</label>
                <Field
                  className="formField"
                  as="select"
                  name="status"
                >
                  <option value="active">Active</option>
                  <option value="done">Done</option>
                </Field>
                <ErrorMessage className='error' name="status" component="div" />
              </div>
              <Button
                className='mt-4'
                size='xl'
                variant='primary'
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>

    </Modal>
  );
}

export default CreatePendingModal;