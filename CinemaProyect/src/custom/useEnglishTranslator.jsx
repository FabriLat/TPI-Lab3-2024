

const useEnglishTranslator = (text, translateToEnglish) => {

  const englishTranslations = {

    // log in
        "Iniciar sesión": "Log in",
        "Usuario/Email": "User/Email",
        "Contraseña": "Password",
        "Olvidé mi contraseña": "Forgot password",
        "Ancho de pantalla": "Display width",
        "Alto de pantalla": "Display height",
        "Ingresá tu usuario o email": "Enter your user or email",
        "Ingresá tu contraseña": "Enter your password",

    // sign in
    "Registrarse": "Sign in",
    "Usuario": "User",
    "Email": "Email",
    "Confirmar contraseña": "Confirm password",
    "Confirmá tu contraseña": "Confirm your password",
    "Ingresá tu usuario": "Enter your user",
    "Ingresá tu email": "Enter your email"

    }

  return translateToEnglish ? englishTranslations[text] || text : text;
}

export default useEnglishTranslator;
