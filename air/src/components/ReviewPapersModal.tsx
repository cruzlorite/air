import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col } from 'react-bootstrap';
import { Modal, Button, FormGroup, FormCheck } from 'react-bootstrap';

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
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} xs={6} controlId="formApiKey">
                <Form.Label>API Key</Form.Label>
                <Form.Control type="text" placeholder="Enter API Key" />
                </Form.Group>
                <Form.Group as={Col} xs={6} controlId="formModel">
                <Form.Label>Model</Form.Label>
                <Form.Select defaultValue="ChatGPT">
                    <option>ChatGPT</option>
                    <option>OLlama</option>
                    {/* Add more options as needed */}
                </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formModelToUse">
                <Form.Label>Model to Use</Form.Label>
                <Form.Control type="text" placeholder="Enter model to use" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formDiscardPercentage">
                <Form.Label>Discard Percentage</Form.Label>
                <Form.Range />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formQuery">
                <Form.Label>Query</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter query" />
                </Form.Group>
            </Row>
            </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReviewPapersModal;
