
class Empleado extends Persona implements Imprimible {
    double salario;
    public Empleado (String nombre, int edad, double salario){
        super(nombre,edad);
        this.salario = salario;
    }
    
    public double getSalario() {
        return salario;
    }

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo detalles del empleado:");
        mostrarDetalles();
        System.out.println("Salario: " + salario);
    }

}