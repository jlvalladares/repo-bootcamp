package com.ejemplo.tarea.controllers;


import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping ("/tareas")
public class TareasController {
    List<String> tareas = new ArrayList<String>();

    @GetMapping()
    private List<String> getTareas(){
        return tareas;
    }
    @PostMapping
    String addTarea(@RequestBody String task){
        if (tareas.add(task))
            return "Tarea agregada: " + task;
        return "Error al agregar tarea: " + task;
    }
    @DeleteMapping("/{index}")
    String delTareas(@PathVariable int index){
        System.out.println(index);
        if (index>=tareas.size() || index<0)
            return "Índice no válido";
        return "Tarea eliminada: " + tareas.remove(index);
    }
}
