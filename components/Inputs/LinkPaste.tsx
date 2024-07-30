import { IoMdLink } from "react-icons/io";

interface LinkPasteProps {
  handleLinkPaste: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LinkPaste = ({ handleLinkPaste }: LinkPasteProps) => {
  return (
    <label htmlFor="link-input" className="cursor-pointer">
      <IoMdLink size={20} />
      <input
        id="link-input"
        type="text"
        onChange={handleLinkPaste}
        className="hidden"
      />
    </label>
  );
};

export default LinkPaste;
