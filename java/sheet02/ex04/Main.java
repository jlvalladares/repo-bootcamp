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
    }
}