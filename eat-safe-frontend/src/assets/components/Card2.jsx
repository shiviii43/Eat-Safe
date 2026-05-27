
function Card2({image,title,description}){
    return(
        <div className="bg-white rounded-2xl m-3 flex border border-gray-300 h-35 w-80" >
            <img className="h-20 my-auto mx-2" src={image}/>
            <div className="p-1 my-auto">
                <h1 className="font-semibold text-lg" >{title}</h1>
                <p className="text-gray-600 text-base pt-1.5">{description}</p>
            </div>
        </div>
    )
}
export default Card2