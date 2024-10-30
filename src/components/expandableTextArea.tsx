import React, {
  useEffect,
  useRef,
  forwardRef,
  TextareaHTMLAttributes,
} from 'react';

interface ExpandableTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onDataChange: (value: string) => void; // Expect a string
  maxRows?: number; // Limit the maximum number of visible rows
  label?: string;
  required?: boolean;
  error?: string;
}

const ExpandableTextarea = forwardRef<
  HTMLTextAreaElement,
  ExpandableTextareaProps
>(
  (
    {
      value,
      onDataChange,
      placeholder,
      maxRows = 5,
      label,
      required,
      error,
      ...rest
    },
    ref
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    // Update local state when external value changes
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.value = value ?? ''; // Set value from props
        adjustHeight(); // Adjust height when value changes
      }
    }, [value]);

    // Adjust textarea height based on content
    const adjustHeight = () => {
      const textarea =
        (ref as React.MutableRefObject<HTMLTextAreaElement>)?.current ||
        textareaRef.current; // Use the passed ref if available

      if (textarea) {
        textarea.style.height = 'auto'; // Reset height to auto to calculate the new scrollHeight
        const rows = Math.min(Math.ceil(textarea.scrollHeight / 24), maxRows); // 24 is an approximate line height
        textarea.rows = rows; // Set the number of visible rows
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value; // Get the current value from the event
      onDataChange(newValue); // Call the onChange prop with the new value
      adjustHeight(); // Adjust height on change
    };

    return (
      <div className="textfield-container">
        {label && (
          <label className="textfield-label">
            {label} {`${required ? '*' : ''}`}
          </label>
        )}{' '}
        <textarea
          ref={(node) => {
            textareaRef.current = node; // Assign the ref
            if (typeof ref === 'function') {
              ref(node); // Call the forwarded ref if it's a function
            } else if (ref) {
              ref.current = node; // Assign the ref if it's an object
            }
          }}
          value={value} // Use the value from props
          onChange={handleChange} // Call handleChange on change
          rows={1} // Start with 1 row
          style={{
            width: '100%', // Adjust width as needed
            resize: 'none', // Prevent manual resizing
            overflow: 'hidden', // Prevent scrollbars
            lineHeight: '1.5', // Set line height to calculate rows correctly
            padding: '8px', // Optional: Add padding for better appearance
            boxSizing: 'border-box', // Include padding in width
          }}
          className={`textarea-input ${error ? 'textfield-input-error' : ''}`}
          placeholder={placeholder}
          {...rest} // Spread any other props
        />
        {error && <span className="textfield-error">{error}</span>}
      </div>
    );
  }
);

export default ExpandableTextarea;
