import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AgentNavbar } from '../AgentNavbar/AgentNavbar';

import './StudentDetails.scss';

const services = require('../../services/pages/agentRoute');
const ls = require('local-storage');

export const StudentDetails = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [place, setPlace] = useState('');
	const [contact_number, setContactNumber] = useState('');
	const [email, setEmail] = useState('');
	const [course, setCourse] = useState('');

	const handleSubmit = () => {
		const obj = {
			agent_id: ls.get('id'),
			name: name,
			place: place,
			contact_number: contact_number,
			email: email,
			course: course,
		};

		services.referralSubmit(obj, (error, result) => {
			if (result) {
				navigate('/status');
			} else {
				alert('Something went wrong!');
			}
		});
	};

	return (
		<div className="student-details">
			<AgentNavbar />

			<div className="student-profile-main-div">
				<div className="student-profile-form-div">
					<h2 style={{ marginBottom: '20px', color: 'white', backgroundColor: '#193942', padding: '15px', textAlign: 'center' }}>
						Referral Form
					</h2>
					<Form className="student-profile-form">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label> Student Name *</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter name"
								style={{ marginBottom: '15px' }}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
							<Form.Label>Place *</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter place"
								style={{ marginBottom: '15px' }}
								onChange={(e) => {
									setPlace(e.target.value);
								}}
							/>
							<Form.Label>Mobile Number *</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter mobile number"
								style={{ marginBottom: '15px' }}
								onChange={(e) => {
									setContactNumber(e.target.value);
								}}
							/>
							<Form.Label>Email *</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								style={{ marginBottom: '15px' }}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							<Form.Label>Past course *</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter past course"
								style={{ marginBottom: '15px' }}
								onChange={(e) => {
									setCourse(e.target.value);
								}}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Remember me" />
						</Form.Group>
						<Link style={{ textDecoration: 'none', color: 'white' }} to="/status">
							<Button className="student-profile-form-btn" variant="primary" type="submit" onClick={handleSubmit}>
								Submit
							</Button>
						</Link>
					</Form>
				</div>
			</div>
		</div>
	);
};
