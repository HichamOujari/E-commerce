import React, { Component } from 'react';
import style from "../styles/home.module.css"

export default class Header extends Component {
  data = ["./headerImage/1.png","./headerImage/1.png","./headerImage/1.png"];
  render() {
    const listImage = this.data.map((ele,index)=>{
      return <img id={"ImgHeader"+index} key={index} src={ele} />
    })
    return (
      <div className={style.MainHeader}>
        {listImage}
      </div>
    );
  }
}
