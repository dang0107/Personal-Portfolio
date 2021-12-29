import React from 'react';
import { AiFillGithub, AiFillEnvironment, AiFillLinkedin, AiTwotoneMail, AiTwotonePhone } from 'react-icons/ai';
import { FiShare2 } from "react-icons/fi";
import { SocialIcons, Span } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList } from './FooterStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
const Footer = () => {
  return (
    <FooterWrapper>
      <Section nopadding id="contact">
        <SectionDivider />
        <SectionTitle main>Contacts</SectionTitle>
        <LinkList>
          <LinkColumn>
            <div style={{ display: "flex", alignItems: 'center', color: 'white', marginBottom: '20px' }}>
              <AiFillEnvironment size="3rem" /><Span>My Location</Span>
            </div>
            <LinkItem>Ottawa, Ontario, Canada</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <div style={{ display: "flex", alignItems: 'center', color: 'white', marginBottom: '20px' }}>
              <AiTwotonePhone size="3rem" /><Span>Call Me</Span>
            </div>
            <LinkItem href="tel:+1 613-790-2187">+1 613-790-2187</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <div style={{ display: "flex", alignItems: 'center', color: 'white', marginBottom: '20px' }}>
              <AiTwotoneMail size="3rem" /><Span>Email</Span>
            </div>
            <LinkItem href="mailto:dknngan276@gmail.com">dknngan276@gmail.com</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <div style={{ display: "flex", alignItems: 'center', color: 'white', marginBottom: '20px' }}>
              <FiShare2 size="3rem" /><Span>Social Profiles</Span>
            </div>
            <LinkItem>
              <SocialIcons href="https://github.com/dang0107" target="_blank">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.linkedin.com/in/kim-ngan-dang-797b47173/" target="_blank">
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
            </LinkItem>
          </LinkColumn>
        </LinkList>
      </Section>
    </FooterWrapper >
  );
};

export default Footer;
