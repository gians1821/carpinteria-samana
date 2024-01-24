import { OpinionCard } from "./OpinionCard"

const Reviews = () => {
    return (
        <section className="py-10 bg-secondary dark:bg-dark-secondary">
            <h2 className="font-bold text-center text-3xl">NUESTRAS OPINIONES</h2>
            <div className="flex gap-4 w-full py-4 px-4 md:px-32 overflow-x-auto snap-x">
                
                <OpinionCard 
                    name="SERGIO"
                    imgSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    textOpinion='"Magia Madera convierte la carpintería en un arte encantador; sus muebles son verdaderas piezas mágicas que transforman cualquier espacio."'
                />
                <OpinionCard 
                    name="PATRICIA"
                    imgSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    textOpinion='"Recomiendo Magia Madera para aquellos que buscan muebles que deslumbran con su creatividad y calidad excepcional."'
                />
                <OpinionCard 
                    name="PEDRO"
                    imgSrc="https://img.freepik.com/foto-gratis/cerrar-al-hombre-sonriendo-naturaleza_23-2150771113.jpg?size=626&ext=jpg"
                    textOpinion='"En Magia Madera, la carpintería se convierte en una experiencia mágica; cada mueble es una obra maestra única y duradera."'
                />
                <OpinionCard 
                    name="BENITO"
                    imgSrc="https://img.freepik.com/foto-gratis/cerrar-al-hombre-sonriendo-naturaleza_23-2150771113.jpg?size=626&ext=jpg"
                    textOpinion='"La magia de Magia Madera reside en sus muebles, donde la artesanía excepcional y el diseño cautivador se unen en perfecta armonía."'
                />
                <OpinionCard 
                    name="PEPE"
                    imgSrc="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    textOpinion='"Magia Madera crea magia tangible en cada pieza de mobiliario, ofreciendo no solo muebles, sino también encantamiento para tu hogar."'
                />
                <OpinionCard 
                    name="PELAEZ"
                    imgSrc="https://img.freepik.com/foto-gratis/guapo-hombre-presentacion-algo_1368-87.jpg?size=626&ext=jpg"
                    textOpinion='"Encantado con la magia de Magia Madera; sus muebles son mucho más que objetos, son hechizos de elegancia y calidad."'    
                />
            </div>
        </section>
    )
}

export { Reviews }
