import React from 'react'

export interface AuxProps {
    children?: React.ReactNode;
}

const aux = (props:AuxProps) => <div>{props.children}</div>

export default aux;