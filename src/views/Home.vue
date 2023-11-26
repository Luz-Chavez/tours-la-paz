<template>
<!-- Section: Design Block -->
<section class="mb-20">
  <!-- Jumbotron -->
  <div class="relative overflow-hidden bg-cover bg-no-repeat" style="
        background-position: 50%;
        background-image: url('https://cdn.getyourguide.com/img/location/5e203e09d44c6.jpeg/99.webp');
        height: 500px;
      ">
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12">
          <h1 class="mt-8 mb-16 text-6xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Tours in La Paz - Bolivia <br /><span>for an adventure</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</section>
<div class=" mb-20 lg:pl-6">
        <h3 class="mb-4 text-3xl font-bold">Bienvenido a Tours in La Paz: Descubre la Magia de Bolivia!</h3>
        <p class="mb-6 text-sm text-black dark:text-black">
          Publicacion <u>26.11.2023</u> 
        </p>
        <p class="mb-6 text-black dark:text-black">
          Luz Belen Chavez Patzi <br>
          Nohemy Ruth Mamani Apaza <br>
          Jhostin Issac Miranda Huarina <br>
        </p>
        <p class="text-black dark:text-black">

Sumérgete en la maravilla de La Paz, Bolivia, con nuestros tours que te llevarán a explorar los tesoros naturales, culturales y aventureros de esta joya sudamericana. En el corazón de los Andes, La Paz <br>
te recibe con su imponente paisaje montañoso y una rica herencia cultural que te cautivará desde el primer momento. <br>

En Tours in La Paz, no solo te llevamos a destinos impresionantes, sino que te ofrecemos una experiencia única. Nuestros itinerarios cuidadosamente diseñados te permitirán descubrir la auténtica belleza <br>
 de Bolivia, desde los misteriosos paisajes del Valle de la Luna hasta las leyendas que rodean la Isla Del Sol en el lago Titicaca. <br>

Con la combinación perfecta de aventura y cultura, nuestros tours te invitan a sumergirte en la historia antigua de Tiwanaku, explorar la biodiversidad del Parque Nacional Madidi, y vivir la emoción de <br>
 estar en el lugar más alto del mundo en el Monte Chacaltaya. <br>

¿Listo para una experiencia inolvidable? Únete a nosotros y descubre por qué La Paz es un destino que deja una marca duradera en el corazón de cada viajero. ¡Bienvenido a la aventura de Tours in La Paz! <br>
        </p>
      </div>

<div class="grid grid-cols-12 gap-4 lg:pl-4 ">
  <Tarjeta :dataList="tours"/>
</div>

</template>

<script setup>
import CounterButton from '@/components/CounterButton.vue'
import Tarjeta from '@/components/Tarjeta.vue'
import {ref} from 'vue'

const tours = ref([
  {destino: 'Valle de la Luna', descripcion: 'Permite disfrutar de un extraño paisaje semidesértico salpicado de picos rocosos, chimeneas y cactus que vale la pena conocer.', route: { name: 'tours/valle_de_la_luna', to: { name: 'valleDeLaLuna' }, text: 'Mas Informacion' }},
  {destino: 'Isla Del Sol', descripcion: 'Navega por el lago Titicaca. Visita Copacabana y toma una lancha motora hasta la isla del Sol, considerada el lugar de nacimiento de la leyenda inca.', route: { name: 'tours/isla_del_sol', to: { name: 'isla_Del_Sol' }, text: 'Mas Informacion' }},
  {destino: 'Salar de Uyuni', descripcion: ' Disfruta de la salina más grande del mundo. El legado de un lago prehistórico que se secó y dejó un paisaje desértico de casi 11,000 km cuadrados de sal blanca brillante.', route: { name: 'tours/salar_de_uyuni', to: { name: 'salarDeUyuni' }, text: 'Mas Informacion' }},
  {destino: 'Monte Chacaltaya', descripcion: 'Es increíble, no podés irte sin visitarlo, es realmente hermoso, arriba de todo hay una cabaña que podes tomarte algo calentito o llenar el termo para unos mate!.', route: { name: 'tours/monte_chacaltaya', to: { name: 'monteChacaltaya' }, text: 'Mas Informacion' }},
  {destino: 'Calle Jean', descripcion: 'La calle Jaén conserva muy bien la historia , es un hermoso sitio para sumergirse en la cultura e historia de La Paz y Bolivia gracias a los museos que se encuentran en ella.', route: { name: 'tours/calle_jean', to: { name: 'calleJean' }, text: 'Mas Informacion' }},
  {destino: 'Parque Machia', descripcion: 'Ofrecemos recorridos a los visitantes por áreas del santuario donde no albergamos animales, pero desde donde se pueden observar grupos de monos que han sido liberados por CIWY. ', route: { name: 'tours/parque_machia', to: { name: 'parqueMachia' }, text: 'Mas Informacion' }},
  {destino: 'Parque Nacional Madidi', descripcion: 'Solo 11 países en el mundo tienen más aves que las existentes en su territorio. Las siete especies de venados identificadas en Bolivia se encuentran en el Parque.', route: { name: 'tours/parque_nacional _madidi', to: { name: 'parqueNacionalMadidi' }, text: 'Mas Informacion' }},
  {destino: 'Tiwanaku', descripcion: 'Viaja atrás en el tiempo visitando las ruinas de Tiwanaku. Sumérgete en la historia y la cultura de esta antigua civilización.', route: { name: 'tours/tiwanaku', to: { name: 'tiwanaku' }, text: 'Más Información' }}
])
 // {destino: 'Isla Del Sol', descripcion: 'Navega por el lago Titicaca. Visita Copacabana y toma una lancha motora hasta la isla del Sol, considerada el lugar de nacimiento de la leyenda inca.', route: { name: 'tours/isla_del_sol', to: { name: 'isla_Del_Sol' }, text: 'Mas Informacion' }},
 // {destino: 'Valle de la Luna', descripcion: 'permite disfrutar de un extraño paisaje semidesértico salpicado de picos rocosos, chimeneas y cactus que vale la pena conocer.', route: { name: 'tours/valle_de_la_luna', to: { name: 'valleDeLaLuna' }, text: 'Mas Informacion' }},
 // {destino: 'Isla Del Sol', descripcion: 'Navega por el lago Titicaca. Visita Copacabana y toma una lancha motora hasta la isla del Sol, considerada el lugar de nacimiento de la leyenda inca.', route: { name: 'tours/isla_del_sol', to: { name: 'isla_Del_Sol' }, text: 'Mas Informacion' }},  
  // {destino: 'La Paz', descripcion: 'Ciudad Maravilla'},
  // {destino: 'Cochabamba', descripcion: 'Ciudad'},
  // {destino: 'Tarija', descripcion: 'Ciudad Del Vino'}

const toursRouts = ref([
  { name: 'tours/valle_de_la_luna', to: { name: 'valleDeLaLuna' }, text: 'ValleDeLaLuna' },
  { name: 'tours/isla_del_sol', to: { name: 'isla_Del_Sol' }, text: 'IslaDelSol' },
  { name: 'tours/salar_de_uyuni', to: { name: 'salarDeUyuni' }, text: 'SalarDeUyuni' },
  { name: 'tours/monte_chacaltaya', to: { name: 'monteChacaltaya' }, text: 'MonteChacaltaya' },
  { name: 'tours/calle_jean', to: { name: 'calleJean' }, text: 'CalleJean' },
  { name: 'tours/parque_machia', to: { name: 'parqueMachia' }, text: 'ParqueMachia' },
  { name: 'tours/parque_nacional_madidi', to: { name: 'parqueNacionalMadidi' }, text: 'ParqueNacionalMadidi' },
  { name: 'tours/tiwanaku', to: { name: 'tiwanaku' }, text: 'TIwanaku' }
 // { name: 'tours/isla_del_sol', to: { name: 'isla_Del_Sol' }, text: 'IslaDelSol' }
 // { name: 'tours/valle_de_la_luna', to: { name: 'valleDeLaLuna' }, text: 'ValleDeLaLuna' },
 // { name: 'tours/isla_del_sol', to: { name: 'isla_Del_Sol' }, text: 'IslaDelSol' }  
])
</script>
