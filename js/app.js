class SearchBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Estilo del componente
    this.shadowRoot.innerHTML = `
      <style>
        .search-box {
        margin-left: 10%;
        margin-right: 10%;
        padding: 10px;
        }

        input[type="text"] {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: 50px;
        }
      </style>
      <div class="search-box">
        <input type="text" placeholder="🔍 Buscar personaje por seudonimo..." />
      </div>
    `;
  }

  connectedCallback() {
    const input = this.shadowRoot.querySelector('input');
    input.addEventListener('input', (e) => {
      const valor = e.target.value;
      this.dispatchEvent(new CustomEvent('input', {
        detail: valor,
        bubbles: true,
        composed: true
      }));
      const fakeInput = document.querySelector('#fake-search');
      if (fakeInput) fakeInput.value = valor;
    });
  }
}
customElements.define('search-box', SearchBox);

document.querySelector("search-box").addEventListener("input", (e) => {
  const searchText = e.detail.toLowerCase();
  document.querySelectorAll(".hero").forEach(hero => {
    const name = hero.querySelector("h2").textContent.toLowerCase();
    hero.style.display = name.includes(searchText) ? "block" : "none";
  });
});


/*controlar modal*/ 
function mostrarmodal(index){
    document.getElementById("modal").style.display='block';
    const character = personajes[index];

    document.getElementById("modal-img").src=character.imagen;
    document.getElementById("modal-name").textContent=character.alias;
    document.getElementById("modal-realname").textContent=character.nombreReal;
    document.getElementById("descripcion-larga").textContent=character.descripcionLarga;
}

function cerrarmodal(){
    document.getElementById("modal").style.display='none'
}


const personajes = [
  {
    nombreReal: "Peter Parker",
    alias: "Spider-Man",
    editorial: "MARVEL",
    primeraAparicion: 1962,
    descripcion: "Tras ser mordido por una araña modificada, Peter Parker obtiene poderes sobrehumanos y se convierte en Spider-Man, un héroe que protege Nueva York mientras aprende a equilibrar su vida y su responsabilidad.",
    descripcionLarga:"Spider-Man, cuyo nombre real es Peter Parker, es un superhéroe de Marvel Comics creado por el escritor Stan Lee y el dibujante Steve Ditko. Hizo su primera aparición en Amazing Fantasy #15 en 1962.\nPeter Parker es un joven estudiante que vive en Nueva York. Después de ser mordido por una araña radiactiva, adquiere habilidades sobrehumanas, como la agilidad, fuerza y reflejos mejorados, además de la capacidad de adherirse a las superficies. También desarrolla un sentido arácnido que le permite percibir el peligro inminente. Usando estos poderes, Peter decide convertirse en Spider-Man para luchar contra criminales y villanos, inspirándose en la frase de su tío Ben: Un gran poder conlleva una gran responsabilidad.\nSpider-Man es uno de los héroes más populares y queridos de los cómics y ha sido parte de múltiples adaptaciones en películas, series de televisión y videojuegos.",
    imagen: "./img/spiderman.webp"
  },
  {
    nombreReal: "Marc Spector",
    alias: "Moon Knight",
    editorial: "MARVEL",
    primeraAparicion: 1975,
    descripcion: "Es un vigilante enmascarado que sirve como el avatar del dios egipcio Khonshu. Detrás de la máscara está Marc Spector, un hombre que comparte su mente con otras personalidades como Steven Grant y Jake Lockley.",
    descripcionLarga:`
        Moon Knight, cuyo verdadero nombre es Marc Spector, es un personaje de Marvel Comics creado por el escritor Doug Moench y el dibujante Don Perlin. 
        Hizo su primera aparición en *Werewolf by Night #32* en 1975. 

        Marc Spector es un ex mercenario que, tras ser gravemente herido durante una misión en Egipto, es abandonado a su suerte por su empleador. 
        Spector es encontrado por un grupo de adoradores de Khonshu, el dios egipcio de la luna, quien lo resucita y le ofrece un nuevo propósito. 
        Marc, agradecido por su segunda oportunidad en la vida, decide convertirse en Moon Knight, el "caballero de la luna", y lucha contra el crimen bajo la protección del dios.

        A diferencia de otros superhéroes, Moon Knight no tiene habilidades sobrehumanas de manera natural. Sus habilidades provienen de su entrenamiento como mercenario, 
        su destreza en combate cuerpo a cuerpo, el uso de tecnología avanzada y su aguda inteligencia. A lo largo de las historias, ha tenido múltiples alter egos, 
        incluidos el millonario Steven Grant y el taxista Jake Lockley, para poder operar en diferentes niveles dentro de la sociedad.

        A lo largo de sus aventuras, Marc lucha no solo contra criminales, sino también contra su propia salud mental, ya que su conexión con Khonshu y sus múltiples identidades 
        lo llevan a sufrir trastornos psicológicos, incluidos el trastorno de identidad disociativo (TID). Esta parte de su historia lo convierte en uno de los personajes más complejos y oscuros del universo de Marvel.
    `,
    imagen: "./img/moonknight.jpg"
  },
  {
    nombreReal: "Stephen Strange",
    alias: "Doctor Strange",
    editorial: "MARVEL",
    primeraAparicion: 1963,
    descripcion: "Stephen Strange, un neurocirujano brillante pero arrogante, ve su vida desmoronarse tras un accidente que daña sus manos. En busca de una cura, viaja al Himalaya y encuentra a The Ancient One, quien le revela un mundo de magia y poderes místicos.",
    descripcionLarga:`
        Doctor Stephen Strange, mejor conocido como Doctor Strange, es un superhéroe y hechicero del universo de Marvel Comics. Fue creado por el escritor Stan Lee y el dibujante Steve Ditko, 
        haciendo su primera aparición en *Strange Tales #110* en 1963.

        Antes de convertirse en el Hechicero Supremo, Stephen Strange era un brillante pero arrogante neurocirujano en Nueva York. Su vida cambió cuando sufrió un accidente automovilístico 
        que dañó permanentemente sus manos, dejándolo incapaz de seguir practicando su profesión. Desesperado por encontrar una cura, viajó por el mundo en busca de soluciones, lo que lo llevó a 
        conocer a un anciano hechicero conocido como el Anciano, quien vivía en el Tíbet.

        A pesar de su escepticismo inicial, Strange comenzó a estudiar las artes místicas y las ciencias arcanas bajo la tutela del Anciano. Con el tiempo, se convirtió en un maestro de las 
        artes mágicas y adquirió una serie de poderes místicos. Fue elegido para ser el protector de la Tierra contra amenazas mágicas y sobrenaturales, tomando el título de "Doctor Strange" 
        y adoptando la responsabilidad de ser el Hechicero Supremo.

        Doctor Strange tiene una vasta gama de poderes, que incluyen la capacidad de manipular la magia, la invocación de hechizos, la teletransportación, la creación de escudos místicos 
        y el acceso a dimensiones alternas. Además, posee artefactos mágicos como el Ojo de Agamotto y la Capa de Levitation, los cuales le permiten realizar actos sobrenaturales más poderosos.

        A lo largo de sus aventuras, Strange ha luchado contra una amplia gama de enemigos místicos, como Dormammu, el Barón Mordo y Mephisto, además de enfrentarse a amenazas cósmicas y 
        cósmicas de gran escala. A pesar de su inmenso poder, Doctor Strange también enfrenta conflictos internos relacionados con el sacrificio personal, ya que debe equilibrar su vida como 
        superhéroe y las consecuencias de sus decisiones místicas.

        Doctor Strange es uno de los personajes más complejos y poderosos del universo Marvel, y su historia abarca temas de espiritualidad, sacrificio y la lucha entre el bien y el mal en el 
        plano místico.
    `,
    imagen: "./img/DoctorStrange.webp"
  },
  {
    nombreReal: "Eddie Brock",
    alias: "Venom",
    editorial: "MARVEL",
    primeraAparicion: 1988,
    descripcion: "Venom es un anti-héroe y uno de los villanos más populares de Marvel. Es un simbionte alienígena que se une a Eddie Brock, un periodista que busca venganza contra Spider-Man.",
    descripcionLarga: "Venom, nacido del simbionte alienígena, se une a Eddie Brock para crear una de las entidades más poderosas y aterradoras en el universo Marvel. A lo largo de los años, Venom ha sido tanto villano como anti-héroe, enfrentándose a personajes como Spider-Man y otros héroes de Marvel. Su relación con el simbionte le da habilidades sobrehumanas, fuerza y la capacidad de regenerarse, pero también lo pone en conflicto con su moralidad.",
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytghTpxh33po7akKyb5cQgQNZm4bh1MJVaQ&s"
},
{
    nombreReal: "Elizabeth Braddock",
    alias: "Psylocke",
    editorial: "MARVEL",
    primeraAparicion: 1976,
    descripcion: "Psylocke, cuyo nombre real es Elizabeth Braddock, es una mutante con habilidades telepáticas y un dominio avanzado del combate cuerpo a cuerpo.",
    descripcionLarga: "Elizabeth Braddock, una heroína de Marvel conocida como Psylocke, fue inicialmente una telepática británica que pasó por una transformación física y mental que le permitió tener habilidades mejoradas, incluyendo el uso de una espada psíquica.",
    imagen: "https://cdn.marvel.com/content/1x/psylocke2024001_habchi.jpg"

}
];




