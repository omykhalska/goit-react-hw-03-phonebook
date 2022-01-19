import styled from 'styled-components';

export const Container = styled.div`
  margin: 0.5rem auto;
  padding: 1.5rem;
  width: 400px;
  max-width: 80vw;

  display: flex;
  flex-direction: column;

  background: #fff;
  box-shadow: 0 4px 8px 0 #767676;
`;

export const MainTitle = styled.h1`
  align-self: center;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Title = styled.h2`
  align-self: center;
  margin: 1rem 0;
  font-size: 1.75rem;
`;

export const Message = styled.p`
  margin-top: 1rem;

  text-align: center;
  color: red;
`;
