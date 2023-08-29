import React from 'react'
import { Form, ContainerForm, HeroTitulo } from './styles'
import { ContainerGeral } from '../../styles'

const Hero = () => (
  <Form>
    <ContainerGeral>
      <ContainerForm>
        <HeroTitulo>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitulo>
      </ContainerForm>
    </ContainerGeral>
  </Form>
)

export default Hero
