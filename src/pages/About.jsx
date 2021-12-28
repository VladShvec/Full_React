import React from 'react';
import styled from "styled-components";

const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 11.207972270363951vh);
  background-image: url(https://freelance.ru/img/portfolio/pics/00/36/2B/3550054.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
const MainTitle = styled.h1`
  color: white;
  text-align: center;
  padding-top: 16%;
`
const About = () => {
    return (
        <AboutWrapper>
            <MainTitle>Welcome to my project</MainTitle>
        </AboutWrapper>
    );
};

export default About;