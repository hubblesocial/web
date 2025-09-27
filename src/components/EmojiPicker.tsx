import React, { useRef, useEffect } from 'react';
import twemoji from 'twemoji';
import { EMOJIS } from '../utils/emojis';
import '../css/emoji-picker.scss';

interface EmojiPickerProps {
  onSelect: (name: string) => void;
  onClose: () => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onSelect, onClose }) => {
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div ref={pickerRef} className="emoji-picker-container">
      {EMOJIS.map((emoji) => (
        <button
          key={emoji.name}
          type="button"
          onClick={() => onSelect(emoji.name)}
          className="emoji-button"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: twemoji.parse(emoji.char, { folder: 'svg', ext: '.svg' }),
            }}
            className="emoji-icon"
          />
          <span className="emoji-name">:{emoji.name}:</span>
        </button>
      ))}
    </div>
  );
};

export default EmojiPicker;
