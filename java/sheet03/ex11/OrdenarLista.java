import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class OrdenarLista {
public static void main(String[] args) {
  List<String> frutas = new ArrayList<>();
  frutas.add("Banana");
  frutas.add("Apple");
  frutas.add("Cherry");
  //ordena la lista
  Collections.sort(frutas,(o1,o2) -> o1.compareTo(o2));
  //imprimimos lista ya ordenada
  System.out.println("Lista ordenada: " + frutas);

}
}
