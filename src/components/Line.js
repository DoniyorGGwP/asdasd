import React from 'react'
import styled from 'styled-components'

const StyledLine = styled.div`
    font-size: 24px;
    color: ${props => props.color || props.theme.colors.primary};
    @media ${props => props.theme.media.phone} {
        color: red;
    }
    @media ${props => props.theme.media.tablet} {
        color: green;
    }
    `

const Line = (props) => {
    return <StyledLine {...props} />
}

export default Line