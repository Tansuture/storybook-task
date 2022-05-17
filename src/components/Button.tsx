import React, { ComponentProps, FC } from 'react'
import { Button as MUIButton, styled } from '@mui/material'

const MUIButtonStyled = styled(MUIButton)`
    
`

export const Button: FC<ComponentProps<typeof MUIButton>> = (props) => {
    return (
        <MUIButtonStyled {...props} />
    )
}
