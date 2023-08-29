import styled from 'styled-components'
import { CorPrimaria, CorSecundaria } from '../../styles'

export const Vaga = styled.li`
  border: 1px solid ${CorPrimaria};
  background-color: ${CorSecundaria};
  color: ${CorPrimaria};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${CorPrimaria};
    color: ${CorSecundaria};
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const Link = styled.a`
  border-color: ${CorSecundaria};
  background-color: ${CorPrimaria};
  color: ${CorSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: ${CorPrimaria};
    background-color: ${CorSecundaria};
    color: ${CorPrimaria};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
