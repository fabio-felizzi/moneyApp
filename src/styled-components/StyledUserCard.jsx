import styled from 'styled-components';
import UserCard from 'Components/user-card/UserCard';

const StyledUserCard = styled(UserCard)`
        border: 1px solid grey;
        border-radius: 10px;
        margin: 20px 0;
        padding: 20px;

        h3 {
        margin-top: 0;
        }
        ul {
        list-style-type: none;
        margin: 0;
        padding:0;

            li {
                margin: 10px 0;
            }
        }
`;

export default StyledUserCard;