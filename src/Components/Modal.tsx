import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
interface ModalProps  {
    isShown: boolean;
    hide: () => void;
    modalContent?: JSX.Element;
    data: any;
}

export const Modal: FunctionComponent<ModalProps> = ({
                                                         isShown,
                                                         hide,
                                                         modalContent,
                                                         data
                                                     }) => {
    useEffect(() => {
        if (isShown) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [isShown]);

    const modal = (
        <>
            <div id="myModal" className="modal" onClick={hide}>
                <div className="modal-content">
                    {data && (<div>
                            <img src={data.avatar}/>
                            <p>{data.firstName}</p>
                            <p>{data.lastName}</p>
                            <p>{data.role}</p>
                            <p>{data.joinDate}</p>
                            <p>{data.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
