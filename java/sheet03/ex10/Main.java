public class Main {
public static void main(String[] args) {
    Hilo tarea = new Hilo();
    Thread botijo = new Thread(tarea);
    botijo.start();
}
}
