import React from 'react'

function Modal ({isOpen, onClose, children}){

    const handleOutsideClick = () => {
        onClose();
    }

    if (!isOpen) return null

  return (
    <>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70" onClick={handleOutsideClick}/>
        <dialog className="fixed top-1/2 left-1/2 translate-y-1/2 translate-x-1/2 p-50 bg-cream">
            {children}
        </dialog>
    </>
  );
}

export default Modal