<<<<<<< HEAD
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
=======
class Empleado extends Persona {
    double salario;
    public Empleado (String nombre, int edad, double salario){
        super(nombre,edad);
        this.salario = salario;
    }
    @Override
    public void mostrarDetalles(){
        super.mostrarDetalles();
        System.out.println("Salario: " + salario);
    }
>>>>>>> aa6ef4bfd93975ca3b55a46c707da94f511e8e1b
}