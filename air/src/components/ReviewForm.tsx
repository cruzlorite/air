import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Modal, Button, FormGroup, FormCheck } from 'react-bootstrap';
import { useAppContext } from './AppContextProvider';
import { PROVIDERS, PROVIDER_MODELS, TOOLTIPS } from '../constants'

const ReviewForm: React.FC = () => {
  const {
    apiKey,
    setApiKey,
    provider,
    setProvider,
    model,
    setModel,
    models,
    setModels,
    discardPercentage,
    setDiscardPercentage,
    query,
    setQuery,
  } = useAppContext();

  const handleSelectProviderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setProvider(event.target.value)
    setModels(PROVIDER_MODELS[event.target.value])
    setModel(PROVIDER_MODELS[event.target.value][0])
  };

  const handleDiscardPercentageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDiscardPercentage(Number(event.target.value));
  };

  const handleSubmit = () => {
    console.log("")
  };

  return (
          <Form>
            <Row className="mb-3">
            <Form.Group as={Col} xs={6} controlId="formModel">
                <Form.Label>Provider</Form.Label>
                <Form.Select value={provider} onChange={handleSelectProviderChange}>
                    {PROVIDERS.map((provider) => (
                    <option key={provider}>{provider}</option>
                    ))}
                </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs={6} controlId="formApiKey">
                <OverlayTrigger placement="top" overlay={<Tooltip>{TOOLTIPS['API_KEY']}</Tooltip>}>
                    <Form.Label>API Key</Form.Label>
                </OverlayTrigger>
                <Form.Control type="text" placeholder="Enter provider API Key" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formModelToUse">
                <Form.Label>Model</Form.Label>
                <Form.Select>
                    {models.map((model) => (
                    <option key={model}>{model}</option>
                    ))}
                </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formDiscardPercentage">
                <Form.Label>Discard Percentage <span className="text-primary">{discardPercentage}%</span></Form.Label>
                <Form.Range value={discardPercentage} onChange={handleDiscardPercentageChange} className='form-range'/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formQuery">
                <Form.Label>Review Criteria</Form.Label>
                <Form.Control as="textarea" rows={2} style={{ resize: 'none' }}
                  placeholder="Write here useful context, research questions, etc..." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formPrompt">
                <Form.Label>Prompt</Form.Label>
                <Form.Control as="textarea" rows={4} style={{ resize: 'none' }}
                  placeholder="Write here the model prompt" />
                </Form.Group>
            </Row>
            <Button variant="primary" style={{ width: '100%' }} onClick={handleSubmit}>
                Start Review
            </Button>
        </Form>
  );
};

export default ReviewForm;
