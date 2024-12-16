
//clase libro encapsulada
public class Libro {
    private String isbn;
    private String titulo;
    private int numPag;
    private String autor;
    private boolean prestado;

//constructor vacio
public Libro(){
}
//constructor por defecto
public Libro(String isbn, String titulo, int numPag, String autor){
    this.isbn = isbn;
    this.titulo = titulo;
    this.numPag = numPag;
    this.autor = autor;
    this.prestado = false;
}
//getter y setter para poder trabaja con los encapsulados
public String getIsbn() {
    return isbn;
}

public void setIsbn(String isbn) {
    this.isbn = isbn;
}

public String getTitulo() {
    return titulo;
}

public void setTitulo(String titulo) {
    this.titulo = titulo;
}

public int getNumeroPaginas() {
    return numPag;
}

public void setNumeroPaginas(int numPag) {
    this.numPag = numPag;
}

public String getAutor() {
    return autor;
}

public void setAutor(String autor) {
    this.autor = autor;
}

public boolean isPrestado() {
    return prestado;
}

public void setPrestado(boolean prestado) {
    this.prestado = prestado;
}
//Metodo prestar
public void prestar(){
    if (prestado){
        System.out.println("El libro ya está prestado. Imposible realizar prestamo");
    }else{
        prestado = true;
        System.out.println("Libro prestado con exíto");
    }
}
public void devolver(){
    if (!prestado){
        System.out.println("El libro no está prestado");
    }else{
        prestado = false;
        System.out.println("Libro devuelto exíto.");
    }
}

    public double imprimir(double costePorPagina) {
   return costePorPagina * numPag;
}


@Override
public String toString(){
    return "El libro (<" + isbn + ">) con título <" + titulo + "> y autor <" + autor + "> tiene <" + numPag + "> páginas y " + (prestado ? "está prestado." : "no está prestado.");
}
}