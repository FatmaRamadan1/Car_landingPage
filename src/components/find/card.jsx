import React from 'react';
import styles from './Find.module.css';


export default function card({image,make}) {
    return (
        <div>
            <div className={styles.card}>
                <img src={image} alt='/' />
                <p>{make}</p>
            </div>
        </div>
    )
}
