const Form = () => {
    return (
        <section id="form" className="bg-primary dark:bg-dark-primary py-12 px-8">
                <h2 className="text-3xl font-bold text-center">REALIZA TU <br className="md:hidden" /> CONSULTA</h2>
            <div className="contenido md:w-[80%] lg:w-[40%] md:mx-auto flex flex-col gap-8">
                <form className="flex flex-col gap-4" action="">
                <label className="font-bold" for="name">
                    Nombre:
                    <input className="block text-black w-full font-normal px-4 py-2 rounded-xl mt-1" type="text" id="name" placeholder="Escribe tu nombre..." required />
                </label>
                <label className="font-bold" for="cellphone">
                    Número de Celular:
                    <input className="block text-black w-full font-normal px-4 py-2 rounded-xl mt-1" type="text" id="cellphone" placeholder="Escribe tu celular..." required />
                </label>
                <label className="font-bold" for="email">
                    Correo Electrónico:
                    <input className="block text-black w-full font-normal px-4 py-2 rounded-xl mt-1" type="text" id="email" placeholder="Escribe tu correo electrónico..." required />
                </label>
                <label className="font-bold" for="description">
                    Descripción de lo que desea:
                    <textarea className="block text-black w-full font-normal px-4 py-2 rounded-xl mt-1" id="description" rows="10" placeholder="Escribe tu consulta..."
                    required></textarea>
                </label>
                <input className="w-32 m-auto text-lg py-1 rounded-xl bg-black text-white mt-4 shadow-lg" type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export { Form }
