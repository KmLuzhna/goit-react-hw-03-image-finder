import styled from 'styled-components';


export const GalleryList = styled.ul`
    display: grid;
    justify-content: center;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
    padding: 0px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;