

export const GifGridItem = ({title,url}) => {
 
   // console.log({title,url})

    return (
    <div className="card animate__animated animate__bounceInUp">
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}