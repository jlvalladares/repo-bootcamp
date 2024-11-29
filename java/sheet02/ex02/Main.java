class Main {

    public static void main(String[] args){
        Persona persona = new Persona("Juan", 25);
        persona.setNombre("Carlos");
        persona.setEdad(30);
        persona.mostrarDetalles();
        System.out.print(persona.getNombre());
        if (persona.getEdad() >= 18) {
            System.out.println(" es mayor de edad");
        } else {
            System.out.println(" es menor de edad");
        }
    }
}