import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1 `
color: ${props => props.color || props.theme.colors.primary};
@media ${props => props.theme.media.phone} {
    color: red;
}
@media ${props => props.theme.media.tablet} {
    color: green;
}
`

const Title = (props) => {
    return <StyledTitle {... props}/>
     
}

export default Title;