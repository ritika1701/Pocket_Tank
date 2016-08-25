
function play(){
	var ang=parseInt(document.getElementById('angle').value);
	var vel=parseInt(document.getElementById('velocity').value);
	var weap=parseInt(Math.random()*8+1);
	var ele=document.getElementById('weapon');
	switch(weap){
		case 1: ele.innerHTML="Single Shot";
		break;
		case 2: ele.innerHTML="Machine Gun";
		break;
		case 3: ele.innerHTML="Blow Torch";
		break;
		case 4: ele.innerHTML="Acid Rain";
		break;
		case 5: ele.innerHTML="Magic Wall";
		break;
		case 6: ele.innerHTML="Time Bomb";
		break;
		case 7: ele.innerHTML="Snipper";
		break;
		case 8: ele.innerHTML="Laser";
	    break;
	}    
}
