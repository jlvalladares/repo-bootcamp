class Persona {
    String nombre;
    int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    public String getNombre(){
        return nombre;
    }
    public void setNombre(String nuevoNombre){
        this.nombre = nuevoNombre;
    }
    public int getEdad(){
        return edad;
    }
    public void setEdad(int nuevaEdad){
        this.edad = nuevaEdad;
    }
    public void mostrarDetalles(){
            System.out.println("Nombre: " + nombre);
            System.out.println("Edad: " + edad);
    }

}
