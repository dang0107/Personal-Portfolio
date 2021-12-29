import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Kim Dang's Portfolio
      </SectionTitle>
      <SectionText>
        I am a new grad in Computer Engineering Technology. In this portfolio, I showcase my academic projects during my time at Algonquin College.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;