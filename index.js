// 1 pound = 453.6g
// 1 inche = 2.54cm
// 1 ounce = 31.1g

var responses = {
    "sex": null, // (M)asculino, (F)eminino
    "points": 0,
    "weight": 0,
    "height": 0,
    "smoker": false,
    "exSmoker": false,
    "isTakingOnlyEstrogen": false,
    "isUsingEstrogen": false,
    "age": 0,
    "knowCholesterol": false,
    "doctorName": null,
    "doctorCRM": null,
    "patientName": null,
    "patientCPF": null,
};

var questionate = {
    askQuestion: function (question, placeholder = "") {
        return window.prompt(question, placeholder);
    },

    askYesOrNo: function (question) {
        return window.confirm(question + "\n\n\nAperte OK para sim e Cancelar para não.");
    },

    askConfirm: function (question) {
        return window.confirm(question);
    },

    askShow: function (question) {
        return alert(question);
    },

    modifyPoints: function (res, men, woman) {
        if (res === true) {
            if (responses.sex == "M") {
                responses["points"] += men;
            } else {
                responses["points"] += woman;
            }

            return true;
        }

        return false;
    },
};

var questions = {
    askDoctorName: function () {
        responses["doctorName"] = questionate.askQuestion("Qual o nome do médico responsável pelo exame?");
    },

    askDoctorCRM: function () {
        responses["doctorCRM"] = questionate.askQuestion("Qual o CRM do médico responsável pelo exame?");
    },

    askPatientName: function () {
        responses["patientName"] = questionate.askQuestion("Qual o nome do paciente que está fazendo o exame?");
    },

    askPatientCPF: function () {
        responses["patientCPF"] = questionate.askQuestion("Qual o CPF do paciente que está fazendo o exame?");
    },

    askSex: function () {
        responses["sex"] = questionate.askQuestion("Qual o seu sexo?\n\n(M) para Masculino e (F) para feminino");
    },

    askHeight: function () {
        responses["height"] = questionate.askQuestion("Qual a sua altura em centimetros?")
    },

    askWeight: function () {
        responses["weight"] = questionate.askQuestion("Qual o seu peso em KG?");
    },

    askSystolicPressure: function () {
        // Multiply your systolic pressure (the higher number)
        // By 0.14 if male, by 0.15 if female
        // Woman/Men: +result

        responses["systolic"] = questionate.askQuestion("Qual sua pressão arterial sistólica?");

        questionate.modifyPoints(true, responses["systolic"] * 0.14, responses["systolic"] * 0.15);
    },

    askAge: function () {
        // Multiply your age by 0.51 if male, by 0.8 if female
        // Woman/Men: +result

        responses["age"] = questionate.askQuestion("Qual a sua idade?");

        questionate.modifyPoints(true, responses["age"] * 0.51, responses["age"] * 0.8);
    },

    askIfKnowCholesterol: function () {
        responses["knowCholesterol"] = questionate.askYesOrNo("Você sabe o seu nível de colesterol?");
    },

    askTotalCholesterol: function () {
        // Multiply your total cholesterol level by 0.07 if male, by 0.06 if femalte
        // Woman/Men: +result

        if (responses["knowCholesterol"]) {
            res = questionate.askQuestion("Qual seu coleterol total?");
        } else {
            res = 205;
        }

        questionate.modifyPoints(true, res * 0.07, res * 0.06);
    },

    askHDLChonesterol: function () {
        // Multiply your HDL level by 0.25 if male, by 0.3 if female
        // Woman/Men: -result

        // If you dont know your cholesterol levels and want to assume they're about
        // averange, you could aubstitute 205 of total cholestrol, and 51 for HDL.
        // Adults 20 and over have chilesterol testing at least every five years

        if (responses["knowCholesterol"]) {
            res = questionate.askQuestion("Qual seu coleterol HDL?");
        } else {
            res = 51;
        }

        questionate.modifyPoints(true, res * 0.25, res * 0.3);
    },

    askExercise: function () {
        // do you get little or more exercise
        // Men: +2
        // Woman: +5
        var res = questionate.askYesOrNo("Você faz algum tipo de exercicio fisico?");
        questionate.modifyPoints(res, +2, +5);
    },

    askBMI: function () {
        // calculate your body mass index (BMI) as follows:
        // Multiply your wight in piunds by 704. Divide the result by your height
        // in inches. Divide that result by your height in inches again,
        var BMI = ((responses["weight"] / 453.6) * 704) / (responses["height"] / 2.54);

        // is your BMI from 21 to under 25? Men: +0, Woman: +2
        if (BMI >= 21 && BMI < 25) {
            questionate.modifyPoints(true, 0, +2);
        }

        // is your BMI from 25 to under 29? Men: +2, Woman: +3
        if (BMI >= 25 && BMI < 29) {
            questionate.modifyPoints(true, +2, +3);
        }

        // is your BMI from 29 or over? Men: +4, Woman: +5
        if (BMI >= 29) {
            questionate.modifyPoints(true, +4, +5);
        }
    },

    askDiabetes: function () {
        // Do you have diabetes?
        // Men: +8, Woman: +11 
        var res = questionate.askYesOrNo("Você tem diabetes?");
        questionate.modifyPoints(res, +8, +11);
    },

    askIfSmoker: function () {
        responses["smoker"] = questionate.askYesOrNo("Você é um fumante?");

        if (responses["smoker"]) {
            responses["exSmoker"] = questionate.askYesOrNo("Você é um ex fumante?");

            if (responses["exSmoker"]) {
                // If youre an ex smoker, did you quit in the past five years?
                // Men: +1, Woman: +4
                var res = questionate.askYesOrNo("Você parou de fumar há pelo menos 5 anos?");
                questionate.modifyPoints(res, +1, +4);
            }

            var amountSmokePerDay = questionate.askQuestion("Você fuma quantos cigarros por dia?");

            // If you smoke, do you smoke fewer than 15 cigarettes a day?
            // Men: +2, Woman: +8
            if (amountSmokePerDay < 15) {
                questionate.modifyPoints(true, +2, +8);
            }

            // Do you smoke 15 to 24 cigarettes a day?
            // Men: +4, Woman: +15
            if (amountSmokePerDay >= 15 && amountSmokePerDay < 25) {
                questionate.modifyPoints(true, +4, +15);
            }

            // Do you smoke more than 24 cigarettes a day?
            // Men: +5, Woman: +18
            if (amountSmokePerDay >= 25) {
                questionate.modifyPoints(true, +5, +18);
            }
        }
    },

    askAboutFamiltyHeartAttack: function () {
        // Did either of you parents have a heart attack before age 60?
        // Men: +9, Woman: +9
        var res = questionate.askYesOrNo("Algum dos seus país já teveram ataque cardiaco?");
        questionate.modifyPoints(res, +9, +9);
    },

    askAboutMedicineForBloodPressure: function () {
        // Do ou tke medicine to control blood pressure?
        // (This is a sign that your pressure was once elevated)
        // Men: +1, Woman: +1
        var res = questionate.askYesOrNo("Você toma ou já tomou medicamentos para controlar a pressão sanquinea?");
        questionate.modifyPoints(res, +1, +1);
    },

    asbAboutPostmenopausal: function () {
        if (responses["sex"] !== "M") {
            responses["postmenopausal"] = questionate.askYesOrNo("Você está na pós-menopausa?");
        }
    },

    askAboutTakingEstrogenAlone: function () {
        if (responses["postmenopausal"]) {
            // If postmenopausal, are you currently taking estrogen alone?
            // Woman: -5
            responses["isTakingOnlyEstrogen"] = questionate.askYesOrNo("Você está usando somente estrógeno?");
            questionate.modifyPoints(responses["isTakingOnlyEstrogen"], 0, -5);
            
            // Se está usando somente estrógeno, está usando estrógeno
            responses["isUsingEstrogen"] = responses["isTakingOnlyEstrogen"];
        }
    },

    askAboutEstrogenAndProgestin: function () {
        if (!responses["isTakingOnlyEstrogen"] && responses["sex"] !== "M") {
            // Are you currently taking estrogen plus progestin?
            // Women: -3
            var res = questionate.askYesOrNo("Você está usando estrógeno com progestina?");
            questionate.modifyPoints(res, 0, -3);

            // Se está usando com progestina, está usando estrógeno
            responses["isUsingEstrogen"] = res;
        }
    },

    askAboutPreviousEstrogen: function () {
        if (!responses["isUsingEstrogen"] && responses["sex"] !== "M") {
            // If you don´t currently take estrogen, did you previously take it? (With or without progestin)
            // Woman: -2
            var res = questionate.askYesOrNo("Você já usou estrógeno no passo?");
            questionate.modifyPoints(res, 0, -2);
        }
    },

    askAboutLowDosesOfApsirin: function () {
        if (responses["sex"] == "M") {
            // Do you take low doses of aspirin at least every other day?
            // (A low dose is between 1/4 and one whole 325mg, tablet)
            // Men: -4
            var res = questionate.askYesOrNo("Você toma doses baixas de aspirina (menos de 325mg), pelo menos, a cada dois dias?");
            questionate.modifyPoints(res, -4, 0);
        }
    },

    askAboutAlcohol: function () {
        // Do you drink in moderation?
        // Moderate drinking is two to 14 drinks per week.
        // A drink is 12 ounces of beer, five ounces of Wine of 1 1/2 ounces of liquor
        // Men: -4, Woman -4
        var res = questionate.askYesOrNo("Você bebe moderadamente (significa tomar de dois até 14 drinks por semana)?");
        questionate.modifyPoints(res, -4, -4);
    },
};

var result = {
    getTableOfResults: function () {
        return [
            {gender: "M", scoreFrom: 0, scoreTo: 35, oneYear: "<0,1%", fiveYears: "<0,4%", tenYears: "<1%"},
            {gender: "M", scoreFrom: 36, scoreTo: 45, oneYear: "0.1-0.2%", fiveYears: "0.4-1%", tenYears: "1-3%"},
            {gender: "M", scoreFrom: 46, scoreTo: 55, oneYear: "0.2-0.6%", fiveYears: "1-3%", tenYears: "3-7%"},
            {gender: "M", scoreFrom: 56, scoreTo: 65, oneYear: "0.6-2%", fiveYears: "3-8%", tenYears: "7-17%"},
            {gender: "M", scoreFrom: 66, scoreTo: 70, oneYear: "0.2%", fiveYears: "8-13%", tenYears: "17-27%"},
            {gender: "M", scoreFrom: 71, scoreTo: 75, oneYear: "0.2-4%", fiveYears: "13-20%", tenYears: "27-40%"},
            {gender: "M", scoreFrom: 76, scoreTo: 80, oneYear: "0.4-6%", fiveYears: "20-30%", tenYears: "40-56%"},
            {gender: "F", scoreFrom: 0, scoreTo: 60, oneYear: "<0,1%", fiveYears: "<0,4%", tenYears: "<1%"},
            {gender: "F", scoreFrom: 61, scoreTo: 70, oneYear: "0.1-0.2%", fiveYears: "0.4-1%", tenYears: "1-3%"},
            {gender: "F", scoreFrom: 71, scoreTo: 80, oneYear: "0.2-0.5%", fiveYears: "1-3%", tenYears: "3-7%"},
            {gender: "F", scoreFrom: 81, scoreTo: 85, oneYear: "0.5-1%", fiveYears: "3-5%", tenYears: "7-12%"},
            {gender: "F", scoreFrom: 86, scoreTo: 90, oneYear: "1%", fiveYears: "5-8%", tenYears: "12-19%"},
            {gender: "F", scoreFrom: 91, scoreTo: 95, oneYear: "1-2%", fiveYears: "8-13%", tenYears: "19-29%"},
            {gender: "F", scoreFrom: 96, scoreTo: 100, oneYear: "2-4%", fiveYears: "13-20%", tenYears: "29-43%"},
        ];
    },

    seekAndReturnResult: function () {
        var table = this.getTableOfResults(),
            res = null;

        table.forEach(function (elm, index, arr) {
            if (elm["gender"] == responses["sex"]) {
                if (elm["scoreFrom"] <= responses["points"] && elm["scoreTo"] >= responses["points"]) {
                    res = elm;
                }
            }
        });

        return res;
    },

    trasformInText: function () {
        var result = this.seekAndReturnResult();

        return "A sua pontuação é de " + responses["points"] + "\n" +
            "Este exame é de responsabilidade do médico " + result.doctorName + " (CRM: " + result.doctorCRM + ")\n" +
            "Este exame pertence ao paciente " + result.patientName + " (CPF" + result.patientCPF + ")\n" +
            "\n" +
            "\n" +
            "Em um ano, você tem " + result.oneYear + " de chances de sofrer um ataque do coração.\n" +
            "Em cinco anos, você tem " + result.fiveYears + " de chances de sofrer um ataque do coração.\n" +
            "Em dez anos, você tem " + result.tenYears + " de chances de sofrer um ataque do coração.\n";
    },

    show: function () {
        questionate.askShow(this.trasformInText());
    },
};

questions.askSex();
questions.askHeight();
questions.askWeight();
questions.askSystolicPressure();
questions.askAge();
questions.askIfKnowCholesterol();
questions.askTotalCholesterol();
questions.askHDLChonesterol();
questions.askExercise();
questions.askBMI();
questions.askDiabetes();
questions.askIfSmoker();
questions.askAboutFamiltyHeartAttack();
questions.askAboutMedicineForBloodPressure();
questions.asbAboutPostmenopausal();
questions.askAboutTakingEstrogenAlone();
questions.askAboutEstrogenAndProgestin();
questions.askAboutPreviousEstrogen();
questions.askAboutLowDosesOfApsirin();
questions.askAboutAlcohol();

result.show();

console.log(responses);
