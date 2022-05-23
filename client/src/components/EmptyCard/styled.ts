import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const StyledEmptyCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 24px;
	color: gray;
`;

export const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: gray;
`;

export const StyledIcon = styled(ArrowBackIcon)`
	margin-right: 12px;
`;
