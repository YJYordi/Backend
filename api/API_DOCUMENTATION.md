# API de Talleres - Documentación

Esta API expone todas las funciones de los archivos taller ubicados en `c:/Universidad/Backend/Talleres/`.

## Endpoints

### GET `/talleres`
Obtiene la lista de todas las funciones disponibles.

**Respuesta:**
```json
{
  "funciones": [
    "convertidorTemp",
    "resolvedor",
    "mejorParidad",
    "peorParidad",
    "findMax",
    "includes",
    "sum",
    "missingNumbers",
    "desglosarString",
    "twoSum",
    "conversionRomana",
    "descomposicion"
  ],
  "total": 12
}
```

### POST `/talleres/ejecutar`
Ejecuta una función específica con los parámetros proporcionados.

**Body (JSON):**
```json
{
  "nombreFuncion": "nombre_de_la_funcion",
  "parametros": [param1, param2, ...]
}
```

**Respuesta exitosa:**
```json
{
  "funcion": "nombre_de_la_funcion",
  "parametros": [param1, param2, ...],
  "resultado": resultado_de_la_funcion
}
```

## Ejemplos de Uso

### 1. convertidorTemp
Convierte temperatura de Celsius a Fahrenheit.
```json
{
  "nombreFuncion": "convertidorTemp",
  "parametros": [25]
}
```

### 2. resolvedor
Resuelve una ecuación cuadrática y retorna el mayor resultado.
```json
{
  "nombreFuncion": "resolvedor",
  "parametros": [1, -5, 6]
}
```

### 3. mejorParidad
Determina si un número es par o impar.
```json
{
  "nombreFuncion": "mejorParidad",
  "parametros": [7]
}
```

### 4. peorParidad
Determina si un número es par o impar (versión menos eficiente).
```json
{
  "nombreFuncion": "peorParidad",
  "parametros": [5]
}
```

### 5. findMax
Encuentra el número máximo en una lista.
```json
{
  "nombreFuncion": "findMax",
  "parametros": [[3, 17, -1, 4, -19]]
}
```

### 6. includes
Verifica si un número está en una lista.
```json
{
  "nombreFuncion": "includes",
  "parametros": [[3, 17, -1, 4, -19], 4]
}
```

### 7. sum
Suma todos los números de una lista.
```json
{
  "nombreFuncion": "sum",
  "parametros": [[3, 17, -1, 4, -19]]
}
```

### 8. missingNumbers
Encuentra los números faltantes entre el menor y mayor de una lista.
```json
{
  "nombreFuncion": "missingNumbers",
  "parametros": [[7, 2, 4, 6, 3, 9]]
}
```

### 9. desglosarString
Cuenta vocales o consonantes en una palabra.
```json
{
  "nombreFuncion": "desglosarString",
  "parametros": ["murcielagos", "vocales"]
}
```

### 10. twoSum
Encuentra los índices de dos números que suman un objetivo.
```json
{
  "nombreFuncion": "twoSum",
  "parametros": [[3, 7, 11, 15], 9]
}
```

### 11. conversionRomana
Convierte números romanos a arábigos.
```json
{
  "nombreFuncion": "conversionRomana",
  "parametros": ["MCMXCVII"]
}
```

### 12. descomposicion
Encuentra dos palabras del diccionario que componen la palabra objetivo.
```json
{
  "nombreFuncion": "descomposicion",
  "parametros": ["malhumor,al,hum,humor,m,mal,malhu"]
}
```

## Errores

### Error 400 - Parámetros faltantes
```json
{
  "error": "El campo \"nombreFuncion\" es requerido"
}
```

### Error 404 - Función no encontrada
```json
{
  "error": "La función \"nombreFuncion\" no existe",
  "funcionesDisponibles": ["lista", "de", "funciones"]
}
```

### Error 500 - Error al ejecutar
```json
{
  "error": "Error al ejecutar la función",
  "mensaje": "Descripción del error"
}
```

