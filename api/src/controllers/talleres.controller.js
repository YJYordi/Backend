// Importar funciones de taller_1.js
import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from '../../../../Talleres/taller_1.js';

// Importar funciones de taller_2.js
import { findMax, includes, sum, missingNumbers } from '../../../../Talleres/taller_2.js';

// Importar funciones de taller_3.js
import { desglosarString, twoSum, conversionRomana, descomposicion } from '../../../../Talleres/taller_3.js';

// Objeto que contiene todas las funciones disponibles
const funciones = {
    // Taller 1
    convertidorTemp,
    resolvedor,
    mejorParidad,
    peorParidad,
    
    // Taller 2
    findMax,
    includes,
    sum,
    missingNumbers,
    
    // Taller 3
    desglosarString,
    twoSum,
    conversionRomana,
    descomposicion
};

// Función para ejecutar cualquier función por nombre
export const ejecutarFuncion = (req, res) => {
    try {
        const { nombreFuncion, parametros } = req.body;

        if (!nombreFuncion) {
            return res.status(400).json({
                error: 'El campo "nombreFuncion" es requerido'
            });
        }

        if (!funciones[nombreFuncion]) {
            return res.status(404).json({
                error: `La función "${nombreFuncion}" no existe`,
                funcionesDisponibles: Object.keys(funciones)
            });
        }

        // Convertir parámetros a array si es necesario
        let args;
        if (Array.isArray(parametros)) {
            args = parametros;
        } else if (parametros !== undefined && parametros !== null) {
            // Si es un objeto, convertir a array de valores
            args = Object.values(parametros);
        } else {
            args = [];
        }

        // Ejecutar la función
        const resultado = funciones[nombreFuncion](...args);

        res.json({
            funcion: nombreFuncion,
            parametros: args,
            resultado: resultado
        });

    } catch (error) {
        res.status(500).json({
            error: 'Error al ejecutar la función',
            mensaje: error.message
        });
    }
};

// Función para obtener lista de funciones disponibles
export const obtenerFunciones = (req, res) => {
    res.json({
        funciones: Object.keys(funciones),
        total: Object.keys(funciones).length
    });
};

