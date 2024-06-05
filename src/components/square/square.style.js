import styled from 'styled-components';

const StyledSquare = styled.div`
	height: 200px;
	width: 200px;
	background-color: ${({ $isRed }) => ($isRed ? 'red' : 'green')};
	text-align: center;
`;
const StyledButton = styled.button`
	align-items: center;
	margin-top: 50%;
	transform: translateY(-50%);
`;
export { StyledSquare, StyledButton };
