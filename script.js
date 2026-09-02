// =========================================================
// LOS DOS GALLOS
// SCRIPT.JS
// =========================================================


// =========================================================
// ANIMACIONES AL HACER SCROLL
// =========================================================

const elementosAnimados = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

elementosAnimados.forEach((elemento) => {
    observer.observe(elemento);
});


// =========================================================
// CREAR VENTANA DE RESERVACIÓN
// =========================================================

const modalReserva = document.createElement("div");

modalReserva.className = "modal-reserva";

modalReserva.innerHTML = `

    <div class="modal-reserva-overlay"></div>

    <div class="modal-reserva-contenido">

        <button
            class="cerrar-reserva"
            type="button"
            aria-label="Cerrar reservación"
        >
            ×
        </button>


        <div class="reserva-encabezado">

            <p class="section-label">
                LOS DOS GALLOS
            </p>

            <h2>
                Reserva tu<br>
                <span>mesa.</span>
            </h2>

            <p>
                Completa tus datos y envíanos tu reservación
                directamente por WhatsApp.
            </p>

        </div>


        <form id="formReserva">


            <!-- NOMBRE -->

            <div class="campo-reserva">

                <label for="nombreReserva">
                    Nombre
                </label>

                <input
                    type="text"
                    id="nombreReserva"
                    placeholder="Tu nombre"
                    autocomplete="name"
                    required
                >

            </div>


            <!-- PERSONAS -->

            <div class="campo-reserva">

                <label for="personasReserva">
                    Número de personas
                </label>

                <input
                    type="number"
                    id="personasReserva"
                    min="1"
                    max="30"
                    placeholder="Ej. 4"
                    inputmode="numeric"
                    required
                >

            </div>


            <!-- FECHA Y HORA -->

            <div class="reserva-doble">


                <div class="campo-reserva">

                    <label for="fechaReserva">
                        Fecha
                    </label>

                    <input
                        type="date"
                        id="fechaReserva"
                        required
                    >

                </div>


                <div class="campo-reserva">

                    <label for="horaReserva">
                        Hora
                    </label>

                    <select
                        id="horaReserva"
                        required
                    >

                        <option value="">
                            Selecciona
                        </option>

                        <option value="12:00 PM">12:00 PM</option>
                        <option value="12:30 PM">12:30 PM</option>

                        <option value="1:00 PM">1:00 PM</option>
                        <option value="1:30 PM">1:30 PM</option>

                        <option value="2:00 PM">2:00 PM</option>
                        <option value="2:30 PM">2:30 PM</option>

                        <option value="3:00 PM">3:00 PM</option>
                        <option value="3:30 PM">3:30 PM</option>

                        <option value="4:00 PM">4:00 PM</option>
                        <option value="4:30 PM">4:30 PM</option>

                        <option value="5:00 PM">5:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>

                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>



                    </select>

                </div>

            </div>


            <!-- TELÉFONO -->

            <div class="campo-reserva">

                <label for="telefonoReserva">
                    Teléfono
                </label>

                <input
                    type="tel"
                    id="telefonoReserva"
                    placeholder="33 1234 5678"
                    autocomplete="tel"
                    inputmode="tel"
                    required
                >

            </div>


            <!-- COMENTARIOS -->

            <div class="campo-reserva">

                <label for="comentarioReserva">
                    Comentario
                    <span>(opcional)</span>
                </label>

                <textarea
                    id="comentarioReserva"
                    rows="3"
                    placeholder="Ej. Mesa en jardín, cumpleaños..."
                ></textarea>

            </div>


            <button
                type="submit"
                class="enviar-whatsapp"
            >
                Reservar por WhatsApp
            </button>


            <p class="aviso-reserva">
                La reservación estará sujeta a confirmación
                por parte de Los Dos Gallos.
            </p>


        </form>

    </div>

`;

document.body.appendChild(modalReserva);


// =========================================================
// ELEMENTOS DEL MODAL
// =========================================================

const botonesReserva = document.querySelectorAll(
    ".btn-reservar, .hero-button, #abrirReserva"
);

const cerrarReserva = modalReserva.querySelector(".cerrar-reserva");

const overlayReserva = modalReserva.querySelector(
    ".modal-reserva-overlay"
);

const formularioReserva = modalReserva.querySelector(
    "#formReserva"
);

const fechaReserva = modalReserva.querySelector(
    "#fechaReserva"
);


// =========================================================
// FECHA MÍNIMA = HOY
// =========================================================

const hoy = new Date();

const anio = hoy.getFullYear();

const mes = String(
    hoy.getMonth() + 1
).padStart(2, "0");

const dia = String(
    hoy.getDate()
).padStart(2, "0");

fechaReserva.min = `${anio}-${mes}-${dia}`;


// =========================================================
// ABRIR MODAL
// =========================================================

function abrirModalReserva() {

    modalReserva.classList.add("activo");

    document.body.classList.add("modal-abierto");

}


// =========================================================
// CERRAR MODAL
// =========================================================

function cerrarModalReserva() {

    modalReserva.classList.remove("activo");

    document.body.classList.remove("modal-abierto");

}


// =========================================================
// BOTONES RESERVAR
// =========================================================

botonesReserva.forEach((boton) => {

    boton.addEventListener("click", (evento) => {

        evento.preventDefault();

        abrirModalReserva();

    });

});


// =========================================================
// CERRAR CON X
// =========================================================

cerrarReserva.addEventListener(
    "click",
    cerrarModalReserva
);


// =========================================================
// CERRAR TOCANDO EL FONDO
// =========================================================

overlayReserva.addEventListener(
    "click",
    cerrarModalReserva
);


// =========================================================
// CERRAR CON ESC
// =========================================================

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        cerrarModalReserva();

    }

});


// =========================================================
// ENVIAR RESERVACIÓN A WHATSAPP
// =========================================================

formularioReserva.addEventListener("submit", (evento) => {

    evento.preventDefault();


    const nombre =
        document.getElementById("nombreReserva").value.trim();

    const personas =
        document.getElementById("personasReserva").value;

    const fecha =
        document.getElementById("fechaReserva").value;

    const hora =
        document.getElementById("horaReserva").value;

    const telefono =
        document.getElementById("telefonoReserva").value.trim();

    const comentario =
        document.getElementById("comentarioReserva").value.trim();


    // Convertir fecha a formato más fácil de leer

    const partesFecha = fecha.split("-");

    const fechaBonita =
        `${partesFecha[2]}/${partesFecha[1]}/${partesFecha[0]}`;


    let mensaje =

`Hola, quiero reservar una mesa en Los Dos Gallos.

Nombre: ${nombre}
Personas: ${personas}
Fecha: ${fechaBonita}
Hora: ${hora}
Teléfono: ${telefono}`;


    if (comentario !== "") {

        mensaje += `

Comentario: ${comentario}`;

    }


    mensaje += `

¿Me pueden confirmar disponibilidad?`;


    // WhatsApp de Los Dos Gallos
    // México +52

    const numeroWhatsApp = "523325661864";


    const urlWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;


    window.open(
        urlWhatsApp,
        "_blank"
    );


    // =========================================================
// HEADER COMPACTO AL HACER SCROLL
// =========================================================

const headerPrincipal = document.querySelector(".header");


function actualizarHeader() {

    if (!headerPrincipal) {
        return;
    }


    if (window.scrollY > 80) {

        headerPrincipal.classList.add(
            "header-scroll"
        );

    } else {

        headerPrincipal.classList.remove(
            "header-scroll"
        );

    }

}


window.addEventListener(
    "scroll",
    actualizarHeader,
    {
        passive: true
    }
);


actualizarHeader();

});

// =========================================================
// EFECTO SUAVE DE PROFUNDIDAD EN IMÁGENES
// =========================================================

const imagenesParallax = document.querySelectorAll(
    ".experiencia-foto img, .historia-jardin-imagen img, .menu-proximamente-imagen img, .menu-destacado-imagen img"
);

function actualizarParallax() {

    if (window.innerWidth > 768) {
        return;
    }

    imagenesParallax.forEach((imagen) => {

        const contenedor = imagen.parentElement;

        const rect = contenedor.getBoundingClientRect();

        const centroPantalla = window.innerHeight / 2;

        const centroElemento =
            rect.top + rect.height / 2;

        const distancia =
            centroElemento - centroPantalla;

        const movimiento =
            distancia * -0.025;

        imagen.style.transform =
            `scale(1.06) translateY(${movimiento}px)`;

    });

}


window.addEventListener(
    "scroll",
    actualizarParallax,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    actualizarParallax
);


actualizarParallax();