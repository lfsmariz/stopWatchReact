import React from 'react'

const Screen = (props) => {
    return (<div className='monitor'><div className="appScreen">{props.children}</div></div>)

}

export default Screen