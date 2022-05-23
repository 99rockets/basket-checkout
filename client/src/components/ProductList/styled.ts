import styled from '@emotion/styled';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	CardActions
} from '@mui/material';

export const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	transition: transform 300ms;

	&:hover {
		transform: scale(1.05);
		z-index: 300;
	}
`;

export const StyledCardContent = styled(CardContent)`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const StyledCardMedia = styled(CardMedia)`
	width: auto;
	max-height: 200px;
	margin-bottom: 24px;
` as typeof CardMedia;

export const StyledCardActions = styled(CardActions)`
	width: 100%;
	padding: 0;
`;

export const StyledButton = styled(Button)`
	display: flex;
	border-radius: 0;
`;
