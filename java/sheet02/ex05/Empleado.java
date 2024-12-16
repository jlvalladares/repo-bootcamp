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
}