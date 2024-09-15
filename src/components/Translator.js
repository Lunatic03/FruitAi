import React, { useState } from 'react';
import './Translator.css';

const languages = [
  'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean'
];

const Translator = () => {
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('Spanish');
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = (e) => {
    e.preventDefault();
    setTranslatedText(`Translated text from ${sourceLanguage} to ${targetLanguage}: ${sourceText}`);
  };

  return (
    <div className="translator-container">
      <h1>Translator</h1>
      <form className="translator-form" onSubmit={handleTranslate}>
        <div className="translator-inputs">
          <div className="translator-input-group">
            <label htmlFor="source-language">From:</label>
            <select
              id="source-language"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              {languages.map((language) => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
          <div className="translator-input-group">
            <label htmlFor="target-language">To:</label>
            <select
              id="target-language"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              {languages.map((language) => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>
        <textarea
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder="Enter text to translate..."
          rows="5"
        />
        <button type="submit">Translate</button>
      </form>
      {translatedText && (
        <div className="translator-result">
          <h2>Result:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
