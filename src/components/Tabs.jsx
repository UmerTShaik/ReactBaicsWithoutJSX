
export default function Tabs({children, buttons}){
    return( <>
    <menu>
       {/* //or any name , here used as slots */}
       {buttons}
    </menu>
    {children}
    </>
    )
}