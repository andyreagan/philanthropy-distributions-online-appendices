(function() { 
    var authors = [ 
	{
	    name: "William Gottesman",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "wgottes.png",
	    webpage: "",
	    linkedin: "",
	    twitter: "",
	},
	{
	    name: "Andrew Reagan",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "areagan.png",
	    webpage: "http://andyreagan.com",
	    linkedin: "https://www.linkedin.com/pub/andy-reagan/18/a17/2a8",
	    twitter: "andyreagan",
	},
	{
	    name: "Peter Dodds",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "pdodds.png",
	    webpage: "http://www.uvm.edu/~pdodds/",
	    linkedin: "",
	    twitter: "peterdodds",
	},
    ];

    var mainrow = d3.select("#topteamrow");
    //  mainrow.append("div").attr("class","visible-lg col-lg-3");
    //  mainrow.append("div").attr("class","visible-sm visible-md col-sm-3");

    for (var i=0; i<authors.length; i++) {
	// console.log(i);
	// console.log(authors[i].name);
	// var newdiv = mainrow.append("div").attr("class","col-xs-12 col-sm-3 col-lg-2");
	// var divcenter = newdiv.append("center");
	mainrow.append("img").attr("src","images/humans/circles/"+authors[i].image).attr("width","35px").attr("class","topteam");
	// divcenter.append("br");
	// divcenter.append("br");
	// divcenter.append("p").text(authors[i].name);
	// divcenter.append("br");
	// if ( ((i+1) % 2 ) === 0) {
	//     console.log("even");
	//     mainrow.append("div").attr("class","visible-sm visible-md col-sm-3");
	//     mainrow.append("div").attr("class","clearfix visible-sm visible-md");
	//     mainrow.append("div").attr("class","visible-sm visible-md col-sm-3");
	// }
	// if ( ((i+1) % 3 ) === 0) {
	//     console.log("threes");
	//     mainrow.append("div").attr("class","visible-lg col-lg-3");
	//     mainrow.append("div").attr("class","clearfix visible-lg");
	//     mainrow.append("div").attr("class","visible-lg col-lg-3");
	// }
    };
})();



