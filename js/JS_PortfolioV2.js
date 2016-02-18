// JavaScript source code
$(document).ready(function () {
    $("#button_calculate").click(function main() {
        //Initialize Variables and Arrays
        var Total_Money = 0;
        var totalpercent = 0;
        var Added_Investment = 0;
        var Total_Money = 0;        //Total portfolio value + awaiting investment amount 
        var BList = [];             //contains values fom Col B
        var CList = [];             //contains values from Col C
        var EList = [];             //contains values from Col E
        var Etemp = 0;              //Placeholder variable
        //Get Inputs from Boxes
        $("input.item_percent").each(function () {          //Grabs the values from Col B
            //alert($(this).val());
            if (!$(this).val()) {
                //sweetAlert({
                //    title: "Did you use a symbol/text in the Target % boxes?",
                //    text: "Numbers within text may be read.",
                //    type: "warning",
                //    showCancelButton: true,
                //    confirmButtoncolor: "#008080",
                //    confirmButtonText: "Continue",
                //    closeOnConfirm: true
                //});
            $(this).val(0);
            }
            BList.push($(this).val());
        });
        //-------------------------------------
        $("input.item_value").each(function () {            //Grabs the values from Col C
            if (!$(this).val()) {
                $(this).val(0);
            }
            CList.push($(this).val());
        });
        //-------------------------------------
        Added_Investment = $("#item_investing").val();    //Assigns Added Investment a value
        if (!$("#item_investing").val())
            {
              Added_Investment = 0
        }
        ///------------------------------------
        $.each(CList, function () {
            Total_Money += parseFloat(this);        //Sums Col C
        });
        Total_Money += parseFloat(Added_Investment); //Adds investment amount to Col C sum
        ///------------------------------------
        $.each(BList, function () {
            totalpercent += parseFloat(this);       //Sums the percents
            if (parseFloat(this) < 0) {             //Error if $ is negative
                sweetAlert({
                     title: "Your Target Percent cannot be negative!",
                     text:  'Please fix your "Target %" Values',
                     type:  "error",
                })
                return;                              //exits
            }
        });
        if (totalpercent < 100) {
            percentmissing = 100 - totalpercent;  //Calculates missing percent
            percentmissing = percentmissing.toFixed(2); //Rounds to 2 decimals
            sweetAlert({
                title: "Your target percentages don't add up to 100%.",
                text: "You are missing " + percentmissing + " percent.",
                type: "error",
            })
            return;                             //exits
        }
        if (totalpercent > 100) {
            percentmissing = totalpercent - 100;   //Calculates missing percent
            percentmissing = percentmissing.toFixed(2); //Rounds to 2 decimals
            sweetAlert({
                title: "Your target percentages total more than 100%.",
                text: "You need to remove " + percentmissing + " percent.",
                type: "error",
            })
            return;                             //exits
        }
        ///------------------------------------
        ///Make sure no negative values exist in Col C and Added_Invesment
        $.each(CList, function () {
            if (parseFloat(this) < 0) {
                sweetAlert({
                    title: "You cannot have negative values!",
                    text: "Please make sure each portfolio item has a postive value.",
                    type: "error",
                })
                return;                         //exits
            }
        });
        ///------------------------------------
        ///Make sure Added_Invesment is positive, otherwise only give WARNING
            if (Added_Investment < 0) {
                sweetAlert({
                    title: "Your Added Investment is Negative!",
                    text: "This means you want to remove money from your portfolio.",
                    confirmButtonText: "Okay.",
                    showCancelButton: false,
                    type: "warning",
                });
            }
            if (Total_Money < 0) {
                throw (
                sweetAlert({
                    title: "Your Portfolio has Negative VALUE!",
                    text: "Your portfolio cannot be worth less than $0...",
                    confirmButtonText: "Okay.",
                    showCancelButton: false,
                    type: "error",
                }));
            }
        ///------------------------------------
        /// CALCULATE THE FINAL VALUES
        $.each(BList, function (index) {
            Etemp = (parseFloat(this) * Total_Money / 100) - CList[index];
            Etemp = Etemp.toFixed(2);     //Rounds to 2 decimals
            if (Etemp < 0) {
                Estr = Etemp.toString(); //Convert to string
                var Enew = Estr.substring(0, 1) + '$' + Estr.substring(1, Estr.length);
            }
            else {
                Estr = Etemp.toString(); //Convert to string
                var Enew = '$' + Estr;
            }
            EList.push(Enew);
        });
        ///------------------------------------
        /// OUTPUT FINAL VALUES TO CELLS
        $("input.item_buysell").each(function (index) {
            $(this).val(EList[index]);
        });
        ///------------------------------------
    });
});

