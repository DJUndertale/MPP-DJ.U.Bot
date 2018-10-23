const prefix = "/";

MPP.client.on(`a`, function(msg) {
	var cmd = msg.a.substring(1,msg.a.length);
    var input = msg.a.substring(cmd.length).trim();

	// Non-commands
	if (greetings.some(function(v) { return msg.a.toLowerCase().indexOf(v) >= 0; })) {
		send(`Hello ${msg.p.name}! How are you today? Use /djhelp for a list of commands!`);
	}

	// Commands
	if(cmd.startsWith(prefix) == false){
		return;
	}

	if (cmd == `djhelp`){
		send(`DJ.U.Bot commands are:
			/djhelp, /djboom, and /djchatart`
		);
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
	}
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
});

// Message Functions
function send(msg){
	MPP.chat.send(msg);
}

var greetings = [`hi`,`hey`,`heya`,`hiya`,`hio`,`hello`,`hyello`,`henlo`,`wassup`,`wasup`,`wazzup`,`wazup`,`sup`];
