var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

function dataHandling2(arr) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy")
    input.splice(1, 2, "Provinsi Bandar Lampung")
    input.splice(1, 4, "Pria", "SMA Internasional Metro")
    console.log(arr)
    
}