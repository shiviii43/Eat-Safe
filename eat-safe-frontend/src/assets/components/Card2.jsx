
function Card2({image,title,description}){
    return(
        <div className="bg-white rounded-2xl m-3 flex border border-gray-200 h-30 w-50" >
            <img className="h-15 my-auto " src={image}/>
            <div className="p-1">
                <h1 className="font-semibold text-xs" >{title}</h1>
                <p className="text-gray-600 text-xs pt-1.5">{description}</p>
            </div>
        </div>
    )
}
export default Card2