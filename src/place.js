
// Define an object that maps the selected place option to its corresponding data
const placeData = {
    Tunis: {
      name: "Tunis",
      image1: "https://www.planetware.com/wpimages/2022/02/tunisia-top-attractions-places-to-visit-tunis-medina.jpg",
      description: "Although Tunisia's capital is mostly visited to view the two major tourist attractions of Carthage and the Bardo Museum, the medina district of central Tunis is well worth spending an extra night in the city for. The winding alleys of this old town neighborhood, with their souks (shopping streets), mosques, and monuments, are fun to explore. Don't miss visiting the rooftop of the Umayyad-era Olive Tree Mosque, the medina's most famous landmark, while wandering the medina, and make sure to seek out the clutch of small museums and restored dars (medina mansions) hidden within the narrow lanes. If you're short on time, Dar Hussein Palace is the top pick."
    },
    Djerba: {
      name: "Djerba Island",
      image1: "https://www.planetware.com/photos-large/TUN/tunisia-djerba-resort-beach.jpg",
      description: "If you're looking for the picture-perfect beach escape, then the island of Djerba checks all the right boxes.The island town of Houmt Souk is the main point of interest off the beach, with an old town district that is a muddle of whitewashed houses. Houmt Souk's shopping is an attraction in itself, with plenty of handicraft vendors for browsing and haggling opportunities off the beach.But it's those sandy strips of shoreline out of town that are the island's most popular highlight. Pristine and trimmed by date palms, the beaches are relaxing, get-away-from-it-all settings where summer daydreams are made."
    },
    Hammamet: {
      name: "Hammamet",
      image1: "https://www.planetware.com/photos-large/TUN/tunisia-hammamet-sea-view.jpg",
      description: "Hammamet is all about the beach. This laid-back town on the Cap Bon Peninsula is Tunisia's top sun-and-sea resort, dedicated to easygoing beach vacations. The town itself, with its pretty white buildings set beside a bright blue sea, has bundles of Mediterranean charm, which woos all who come to sunbathe on the soft, white sand. For many who come here, off-the-beach pursuits total up to nothing more strenuous than gentle strolls in the medina (old town) and a spot of shopping in the restored old town souks. It's a no stress kind of place that sums up the pleasures of Tunisia in one pretty package."
    },
    Sousse: {
      name: "Sousse",
      image1: "https://www.planetware.com/wpimages/2020/09/tunisia-top-attractions-sousse-medina.jpg",
      description: "Overlooked by the mighty fortifications of the ribat and kasbah, the medina in Sousse just begs to be explored.This lovely old town district is a warren of looping lanes, rimmed by whitewashed houses, and a shopping paradise with a tempting selection of ceramics, leatherwork, and metalwork on display.Away from the stalls along the bustling souk streets, the quiet and rambling back alleys, dusted in white and blue, are a charming place to dive in and sample local life."
    },
    Monastir: {
      name: "Monastir",
      image1: "https://www.planetware.com/wpimages/2022/02/tunisia-top-attractions-places-to-visit-ribat-of-monastir.jpg",
      description: "One of Tunisia's most recognizable monuments, the Ribat of Monastir was the earliest fortress built in Tunisia during the 8th-century Abbasid conquest, and one of the earliest in the entirety of North Africa.This sea-fronting fortress is an exceptional example of medieval defensive architecture, with its main features of high crenellated walls, watchtowers, and internal courtyards.For many visitors, the ribat is most famous today because of its use as a film location during the mid-20th century, including its starring role in Monty Python's cult classic Life of Brian.As Monastir is only 23 kilometers southwest from Sousse, the ribat is easily visited on a day trip from the city."
    }
  };
  
  // Add an event listener to the form to handle form submission
  document.getElementById("placeForm").addEventListener("submit", (event) => {
    event.preventDefault(); // prevent default form submission behavior
    const place = document.getElementById("place").value; // get the selected place option
    const placeContainer = document.getElementById("placeContainer"); // get the place container element
    // Create the HTML elements for the selected place data
    const placeName = document.createElement("h2");
    const divideLine = document.createElement("hr");
    placeName.innerText = placeData[place].name;
    const placeImage1 = document.createElement("img");
    placeImage1.src = placeData[place].image1;
    const placeDescription = document.createElement("p");
    placeDescription.innerText = placeData[place].description;
    // Clear the place container and add the selected place data to it
    placeContainer.innerHTML = "";
    placeContainer.appendChild(placeName);
    placeContainer.appendChild(divideLine);
    placeContainer.appendChild(placeImage1);
    placeContainer.appendChild(placeDescription);
  });
  
  