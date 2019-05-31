import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

const AuthorizeCheckbox = styled.input`
  position: absolute;

  opacity: 0;

  &:checked {
    + label {
      &:before {
        background-color: ${getColor('newell')};
      }

      &:after {
        content: '';

        position: absolute;
        top: 12px;
        left: 5px;

        background-color: ${getColor('white')};

        height: 2px;
        width: 2px;

        box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
        transform: rotate(45deg);
      }
    }
  }

  &:hover {
    + label {
      &:before {
        background-color: ${getColor('newell')};
      }
    }
  }

  & + label {
    display: flex;
    align-items: center;

    position: relative;

    cursor: pointer;

    padding: 0;

    font-size: 2rem;

    &:before {
      content: '';

      margin: 0 10px 0 0;

      display: inline-block;

      vertical-align: text-top;

      height: 20px;
      width: 20px;

      background-color: ${getColor('white')};

      border: 1px solid ${getColor('twilight')};
    }
  }
`;

export default AuthorizeCheckbox;
