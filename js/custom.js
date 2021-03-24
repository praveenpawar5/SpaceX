
 let request = new XMLHttpRequest();
 request.open("GET", "https://api.spaceXdata.com/v3/launches?limit=100");
 request.send();
 request.onload = () => {
    console.log(request);
	if(request.status == 200) {
	  console.log(JSON.parse(request.response));
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100')
       .then(response => response.json())
       .then(data => {
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
                        
                    });
                   /* output += '</ul>'
                    document.getElementById("response1").innerHTML = output;  */
		
	   });
	} else {
	    console.log('error ${request.status} ${request.statusText}')
	}
	
 }
 document.getElementById("year2006").addEventListener("click", displayDate);
 document.getElementById("year2007").addEventListener("click", displayDate);
 document.getElementById("year2008").addEventListener("click", displayDate);
 document.getElementById("year2009").addEventListener("click", displayDate);
 document.getElementById("year2010").addEventListener("click", displayDate);
 document.getElementById("year2011").addEventListener("click", displayDate);
 document.getElementById("year2012").addEventListener("click", displayDate);
 document.getElementById("year2013").addEventListener("click", displayDate);
 document.getElementById("year2014").addEventListener("click", displayDate);
	function displayDate() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
	document.getElementById("year2015").addEventListener("click", display);
	function display() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2016')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
	document.getElementById("year2017").addEventListener("click", display2017);
	function display2017() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2017')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
	document.getElementById("year2018").addEventListener("click", display2018);
	function display2018() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2018')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
	document.getElementById("year2019").addEventListener("click", display2019);
	function display2019() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2019')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
	document.getElementById("year2020").addEventListener("click", display2020);
	function display2020() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2020')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
	document.getElementById("lauTrue").addEventListener("click", displaylauTrue);
	function displaylauTrue() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
	document.getElementById("lauFalse").addEventListener("click", displaylauFalse);
	function displaylauFalse() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
	document.getElementById("lanTrue").addEventListener("click", displaylanTrue);
	function displaylanTrue() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
	document.getElementById("lanFalse").addEventListener("click", displaylanFalse);
	function displaylanFalse() {
	  var emptydata = document.querySelector('div.carddiv').innerHTML = "";
	  
	  fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=false')
       .then(response => response.json())
       .then(data => {
	     console.log(data);
	     let output = '';
                    output += '<ul>';
                    data.forEach(function(spacedata) {
                      /*  output += `
                            <li class="list">
                                ${spacedata.mission_name + ':' +spacedata.launch_year}
                            </li>
							`; */
							const img = document.createElement('img');
						  var para = document.createElement("div");
						  var tag = document.createElement("h1");
						  var uls = document.createElement("ul");
						  var btn = document.createElement("button");
						  var node = document.createTextNode(spacedata.mission_name + ' ' + '#' + spacedata.flight_number); 
						  var node1 = document.createTextNode('Mission_id: ' + spacedata.mission_id + '\n');
						  var node2 = document.createTextNode('Launch_year: ' + spacedata.launch_year + '\n');
						  var node3 = document.createTextNode('Successful Launch: ' + spacedata.launch_success + '\n');
						  var node4 = document.createTextNode('Successful Landing: ' + spacedata.launch_landing + '\n');
						  var lis = document.createElement('li');
						  para.classList.add("col-4");
						  para.classList.add("card-bg");
						  para.appendChild(img).setAttribute('src', spacedata.links.mission_patch);
						  img.classList.add("card__image");
						  para.appendChild(tag);
						  tag.appendChild(node); 
						  tag.classList.add("card__title");
						  para.appendChild(uls);
						  uls.appendChild(lis);
						  lis.appendChild(node1);
						  lis.appendChild(node2);
						  lis.appendChild(node3);
						  lis.appendChild(node4);
						  lis.classList.add("lis_style");
						  
						  // append to card__wrapper class
						  var content = document.querySelector('div.carddiv');
						  content.appendChild(para);
						  });
	        });
	}
  /* fetch('https://api.spaceXdata.com/v3/launches?limit=100')
  .then(response => response.json())
  .then(data => console.log(data)) */
