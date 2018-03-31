# Platzom

Platzom es un idioma inventado para el [curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), eduación online.

## Descripción del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras.
- Si la palabra inicia con Z, se le añade "pe" al final.
- Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guíon del medio.
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayÃºsculas y minúsculas.

## Instalación

```
npm install platzom

```

## Uso

```
import platzom from 'platzom'

platzom("Programar")) // Program
platzom("Zorro")) // Zorrope
platzom("Zarpar")) // Zarppe
platzom("abecedario")) // abece-dario
platzom("sometemos")) // SoMeTeMoS
```

## Créditos

- [Edu Cardenas](https://twitter.com/edanca512)

## Licencia

[MIT](https://opensource.org/licenses/MIT)

### @edanca512