<<<<<<< HEAD
public class Main {
    public static void main(String[] args){
        
        Estudiante estudiante = new Estudiante("Ana", 20, "Ingeniería");
        Empleado empleado = new Empleado("Luis", 30, 50000);

        estudiante.imprimir();
        System.out.println();
        empleado.imprimir();
=======
class Main {
    
    public static void main(String[] args){
        Persona[] personas = {
        new Estudiante("Ana", 20, "Ingeniería"),
        new Empleado("Luis", 30, 50000),
        new Persona("Marta", 40)
        };
    for (Persona persona : personas) {
            persona.mostrarDetalles();
            System.out.println();
        }
>>>>>>> aa6ef4bfd93975ca3b55a46c707da94f511e8e1b
    }
}