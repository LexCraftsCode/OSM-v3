// Map data
const markers = [
    {
        location: [38.739397, -9.139291], //Jose Martins Statue
        title: "José Tomás de Sousa Martins",
        description: "The statue of Dr. Sousa Martins is significant because he was a doctor, scientist and humanist. He  worked for the royal family and for the people who were of lower economic status would charge his patients nothing and would often give them money. Due to his generosity and kindness he is a lay saint and people still honor him today.",
        images: ["img/sites/doc1.jpg", "img/sites/doc2.jpg", "img/sites/doc3.jpg", "img/sites/doc4.jpg"],
        link: "./index.html"
    },
    //MARLENA--ADD THE IMAGES (EXTRAS FOR MQP AND ALL FOUR FOR PAVILHAO AND PAI)
    //MARLENA--ADD BLURB FOR  PAVILHAO
    {
        location: [38.729057778035575, -9.151722346378342], //Carlos Lopez Pavilion
        title: "Pavilhão Carlos Lopes",
        description: "This is a test for the first popup modal. Images and other content can be entered here.",
        images: ["https://via.placeholder.com/150"],
        link: "./index.html"
    },
    {
        location: [38.725377657849826, -9.150023458200616], //Marques de Pombal
        title: "Marques de Pombal",
        description: "This garden was one of the places where the Portuguese World Exhibition of 1940 took place, created in the political and Ideological context of the New State (Estado Novoa) to promote the colonial empire. Here, the attempt to recreate the life of African villages marked by colonial presence, where people were brought over explicitly from the colonies to be presented to the Portuguese public.",
        images: ["img/sites/MQP_1.jpg","img/sites/MQP_2.jpg"],
        link: "./index.html"
    },
    {
        location: [38.71508, -9.13880], //Father Paulino
        title: "Pai Paulino",
        description: "The statue of Pai Paulino is not just a representation of one man but a symbol of the enduring spirit of resilience, love, and leadership within the Candomblé religion and the broader Luso-Afro community. It stands as a reminder of the strength found in unity, the importance of cultural heritage, and the power of familial bonds reconstructed through faith and shared history. The olive tree further enhances this symbolism, offering a profound connection to the values Pai Paulino embodied throughout his life.",
        images: ["img/sites/PAI_1.jpg"],
        link: "./index.html"
    },

    //Plaque Marker
    {
        location: [38.722254, -9.140219], //Plaque Marker #1 
        title: "Andresa do Nascimento Pina",
        description: "As the model for the statue of abolitionist Marquês de Sá da Bandeira, Fernanda do Valle, also known as 'Preta Fernanda' was a writer, bullfighter, and overall influencial woman from Cape Verde who significantly impacted Lisbon society and the history of Africans in Portugal. Her life sheds light on the complex social dynamics at the time, providing valuable insights of pioneer African women.",
        images: ["img/plaqueimages/plaque1_edited.jpeg",],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.723655, -9.137317], //Plaque Marker #2 
        title: "Domingos Caldas Barbosa",
        description: "Despite being mixed race and cognizant that his social status was questionable, Domingos Caldas Barbosa was able to climb the ranks of Portuguese high-society and literary circles. His musical compositions of Afro-Brazilian lundu and his invention of the genre modinha served as the backbone for the Portuguese genre Fado.",
        images: ["img/plaqueimages/plaque2_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.720529, -9.140392], //Plaque Marker #3 
        title: "Dr. José Tomás de Sousa Martins",
        description: "Dr. José Tomas de Sousa Martins Alhandra was a doctor and main professor at the Lisbon Medical-Surgical School. Recognized for his pioneering teaching and generosity towards patients, he achieved a reputation as a healer of psychic and physical wounds. He assisted in creating sanitariums in various parts of the world for people with serious diseases, including Tuberculosis.",
        images: ["img/plaqueimages/plaque3_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.698186, -9.203928], //Plaque Marker #4
        title: "Jardim Botânico Tropical",
        description: "Jardim Botânico Tropical was founded in 1906, ordered by the king, with the intention of organizing and rehabilitating colonial agriculture. Numerous pavilion structures were erected to represent Portuguese expansion, demonstrating lifestyles in colonies such as Angola and Mozambique. Today, the garden harbors several busts and statues of African indigenous figures as a reminder of the exploitations that came with colonial agriculture.",
        images: ["img/plaqueimages/plaque4_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.708212, -9.155628], //Plaque Marker #5
        title: "Bairro do Mocambo",
        description: "The Mocambo Neighborhood was a sanctuary for its African residents because it gave them autonomy in terms of housing and cultural expression. Nevertheless, as time went on, this area underwent several name changes and its reputation diminished, thus contributing to its African past being forgotten. Today, the neighborhood is popular and home to the working-class.",
        images: ["img/plaqueimages/plaque5_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.711608, -9159256], //Plaque Marker #6 
        title: "Rainha Do Congo",
        description: "Maria Amália I helped spread African influence across Lisbon. Through her efforts, she organized parties and dances to incorporate African and Portuguese culture through dance, music, food, and every culture worldwide. Her parties and organizations would make headline news, and she would be well-known across Lisbon.",
        images: ["img/plaqueimages/plaque6_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.705733, -9.143294], //Plaque Marker #7 
        title: "Cais Do Sodré",
        description: "Cais Do Sodré was a location of movement between people, goods, and money throughout history. Africans have played a role in the transformation of the neighborhood through their contributions as merchants, laborers, dancers, and music performers.",
        images: ["img/plaqueimages/plaque7_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.706676, -9.146645], //Plaque Marker #8 
        title: "Marquês De Sá Da Bandeira",
        description: "The most noted Portuguese defender of the abolition of slavery, Marquês De Sá Da Bandeira was critical in the efforts to outlaw slavery and the slave trade in the Portuguese empire around the world. He was responsible for drafting Portugal's first modern constitution in 1822.",
        images: ["img/plaqueimages/plaque8-edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.710934, -9.149789], //Plaque Marker #9 
        title: "Poço dos Negros",
        description: "The mass burial site near Rua Poco dos Negros was ordered to serve as a burial ground to combat the health hazards caused by rotting African corpses discarded in various places across Lisbon. While the mass burial pit has been gone since the 18th century, the neighborhood of  Mocambo became a center for African life. The cross street of Rua Poco dos Negros is “Jewish Crossing,” yet another of the neighborhood’s cosmopolitan, marginal, and laboring past. A 2020 namesake rap album 'Rua do Poco dos Negros'  by Portuguese hiphop artist and former Benfica resident Valete (born Keidje Torres Lima) addresses the history and current implications of race relations in Portugal.",
        images: ["img/plaqueimages/plaque9_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.709640, -9.129267], //Plaque Marker #10 
        title: "Virgínia Sofia Guerra Quaresma",
        description: "Virgínia Sofia Guerra Quaresma was the first female Portuguese journalist and  a passionate activist. Being as she was of African descent, a feminist, and a fighter for equal rights during the late 19th and early 20th centuries, her contributions were, and remain, monumental.",
        images: ["img/plaqueimages/plaque10_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.709640, -9.129267], //Plaque Marker #11 
        title: "Basílica de Nossa Senhora dos Mártires",
        description: "After Lisbon was reclaimed from the Moors in the 1100s with the help of the English, this church was immediately built in honor of the Virgin Mary who the warriors prayed to in battle. After the earthquake in 1755, the original church was demolished and reopened in its current location in 1786.",
        images: ["img/plaqueimages/plaque11_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.715085, -9.138803], //Plaque Marker #12 
        title: "Campo das Cebolas",
        description: "Campo das Cebolas was a center point for African workers and merchants. Following the earthquake of 1755, a floodwall was constructed, and the area now stands as a tribute to the African workers and how they influenced commercial advancements within Lisbon.",
        images: ["img/plaqueimages/plaque12_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.715004, -9.138872], //Plaque Marker #13 
        title: "Chafariz d'El Rey",
        description: "The Kings Fountain painting depicts the vast social classes within Lisbon. In the bottom right corner, there appears to be an African dressed in upper-class clothing riding a horse. This represents a side of African history within Portugal where some Africans held upper-class titles.",
        images: ["img/plaqueimages/plaque13_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.715085, -9.138803], //Plaque Marker #14 
        title: "Estátua Pai Paulino",
        description: "An artistic representation and tribute to an honorable figure and inspirational leader with artistic and philosophical talents. Pai Paulino, of whom there were more than one, is not one person, but rather almost an African leadership archtype represents resilience, compassion, and wisdom.",
        images: ["img/plaqueimages/plaque14_original.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.715004, -9.138872], //Plaque Marker #15 
        title: "Igreja de São Domingos",
        description: "The Church of São Domingos played a crucial role in protecting the African population in Lisbon. It provided shelter and support, which lessened the severity of their integration into Lisbon society. Today, this space remains rich in diversity and pays homage to various languages, religions, and cultures.",
        images: ["img/plaqueimages/plaque15_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.708778, -9.135071], //Plaque Marker #16 
        title: "Largo do Pelourinho Velho",
        description: "Destroyed in the earthquake of 1755, the Largo do Pelourinho Velho was a slave market for newly arrived enslaved people in Lisbon during the 16th century. It was here where enslaved people would be redistributed to their newly granted enslavers, given a new name, and soon baptized. It is important to remember this site as historical and significant but also a place of anguish and despair.",
        images: ["img/plaqueimages/plaque16_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    //WHERE IS PLAQUE 17?
    {
        location: [38.713441, -9.138768], //Plaque Marker #18 
        title: "Praça do Rossio",
        description: "Rossio Square is a significant place for people of African descent partly because it was a slave market.  Todos os Santos Hospital was built in this location but was destroyed by the 1755 earthquake.",
        images: ["img/plaqueimages/plaque18_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    //WHERE IS PLAQUE 19?
    {
        location: [38.718723, -9.143605], //Plaque Marker #20 
        title: "Violante Fernandes",
        description: "Originally, African women of this community made a living from collecting and distributing water due to regulations of rationing and efficiency. The 'street of black women' was a center of entrepreneurship in the African Lisbon community, most notably of property ownership and sheltering travelers and outsiders.",
        images: ["img/plaqueimages/plaque20_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
    {
        location: [38.716244, -9.130994], //Plaque Marker #21 
        title: "Igreja de Nossa Senhora da Graças",
        description: "Four black saints can be seen at the altar of Our Lady of Rosário. African brotherhoods centered around Our Lady of the Rosary were common in Portugal and Brazil as a way for African immigrants and descendants to build community and mutual aid networks. This altar includes depictions of Saint António of Noto (Sicily) and Saint Benedito of Palermo, both sons of African slaves or emancipated, Saint Ifigénia, a 1st century princess of Nubia, and Saint Elesbão, a 6th century emperor of Ethiopia.",
        images: ["img/plaqueimages/plaque21_edited.jpeg"],
        link: "./index.html",
        icon: './img/plaque.png'
    },
];

// Initialize the map
const map = L.map('map').setView([38.72117503690507, -9.153586490975336], 14); // Near Rato (Lgo do Rato)

// Add the tile layer
L.tileLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=cf6464ad5ae04e1daf628387214f40b8', { //API Key from Thunderforest 07/21/24
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Custom Markers
const yetuIcon = L.icon({
    iconUrl: 'yetu.png',     // Path to site marker
    iconSize: [25, 37],      // Adjust size as needed
    iconAnchor: [16, 37],    // The point of the icon which will correspond to marker's location
    popupAnchor: [0, -37]    // Point from which the popup should open relative to the iconAnchor
});

const plaqueIcon = L.icon({ // Icon for plaques
    iconUrl: './img/plaque.png', // Plaque path
    iconSize: [25, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -37]
});

// Add markers to the map
markers.forEach(markerData => {
    const marker = L.marker(markerData.location, {
        icon: markerData.icon ? plaqueIcon : yetuIcon // Conditional icon assignment
    }).addTo(map);

    marker.on('click', () => {
        document.getElementById('modal-title').textContent = markerData.title;
        document.getElementById('modal-description').textContent = markerData.description;
        document.getElementById('modal-link').href = markerData.link;

        const imagesContainer = document.getElementById('modal-images');
        imagesContainer.innerHTML = ''; // Clear old images
        markerData.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            imagesContainer.appendChild(img);
        });
        document.getElementById('myModal').style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

    // Modal functions
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    //