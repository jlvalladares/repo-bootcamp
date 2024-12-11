public class Estudiante extends Persona implements Imprimible{
    String grado;
    
    public Estudiante (String nombre, int edad, String grado){
        super(nombre, edad);
        this.grado = grado;
    }
    
    public String getGrado() {
        return grado;
    }

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo detalles del estudiante:");
        mostrarDetalles();
        System.out.println("Grado: " + grado);
    }
}