import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';
import { Avatar, TextField } from '@mui/material';

const Messages = (props) => {
	const {users} = props;
	const {showMsg, selectedId } = useSelector(store => store.messages)
	const selectedUser = users.find(user => user.id === selectedId)
	
	if(!showMsg){
		return (
			<MessagesContainer >	
					DefaultMsgContainer	
			</MessagesContainer >
		)
	}
	return (
		<MessagesContainer >		
			<HeaderMessages>
				<Avatar />
				<DetailHeaderMessages>
					<H2 >{selectedUser.get('firstName')}</H2>
					{users.map(user => {
						<p key = {user.id}>
							{user.get("firstName")},
						</p>
					})}
				</DetailHeaderMessages>
			</HeaderMessages>
			<BodyMessages>
				Body
			</BodyMessages>
			<FooterMessages>
				<TextField id="outlined-basic" label="Tapez un message :" variant="outlined" size="small" sx={{width:"80%", backgroundColor:"white"}}/>
			</FooterMessages>
		</MessagesContainer >
	)
}


const MessagesContainer = styled.div`
	width:60%;
	
	background-color:rgb(249, 249, 249);
	display:flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const DetailHeaderMessages = styled.div`
	margin-left: 2rem;
`;

const BodyMessages = styled.div`

`;

const FooterMessages = styled.div`
	width: 100%;
	height: 50px;
	backGround-color: rgb(209, 209, 209);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const HeaderMessages = styled.div`
	width: 100%;
	height: 5rem;
	display:flex;
	align-items: center;
	backGround-color: rgb(209, 209, 209);
`;
const H2 = styled.h2`
	margin: 0;
`;
const P = styled.p`
	margin: 0;
`;

export default Messages
