    //TASK - 1 DELETE Movies with rating 8.6  (date : 04-01-2022)

db.movies.deleteMany({rating:8.6})
// { "acknowledged" : true, "deletedCount" : 1 }
// > db.movies.find({}).pretty()
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1bd"),
//         "id" : "100",
//         "name" : "RRR",
//         "poster" : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//         "rating" : "8.8",
//         "summary" : "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//         "trailer" : "https://www.youtube.com/embed/f_vbAtFSEc0"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1be"),
//         "id" : "101",
//         "name" : "Iron man 2 ",
//         "poster" : "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//         "rating" : 7,
//         "summary" : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//         "trailer" : "https://www.youtube.com/embed/wKtcmiifycU"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1bf"),
//         "id" : "102",
//         "name" : "No Country for Old Men ***",
//         "poster" : "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//         "rating" : 8.1,
//         "summary" : "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//         "trailer" : "https://www.youtube.com/embed/38A__WT3-o0"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1c0"),
//         "id" : "103",
//         "name" : "Jai Bhim",
//         "poster" : "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//         "summary" : "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//         "rating" : 8.8,
//         "trailer" : "https://www.youtube.com/embed/nnXpbTFrqXA"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1c1"),
//         "id" : "104",
//         "name" : "The Avengers",
//         "rating" : 8,
//         "summary" : "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//         "poster" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//         "trailer" : "https://www.youtube.com/embed/eOrNdBpGMv8"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1c3"),
//         "id" : "107",
//         "name" : "Ratatouille",
//         "poster" : "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//         "rating" : 8,
//         "summary" : "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//         "trailer" : "https://www.youtube.com/embed/NgsQ8mVkN8w"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1c4"),
//         "name" : "Thor: Ragnarok",
//         "poster" : "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//         "rating" : "7.9",
//         "summary" : "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
//         "trailer" : "https://www.youtube.com/embed/ue80QwXMRHg",
//         "id" : "108"
// }

    //TASK -2 CHANGE JAI BHIM Rating - 9 (DATE : 04-01-2022)

 db.movies.updateOne({name : "Jai Bhim"},{$set : {rating:9}})
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
// > db.movies.find({}).pretty()
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1bd"),
//         "id" : "100",
//         "name" : "RRR",
//         "poster" : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//         "rating" : "8.8",
//         "summary" : "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//         "trailer" : "https://www.youtube.com/embed/f_vbAtFSEc0"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1be"),
//         "id" : "101",
//         "name" : "Iron man 2 ",
//         "poster" : "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//         "rating" : 7,
//         "summary" : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//         "trailer" : "https://www.youtube.com/embed/wKtcmiifycU"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1bf"),
//         "id" : "102",
//         "name" : "No Country for Old Men ***",
//         "poster" : "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//         "rating" : 8.1,
//         "summary" : "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//         "trailer" : "https://www.youtube.com/embed/38A__WT3-o0"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1c0"),
//         "id" : "103",
//         "name" : "Jai Bhim",
//         "poster" : "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//         "summary" : "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//         "rating" : 9,
//         "trailer" : "https://www.youtube.com/embed/nnXpbTFrqXA"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1c1"),
//         "id" : "104",
//         "name" : "The Avengers",
//         "rating" : 8,
//         "summary" : "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//         "poster" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//         "trailer" : "https://www.youtube.com/embed/eOrNdBpGMv8"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1c3"),
//         "id" : "107",
//         "name" : "Ratatouille",
//         "poster" : "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//         "rating" : 8,
//         "summary" : "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//         "trailer" : "https://www.youtube.com/embed/NgsQ8mVkN8w"
// }
// {
//         "_id" : ObjectId("61d3f38b64623ab799ffd1c4"),
//         "name" : "Thor: Ragnarok",
//         "poster" : "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//         "rating" : "7.9",
//         "summary" : "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
//         "trailer" : "https://www.youtube.com/embed/ue80QwXMRHg",
//         "id" : "108"
// }
// >