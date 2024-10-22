import React, { useState, useRef, useEffect } from 'react';
import { ThreeDot } from './Icons';
// ThreeDotMenuDropdown component
const ThreeDotMenuDropdown: React.FC<any> = ({ options, handleMenuAction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      >
        <ThreeDot />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu" style={dropdownStyle}>
          <ul style={menuStyle}>
            {options.map((option: any, index: number) => (
              <li
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
  top: '100%',
  right: '0',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '4px',
  zIndex: 10,
  minWidth: '200px',
};

const menuStyle: React.CSSProperties = {
  listStyleType: 'none',
  margin: 0,
  padding: '0.5rem 0',
};

// Example of usage
