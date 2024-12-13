import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;
public class Main{
    public static void main(String[] args){
        HashSet<Integer> numeros = new HashSet<>();
        numeros.add(10);
        numeros.add(20);
        numeros.add(30);
        numeros.add(10);//este elemeto, como está duplicado no se añadirá.
        Set<Integer> numerosOrdenados = new TreeSet<>(numeros);//transforma elementos de HashSet->Treeset->Set, que los ordena automaticamente 
        for (int numero : numerosOrdenados){
        System.out.println(numero);
        }
    }
}