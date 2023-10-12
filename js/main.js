header.style = "display: none;";

var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var password = "2ur2nr2irn2inr312355d";
var commands = [];

whois = [
  "<br>",
  "Moshi mos, Melvin Jones Repol desu!",
  "I'm a Software Engineer with experience in Web Development, SEO, Data Analyst and Computer Troubleshooting. <br>The creator of Webvium. A Self Taught Programer.<br><a href=\"https://mrepol742.github.io/?ref=mrepol742.me\" target=\"blank\">https://mrepol742.github.io</a>",
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

webvium = [
  "<br>",
  "<b>The Project Webvium</b>",
  "<br>Webvium<br>A Project that aims to be the lightest, fastest, secured, private <br>and full-featured android web browser. Programmed and design from Scratch.<br>stable: <a href=\"https://mrepol742.github.io/webvium/?ref=mrepol742.me\" target=\"blank\">https://mrepol742.github.io/webvium/</a><br>dev: <a href=\"https://mrepol742.github.io/webviumdev/?ref=mrepol742.me\" target=\"blank\">https://mrepol742.github.io/webviumdev/</a>",
  "<br>Webvium Search<br>Find information quickly and easily, and browse the Internet securely with Webvium Search.<br>live: <a href=\"https://mrepol742.github.io/search?ref=mrepol742.me\" target=\"blank\">https://mrepol742.github.io/search/</a>",
  "<br>Webvium VPN<br>Inspired from Webvium, Webvium VPN is a lightweight android VPN <br> app focuses in speed, simplicity, security and privacy.<br><a href=\"https://mrepol742.github.io/webviumvpn/?ref=mrepol742.me\" target=\"blank\">https://mrepol742.github.io/webviumvpn/</a>",
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whois</span>         - Who am i?',
  '<span class="command">social</span>        - Link tree',
  '<span class="command">secret</span>        - Find the Password',
  '<span class="command">projects</span>      - View projects',
  '<span class="command">repo</span>          - View repositories',
  '<span class="command">webvium</span>       - The project webvium',
  '<span class="command">webvium -s &lt;query></span><br>              - Webvium Search',
  '<span class="command">webvium -s -d &lt;query></span><br>              - Webvium Search Dev',
  '<span class="command">history</span>       - View command history',
  '<span class="command">gif</span>           - Show random gif',
  '<span class="command">trophy</span>        - Show github trophy',
  '<span class="command">trophy &lt;username></span><br>              - Show github trophy of a given github account',
  '<span class="command">stat</span>          - Show github stats',
  '<span class="command">stat &lt;username></span><br>              - Show github stats of a given github account',
  '<span class="command">stat -a &lt;username></span><br>           - Show github stats of a given github account',
  '<span class="command">stat -p</span>       - Show github stats with private contributions',
  '<span class="command">stat 2021</span>     - Programming stat for 2021',
  '<span class="command">lang</span>          - Most used languages',
  '<span class="command">lang &lt;username></span><br>              - Most used languages of a given github account',
  '<span class="command">lang -f</span>       - Most used languages by file size',
  '<span class="command">wakatime</span>      - Programming Stats',
  '<span class="command">streak</span>        - Streak Stats',
  '<span class="command">streak &lt;username></span><br>              - Streak Stats of a given github account',
  '<span class="command">spotify</span>       - Recent played songs',
  '<span class="command">cont</span>          - Contributions Graph',
  '<span class="command">contv2</span>       - Contributions Graph 2',
  '<span class="command">cont &lt;username></span><br>              - Contributions Graph of a given github account',
  '<span class="command">time</span>          - Total time i coded on this terminal',
  '<span class="command">qrcode &lt;query></span><br>              - Generate QR Code',
  '<span class="command">user</span>          - Show user agent',
  '<span class="command">sourcecode</span>    - View terminal source codes',
  '<span class="command">ip</span>            - Show IP Address',
  '<span class="command">help</span>          - Show help for a command',
  '<span class="command">clear</span>         - Clear terminal',
  '<span class="command">banner</span>        - Display the header',
  '<span class="command">exit</span>          - Close the terminal',
  '<span class="command">new</span>           - Open new terminal',
  '<span class="command">new -w</span>        - Open new terminal in new Window',
  '<span class="command">restart</span>       - Restart terminal',
  '<span class="command">license</span>       - Terminal license',
  "<br>",
];

banner = [
  '<h1>Melvin Jones \'Mj\' Repol</h1>',
  '<p class="color2">Software Engineer | Full Stack Web Developer | SEO | PWA | Arduino</p>',
  "<p class=\"color2\">use <span class=\"command\">\"help\"</span> for command list.</p>",
];

function $(elid) {
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
cursor = $("cursor");
cursor.style.left = "0px";
}

function nl2br(txt) {
return txt.replace(/\n/g, '');
}

function typeIt(from, e) {
e = e || window.event;
var w = $("typer");
var tw = from.value;
if (!pw){
  w.innerHTML = nl2br(tw);
}
}

function moveIt(count, e) {
e = e || window.event;
var keycode = e.keyCode || e.which;
if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
  cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
} else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
  cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
}
}

function alert(txt) {
console.log(txt);
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
          if (reg.installing) {
              console.log("Service worker installing");
          } else if (reg.waiting) {
              console.log("Service worker installed");
          } else if (reg.active) {
              console.log("Service worker active");
          }
      })
      .catch((err) => {
          console.error("Service worker failed: ", err);
      });
}


setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cYou hacked my password!😠",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - I wonder what it does?🤔", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("[arch@mrepol742 ~/ ] >> " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  if (cmd.startsWith("webvium -s")) {
      let data = cmd.split(" ")[2];
      addLine("<span class=\"inherit\">searching " + data + "...</a>");
      newTab("https://mrepol742.github.io/search?q=" + data);
  } else if (cmd.startsWith("trophy ")) {
      let data = cmd.split(" ")[1];
      addLine("<span class=\"inherit\">showing Github Trophy for github account user https://github.com/" + data + "...</a>");
      loopLines(["<img alt=\"Github Trophy\" src=\"https://github-profile-trophy.vercel.app/?username=" + data + "&theme=gruvbox\">"], "color2 margin", 80);
  } else if (cmd.startsWith("lang ")) {
      let data = cmd.split(" ")[1];
      addLine("<span class=\"inherit\">showing Language Stats for github account user https://github.com/" + data + "...</a>");
      loopLines(["<img alt=\"Language Stats\" src=\"https://github-readme-stats.vercel.app/api/top-langs/?username=" + data + "&layout=compact&include_all_commits=true&&count_private=true&langs_count=20&theme=gruvbox\">"], "color2 margin", 80);
  } else if (cmd.startsWith("streak ")) {
      let data = cmd.split(" ")[1];
      addLine("<span class=\"inherit\">showing Streak Stats for github account user https://github.com/" + data + "...</a>");
      loopLines(["<img alt=\"Streak Stats\" src=\"https://streak-stats.demolab.com/?user=" + data + "&theme=gruvbox\">"], "color2 margin", 80);
  } else if (cmd.startsWith("cont ")) {
      let data = cmd.split(" ")[1];
      addLine("<span class=\"inherit\">showing Contribution Graph for github account user https://github.com/" + data + "...</a>");
      loopLines(["<img alt=\"Contribution Graph\" src=\"https://mrepol742-activity-graph.herokuapp.com/graph?username=" + data + "&theme=github&hide_border=true\">"], "color2 margin", 80);
    } else if (cmd.startsWith("stat -a")) {
      let data = cmd.split(" ")[1];
      addLine("<span class=\"inherit\">showing Github Stat for github account user https://github.com/" + data + "...</a>");
      loopLines(["<img alt=\"Github Stat\" src=\"https://metrics.lecoq.io/" + data + "\">"], "color2 margin", 80);
  
    } else if (cmd.startsWith("stat ")) {
      let data = cmd.split(" ")[1];
      addLine("<span class=\"inherit\">showing Github Stat for github account user https://github.com/" + data + "...</a>");
      loopLines(["<img alt=\"Github Stat\" src=\"https://github-readme-stats.vercel.app/api?username=" + data + "&show_icons=true&count_private=true&theme=gruvbox&include_all_commits=true\">"], "color2 margin", 80);
  
  } else if (cmd.startsWith("qrcode ")) {
      let data = cmd.split(" ")[1];
      addLine("<span class=\"inherit\">showing generated QRCode for " + data + "...</a>");
      loopLines(["<img alt=\"QRCode\" src=\"https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=" + data + "\">"], "color2 margin", 80);
  } else if (cmd.startsWith("contv2")) {
      loopLines(['<img alt="\'Contributions 2\' Please refresh the page if the graph didnt show up" src="https://github.com/mrepol742/mrepol742/blob/master/profile-3d-contrib/profile-south-season-animate.svg">'], "color2 margin", 80);
  } else {
  switch (cmd.toLowerCase()) {
    case "repo":
      addLine("<span class=\"inherit\">opening repositories...</a>");
      newTab("https://github.com/mrepol742?tab=repositories");
      break;
    case "sourcecode":
      addLine("<span class=\"inherit\">opening terminal repository...</a>");
      newTab("https://github.com/mrepol742/terminal");
      break;
    case "wakatime":
      addLine("<span class=\"inherit\">opening wakatime...</a>");
      newTab("https://wakatime.com/@mrepol742");
      break;
    case "stat 2021":
      addLine("<span class=\"inherit\">opening programming stats 2021...</a>");
      newTab("https://mrepol742.github.io/programming-stats/2021");
      break;
    case "user":
      addLine("<span class=\"inherit\">viewing your user browser agent...</a>");
      newTab("https://mrepol742.github.io/useragent/");
      break;
    case "ip":
      addLine("<span class=\"inherit\">viewing your internet ip address...</a>");
      newTab("https://mrepol742.github.io/viewip/");
      break;
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "webvium":
      loopLines(webvium, "color2 margin", 80);
      break;
    case "trophy":
      loopLines(['<img alt="Github Trophy" src="https://github-profile-trophy.vercel.app/?username=mrepol742&theme=gruvbox">'], "color2 margin", 80);
      break;
    case "stat":
      loopLines(['<img alt="Github Stats" src="https://github-readme-stats.vercel.app/api?username=mrepol742&show_icons=true&count_private=true&theme=gruvbox&include_all_commits=true">'], "color2 margin", 80);
      break;
    case "stat -p":
      loopLines(['<img alt="Github Stats with Private Contributions" src="https://mrepol742.github.io/github-stats/generated/overview.svg">'], "color2 margin", 80);
      break;
    case "lang":
      loopLines(['<img alt="Most Used Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mrepol742&layout=compact&include_all_commits=true&&count_private=true&langs_count=20&theme=gruvbox">'], "color2 margin", 80);
      break;
    case "lang -f":
      loopLines(['<img alt="Most Used Languages by File Size" src="https://mrepol742.github.io/github-stats/generated/languages.svg">'], "color2 margin", 80);
      break;
    case "streak":
      loopLines(['<img alt="\'Streak Stats\' Please refresh the page if the stats didnt show up" src="https://streak-stats.demolab.com/?user=mrepol742">'], "color2 margin", 80);
      break;
    case "cont":
      loopLines(['<img alt="\'Contributions\' Please refresh the page if the graph didnt show up" src="https://mrepol742-activity-graph.herokuapp.com/graph?username=mrepol742&theme=github&hide_border=true">'], "color2 margin", 80);
      break;
    case "time":
      loopLines(['<img alt="wakatime" src="https://wakatime.com/badge/user/8ad4afa2-1a56-40d1-a949-4663473915b6/project/a428bb67-a8c9-4373-9398-e7c1a16fbe2c.svg">'], "color2 margin", 80);
      break;
    case "spotify":
      loopLines(['<img alt="Spotify" src="https://spotify-recently-played-readme.vercel.app/api?user=7xx9e7hwq1qyown0m4ut78pcz&count=10&unique=true">'], "color2 margin", 80);
      break;
    case "gif":
      loopLines(['<img alt="Detective Conan" src="https://mrepol742-gif-randomizer.vercel.app/api/" /> '], "color2 margin", 80);
      break;
    case "trophy":
      loopLines(['<img alt="Detective Conan" src="https://mrepol742-gif-randomizer.vercel.app/api/" /> '], "color2 margin", 80);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "social":
      addLine("<span class=\"inherit\">opening link tree...</a>");
      newTab("https://mrepol742.github.io/link-tree/?utm_medium=social&utm_source=mrepol742.me");
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      addLine("<span class=\"inherit\">opening projects...</a>");
      newTab("https://mrepol742.github.io#projects");
      break;
    case "password":
      addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    
    case "new":
      newTab("https://mrepol742-terminal.netlify.app");
      break;
    case "new -w":
      window.open("https://mrepol742-terminal.netlify.app", "", "width=1200, height=1200");
      break;
    case "exit":
      var confirm_result = confirm("Are you sure you want to quit?");
      if (confirm_result == true) {
        window.close();
      }
      break;
    case "restart":
      location.reload();
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "license":
      addLine("<span class=\"inherit\">opening license...</a>");
      newTab("https://raw.githubusercontent.com/mrepol742/terminal/master/LICENSE");
    break;
    default:
      addLine("<span class=\"inherit\">Traceback (most recent call last):<br>" +
      "    File \"&lt;stdin>\", line 1, in <module><br>" +
    "NameError: name '" + cmd + "' is not defined", "error", 100);
      break;
  }
}
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}

document.body.style.background = "url('https://mrepol742.github.io/images/cover.jpg') no-repeat fixed center";
	document.body.style.backgroundSize = "cover";