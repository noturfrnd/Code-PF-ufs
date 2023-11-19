const workingHours = ["Aberto",
"Fechado"]

const prescenceSensor = ["Veiculo", "Sem veiculo"]

let openHour = false;
let present = false;

const randHour = Math.floor(Math.random() * workingHours.length)

const randSensor = Math.floor(Math.random() * prescenceSensor.length)

if(workingHours[randHour] === "Fechado"){
    console.error("Fora do horario de funcionamento");
}else{
    openHour = true;
    console.log("Aberto")
}

if(prescenceSensor[randSensor] === "Veiculo"){
    console.warn("Veiculo presente");
    present = true;
}else{
    console.error("Sem veiculo");
}

if(openHour && present){
    console.log("Abrir cancela")
}else{
    console.error("Cancela fechada");
}