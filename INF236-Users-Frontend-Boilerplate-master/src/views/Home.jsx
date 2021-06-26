import React from 'react'

export default function Home() {
    return (
            <div>
                <h1> <center>Bienvenido </center> </h1> 
                <h3>Esta plataforma ha sido diseñada para mejorar la comunicación escolar</h3>
                <center><img src="https://appoderado.cl/imglanding/beneficio1.gif" width="150" height="150"></img></center>
                <h1>Para acceder a la plataforma ingrese sus datos</h1>
                <form>
                    <div class="col-sm-12">
                        <label for="inputRut">Rut</label>
                    </div>
                    <div class="col-sm-12">
                        <input type="text" class="form-control" id="inputRut"></input>
                    </div>
                    <div class="col-sm-12">
                        <label for="inputPassword">Contraseña</label>
                    </div>
                    <div class="col-sm-12">
                        <input type="password" class="form-control" id="inputPassword"></input>
                    </div>
                    <h2>Elija su rol</h2>
                    <button type="submit" class="btn btn btn-primary" formaction="homealumno">
                    Ingresar como alumno o apoderado.
                    </button>
                    <button type="submit" class="btn btn btn-primary" formaction="homeFunc">
                    Ingresar como funcionario.
                    </button>
                    <div id="clear"></div>
                </form>

                <script>
                element = document.getElementsByName("login_button")[0];
                element.addEventListener("click", function(){
                console.log("Click")
                });
                </script>
            </div>
        )
}