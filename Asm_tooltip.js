define( ['jquery',"qlik", "text!./Asm_tooltip.ng.html", "css!./Asm_tooltip.css"],
	function ( qlik, template ) {
		"use strict";
			return {
			template: template,
			initialProperties: {
				qHyperCubeDef: {
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [{
						qWidth: 2,
						qHeight: 50
					}]
				}
			},
			definition: {
				type: "items",
				component: "accordion",
				items: {
					addons : {
                    uses : "addons",
                    items : {
                        tooltip : {
                            type  : "string",
                            label : "Tool Tip",
                            ref   : "tooltip",
                      defaultValue: "Tool Tip"
                        }
                    }
                }
				}
			},
			support: {
				export: true
			},
			
 paint: function ( $element, layout ) {
              var myHTML='<div>';
			  
			  myHTML+='<button type="button" class="btn btn-info btn-lg btn-block myButton" id="myBtn">Help</button>';                      
myHTML+='<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
  myHTML+='<div class="modal-dialog" role="document">';
    myHTML+='<div class="modal-content">';
      myHTML+='<div class="modal-header">';
        myHTML+='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        myHTML+='<h4 class="modal-title" id="myModalLabel" style="text-align:center;"><img src="http://localhost:4848/extensions/Asm_tooltip/help.png" style="float:left;">What is this HCP Summary about?</h4>';
      myHTML+='</div>';
	 		  myHTML+='<div class="modal-body" style="max-height:300px;overflow:auto !important">';
			myHTML+='<div class="tabbed">';
myHTML+='<input name="tabbed" id="tabbed1" type="radio" checked>';
myHTML+='<section>';
myHTML+='<h1>';
myHTML+='<label for="tabbed1">High Rank Difference</label>';
myHTML+='</h1>';
myHTML+='<div>';
myHTML+='<img src="http://localhost:4848/extensions/Asm_tooltip/high_rank.PNG" align="left">';
myHTML+='<p style="text-align: justify;text-justify: inter-word;">This chart contains the the 10 HCP with the highest difference between the TRx Market Rank and the TRx Product Rank and Product Rank less than Market Rank.</p>';
myHTML+='</div>';
myHTML+='</section>';
myHTML+='<input name="tabbed" id="tabbed2" type="radio">';
myHTML+='<section>';
myHTML+='<h1>';
myHTML+='<label for="tabbed2">High Share Growth</label>';
myHTML+='</h1>';
myHTML+='<div>';
myHTML+='<img src="http://localhost:4848/extensions/Asm_tooltip/large_growth.PNG" align="left">';
myHTML+='<p style="text-align: justify;text-justify: inter-word;">This chart contains the 10 HCP having Highest TRx Share Growth for current QTR vs. same QTR last year.This is non target.</p>';
myHTML+='</div>';
myHTML+='  </section>';
myHTML+='<input name="tabbed" id="tabbed3" type="radio">';
myHTML+='<section>';
myHTML+='<h1>';
myHTML+='<label for="tabbed3">Targeted but declining</label>';
myHTML+='</h1>';
myHTML+='<div>';
myHTML+='<img src="http://localhost:4848/extensions/Asm_tooltip/decline_hcp.PNG" align="left">';
myHTML+='<p style="text-align: justify;text-justify: inter-word;">This chart contains the top 10 Targeted HCP with MAT TRx Product Rank between 1 to 5 who have the highest drop in their MAT Product Rank.This is targeted but declining.</p>';
myHTML+='</div>';
myHTML+='  </section>';
myHTML+='</div>';
    myHTML+='</div>';
  myHTML+='</div>';
myHTML+='</div>';      

                myHTML += "<script>var modal = document.getElementById('myModal');"+
                    'window.onclick = function(event){if(event.target==modal){modal.style.display = "none";}}</script>'

                $element.empty();
                $element.append( myHTML );

                $element.find('#myBtn').on('click', function() {
                    $('.qv-object').css("z-index", "unset")
                    $element.find('#myModal').css("display", "block")
                });
                $element.find('.close').on('click', function() {
                    $element.find('#myModal').css("display", "None")
                    $('article.qv-object').css("z-index", "1")
                });

            }
		};

	} );
