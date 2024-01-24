import { ServiceCard } from "./ServiceCard"

const Services = () => {
    return (
        <section id="services" className="bg-secondary dark:bg-dark-secondary py-12 px-8 md:px-0">
            <div className="contenido md:w-[80%] lg:w-[60%] md:mx-auto flex flex-col">
                <h2 className="text-3xl font-bold text-center">NUESTROS SERVICIOS</h2>
                <ul>
                    <ServiceCard 
                        icon='fa-solid fa-tape' 
                        title='Confección'
                        imgSrc='https://img.freepik.com/foto-gratis/carpintero-profesional-trabajando-sierra_1157-35629.jpg?w=1380&t=st=1699721137~exp=1699721737~hmac=cc4ae41551279c5adcaa3c168b06b25769e36acc6767174b88cd539360f1b8ff'  
                        text='Cada pieza que elaboramos lleva consigo la historia de cuidadosa selección de materiales y el meticuloso proceso de diseño y construcción. Cada proyecto es una expresión de dedicación y amor por el oficio.'
                    />
                    <ServiceCard 
                        icon='fa-solid fa-list-check'
                        title='Mantenimiento'
                        imgSrc='https://img.freepik.com/foto-gratis/punto-vista-joven-manitas-que-usa-taladro-electrico-arreglar-puerta-armario-cocina_662251-2704.jpg?w=1380&t=st=1699724457~exp=1699725057~hmac=63bfffefcc76ae8a092623cdffb29111819bc3ca44e4c8f3b4c4c7f069bfd9b0'
                        text='Nuestra filosofía en cuanto al mantenimiento es simple pero efectiva: cuidar cada pieza como si fuera única. Nuestro objetivo es que tus muebles no solo perduren en el tiempo, sino que también sigan siendo un testimonio de calidad y buen gusto.'
                    />
                    <ServiceCard 
                        icon='fa-solid fa-gears'
                        title='Reestructuración'
                        imgSrc='https://img.freepik.com/foto-gratis/trabajador-carpintero-calificado-utilizando-sus-herramientas-madera_23-2148640318.jpg?w=1380&t=st=1699724526~exp=1699725126~hmac=9b1420dca321ec5b2b5756233986ae16641997d86006f4c6eb418ec265316b9c'
                        text='Ya sea restaurando ese antiguo sillón heredado con un valor sentimental inigualable o renovando muebles desgastados por el uso diario, nuestro equipo de expertos carpinteros se dedica a devolverles vida y funcionalidad.'
                    />
                </ul>
            </div>
        </section>
    )
}

export { Services }
