import java.util.ArrayList;
import java.util.Iterator;

public class Pares {
    public static void main(String[] args){
        ArrayList<Integer> listaNumeros = new ArrayList<>();
        //Creamos la colleccion
        listaNumeros.add(10);
        listaNumeros.add(15);
        listaNumeros.add(20);
        listaNumeros.add(25);
        listaNumeros.add(30);
        //Usamos un iterador
        Iterator<Integer> iterador = listaNumeros.iterator();
        //Ya podemos usar mos metodos de Iterator sobre nuestra colección
        System.out.println("Lista sin eliminar impares:");
        while (iterador.hasNext()){
            System.out.println(iterador.next());
        }
        //Reiniciamos el iterador
        iterador = listaNumeros.iterator();
          System.out.println();  
        System.out.println("Lista despues de eliminar impares:");
        while (iterador.hasNext()){
            Integer i = iterador.next();
            if (i%2!=0){
                iterador.remove();
            }else{
                System.out.println(i);
            }
        }
    }
}