
export default function Tabs({children, buttons, ButtonsContainer="menu"}){//here buttonsContainer is a wrapper
    //const ButtonContainer = buttonsContainer;
    return( <>
    <ButtonsContainer>
       {/* //or any name , here used as slots */}
       {buttons}
    </ButtonsContainer>
    {children}
    </>
    )
}