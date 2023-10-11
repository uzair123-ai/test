import React from 'react'
import "../Items/items.css"
import pic1 from "./images/image.jfif";
import pic2 from "./images/image2.jfif";
import pic3 from "./images/image3.jfif";
import pic4 from "./images/image4.jfif";  
import pic5 from "./images/image5.jfif";
import pic6 from "./images/image6.jfif";
const Items = () => {
  return (
    <>
    <div class="row">
    <div class="col-md-6" style={{width:"30rem"}}>
      <img src={pic1} className="card-img-top" alt="pic1"/>
        <div class="card mdb-color lighten-2 text-center z-depth-2">
            <div class="card-body">
              <h3>lorem</h3>
              <p>100rs</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    </div>    
    <div class="col-md-6" style={{width:"30rem"}}>
      <img src={pic2} className="card-img-top" alt="pic1"/>
        <div class="card mdb-color lighten-2 text-center z-depth-2">
            <div class="card-body">
              <h3>lorem</h3>
              <p>100rs</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    </div>
    <div class="col-md-6" style={{width:"30rem"}}>
      <img src={pic3} className="card-img-top" alt="pic1"/>
        <div class="card mdb-color lighten-2 text-center z-depth-2">
            <div class="card-body">
              <h3>lorem</h3>
              <p>100rs</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    </div>
    <div class="col-md-6" style={{width:"30rem"}}>
      <img src={pic4} className="card-img-top" alt="pic1"/>
        <div class="card mdb-color lighten-2 text-center z-depth-2">
            <div class="card-body">
              <h3>lorem</h3>
              <p>100rs</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    </div>
    <div class="col-md-6" style={{width:"30rem"}}>
      <img src={pic5} className="card-img-top" alt="pic1"/>
        <div class="card mdb-color lighten-2 text-center z-depth-2">
            <div class="card-body">
              <h3>lorem</h3>
              <p>100rs</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    </div>
    <div class="col-md-6" style={{width:"30rem"}}>
      <img src={pic6} className="card-img-top" alt="pic1"/>
        <div class="card mdb-color lighten-2 text-center z-depth-2">
            <div class="card-body">
              <h3>lorem</h3>
              <p>100rs</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    </div>  
</div>
</>      
  )
}

export default Items;
