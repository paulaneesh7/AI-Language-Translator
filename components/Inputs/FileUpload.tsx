import { GoPaperclip } from "react-icons/go";

interface FileUploadProps {
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = ({ handleFileUpload }: FileUploadProps) => {
  return (
    <label htmlFor="file-upload" className="cursor-pointer">
      <GoPaperclip size={22} />
      <input
        id="file-upload"
        type="file"
        onChange={handleFileUpload}
        className="hidden"
      />
    </label>
  );
};

export default FileUpload;
