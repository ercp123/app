import React from 'react';
import logoSerasa from './media/serasa-logo.svg'
import { AreaHeader } from './styles'

const HeaderLogin = () => {

    return (
        <>
            <AreaHeader to="/">
                <img src={logoSerasa}></img>
            </AreaHeader>

        </>
    )
}
export default HeaderLogin;