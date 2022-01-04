import React from 'react'
import PropTypes from 'prop-types';

import styles from '../styles/AboutMe.module.css'
import photo from '../assets/wilson.jpeg'

export default function AboutMe({ name="your name here", food, number}) {
    return (
        <div className={styles.box}>
            <img className={styles.box__image} src={photo}/>
            <h4>Name: {name}</h4>
            <h5>Favorite Food: {food}</h5>
            <h5>Favorite Number: {number}</h5>
        </div>
    )
}

AboutMe.propTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    number: PropTypes.number,
}