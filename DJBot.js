const prefix = "/";

MPP.client.on(`a`, function(msg) {
	var cmd = msg.a.substring(1,msg.a.length);
    var input = msg.a.substring(cmd.length).trim();

	// Non-commands
	if (greetings.indexOf(msg.a.toLowerCase()) > -1) {
		send(`Hello ${msg.p.name}! How are you today? Use /djhelp for a list of commands!`);
		return;
	}

	// Commands
	if(msg.a.startsWith(prefix) == false){
		return;
	}

	if (cmd == `djhelp`){
		send(`DJ.U.Bot commands are:
			/djhelp, /djboom, and /djchatart`
		);
		return;
	}
	if (cmd == `djchatart`){
		send(`DJ.U.Bot chat art commands are:
			/djchatartdog, /djchatartcat, and /djchatartfuck.
			Please do not use any of these if I do not have crown.`
		);
		return;
	}
	if (cmd == `djchatartcat`) {
		send(`──────▄▀▄─────▄▀▄`);
		send(`─────▄█░░▀▀▀▀▀░░█▄`);
		send(`─▄▄──█░░░░░░░░░░░█──▄▄`);
		send(`█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█`);
		return;
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
		return;
	}
	if (cmd == `djchatartfuck`) {
		send(`▒█▀▀▀ ▒█░▒█ ▒█▀▀█ ▒█░▄▀`);
		send(`▒█▀▀▀ ▒█░▒█ ▒█░░░ ▒█▀▄░`);
		send(`▒█░░░ ░▀▄▄▀ ▒█▄▄█ ▒█░▒█`);
		return;
	}
});

// Message Functions
function send(msg){
	MPP.chat.send(msg);
}

var greetings = [`hi`,`hey`,`heya`,`hiya`,`hio`,`hello`,`hyello`,`henlo`,`wassup`,`wasup`,`wazzup`,`wazup`,`sup`];
