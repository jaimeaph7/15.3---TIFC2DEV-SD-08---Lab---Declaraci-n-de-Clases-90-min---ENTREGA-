// Ejercicio 1 — Sistema de empleados

//1.1 Clase base: Empleado

class Empleado {

constructor (nombre,cargo,salario){
    this.nombre = nombre;
    this.cargo = cargo;
    this.salario = salario;

    this.activo = true;


}

    presentarse (){

        return `El nombre es ${this.nombre} y su cargo es ${this.cargo}`;
    }

    calcularSalarioAnual(){
        return `Su salario anual es ${this.salario * 12} `;

    
    }

    desactivar(){
        this.activo = false;
        return "Cambio confirmado";
    }

    info(){

        return `El nombre es ${this.nombre} y su cargo es ${this.cargo} y su salario mensual es ${this.salario} y usted está ${this.activo}`;

    }



}

// Se crea una Instance de Empleo

const empleado1 = new Empleado("Jorge", "Soldador", 2100000);
const empleado2 = new Empleado("Ana", "Diseñadora", 3500000);
const empleado3 = new Empleado("Carlos", "Ingeniero", 5000000);

console.log(empleado1.presentarse(), empleado1.calcularSalarioAnual(), empleado1.info());

console.log(empleado2.presentarse(), empleado2.calcularSalarioAnual(), empleado2.info());

console.log(empleado3.presentarse(), empleado3.calcularSalarioAnual(), empleado3.info());

empleado2.desactivar();

console.log(empleado2.info());


/// 1.2 Clase extendida: Lider

class Lider extends Empleado {
  constructor(nombre, salario, equipo) {
    super(nombre, "Lider de equipo", salario);
    this.equipo = equipo;
  }

  presentarEquipo() {
    return `El equipo es: ${this.equipo.join(", ")}`;
  }

  agregarMiembro(nombre) {
    this.equipo.push(nombre);
    return `${nombre} agregado al equipo`;
  }

  info() {
    return `Nombre: ${this.nombre}, Cargo: ${this.cargo}, Salario: ${this.salario}, ` +
           `Activo: ${this.activo}, Miembros en equipo: ${this.equipo.length}`;
  }

}
const lider1 = new Lider("Laura", 7000000, ["Ana", "Carlos"]);
const lider2 = new Lider("Miguel", 8000000, ["Pedro"]);

// Heredan calcularSalarioAnual() y desactivar() sin redefinirlos
console.log(lider1.calcularSalarioAnual());
console.log(lider1.desactivar());
console.log(lider2.calcularSalarioAnual());  // Fix 2: verificar lider2 también
console.log(lider2.desactivar());            // Fix 2: verificar lider2 también

// Agregar miembro y confirmar que presentarEquipo() se actualiza
lider1.agregarMiembro("Sofia");
console.log(lider1.presentarEquipo()); // → "El equipo es: Ana, Carlos, Sofia"
console.log(lider2.presentarEquipo()); // → "El equipo es: Pedro" (sin cambios)


// 1.3 Escenario completo\

const empleado4 = new Empleado("Luisa", "Contadora", 2800000);

const nominaMensual =
  empleado1.salario +
  empleado2.salario +
  empleado3.salario +
  empleado4.salario +
  lider1.salario +
  lider2.salario;


console.log("Costo total mensual de nómina:", nominaMensual);

const nominaAnual = nominaMensual * 12;

console.log("Costo total anual de nómina:", nominaAnual);

empleado3.desactivar();

console.log("Empleado desactivado:");
console.log(empleado3.info());

console.log("=== LIDER 1 ===");
console.log(lider1.info());
console.log(lider1.presentarEquipo());

console.log("=== LIDER 2 ===");
console.log(lider2.info());
console.log(lider2.presentarEquipo());

