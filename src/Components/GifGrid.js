
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ category }) => {
 
    const {data:images, loading} = useFetchGifts(category);
    // console.log(data);
    // console.log(loading);

  // getGifs();
  return (
    <>
      <h3 className="card animate__animated animate__bounce">{category}</h3>
      <hr/>

        {loading && <p className="card animate__animated animate__flash">Loading...</p>}
      
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
        
        
      </div>
    </>
  );
};
