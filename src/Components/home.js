import { useEffect } from "react";

const Home = () =>{

    let name = "Rishi Srivastava";
    let laptop ={brand : 'Asus', price:'120000',processor: 'i7 10th'};
    useEffect(() => {
        console.log("From Use Effect");
    }, [])
    return(
        <div>
        <h1>Home component</h1>
        <p>{name}</p>
        <div className="row mt-5">

            

            <div className="col-md">
                <ul className="list-group" style={ { fontweight: "400"}}>
                    <li className="list-group-item">
                        brand
                    </li>
                    <li className="list-group-item">
                        price
                    </li>
                    <li className="list-group-item">
                        processor
                    </li>
                </ul>
            </div>

            <div className="col-md">
                <ul className="list-group">
                    <li className="list-group-item">{laptop.brand}</li>
                    <li className="list-group-item">{laptop.price}</li>
                    <li className="list-group-item">{laptop.processor}</li>

                </ul>

            </div>

        </div>
        </div>
    )
}
export default Home;