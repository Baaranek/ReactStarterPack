import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore.js';
import Hero from '../Hero/Hero.js';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} image={settings.info.image}/>
    <h2>{settings.info.title}</h2>
    <p>{settings.info.description}</p>
  </Container>
);

export default Info;