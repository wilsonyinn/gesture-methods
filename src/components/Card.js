import React from 'react'
import PropTypes from 'prop-types'
//seperate local imports from dependencies
import styles from '../styles/Card.module.css'
import AboutMe from '../components/AboutMe.js'
import QuoteBox from '../components/QuoteBox.js'


function Card( {ronism, getQuote} ) {
    return (
        <div className={styles.card}>
            <AboutMe name='Wilson Yin' food='poke' number={6}/>
            <QuoteBox ronism={ronism} getQuote={getQuote} />
        </div>
    )
}

Card.propTypes = {
    ronism: PropTypes.string,
    getQuote: PropTypes.func.isRequired,    
}

export default Card;