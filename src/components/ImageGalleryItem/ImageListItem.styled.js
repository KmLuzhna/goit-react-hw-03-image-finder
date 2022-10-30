import styled from 'styled-components';
import ModalImage from "react-modal-image";


export const ImageGalleryListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 260px;
`;

export const Image= styled(ModalImage)`
 display: block;
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;