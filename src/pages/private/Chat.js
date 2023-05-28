import React from "react";
import { useSelector } from 'react-redux';
import Link from '@mui/material/Link';

import { Container, Box, Avatar } from "@mui/material";


// Import Parse minified version
import Parse from 'parse';

const Chat = () => {

  const Message = Parse.Object.extend('Message');
	const Conversation = Parse.Object.extend('Conversation');
	const {currentUser} = useSelector((store) => store.auth);

	// Créer une instance de l'objet Message
	const newMessage = new Message();

	// Définir les propriétés du message
	newMessage.set('content', 'Contenu du message');
	newMessage.set('author', currentUser);

	// Récupérer l'objet Conversation correspondant
	 const conversationQuery = new Parse.Query(Conversation);
	// conversationQuery
	// 	.get(conversationId)
	// 	.then(conversation => {
	// 		// Définir la relation entre le message et la conversation
	// 		newMessage.set('conversation', conversation);

	// 		// Sauvegarder le message dans la base de données
	// 		newMessage.save().then(savedMessage => {
	// 			// Le message a été enregistré avec succès
	// 		}).catch(error => {
	// 			// Une erreur s'est produite lors de l'enregistrement du message
	// 		});
	// 	}).catch(error => {
	// 	// Une erreur s'est produite lors de la récupération de l'objet Conversation
	// 	});
  return (
	<Container
		sx={{
			width:"100%",
			height:"calc(100vh - 50px)",
			display:"flex",
			justifyContent:"center",
			alignItems:"center"
		}}
	>
		<Box
			sx={{
				width:"100%",
				height:"100%",
				backgroundColor:"rgb(249, 249, 249)",
				display:"flex",
				flexDirection:"column",
				justifyContent:"center",
				alignItems:"center"
			}}
		>
			
			<Box sx={conversationStyle}
			>

				<Avatar></Avatar>
				<Link
					sx={{
						listStyle:"none"
					}}
				>
					<Box sx={{ml:"2rem"}}>
						<h3>Conversation Title</h3>
						<p>This is current message </p>
					</Box>
				</Link>
			</Box>
			
			<Box sx={conversationStyle}
			>
				<Avatar></Avatar>
				<Box sx={{ml:"2rem"}}>
					<h3>Conversation Title</h3>
					<p>This is current message </p>
				</Box>
			</Box>
			<Box sx={conversationStyle}
			>
				<Avatar></Avatar>
				<Box sx={{ml:"2rem"}}>
					<h3>Conversation Title</h3>
					<p>This is current message </p>
				</Box>
			</Box>
			<Box sx={conversationStyle}
			>
				<Avatar ></Avatar>
				<Box sx={{ml:"2rem"}}>
					<h3>Conversation Title</h3>
					<p>This is current message </p>
				</Box>
			</Box>
		</Box>
	</Container>
  );
};

const conversationStyle = {
	width: "90%",
	display: "flex",
	mt:"2rem",
	boxShadow:"0 0 1px 0px",
	alignItems: "center",
	
	pl:"2rem",
	borderRadius:"5px"
  };

export default Chat;
