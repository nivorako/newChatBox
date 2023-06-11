import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';
import { Avatar, Box } from '@mui/material';

const Messages = () => {
	const {showMsg, selectedId } = useSelector(store => store.messages)
	console.log("selectedId :", selectedId)
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
					<H2 >Le titre de la conversation</H2>
					<P>Liste des membres qui peuvent envoyer des msg dans la conversation</P>
				</DetailHeaderMessages>
			</HeaderMessages>
			<BodyMessages>
				Body
			</BodyMessages>
			<FooterMessages>
				Footer
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

`;
const HeaderMessages = styled.div`
	width: 100%;
	height: 5rem;
	display:flex;
	align-items: center;
	backGround-color: blue;
`;
const H2 = styled.h2`
	margin: 0;
`;
const P = styled.p`
	margin: 0;
`;

export default Messages
