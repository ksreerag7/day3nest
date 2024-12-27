import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  states=[
    {
      "id": 1,
      "state": "Kerala",
      "image" : "https://imgs.search.brave.com/hQfFPBE_Nz5B5zPxRIKKUX7Mc6cH-gxgAJqyF9Ml7lk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHJhdmVsdHJp/YW5nbGUuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDIvUG9vdmFy/LmpwZw",
      "description": "Kerala, often referred to as 'God’s Own Country', is a popular tourist destination known for its rich cultural heritage, tropical climate, and breathtaking natural beauty."
    },
    {
      "id": 2,
      "state": "Tamil Nadu",
      "image" : "https://imgs.search.brave.com/DAfrRcs8fzkKiEgvApH8odClGl0aBRWVqvKg5ehVDOo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90b3Vy/aXNtdG4uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA5/L0thbnlha3VtYXJp/LTEwMjR4NTc2Lmpw/Zw",
      "description": "Tamil Nadu is famous for its ancient temples, classical music and dance, rich cultural heritage, and diverse landscapes ranging from beaches to hills. The state is a hub of South Indian art."
    },
    {
      "id": 3,
      "state": "Karnataka",
      "image" : "https://imgs.search.brave.com/iGJ9ekgP4UKF_JZSSJUxZNesmsannuUbV53eYrE27iE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuamF2YXRwb2lu/dC5jb20vdG91cmlz/dC1wbGFjZXMvaW1h/Z2VzL3RvdXJpc3Qt/cGxhY2VzLWluLWth/cm5hdGFrYTIucG5n",
      "description": "Karnataka is known for its rich heritage, diverse landscapes, and bustling cities. From the tech hub of Bengaluru to the historical sites of Hampi and Mysuru, Karnataka offers a mix of ancient history, modern innovation, and natural beauty."
    },
    {
      "id": 4,
      "state": "Andhra Pradesh",
      "image" : "https://imgs.search.brave.com/H8qalCX199M2drBqem5hKBjPTjtMeFK7C6c7D7GGk8c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHJhdmVsdHJp/YW5nbGUuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvS3Vybm9v/bC1fMTB0aC1qYW4u/anBlZw",
      "description": "Andhra Pradesh is known for its vibrant culture, historic temples, and delicious cuisine. The state has a long coastline and is famous for its port city of Visakhapatnam, the Tirupati Temple."
    },
    {
      "id": 5,
      "state": "Telangana",
      "image" : "https://imgs.search.brave.com/verBMPVQBFYcrFn2-H9gmIMjTUszJVz5jjlc_K33fP0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/dHJhdmVsdHJpYW5n/bGUuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MTEvQWxhbXB1cl8y/NXRoLW5vdi5qcGVn",
      "description": "Telangana, India’s youngest state, is known for its historical landmarks, such as the Charminar and Golconda Fort, and its vibrant culture. Hyderabad, the state capital, is a hub for technology, arts."
    },
    {
      "id": 6,
      "state": "Maharashtra",
      "image" : "https://imgs.search.brave.com/qQ5SH4tG8zFU1YFYchhMzbo5N7byjCql1zGuAoyvgQM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z29kaWdpdC5jb20v/Y29udGVudC9kYW0v/Z29kaWdpdC9kaXJl/Y3Rwb3J0YWwvZW4v/Y29udGVudGhtL3Rv/dXJpc3QtcGxhY2Vz/LW1haGFyYXNodHJh/LmpwZw",
      "description": "Maharashtra is the financial powerhouse of India, home to Mumbai, the country’s largest city and the heart of Bollywood. It is also known for its historical forts, stunning beaches."
    },
    {
      "id": 7,
      state: "Goa",
      "image" : "https://imgs.search.brave.com/ndiEhPrE6QodHM4JNzsJMrHq8zQvKfMBZfAlYiMJOH8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc3LzAwLzI2/LzM2MF9GXzc3MDAy/NjE1X0dsMUhrNnFa/cGkyeENBbFg4RVVU/UkxCcUM0ZWk2UWZD/LmpwZw",
      "description": "Goa is a popular tourist destination known for its pristine beaches, vibrant nightlife, Portuguese heritage, and unique cuisine. It is one of India’s smallest states but is rich in cultural and natural beauty."
    },
    {
      "id": 8,
      "state": "Gujarat",
      "image" : "https://imgs.search.brave.com/jL1kTqb6xexX-YE8EwIXNOTJvxOL8SlxbpDn9SWDF-8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9iaGFkcmVzaHdh/ci1qYWluLXRlbXBs/ZS1rdXRjaC1ndWph/cmF0LTEtY2l0eS1o/ZXJvP3FsdD04MiZ0/cz0xNzI2NzM0NjMy/NDEz.jpeg",
      "description": "Gujarat is renowned for its rich heritage, historical sites, and industrial growth. The state is home to the Gir National Park, the only habitat of Asiatic lions, and the iconic Statue of Unity."
    },
    {
      "id": 9,
      "state": "Rajasthan",
      "image" : "https://imgs.search.brave.com/VSlV1G4yoyeEt2tf598c0sVh_I4ljv6EBZPtMBxRA6w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM2/NTI4ODIyL3Bob3Rv/L2phaXB1ci1wYWxh/Y2UtaW4taW5kaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWlkMTE2VW5tZTVx/Tmo0WGRRSXhEMlkz/LV9PMzlSVjNseF9l/R1FZWGlUYnM9",
      "description": "Rajasthan is famous for its majestic forts, palaces, and vibrant culture. The desert state is a blend of royal heritage, colorful festivals, and traditional crafts, offering a unique travel experience."
    },
    {
      "id": 10,
      "state": "Madhya Pradesh",
      "image" : "https://imgs.search.brave.com/9dH7YOtjQWefYUjEiuTgYr4IHBviHdDpTGcb3fx06Mg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQzMTkw/NzUuanBn",
      "description": "Known as the 'Heart of India', Madhya Pradesh is rich in historical and natural heritage. The state boasts UNESCO World Heritage sites, tiger reserves, and ancient temples."
    },
    {
      "id": 11,
      "state": "Uttar Pradesh",
      "image" : "https://imgs.search.brave.com/DsgCAulYtjDJ3XELAlq1kipc03LcgRnsF87pk7nJZWE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9scC1j/bXMtcHJvZHVjdGlv/bi5pbWdpeC5uZXQv/MjAyMi0wMy81MDBw/eFJGXzI2MTE3OTEz/LmpwZz9maXQ9Y3Jv/cCZ3PTM2MCZhcj0x/OjEmYXV0bz1mb3Jt/YXQmcT03NQ",
      "description": "Uttar Pradesh is home to the iconic Taj Mahal and other historical landmarks. The state is known for its cultural diversity, religious significance, and traditional crafts."
    },
    {
      "id": 12,
      "state": "Bihar",
      "image" : "https://imgs.search.brave.com/yyi5nCyIcy1clyQh6SAmd8dlUL9tLwRLjVwbIIf8Fjo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS84LXRha2hhdC1z/cmktaGFyaW1hbmRp/ci1qaS1ndXJkd2Fy/YS1wYXRuYS1iaWhh/ci1zdGF0ZS1mZjE_/cWx0PTgyJnRzPTE3/MjY3Mzk5NDIzMTc.jpeg",
      "description": "Bihar has a rich historical and cultural legacy, being the birthplace of Buddhism and Jainism. The state is home to ancient universities, temples, and pilgrimage sites."
    },
    {
      "id": 13,
      "state": "West Bengal",
      "image" : "https://imgs.search.brave.com/vZPlsTpBvo6ZJuIsPc4BZLALRzk_kQVUpOimeuGFABE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9sb3JkLWJ1ZGRo/YS1zdGF0dWUta2Fs/aW1wb25nLXdlc3Qt/YmVuZ2FsLWNpdHkt/MS1oZXJvP3FsdD04/MiZ0cz0xNzI2NjQ1/MjY3MDA2.jpeg",
      "description": "West Bengal is known for its literary and artistic heritage, colonial architecture, and the Sundarbans mangrove forest. Kolkata, the capital, is often called the 'Cultural Capital of India.'"
    },
    {
      "id": 14,
      "state": "Odisha",
      "image" : "https://imgs.search.brave.com/vFRvfSfJhNMegGhPxSC2md2Zf8sPe8gEFxgPEmWSorc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTY2/Njg0ODcvcGhvdG8v/YW5jaWVudC1oaW5k/dS1zdW4tdGVtcGxl/LWF0LWtvbmFyay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dGZqeUFVX0oxam1o/eFhUSXUzMUUtNldj/SDN2Y2VkVU9oTi1h/MlotWXRDWT0",
      "description": "Odisha is famous for its ancient temples, pristine beaches, and the Rath Yatra festival in Puri. The state is also rich in tribal culture and natural resources."
    },
    {
      "id": 15,
      "state": "Jharkhand",
      "image" : "https://imgs.search.brave.com/HUgLbbfSWjdPHV48Gs9eW4X4N4ka-HjaL3hJW-rg5U0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2ZiL0lNR0phZ2Fu/bmF0aHB1cl9UZW1w/bGUuanBn",
      "description": "Jharkhand is known for its mineral wealth, waterfalls, and lush green forests. The state has a vibrant tribal culture and beautiful natural landscapes."
    },
    {
      "id": 16,
      "state": "Chhattisgarh",
      "image" : "https://imgs.search.brave.com/0-NGnn6IUUfcxEjbyqAJbLMRamnETlh99CiZe4tnfK0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NjY2NTQwNS9waG90/by9yYW0tbWFuZGly/LWluLXJhaXB1ci1j/aGhhdHRpc2dhcmgu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVY0TkFDalFDa1Bf/SThKSlBmVngxSmJq/UkJFRkJ4S0ktc2V5/dkFqc1ZxRjQ9",
      "description": "Chhattisgarh is rich in forests, wildlife, and cultural heritage. The state is known for its tribal art and festivals, as well as its natural beauty."
    },
    {
      "id": 17,
      "state": "Assam",
      "image" : "https://imgs.search.brave.com/4rY92rlgOeh5fJUWQ7ceFS72thqRycOeWw2i5yaN1j0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzczL0dhcmdhb24n/cl9LYXJlbmdfR2hv/cl9TaWRlX1ZpZXcu/SlBH",
      "description": "Assam is known for its tea gardens, wildlife sanctuaries, and the Brahmaputra River. The state has a unique cultural heritage and is a gateway to Northeast India."
    },
    {
      "id": 18,
      "state": "Meghalaya",
      "image" : "https://imgs.search.brave.com/eZc-4OhlnRDjOsBg-9lBTbVs4CFLoPDOiqbMzOpaL4k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHJhdmVsdHJp/YW5nbGUuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDMvbWVnaGFs/YXlhLmpwZw",
      "description": "Meghalaya, meaning 'abode of clouds,' is known for its scenic beauty, waterfalls, and unique living root bridges. It is a haven for nature lovers."
    },
    {
      "id": 19,
      "state": "Manipur",
      "image" : "https://imgs.search.brave.com/NlWxpS4ISadHB2o3KC-ZW6XdU0WVR_iDZA9Q0mFhfpA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZXMudGhvbWFz/Y29vay5pbi9pbWFn/ZXMvY21zL0thc2ht/aXItdG91ci1wYWNr/YWdlcy5qcGc",
      "description": "Manipur is known for its rich cultural heritage, scenic landscapes, and traditional dance forms. The state is often referred to as the 'Jewel of India.'"
    },
    {
      "id": 20,
      "state": "Nagaland",
      "image" : "https://imgs.search.brave.com/loDPFQeihOTrrxU5VZ37oNWiBhRnhE4Y-kF5cAxcU00/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGhyaWxsb3Bo/aWxpYS5jb20vZmls/ZXN0b3JlLzRhOTJs/dTZscDd2ZTR4bmts/aTZ3YmZyemJvOHZf/c2h1dHRlcnN0b2Nr/XzcyODczMTE3Ny5q/cGc",
      "description": "Nagaland is known for its vibrant tribal culture, festivals, and scenic hills. The Hornbill Festival is a major attraction showcasing the state’s rich heritage."
    },
    {
      "id": 21,
      "state": "Mizoram",
      "image" : "https://imgs.search.brave.com/w4mp_ehSDs-IuINdeqJzOXx0Z_cLyr2UQneiFRNWQwM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/dHJhdmVsdHJpYW5n/bGUuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MTEvODAwcHgtQ2hh/bXBoYWlfTWl6b3Jh/bV9mcm9tX3NvdXRo/X3dpdGhfWm90bGFu/Z19pbl90aGVfZm9y/ZWdyb3VuZC00MDB4/MjI4LmpwZw",
      "description": "Mizoram, with its rolling hills and dense forests, is known for its vibrant culture and festivals. The state offers a serene environment and breathtaking natural beauty."
    },
    {
      "id": 22,
      "state": "Tripura",
      "image" : "https://imgs.search.brave.com/gfvJUswWv-ghH3j6KFn7STwpMnRgF5TFxfuEKgr68yk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvc3Rh/dGVzX2ltZy9tbXQv/YWN0aXZpdGllcy9t/X1RyaXB1cmFfbGFu/ZHNjYXBlXzdfbF82/NjdfMTAwMC5qcGc",
      "description": "Tripura is known for its archaeological sites, royal palaces, and diverse cultural heritage. The state is surrounded by lush green landscapes and unique tribal traditions."
    },
    {
      "id": 23,
      "state": "Arunachal Pradesh",
      "image" : "https://imgs.search.brave.com/CoFl62lbyar8Plb8-v_QAXl9OZ00DpNbeZ2YwtnGWKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTA1/ODk3ODk2L3Bob3Rv/L3Rhd2FuZy1tb25h/c3RlcnktYXJ1bmFj/aGFsLXByYWRlc2gt/aW5kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXFnVjg3/ZDRXaUk2RWhnOFpX/eWpJM2tHcWk4XzFw/a0RpLWlqRTl3RHVv/QWs9",
      "description": "Arunachal Pradesh, known as the 'Land of the Rising Sun,' is famous for its pristine beauty, monasteries, and tribal culture. It is one of the most unexplored states of India."
    },
    {
      "id": 24,
      "state": "Sikkim",
      "image" : "https://imgs.search.brave.com/x3LurPqtAVVWSOLKnrZsmpiQvDTGs6KFz_3WSELhpmY/rs:fit:500:0:0:0/g:ce/aHR0cDovL3d3dy5z/aWtraW10b3VyaXNt/aW5kaWEuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDQvU2lra2lt/LXRvdXItMDEuanBn",
      "description": "Sikkim, a small Himalayan state, is known for its scenic landscapes, Buddhist monasteries, and adventure tourism. The state is home to Kanchenjunga."
    },
    {
      "id": 25,
      "state": "Punjab",
      "image" : "https://imgs.search.brave.com/tRoMlkQutITs9tMK3vtZMJHKqQ5QiOtQawUKIQ1h8hg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA5L1JveWFsX21v/c3F1ZV9MYWhvcmUu/anBn",
      "description": "Punjab is known for its rich culture, delicious food, and vibrant festivals. The state is home to the Golden Temple, a major Sikh pilgrimage site."
    },
    {
      "id": 26,
      "state": "Haryana",
      "image" : "https://imgs.search.brave.com/GEAIFXCeP5tYPjgwz8rK5T9qzdvkNurBymhDBDnMrCk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY5L0hpdG9wYWRl/c2hhLmpwZw",
      "description": "Haryana is known for its historical landmarks, vibrant agriculture, and industrial growth. The state has a rich cultural heritage."
    },
    {
      "id": 27,
      "state": "Himachal Pradesh",
      "image" : "https://imgs.search.brave.com/aivWoX8IgySflmbd4duqYfE3BYNEgj0lXn20fBYabww/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2QyL01vdW50YWlu/cyxfTWFuYWxpLF9I/aW1hY2hhbF9QcmFk/ZXNoLmpwZw",
      "description": "Himachal Pradesh is a popular hill state known for its scenic beauty, adventure sports, and colonial heritage."
    },
    {
      "id": 28,
      "state": "Uttarakhand",
      "image" : "https://imgs.search.brave.com/EJDWF3qbNh1ItY_x9gazfW5a2-PwZ5WtTlvvlFyvv2I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dXR0YXJhbmNoYWx0/b3VyaXNtLm5ldC9p/bWFnZXMvc2xpZGVy/LTEuanBn",
      "description": "Uttarakhand, known as the 'Land of Gods,' is famous for its pilgrimage sites, scenic beauty, and adventure tourism."
    }
  ];
constructor() { }
getStates(){
  return this.states;
}
getStateByID(id:any){
  return this.states.find(state => state.id == id);
}
}