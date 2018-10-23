const prefix = "/";

MPP.client.on(`a`, function(msg) {
	var cmd = msg.a.split(' ')[0].toLowerCase();
    var input = msg.a.substring(cmd.length).trim();

	if (cmd == `djhelp`){
		send(`DJ.U.Bot commands are: /djhelp, /djboom, and /djchatart`);
	}
	if (cmd == `djchatart`){
		send(`DJ.U.Bot chat art commands are:
			/djchatartdog, /djchatartcat, and /djchatartfuck.
			Please do not use any of these if I do not have crown.`
		);
	}
	if (cmd == `djchatartcat`) {
		send(`──────▄▀▄─────▄▀▄`);
		send(`─────▄█░░▀▀▀▀▀░░█▄`);
		send(`─▄▄──█░░░░░░░░░░░█──▄▄`);
		send(`█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█`);
	};
	if (cmd == `djchatartdog`) {
		send(`░▄▀▄▀▀▀▀▄▀▄░░░░░░░░░`);
		send(`░█░░░░░░░░▀▄░░░░░░▄░`);
		send(`█░░▀░░▀░░░░░▀▄▄░░█░█`);
		send(`█░▄░█▀░▄░░░░░░░▀▀░░█`);
		send(`█░░▀▀▀▀░░░░░░░░░░░░█`);
		send(`█░░░░░░░░░░░░░░░░░░█`);
		send(`█░░░░░░░░░░░░░░░░░░█`);
		send(`░█░░▄▄░░▄▄▄▄░░▄▄░░█░`);
		send(`░█░▄▀█░▄▀░░█░▄▀█░▄▀░`);
		send(`░░▀░░░▀░░░░░▀░░░▀░░░`);
	}
	if (cmd == `djchatartfuck`) {
		send(`▒█▀▀▀ ▒█░▒█ ▒█▀▀█ ▒█░▄▀`);
		send(`▒█▀▀▀ ▒█░▒█ ▒█░░░ ▒█▀▄░`);
		send(`▒█░░░ ░▀▄▄▀ ▒█▄▄█ ▒█░▒█`);
	}
	if (cmd == `hi`) {
		send(`Hello ${msg.p.name}! How are you today? Use /djhelp for a list of commands!`);
	}
}

// Message Functions
function send(msg){
	MPP.chat.send(msg);
}
