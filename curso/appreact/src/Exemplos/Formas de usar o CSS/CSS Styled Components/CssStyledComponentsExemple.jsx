import React from 'react'
import styled from 'styled-components'

const ProdutosContainer = styled.div`
    display: flex;
`

const Produto = styled.div`
    flex: 1;
`


const Title = styled.h1`
    font-size: 2rem;
    color: tomato;
`
const Paragraph = styled.p`
    font-size: 1.5rem;
    color: green;
`

const CssStyledComponentsExemple = () => {

    return (
        <div>
            <ProdutosContainer>
                <Produto>
                    <Title>Notebook</Title>
                    <Paragraph>Meu paragrafo</Paragraph>
                </Produto>
                <Produto>
                    <Title>Smartphone</Title>
                    <Paragraph>Meu paragrafo</Paragraph>
                </Produto>
            </ProdutosContainer>
        </div>
    )
}

export default CssStyledComponentsExemple
