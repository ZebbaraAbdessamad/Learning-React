import Navbar from "./componenets/navbar";
import Hero from "./componenets/hero";
import Card from "./componenets/card";
import data from './data'
import './style.css'

export default function  ThirdProject() {

    const datacard = data.map((element)=>{
        return (
            <Card  
                key={element.id}  
                image={element.img }
                title={element.title}
                location={element.location}
                price={element.price}
                rating={element.rating}
                reviews={element.reviews}
                status={element.availabe}
            />
        );
    });

    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <div className="cards">
                {datacard}
            </div>
           
        </div>
    );
}

