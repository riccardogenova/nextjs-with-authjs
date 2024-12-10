/** @format */

import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

// #region ::: STYLED
const StyledContainerStatus = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  position: "relative",
  height: "50px",
  display: "flex",
  ":hover": {
    "> span": {
      textDecoration: "underline",
    },
  },
});

const StyledUserInfo = styled.div({
  fontSize: "8px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  marginBottom: 30,
  ":hover > div > h2": {
    textDecoration: "underline",
  },
  width: "100%",
});

const StyledUserContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  height: "60px",
});

const StyledUserName = styled.span({
  fontSize: 20,
  color: "inherit",
  textDecoration: "none",
  margin: "10px 0px 5px 15px",
  fontWeight: 400,
  ":hover": {
    textDecoration: "underline",
  },
});
// #endregion

interface Props {
  user: { username: string; avatar_url: string };
  srcImage: string;
}

export const UserInfo = ({ user, srcImage }: Props) => {
  return (
    <StyledUserContainer>
      <StyledUserInfo>
        <StyledContainerStatus href={`/u/${user.username}`}>
          <Image
            style={{ borderRadius: 50, overflow: "hidden" }}
            src={srcImage}
            alt={user.username}
            width={50}
            height={50}
          />
          <StyledUserName>{user.username}</StyledUserName>
        </StyledContainerStatus>
      </StyledUserInfo>
    </StyledUserContainer>
  );
};
