// create an object

let cards=[
{
	head:"Placement Assured Programs",
	icon:"fa-solid fa-award fa-2xs",
	para1:"We assure 100% Job Guarantee for committed students who completes their tasks periodically.",
	para2:"Secure top Software Development jobs."
},
{
	head:"Career Mentoring",
	icon:"fa-solid fa-id-card fa-2xs",
	para1:"Tailor-made career guidance from industry experts.",
	para2:"Profile building and resume enhancement assistance.."
},
{
	head:"Interview Preparation",
	icon:"fa-solid fa-user-tie fa-2xs",
	para1:"Mock interview sessions to help you crack that technical round",
	para2:"Soft-skill training so that you leave an indelible impression at the interview"
}
]

//create an Element
function elementcreate(cards){

var cardDiv   = document.createElement("div"),
	cardHead  = document.createElement("h"),
	cardIcon  = document.createElement("i"),
	cardPara1 = document.createElement("p1"),
	cardPara2 = document.createElement("p2");

//object assign to Element

	cardHead.innerHTML 	 = cards.head;
	// cardIcon.innerHTML 	 = cards.icon;
	cardPara1.innerHTML  = cards.para1;
	cardPara2.innerHTML = cards.para2;
	
	
//create class name

	cardHead.setAttribute("class","head"),
	cardIcon.setAttribute("class",cards.icon),
	cardPara1.setAttribute("class","para1"),
	cardPara2.setAttribute("class","para2"),
	cardDiv.setAttribute("class","cards"),
	
	console.log(cardHead,cardIcon,cardPara1,cardPara2);

//appendChild

	cardDiv.appendChild(cardHead)
	cardDiv.appendChild(cardIcon)
	cardDiv.appendChild(cardPara1)
	cardDiv.appendChild(cardPara2)
	
	
	console.log(cardDiv);
	var last=document.getElementById("card-list");
	
	last.appendChild(cardDiv)
}
	for (let i=0;i<cards.length;i++){
		elementcreate(cards[i])
	}

		