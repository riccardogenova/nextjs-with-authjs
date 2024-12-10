import styled from "@emotion/styled";
import { GistTag } from "./Gist.Tag";

// #region ::: STYLED
const StyledOuter = styled.div({
  marginLeft: 5,
  maxWidth: 510,
  display: "flex",
  flexWrap: "wrap",
});
// #endregion

interface Props {
  tags: Array<{ name: string; total?: number | null; url?: string | null }>;
}

export const GistTagList = ({ tags }: Props) => (
  <StyledOuter>
    {tags.map((tag) => (
      <GistTag key={tag.name} name={tag.name} srcImage={tag.url} />
    ))}
  </StyledOuter>
);
