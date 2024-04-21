import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col } from 'react-bootstrap';
import { Modal, Button, FormGroup, FormCheck } from 'react-bootstrap';
import ReviewForm from './ReviewForm';

interface Props {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewPapersModal: React.FC<Props> = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    handleClose(); // Close the modal after form submission
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review Papers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReviewForm/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReviewPapersModal;