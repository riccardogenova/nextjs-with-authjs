/** @format */

import styled from '@emotion/styled';
import Link from 'next/link';

// #region ::: STYLED
const StyledFileName = styled(Link)({
  color: 'inherit',
  opacity: '0.5',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

const StyledFilenameContainer = styled.div({
  display: 'flex',
  justifyContent: 'end',
});
// #endregion

interface Props {
  id: string;
  filename: string;
}

export const FileName = ({ id, filename }: Props) => (
  <StyledFilenameContainer>
    <StyledFileName href={`/post/${id}`}>
      <span>{filename}</span>
    </StyledFileName>
  </StyledFilenameContainer>
);
