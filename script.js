const games = [

{
id:"gta1",
title:"Grand Theft Auto (1997)",
image:"assets/images/gta1.jpg",
description:"The original top-down GTA that started the legendary franchise.",
details:"Released in 1997, GTA introduced players to open-world crime gameplay."
},

{
id:"gta2",
title:"Grand Theft Auto 2",
image:"assets/images/gta2.jpg",
description:"Expanded the original formula with gangs and reputation.",
details:"Released in 1999."
},

{
id:"gta3",
title:"Grand Theft Auto III",
image:"assets/images/gta3.jpg",
description:"The first fully 3D GTA game.",
details:"Set in Liberty City and revolutionized open-world gaming."
},

{
id:"vc",
title:"Grand Theft Auto: Vice City",
image:"assets/images/vice-city.jpg",
description:"The iconic 1980s-inspired adventure.",
details:"Starring Tommy Vercetti."
},

{
id:"sa",
title:"Grand Theft Auto: San Andreas",
image:"assets/images/san-andreas.jpg",
description:"One of the biggest GTA games ever made.",
details:"CJ returns home to Los Santos."
},

{
id:"lcs",
title:"Liberty City Stories",
image:"assets/images/liberty-city-stories.jpg",
description:"PSP prequel to GTA III.",
details:"Starring Toni Cipriani."
},

{
id:"vcs",
title:"Vice City Stories",
image:"assets/images/vice-city-stories.jpg",
description:"Another PSP classic.",
details:"Victor Vance's rise."
},

{
id:"gta4",
title:"Grand Theft Auto IV",
image:"assets/images/gta4.jpg",
description:"Niko Bellic arrives in Liberty City.",
details:"Powered by Rockstar's RAGE Engine."
},

{
id:"eflc",
title:"Episodes From Liberty City",
image:"assets/images/episodes.jpg",
description:"The Lost and Damned + The Ballad of Gay Tony.",
details:"Standalone expansion."
},

{
id:"cw",
title:"Chinatown Wars",
image:"assets/images/chinatown-wars.jpg",
description:"Nintendo DS classic.",
details:"Returned to a top-down perspective."
},

{
id:"gta5",
title:"Grand Theft Auto V",
image:"assets/images/gta5.jpg",
description:"Michael, Franklin and Trevor.",
details:"One of the best-selling games ever."
},

{
id:"gta6",
title:"Grand Theft Auto VI",
image:"assets/images/gta6.jpg",
description:"The next generation of GTA.",
details:"Returns to Vice City with Lucia and Jason."
}

];

const container=document.getElementById("posts");

games.forEach(game=>{

const article=document.createElement("section");

article.className="card";

article.id=game.id;

article.innerHTML=`

<img src="${game.image}" alt="${game.title}">

<div class="content">

<h2>${game.title}</h2>

<p>${game.description}</p>

<p class="hidden">${game.details}</p>

<button>Read More</button>

</div>

`;

container.appendChild(article);

});

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",()=>{

const text=button.previousElementSibling;

text.classList.toggle("hidden");

button.textContent=text.classList.contains("hidden")

? "Read More"

: "Show Less";

});

});