import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import Seo from '../layouts/seo'
import Paragraph from '../components/paragraph'
import Footer from '../components/footer'
import Header from '../components/header'

import contacts from '../helpers/contacts'

import mvfsillva from '../static/images/mvfsillva-usa.jpg'

const Hero = styled.div`
  width: 100%;
  height: 60vh;
  background: ${theme('palette.black')};
  overflow: hidden;

  :before {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 60vh;
    opacity: .5;
    background-image: url(${mvfsillva});
    background-position: center center;
    background-repeat:  no-repeat;
    background-size:  cover;
  }

  @media ${theme('responsive.phone')} {
    header {
      display: none;
    }
  }
`

const Main = styled.main`
  max-width: 700px;
  margin: ${theme('spacing.xLarge')};
`

const Title = styled.h1`
  ${theme('typography.title')};
  margin-top: ${theme('spacing.xxxLarge')};
  text-align: left;
`

const About = () => {

  return (
    <Seo title="mvfsillva - about">
      <Hero>
        <Header navigation={['projects', 'articles']} back reverse />
      </Hero>
      <Main>
        <Title>Hi, I'm Marcus Silva</Title>
        <Paragraph>
          Mussum Ipsum, cacilds vidis litro abertis.
          In elementis mé pra quem é amistosis quis leo.
          Paisis, filhis, espiritis santis.
          Todo mundo vê os porris que eu tomo,
          mas ninguém vê os tombis que eu levo!
          Copo furadis é disculpa de bebadis, arcu quam euismod magna.
        </Paragraph>
        <Paragraph>
          Mussum Ipsum, cacilds vidis litro abertis.
          In elementis mé pra quem é amistosis quis leo.
          Paisis, filhis, espiritis santis.
          Todo mundo vê os porris que eu tomo,
          mas ninguém vê os tombis que eu levo!
          Copo furadis é disculpa de bebadis, arcu quam euismod magna.
        </Paragraph>
        <Paragraph>
          Mussum Ipsum, cacilds vidis litro abertis.
          In elementis mé pra quem é amistosis quis leo.
          Paisis, filhis, espiritis santis.
          Todo mundo vê os porris que eu tomo,
          mas ninguém vê os tombis que eu levo!
          Copo furadis é disculpa de bebadis, arcu quam euismod magna.
        </Paragraph>
        <Paragraph>
          If you want to know more about me or get in touch:
          <Footer contacts={contacts} />
        </Paragraph>
      </Main>
    </Seo>
  )
}

export default About