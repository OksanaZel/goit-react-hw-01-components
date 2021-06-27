import styled from '@emotion/styled';

export const PaperContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: ${props => props.gap}px;
  width: ${props => props.width}px;
`;
