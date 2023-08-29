import styled from 'styled-components'
import { CorPrimaria, CorSecundaria } from '../../styles'

export const FormPesquisa = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${CorSecundaria};
  padding: 32px;
  margin-top: 40px;
  border-radius: 12px;
`

export const Pesquisa = styled.input`
  padding: 0 16px;
  outline-color: ${CorPrimaria};
`

export const BotaoPesquisa = styled.button`
  height: 40px;
  padding: 0 16px;
  margin-left: 8px;
  background-color: ${CorPrimaria};
  color: ${CorSecundaria};
  border: 1px solid ${CorPrimaria};
  font-size: 18px;
  cursor: pointer;
`
