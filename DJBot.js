// ==/UserScript==
MPP.client.on(`a`, function (msg) {
	if (msg.a == `/djhelp`) send(`DJ.U.Bot commands are: /djhelp, /djboom, and /djchatart`);
	if (msg.a == `/djchatart`) send(`DJ.U.Bot chat art commands are: /djchatartdog, /djchatartcat, and /djchatartfuck. Please do not use any of these if I do not have crown.`);
	if (msg.a == `/djchatartcat`) {
		send(`──────▄▀▄─────▄▀▄`);
		send(`─────▄█░░▀▀▀▀▀░░█▄`);
		send(`─▄▄──█░░░░░░░░░░░█──▄▄`);
		send(`█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█`)
	};
	if (msg.a == `/djchatartdog`) {
		send(`░▄▀▄▀▀▀▀▄▀▄░░░░░░░░░`);
		send(`░█░░░░░░░░▀▄░░░░░░▄░`);
		send(`█░░▀░░▀░░░░░▀▄▄░░█░█`);
		send(`█░▄░█▀░▄░░░░░░░▀▀░░█`);
		send(`█░░▀▀▀▀░░░░░░░░░░░░█`);
		send(`█░░░░░░░░░░░░░░░░░░█`);
		send(`█░░░░░░░░░░░░░░░░░░█`);
		send(`░█░░▄▄░░▄▄▄▄░░▄▄░░█░`);
		send(`░█░▄▀█░▄▀░░█░▄▀█░▄▀░`);
		send(`░░▀░░░▀░░░░░▀░░░▀░░░`)};
	if (msg.a == `/djchatartfuck`) {
		send(`▒█▀▀▀ ▒█░▒█ ▒█▀▀█ ▒█░▄▀`);
		send(`▒█▀▀▀ ▒█░▒█ ▒█░░░ ▒█▀▄░`);
		send(`▒█░░░ ░▀▄▄▀ ▒█▄▄█ ▒█░▒█`);
	}
	if (msg.a == `hi`) {
		send(`Hello ${msg.p.name}! How are you today? Use /djhelp for a list of commands!`);
	}
}

// Message Functions
function send(msg){
	MPP.chat.send(msg);
}
