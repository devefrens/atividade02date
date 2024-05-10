// Data Maior
function dataMaior(date1, date2) {
    const data1 = new Date(date1);
    const data2 = new Date(date2);

    if (data1 > data2) {
        return data1;
    }else{
        return data2;
    }    
}

// Intervalo Data
function intervaloDate(date1, date2) {
    if(date1 < date2) {
        const data = Math.abs(new Date(date2) - new Date(date1));
        const dias = Math.floor(data / (1000 * 60 * 60 * 24));
        return dias;
    }else{
        console.log("Não foi possível realizar a operação, pois a data final é mais recente que a inicial!");
    }
}

//
function formatarDataSimples() {
    const agora = new Date();
    return agora.toLocaleTimeString() + " - " + agora.toLocaleDateString();
}



const data1 = "2023-05-09";
const data2 = "2024-05-09";
const maior = dataMaior(data1, data2);

const intervalo = intervaloDate(data1, data2);

const formatDate = formatarDataSimples()

console.log(maior);
console.log(intervalo);
console.log(formatDate);