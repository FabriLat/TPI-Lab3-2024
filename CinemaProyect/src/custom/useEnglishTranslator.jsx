

const useEnglishTranslator = (text, translateToEnglish) => {

  const englishTranslations = {
    // log in
        "Iniciar sesión": "Log in",
        "Usuario/Email": "User/Email",
        "Contraseña": "Password",
        "Olvidé mi contraseña": "Forgot password",
        "Ancho de pantalla": "Display width",
        "Alto de pantalla": "Display height"

    }

  return translateToEnglish ? englishTranslations[text] || text : text;
}

export default useEnglishTranslator;
