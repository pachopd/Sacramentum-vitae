{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", () => \{\
  // A\'f1o actual en footer\
  const yearSpan = document.getElementById("year");\
  if (yearSpan) \{\
    yearSpan.textContent = new Date().getFullYear();\
  \}\
\
  // Men\'fa responsive\
  const navToggle = document.getElementById("navToggle");\
  const mainNav = document.getElementById("mainNav");\
\
  if (navToggle && mainNav) \{\
    navToggle.addEventListener("click", () => \{\
      mainNav.classList.toggle("nav-open");\
    \});\
\
    mainNav.querySelectorAll("a").forEach((link) => \{\
      link.addEventListener("click", () => \{\
        mainNav.classList.remove("nav-open");\
      \});\
    \});\
  \}\
\
  // Manejo b\'e1sico del formulario\
  const earlyAccessForm = document.getElementById("earlyAccessForm");\
  if (earlyAccessForm) \{\
    earlyAccessForm.addEventListener("submit", (e) => \{\
      e.preventDefault();\
\
      const emailInput = document.getElementById("email");\
      const tipoUsuario = document.getElementById("tipo-usuario");\
\
      if (!emailInput.value) return;\
\
      alert(\
        `\'a1Gracias por tu inter\'e9s!\\n\\nRegistramos tu correo ($\{emailInput.value\}) como: $\{tipoUsuario.value\}.\\n\\nEn una versi\'f3n real, aqu\'ed enviar\'edamos tus datos al servidor.`\
      );\
\
      earlyAccessForm.reset();\
    \});\
  \}\
\
  // Timeline interactivo de la misa\
  const timelineEl = document.getElementById("timelineMisa");\
  const detailEl = document.getElementById("timelineDetail");\
\
  if (timelineEl && detailEl) \{\
    const timelineData = \{\
      "procesion": \{\
        title: "Procesi\'f3n de entrada",\
        text: "Los ministros caminan hacia el altar mientras la asamblea canta. Es signo de que todos caminamos juntos hacia Dios, llamados por Jes\'fas para reunirnos como familia.",\
        key: "C\'f3mo vivirlo: \'93Entro a la casa de Dios con alegr\'eda\'94."\
      \},\
      "saludo": \{\
        title: "Saludo",\
        text: "El sacerdote nos saluda: \'93El Se\'f1or est\'e9 con ustedes\'94. Es el recuerdo de que Jes\'fas est\'e1 realmente presente y nos mira con amor.",\
        key: "C\'f3mo vivirlo: \'93Estoy delante de Jes\'fas que me ama\'94."\
      \},\
      "acto-penitencial": \{\
        title: "Acto penitencial",\
        text: "Toda la comunidad pide perd\'f3n. No es un momento de miedo, sino de confianza: Dios limpia el coraz\'f3n y nos da un nuevo comienzo.",\
        key: "C\'f3mo vivirlo: \'93Se\'f1or, perd\'f3name y ay\'fadame a empezar de nuevo\'94."\
      \},\
      "oracion-colecta": \{\
        title: "Oraci\'f3n colecta",\
        text: "El sacerdote recoge las intenciones de todos y las presenta a Dios en una sola oraci\'f3n. La Iglesia ora unida.",\
        key: "C\'f3mo vivirlo: \'93Se\'f1or, te entrego mi vida y la de mi familia\'94."\
      \},\
      "liturgia-palabra": \{\
        title: "Liturgia de la Palabra",\
        text: "Escuchamos las lecturas de la Biblia y el Evangelio. Es Dios quien habla hoy a su pueblo para iluminar la vida de cada uno.",\
        key: "C\'f3mo vivirlo: \'93Jes\'fas, h\'e1blame; quiero escucharte\'94."\
      \},\
      "profesion-fe": \{\
        title: "Profesi\'f3n de fe",\
        text: "Rezamos el Credo. La Iglesia entera responde: \'93Creo\'94. Es un acto de confianza y de amor hacia Dios.",\
        key: "C\'f3mo vivirlo: \'93Se\'f1or, quiero creer y seguirte con mi vida\'94."\
      \},\
      "ofertorio": \{\
        title: "Ofertorio",\
        text: "Se presentan el pan y el vino, signo de nuestra vida y de la creaci\'f3n. Ofrecemos a Dios todo lo que somos y tenemos.",\
        key: "C\'f3mo vivirlo: \'93Jes\'fas, te ofrezco mi semana, mis trabajos y mis preocupaciones\'94."\
      \},\
      "prefacio": \{\
        title: "Prefacio",\
        text: "El sacerdote proclama una oraci\'f3n de acci\'f3n de gracias. Recordamos que todo es don y la misa es un gran \'93gracias\'94 a Dios.",\
        key: "C\'f3mo vivirlo: \'93Gracias, Se\'f1or, por todo lo que me das cada d\'eda\'94."\
      \},\
      "plegaria-eucaristica": \{\
        title: "Plegaria eucar\'edstica",\
        text: "Es el coraz\'f3n de la misa. En la consagraci\'f3n, el pan y el vino se convierten en el Cuerpo y la Sangre de Cristo. Jes\'fas se hace realmente presente.",\
        key: "C\'f3mo vivirlo: \'93Jes\'fas, te adoro y me uno a tu entrega\'94."\
      \},\
      "rito-comunion": \{\
        title: "Rito de comuni\'f3n",\
        text: "Rezamos el Padrenuestro, nos damos la paz y recibimos a Jes\'fas en la Eucarist\'eda. Es un encuentro \'edntimo con \'c9l.",\
        key: "C\'f3mo vivirlo: \'93Jes\'fas, ven a mi coraz\'f3n y qu\'e9date conmigo\'94."\
      \},\
      "despedida": \{\
        title: "Oraci\'f3n final y despedida",\
        text: "Recibimos la bendici\'f3n y somos enviados: \'93Pueden ir en paz\'94. La misa termina, pero comienza la misi\'f3n en el mundo.",\
        key: "C\'f3mo vivirlo: \'93Quiero ser luz donde t\'fa me env\'edes, Se\'f1or\'94."\
      \}\
    \};\
\
    const updateDetail = (stepKey) => \{\
      const data = timelineData[stepKey];\
      if (!data) return;\
\
      const titleEl = detailEl.querySelector(".timeline-detail-title");\
      const textEl = detailEl.querySelector(".timeline-detail-text");\
      const keyEl = detailEl.querySelector(".timeline-detail-key");\
\
      if (titleEl) titleEl.textContent = data.title;\
      if (textEl) textEl.textContent = data.text;\
      if (keyEl) \{\
        keyEl.innerHTML = `<strong>C\'f3mo vivirlo:</strong> $\{data.key.replace("C\'f3mo vivirlo: ", "")\}`;\
      \}\
    \};\
\
    const initialActive = timelineEl.querySelector(".timeline-step.is-active");\
    if (initialActive) \{\
      const stepKey = initialActive.getAttribute("data-step");\
      updateDetail(stepKey);\
    \}\
\
    timelineEl.querySelectorAll(".timeline-step").forEach((stepEl) => \{\
      stepEl.addEventListener("click", () => \{\
        const stepKey = stepEl.getAttribute("data-step");\
        if (!stepKey) return;\
\
        timelineEl.querySelectorAll(".timeline-step").forEach((el) =>\
          el.classList.remove("is-active")\
        );\
        stepEl.classList.add("is-active");\
\
        updateDetail(stepKey);\
      \});\
    \});\
  \}\
\});\
}