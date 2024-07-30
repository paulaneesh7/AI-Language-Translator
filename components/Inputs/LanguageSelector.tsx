import { LuLanguages } from "react-icons/lu";

interface LanguageSelectorProps {
  languages: string[];
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

const LanguageSelector = ({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}: LanguageSelectorProps) => {
  return (
    <span className="cursor-pointer rounded-full space-x-1 pl-2 bg-black flex flex-row items-center">
      <LuLanguages size={20} />
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="bg-black flex flex-row rounded-full py-1 text-white"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </span>
  );
};

export default LanguageSelector;
