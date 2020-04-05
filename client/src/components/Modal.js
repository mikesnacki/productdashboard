import React, {useRef} from 'react'

export default function Modal({show, action}) {

    const modalRef = useRef();
    const displayed = show === true ? "modal display-block" : "modal display-none"
    let status;

    switch(action){
        case "story-updated":
            status = <p>Story Updated</p>
            break
        case "story-added":
            status = <p>Story added</p>
            break
        case "story-deleted":
            status = <p>Story Deleted</p>
            break
        default:
            status = <p>Error</p>
            break
    }

    return(
        <div 
            ref={modalRef}
            className={displayed}
        >
            <section className="modal-update align-center">
            <button
                    className="modal-button align-right-button"
                    onClick={console.log("hi")}>
                        &times;
            </button>
                <h3>{status}</h3>
            </section>

        </div>
    )

}
