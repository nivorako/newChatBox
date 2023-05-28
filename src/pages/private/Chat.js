import React from "react";
import { useSelector } from 'react-redux';

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
			widows:"100%",
			height:"calc(100vh - 50px)",
			display:"flex",
			justifyContent:"center",
			alignItems:"center"
		}}
	>
		<Avatar />
		<Box>
			<div>Hooo</div>
		</Box>
	</Container>
  );
};

export default Chat;
