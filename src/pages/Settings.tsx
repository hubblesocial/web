import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';
import { Card, Form, Button, Tabs, Tab } from 'react-bootstrap';
import '../css/settings.scss';

const SettingsPage: React.FC = () => {
  useEffect(() => {
    document.title = `Settings - Axioris`;
  }, []);

  return (
    <div className="app-container d-flex">
      <Sidebar activeId="settings" isAuthenticated />
      <main className="settings-main flex-grow-1 p-4">
        <h1 className="mb-4">Settings</h1>
        <Tabs defaultActiveKey="profile" className="mb-3">
          <Tab eventKey="profile" title="Profile">
            <Card className="mb-3">
              <Card.Header>
                <h5 className="mb-0">Profile Settings</h5>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="displayName">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your display name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="bio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Write something..." />
                  </Form.Group>
                  <Button type="submit" variant="primary">Save Changes</Button>
                </Form>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="appearance" title="Appearance">
            <Card className="mb-3">
              <Card.Header>
                <h5 className="mb-0">Appearance</h5>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="theme">
                    <Form.Label>Theme</Form.Label>
                    <Form.Select defaultValue="light">
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </Form.Select>
                  </Form.Group>
                  <Button type="submit" variant="primary">Save Changes</Button>
                </Form>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
        <Form className="mt-4">
          <Button type="submit" variant="danger">Logout</Button>
        </Form>
      </main>
    </div>
  );
};

export default SettingsPage;
