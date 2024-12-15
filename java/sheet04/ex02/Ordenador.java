

public class Ordenador {
    private String marca;
    private String modelo;
    private int ram;
    private int hhd;
    private int espacioUsado;
    private boolean encendido;
    //Asignamos valores por defecto a ram, hhd y encendido mediante un constructor vacio
    public Ordenador(){
        this.ram = 4;
        this.hhd = 50;
        this.encendido = false;
    }
    //Constructor solo ram
    public Ordenador(int ram){
        this.setRam(ram);
        this.hhd = 50;
        this.encendido = false;
    }
    //Ram y hhd
    public Ordenador(int ram ,int hhd){
        this.setRam(ram);
        this.hhd = hhd;
        this.encendido = false;
    }
    public Ordenador(String marca, String modelo, int ram, int hhd) { 
        this.marca = marca; 
        this.modelo = modelo; 
        this.setRam(ram); 
        this.hhd = hhd; 
        this.espacioUsado = 0;
        this.encendido = false; 
    }
    public String getMarca(){
        return marca;
    }
    public void setMarca(String marca){
        this.marca = marca;
    }

    public String getModelo(){
        return modelo;
    }
    public void setModelo(String modelo){
        this.modelo = modelo;
    }
    public int getRam(){
        return ram;
    }
    public void setRam(int ram){
        if ((ram & (ram - 1)) != 0){
            throw new IllegalArgumentException("La RAM debe ser una potencia de 2");
        }
        this.ram = ram;
    }
    public int getHhd(){
        return hhd;
    }
    public void setHhd(int hhd){
        this.hhd = hhd;
    }
    public int getEspacioUsado(){
        return espacioUsado;
    }
    public void setEspacioUsado(int espacioUsado){
        this.espacioUsado = espacioUsado;
    }
    public boolean getEncendido(){
        return encendido;
    }
    public void setEncendido(boolean encendido){
        this.encendido = encendido;
    }
    //Metodos de ordenador
    //Encender
    public void encender(){
        this.encendido = true;
        System.out.println("-->Ordenador encendido");
    }
    //Apagar
    public void apagar(){
        this.encendido = false;
        System.out.println("-->Ordenador apagado");
    }
    public void transferirArchivos(int gb) { 
        if (this.encendido == false) { 
            System.out.println("El ordenador está apagado. No se puede transferir archivos."); 
            return; 
        } 
        if (this.espacioUsado + gb > this.hhd) {
            System.out.println("No hay suficiente espacio en el disco duro."); 
        } else {
            this.espacioUsado += gb; 
        } 
    }
    public void eliminarArchivos(int gb) { 
        if (this.encendido == false) {
            System.out.println("El ordenador está apagado. No se puede eliminar archivos."); 
            return; 
        } this.espacioUsado = Math.max(this.espacioUsado - gb, 0);
    } 
    // Sobrescribir el método equals 
    @Override public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()){ 
            return false;
        }
        Ordenador ordenador = (Ordenador) obj;
        return marca.equals(ordenador.marca) && modelo.equals(ordenador.modelo);
    } 
    // Método toString
    @Override public String toString() {
        return "\nOrdenador {" +
                " marca= '" + marca + '\'' +
                ", modelo= '" + modelo + '\'' +
                ", ram= " + ram + "GB" + 
                ", capacidadDiscoDuro= " + hhd + "GB" + 
                ", espacioUtilizado= " + espacioUsado + "GB" +
                ", estado= " + encendido +
                "}"; 
        } 
}
