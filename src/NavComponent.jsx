function NavComponent( { text, href } ) {
    return(
        <li>
            <a className="block p-11 rounded text-lg font-medium md:p-2 hover:bg-hover dark:hover:bg-dark-hover active:bg-active" href={href}>
                {text}
            </a>
        </li>
    )
}

export { NavComponent }
