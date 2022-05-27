# Devlights Bootcamps

### En esta oportunidad realizamos una app de ejemplo

---

# Pronostico App 
			
La siguiente prueba plantea el desarrollo de una aplicación de consulta de clima que pueda:

+ visualizar el pronóstico actual
+ visualizar los próximos 5 días 
+ para la ciudad actual 
+ de otras 5 ciudades seleccionables.

+ Se recomienda utilizar servicio API de weather Open Weather Map, pero se puede usar utilizar cualquier otro de preferencia.

+ Cualquier información relevante la deben agregar al Readme del proyecto.

+ Se debe idear y diseñar la UI que se considere mas acorde 

    *(No se valoran habilidades de diseño, sino de uso de componentes y poner en practica los conceptos dados en clases (Routes, context, composicion, etc..) ).*

* En caso de decidir utilizar Open Weather Map, aca les dejo una apiKey valida para que la usen al consumir la API.

    + endpoint: `https://api.openweathermap.org/data/2.5/forecast?q=corrientes&lang=es`

    + apiKey: `8a5e9515a6583a0a93a8e614d848ffb5`

+ ## [Ejemplo de uso](https://api.openweathermap.org/data/2.5/forecast?q=corrientes&lang=es&appid=8a5e9515a6583a0a93a8e614d848ffb5)


La entrega del código se espera que se entregue en algún repositorio público *(Por ejemplo Github)* 

y desplegado en alguna plataforma gratuita *(Vercel, Netlify o Github Pages).*

---

## Información posiblemente Relevante:

+ Para este project voy a utilizar:
    + react
    + sass
    + react-router
    + axios
    + react-query

+ Podría realizar cambios en el en el package.json para remover las librerias que no utilizo en esta app. Pero prefiro dejarlo asi ya que este **particular** repositorio tiene ramas con apps diferentes directamente (lo que logicamente no responde a ningún modelo de la vida real)

### última Nota:

Recuerdo que hace mucho tiempo no me gustaba JS, luego me amigué con él, y ahora es un languaje que me gusta bastante... sin embargo hay muchas cosas que me disgustan.

Precisamente, me molesta que sin ser un lenguaje de proposito general. Tenga tantas formas de hacer una misma cosa. Sin dudas esto está asociado al hecho de que la evolución de la WEB es muy veloz y el lenguaje no puede dejar de soportar funcionalidades que ya tenía como tampoco, simplemente, deprecar unas practicas con respeto a otras (de manera explicita)

JSX me gusta mas. Me gusta el concepto de **separar el código en componentes** por encima de **separarlo en "lenguajes" (HTML, CSS, JS)** a mi parecer tiene mas sentido. Y de alguna manera se reducen 2 lenguajes a uno solo, donde queda claro que lo que devuelve un componente *"es algo que se ve en la pantalla"* y se estructura con etiquetas (html). 

React además nos brinda muchos mecanismos para encaminarnos en una forma un poco mas concreta de hacer las cosas.

Mi actual dilema está en el estilo. Conceptualmente, ¿donde está el limite entre un elemento (html) y su forma y color (css)? 
El *styled-component aproach* no termina de cerrar esta conceptualización en mi opinión.
No digo que yo tenga una mejor idea, pero sin dudas es algo que me inquieta. Me gustaría aceptar esta "temprana idea" del CSS in JS o JSS... pero no lo veo como una evolución si no mas bien como una moda de hacer todo con ***JavaScript***. Por una parte es muy bueno que ofrezca la posibilidad de crear estos componentes autonomos. Y que al mismo tiempo se pueda trabajar con temas globales. Pero sigue siendo una syntaxis a parte, sin una forma concreta de "recibir el tema global como prop" y luego "hacer ajustes locales".

Me gustaría que surja *(y se que ocurrirá relativamente pronto)* una syntaxis genuina, una versión integradora de JSX que permita incluir a CSS de una forma recomendable tanto en legibilidad, matenibilidad, y rendimiento. y que librerias como react (y las que surjan) presenten **una forma** de integrar los estilos. Como ya ocurre con los elementos del DOM. Cuando eso ocurra los componentes serán verdaeramente Componentes. 

Por el momento voy valerme un poco *del trabajo y criterio ajeno* jaja, usando MUI, que de alguna manera me parece que comparte este sentimiento conmigo, si bien la librería se apoya en *styled-components* la solución que le ofrecen al desarrollador ya son componentes completos.

*Que bueno sería poder replicar lo que MUI no ofrece (tal vez no es su totalidad) pero como para estilizar con transiciones, eventos y demás de 0% a 100% una WebApp. Asi como JSX nos permite implementar el HTML y JS de 0% a 100% en un tiempor de desarrollo aceptable* 😉

A nivel personal creo que debo desarrollar mi habilidad en **estilos** apoyandome en preprosesadores CSS más puntualmente **SASS** valiendome de la posibilidad de separar la hoja de estilos en partes mas especificas, tal vez pueda hacer un *reflejo* de la estructura de archivos de mi proyecto react, en archivos scss 🤔. hasta que surje este ***JSX deluxe*** 😆

---

[Consigna original](https://docs.google.com/document/d/1jjHvxYggXLGEkjvuBK5iFBQCICkKnlwnRfKlYP1Rkxk/edit)
    
    
    Sebastián Atlántico Rodríguez Capurro