
function PageTitle({title,paragraph}){

    const words = title.trim().split(" ")
    const lastWord = words.pop()
    const rest = words.join(" ")
    return(
        <div>
            <h1 className="text-black text-3xl">{rest}{" "}<span className="text-red-700 text-3xl">{lastWord}</span></h1>
            <p>{paragraph}</p>
        </div>
    )
}
export default PageTitle