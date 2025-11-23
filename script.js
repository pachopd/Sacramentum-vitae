document.addEventListener("DOMContentLoaded", () => {
  // Año actual en footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Menú responsive
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("nav-open");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("nav-open");
      });
    });
  }

  // Manejo básico del formulario
  const earlyAccessForm = document.getElementById("earlyAccessForm");
  if (earlyAccessForm) {
    earlyAccessForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailInput = document.getElementById("email");
      const tipoUsuario = document.getElementById("tipo-usuario");

      if (!emailInput.value) return;

      alert(
        `¡Gracias por tu interés!\n\nRegistramos tu correo (${emailInput.value}) como: ${tipoUsuario.value}.\n\nEn una versión real, aquí enviaríamos tus datos al servidor.`
      );

      earlyAccessForm.reset();
    });
  }

  // Timeline interactivo de la misa
  const timelineEl = document.getElementById("timelineMisa");
  const detailEl = document.getElementById("timelineDetail");

  if (timelineEl && detailEl) {
    const timelineData = {
      "procesion": {
        title: "Procesión de entrada",
        text: "Los ministros caminan hacia el altar mientras la asamblea canta. Es signo de que todos caminamos juntos hacia Dios, llamados por Jesús para reunirnos como familia.",
        key: "Cómo vivirlo: “Entro a la casa de Dios con alegría”."
      },
      "saludo": {
        title: "Saludo",
        text: "El sacerdote nos saluda: “El Señor esté con ustedes”. Es el recuerdo de que Jesús está realmente presente y nos mira con amor.",
        key: "Cómo vivirlo: “Estoy delante de Jesús que me ama”."
      },
      "acto-penitencial": {
        title: "Acto penitencial",
        text: "Toda la comunidad pide perdón. No es un momento de miedo, sino de confianza: Dios limpia el corazón y nos da un nuevo comienzo.",
        key: "Cómo vivirlo: “Señor, perdóname y ayúdame a empezar de nuevo”."
      },
      "oracion-colecta": {
        title: "Oración colecta",
        text: "El sacerdote recoge las intenciones de todos y las presenta a Dios en una sola oración. La Iglesia ora unida.",
        key: "Cómo vivirlo: “Señor, te entrego mi vida y la de mi familia”."
      },
      "liturgia-palabra": {
        title: "Liturgia de la Palabra",
        text: "Escuchamos las lecturas de la Biblia y el Evangelio. Es Dios quien habla hoy a su pueblo para iluminar la vida de cada uno.",
        key: "Cómo vivirlo: “Jesús, háblame; quiero escucharte”."
      },
      "profesion-fe": {
        title: "Profesión de fe",
        text: "Rezamos el Credo. La Iglesia entera responde: “Creo”. Es un acto de confianza y de amor hacia Dios.",
        key: "Cómo vivirlo: “Señor, quiero creer y seguirte con mi vida”."
      },
      "ofertorio": {
        title: "Ofertorio",
        text: "Se presentan el pan y el vino, signo de nuestra vida y de la creación. Ofrecemos a Dios todo lo que somos y tenemos.",
        key: "Cómo vivirlo: “Jesús, te ofrezco mi semana, mis trabajos y mis preocupaciones”."
      },
      "prefacio": {
        title: "Prefacio",
        text: "El sacerdote proclama una oración de acción de gracias. Recordamos que todo es don y la misa es un gran “gracias” a Dios.",
        key: "Cómo vivirlo: “Gracias, Señor, por todo lo que me das cada día”."
      },
      "plegaria-eucaristica": {
        title: "Plegaria eucarística",
        text: "Es el corazón de la misa. En la consagración, el pan y el vino se convierten en el Cuerpo y la Sangre de Cristo. Jesús se hace realmente presente.",
        key: "Cómo vivirlo: “Jesús, te adoro y me uno a tu entrega”."
      },
      "rito-comunion": {
        title: "Rito de comunión",
        text: "Rezamos el Padrenuestro, nos damos la paz y recibimos a Jesús en la Eucaristía. Es un encuentro íntimo con Él.",
        key: "Cómo vivirlo: “Jesús, ven a mi corazón y quédate conmigo”."
      },
      "despedida": {
        title: "Oración final y despedida",
        text: "Recibimos la bendición y somos enviados: “Pueden ir en paz”. La misa termina, pero comienza la misión en el mundo.",
        key: "Cómo vivirlo: “Quiero ser luz donde tú me envíes, Señor”."
      }
    };

    const updateDetail = (stepKey) => {
      const data = timelineData[stepKey];
      if (!data) return;

      const titleEl = detailEl.querySelector(".timeline-detail-title");
      const textEl = detailEl.querySelector(".timeline-detail-text");
      const keyEl = detailEl.querySelector(".timeline-detail-key");

      if (titleEl) titleEl.textContent = data.title;
      if (textEl) textEl.textContent = data.text;
      if (keyEl) {
        keyEl.innerHTML = `<strong>Cómo vivirlo:</strong> ${data.key.replace("Cómo vivirlo: ", "")}`;
      }
    };

    const initialActive = timelineEl.querySelector(".timeline-step.is-active");
    if (initialActive) {
      const stepKey = initialActive.getAttribute("data-step");
      updateDetail(stepKey);
    }

    timelineEl.querySelectorAll(".timeline-step").forEach((stepEl) => {
      stepEl.addEventListener("click", () => {
        const stepKey = stepEl.getAttribute("data-step");
        if (!stepKey) return;

        timelineEl.querySelectorAll(".timeline-step").forEach((el) =>
          el.classList.remove("is-active")
        );
        stepEl.classList.add("is-active");

        updateDetail(stepKey);
      });
    });
  }
});
