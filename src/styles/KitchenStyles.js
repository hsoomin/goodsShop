import styled, {css} from 'styled-components';
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";

//반응형
const breakpoints = {
    phone: '360px',
    mobile: '768px',
    tablet: '1023px',
    desktop:'1440px'
};
const MediaMixin = {
    phone: (styles) => css`
        @media (max-width: ${breakpoints.phone}) {
        ${styles}
        }`,
    mobile: (styles) => css`
        @media (max-width: ${breakpoints.mobile}) {
        ${styles}
        } `,
    tablet: (styles) => css`
        @media (max-width: ${breakpoints.tablet}) {
            ${styles}
        }`,
    desktop: (styles) => css`
        @media (max-width: ${breakpoints.desktop}) {
            ${styles}
        }`,
};

export  const KitchenContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 100px 0;
    padding: 0 15rem;
    box-sizing: border-box;
    
    ${MediaMixin.tablet`
        margin: 50px 0;
        padding: 0 8rem;
    `}
    ${MediaMixin.mobile`
        padding: 0 5rem;
    `}
    ${MediaMixin.phone`
        padding: 0 2rem;
    `}
`;

export const KitchenHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
`;

export const Title = styled.h2`
    font-size: 40px;
`;

export const CategoryList = styled.ul`
    display: flex;
    cursor: pointer;
    ${MediaMixin.mobile`
        flex-direction: column;
        text-align: right;
        font-size: 14px;
    `}
`;

export const CategoryItem = styled.li`
    &:not(:first-child)::before {
        content: '';
        vertical-align: middle;
        display: inline-block;
        height: 15px;
        width: 1px;
        background-color: #979797;
        margin: 0 12px;
    }
    ${MediaMixin.mobile`
        &:not(:first-child)::before{ 
            display:none
        }
    `}
`;

export const KitchenList = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    ${MediaMixin.desktop`
        gap:0;
    `}
`;

export const KitchenCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    width: 32%;
    margin-bottom: 20px;
    ${MediaMixin.mobile`
        width: 48%;
    `}
    ${MediaMixin.phone`
        width: 100%;
    `}
`;

export const KitchenImage = styled.div`
    img {
        width: 100%;
    }
`;

export const KitchenInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;

export const LikeButton = styled.button`
    width: 100%;
    border: none;
    background: #e7e6e4;
    color: #555;
    padding: 10px 30px;
    font-size: 16px;
    margin-top: 20px;
    position: relative;
`;

export const HeartIcon = styled(AiTwotoneHeart)`
    font-size: 18px;
    float: right;
    color: tomato;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
`;

export const LikeIcon = styled(AiOutlineHeart)`
    font-size: 18px;
    float: right;
    color: tomato;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%) scale(1.2);
    transition: 0.3s;
`;
