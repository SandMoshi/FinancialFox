/*

Copyright 2016 - www.FinancialFox.ca - Created by SandM

This is the Javacript and Jquery code for the provincial income app. All the scripting required should be located in just this file.

*/


//--------------------
  //This will make sure only 1 checkbox is selected (deselects others)
    $("input[name='paytype1']").change(function(){
      //Makes all the checkboxes into 1 group
      var group = "input[name='paytype1']";
      //If you select one, it deselects the others in the group
      if($(this).is(':checked')){
        $(group).not($(this)).attr("checked",false); //unchecks others  
      };
    });
  //----
    $("input[name='paytype2']").change(function(){
      //Makes all the checkboxes into 1 group
      var group = "input[name='paytype2']";
      //If you select one, it deselects the others in the group
      if($(this).is(':checked')){
        $(group).not($(this)).attr("checked",false); //unchecks others  
      };
    });
//--------------------
   //Initialize all the required variables
   $("#calculate").on("click", function() {
      var Province1;
      var Province2;
      var Income1;
      var Income2;
      var PayType1;
      var PayType2;
      var TotalTaxes1;
      var TotalTaxes2;
      var NetPay1;
      var NetPay2;
    //--------------------
    //Get the values from the fields
     Province1 = $("select[name=province1]").val();
     Province2 = $("select[name=province2]").val();
     Income1 = $("input[name=income1]").val();
     Income2 = $("input[name=income2]").val();
     PayType1 = $("input[name='paytype1']:checked").val();
     PayType2 = $("input[name=paytype2]:checked").val();
     TotalTaxes1 = $("output[name=taxes1]").val();
     TotalTaxes2 = $("output[name=taxes2]").val();
     NetPay1 = $("output[name=netincome1]").val();
     NetPay2 = $("output[name=netincome2]").val();
     

       console.log(Province2);
       console.log(Province1);
       console.log(Income1);
       console.log(PayType1);
       console.log(PayType2);
/*       console.log();
       console.log();*/     
    //--------------------
      //Make sure the required fields are filled
      //----- Same Province
        if (Province1 == Province2){
			 swal({   title: "Provinces are the Same",   text: "You have selected the same province for each job offer. Your tax rate will be the same.",   type: "error",   showCancelButton: false,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Okay",   closeOnConfirm: true });
			 
			 throw new Error("Provinces Should not be the same");
		  };
      //----- Income
		  if (Income1 == 0 &&  Income2 == 0){
			 swal({   title: "Income Required",   text: "You are required to enter at least one income",   type: "error",   showCancelButton: false,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Okay",   closeOnConfirm: true });
			 
			 throw new Error("Both Income Inputs were blank");
		  };
      //----- Checkboxes
		  if (Income1 >0 && PayType1 == undefined){
				swal({   title: "Income Type Required",   
						   text: "Please select salary or hourly for each income entered.",   
						   type: "error",   
						   showCancelButton: false,   
						   confirmButtonColor: "#DD6B55",   confirmButtonText: "Okay",   
						   closeOnConfirm: true });
		  
			 throw new Error("Both Income Inputs were blank")}
	  
		  else if (Income2 > 0 &&  PayType2 == undefined){
				swal({   title: "Income Type Required",   
						text: "Please select salary or hourly for each income entered.",   
						type: "error",   
						showCancelButton: false,   
						confirmButtonColor: "#DD6B55",   
						confirmButtonText: "Okay",   
						closeOnConfirm: true });

				throw new Error("Both Income Inputs were blank")};
   });

//--------------------
//--------------------
//--------------------
  //This will make the middle section appear once Calculate is clicked
  $("#calculate").on("click", function(){
    if ( $("#bottom").is(":hidden")){
        $("#window").css("margin-top","14vh");
        $("#bottom").slideDown("slow");
    }
	 
  });

//--------------------




//This will make the disclaimer popup
   document.getElementById("Disclaimer").onclick = function () {
       sweetAlert("", "This is an unofficial calculator, it is the user's responsibility to ensure the calculations are accurate.\n\nThe user is responsible for confirming the accuracy of this program's results. It is the user's responsibility to verify the taxes they will owe with the CRA (Canada Revenue Agency) before making any decisions. This tool is meant to be used as an educational tool only. From time to time, this application may become outdated as the tax-laws change. It is the user's responsibilty to double check the numbers given by this tool.\n\nThis tool does not take into account rebates, grants, spousal income, etc.\n\nBy using this website and all the tools and information found within, the user agrees that FinancialFox.ca and it's operators are not responsible or liable for anything.\n\nCreated for www.financialfox.ca \u00A9 2016")
   };
//----------------------------