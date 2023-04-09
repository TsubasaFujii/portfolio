import styled from 'styled-components';
import { FlexColumn, Image, H3 } from '@/components/common';
import { devices } from '@/static/viewport';

export const Thumbnail = styled(Image)`
    & .image {
        background-size: 100%;
    }
    
    &:hover .image {
        background-size: 120%;
    }
`;

// To call in ProjectWrapper
export const ProjectTitle = styled(H3)`
`;

export const Details = styled(FlexColumn)`
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const ProjectWrapper = styled.div`
    width: 100%;

    display: grid;
    gap: ${({ theme }) => theme.spacing.sm};

    @media screen and (${devices.tablet}) {
        gap: ${({ theme }) => theme.spacing.md};
    }

    @media screen and (${devices.desktop}) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, auto);

        & ${ProjectTitle} {
            grid-row: 1 / span 1;
        }

        & ${Details} {
            grid-row: 2 / span 2;
        }

        & ${Thumbnail} {
            grid-row: 1 / span 3;
            align-self: center;
        }

        &:nth-child(odd) {
            & ${ProjectTitle} {
                grid-column: 2 / span 1;
            }

            & ${Details} {
                grid-column: 2 / span 1;
            }

            & ${Thumbnail} {
                grid-column: 1 / span 1;
            }
        }

        &:nth-child(even) {
            & ${ProjectTitle} {
                grid-column: 1 / span 1;
            }

            & ${Details} {
                grid-column: 1 / span 1;
            }

            & ${Thumbnail} {
                grid-column: 2 / span 1;
            }
        }
    }
`;
