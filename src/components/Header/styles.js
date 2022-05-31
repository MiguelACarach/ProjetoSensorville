import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  margin: 20px auto auto 20px;
  z-index: 4;
  a {
    transition: transform 0.5s;
    :hover {
      svg {
        font-size: 45px;
      }
    }
    color: black;
    svg {
      font-size: 40px;
    }
  }
`;
