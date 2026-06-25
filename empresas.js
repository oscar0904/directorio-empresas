const empresas = [

{empresa:"A&C SERVICES",contacto:"Ing. Aldo Genaro Coyote Graciano",telefono:"No disponible"},
{empresa:"Taller y Refaccionaria el Gran Pistón",contacto:"Ing. Emanuel Efrén Rodríguez Navidad",telefono:"7228776107"},
{empresa:"Kavak Ocoyoacac",contacto:"Christopher Aheniri Ceballos Ríos",telefono:"No disponible"},
{empresa:"SCHUNK MEXICO S.A. DE C.V.",contacto:"Lic. Tania Monserrat González Espinoza",telefono:"7223809732"},
{empresa:"Fresados y Maquinas de Precisión Triburcio",contacto:"Triburcio Reyes Villalobos",telefono:"No disponible"},
{empresa:"Shark It S.A. de C.V.",contacto:"Ing. Kevin Escutia Luma",telefono:"7286905022"},
{empresa:"Casa Mirafuentes",contacto:"Ing. Rodrigo Issac González González",telefono:"5539111165"},
{empresa:"Torno Fresadora y Rectificadora Servicio Industrial y Automotriz",contacto:"Santiago Noe Rodríguez Fraide",telefono:"No disponible"},
{empresa:"Galvanizadora Metal Alvi S.A de C.V.",contacto:"Ing. Alfredo Orozco Rodríguez",telefono:"7131020448"},
{empresa:"Taller MINDTEC",contacto:"Diego Alan Pavón Morales",telefono:"No disponible"},
{empresa:"Válvulas y Reguladores de México S.A. de C.V.",contacto:"Sr. Héctor Hernández Moreno",telefono:"7282851000"},
{empresa:"Taller",contacto:"Oscar Sixtos Reyes",telefono:"7202667325"},
{empresa:"Tortillería Miranda",contacto:"José Luis Maximiliano Miranda Acosta",telefono:"7282881291"},
{empresa:"RG MOTORS",contacto:"Oscar Rosales García",telefono:"No disponible"},
{empresa:"ADISA",contacto:"Ing. Salvador Marcas",telefono:"7223714002"},
{empresa:"Maquinados Industriales HALFER",contacto:"Lic. Carlos Álvaro Salinas",telefono:"7131352622"},
{empresa:"El Mundo de las Motos",contacto:"Juan Gómez Medina",telefono:"No disponible"},
{empresa:"DrSMEC S.A. de C.V.",contacto:"David Morales Becerril",telefono:"No disponible"},
{empresa:"El Águila Dorada",contacto:"Jobana Hernández Rodríguez",telefono:"7293046743"},
{empresa:"Velaluz Veladoras y Parafinas de México S.A. de C.V.",contacto:"Lorena Mendoza Garduño",telefono:"No disponible"},
{empresa:"Grupo Garuco Diseño, Construcción y Estructuras Metálicas S.A. de C.V.",contacto:"Lic. Blanca Estela Macedo Silva",telefono:"5526367726"},
{empresa:"Rectificadora LA PREPA",contacto:"Jesús Montoya Muñoz",telefono:"No disponible"},
{empresa:"AQUACLYVA",contacto:"David Vera",telefono:"7294547397"},
{empresa:"Concesionaria Central de Motos S.A. de C.V.",contacto:"Amairani Alva Casas",telefono:"7282857199"},
{empresa:"YaVas BTQ",contacto:"Ing. Vasti Yamilka García Leiva",telefono:"7226163073"},
{empresa:"Laboratorio de Celulares",contacto:"José Christian Medina",telefono:"7224001439"},
{empresa:"Emenet Comunicaciones",contacto:"Cesar Iván Rivera Castro",telefono:"1334557"},
{empresa:"Comercializadora Super Suave",contacto:"L.A.E. América Reza",telefono:"7224805985"},
{empresa:"Asesores y Analistas en Sistema de Tratamiento de Agua",contacto:"Iq. Inés Valdez Seijas",telefono:"7282877009"},
{empresa:"Multimédica Servicio de Diagnóstico Médico y Odontológico",contacto:"Dr. Iván Marco Pólo Huerta González",telefono:"No disponible"},
{empresa:"Sali Lab (Toma de muestra)",contacto:"M.C. Jaqueline Jiovana Morales Rojas",telefono:"7224489564"},
{empresa:"Purificadora de Agua Puritronic",contacto:"IBQ. Elid Martínez Castañeda",telefono:"7281134016"},
{empresa:"Beatriz Ball",contacto:"C.P. Jaime Fabian Alberto",telefono:"7131020250"},
{empresa:"Médica San Juan",contacto:"M.E.E.S. Perla Beatriz Escamilla Mancilla",telefono:"7136880078"},
{empresa:"TECNOSOL Laboratorios Aerosol",contacto:"Enrique García Carrillo",telefono:"No disponible"},
{empresa:"Purificadora La Paz",contacto:"Juan González Hernández",telefono:"No disponible"},
{empresa:"Farmacia San Miguel",contacto:"Dr. Miguel Ángel Guadarrama",telefono:"No disponible"},
{empresa:"Farmacia - Consultorio Salud y Bienestar",contacto:"Dr. Alberto Alvarado Pérez",telefono:"No disponible"},
{empresa:"Papelería Haru",contacto:"Mireya Arias Escutia",telefono:"7131188465"},
{empresa:"Alpha System",contacto:"Ing. Andrés Reyes Salcedo",telefono:"7224735813"},
{empresa:"Enfoque Químico S.A. de C.V.",contacto:"T.Q.I. Patricia Troncoso Morales",telefono:"7131020338"},
{empresa:"Tokali S.A. de C.V.",contacto:"Israel Sánchez Hernández",telefono:"5563689738"},
{empresa:"Logiflekk S.A. de C.V.",contacto:"Nancy Vianey Flores Valdespino",telefono:"7223345087 / 7227588928"},
{empresa:"Sablón S.A. de C.V.",contacto:"Lic. Selene Álvarez",telefono:"7229622500 / 5571079636"},
{empresa:"MC Advanced Materials México / Nylamid MCAM",contacto:"Lic. Edith Marín Ramírez",telefono:"7282829110"},
{empresa:"2 W Acueducto del Alto",contacto:"Lic. Angelica Téllez",telefono:"7221028432 / 5625719269"},
{empresa:"Fundacion WADHWANI",contacto:"Lic. Andrea Rioseco San Juan",telefono:"No disponible"}

];

const contenedor = document.getElementById("contenedorEmpresas");
const buscador = document.getElementById("buscar");
const contador = document.getElementById("contador");

function mostrarEmpresas(lista){

contenedor.innerHTML="";

contador.textContent =
lista.length + " Empresas Registradas";

lista.forEach(emp => {

contenedor.innerHTML += `

<div class="tarjeta">

<h3>${emp.empresa}</h3>

<p><strong>Contacto:</strong></p>
<p>${emp.contacto}</p>

<p><strong>Teléfono:</strong></p>
<p>${emp.telefono}</p>

<a href="tel:${emp.telefono}">
📞 Llamar
</a>

</div>
`;

});

}

mostrarEmpresas(empresas);

buscador.addEventListener("keyup", () => {

const texto =
buscador.value.toLowerCase();

const filtradas =
empresas.filter(emp =>

emp.empresa.toLowerCase().includes(texto) ||

emp.contacto.toLowerCase().includes(texto)

);

mostrarEmpresas(filtradas);

});

function cerrarSesion(){

localStorage.removeItem(
"usuarioEmpresas"
);

window.location.href =
"registro.html";

}
