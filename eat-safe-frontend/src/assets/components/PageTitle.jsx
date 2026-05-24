
function PageTitle({title,paragraph}){

    const words = title.trim().split(" ")
    const lastWord = words.pop()
    const rest = words.join(" ")
    return(
        <div className="mx-20 my-5 max-w-1/4">
            <h1 className="font-semibold text-5xl mb-2">{rest}{" "}<span className="text-green-600 text-5xl">{lastWord}.</span></h1>
            <p className="text-base text-gray-700 pt-1">{paragraph}</p>
        </div>
    )
}
export default PageTitle