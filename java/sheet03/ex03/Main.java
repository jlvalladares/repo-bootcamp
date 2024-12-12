import java.util.LinkedList;
public class Main{
    public static void main (String[] args){
        LinkedList <String> nombres = new LinkedList <String>();
        nombres.add("Hola");
        nombres.add("Mundo");
        nombres.add("Java");
        for (String nombre : nombres){
            System.out.println(nombre);
        }
    }
}