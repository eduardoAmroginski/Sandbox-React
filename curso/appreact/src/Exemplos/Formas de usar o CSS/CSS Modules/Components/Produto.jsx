import React from 'react'
import styles from './Produto.module.css'

const Produto = () => {
    console.log(styles)
    return (
        <div>
            <h1 className={styles.tituloPrincipal}>Notebook</h1>
            <p className={styles.preco}>R$ 5500</p>
            <button className={styles.comprar}>Comprar</button>
        </div>
    )
}

export default Produto
