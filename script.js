

const invite = document.getElementById("mainInvite");

// switch invite background images

document.getElementById("inviteOne").addEventListener("click", () => {
  invite.src = "images/invite-design-1-optim.gif";
});

document.getElementById("inviteTwo").addEventListener("click", () => {
  invite.src = "images/invite-design-2-optim.gif";
});

document.getElementById("inviteThree").addEventListener("click", () => {
  invite.src = "images/invite-design-3.gif";
});

// live type functions

function livetype() {
  let text = document.getElementById("input-name1").value;
  document.getElementById("inputNameOne").innerText = text;

  let text2 = document.getElementById("input-name2").value;
  document.getElementById("inputNameTwo").innerText = text2;

  let message = document.getElementById("input-message1").value;
  document.getElementById("inputMessageOne").innerText = message;

  let message2 = document.getElementById("input-message2").value;
  document.getElementById("inputMessageTwo").innerText = message2;

  let date = document.getElementById("input-date").value;
  document.getElementById("inputDate").innerText = date;

  let time = document.getElementById("input-time").value;
  document.getElementById("inputTime").innerText = time;

  let location = document.getElementById("input-location").value;
  document.getElementById("inputLocation").innerText = location;
}

// invite style selector

function changeStyle(invite) {
  if (invite == "invite1") {
    document.getElementById("invite-image").className = "style1";
	  document.getElementById("inputMessageOne").style.color = "#ffffff";
	  document.getElementById("inputDate").style.color = "#ffffff";
	  document.getElementById("inputTime").style.color = "#ffffff";
	  document.getElementById("inputLocation").style.color = "#ffffff";
  }

  if (invite == "invite2") {
    document.getElementById("invite-image").className = "style2";
	  document.getElementById("inputMessageOne").style.color = "#917773";
	  document.getElementById("inputDate").style.color = "#917773";
	  document.getElementById("inputTime").style.color = "#917773";
	  document.getElementById("inputLocation").style.color = "#917773";
  }

  if (invite == "invite3") {
    document.getElementById("invite-image").className = "style3";
	  document.getElementById("inputMessageOne").style.color = "#cb8d91";
	  document.getElementById("inputDate").style.color = "#cb8d91";
	  document.getElementById("inputTime").style.color = "#cb8d91";
	  document.getElementById("inputLocation").style.color = "#cb8d91";
  }
}
