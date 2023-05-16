import { CourseData } from "../interfaces/interfaces";

//APIS
export const studentsApi: string = 'https://644bbe4817e2663b9df71eff.mockapi.io/api/v1/students';
export const usersApi: string = 'https://644bbe4817e2663b9df71eff.mockapi.io/api/v1/users';

//REGEX
export const ONLY_APAHABETS_NO_SPECIAL_CHARACTERS: RegExp = /^[a-zA-Z\u00F1\u00D1\s]+(\s[a-zA-Z\u00F1\u00D1]+)*$/;
export const ONLY_NUMBERS: RegExp = /^([0-9]\d*)?$/;

//DATA CLASES INSCRITAS

export const desarrolloWeb: CourseData = {
    className: 'Desarrollo Web',
    hours: 40,
    numberOfClasses: 20,
    teacherName: 'Sebastian Jaramillo'
}
export const basesDeDatos: CourseData = {
    className: 'Bases de datos',
    hours: 25,
    numberOfClasses: 13,
    teacherName: 'Valentina Isaguirre'
}
export const redes: CourseData = {
    className: 'Redes',
    hours: 80,
    numberOfClasses: 40,
    teacherName: 'Camilo Bustamante'
}
export const infraestructura: CourseData = {
    className: 'Infraestructura',
    hours: 70,
    numberOfClasses: 35,
    teacherName: 'Maria Tereza Montilla'
}
export const desarrolloSoftware: CourseData = {
    className: 'Desarrollo de software',
    hours: 50,
    numberOfClasses: 25,
    teacherName: 'Diego de la Vega'
}