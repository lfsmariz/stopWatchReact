import React from 'react'
import { Helmet } from 'react-helmet'

const TitleTime = (props) => {
    if (props.count == null) { return <Helmet><title>Digdin Time</title></Helmet> }
    else return (<Helmet>
        <title>
            {props.convertTime(props.count).hour < 10
                ? `0${props.convertTime(props.count).hour} :`
                : `${props.convertTime(props.count).hour} :`}
            {props.convertTime(props.count).minute < 10
                ? `0${props.convertTime(props.count).minute} :`
                : `${props.convertTime(props.count).minute} :`}
            {props.convertTime(props.count).second < 10
                ? `0${props.convertTime(props.count).second}`
                : `${props.convertTime(props.count).second}`}

        </title>
    </Helmet>)
}

export default TitleTime