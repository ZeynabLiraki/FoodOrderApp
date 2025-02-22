import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "../../types/modules";

export default function Modal({
  children,
  className = "",
  open,
  onClose
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal= dialogRef.current;
    if (open) {modal?.showModal();}
   return () => modal?.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
}
