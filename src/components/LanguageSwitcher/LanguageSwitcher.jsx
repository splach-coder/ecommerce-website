// LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className="py-2 px-4 border bordr-red-500 text-red-500 me-5 mb-10" onClick={() => changeLanguage("en")}>English</button>
      <button className="py-2 px-4 border bordr-red-500 text-red-500 me-5 mb-10" onClick={() => changeLanguage("fr")}>French</button>
    </div>
  );
}

export default LanguageSwitcher;
