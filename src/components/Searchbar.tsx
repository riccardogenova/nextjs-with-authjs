"use client";

import { ChangeEvent, useEffect, useState } from "react";

import styled from "@emotion/styled";
import Axios from "axios";
import Image from "next/image";

import { useClickOutside } from "../hooks/useClickOutside";
import { UIInput } from "./Input";
import Link from "next/link";

// #region ::: COMPONENTS
const StyledContainer = styled.div({
  display: "flex",
  position: "relative",
});

const StyledList = styled.div({
  backgroundColor: "#202226",
  maxHeight: "200px",
  overflow: "scroll",
  position: "absolute",
  zIndex: 1,
  top: 48,
  left: 0,
  width: "100%",
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
});

const StyledOuter = styled.div({
  width: "100%",
  position: "relative",
});

const StyledRow = styled.button({
  display: "flex",
  color: "white",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "10px",
  height: 55,
  border: "none",
  background: "transparent",
  cursor: "pointer",
});
const StyledAvatarContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

const StyledName = styled.p({
  fontSize: "12px",
  fontWeight: "bold",
});

const StyledImage = styled(Image)({
  borderRadius: 50,
  marginRight: "15px",
});
// #endregion

export const Searchbar = () => {
  const [value, setValue] = useState<string>("");
  const [options, setOptions] = useState<Array<any>>();
  const [timer, setTimer] = useState<null | number>(null);
  const ref = useClickOutside(() => setOptions([]));

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    clearTimeout(timer);
    setValue(event.target.value);
    const parsedValue = event.target.value.replace(" ", "").toLowerCase();

    setTimer(
      // @ts-ignore
      setTimeout(() => {
        if (!!parsedValue && parsedValue.length > 2) {
          Axios.get(`https://api.github.com/search/users?q=${parsedValue}`).then((response) =>
            setOptions(response.data.items)
          );
        }
      }, 500)
    );
  };

  useEffect(() => {
    return () => {
      // @ts-ignore
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <StyledOuter ref={ref}>
      <StyledContainer>
        <UIInput value={value} placeholder="Cerca uno sviluppatore" onChange={onChange} />
      </StyledContainer>
      {!!options && options.length > 0 && (
        <StyledList ref={ref}>
          {options.map((option) => (
            <Link key={option.login} href={`/user/${option.login}`}>
              <StyledRow onClick={() => setOptions([])}>
                <StyledAvatarContainer>
                  <StyledImage src={option.avatar_url} alt="Avatar" width={25} height={25} />
                  <StyledName>{option.login}</StyledName>
                </StyledAvatarContainer>
              </StyledRow>
            </Link>
          ))}
        </StyledList>
      )}
    </StyledOuter>
  );
};
