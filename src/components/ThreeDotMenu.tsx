import React, { useEffect, useRef, useState } from 'react';

import { ThreeDot } from './Icons';

// ThreeDotMenuDropdown component
const ThreeDotMenuDropdown: React.FC<any> = ({ options, handleMenuAction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');

  const buttonRef = useRef<HTMLButtonElement>(null);
  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && buttonRef.current && menuRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownRect = menuRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;
      console.log(
        spaceBelow,
        dropdownRect.height,
        spaceAbove,
        dropdownRect.height
      );
      if (spaceBelow > spaceAbove) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen]);
  return (
    <div
      className="menu-container"
      ref={menuRef}
      style={{ position: 'relative' }}
    >
      {/* Three dot button */}
      <button
        className="three-dot-button"
        onClick={toggleDropdown}
        style={buttonStyle}
        ref={buttonRef}
      >
        <ThreeDot />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="dropdown-menus"
          style={{
            ...dropdownStyle,
            [position]: '100%',
          }}
        >
          <ul style={menuStyle}>
            {options.map((option: any, index: number) => (
              <li
                key={index}
                className="menu-item"
                onClick={() => {
                  handleMenuAction(option, index), setIsOpen(false);
                }}
              >
                <span>{option.icon}</span>
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ThreeDotMenuDropdown;

// Styles (You can replace these with your own CSS or use styled-components)
const buttonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
};

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '4px',
  zIndex: 10,
  minWidth: '200px',
  right: '16px',
};

const menuStyle: React.CSSProperties = {
  listStyleType: 'none',
  margin: 0,
  padding: '0.5rem 0',
};

// Example of usage
