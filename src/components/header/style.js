import styled from 'styled-components';
import img from '../../common/img/headers_1.jpg';

export const HeaderWrapper = styled.header`
  margin: 0 auto;
  height: 190px;
`;

export const HeaderImg = styled.div`
  background-image: url(${img});
  height: 130px;
`;

export const HeaderText = styled.h2`
  margin: 0 auto;
  padding: 10px 0;
  width: 414px;
  color: #0a9cd6;
`;
