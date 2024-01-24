const About = () => {
    return(
        <section id="about" className="bg-primary dark:bg-dark-primary px-10 py-12">
            <div className="flex flex-col justify-center text-center md:mx-auto md:w-[80%] lg:w-[60%] ">
                <h2 className="text-3xl font-bold">¿QUIÉNES SOMOS?</h2>
                <div className="mt-12 md:flex md:justify-around md:flex-row">
                <div>
                    <img className="object-cover shadow-lg aspect-square object-right rounded-full mx-auto w-80 md:w-60" src="https://images.unsplash.com/photo-1626081062126-d3b192c1fcb0?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <p className="text-lg mt-12 md:mt-0 md:items-center md:text-left md:flex md:w-[50%]">Somos un negocio familiar de carpintería, donde creamos muebles únicos y ofrecemos servicios a medida para hogares. Con atención personalizada y artesanía, transformamos espacios y construimos historias duraderas.
                </p>
                </div>
            </div>
        </section>
    )
}

export { About }
