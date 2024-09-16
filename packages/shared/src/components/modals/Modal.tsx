import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  showHeader,
  showFooter,
  headerContent,
  footerContent,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      {/* 스크롤바 전체영역 */}
      <div className="relative bg-white w-[480px] h-[90vh] max-h-[90vh] rounded-2xl shadow-lg flex flex-col overflow-y-auto">
        {showHeader && (
          <div className="sticky top-0 bg-white border-b pt-4 px-8 z-10">{headerContent}</div>
        )}
        <div className="flex-grow px-8 pt-6">{children}</div>
        {showFooter && (
          <div className="sticky bottom-0 bg-white border-t pt-4 pb-6 px-8 z-10">
            {footerContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
