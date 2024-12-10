/** @format */

import { useState } from "react";

import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import { GistParsed } from "../declarations/github.gist";
import { utilityGetExtension } from "../helpers/gists";

// #region ::: STYLED
const StyledButton = styled.button({
  border: "none",
  cursor: "pointer",
  background: "#161b20",
  color: "#3d45b4",
  padding: "5px 0",
  fontSize: 12,
});

const StyledPre = styled.pre(({ isDetail }: { isDetail?: boolean }) => ({
  position: "relative",
  cursor: isDetail ? "inherit" : "zoom-in",
  overflow: "hidden",
  background: "#12161b",
  padding: "30px 15px 15px",
  marginBottom: 0,
}));

const StyledMarkdown = styled.pre(({ isDetail }: { isDetail?: boolean }) => ({
  position: "relative",
  cursor: isDetail ? "inherit" : "zoom-in",
  overflow: "hidden",
  background: "#12161b",
  padding: "30px 15px 15px",
  marginBottom: 0,
}));

// #endregion

interface Props {
  gist: GistParsed;
  onClickExpand: () => void;
  isExpanded: boolean;
}

export const Code = ({ gist, onClickExpand, isExpanded }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const showButton = gist.raw && gist.size > 700 && !isExpanded;
  const isMarkDown = gist.filename.includes(".md") || gist.filename.includes("markdown");

  if (isMarkDown) {
    return (
      <>
        {/* {showModal && <ModalPost onClose={() => setShowModal(false)} gist={gist} />} */}
        <StyledMarkdown onClick={() => setShowModal(true)}>
          <ReactMarkdown>{gist.raw}</ReactMarkdown>
        </StyledMarkdown>
      </>
    );
  }

  console.log(gist.html);
  return (
    <>
      {/* {showModal && <ModalPost onClose={() => setShowModal(false)} gist={gist} />} */}
      <StyledPre onClick={() => setShowModal(true)}>
        <code
          className={`language-${utilityGetExtension(gist.filename)}`}
          // dangerouslySetInnerHTML={{ __html: gist.html }}
          dangerouslySetInnerHTML={{ __html: gist.raw }}
          style={{ fontSize: 13, color: "white" }}
        />
      </StyledPre>
      {showButton && (
        <StyledButton style={{ border: "none", cursor: "pointer" }} onClick={onClickExpand}>
          Espandi
        </StyledButton>
      )}
    </>
  );
};
