
// select name element with id
const firstName = document.getElementsByClassId("n1");
const firstPrice = document.getElementsByClassId("cin");
const education= document.getElemenstByClassId("education");
const networth = document.getElementsByClassId("family");
const skills = document.getElementsByClassName("n3");
const age = document.getElementsByClassName("n4");
const reputation = document.getElementsByClassName("n5");
const button = document.getElementById("submit");
// select love letter element with id
const letter = document.getElementById("n6");

function calculate() {
    let name = firstName.value;
    let price = Number(firstprice.value);
    let letter = letter.value;
    var EducationDegreeValue = Number(document.getElementById("education").value);
    var FamilyNetValue = Number(document.getElementById("family").value);
    var SkillsValue = 0;
        for (i = 0; i < skills.length; i++){
            if(skills[i].checked == true){
                SkillsValue += Number(skills[i].value);
            }
        }
    var AgeValue=1;
        for (i = 0; i < age.length; i++){
            if(age[i].checked == true){
                Age = Number(age[i].value);
                break;
            }
        }
    price = (((price * EducationDegreeValue * FamilyNetValue) + SkillsValue) * AgeValue);
        if(reputation[0].checked == true){
            final *= reputation[0].value;
        }
        if(reputation[1].checked == true){
            final *= reputation[1].value;
        }
        if(reputation[2].checked == true){
            final -= reputation[2].value;
        }
    document.getElementById("result").innerHTML = `Your price for ${name} is ${price}. Your love letter is ${letter.value}`
}


button.addEventListener("click", calculate)