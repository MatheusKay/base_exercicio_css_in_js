import React from 'react'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { ContainerGeral } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <ContainerGeral>
        <ListaVagas />
      </ContainerGeral>
    </>
  )
}

export default App
