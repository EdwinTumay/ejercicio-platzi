var rd = document.getElementById("redDistrict");
var papel = rd.getContext("2d");
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGTH: 39,
    DOWN: 40,
  };

var stage = {
  url: "infinity.png",
  cargaOK: false
}
var nezuko = {
  url: "nezuko2.png",
  cargaOK: false
};
var tanjirou = {
    url: "tanjirou.png",
    cargaOK: false,
    x : 0,
	y : 0
};
var muzan = {
    url: "daki.png",
    cargaOK: false
};
var inosuke = {
    url: "inosuke.png",
    cargaOK: false,
    x : [], //Creo una variable X y Y para inosuke y zenitsu en arreglo y la de tanjirou la inicializo en cero
	y : []
};

var zenitsu = {
    url: "zenitsu.png",
    cargaOK: false,
    x : [],
	y : []
};


var cantidad = 1;

stage.imagen = new Image();
stage.imagen.src = stage.url;
stage.imagen.addEventListener("load", cargarStage);

nezuko.imagen = new Image();
nezuko.imagen.src = nezuko.url;
nezuko.imagen.addEventListener("load", cargarNezuko);

tanjirou.imagen = new Image();
tanjirou.imagen.src = tanjirou.url;
tanjirou.imagen.addEventListener("load", cargarTanjirou);

muzan.imagen = new Image();
muzan.imagen.src = muzan.url;
muzan.imagen.addEventListener("load", cargarMuzan);

inosuke.imagen = new Image();
inosuke.imagen.src = inosuke.url;
inosuke.imagen.addEventListener("load", cargarInosuke);

zenitsu.imagen = new Image();
zenitsu.imagen.src = zenitsu.url;
zenitsu.imagen.addEventListener("load", cargarZenitsu);



function cargarStage()
{
  stage.cargaOK = true;
  dibujar();
}
function cargarNezuko()
{
  nezuko.cargaOK = true;
  dibujar();
}
function cargarTanjirou()
{
  tanjirou.cargaOK = true;
  dibujar();
}
function cargarMuzan()
{
  muzan.cargaOK = true;
  dibujar();
}
function cargarInosuke()
{
  inosuke.cargaOK = true;
  dibujar();
}
function cargarZenitsu()
{
  zenitsu.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(stage.cargaOK)
  {
    papel.drawImage(stage.imagen, 0, 0);
  }
  if(nezuko.cargaOK)
  {
      papel.drawImage(nezuko.imagen, 620, 595);
  }
  if(tanjirou.cargaOK)
  { 
    var x = 0;
    var y = 0;
    papel.drawImage(tanjirou.imagen, x, y);
  }
  if(muzan.cargaOK)
  {
    papel.drawImage(muzan.imagen, 620, 10);
  }
  if(inosuke.cargaOK)
   {
      for( var ik = 0; ik < cantidad; ik++)
      {
        var x = (aleatorio (0,9)*60);
        var y = (aleatorio (0,9)*60);
        inosuke.x[ik] = x;
        inosuke.y[ik] = y;
        papel.drawImage(inosuke.imagen, x, y);
      }
    }
  if(zenitsu.cargaOK)
    {
        for(var z=0; z< cantidad; z++)
        {
            var x = (aleatorio (0,9)*60);
            var y = (aleatorio (0,9)*60);
            zenitsu.x[z] = x;
            zenitsu.y[z] = y;
            papel.drawImage(zenitsu.imagen, x, y);
        }
    }
  
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function moverTanjirou(x,y)
{
	papel.drawImage(tanjirou.imagen,x,y);
}

function dibujarOtraVez()//redibujo los personajes, solo que sin el ciclo y utilizando los numero aleatorios de la funcion dibujar
{
	if(stage.cargaOK)
	{
		papel.drawImage(stage.imagen , 0 , 0);
	}
    if(nezuko.cargaOK)
	{
		papel.drawImage(nezuko.imagen , 620, 595);
	}
    if(muzan.cargaOK)
	{
		papel.drawImage(muzan.imagen , 620, 10);
	}if(inosuke.cargaOK)
	 {
	 	for( var ik = 0; ik < cantidad; ik++)
		{
			papel.drawImage(inosuke.imagen , inosuke.x[ik] , inosuke.y[ik]);
			console.log(cantidad);
		}
	 }
	 if(zenitsu.cargaOK)
	 {
	 	for( var z = 0; z < cantidad; z++)
		{
			papel.drawImage(zenitsu.imagen , zenitsu.x[z] , zenitsu.y[z]);
			console.log(cantidad);
		}
	 }
}

document.addEventListener("keyup", moverTecla);

	function moverTecla(evento)
	{
			var movimiento = 25;
			switch (evento.keyCode)
		{
			case teclas.UP:
				dibujarOtraVez();
				moverTanjirou(tanjirou.x, tanjirou.y, tanjirou.x, tanjirou.y - movimiento);
				tanjirou.y = tanjirou.y - movimiento;
			break;
			case teclas.DOWN:
				dibujarOtraVez();
				moverTanjirou(tanjirou.x,tanjirou.y, tanjirou.x, tanjirou.y + movimiento);
				tanjirou.y = tanjirou.y + movimiento;
			break;
			case teclas.LEFT:
				dibujarOtraVez();
				moverTanjirou(tanjirou.x,tanjirou.y, tanjirou.x, tanjirou.y - movimiento);
				tanjirou.x = tanjirou.x - movimiento;
			break;
			case teclas.RIGTH:
				dibujarOtraVez();
				moverTanjirou(tanjirou.x,tanjirou.y, tanjirou.x, tanjirou.y + movimiento);
				tanjirou.x = tanjirou.x + movimiento;
			break;
			
        }}