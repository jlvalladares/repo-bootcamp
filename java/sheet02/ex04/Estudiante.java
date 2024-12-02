class Estudiante extends Persona{
    String grado;
    //constructor que llama al padre Persona
    public Estudiante (String nombre, int edad, String grado){
        super(nombre, edad);
        this.grado = grado;
    }
    //sobre escribir metodo para mostraDetalles()
    @Override
    public void mostrarDetalles(){
        super.mostrarDetalles();
        System.out.println("Grado: " + grado);
    }
}