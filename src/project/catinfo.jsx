import React, {Component} from "react";
import "./cat.css";
import Faker from  'faker';



class Catinfo extends Component{
    
    render() {

        let randomName = Faker.animal.cat();
        let Descri = Faker.commerce.productDescription();
        let Price = Faker.commerce.price(); 
        return (<div>
        <p className="catName">{randomName}</p>
        <p className="description">{Descri}</p>
        <p className="price">Total Pirce: {Price}£</p>
        </div>)

    }
}

export default Catinfo 