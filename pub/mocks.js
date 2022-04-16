/* JS Library usage examples */
"use strict";
const log = console.log


log('----------')
log('SCRIPT: Examples of GammaJS library')

const body = $('body')

// test music items
const musicItems = document.createElement('div')
musicItems.style = 'display: flex; padding-top: 50px; padding-bottom: 30px; justify-content: left; padding-left: 50px; '

const musicIntro = document.createElement('div')
musicIntro.style = 'display: flex; width: 300px; word-break:normal; padding: 5px 3px 3px 3px; text-indent: 35px; font-size: 20px; line-height: 24px; font-weight:600;'
musicIntro.appendChild(document.createTextNode('Here are the 4 templates for representations of music datas. Every card has enabled the popup window feature except the last two cards. The last card is the default template for this data.'))
// musicItems.appendChild(musicIntro)

const mg = new MusicGenerator()
mg.createNewProfile(musicItems, 1, 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oaasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '', 1)
mg.createNewProfile(musicItems, 2, 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Be Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '', 0)
mg.createNewProfile(musicItems, 3, 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Be Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}], [{"genre": 'Roock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '', 0)
mg.createNewProfile(musicItems, 4, 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Be Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '', 0)
mg.createNewProfile(musicItems, 400, 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Be Heere Now', "link": ""}, [{"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '', 1)
// mg.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')


const mg3 = new MusicGenerator()
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.addToCollection('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Bee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '')
// mg3.createNewProfile(musicItems, 1, 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/220px-BeHereNowcover.jpg', {"name": 'Beee Here Now', "link": ""}, [{"artist": 'Oasis', "link": ""}, {"artist": 'Oasis', "link": ""}], [{"genre": 'Rock', "link": ''},  {"genre": 'Britpop', "link": ''}], 10, 'Be Here Now is the third studio album by English rock band Oasis, released on 21 August 1997 by Creation Records. The album was recorded at multiple recording studios in London, including Abbey Road Studios, as well as Ridge Farm Studio in Surrey.', '', 1)
// console.log(mg.albums)

var musicC = musicItems.children;
for (var i = 0; i < musicC.length; i++) {
    if (musicC[i].tagName == "DIV") { 
        musicC[i].style.marginRight = '50px';
    }
}
body.append(musicItems)

// test movie items
const movieItems = document.createElement('div')
movieItems.style = 'display: flex; padding-top: 50px; padding-bottom: 30px; justify-content: left; padding-left: 50px;'

// const movieIntro = document.createElement('div')
// movieIntro.style = 'display: flex; width: 300px; word-break:normal; padding: 5px 3px 3px 3px; text-indent: 35px; margin-right: 100px; font-size: 20px; line-height: 24px; font-weight:600;'
// movieIntro.appendChild(document.createTextNode('Here are the 3 templates for representations of movie datas. Every card has enabled the popup window feature except the last two cards. The last card is the default template for this data.'))
// movieItems.appendChild(movieIntro)

const mg2 = new MovieGenerator()
mg2.createNewProfile(movieItems, 1, 'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg', {"name": 'Inceeption', "link": ""}, [{"actor": 'Leoonardo DiCaprio', "link": ''}, {"actor": 'Joseph Gordon-Levitt', "link": ''}], [{"director": 'Chrisstopher Nolan', "link": ' '}], [{"genre": 'Acction', "link": ''},  {"genre": 'Sci-Fi', "link": ''}], 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', 8.7, '', 0)
mg2.createNewProfile(movieItems, 2, 'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg', {"name": 'Inception', "link": ""},  [{"actor": 'Leonardo DiCaprio', "link": ''}, {"actor": 'Joseph Gordon-Levitt', "link": ''}], [{"director": 'Christopher Nolan', "link": ' '}], [{"genre": 'Action', "link": ''},  {"genre": 'Sci-Fi', "link": ''}], 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', 8.7, '', 0)
mg2.createNewProfile(movieItems, 3, 'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg', {"name": 'Inception', "link": ""},  [{"actor": 'Leonardo DiCaprio', "link": ''}, {"actor": 'Joseph Gordon-Levitt', "link": ''}], [{"director": 'Christopher Nolan', "link": ' '}], [{"genre": 'Action', "link": ''},  {"genre": 'Sci-Fi', "link": ''}], 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', 8.7, '', 0)
mg2.createNewProfile(movieItems, 300, 'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg', {"name": 'Inception', "link": ""}, [{"actor": 'Leonardo DiCaprio', "link": ''}, {"actor": 'Joseph Gordon-Levitt', "link": ''}], [{"director": 'Christopher Nolan', "link": ' '}], [{"genre": 'Action', "link": ''},  {"genre": 'Sci-Fi', "link": ''}], 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', 8.7, '', 1)
mg2.addToCollection('https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg', {"name": 'Inception', "link": ""}, [{"actor": 'Leonardo DiCaprio', "link": ''}, {"actor": 'Joseph Gordon-Levitt', "link": ''}], [{"director": 'Christopher Nolan', "link": ' '}], [{"genre": 'Action', "link": ''},  {"genre": 'Sci-Fi', "link": ''}], 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', 8.7, '')
// console.log(mg2._movies)

var movieC = movieItems.children;
for (var i = 0; i < movieC.length; i++) {
    if (movieC[i].tagName == "DIV") {  
        movieC[i].style.marginRight = '50px';
    }
}
body.append(movieItems)

// // test book items
const bookItems = document.createElement('div')
bookItems.style = 'display: flex; padding-top: 50px; padding-bottom: 30px; justify-content: left; padding-left: 50px;'

// const bookIntro = document.createElement('div')
// bookIntro.style = 'display: flex; width: 300px; word-break:normal; padding: 5px 3px 3px 3px; text-indent: 35px; margin-right: 100px; font-size: 20px; line-height: 24px; font-weight:600;'
// bookIntro.appendChild(document.createTextNode('Here are the 4 templates for representations of book datas. Every card has enabled the popup window feature except the last two cards. The last card is the default template for this data.'))
// bookItems.appendChild(bookIntro)

const bg = new BookGenerator()
bg.createNewProfile(bookItems, 1, 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Two_Towers_cover.gif/220px-The_Two_Towers_cover.gif', {"name": 'The Two Towers', "link": ''}, [{"author": 'J.R.Rr. Tolkien', "link": ''}], [{"genre": 'Fantasy', "link": ''} ], 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.', 8.8, '', 0)
bg.createNewProfile(bookItems, 2, 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Two_Towers_cover.gif/220px-The_Two_Towers_cover.gif', {"name": 'The Twoo Towers', "link": ''}, [{"author": 'J.R.R. Tolkien', "link": ''}], [{"genre": 'Fantassy', "link": ''} ], 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.', 6.8, '', 0)
bg.createNewProfile(bookItems, 3, 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Two_Towers_cover.gif/220px-The_Two_Towers_cover.gif', {"name": 'The Two Towers', "link": ''}, [{"author": 'J.R.R. Tolkien', "link": ''}], [{"genre": 'Fantasy', "link": ''} ], 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.', 2.8, '', 0)
bg.createNewProfile(bookItems, 4, 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Two_Towers_cover.gif/220px-The_Two_Towers_cover.gif', {"name": 'The Two Towers', "link": ''}, [{"author": 'J.R.R. Tolkien', "link": ''}], [{"genre": 'Fantasy', "link": ''} ], 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.', 8.8, '', 0)
bg.createNewProfile(bookItems, 200, 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Two_Towers_cover.gif/220px-The_Two_Towers_cover.gif', {"name": 'The Two Towers', "link": ''}, [{"author": 'J.R.R. Tolkien', "link": ''}], [{"genre": 'Fantasy', "link": ''} ], 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.', 8.8, '', 1)

var bookC = bookItems.children;
for (var i = 0; i < bookC.length; i++) {
    if (bookC[i].tagName == "DIV") {   
        bookC[i].style.marginRight = '50px'; 
    }
}
body.append(bookItems)

// // test game items
const gameItems = document.createElement('div')
gameItems.style = 'display: flex; padding-top: 50px; padding-bottom: 30px; justify-content: left; padding-left: 50px;'

// const gameIntro = document.createElement('div')
// gameIntro.style = 'display: flex; width: 300px; word-break:normal; padding: 5px 3px 3px 3px; text-indent: 35px; margin-right: 100px; font-size: 20px; line-height: 24px; font-weight:600;'
// gameIntro.appendChild(document.createTextNode('Here are the 3 templates for representations of game datas. Every card has enabled the popup window feature except the last two cards. The last card is the default template for this data.'))
// gameItems.appendChild(gameIntro)

const gg = new GameGenerator()
gg.createNewProfile(gameItems, 1, 'https://image.api.playstation.com/vulcan/img/rnd/202201/2122/fkaKSuP564vnXkijecp8OYG8.jpg', {"name": 'Eldeen Ring', "link": ''}, [{"developer": 'FromSoftware', "link": ''},], [{"platform": 'PC', "link": ''}, {"platform": 'XBOX', "link": ''}, {"platform": 'PS', "link": ''}], [{"genre": 'Action', "link": ''}, {"genre": 'RPG', "link": ''}], 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.', 9.6, '', 0)
gg.createNewProfile(gameItems, 2, 'https://image.api.playstation.com/vulcan/img/rnd/202201/2122/fkaKSuP564vnXkijecp8OYG8.jpg', {"name": 'Elden Ring', "link": ''}, [{"developer": 'FromSoftwaare', "link": ''},], [{"platform": 'PC', "link": ''}, {"platform": 'XBOoX', "link": ''}, {"platform": 'PS', "link": ''}], [{"genre": 'Actionn', "link": ''}, {"genre": 'RPG', "link": ''}], 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.', 9.6, '', 0)
gg.createNewProfile(gameItems, 3, 'https://image.api.playstation.com/vulcan/img/rnd/202201/2122/fkaKSuP564vnXkijecp8OYG8.jpg', {"name": 'Elden Ring', "link": ''}, [{"developer": 'FromSoftware', "link": ''},], [{"platform": 'PC', "link": ''}, {"platform": 'XBOX', "link": ''}, {"platform": 'PS', "link": ''}], [{"genre": 'Action', "link": ''}, {"genre": 'RPG', "link": ''}], 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.', 9.6, '', 0)
gg.createNewProfile(gameItems, 100, 'https://image.api.playstation.com/vulcan/img/rnd/202201/2122/fkaKSuP564vnXkijecp8OYG8.jpg', {"name": 'Elden Ring', "link": ''}, [{"developer": 'FromSoftware', "link": ''},], [{"platform": 'PC', "link": ''}, {"platform": 'XBOX', "link": ''}, {"platform": 'PS', "link": ''}], [{"genre": 'Action', "link": ''}, {"genre": 'RPG', "link": ''}], 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.', 9.6, '', 1)
gg.addToCollection('https://image.api.playstation.com/vulcan/img/rnd/202201/2122/fkaKSuP564vnXkijecp8OYG8.jpg', {"name": 'Elden Ring', "link": ''}, [{"developer": 'FromSoftware', "link": ''},], [{"platform": 'PC', "link": ''}, {"platform": 'XBOX', "link": ''}, {"platform": 'PS', "link": ''}], [{"genre": 'Action', "link": ''}, {"genre": 'RPG', "link": ''}], 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.', 9.6, '')

var gameC = gameItems.children;
for (var i = 0; i < gameC.length; i++) {
    if (gameC[i].tagName == "DIV") {  
        gameC[i].style.marginRight = '50px'; 
    }
}
body.append(gameItems)

const addon = document.createElement('div')
addon.style = 'display: flex; padding-top: 50px; padding-bottom: 30px; justify-content: left; padding-left: 50px; height: 300px'
// gg.createNewSlideshow(addon)
bg.createNewSlideshow(addon)

body.append(addon)

