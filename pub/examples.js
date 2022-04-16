"use strict";

const musicItems = document.getElementById('musicCards_display')
const mg = new MusicGenerator()
mg.createNewProfile(musicItems, 1, 'https://upload.wikimedia.org/wikipedia/en/d/d4/OasisDefinitelyMaybealbumcover.jpg', {"name": 'Definitely Maybe', "link": "https://en.wikipedia.org/wiki/Definitely_Maybe"}, [{"artist": 'Oasis', "link": "https://en.wikipedia.org/wiki/Oasis_(band)"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Britpop', "link": 'https://en.wikipedia.org/wiki/Britpop'}], 10, 'Definitely Maybe is the debut studio album by English rock band Oasis, released by Creation Records on 29 August 1994. Oasis booked Monnow Valley Studio near Rockfield in late 1993 to record the album and worked with producer Dave Batchelor, whom band member Noel Gallagher knew from his days working as a roadie for the Inspiral Carpets, though sessions were unsatisfactory and Batchelor was subsequently fired.', '', 1)
mg.createNewProfile(musicItems, 2, 'https://upload.wikimedia.org/wikipedia/en/f/ff/Stoneroses.jpg', {"name": 'The Stone Roses', "link": "https://en.wikipedia.org/wiki/The_Stone_Roses_(album)"}, [{"artist": 'The Stone Roses', "link": "https://en.wikipedia.org/wiki/The_Stone_Roses"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Britpop', "link": 'https://en.wikipedia.org/wiki/Britpop'}], 6, 'The Stone Roses is the eponymous debut studio album by English rock band the Stone Roses. It was recorded mostly at Battery Studios in London with producer John Leckie from June 1988 to February 1989 and released in May of that year by Silvertone Records. Despite not being an immediate success, the album grew popular alongside the band\'s high-profile concert performances, which also helped establish them as fixtures of the Madchester and baggy cultural scenes. The record\'s critical standing also improved significantly in later years, with The Stone Roses now considered to be one of the greatest albums of all time. It was voted number 11 in the third edition of Colin Larkin\'s All Time Top 1000 Albums (2000). It has sold over four million copies worldwide.', '', 0)
mg.createNewProfile(musicItems, 3, 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg', {"name": 'Nevermind', "link": "https://en.wikipedia.org/wiki/Nevermind"}, [{"artist": 'Nirvana', "link": "https://en.wikipedia.org/wiki/Nirvana_(band)"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Grunge', "link": 'https://en.wikipedia.org/wiki/Grunge'}], 2, 'Nevermind is the second studio album by the American rock band Nirvana, released on September 24, 1991, by DGC Records. It was Nirvana\'s first release on a major label and the first to feature drummer Dave Grohl. Produced by Butch Vig, Nevermind features a more polished, radio-friendly sound than the band\'s prior work. Recording took place at Sound City Studios in Van Nuys, California, and Smart Studios in Madison, Wisconsin in May and June 1991, with mastering being completed in August of that year at The Mastering Lab in Hollywood, California.', '', 0)
mg.createNewProfile(musicItems, 4, 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Be Here Now', "link": "https://en.wikipedia.org/wiki/Be_Here_Now_(album)"}, [{"artist": 'Oasis', "link": "https://en.wikipedia.org/wiki/Oasis_(band)"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Britpop', "link": 'https://en.wikipedia.org/wiki/Britpop'}], 2, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '', 0)
var musicC = musicItems.children;
for (var i = 0; i < musicC.length; i++) {
    if (musicC[i].tagName == "DIV") {  
        musicC[i].style.marginRight = '70px'; 
    }
}

const musicSlide = document.getElementById('musicCarousel_display')
const mg2 = new MusicGenerator()
mg2.addToCollection('https://upload.wikimedia.org/wikipedia/en/1/15/Police-album-zenyattamondatta.jpg', {"name": 'Zenyatta Mondatta', "link": "https://en.wikipedia.org/wiki/Zenyatta_Mondatta"}, [{"artist": 'The Police', "link": "https://en.wikipedia.org/wiki/The_Police"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Reggae', "link": 'https://en.wikipedia.org/wiki/Reggae'}], 10, 'Zenyatta Mondatta (stylised as Zenyattà Mondatta on the album cover artwork) is the third studio album by British rock band the Police, released on 3 October 1980 by A&M Records. It was co-produced by the band and Nigel Gray. Zenyatta Mondatta was released to commercial success, reaching number one on the UK Albums Chart and producing the hit singles "Don\'t Stand So Close to Me" and \"De Do Do Do, De Da Da Da\". The album won the band two Grammy Awards: Best Rock Performance by a Duo or Group with Vocal for \"Don\'t Stand So Close to Me\" and Best Rock Instrumental Performance for \"Behind My Camel".', '')
mg2.addToCollection('https://upload.wikimedia.org/wikipedia/en/6/6b/The_Joshua_Tree.png', {"name": 'The Joshua Tree', "link": "https://en.wikipedia.org/wiki/The_Joshua_Tree"}, [{"artist": 'U2', "link": "https://en.wikipedia.org/wiki/U2"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Alternative/Indie', "link": 'https://en.wikipedia.org/wiki/Alternative_rock'}], 10, 'The Joshua Tree is the fifth studio album by Irish rock band U2. It was produced by Daniel Lanois and Brian Eno, and was released on 9 March 1987 on Island Records. In contrast to the ambient experimentation of their 1984 release, The Unforgettable Fire, the band aimed for a harder-hitting sound within the limitation of conventional song structures on The Joshua Tree. The album is influenced by American and Irish roots music, and through sociopolitically conscious lyrics embellished with spiritual imagery, it contrasts the group\'s antipathy for the "real America" with their fascination with the "mythical America".', '')
mg2.addToCollection('https://upload.wikimedia.org/wikipedia/en/a/a9/Police-album-reggattadeblanc.jpg', {"name": 'Reggatta de Blanc', "link": "https://en.wikipedia.org/wiki/Reggatta_de_Blanc"}, [{"artist": 'The Police', "link": "https://en.wikipedia.org/wiki/The_Police"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Reggae', "link": 'https://en.wikipedia.org/wiki/Reggae'}], 10, 'Reggatta de Blanc is the second studio album by British rock band the Police, released on 2 October 1979 by A&M Records. It was the band\'s first release to top the UK Albums Chart and features their first two UK number-one singles: "Message in a Bottle" and "Walking on the Moon\". In early 1980, the album was reissued in the United States on two 10\" discs, one album side per disc, and as a collector\'s edition with a poster of the band.', '')
mg2.addToCollection('https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png', {"name": 'OK Computer', "link": "https://en.wikipedia.org/wiki/OK_Computer"}, [{"artist": 'Radiohead', "link": "https://en.wikipedia.org/wiki/Radiohead"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Alternative/Indie', "link": 'https://en.wikipedia.org/wiki/Alternative_rock'}], 10, 'OK Computer is the third studio album by the English rock band Radiohead, released on 21 May 1997 on EMI subsidiaries Parlophone and Capitol Records. Radiohead self-produced the album with Nigel Godrich, an arrangement they have used for their subsequent albums. Other than the song "Lucky", recorded in 1995, Radiohead recorded OK Computer in Oxfordshire and Bath in 1996 and early 1997, mostly in the historic mansion St Catherine\'s Court. The band distanced themselves from the guitar-centred, lyrically introspective style of their previous album, The Bends. OK Computer\'s abstract lyrics, densely layered sound and eclectic influences laid the groundwork for Radiohead\'s later, more experimental work.', '')
mg2.addToCollection('https://upload.wikimedia.org/wikipedia/en/5/55/Radioheadthebends.png', {"name": 'The Bends', "link": "https://en.wikipedia.org/wiki/The_Bends_(album)"}, [{"artist": 'Radiohead', "link": "https://en.wikipedia.org/wiki/Radiohead"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Alternative/Indie', "link": 'https://en.wikipedia.org/wiki/Alternative_rock'}], 10, 'The Bends is the second studio album by the English rock band Radiohead, released on 13 March 1995 by Parlophone. Most tracks were produced by John Leckie, with extra production by Radiohead, Nigel Godrich and Jim Warren. The Bends was the first Radiohead album with cover art by Stanley Donwood, who, with singer Thom Yorke, has produced all of Radiohead\'s artwork since.', '')
mg2.addToCollection('https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_%28Nirvana%29_album_cover.jpg', {"name": 'In Utero', "link": "https://en.wikipedia.org/wiki/In_Utero"}, [{"artist": 'Nirvana', "link": "https://en.wikipedia.org/wiki/Nirvana_(band)"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Grunge', "link": 'https://en.wikipedia.org/wiki/Grunge'}], 10, 'In Utero is the third and final studio album by American rock band Nirvana, released on September 13, 1993, by DGC Records. After breaking into the mainstream with their second album, Nevermind (1991), Nirvana hired Steve Albini to record In Utero, seeking a more complex, abrasive sound.Recording took place over two weeks in February 1993 at Pachyderm Studio in Cannon Falls, Minnesota. Soon after recording was completed, rumors circulated that DGC might not release In Utero due to Albini\'s abrasive sound. Producer Scott Litt was hired to remix the singles "All Apologies", "Heart-Shaped Box" and "Pennyroyal Tea", upsetting Albini.', '')
mg2.addToCollection('https://upload.wikimedia.org/wikipedia/en/7/72/Achtung_Baby.png', {"name": 'Achtung Baby', "link": "https://en.wikipedia.org/wiki/Achtung_Baby"}, [{"artist": 'U2', "link": "https://en.wikipedia.org/wiki/U2"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Alternative/Indie', "link": 'https://en.wikipedia.org/wiki/Alternative_rock'}], 6, 'Achtung Baby is the seventh studio album by Irish rock band U2. It was produced by Daniel Lanois and Brian Eno, and was released on 18 November 1991 on Island Records. After criticism of their 1988 release Rattle and Hum, U2 shifted their direction to incorporate influences from alternative rock, industrial music, and electronic dance music into their sound. Thematically, Achtung Baby is darker, more introspective, and at times more flippant than their previous work. The album and the subsequent multimedia-intensive Zoo TV Tour were central to the group\'s 1990s reinvention, by which they abandoned their earnest public image for a more lighthearted and self-deprecating one.', '')
mg2.addToCollection('https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg', {"name": 'Led Zeppelin IV', "link": "https://en.wikipedia.org/wiki/Led_Zeppelin_IV"}, [{"artist": 'Led Zeppelin', "link": "https://en.wikipedia.org/wiki/Led_Zeppelin"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Hard Rock', "link": 'https://en.wikipedia.org/wiki/Hard_rock'}], 10, 'The untitled fourth studio album by the English rock band Led Zeppelin, commonly known as Led Zeppelin IV, was released on 8 November 1971 by Atlantic Records. It was produced by guitarist Jimmy Page and recorded between December 1970 and February 1971, mostly in the country house Headley Grange. The album is notable for featuring "Stairway to Heaven", which has been described as the band\'s signature song.', '')
mg2.addToCollection('https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png', {"name": 'Led Zeppelin', "link": "https://en.wikipedia.org/wiki/Led_Zeppelin_(album)"}, [{"artist": 'Led Zeppelin', "link": "https://en.wikipedia.org/wiki/Led_Zeppelin"}], [{"genre": 'Rock', "link": 'https://en.wikipedia.org/wiki/Rock_music'},  {"genre": 'Hard Rock', "link": 'https://en.wikipedia.org/wiki/Hard_rock'}], 10, 'Led Zeppelin is the self-titled debut studio album by English rock band Led Zeppelin. It was released on 12 January 1969 in the United States and on 31 March in the United Kingdom by Atlantic Records. The album was recorded in September and October 1968 at Olympic Studios in London, shortly after the band\'s formation. It contains a mix of original material worked out in the first rehearsals, and remakes and rearrangements of contemporary blues and folk songs. The sessions took place before the group had secured a recording contract and totalled 36 hours; they were paid for directly by Jimmy Page, the group\'s founder, leader and guitarist, and Led Zeppelin\'s manager Peter Grant and cost £1,782 (equivalent to £29,986 in 2020) to complete. They were produced by Page, who as a musician was joined by band members Robert Plant (lead vocals, harmonica), John Paul Jones (bass, keyboards), and John Bonham (drums). Percussionist Viram Jasani appears as a guest on one track. The tracks were mixed by Page\'s childhood friend Glyn Johns, and the iconic album cover showing the Hindenburg disaster was designed by George Hardie.', '')

mg2.createNewSlideshow(musicSlide)

const movieItems = document.getElementById('movieCards_display')
const mg3 = new MovieGenerator()
mg3.createNewProfile(movieItems, 2, 'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg', {"name": 'Inception', "link": "https://www.imdb.com/title/tt1375666/"}, [{"actor": 'Leonardo DiCaprio', "link": 'https://www.imdb.com/name/nm0000138/?ref_=tt_ov_st'}, {"actor": 'Joseph Gordon-Levitt', "link": 'https://www.imdb.com/name/nm0330687/?ref_=tt_ov_st'}], [{"director": 'Christopher Nolan', "link": 'https://www.imdb.com/name/nm0634240/?ref_=tt_ov_dr'}], [{"genre": 'Action', "link": 'https://www.imdb.com/search/title/?genres=action&explore=title_type,genres&ref_=tt_ov_inf'},  {"genre": 'Sci-Fi', "link": 'https://www.imdb.com/search/title/?genres=sci-fi&explore=title_type,genres&ref_=tt_ov_inf'}], 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', 8.7, '', 1)
mg3.createNewProfile(movieItems, 1, 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg', {"name": 'The Godfather', "link": "https://www.imdb.com/title/tt0068646/"},  [{"actor": 'Marlon Brando', "link": 'https://www.imdb.com/name/nm0000008/?ref_=tt_ov_st'}, {"actor": 'Al Pacino', "link": 'https://www.imdb.com/name/nm0000199/?ref_=tt_ov_st'}], [{"director": 'Francis Ford Coppola', "link": 'https://www.imdb.com/name/nm0000338/?ref_=tt_ov_dr'}], [{"genre": 'Crime', "link": 'https://www.imdb.com/search/title?genres=crime&explore=title_type,genres&ref_=tt_ov_inf'},  {"genre": 'Drama', "link": 'https://www.imdb.com/search/title?genres=drama&explore=title_type,genres&ref_=tt_ov_inf'}], 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.', 10, '', 0)
mg3.createNewProfile(movieItems, 3, 'https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg', {"name": '12 Angry Men', "link": "https://www.imdb.com/title/tt0050083"}, [{"actor": 'Henry Fonda', "link": 'https://www.imdb.com/name/nm0000020/?ref_=tt_ov_st'}, {"actor": 'Lee J. Cobb', "link": 'https://www.imdb.com/name/nm0002011/?ref_=tt_ov_st'}], [{"director": 'Sidney Lumet', "link": 'https://www.imdb.com/name/nm0001486/?ref_=tt_ov_dr'}], [{"genre": 'Crime', "link": 'https://www.imdb.com/search/title?genres=crime&explore=title_type,genres&ref_=tt_ov_inf'},  {"genre": 'Drama', "link": 'https://www.imdb.com/search/title?genres=drama&explore=title_type,genres&ref_=tt_ov_inf'}], 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.', 8.7, '', 0)

const movieSlide = document.getElementById('movieCarousel_display')
mg3.addToCollection('https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg', {"name": 'Fight Club', "link": "https://www.imdb.com/title/tt0137523/"},  [{"actor": 'Brad Pitt', "link": 'https://www.imdb.com/name/nm0000093/?ref_=tt_ov_st'}, {"actor": 'Edward Norton', "link": 'https://www.imdb.com/name/nm0001570/?ref_=tt_ov_st'}], [{"director": 'David Fincher', "link": 'https://www.imdb.com/name/nm0000399/?ref_=tt_ov_dr'}], [{"genre": 'Drama', "link": 'https://www.imdb.com/search/title?genres=drama&explore=title_type,genres&ref_=tt_ov_inf'}], 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.', 8.7, '')
mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg', {"name": 'Pulp Fiction', "link": "https://www.imdb.com/title/tt0110912"}, [{"actor": 'John Travolta', "link": 'https://www.imdb.com/name/nm0000237/?ref_=tt_ov_st'}, {"actor": 'Samuel L. Jackson', "link": 'https://www.imdb.com/name/nm0000168/?ref_=tt_ov_st'}], [{"director": 'Quentin Tarantino', "link": 'https://www.imdb.com/name/nm0000233/?ref_=tt_ov_dr'}], [{"genre": 'Crime', "link": 'https://www.imdb.com/search/title?genres=crime&explore=title_type,genres&ref_=tt_ov_inf'},  {"genre": 'Drama', "link": 'https://www.imdb.com/search/title?genres=drama&explore=title_type,genres&ref_=tt_ov_inf'}], 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 8.7, '')
mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg', {"name": 'Seven', "link": "https://www.imdb.com/title/tt0114369"}, [{"actor": 'Brad Pitt', "link": 'https://www.imdb.com/name/nm0000093/?ref_=tt_ov_st'}, {"actor": 'Morgan Freeman', "link": 'https://www.imdb.com/name/nm0000151/?ref_=tt_ov_st'}], [{"director": 'David Fincher', "link": 'https://www.imdb.com/name/nm0000399/?ref_=tt_ov_dr'}], [{"genre": 'Crime', "link": 'https://www.imdb.com/search/title?genres=crime&explore=title_type,genres&ref_=tt_ov_inf'},  {"genre": 'Drama', "link": 'https://www.imdb.com/search/title?genres=drama&explore=title_type,genres&ref_=tt_ov_inf'}], 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.', 8.7, '')
mg3.addToCollection('https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg', {"name": 'The Usual Suspects', "link": "https://www.imdb.com/title/tt0114814"}, [{"actor": 'Kevin Spacey', "link": 'https://www.imdb.com/name/nm0000228/?ref_=tt_ov_st'}, {"actor": 'Gabriel Byrne', "link": 'https://www.imdb.com/name/nm0000321/?ref_=tt_ov_st'}], [{"director": 'Bryan Singer', "link": 'https://www.imdb.com/name/nm0001741/?ref_=tt_ov_dr'}], [{"genre": 'Crime', "link": 'https://www.imdb.com/search/title?genres=crime&explore=title_type,genres&ref_=tt_ov_inf'},  {"genre": 'Drama', "link": 'https://www.imdb.com/search/title?genres=drama&explore=title_type,genres&ref_=tt_ov_inf'}], 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.', 8.7, '')
mg3.createNewSlideshow(movieSlide)

var movieC = movieItems.children;
for (var i = 0; i < movieC.length; i++) {
    if (movieC[i].tagName == "DIV") {  
        movieC[i].style.marginRight = '70px'; 
    }
}

const gameItems = document.getElementById('gameCards_display')
const gg = new GameGenerator()
gg.createNewProfile(gameItems, 1, 'https://image.api.playstation.com/vulcan/img/rnd/202201/2122/fkaKSuP564vnXkijecp8OYG8.jpg', {"name": 'Elden Ring', "link": 'https://en.wikipedia.org/wiki/Elden_Ring'}, [{"developer": 'FromSoftware', "link": 'https://en.wikipedia.org/wiki/FromSoftware'},], [{"platform": 'PC', "link": 'https://en.wikipedia.org/wiki/Personal_computer'}, {"platform": 'XBOX', "link": 'https://en.wikipedia.org/wiki/Xbox'}, {"platform": 'PS', "link": 'https://en.wikipedia.org/wiki/PlayStation'}], [{"genre": 'Action', "link": 'https://en.wikipedia.org/wiki/Action_game'}, {"genre": 'RPG', "link": 'https://en.wikipedia.org/wiki/Role-playing_game'}], 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.', 9.6, '', 1)
gg.createNewProfile(gameItems, 2, 'https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg', {"name": 'Dark Souls III', "link": 'https://en.wikipedia.org/wiki/Dark_Souls_III'}, [{"developer": 'FromSoftwaare', "link": 'https://en.wikipedia.org/wiki/FromSoftware'},], [{"platform": 'PC', "link": 'https://en.wikipedia.org/wiki/Personal_computer'}, {"platform": 'XBOX', "link": 'https://en.wikipedia.org/wiki/Xbox'}, {"platform": 'PS', "link": 'https://en.wikipedia.org/wiki/PlayStation'}], [{"genre": 'Action', "link": 'https://en.wikipedia.org/wiki/Action_game'}, {"genre": 'RPG', "link": 'https://en.wikipedia.org/wiki/Role-playing_game'}], 'Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!', 9.6, '', 0)
gg.createNewProfile(gameItems, 3, 'https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg', {"name": 'Bloodborne', "link": 'https://en.wikipedia.org/wiki/Bloodborne'}, [{"developer": 'FromSoftwaare', "link": 'https://en.wikipedia.org/wiki/FromSoftware'},], [{"platform": 'PS', "link": 'https://en.wikipedia.org/wiki/PlayStation'}], [{"genre": 'Action', "link": 'https://en.wikipedia.org/wiki/Action_game'}, {"genre": 'RPG', "link": 'https://en.wikipedia.org/wiki/Role-playing_game'}], 'Bloodborne is a 2015 action role-playing game developed by FromSoftware and published by Sony Computer Entertainment for the PlayStation 4. Bloodborne follows the player\'s character, a Hunter, through the decrepit Gothic, Victorian-era–inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease. Attempting to find the source of the plague, the player\'s character unravels the city\'s mysteries while fighting beasts and cosmic beings.', 9.6, '', 0)

const gameSlide = document.getElementById('gameCarousel_display')
gg.addToCollection('https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png', {"name": 'Call of Duty: MW2', "link": 'https://en.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_2'}, [{"developer": 'Infinity Ward', "link": 'https://en.wikipedia.org/wiki/Infinity_Ward'}, {"developer": 'Beenox', "link": 'https://en.wikipedia.org/wiki/Beenox'}], [{"platform": 'PC', "link": 'https://en.wikipedia.org/wiki/Personal_computer'}, {"platform": 'XBOX', "link": 'https://en.wikipedia.org/wiki/Xbox'}, {"platform": 'PS', "link": 'https://en.wikipedia.org/wiki/PlayStation'}], [{"genre": 'FPS', "link": 'https://en.wikipedia.org/wiki/First-person_shooter'}], 'Call of Duty: Modern Warfare 2 is a 2009 first-person shooter game developed by Infinity Ward and published by Activision. It is the sixth installment in the Call of Duty series and the direct sequel to Call of Duty 4: Modern Warfare. It was released worldwide on November 10, 2009, for Microsoft Windows, the PlayStation 3, and Xbox 360. A separate version for the Nintendo DS, titled Modern Warfare: Mobilized, was also released on the same day. A version for macOS was developed by Aspyr and released in May 2014, and the Xbox 360 version was made backward compatible for the Xbox One in 2018.', 9.6, '')
gg.addToCollection('https://upload.wikimedia.org/wikipedia/en/b/bf/Call_of_Duty_Modern_Warfare_3_box_art.png', {"name": 'Call of Duty: MW3', "link": 'https://en.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_3'}, [{"developer": 'Infinity Ward', "link": 'https://en.wikipedia.org/wiki/Infinity_Ward'}, {"developer": 'Sledgehammer Games', "link": 'https://en.wikipedia.org/wiki/Sledgehammer_Games'}], [{"platform": 'PC', "link": 'https://en.wikipedia.org/wiki/Personal_computer'}, {"platform": 'XBOX', "link": 'https://en.wikipedia.org/wiki/Xbox'}, {"platform": 'PS', "link": 'https://en.wikipedia.org/wiki/PlayStation'}], [{"genre": 'FPS', "link": 'https://en.wikipedia.org/wiki/First-person_shooter'}], 'Call of Duty: Modern Warfare 3 is a 2011 first-person shooter video game, jointly developed by Infinity Ward and Sledgehammer Games and published by Activision. The game was released worldwide in November 2011 for Microsoft Windows, the Xbox 360, PlayStation 3, and Wii.[1] It is the third and final installment in the original Modern Warfare saga, a direct sequel to 2009\'s Call of Duty: Modern Warfare 2, and the eighth Call of Duty installment overall. A separate version for the Nintendo DS was developed by n-Space, while Treyarch developed the game\'s Wii port. In Japan, Square Enix published the game with a separate subtitled and dubbed version.', 5.6, '')
gg.addToCollection('https://upload.wikimedia.org/wikipedia/en/5/5e/Fall_Guys_cover.jpg', {"name": 'Fall Guys', "link": 'https://en.wikipedia.org/wiki/Fall_Guys'}, [{"developer": 'Mediatonic', "link": 'https://en.wikipedia.org/wiki/Mediatonic'},], [{"platform": 'PC', "link": 'https://en.wikipedia.org/wiki/Personal_computer'}, {"platform": 'XBOX', "link": 'https://en.wikipedia.org/wiki/Xbox'}, {"platform": 'PS', "link": 'https://en.wikipedia.org/wiki/PlayStation'}], [{"genre": 'Battle royale', "link": 'https://en.wikipedia.org/wiki/Battle_royale_game'}, {"genre": 'Multiplayer', "link": 'https://en.wikipedia.org/wiki/Multiplayer_video_game'}], 'Fall Guys: Ultimate Knockout is a platform battle royale game developed by Mediatonic and published by Devolver Digital. It was released for Microsoft Windows and PlayStation 4 on 4 August 2020. The game is planned for eventual release on Nintendo Switch, Xbox One, and Xbox Series X/S.', 2.6, '')
gg.addToCollection('https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg', {"name": 'CSGO', "link": 'https://en.wikipedia.org/wiki/Counter-Strike:_Global_Offensive'}, [{"developer": 'VALVE', "link": 'https://en.wikipedia.org/wiki/Valve_Corporation'},], [{"platform": 'PC', "link": 'https://en.wikipedia.org/wiki/Personal_computer'}, {"platform": 'XBOX', "link": 'https://en.wikipedia.org/wiki/Xbox'}, {"platform": 'PS', "link": 'https://en.wikipedia.org/wiki/PlayStation'}], [{"genre": 'FPS', "link": 'https://en.wikipedia.org/wiki/First-person_shooter'}, {"genre": 'Multiplayer', "link": 'https://en.wikipedia.org/wiki/Multiplayer_video_game'}], 'Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was released for Windows, macOS, Xbox 360, and PlayStation 3 in August 2012, and for Linux in 2014. Valve still regularly updates the game, both with smaller balancing patches and larger content additions.', 5.6, '')
gg.createNewSlideshow(gameSlide)

var gameC = gameItems.children;
for (var i = 0; i < gameC.length; i++) {
    if (gameC[i].tagName == "DIV") {  
        gameC[i].style.marginRight = '70px'; 
    }
}

const bookItems = document.getElementById('bookCards_display')
const bg = new BookGenerator()
bg.createNewProfile(bookItems, 1, 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Two_Towers_cover.gif/220px-The_Two_Towers_cover.gif', {"name": 'The Two Towers', "link": 'https://en.wikipedia.org/wiki/The_Two_Towers'}, [{"author": 'J.R.R. Tolkien', "link": 'https://en.wikipedia.org/wiki/J._R._R._Tolkien'}], [{"genre": 'Fantasy', "link": 'https://en.wikipedia.org/wiki/Fantasy'} ], 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.', 8.8, '', 1)
bg.createNewProfile(bookItems, 2, 'https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif', {"name": 'The Fellowship of the Ring', "link": 'https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring'}, [{"author": 'J.R.R. Tolkien', "link": 'https://en.wikipedia.org/wiki/J._R._R._Tolkien'}], [{"genre": 'Fantasy', "link": 'https://en.wikipedia.org/wiki/Fantasy'} ], 'The Fellowship of the Ring is the first of three volumes of the epic novel The Lord of the Rings by the English author J. R. R. Tolkien. It is followed by The Two Towers and The Return of the King. It takes place in the fictional universe of Middle-earth, and was originally published on 29 July 1954 in the United Kingdom.', 8.8, '', 0)
bg.createNewProfile(bookItems, 3, 'https://upload.wikimedia.org/wikipedia/en/1/11/The_Return_of_the_King_cover.gif', {"name": 'The Return of the King', "link": 'https://en.wikipedia.org/wiki/The_Return_of_the_King'}, [{"author": 'J.R.R. Tolkien', "link": 'https://en.wikipedia.org/wiki/J._R._R._Tolkien'}], [{"genre": 'Fantasy', "link": 'https://en.wikipedia.org/wiki/Fantasy'} ], 'The Return of the King is the third and final volume of J. R. R. Tolkien\'s The Lord of the Rings, following The Fellowship of the Ring and The Two Towers. It was published in 1955. The story begins in the kingdom of Gondor, which is soon to be attacked by the Dark Lord Sauron.', 8.8, '', 0)
bg.createNewProfile(bookItems, 4, 'https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg', {"name": 'Brave New World', "link": 'https://en.wikipedia.org/wiki/Brave_New_World'}, [{"author": 'Aldous Huxley', "link": 'https://en.wikipedia.org/wiki/Aldous_Huxley'}], [{"genre": 'Science fiction', "link": 'https://en.wikipedia.org/wiki/Science_fiction'}, {"genre": 'Dystopian fiction', "link": 'https://en.wikipedia.org/wiki/Utopian_and_dystopian_fiction'}], 'Utopian and dystopian fiction are genres of speculative fiction that explore social and political structures. Utopian fiction portrays a setting that agrees with the author\'s ethos, having various attributes of another reality intended to appeal to readers. Dystopian fiction offers the opposite: the portrayal of a setting that completely disagrees with the author\'s ethos. Some novels combine both genres, often as a metaphor for the different directions humanity can take depending on its choices, ending up with one of two possible futures. Both utopias and dystopias are commonly found in science fiction and other types of speculative fiction.', 8.8, '', 0)

const bookSlide = document.getElementById('bookCarousel_display')
bg.addToCollection('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Animal_Farm_-_1st_edition.jpg/330px-Animal_Farm_-_1st_edition.jpg', {"name": 'Animal Farm', "link": 'https://en.wikipedia.org/wiki/Animal_Farm'}, [{"author": 'George Orwell', "link": 'https://en.wikipedia.org/wiki/George_Orwell'}], [{"genre": 'Dystopian fiction', "link": 'https://en.wikipedia.org/wiki/Utopian_and_dystopian_fiction'}], 'Animal Farm is a satirical allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, the rebellion is betrayed, and the farm ends up in a state as bad as it was before, under the dictatorship of a pig named Napoleon.', 8.8, '')
bg.addToCollection('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg', {"name": 'The Great Gatsby', "link": 'https://en.wikipedia.org/wiki/The_Great_Gatsby'}, [{"author": 'F. Scott Fitzgerald', "link": 'https://en.wikipedia.org/wiki/F._Scott_Fitzgerald'}], [{"genre": 'Tragedy', "link": 'https://en.wikipedia.org/wiki/Tragedy'} ], 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.', 8.8, '')
bg.addToCollection('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg', {"name": 'To Kill a Mockingbird', "link": 'https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird'}, [{"author": 'Harper Lee', "link": 'https://en.wikipedia.org/wiki/Harper_Lee'}], [{"genre": 'Southern Gothic', "link": 'https://en.wikipedia.org/wiki/Southern_Gothic'}, {"genre": 'Bildungsroman', "link": 'https://en.wikipedia.org/wiki/Bildungsroman'}], 'To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize. The plot and characters are loosely based on Lee\'s observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.', 8.8, '')
bg.createNewSlideshow(bookSlide)

var bookC = bookItems.children;
for (var i = 0; i < bookC.length; i++) {
    if (bookC[i].tagName == "DIV") {  
        bookC[i].style.marginRight = '70px'; 
    }
}


const music_tabs = document.getElementById('music_tabs').children
for(let i = 0; i < music_tabs.length; i++){
    if(music_tabs[i].className == 'js'){
        music_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < music_tabs.length; x++){
                if(music_tabs[x].className != 'js') music_tabs[x].style.background = '#f8f8f8'
                else if(music_tabs[x].className == 'js') {
                    music_tabs[x].style.background = '#f5f2f0'
                }
            }
           let music_codes = document.getElementById('music_code_content').children
           for(let x = 0; x < music_codes.length; x++){
               if(music_codes[x].className != 'js_code') music_codes[x].style.display = 'none'
               else if(music_codes[x].className == 'js_code') {
                    music_codes[x].style.display = 'inherit'
                    music_codes[x].style.background = '#f5f2f0'
                }
           }
        })
    } 
    else if(music_tabs[i].className == 'css'){
        music_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < music_tabs.length; x++){
                if(music_tabs[x].className != 'css') music_tabs[x].style.background = '#f8f8f8'
                else if(music_tabs[x].className == 'css') {
                    music_tabs[x].style.background = '#f5f2f0'
                    }
            }
            let music_codes = document.getElementById('music_code_content').children
           for(let x = 0; x < music_codes.length; x++){
               if(music_codes[x].className != 'css_code') music_codes[x].style.display = 'none'
               else if(music_codes[x].className == 'css_code'){
                    music_codes[x].style.display = 'inherit'
                    music_codes[x].style.background = '#f5f2f0'
               }
           }
        })
    }
    else if(music_tabs[i].className == 'html'){
        music_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < music_tabs.length; x++){
                if(music_tabs[x].className != 'html') music_tabs[x].style.background = '#f8f8f8'
                else if(music_tabs[x].className == 'html') {
                    music_tabs[x].style.background = '#f5f2f0'
                }
            }
            let music_codes = document.getElementById('music_code_content').children
           for(let x = 0; x < music_codes.length; x++){
               if(music_codes[x].className != 'html_code') music_codes[x].style.display = 'none'
               else if(music_codes[x].className == 'html_code'){
                    music_codes[x].style.display = 'inherit'
                    music_codes[x].style.background = '#f5f2f0'
                }
           }
        })
    }
}

const movie_tabs = document.getElementById('movie_tabs').children
for(let i = 0; i < movie_tabs.length; i++){
    if(movie_tabs[i].className == 'js'){
        movie_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < movie_tabs.length; x++){
                if(movie_tabs[x].className != 'js') movie_tabs[x].style.background = '#f8f8f8'
                else if(movie_tabs[x].className == 'js') {
                    movie_tabs[x].style.background = '#f5f2f0'
                }
            }
           let movie_codes = document.getElementById('muovie_code_content').children
           for(let x = 0; x < movie_codes.length; x++){
               if(movie_codes[x].className != 'js_code') movie_codes[x].style.display = 'none'
               else if(movie_codes[x].className == 'js_code') {
                    movie_codes[x].style.display = 'inherit'
                    movie_codes[x].style.background = '#f5f2f0'
                }
           }
        })
    } 
    else if(movie_tabs[i].className == 'css'){
        movie_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < movie_tabs.length; x++){
                if(movie_tabs[x].className != 'css') movie_tabs[x].style.background = '#f8f8f8'
                else if(movie_tabs[x].className == 'css') {
                    movie_tabs[x].style.background = '#f5f2f0'
                    }
            }
            let movie_codes = document.getElementById('muovie_code_content').children
           for(let x = 0; x < movie_codes.length; x++){
               if(movie_codes[x].className != 'css_code') movie_codes[x].style.display = 'none'
               else if(movie_codes[x].className == 'css_code'){
                    movie_codes[x].style.display = 'inherit'
                    movie_codes[x].style.background = '#f5f2f0'
               }
           }
        })
    }
    else if(movie_tabs[i].className == 'html'){
        movie_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < movie_tabs.length; x++){
                if(movie_tabs[x].className != 'html') movie_tabs[x].style.background = '#f8f8f8'
                else if(movie_tabs[x].className == 'html') {
                    movie_tabs[x].style.background = '#f5f2f0'
                }
            }
            let movie_codes = document.getElementById('muovie_code_content').children
           for(let x = 0; x < movie_codes.length; x++){
               if(movie_codes[x].className != 'html_code') movie_codes[x].style.display = 'none'
               else if(movie_codes[x].className == 'html_code'){
                    movie_codes[x].style.display = 'inherit'
                    movie_codes[x].style.background = '#f5f2f0'
                }
           }
        })
    }
}

const game_tabs = document.getElementById('game_tabs').children
for(let i = 0; i < game_tabs.length; i++){
    if(game_tabs[i].className == 'js'){
        game_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < game_tabs.length; x++){
                if(game_tabs[x].className != 'js') game_tabs[x].style.background = '#f8f8f8'
                else if(game_tabs[x].className == 'js') {
                    game_tabs[x].style.background = '#f5f2f0'
                }
            }
           let game_codes = document.getElementById('game_code_content').children
           for(let x = 0; x < game_codes.length; x++){
               if(game_codes[x].className != 'js_code') game_codes[x].style.display = 'none'
               else if(game_codes[x].className == 'js_code') {
                    game_codes[x].style.display = 'inherit'
                    game_codes[x].style.background = '#f5f2f0'
                }
           }
        })
    } 
    else if(game_tabs[i].className == 'css'){
        game_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < game_tabs.length; x++){
                if(game_tabs[x].className != 'css') game_tabs[x].style.background = '#f8f8f8'
                else if(game_tabs[x].className == 'css') {
                    game_tabs[x].style.background = '#f5f2f0'
                    }
            }
            let game_codes = document.getElementById('game_code_content').children
           for(let x = 0; x < game_codes.length; x++){
               if(game_codes[x].className != 'css_code') game_codes[x].style.display = 'none'
               else if(game_codes[x].className == 'css_code'){
                    game_codes[x].style.display = 'inherit'
                    game_codes[x].style.background = '#f5f2f0'
               }
           }
        })
    }
    else if(game_tabs[i].className == 'html'){
        game_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < game_tabs.length; x++){
                if(game_tabs[x].className != 'html') game_tabs[x].style.background = '#f8f8f8'
                else if(game_tabs[x].className == 'html') {
                    game_tabs[x].style.background = '#f5f2f0'
                }
            }
            let game_codes = document.getElementById('game_code_content').children
           for(let x = 0; x < game_codes.length; x++){
               if(game_codes[x].className != 'html_code') game_codes[x].style.display = 'none'
               else if(game_codes[x].className == 'html_code'){
                    game_codes[x].style.display = 'inherit'
                    game_codes[x].style.background = '#f5f2f0'
                }
           }
        })
    }
}

const book_tabs = document.getElementById('book_tabs').children
for(let i = 0; i < book_tabs.length; i++){
    if(book_tabs[i].className == 'js'){
        book_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < book_tabs.length; x++){
                if(book_tabs[x].className != 'js') book_tabs[x].style.background = '#f8f8f8'
                else if(book_tabs[x].className == 'js') {
                    book_tabs[x].style.background = '#f5f2f0'
                }
            }
           let book_codes = document.getElementById('book_code_content').children
           for(let x = 0; x < book_codes.length; x++){
               if(book_codes[x].className != 'js_code') book_codes[x].style.display = 'none'
               else if(book_codes[x].className == 'js_code') {
                    book_codes[x].style.display = 'inherit'
                    book_codes[x].style.background = '#f5f2f0'
                }
           }
        })
    } 
    else if(book_tabs[i].className == 'css'){
        book_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < book_tabs.length; x++){
                if(book_tabs[x].className != 'css') book_tabs[x].style.background = '#f8f8f8'
                else if(book_tabs[x].className == 'css') {
                    book_tabs[x].style.background = '#f5f2f0'
                    }
            }
            let book_codes = document.getElementById('book_code_content').children
           for(let x = 0; x < book_codes.length; x++){
               if(book_codes[x].className != 'css_code') book_codes[x].style.display = 'none'
               else if(book_codes[x].className == 'css_code'){
                    book_codes[x].style.display = 'inherit'
                    book_codes[x].style.background = '#f5f2f0'
               }
           }
        })
    }
    else if(book_tabs[i].className == 'html'){
        book_tabs[i].addEventListener("click", function(event) {
            for(let x = 0; x < book_tabs.length; x++){
                if(book_tabs[x].className != 'html') book_tabs[x].style.background = '#f8f8f8'
                else if(book_tabs[x].className == 'html') {
                    book_tabs[x].style.background = '#f5f2f0'
                }
            }
            let book_codes = document.getElementById('book_code_content').children
           for(let x = 0; x < book_codes.length; x++){
               if(book_codes[x].className != 'html_code') book_codes[x].style.display = 'none'
               else if(book_codes[x].className == 'html_code'){
                    book_codes[x].style.display = 'inherit'
                    book_codes[x].style.background = '#f5f2f0'
                }
           }
        })
    }
}