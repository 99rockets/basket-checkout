import styled from '@emotion/styled';
import {Button} from '@mui/material';

export const StyledSummary = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 24px;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const StyledClearButton = styled(Button)`
	@media (max-width: 480px) {
		width: 100%;
	}
`;

export const StyledContainer = styled.div`
	width: 270px;
	max-width: 100%;

	@media (max-width: 480px) {
		width: 100%;
	}
`;

export const StyledSubtotal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 480px) {
		margin-top: 12px;
	}
`;
