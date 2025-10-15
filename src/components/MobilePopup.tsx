import { Button, CloseIcon } from './ui';

interface MobilePopupProps {
  onClose: () => void;
}

export function MobilePopup({ onClose }: MobilePopupProps) {
  return (
    <div className="fixed top-4 left-4 right-4 z-50 md:hidden animate-fadeIn">
      <div className="bg-black/90 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-lg">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-white text-sm font-medium mb-1">
              Desktop Optimized
            </p>
            <p className="text-gray-300 text-xs leading-relaxed">
              This app is optimized for desktop experience for better champion browsing.
            </p>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            className="flex-shrink-0 p-1 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Close popup"
          >
            <CloseIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
