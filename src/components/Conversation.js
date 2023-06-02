import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { Avatar, Box } from '@mui/material';

const Conversation = () => {
	
	return (
		<>
			<Avatar />
			<ConversLink >
				<Box sx={{ml:"2rem"}}>
					<h3>Conversation Title</h3>
					<p>This is current message </p>
				</Box>
			</ConversLink> 
		</>
	)
};

const ConversLink = styled(Link)`
	color:inherit;
	text-decoration: none;
`;

export default Conversation;
