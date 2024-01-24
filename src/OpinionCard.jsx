function OpinionCard( { name, textOpinion, imgSrc } ) {
    return(
        <article className="shrink-0 w-[90%] lg:w-[30%] px-6 rounded snap-center shadow-lg bg-primary dark:bg-dark-primary">
            <div className="aspect-video object-cover text-center mt-4">
                <h2 className="mb-4 text-xl font-bold">{name}</h2>
                <div className="mb-4">
                <img className="w-[60%] md:w-[40%] mx-auto mb-4 rounded-full object-cover aspect-square shadow-lg" src={imgSrc} alt={`img-${name.toLowerCase()}`}/>
                <i>{textOpinion}</i>
                </div>
            </div>
        </article>

    )
}

export { OpinionCard }
