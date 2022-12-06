import { React, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { AgentNavbar } from '../AgentNavbar/AgentNavbar';
import './Status.scss';

const services = require('../../services/pages/agentRoute');

export const Status = () => {
	const [referrals, setReferrals] = useState('');

	useEffect(() => {
		services.agentReferrals((error, result) => {
			setReferrals(result);
		});
	});

	return (
		<div className="status-main-div">
			<AgentNavbar />

			<div className="status-inner-div">
				<div className="status-table-div">
					<h1 style={{ marginBottom: '30px', color: '#193942', textAlign: 'center', marginTop: '20px' }}> Student Status</h1>
					<Table bordered responsive className="student-table">
						<thead>
							<tr>
								<th>NO.</th>
								<th>NAME</th>
								<th>EMAIL</th>
								<th>PHONE</th>
								<th>LOCATION</th>
								<th>PAST COURSE</th>
								<th>STATUS</th>
								<th>SUBMISSION DATE</th>
							</tr>
						</thead>
						<tbody>
							{referrals &&
								referrals.map((detail, i) => (
									<tr key={i}>
										<td>{detail.referral_id}</td>
										<td>{detail.name}</td>
										<td>{detail.email}</td>
										<td>{detail.contact_number}</td>
										<td>{detail.place}</td>
										<td>{detail.course}</td>
										<td>Active</td>
										<td>{detail.created_date}</td>
									</tr>
								))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
};
