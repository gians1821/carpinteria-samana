function Footer() {
    return(
        <footer id="contact" className="bg-secondary dark:bg-dark-secondary py-20 px-8">
        <div className="contenido md:w-[80%] lg:w-[60%] md:mx-auto flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-center">CONTÁCTANOS</h2>
          <p className="text-lg text-center leading-8">
            <strong>Calle El Cedro 873 Trujillo, Perú</strong> <br />
            <strong>Email:</strong> magia@madera.com <br />
            <strong>Teléfono:</strong> 937 87 76 30 <br />
            <strong>Whatsapp:</strong> 644 145 145 <br />
          </p>
        </div>
      </footer>
    )
}

export { Footer }