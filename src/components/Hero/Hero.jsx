import { SearchBar } from '../SearchBar/SearchBar.jsx';

import {
  HeroSection,
  Overlay,
  Content,
  Title,
  InfoBlock,
  LeftText,
  RightText,
  Divider,
} from './Hero.styled.js';

export const Hero = () => {
  return (
    <HeroSection>
      <Overlay />

      <Content>
        <Title>Weather dashboard</Title>

        <InfoBlock>
          <LeftText>
            Create your personal list of favorite cities and always be aware of
            the weather.
          </LeftText>

          <Divider />

          <RightText>
            October 2023
            <br />
            Friday, 13th
          </RightText>
        </InfoBlock>

        <SearchBar />
      </Content>
    </HeroSection>
  );
};
