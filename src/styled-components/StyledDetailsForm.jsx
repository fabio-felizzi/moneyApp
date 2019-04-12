import styled from 'styled-components';
import DetailsForm from 'Components/details-form/DetailsForm';

const StyledDetailsForm = styled(DetailsForm)`
    padding: 25px;

    div {
        margin-bottom: 25px;
        label,
        input {
            display: block;
        }

        input {
            width: 100%;
            height: 50px;
        }
    }

`;

export default StyledDetailsForm;
