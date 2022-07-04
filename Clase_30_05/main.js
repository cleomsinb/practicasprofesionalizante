let usuario = {
    nombre:'juan'
    apellido:'Perez'
    dni:43216577,
    correo:{
        gmail:'itscipolletti@gmail.com',
        outlook:'itscipolletti@otlook.com.ar'
    },
    localidad:'cipolletti'
}
//const gmail = usuario.correo.gmail
//const outlook = usuario.correo.outlook

console.log(`
    apellido: ${usuario.apellido}
    nombre: ${usuario.nombre}
    gmail: ${gmail}
    outlook: ${outlook}
    `)
//destructuring object
const { gmail,outlook } = usuario.correo

let numeros = [
    {
        username:'its2022',
        correo:'its@gmail.com'

    },
    {
        username:'melisa',
        correo:'melisa@gmail.com'
    },
    {
        username:'fede89,
        correo:'fede89@gmail.com'
    },
]
usuarios.forEach(element => {
    console.log(element.username)
    
});