
import Footer from "../Footer/Footer";
import H_section0 from "../Home/H_section0";
import Item from "../Men/Item";

function Electronics(prop){
    return(
        <div className="bg-[#0055E9] flex flex-col gap-[50px] ">
      <H_section0 />

      <div className="flex flex-wrap gap-[20px] justify-center">
        {prop.product.length > 0 &&
          prop.product.slice(0, 10).map((item, index) => (
            <Item key={index} data={item} />
          ))}
      </div>

     <Footer/>
    </div>
    )
}

export default Electronics;