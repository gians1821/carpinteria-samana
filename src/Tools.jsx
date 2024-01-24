import { ToolCard } from "./ToolCard"

const Tools = () => {
    return (
        <section id="tools" className="bg-primary dark:bg-dark-primary">
            <div className="flex flex-col py-12 md:mx-auto md:px-0 px-8">
                <h2 className="text-3xl font-bold text-center mb-8">NUESTRAS HERRAMIENTAS</h2>
                <ul className="flex flex-col gap-8 md:mb-4 md:gap-2 md:flex-row md:justify-between md:mx-[10%]">
                    <ToolCard 
                        text='DRYWALL'
                        img='drywall'
                    />
                    <ToolCard 
                        text='MADERA'
                        img='wood'
                    />
                    <ToolCard 
                        text='MELAMINA'
                        img='melamine'
                    />
                </ul>
            </div>
        </section>
    )
}

export { Tools }
