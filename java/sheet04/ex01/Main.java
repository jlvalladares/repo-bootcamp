
public class Main {
    public static void main(String[] args) {
    Libro libro = new Libro("123-456-789", "Java Básico", 300, "Juan Pérez");
    System.out.println(libro);

    libro.prestar();
    System.out.println(libro);

    libro.devolver();
    System.out.println(libro);

    double costeImpresion = libro.imprimir(0.05);
    System.out.println("El coste de imprimir todas las páginas del libro es: " + costeImpresion + "€.");
}
}
