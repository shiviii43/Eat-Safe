
function PageTitle({title,paragraph}){

    const words = title.trim().split(" ")
    const lastWord = words.pop()
    const rest = words.join(" ")
    return(
        <div className="mx-5 my-3 pt-2 pb-2 pl-10 max-w-60">
            <h1 className="font-semibold text-3xl">{rest}{" "}<span className="text-green-600 text-3xl">{lastWord}</span></h1>
            <p className="text-xs text-gray-700 pt-1">{paragraph}</p>
        </div>
    )
}
export default PageTitle