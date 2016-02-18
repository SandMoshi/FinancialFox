// JavaScript source code
$(document).ready(function () {
    $("#button_calculate").click(function main() {
        //Initialize Variables and Arrays
        var DAY;
        var MONTH;
        var YEAR;
        var YEARint;
        var thisYear;
        var YSI;
        var Age;
        var first_year;
        var elig_years;
        var net_contributions = 0;
        var contributions = 0;
        var year_contribution = 0;
        var withdrawals = 0;
        var year_withdrawal = 0;
        var TFSA_Limit_Actual = 0;
        var Next_TFSA_Limit_Actual = 0;
        var YOB;
        var Age;
        var Birthdate;
        var now;
        var NumError;
        var money_inputs = [contributions, withdrawals, year_contribution,year_withdrawal];

        //==========================
        //Get date values from Input BOXES
        Birthdate = new Date($("#birthdate").val());
                console.log(Birthdate);  //console
        now = new Date();
        MONTH = now.getMonth()+1;
        DAY = now.getDate();
        thisYear = now.getFullYear();

        YEAR = Birthdate.getFullYear();
                console.log(YEAR);  //console

        if (Birthdate == "")
        {
            sweetAlert({
                title: "No Birthdate Selected!",
                text: "Please choose a birthdate.",
                type: "error",
            });
        }
        else if (Birthdate == "Invalid Date")
        {
            sweetAlert({
                title: "Invalid Birthday!",
                text: "Please check your birthdate.",
                type: "error",
            });
        }
       
        //==========================
        //Get contribution values from Input BOXES
        contributions = $('#ContributionsToDate').val();
        withdrawals = $('#WithdrawalsToDate').val();
        year_contribution = $('#ContributionsThisYear').val();
        year_withdrawal = $('#WithdrawalsThisYear').val();
        console.log(year_contribution);  //console
        console.log(year_withdrawal);  //console
        //==========================
        //Do some MATH
        console.log(contributions);  //console
        net_contributions = contributions - withdrawals;
        console.log(net_contributions);  //console
        year_net_contributions = year_contribution - year_withdrawal;
        //----Calculate some time dependent variables
               console.log(thisYear);  //console
        YSI = thisYear - 2009;
        Age = thisYear - YEAR;
               console.log(YSI);  //console
               console.log(Age);  //console

        var TFSA_Limit = 0;

        if (Age - YSI >= 18) //Already 18 years old at inception (will have max room)
        {
            elig_years = thisYear - (YEAR + 18) + 1; //Eligible in 18th year
            TFSA_Limit = 5000 * 4 + 5500 * 2 + 10000 * (YSI - 6 + 1); //Max TFSA Limit (Includes this Year)
        }
        else {
            elig_years = thisYear - (YEAR + 18) + 1; //Eligible in 18th year

            if (elig_years <= 0) //Too young to receive a TFSA
            {
                TFSA_Limit = 0;
                sweetAlert({
                    title: "Sorry, You are too young!",
                    text: "You must be 18 years or older to have a TFSA account.",
                    type: "error",
                });
            }
            else {
                first_year = thisYear - elig_years + 1; //First year you can contribute
                if (first_year > 2012 && first_year <2015) {
                    TFSA_Limit = 5500 * (2014 - first_year + 1) + 10000 * (thisYear - 2014) ; //$5500 per year
                }
                else if (first_year > 2014) {
                    TFSA_Limit = 10000 * elig_years; //$10000 per year
                }
                else {
                    TFSA_Limit = 5500 * (thisYear - 2012) + 5000 * (2012 - first_year + 1); //Amount you can contribute (maximum)
                }
            }
        }
        //---
        //Check to make sure numbers don't include symbols/letters
        NumError = isNumber(contributions);
        if (NumError == 'error') {
            return;
        }
        NumError = isNumber(withdrawals);
        if (NumError == 'error') {
            return;
        }
        NumError = isNumber(year_contribution);
        if (NumError == 'error') {
            return;
        }
        NumError = isNumber(year_withdrawal);
        if (NumError == 'error') {
            return;
        }
        //---
        //==========================
        // This checks to see if you've over contributed or have bad input values
        if (withdrawals > 0 & contributions == 0) {
            sweetAlert({
                title: "Unnacceptable Withdrawals!",
                text: "You cannot withdraw money when your contributions are zero.",
                type: "error",
            });
            return;
        }
        else if (net_contributions > TFSA_Limit) {
            sweetAlert({
                title: "Possible Overcontribution",
                text: "Your net contributions exceed your original TFSA limit. \nThis may indicate that you've over-contributed in the past. \nPlease check your numbers.",
                type: "warning",
            });
        }
        else if (withdrawals < 0 | contributions < 0) {
            sweetAlert({
                title: "Unacceptable Inputs",
                text: "You cannot have a negative contribution or withdrawal amount.\nPlease check your numbers.",
                type: "error",
            });
            return;
        }
        else if (withdrawals > contributions) {
            sweetAlert({
                title: "Possible Over-Withdrawal!",
                text: "Your withdrawal amount exceeds your total contributions. \n\nThis may be a result of your contributions growing while in the TFSA which is normal. \n\nPlease check your numbers and click OK to continue.",
                type: "warning",
            });
        }
        else if (year_net_contributions > net_contributions) {
            sweetAlert({
                title: "Careful!",
                text: "Your contributions this year are more than your \ntotal net contributions. \n\nHowever, this is possible in certain situations. \nPlease check your numbers... \n\nContinue if they are correct.",
                type: "warning",
            });
        }
        else if (year_withdrawal > withdrawals) {
            sweetAlert({
                title: "Unacceptable Inputs",
                text: "Your withdrawal this year cannot be more than your \nwithdrawals to date.\nPlease check your numbers.",
                type: "error",
            });
            throw 'year_net_contributions > net_contributions';
        }
        //==========================
        //Do some MATH
        TFSA_Limit_Actual = TFSA_Limit - contributions + (withdrawals - year_withdrawal);
        if (elig_years > 0) {
           Next_TFSA_Limit_Actual = Number(TFSA_Limit_Actual) + Number(year_withdrawal) + Number(10000); // Next year your limit
        }
        else
        {
            Next_TFSA_Limit_Actual = 0;
        }
        //==========================
        //Rounding and Formatting
        TFSA_Limit = '$' + TFSA_Limit.toFixed(2); //Editing of initial TFSA limit
        console.log(TFSA_Limit_Actual);  //console
        TFSA_Limit_Actual = '$' + TFSA_Limit_Actual.toFixed(2);           //Rounds to 2 decimals
        console.log(Next_TFSA_Limit_Actual);  //console
        Next_TFSA_Limit_Actual = '$' + Next_TFSA_Limit_Actual.toFixed(2); //Rounds to 2 decimals


        //==========================
        //Output values to boxes
        $("#output_MaxTFSA").val(TFSA_Limit);
        $("#output_TFSAlimit").val(TFSA_Limit_Actual);
        $("#output_TFSAfuture").val(Next_TFSA_Limit_Actual);
        //==========================
        //==========================
    });
});

function isNumber(obj)  //Checks for non numeric characters the obj supplied
{
    if (obj.match(/[^.\d]/)) {
        sweetAlert({
            title: "Unacceptable Inputs",
            text: "Your number inputs cannot contain letters, symbols, or commas.\nPlease remove them.",
            type: "error",
        });
        return "error";
    }
};