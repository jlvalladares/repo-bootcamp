public class Main {
    public static void main(String[] args){
        
        Estudiante estudiante = new Estudiante("Ana", 20, "Ingeniería");
        Empleado empleado = new Empleado("Luis", 30, 50000);

        estudiante.imprimir();
        System.out.println();
        empleado.imprimir();
    }
}