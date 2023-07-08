import Main from "./componenets/main/main";
import Navbar from "./componenets/navbar/navbar";
import Footer from "./componenets/footer/footer";
import './style.css'
export default function  SecondProject() {
    return (
        <div className="container">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}