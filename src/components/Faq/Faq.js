import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore.js';
import Hero from '../Hero/Hero.js';


const Info = () => (
  <Container>
    <Hero titleText={settings.faq.title} image={settings.info.image}/>
    <h2>{settings.faq.title}</h2>
    <p>{settings.faq.description}</p>
  </Container>
);

export default Info;