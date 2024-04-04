

import Footer from "../Footer/Footer";
import H_section0 from "../Home/H_section0";
import Item from "./Item";

function Men({product}){

    return(
        <div className="bg-[#F1F1F1] flex flex-col gap-[50px]">
           
        
      <H_section0 />

      <div className="flex flex-wrap gap-[20px] justify-center">
        {product.length > 0 &&
          product.slice(0, 100).map((item, index) => (
            <Item key={index} data={item} />
          ))}
      </div>

     
           
          <Footer/>
        </div>
    )
}

export default Men;