import React from 'react'

function Alert(props) {
    return (
        // firstly checks the condition if alert is null or not if not null it continue
        props.alert && <div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{props.alert.type}</strong>: <em>{props.alert.message}</em>
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
    )
}

export default Alert
