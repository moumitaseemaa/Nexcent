import React from "react";
import styled from "styled-components";
import Container from "./common/Container";
import BannerImg from "../assets/BannerImg.png";

const Banner = () => {
  return (
    <Background>
      <Container>
        <SideBySide>
          <LeftSide>
            <Heading>
              Lessons and insights <InnerHeading>from 8 years</InnerHeading>
            </Heading>
            <Paragraph>
              Where to grow your business as a photographer: site or social
              media?
            </Paragraph>
            <Register>Register</Register>
          </LeftSide>
          <RightSide>
            <img src={BannerImg} alt="bannerImg" />
          </RightSide>
        </SideBySide>
      </Container>
    </Background>
  );
};

export default Banner;

const Background = styled.div`
  background-color: #f5f7fa;
  padding: 161px 0;
`;

const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
  width: 60%;
`;
const RightSide = styled.div`
  width: 40%;
`;

const Heading = styled.h1`
  font-size: 64px;
  font-weight: 600;
  font-family:"inter",sans-serif;
  line-height:76px;
  max-width: 657px;
  color: black;
  margin-top: 0;
  margin-bottom: 0;
  `;
  const InnerHeading = styled.span`
  color: #4caf4f;
`;
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family:"inter",sans-serif;
  color: #717171;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const Register = styled.button`
  padding: 14px 32px;
  background: #4caf4f;
  color: white;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  font-family: "inter", sans-serif;
`;
