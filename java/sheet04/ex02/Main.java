public class Main { 
    public static void main(String[] args) { 
    // Crear una instancia de Ordenador usando el constructor vacío 
    Ordenador ordenador1 = new Ordenador(); System.out.println("Ordenador1: " + ordenador1); 
    // Crear una instancia de Ordenador usando el constructor con RAM 
    Ordenador ordenador2 = new Ordenador(8); System.out.println("Ordenador2: " + ordenador2);
    // Crear una instancia de Ordenador usando el constructor con RAM y HHD
    Ordenador ordenador3 = new Ordenador(16, 256); System.out.println("Ordenador3: " + ordenador3);
    // Crear una instancia de Ordenador usando el constructor con todos los atributos menos espacio utilizado y encendido
    Ordenador ordenador4 = new Ordenador("Dell", "XPS", 32, 512); System.out.println("Ordenador4: " + ordenador4);
    // Probar métodos
    ordenador4.encender();
    ordenador4.transferirArchivos(100);
    System.out.println("Ordenador4 después de transferir 100 GB: " + ordenador4);
    ordenador4.eliminarArchivos(50);
    System.out.println("Ordenador4 después de eliminar 50 GB: " + ordenador4);
    ordenador4.apagar();
    // Probar igualdad
    Ordenador ordenador5 = new Ordenador("Dell", "XPS", 16, 256);
    System.out.println("Ordenador4 es igual a Ordenador5: " + ordenador4.equals(ordenador5)); 
}
}