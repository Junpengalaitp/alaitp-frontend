import React from "react";
import { useState } from "react";
import { FormControl, Form } from "react-bootstrap";

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
    const [value, setValue] = useState("");
    const [categories, setCategories] = useState([]);
    const type = "radio"
    const categoryList = ['pl', 'ol', 'lb', 'fw', 'cs', 'ai', 'pt', 'ds', 'dt', 'dv', 'ps', 'we', 'os', 'sv', 'ap', 'se', 'pf', 'ge', 'sf', 'tl', 'at', 'pd', 'ql', 'of', 'tm', 'cp']
    const categoryMap = {pl: "programming language", ol: "other language", lb: "library", fw: "framework", cs: "computer science", ai: "artificial intelligence", pt: "protocol",
                          ds: "data storage", dt: "data transmission", dv: "division", ps: "position", we: "work experience", os_: "operating system", sv: "server", ap: "approach", 
                          se: "software engineering", pf: "platform", ge: "general", sf: "soft skills", tl: "tool", at: "architect", pd: "product", ql: "quality", of: "offer", tm: "team", cp: "company",
                }
    const handleSubmit = event => {
      event.preventDefault()
    }

    const handleOnClick = category => {
      setCategories([...categories, category])
      console.log("categories: ", categories)
    }
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        {/* <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter category"
          onChange={e => setValue(e.target.value)}
          value={value}
        /> */}
        
        <Form onSubmit={handleSubmit}>
          <div key={`inline-${type}`} className="mb-3">
            {categoryList.map(category => (
              <Form.Check inline label={categoryMap[category]} type={type} id={`inline-${type}-${category}`} onClick={() => handleOnClick(category)} />
            ))}
          </div>
        </Form>
        
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
