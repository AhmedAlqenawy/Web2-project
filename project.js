//localStorage.clear();
var x=document.getElementById("id1");
var ch=['A']; var item=[];
var ind=[false];
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var butele=document.getElementById("generate");
var interval;
var myVar = setInterval(myTimer,50000);
function myTimer() {
	localStorage.clear();
}
window.onload=function(){

	for(var i =1;i<txt.length;i++)
{
	ind[i]=false;
	ch[i]=txt[i];
}
 item["A"]="Apple"; item["B"]="Banana"; item["C"]="Cat";
 item["D"]="Dog"; item["E"]="Elephant"; item["F"]="Fish"; 
 item["G"]="Giraffe"; item["H"]="Horse"; item["I"]="Ice cream";
 item["J"]="Jam"; item["K"]="Kangaroo"; item["L"]="Lion"; 
 item["M"]="Mouse"; item["N"]="Nest"; item["O"]="Owl"; 
 item["P"]="Penguin"; item["Q"]="Quail";item["R"]="Rabit";
 item["S"]="Spider"; item["T"]="Tigger"; item["U"]="Umbrella"; 
 item["V"]="Violin"; item["W"]="Whale"; 
 item["X"]="Xylophone"; item["Y"]="Yellow"; item["Z"]="Zebra";
	x.focus();
//console.log(ch + " "+ind);

	//localStorage.setIteam("load", template(e));
	localStorage['load']=new Date();
}
window.onunload=function(){
	localStorage['unload']=new Date();
}

function getrandomint() {
  return Math.floor((Math.random() * 26)+0 );
}
 


 var ul = document.getElementsByTagName("div")[1];
  ul.addEventListener("click", function(e){
	  	if(localStorage[e.target.value]=="" ||localStorage[e.target.value]==undefined )
			localStorage[e.target.value]=new Date();
		else 
				localStorage[e.target.value]+="	and "+new Date();
		
	  	
		if(e.target.value!=null){
			e.target.setAttribute("class","yy");	
		var imgshow=document.getElementById("imgshow");
		imgshow.innerHTML="<img src='"+e.target.value+".PNG' height='300px' width='300px' align='center'> " + "<h2>"+item[e.target.value]+"</h2>";
		imgshow.style.width="300px";
		imgshow.style.height="300px";}
		
  });




//  Genetate buttons
butele.addEventListener("click",function(e){
	
	var box=document.getElementById("id1");
	var v=parseInt(box.value);
	var div=document.getElementById("page");
	div.innerHTML="";
	imgshow.innerHTML="";
	for(var i =0;i<txt.length;i++)
	{
		ind[i]=false;
	}
	if(v<=26){
	for(var i = 0;i<v;)
	{
		var rund = getrandomint();
		if(ind[rund]==false)
		{
			ind[rund]=true;
			i++;
			div.innerHTML+="<input type='button' value ='"+ch[rund]+"' style='padding:20px;'> \t\t" ;
		}
	}		
	}
	else{
		div.innerHTML="Enter number between 1 to 26";
	}

});

function template(e){
	var DT=new Date();
	this.target=e.target;this.type=e.type;this.event=DT;
	this.fullDate=String(e.type)+'   '+String(e.target)+String(DT);
}
