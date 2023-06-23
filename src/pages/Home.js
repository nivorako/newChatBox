// import React from "react";

// const Home = () => {
  
//   return <div>Home</div>;
// };

// export default Home;

import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Avatar } from '@mui/material';

const users = ["toto", "re","pom", "travolta" ,"toto", "re","pom", "travolta", "tarfedl hzudfhh ndhhhjf ndhhehfh tarfedl hzudfhh ndhhhjf ndhhehfh"];

function renderRow(props) {
	const { index, style } = props;
	const user = users[index];

	return (
		<ListItem style={style} key={index} component="div" disablePadding>
		<ListItemButton>
			<Avatar />
			<ListItemText primary={user} />
		</ListItemButton>
		</ListItem>
	);
}

export default function Home() {
	return (
		<Box
			sx={{ width: '100%', height: 600, maxWidth: 360, bgcolor: 'yellow' }}
		>
		<FixedSizeList
			height={600}
			width={360}
			itemSize={92}
			itemCount={users.length}
			overscanCount={5}
		>
			{renderRow}
		</FixedSizeList>
		</Box>
	);
}
