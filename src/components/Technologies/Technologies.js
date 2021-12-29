import React from 'react';
import { DiCodeBadge, DiDatabase, DiAptana, DiWindows } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <List>
      <ListItem>
        <DiCodeBadge size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML / CSS / Vue.js <br />
            Java / JavaScript <br />
            C / C++ / C# <br />
            Hibernate,JPA,RESTful APIs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAptana size="3rem" />
        <ListContainer>
          <ListTitle>Software Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            GitHub <br />
            Eclipse / Intellij / Netbeans <br />
            Visual Studio 2019 / VS Code / Azure <br />
            Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Databases Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL / SQL Server <br />
            Oracle / PostgreSQL <br />
            MS Access / MS Azure
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWindows size="3rem" />
        <ListContainer>
          <ListTitle>Operating System/Environment</ListTitle>
          <ListParagraph>
            Experience with <br />
            Window and MacOS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
