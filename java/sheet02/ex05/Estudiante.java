<<<<<<< HEAD
public class Estudiante extends Persona implements Imprimible{
    String grado;
    
=======
class Estudiante extends Persona{
    String grado;
    //constructor que llama al padre Persona
>>>>>>> aa6ef4bfd93975ca3b55a46c707da94f511e8e1b
    public Estudiante (String nombre, int edad, String grado){
        super(nombre, edad);
        this.grado = grado;
    }
<<<<<<< HEAD
    
    public String getGrado() {
        return grado;
    }

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo detalles del estudiante:");
        mostrarDetalles();
=======
    //sobre escribir metodo para mostraDetalles()
    @Override
    public void mostrarDetalles(){
        super.mostrarDetalles();
>>>>>>> aa6ef4bfd93975ca3b55a46c707da94f511e8e1b
        System.out.println("Grado: " + grado);
    }
}