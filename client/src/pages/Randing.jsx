import React from "react";
import styled from "styled-components";
import Login from "../components/user/login";
import Logout from "../components/user/logout";
import SignUp from "../components/user/sign-up";

export default function Randing() {
  return (
    <RandingPage>
      <Center>
        <SignUp />
      </Center>
    </RandingPage>
  );
}

const Center = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
`;
const RandingPage = styled.div`
  height: 600vh;
  width: 100%;
`;
