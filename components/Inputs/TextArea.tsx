import React from "react";

interface TextAreaProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const TextArea = ({ id, value, onChange, placeholder }: TextAreaProps) => {
  return (
    <textarea
      id={id}
      rows={5}
      className="py-2.5 px-4 boder-none focus:outline-none block w-full rounded-lg bg-neutral-900 border-transparent text-neutral-400"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
