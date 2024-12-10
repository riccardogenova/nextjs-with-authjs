import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

//#region ::: STYLED
const StyledLink = styled(Link)({
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  borderRadius: "6px",
  border: "2px solid transparent",
  background: "#31384c",
  margin: "5px",
  ":hover": {
    borderColor: "#4e57ef",
  },
  "&+&": {
    marginLeft: "5px",
  },
});

const StyledWrapper = styled.span({
  background: "#31384c",
  height: 24,
  padding: "0 10px",
  fontSize: 15,
  fontWeight: 700,
  color: "#a8b3d0",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "lowercase",
});

const StyledImage = styled(Image)({
  borderRadius: "100%",
  backgroundColor: "#31384c",
  marginLeft: 5,
});

//#endregion

interface Props {
  name: string;
  srcImage?: string | null;
}

export const GistTag = ({ name, srcImage }: Props) => (
  <StyledLink key={name} href={`/${name}`}>
    {!!srcImage && <StyledImage alt={name} src={srcImage} width={27} height={27} />}
    <StyledWrapper key={name}>{name}</StyledWrapper>
  </StyledLink>
);
