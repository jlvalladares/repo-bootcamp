class Persona {
    String nombre;
    int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //metodo para mostar info por consola
    public void mostrarDetalles(){
            System.out.println("Nombre: " + nombre);
            System.out.println("Edad: " + edad);
    }

}
