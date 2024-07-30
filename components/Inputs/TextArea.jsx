import React from "react";

const TextArea = ({ id, value, onChange, placeholder }) => {
  return (
    <textarea
      id={id}
      rows={5}
      className="py-2.5 px-4 boder-none focus:outline-none block w-full border-transparent rounded-lg dark:bg-neutral-900 dark;:border-transparent dark:text-neutral-400"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
