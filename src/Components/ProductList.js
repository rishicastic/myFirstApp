import "./productlist.css";
import {Button, Card, CardContent, CardMedia, Grid, Paper} from '@mui/material';
import { useContext } from "react";
import { ProductContext } from "../productContext";
const ProductList =() =>{
    const nums =[ 1,2,3,4,5,6,7,8,9];
    const displayNumbers =() => {
        return nums.map ( (n) => 
            <div className="col-md-4 col-sm-6 col-lg-3">
                <h1 className ="nums" > {n} </h1>
            </div>
        ) 
    }
    const {productData} = useContext(ProductContext);
    const btnStyle ={
        backgroundColor:"cadetblue",
    };

    const displayGames =() =>{
        return productData.map ( (game) => ( 
            <Grid item md={4} lg ={3} sm ={6} sx ={12}>
                <Card>
                 <CardMedia component ="img" image ={game.img_url} height ={170}/>
                <CardContent>
                <h3>{game.name}</h3>
                <p className="text-muted">{game.publisher}</p>
                <button className="btn btn-dark float-end"></button>
                <Button style ={btnStyle} variant="contained" color="primary">₹{game.price}</Button>
                </CardContent>
                </Card>
                
            </Grid>
        ))
    }

    return(
        <Paper style={{ height:"100vh"}}>
            <div className="container">
            <h1>Product List</h1>
            <Grid container spacing = {5}>
            {displayGames()}
            </Grid>
        </div>
        </Paper>
        
    )
}
export default ProductList;