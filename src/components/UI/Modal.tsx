import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "../../types/modules";

export default function Modal({
  children,
  className = "",
  open,
  modalActions,
  onClose
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) dialogRef.current?.showModal();
    // return () => dialogRef.current?.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
      {children}
      <form method="dialog">{modalActions}</form>
    </dialog>,
    document.getElementById("modal")!
  );
}
