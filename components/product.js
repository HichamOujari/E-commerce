import React from 'react'
import style from '../styles/product.module.css'
import Image from 'next/image' 
export default function product() {
    return (
        <div  className={style.produit}>
            <div> <Image src="/../public/Produit/loca.png" width={240} height={240}/> </div>
            <div className={style.info} >
              <div className={style.title}>Marbre  locale</div>
              <div className={style.plus} >voir plus </div>    
            </div>
        </div>
    )
}
