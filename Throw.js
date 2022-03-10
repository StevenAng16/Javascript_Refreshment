
//Throw

function percobaan (angka) {
    if (angka * 0 != 0){
        throw new Error("Bukan angka !")
    }
    return "Int Angka"
}
try{
    console.log(percobaan('a'))
} catch (error) {
    console.error(error) // error: Error! Bukan angka !
}