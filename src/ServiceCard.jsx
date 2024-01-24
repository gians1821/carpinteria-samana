function ServiceCard({title, icon, text, imgSrc}) {
    return(
        <li>
            <article 
                className="object-cover px-4 py-8 md:px-6 md:py-4 bg-primary dark:bg-dark-primary md:mx-auto rounded shadow-lg my-10 ">
                <h2 
                    className="mb-4 font-extrabold text-2xl text-center">
                    <i className={icon} /> {title}
                </h2>
                <div className="flex flex-col md:flex-row">
                    <img 
                        className="md:mr-4 mb-4 rounded-sm object-cover aspect-video md:w-[30%]"
                        src={imgSrc}
                        alt={`service-${title.toLowerCase}`} 
                    />
                    <p 
                        className="text-center md:text-left text-lg">
                        {text}
                    </p>
                </div>
            </article>
        </li>
    )
}

export { ServiceCard }
