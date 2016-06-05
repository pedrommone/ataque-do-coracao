(function () {
    var questionate = {
        askQuestion: function (question, placeholder) {},
        askConfirm: function (question) {}, 
    };

    var questions = {
        askSex: function () {
            //qual seu sexo?
        },

        askExercise: function () {
            // do you get little or more exercise
            // Men: +2
            // Woman: +5
        },

        askBMI: function () {
            // calculate your body mass index (BMI) as follows:
            // Multiply your wight in piunds by 704. Divide the result by your height
            // in inches. Divide that result by your height in inches again,

            // is your BMI from 21 to under 25? Men: +0, Woman: +2
            // is your BMI from 25 to under 29? Men: +2, Woman: +3
            // is your BMI from 28 or over? Men: +4, Woman: +5
        },

        askDiabetes: function () {
            // Do you have diabetes?
            // Men: +8, Woman: +11 
        },

        askIfSmoker: function () {
            // If youre an ex smoker, did you quit in the past five years?
            // Men: +1, Woman: +4

            // If you soke, do you smoke fewer than 15 cigarettes a day?
            // Men: +2, Woman: +8

            // Do you smoke 15 to 24 cigarettes a day?
            // Men: +4, Woman: +15

            // Do you smoke more than 24 cigarettes a day?
            // Men: +5, Woman: +18
        },

        askAboutFamiltyHeartAttack: function () {
            // Did either of you parents have a heart attack before age 60?
            // Men: +9, Woman: +9
        },

        askAboutMedicineForBloodPressure: function () {
            // Do ou tke medicine to control blood pressure?
            // (This is a sign that your pressure was once elevated)
            // Men: +1, Woman: +1
        },

        asbAboutPostmenopausal: function () {
            // If postmenopausal, are you currently taking estrogen alone?
            // Woman: -5
        },

        askAboutEstrogenAndProgestin: function () {
            // Are you currently taking estrogen plus progestin?
            // Women: -3
        },

        askAboutPreviousEstrogen: function () {
            // If you don´t currently take estrogen, did you previously take it? (With or without progestin)
            // Woman: -2
        },

        askAboutLowDosesOfApsirin: function () {
            // Do you take low doses of aspirin at least every other day?
            // (A low dose is between 1/4 and one whole 325mg, tablet)
            // Men: -4
        },

        askAboutAlcohol: function () {
            // Do you drink in moderation?
            // Moderate drinking is two to 14 drinks per week.
            // A drink is 12 ounces of beer, five ounces of Wine of 1 1/2 ounces of liquor
            // Men: -4, Woman -4
        },

        askAboutSystolicPressure: function () {
            // Multiply your systolic pressure (the higher number)
            // By 0.14 if male, by 0.15 if female
            // Woman/Men: +result
        },

        askAboutAge: function () {
            // Multiply your age by 0.51 if male, by 0.8 if female
            // Woman/Men: +result
        },

        askAboutCholesterol: function () {
            // Multiply your total cholesterol level by 0.07 if male, by 0.05 if femalte
            // Woman/Men: +result
        },

        askAboutHDL: function () {
            // Multiply your HDL level by 0.25 if male, by 0.3 if female
            // Woman/Men: -result

            // If you dont know your cholesterol levels and want to assume they're about
            // averange, you could aubstitute 205 of total cholestrol, and 51 for HDL.
            // Adults 20 and over have chilesterol testing at least every five years
        }
    };

    var tableOfResults = {
        [gender: "men", scoreFrom: 0, scoreTo: 35, oneYear: "<0,1%", fiveYears: "<0,4%", tenYears: "<1%"],
        [gender: "men", scoreFrom: 36, scoreTo: 45, oneYear: "0.1-0.2%", fiveYears: "0.4-1%", tenYears: "1-3%"],
        [gender: "men", scoreFrom: 46, scoreTo: 55, oneYear: "0.2-0.6%", fiveYears: "1-3%", tenYears: "3-7%"],
        [gender: "men", scoreFrom: 56, scoreTo: 65, oneYear: "0.6-2%", fiveYears: "3-8%", tenYears: "7-17%"],
        [gender: "men", scoreFrom: 66, scoreTo: 70, oneYear: "0.2%", fiveYears: "8-13%", tenYears: "17-27%"],
        [gender: "men", scoreFrom: 71, scoreTo: 75, oneYear: "0.2-4%", fiveYears: "13-20%", tenYears: "27-40%"],
        [gender: "men", scoreFrom: 76, scoreTo: 80, oneYear: "0.4-6%", fiveYears: "20-30%", tenYears: "40-56%"],

        [gender: "women", scoreFrom: 0, scoreTo: 60, oneYear: "<0,1%", fiveYears: "<0,4%", tenYears: "<1%"],
        [gender: "women", scoreFrom: 61, scoreTo: 70, oneYear: "0.1-0.2%", fiveYears: "0.4-1%", tenYears: "1-3%"],
        [gender: "women", scoreFrom: 71, scoreTo: 80, oneYear: "0.2-0.5%", fiveYears: "1-3%", tenYears: "3-7%"],
        [gender: "women", scoreFrom: 81, scoreTo: 85, oneYear: "0.5-1%", fiveYears: "3-5%", tenYears: "7-12%"],
        [gender: "women", scoreFrom: 86, scoreTo: 90, oneYear: "1%", fiveYears: "5-8%", tenYears: "12-19%"],
        [gender: "women", scoreFrom: 91, scoreTo: 95, oneYear: "1-2%", fiveYears: "8-13%", tenYears: "19-29%"],
        [gender: "women", scoreFrom: 96, scoreTo: 100, oneYear: "2-4%", fiveYears: "13-20%", tenYears: "29-43%"],
    };
});
