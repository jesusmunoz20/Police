va.messagingUtil.setOnDataReceivedCallback(updateImageAndLink);
	
function updateImageAndLink(vaMsgObj)
{
	if (vaMsgObj && vaMsgObj.data && vaMsgObj.rowCount === 1) {
		document.getElementById("animal_img").src="./AnimalImages/"+vaMsgObj.data[0][1];
		document.getElementById("target_url").href = "https://en.wikipedia.org/wiki/"+vaMsgObj.data[0][0];
		document.getElementById("target_iframe").src="";
	}
	else {
		document.getElementById("animal_img").src="";
		document.getElementById("target_url").href = "";
		document.getElementById("target_iframe").src="";
	}
}
