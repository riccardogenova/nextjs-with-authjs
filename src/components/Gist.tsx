"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { Code } from "./Gist.Code";
import { FileName } from "./Gist.FileName";
import { UserInfo } from "./Gist.UserInfo";
import { GistParsed } from "../declarations/github.gist";
import { GistTagList } from "./Gist.Tag.List";
import { utilityGetExtension } from "../helpers/gists";

// #region ::: STYLED
const StyledContainer = styled.div<{ isExpanded: boolean }>(({ isExpanded }) => ({
  background: "#1b212c",
  padding: "30px 15px 15px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderRadius: "5px",
  maxHeight: isExpanded ? "initial" : 700,
  marginBottom: 10,
  boxShadow: "-1px 6px 10px 1px #00000042",
}));

const StyledDescription = styled.h3({
  fontSize: 18,
  marginTop: 10,
  marginBottom: 15,
  marginLeft: 3,
  fontWeight: 300,
});

const StyledDate = styled.span({
  fontSize: 10,
  marginBottom: 5,
  opacity: "0.5",
});

// #endregion

interface Props {
  gist: GistParsed;
}

export const Gist = ({ gist }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const timeAgo = "---";
  const formattedTags = gist.tags.map((tag) => ({ name: tag }));
  const extension = utilityGetExtension(gist.filename);
  const isMarkdown = extension === "markdown" || extension === "md";

  return (
    <StyledContainer isExpanded={isExpanded} style={{ display: "flex" }}>
      <UserInfo
        srcImage={gist.avatar_url}
        user={{ username: gist.username, avatar_url: gist.avatar_url }}
      />
      {!isMarkdown && <StyledDescription>{gist.title}</StyledDescription>}
      <StyledDate>{timeAgo}</StyledDate>
      <FileName id={gist._id} filename={gist.filename} />
      <Code gist={gist} onClickExpand={() => setIsExpanded(true)} isExpanded={isExpanded} />
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <GistTagList tags={formattedTags} />
        </div>
      </div>
    </StyledContainer>
  );
};
