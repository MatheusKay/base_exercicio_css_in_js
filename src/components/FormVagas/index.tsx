import { FormEvent, useState } from 'react'

import React from 'react'

import { FormPesquisa, Pesquisa, BotaoPesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormPesquisa onSubmit={aoEnviarForm}>
      <Pesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisa type="submit">Pesquisar</BotaoPesquisa>
    </FormPesquisa>
  )
}
export default FormVagas
