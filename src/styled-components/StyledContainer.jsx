import styled from 'styled-components';

const StyledContainer = styled.div`
    display: grid;
    height: fit-content;
    grid-template-columns: repeat(12, minmax(64px, 1fr)); 
    grid-template-rows: 1fr;
    max-width: 1440px;
    padding: 0 64px;

    .page-title {
      grid-area: 1 / span 12;
      font-size: 24px;
    }
  
  .page-content {
      grid-area: 2 / span 12;
      margin-top: 25px;

      display: grid;
      grid-template-columns: repeat(2, minmax(64px, 1fr));

      .form {
        grid-area: 1 / 1;
      }

      .users {
        grid-area: 1 / 2;
      }

      .cards {
        grid-area: 2 / span 2;
      }
    }
`;

export default StyledContainer;
