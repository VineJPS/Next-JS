"use client";

import { useEffect } from "react";

type ModalComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalComponent({
  isOpen,
  onClose,
  children,
}: ModalComponentProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">{children}</div>
    </div>
  );
}

