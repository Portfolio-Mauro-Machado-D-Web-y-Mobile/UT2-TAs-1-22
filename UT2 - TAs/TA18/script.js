const ulaaa = document.getElementById("lista");
const input = document.getElementById("input");

const nombres = [
    "Juan Pérez",
    "María García",
    "Carlos Sánchez",
    "Laura Rodríguez",
    "José Fernández",
    "Ana Martínez",
    "Luis Gómez",
    "Sofía López",
    "Miguel Torres",
    "Camila Díaz",
    "Andrés Ramírez",
    "Valentina Romero",
    "Diego Castro",
    "Lucía Morales",
    "Fernando Ruiz",
    "Isabella Herrera",
    "Ricardo Jiménez",
    "Gabriela Vargas",
    "Jorge Ríos",
    "Martina Mendoza",
    "Santiago Ortiz",
    "Alejandra Silva",
    "Emiliano Cruz",
    "Florencia Guzmán",
    "Leonardo Paredes",
    "Victoria Peña",
    "Mateo Herrera",
    "Daniela Maldonado",
    "Javier Flores",
    "Natalia Aguilar",
    "Sebastián Salazar",
    "Paula Escobar",
    "Matías Soto",
    "Antonia Carrillo",
    "Tomás Muñoz",
    "Renata Castro",
    "Felipe Delgado",
    "Ariana Reyes",
    "Pablo León",
    "Sara Campos",
    "Bruno Márquez",
    "Micaela Domínguez",
    "Marcos Vega",
    "Julieta Figueroa",
    "Lucas Navarro",
    "Carolina Acosta",
    "Ignacio Serrano",
    "Elena Cortés",
    "Rodrigo Herrera",
    "Mariana Chávez",
    "Esteban Luna",
    "Clara Medina",
    "Nicolás Roldán",
    "Mía Fuentes",
    "Diego Pacheco",
    "Valeria Ibáñez",
    "Hugo Varela",
    "Tamara Ramos",
    "Joaquín Sepúlveda",
    "Milagros Villar",
    "Lautaro Romero",
    "Gabriela Calderón",
    "Damián Valenzuela",
    "Alicia Castro",
    "Álvaro Santana",
    "Luciana Rivas",
    "Raúl Villalobos",
    "Catalina Ortega",
    "Julio Bustos",
    "Amanda Tapia",
    "Simón Mendoza",
    "Victoria Carvajal",
    "Adrián Ortiz",
    "Gloria Villanueva",
    "Alan Núñez",
    "Lourdes Ríos",
    "Iván Miranda",
    "Verónica Rojas",
    "David Jiménez",
    "Lorena Martínez",
    "Fabián Aguirre",
    "Gisela Campos",
    "Franco Peña",
    "Melina Carranza",
    "Bautista Orozco",
    "Raquel Zambrano",
    "Samuel Rivera",
    "Patricia Figueroa",
    "Leandro Moreno",
    "Paula Guzmán",
    "Maximiliano Soto",
    "Mara Ortiz",
    "Guillermo Escobar",
    "Emma Herrera",
    "Víctor Paredes",
    "Isabel Morales",
    "Cristian Núñez",
    "Cecilia Rojas"
];


ulaaa.innerHTML = `${nombres.map((nombre) => `<li> ${nombre} </li>`).join("")}`;

input.addEventListener("input", () => {
    const value = input.value;
    ulaaa.innerHTML = `${nombres.filter((nombre) => nombre.startsWith(value)).map((nombre) => `<li> ${nombre} </li>`).join("")}`;

})