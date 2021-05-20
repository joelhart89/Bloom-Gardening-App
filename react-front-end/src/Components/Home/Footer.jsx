import React from "react";
import styled from 'styled-components';



const Box = styled.div`
  padding-top: 10, 40, 10, 40 ; 
  background: #202020;
  position: relative;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 30px 10px;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top:  10px;
  margin-bottom: 10px;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #b1d2db;
  margin-bottom: 8px;
  font-family: Nunito;
  font-size: 16px;
  text-decoration: none;
   
  &:hover {
      color: #007621;;
      transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 22px;
  color: #b1d2db;
  margin-top: 20px;
  margin-bottom:15px;
  font-family: Nunito;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <Box>
      <h1 style={{
        color: "#b1d2db",
        fontFamily: "Nunito",
        textAlign: "center",
        paddingTop: '20px',
        marginTop: "-200px"
      }}>
        Bloom: A beginners guide to growing your own produce!
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="About">Team</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Resources</Heading>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Garden-Construction</FooterLink>
            <FooterLink href="#">Garden-Tips</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Vancouver</FooterLink>
            <FooterLink href="#">Kelowna</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;