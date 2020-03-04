import React from "react"

export const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  
  <p ref={ref} onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </p>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
export const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const value = ""
    
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled w-auto">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
