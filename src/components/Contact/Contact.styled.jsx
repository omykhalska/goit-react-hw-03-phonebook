import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;

  &:not(:last-of-type) {
    margin-bottom: 0.25rem;
  }

  &:hover {
    background-color: #f8fcfd;
  }
`;
