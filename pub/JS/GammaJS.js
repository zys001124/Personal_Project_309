/* GammaJS Libraries */
"use strict";

(function(global, document, $) { 

	function MusicGenerator() {

		this._albums = [];
	}

	function MovieGenerator() {

		this._movies = [];
	}

	function GameGenerator() {

		this._games = [];
	}


	function BookGenerator() {

		this._books = [];
	}

	let _allAlbums = []
	function _totalAlbums() {
		return _allAlbums.length
	}

	let _allMovies = []
	function _totalMovies() {
		return _allMovies.length
	}

	let _allBooks = []
	function _totalBooks() {
		return _allBooks.length
	}

	let _allGames = []
	function _totalGames() {
		return _allGames.length
	}

	MusicGenerator.prototype = {
		// music comparison
		_createComparison : function(targetMusicPic, musicPic, targetMusicName, musicname, targetMusicArtist, musicartist, targetMusicGenre, musicgenre, targetMusicRating, musicrating) {
			const comparisonBack = document.createElement('div')
			comparisonBack.className = 'musicComparison'
			comparisonBack.style = 'width: 100%; height: 100%; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index:150; background-color: black; background-color: rgba(0, 0, 0, 0.6);  overflow: auto; transition: all 0.3s linear; font-family: Times New Roman'

			const comparison = document.createElement('div')
			comparison.style = 'width: 1000px; height: 650px; background-color: white; position: absolute; top: 110px; left: 460px;'

			const closeButton = document.createElement('div')
			closeButton.style = 'width: 65px; height: 50px; float: right; display: flex; cursor: pointer; background-color: white; align-items: center; justify-content: center;'
			closeButton.addEventListener('click', function(event){
				event.currentTarget.parentNode.parentNode.remove()
			})
			const closeIcon = document.createElement('span')
			closeIcon.style = 'color: grey; font-size: 30px; font-weight:80; transition: color 150ms ease-in-out;'
			closeIcon.addEventListener('mouseover', function(event){
				event.currentTarget.style.color = "black";
			})
			closeIcon.addEventListener('mouseout', function(event){
				event.currentTarget.style.color = "grey";
			})
			closeIcon.appendChild(document.createTextNode("\u2573")) // "\u274C"
			closeButton.appendChild(closeIcon)
			comparison.appendChild(closeButton)
			
			const compTable = document.createElement('table')
			compTable.style = 'display: flex; width: 800px; margin-left: 110px; margin-right: auto; height: 500px; font-size: 20px; font-weight: 600; text-align: center; border-collapse: collapse; table-layout: auto; margin-top: 60px; display:table'
			const compTbody = document.createElement('tbody') 
			compTable.appendChild(compTbody)

			const picContent = ['Album Cover', targetMusicPic, musicPic]
			const nameContent = ['Music Name', targetMusicName, musicname]
			const artistContent = ['Artist', targetMusicArtist, musicartist]
			const genreContent = ['Genre', targetMusicGenre, musicgenre]
			const ratingContent = ['Rating', targetMusicRating, musicrating]
			const allContent = [picContent, nameContent, artistContent, genreContent, ratingContent]

			for(let key1 in allContent){
				let tr = compTbody.insertRow()
				tr.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; width = 100%'
				for(let key in allContent[key1]){
					if(key1 == 0){ // add pic
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black;'
							td.style.width = '40%'
							let tdRef = document.createElement('a')
							tdRef.style = 'cursor: pointer;'
							tdRef.href = allContent[1][key].link
							const pic = document.createElement('img')
							pic.className = 'picture'
							pic.style = 'display:flex; width: 200px; height: 200px; object-fit: cover; display: inherit'
							pic.src = allContent[key1][key]
							tdRef.appendChild(pic)
							td.appendChild(tdRef)
						}
					}else if(key1 == 1){ // add names
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '40%'
							let tdRef = document.createElement('a')
							tdRef.style = 'text-decoration: none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
							tdRef.addEventListener("mouseover", function( event ) {
								event.target.style.color = "orange";
							});
							tdRef.addEventListener("mouseout", function( event ) {
								event.target.style.color = "black";
							});
							tdRef.href = allContent[key1][key].link
							tdRef.appendChild(document.createTextNode(allContent[key1][key].name))
							td.appendChild(tdRef)
						}
					}else if(key1 == 2 || key1 == 3){ // add artists or genres
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '40%'
							for(let key2 in allContent[key1][key]){
								let tdRef = document.createElement('a')
								tdRef.style = 'text-decoration: none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
								tdRef.addEventListener("mouseover", function( event ) {
									event.target.style.color = "orange";
								});
								tdRef.addEventListener("mouseout", function( event ) {
									event.target.style.color = "black";
								});
								tdRef.href = allContent[key1][key][key2].link 
								if(key1 == 2) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].artist}`))
								else if(key1 == 3) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].genre}`))
								td.appendChild(tdRef)
								if(key2 != allContent[key1][key].length-1) td.appendChild(document.createTextNode(', '))
							}
						}
					}else{ // add ratings
						let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							if(key == 0){
								td.style.width = '20%'
							}
							if(key != 0){
								td.style.width = '40%'
							}
							td.appendChild(document.createTextNode(allContent[key1][key]))
					}
				}
			}

			comparison.appendChild(compTable)
			comparisonBack.appendChild(comparison)
			const body = $('body')
			body.append(comparisonBack)
		},
		// music popout
		_createPopout : function(musicPic, musicname, musicartist, musicgenre, musicintroduction, musicrating, id, reviewLink) {
			const profile = document.createElement('div')
			profile.className = 'musicPopup'
			profile.id = id
			profile.style = 'width:350px; height:350px; position: absolute; background-color: #fcfcf7; z-index:10; margin-top: -30px; margin-left: -20px; display: flex; border-radius: 15px; border-width: 3px; border-style:groove; flex-direction: column; font-family: Times New Roman'

			const hitem1 = document.createElement('div')
			hitem1.style = 'display:flex; flex-direction: row; width: 100%; align-items: center; '
			const hitem2 = document.createElement('div')
			hitem2.style = 'display:flex; flex-direction: column; width: 100%; align-items: center; '

			const vitem1 = document.createElement('div')
			vitem1.className = 'vitem1'
			vitem1.style = 'display:flex; flex-direction: column; width: 140px; align-items: center; '

			const vitem2 = document.createElement('div')
			vitem2.className = 'vitem2'
			vitem2.style = 'display:flex; flex-direction: column; width: 210px; align-items: center;'

			const picWrapper = document.createElement('a')
			picWrapper.href = musicname.link
			picWrapper.style = 'text-decoration: none; cursor: pointer'
			const pic = document.createElement('img')
			pic.className = 'picture'
			pic.style = 'float: left; display:flex; width: 90px; padding-left: 5px; padding-top: 5px;height: 90px; object-fit: cover;'
			pic.src = musicPic
			picWrapper.appendChild(pic)
			vitem1.appendChild(picWrapper)

			const nameAndArtist = document.createElement('div')
			nameAndArtist.className = 'nameAndArtist'
			nameAndArtist.style = 'display:flex; height: 90px; text-align:center; flex-direction:column; padding-top: 5px; '

			const nameWrapper = document.createElement('a')
			nameWrapper.href = musicname.link
			nameWrapper.style = 'text-decoration: none; cursor: pointer'
			const name = document.createElement('h1')
			name.className = 'name'
			name.style = 'color:black; text-align: center; font-size: 20px; height: fit-content; margin:0px; overflow:auto; transition: color 150ms ease-in-out;'
			name.appendChild(document.createTextNode(musicname.name))
			name.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			name.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			nameWrapper.appendChild(name)

			const artistWrapper = document.createElement('a')
			artistWrapper.href = musicartist.link
			artistWrapper.style = 'text-decoration: none; cursor: pointer'
			const artist = document.createElement('h1')
			artist.className = 'artist'
			artist.style = 'color:grey; text-align: center; font-size: 16px;  height: fit-content; margin:0px'
			for(let key in musicartist){
				const artistRef = document.createElement('a')
				artistRef.href = musicartist[key].link
				artistRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				artistRef.appendChild(document.createTextNode(`${musicartist[key].artist}`))
				artistRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				artistRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				artist.appendChild(artistRef)
				if(key != musicartist.length-1){
					artist.appendChild(document.createTextNode(', '))
				}
			}
			artistWrapper.appendChild(artist)

			const genres = document.createElement('div')
			genres.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; height:fit-content; font-weight: 600'
			for(let key in musicgenre){
				const genreRef = document.createElement('a')
				genreRef.href = musicgenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${musicgenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				genres.appendChild(genreRef)
				if(key != musicgenre.length-1){
					genres.appendChild(document.createTextNode(', '))
				}
			}

			const rating = document.createElement('h1')
			rating.className = 'rating'
			rating.style = 'color:black; text-align: center; font-size: 18px; height: fit-content; margin:0px; padding-top: 3px'
			if(musicrating >= 7) rating.style.color = '#2cd916'
			else if (musicrating >= 3) rating.style.color = '#fc3'
			else rating.style.color = 'red'
			rating.appendChild(document.createTextNode(`Rating: ${musicrating}`))

			nameAndArtist.appendChild(nameWrapper)
			nameAndArtist.appendChild(artistWrapper)
			nameAndArtist.appendChild(genres)
			nameAndArtist.appendChild(rating)

			vitem2.appendChild(nameAndArtist)

			const introduction = document.createElement('div')
			introduction.className = 'introduction'
			introduction.style = 'display:flex;  height: 200px; text-align:left; word-break: break-word; overflow:auto; flex-direction: row; padding: 10px 10px 10px 10px; border: none; text-indent: 30px'
			const introWrapper = document.createElement('a')
			introWrapper.href = musicname.link
			introWrapper.style = 'text-decoration:none; cursor: pointer; color: black'
			introWrapper.appendChild(document.createTextNode(musicintroduction))
			introduction.appendChild(introWrapper)
			hitem2.appendChild(introduction)

			const buttonWrapper = document.createElement('div')
			buttonWrapper.style = "display:flex; flex-direction: row; height: 40px;"
			const compareButtonWrapper = document.createElement('a')
			// compareButtonWrapper.href = compareLink
			compareButtonWrapper.style = 'text-decoration: none; cursor: pointer; margin-right:60px'
			const compareButton = document.createElement('button')
			compareButton.textContent = 'Compare'
			compareButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation;'
			compareButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			compareButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			compareButton.addEventListener("click", function( event ) {
				MusicGenerator.prototype._generateComparisonList(musicPic, musicname, musicartist, musicgenre, musicrating, id, '')
			});
			compareButtonWrapper.appendChild(compareButton)	
			buttonWrapper.appendChild(compareButtonWrapper)

			const reviewButtonWrapper = document.createElement('a')
			reviewButtonWrapper.href = reviewLink
			reviewButtonWrapper.style = 'text-decoration: none; cursor: pointer'
			const reviewButton = document.createElement('button')
			reviewButton.textContent = 'Review'
			reviewButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation;'
			reviewButtonWrapper.appendChild(reviewButton)
			reviewButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "#0024ff";
			});
			reviewButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			buttonWrapper.appendChild(reviewButtonWrapper)
			hitem2.appendChild(buttonWrapper)

			hitem1.appendChild(vitem1)
			hitem1.appendChild(vitem2)
			profile.appendChild(hitem1)
			profile.appendChild(hitem2)
			const parentID = profile.id.slice(0, -1)
			const parent = $(`#${parentID}`)
			parent.append(profile)
		},

		_generateComparisonList: function(musicPic, musicname, musicartist, musicgenre, musicrating, id, searchValue){
			const comparisonBack = document.createElement('div')
			comparisonBack.id = _generateID()
			comparisonBack.className = 'musicComparisonList'
			comparisonBack.style = 'width: 100%; height: 100%; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index:150; background-color: black; background-color: rgba(0, 0, 0, 0.6);  overflow: auto; transition: all 0.3s linear; font-family: Times New Roman'

			const comparison = document.createElement('div')
			comparison.style = 'width: 600px; height: 850px; background-color: white; position: absolute; top: 50px; left: 650px;'

			const utility = document.createElement('div')
			utility.style = 'display: flex; width: 600px; height: 50px; flex-direction: row'

			const searchWrapper = document.createElement('div')
			searchWrapper.style = 'display: flex; width: 550px; height: 50px; flex-direction: row;'
			const searchBar = document.createElement('input')
			searchBar.placeholder = 'Search'
			searchBar.style = 'display: flex; width: 250px; height: 30px; margin: 16px 0px 0px 75px; padding: 0px; font-size: 20px; overflow: auto; border-style: ridge; border-width: 2px; text-indent: 5px'
			const serarchButton = document.createElement('button')
			serarchButton.textContent = 'Search'
			serarchButton.style = 'background-color: rgb(36, 65, 181); border-radius: 12px; color: white; cursor: pointer; font-weight: bold; padding: 3px 0px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 14px; user-select: none; -webkit-user-select: none; touch-action: manipulation; margin-left: 15px; margin-top: 16px;'
			serarchButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "#ffdb00";
			});
			serarchButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "white";
			});
			serarchButton.addEventListener('click', function(event){
				const search = searchBar.value
				MusicGenerator.prototype._generateComparisonList(musicPic, musicname, musicartist, musicgenre, musicrating, id, search)
				event.currentTarget.parentNode.parentNode.parentNode.parentNode.remove()

			})

			searchWrapper.appendChild(searchBar)
			searchWrapper.appendChild(serarchButton)

			const closeButton = document.createElement('div')
			closeButton.style = 'width: 65px; height: 50px; float: right; display: flex; cursor: pointer; background-color: white; align-items: center; justify-content: center;'
			closeButton.addEventListener('click', function(event){
				event.currentTarget.parentNode.parentNode.parentNode.remove()
			})
			const closeIcon = document.createElement('span')
			closeIcon.style = 'color: grey; font-size: 30px; font-weight:800; transition: color 150ms ease-in-out;'
			closeIcon.addEventListener('mouseover', function(event){
				event.currentTarget.style.color = "black";
			})
			closeIcon.addEventListener('mouseout', function(event){
				event.currentTarget.style.color = "grey";
			})
			closeIcon.appendChild(document.createTextNode("\u2573")) // "\u274C"
			closeButton.appendChild(closeIcon)
			utility.appendChild(searchWrapper)
			utility.appendChild(closeButton)
			comparison.appendChild(utility)

			const tableWrapper = document.createElement('div')
			tableWrapper.style = 'overflow:auto; height: 800px; width: 600px; position: relative; margin-top: 0px'
			const compTable = document.createElement('table')
			compTable.style = 'display: flex; width: 500px; margin-left: 55px; margin-right: auto; height: 700px; text-align: center; border-collapse: seperate; border-spacing: 0 1em; table-layout: auto; display:table; margin-top: 30px'
			const compTbody = document.createElement('tbody')
			compTbody.className = 'compTbody' 
			compTable.appendChild(compTbody)

			for(let key in _allAlbums){
				if(key === id.charAt(id.length - 2) || (!_allAlbums[key].musicname.name.toLowerCase().includes(searchValue.toLowerCase()) && !_genreIncludes(_allAlbums[key].musicgenre, searchValue) && !_artistIncludes(_allAlbums[key].musicartist, searchValue))) continue;
				let tr = compTbody.insertRow()
				tr.id = _generateID() +`${key}`
				tr.className = 'musicCompItem'
				MusicGenerator.prototype._createCompProfile(tr, _allAlbums[key].musicPic, _allAlbums[key].musicname, _allAlbums[key].musicartist, _allAlbums[key].musicgenre, _allAlbums[key].musicrating, _allAlbums[key].musicintroduction, _allAlbums[key].reviewLink, 0)
				const compareButton = document.createElement('button')
				compareButton.textContent = 'Compare'
				compareButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation; margin-left: 80px; margin-top: 30px;'
				compareButton.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				compareButton.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				compareButton.addEventListener("click", function( event ) {
					const targetKey = event.currentTarget.parentNode.id.slice(-1)
					MusicGenerator.prototype._createComparison(_allAlbums[targetKey].musicPic, musicPic, _allAlbums[targetKey].musicname, musicname, _allAlbums[targetKey].musicartist, musicartist, _allAlbums[targetKey].musicgenre, musicgenre, _allAlbums[targetKey].musicrating, musicrating)
				});

				tr.appendChild(compareButton)
			}

			tableWrapper.appendChild(compTable)
			comparison.appendChild(tableWrapper)
			comparisonBack.appendChild(comparison)
			const body = $('body')
			body.append(comparisonBack)
		},

		_createCompProfile: function(parent, musicPic, musicname, musicartist, musicgenre, musicrating, musicintroduction, reviewLink, popup) {
			const wrapper1 = document.createElement('div')
				wrapper1.style = 'width:290px; height:90px; display: inline-flex; background-color: #fcfcf7; vertical-align: top; border-style: groove; font-family: Times New Roman'
				wrapper1.className = 'musicProfileType1'
				wrapper1.id = _generateID()
				
				if(popup === 1){
					wrapper1.addEventListener('mouseenter', function(event){
						const popoutID = `${wrapper1.id}1`
						MusicGenerator.prototype._createPopout(musicPic, musicname, musicartist, musicgenre, musicintroduction, musicrating, popoutID, reviewLink)
					})
					wrapper1.addEventListener("mouseleave", function(event) {
						const removerID = `${wrapper1.id}1`
						const toremove = document.getElementById(removerID)
						toremove.remove()
					})
				}
				wrapper1.draggable = true
				wrapper1.addEventListener("dragstart", function(event) {		
					event.target.style.opacity = .6;
					event.dataTransfer.setData("id", event.target.id);
					event.dataTransfer.setData("musicPic",  musicPic);
					event.dataTransfer.setData("musicname",  JSON.stringify(musicname));
					event.dataTransfer.setData("musicartist",  JSON.stringify(musicartist));
					event.dataTransfer.setData("musicgenre",  JSON.stringify(musicgenre));
					event.dataTransfer.setData("musicrating", musicrating);
				}, false);

				wrapper1.addEventListener("dragend", function(event) {
					event.target.style.opacity = "";
				}, false);

				wrapper1.addEventListener("dragover", function(event) {
					event.preventDefault();
				}, false);

				wrapper1.addEventListener("drop", function(event) {
					event.preventDefault();
					const firedId = event.dataTransfer.getData("id");
					const targetMusicPic = event.dataTransfer.getData("musicPic"); 
					const targetMusicName = JSON.parse(event.dataTransfer.getData("musicname")); 
					const targetMusicArtist = JSON.parse(event.dataTransfer.getData("musicartist"));
					const targetMusicGenre = JSON.parse(event.dataTransfer.getData("musicgenre"));
					const targetMusicRating = event.dataTransfer.getData("musicrating");

					if (event.currentTarget.className.includes('musicProfileType') && firedId != event.currentTarget.id) {
						MusicGenerator.prototype._createComparison(targetMusicPic, musicPic, targetMusicName, musicname, targetMusicArtist, musicartist, targetMusicGenre, musicgenre, targetMusicRating, musicrating)
					}
				}, false);

				const picWrapper1 = document.createElement('div')
				picWrapper1.style = 'padding-top: 5px; padding-left: 5px; width: fit-content'

				const picRef1 = document.createElement('a')
				picRef1.href = musicname.link  // would be passed in by user
				picRef1.style = 'text-decoration:none; cursor: pointer;'

				const pic1 = document.createElement('img')
				pic1.className = 'picture'
				pic1.style = 'display:flex; width: 60px; padding-left: 5px; padding-top: 5px; height: 60px; '
				pic1.src = musicPic
				picWrapper1.appendChild(picRef1)
				picRef1.appendChild(pic1)

				const titles1 = document.createElement('div')
				titles1.className = 'titles1'
				titles1.style = 'width: 145px; padding-left: 15px; height: 85px; padding-top: 5px;'

				const nameWrapper1 = document.createElement('a')
				nameWrapper1.style = 'text-decoration:none; cursor: pointer; '
				nameWrapper1.href = musicname.link // would be passed in by user
				const name1 = document.createElement('h1')
				name1.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
				nameWrapper1.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				nameWrapper1.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
				});
				name1.appendChild(document.createTextNode(musicname.name))
				nameWrapper1.appendChild(name1)

				const artistWrapper1 = document.createElement('a')
				artistWrapper1.style = 'text-decoration:none; cursor: pointer;'
				artistWrapper1.href = musicartist.link // would be passed in by user
				const artist1 = document.createElement('h1')
				artist1.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:black'
				for(let key in musicartist){
					const artistRef = document.createElement('a')
					artistRef.href = musicartist[key].link
					artistRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
					artistRef.appendChild(document.createTextNode(`${musicartist[key].artist}`))
					artistRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					artistRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					artist1.appendChild(artistRef)
					if(key != musicartist.length-1){
						artist1.appendChild(document.createTextNode(', '))
					}
				}
				artistWrapper1.appendChild(artist1)

				const genres1 = document.createElement('div')
				genres1.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; max-height:35px; padding-top: 5px; font-weight: 600'
				for(let key in musicgenre){
					const genreRef = document.createElement('a')
					genreRef.href = musicgenre[key].link
					genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
					genreRef.appendChild(document.createTextNode(`${musicgenre[key].genre}`))
					genreRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					genreRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					genres1.appendChild(genreRef)
					if(key != musicgenre.length-1){
						genres1.appendChild(document.createTextNode(', '))
					}
				}

				titles1.appendChild(nameWrapper1)
				titles1.appendChild(artistWrapper1)
				titles1.appendChild(genres1)
				
				const rating1 = document.createElement('div')
				rating1.className = 'rating1'
				rating1.style = 'display:flex; width: 60px; height: 90px; justify-content: center; padding-top:20px'

				const ratingWrapper1 = document.createElement('div')
				ratingWrapper1.style = 'width: 35px; height: 35px; border-radius: 50%; text-align:center; align-items:center;'
				if(musicrating >= 7) ratingWrapper1.style.backgroundColor = '#2cd916'
				else if (musicrating >= 3) ratingWrapper1.style.backgroundColor = '#fc3'
				else ratingWrapper1.style.backgroundColor = 'red'

				const ratingRef1 = document.createElement('a')
				ratingRef1.style = 'text-decoration:none; cursor: pointer;'
				ratingRef1.href = musicname.link  // would be passed in by user
				const ratingText1 = document.createElement('p')
				ratingText1.style = 'padding-top: 7px; margin: 0px; color:white; font-weight:600; transition: color 150ms ease-in-out;'
				ratingText1.appendChild(document.createTextNode(musicrating))
				ratingText1.addEventListener("mouseover", function( event ) {
					event.target.style.color = "black";
				});
				ratingText1.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				ratingRef1.appendChild(ratingText1)

				rating1.appendChild(ratingWrapper1)
				ratingWrapper1.appendChild(ratingRef1)

				wrapper1.appendChild(picWrapper1)
				wrapper1.appendChild(titles1)
				wrapper1.appendChild(rating1)
				parent.append(wrapper1)
		},

		_createSlideProfile: function(parent, musicPic, musicname, musicartist, musicgenre, musicrating) {
			const wrapper4 = document.createElement('div')
			wrapper4.style = 'width:150px; height:150px; display: inline-flex; flex-direction: column; position:relative; padding-right: 7px; font-family: Times New Roman'
			wrapper4.className = 'musicProfileType4'
			wrapper4.id = _generateID() + _totalAlbums()

			wrapper4.draggable = true
			wrapper4.addEventListener("dragstart", function(event) {		
				event.target.style.opacity = .6;
				event.dataTransfer.setData("id", event.target.id);
				event.dataTransfer.setData("musicPic",  musicPic);
				event.dataTransfer.setData("musicname", JSON.stringify(musicname));
				event.dataTransfer.setData("musicartist",  JSON.stringify(musicartist));
				event.dataTransfer.setData("musicgenre",  JSON.stringify(musicgenre));
				event.dataTransfer.setData("musicrating", musicrating);
			}, false);

			wrapper4.addEventListener("dragend", function(event) {
				event.target.style.opacity = "";
			}, false);

			wrapper4.addEventListener("dragover", function(event) {
				event.preventDefault();
			}, false);

			wrapper4.addEventListener("drop", function(event) {
				event.preventDefault();
				const firedId = event.dataTransfer.getData("id");
				const targetMusicPic = event.dataTransfer.getData("musicPic"); 
				const targetMusicName = JSON.parse(event.dataTransfer.getData("musicname")); 
				const targetMusicArtist = JSON.parse(event.dataTransfer.getData("musicartist"));
				const targetMusicGenre = JSON.parse(event.dataTransfer.getData("musicgenre"));
				const targetMusicRating = event.dataTransfer.getData("musicrating");

				if (event.currentTarget.className.includes('musicProfileType') && firedId != event.currentTarget.id) {
					MusicGenerator.prototype._createComparison(targetMusicPic, musicPic, targetMusicName, musicname, targetMusicArtist, musicartist, targetMusicGenre, musicgenre, targetMusicRating, musicrating)
				}
			}, false);

			const wrapperRef4 = document.createElement('a')
			wrapperRef4.href = musicname.link  // would be passed in by user
			wrapperRef4.style = 'text-decoration:none; cursor: pointer;'

			const pic4 = document.createElement('img')
			pic4.className = 'picture'
			pic4.style = 'display:flex; width: 150px; height: 150px; '
			pic4.src = musicPic
			wrapperRef4.appendChild(pic4)
			
			const titles4 = document.createElement('div')
			titles4.className = 'titles4'
			titles4.style = 'width: 134px; height: 35px; padding: 8px; position: absolute; background-color: rgba(0,0,0,.75); z-index:1; bottom: 0'

			const nameWarpper4 = document.createElement('a')
			nameWarpper4.href = musicname.link 
			nameWarpper4.style = 'text-decoration:none; cursor: pointer;'
			const name4 = document.createElement('h1')
			name4.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; transition: color 150ms ease-in-out;'
			name4.appendChild(document.createTextNode(musicname.name))
			name4.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			name4.addEventListener("mouseout", function( event ) {
				event.target.style.color = "white";
			});
			nameWarpper4.appendChild(name4)
			titles4.appendChild(nameWarpper4)

			const artistWarpper4 = document.createElement('a')
			artistWarpper4.href = musicartist.link
			artistWarpper4.style = 'text-decoration:none; cursor: pointer;'
			const artist4 = document.createElement('h1')
			artist4.style = 'font-size:11px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white'
			for(let key in musicartist){
				const artistRef = document.createElement('a')
				artistRef.href = musicartist[key].link
				artistRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
				artistRef.appendChild(document.createTextNode(`${musicartist[key].artist}`))
				artistRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				artistRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				artist4.appendChild(artistRef)
				if(key != musicartist.length-1){
					artist4.appendChild(document.createTextNode(', '))
				}
			}
			artistWarpper4.appendChild(artist4)
			titles4.appendChild(artistWarpper4)

			wrapper4.appendChild(wrapperRef4)
			wrapper4.appendChild(titles4)
			parent.append(wrapper4)
		},

		createNewSlideshow: function(parent) {
			var hover = 1;
			const slideLength = Math.ceil(this._albums.length / 4) - 1
			const wrapper = document.createElement('div')
			wrapper.style = 'height: 180px; display: flex; flex-direction: column; font-family: Times New Roman'
			wrapper.addEventListener("mouseover", function( event ) {
				hover = 0
			});
			wrapper.addEventListener("mouseout", function( event ) {
				hover = 1
			});
			const slideWrapper = document.createElement('div')
			slideWrapper.style = 'display: flex; justify-content: center; overflow: hidden;'

			const slide = document.createElement('div')
			slide.style = ' display: flex; transition: transform 250ms ease-in-out; width: 620px; height: 150px; --slider-index: 0; transform: translateX(calc(var(--slider-index) * -100%));'

			for(let key in this._albums){
				MusicGenerator.prototype._createSlideProfile(slide, this._albums[key].musicPic, this._albums[key].musicname, this._albums[key].musicartist, this._albums[key].musicgenre, this._albums[key].musicrating)
			}

			const leftButton = document.createElement('button')
			leftButton.style = 'border: none; border-radius: 15px;  border-top-left-radius: 0; border-bottom-left-radius: 0;flex-grow: 0;flex-shrink: 0;background-color: rgba(100, 100, 100, 0.6);z-index: 100;margin: 0;width: 56px; height: 150px; cursor: pointer;font-size: 65px;display: flex;align-items: center;justify-content: center;color: white;line-height: 0;transition: background-color 150ms ease-in-out; transition: font-size 150ms ease-in-out;'
			leftButton.addEventListener("mouseover", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.9)";
				event.target.style.fontSize = '90px';
			});
			leftButton.addEventListener("mouseout", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.6)";
				event.target.style.fontSize = '65px';
			});
			leftButton.addEventListener("click", function( event ) {
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(sliderIndex !== 0){
					slide.style.setProperty("--slider-index", sliderIndex - 1)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (sliderIndex - 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (sliderIndex - 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
				else if(sliderIndex === 0){
					slide.style.setProperty("--slider-index", slideLength)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (slideLength)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (slideLength)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
			});
			const leftButtonText = document.createElement('div')
			leftButton.innerHTML = '\&#8249;'
			leftButton.appendChild(leftButtonText)

			const rightButton = document.createElement('button')
			rightButton.style = 'border: none; border-radius: 15px; border-top-right-radius: 0; border-bottom-right-radius: 0;flex-grow: 0;flex-shrink: 0;background-color: rgba(100, 100, 100, 0.6);z-index: 10;margin: 0; width: 60px; height: 150px; cursor: pointer;font-size: 65px;display: flex;align-items: center;justify-content: center;color: white;line-height: 0; transition: background-color 150ms ease-in-out; transition: font-size 150ms ease-in-out;'
			rightButton.addEventListener("mouseover", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.9)";
				event.target.style.fontSize = '90px';
			});
			rightButton.addEventListener("mouseout", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.6)";
				event.target.style.fontSize = '65px';
				
			});
			rightButton.addEventListener("click", function( event ) {
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(sliderIndex !== slideLength){
					slide.style.setProperty("--slider-index", sliderIndex + 1)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
				else if(sliderIndex === slideLength){
					slide.style.setProperty("--slider-index",  0)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
			});
			const rightButtonText = document.createElement('div')
			rightButton.innerHTML = '\&#8250;'
			rightButton.appendChild(rightButtonText)

			const progressBarWrapper = document.createElement('div')
			progressBarWrapper.style = 'height: 30px; display: flex; align-items: center; justify-content: center;'
			for(let i = 0; i < slideLength+1; i++){
				let progressBar = document.createElement('div')
				progressBar.id = i
				progressBar.style = 'width: 24px; height: 8px; background-color: rgba(100, 100, 100, 0.4); margin-right: 5px; transition: background-color 150ms ease-in-out; cursor: pointer'
				if(i == 0) progressBar.style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
				progressBar.addEventListener("click", function( event ) {
					slide.style.setProperty("--slider-index",  event.currentTarget.id)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i != event.currentTarget.id) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i == event.currentTarget.id) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				})
				progressBarWrapper.appendChild(progressBar)
			}
			
			slideWrapper.appendChild(leftButton)
			slideWrapper.appendChild(slide)
			slideWrapper.appendChild(rightButton)
			wrapper.appendChild(slideWrapper)
			wrapper.appendChild(progressBarWrapper)
			parent.append(wrapper)
			setInterval(function (){
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(hover == 1){
					if(sliderIndex !== slideLength){
						slide.style.setProperty("--slider-index", sliderIndex + 1)
						const progressBars = progressBarWrapper.children
						for(let i = 0; i < progressBars.length; i++){
							if(i !== (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
							else if(i === (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
						}
					}
					else if(sliderIndex == slideLength){
						slide.style.setProperty("--slider-index",  0)
						const progressBars = progressBarWrapper.children
						for(let i = 0; i < progressBars.length; i++){
							if(i != 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)';
							else if(i == 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
						}
					}
				}
			}, 3000);
		},

		createNewProfile: function(parent, template, musicPic, musicname, musicartist, musicgenre, musicrating, musicintroduction, reviewLink, popup) {
			switch(template) {
			case 1: // bar, simplified view
				const wrapper1 = document.createElement('div')
				wrapper1.style = 'width:290px; height:90px; display: inline-flex; background-color: #fcfcf7; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
				wrapper1.className = 'musicProfileType1'
				wrapper1.id = _generateID() + _totalAlbums()
				
				if(popup === 1){
					wrapper1.addEventListener('mouseenter', function(event){
						const popoutID = `${wrapper1.id}1`
						MusicGenerator.prototype._createPopout(musicPic, musicname, musicartist, musicgenre, musicintroduction, musicrating, popoutID, reviewLink)
					})
					wrapper1.addEventListener("mouseleave", function(event) {
						const removerID = `${wrapper1.id}1`
						const toremove = document.getElementById(removerID)
						toremove.remove()
					})
				}
				wrapper1.draggable = true
				wrapper1.addEventListener("dragstart", function(event) {		
					event.target.style.opacity = .6;
					event.dataTransfer.setData("id", event.target.id);
					event.dataTransfer.setData("musicPic",  musicPic);
					event.dataTransfer.setData("musicname",  JSON.stringify(musicname));
					event.dataTransfer.setData("musicartist",  JSON.stringify(musicartist));
					event.dataTransfer.setData("musicgenre",  JSON.stringify(musicgenre));
					event.dataTransfer.setData("musicrating", musicrating);
				}, false);

				wrapper1.addEventListener("dragend", function(event) {
					event.target.style.opacity = "";
				}, false);

				wrapper1.addEventListener("dragover", function(event) {
					event.preventDefault();
				}, false);

				wrapper1.addEventListener("drop", function(event) {
					event.preventDefault();
					const firedId = event.dataTransfer.getData("id");
					const targetMusicPic = event.dataTransfer.getData("musicPic"); 
					const targetMusicName = JSON.parse(event.dataTransfer.getData("musicname")); 
					const targetMusicArtist = JSON.parse(event.dataTransfer.getData("musicartist"));
					const targetMusicGenre = JSON.parse(event.dataTransfer.getData("musicgenre"));
					const targetMusicRating = event.dataTransfer.getData("musicrating");

					if (event.currentTarget.className.includes('musicProfileType') && firedId != event.currentTarget.id) {
						MusicGenerator.prototype._createComparison(targetMusicPic, musicPic, targetMusicName, musicname, targetMusicArtist, musicartist, targetMusicGenre, musicgenre, targetMusicRating, musicrating)
					}
				}, false);

				const picWrapper1 = document.createElement('div')
				picWrapper1.style = 'padding-top: 5px; padding-left: 5px; width: fit-content'

				const picRef1 = document.createElement('a')
				picRef1.href = musicname.link  // would be passed in by user
				picRef1.style = 'text-decoration:none; cursor: pointer;'

				const pic1 = document.createElement('img')
				pic1.className = 'picture'
				pic1.style = 'display:flex; width: 60px; padding-left: 5px; padding-top: 5px; height: 60px; '
				pic1.src = musicPic
				picWrapper1.appendChild(picRef1)
				picRef1.appendChild(pic1)

				const titles1 = document.createElement('div')
				titles1.className = 'titles1'
				titles1.style = 'width: 145px; padding-left: 15px; height: 85px; padding-top: 5px;'

				const nameWrapper1 = document.createElement('a')
				nameWrapper1.style = 'text-decoration:none; cursor: pointer; '
				nameWrapper1.href = musicname.link // would be passed in by user
				const name1 = document.createElement('h1')
				name1.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
				nameWrapper1.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				nameWrapper1.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
				});
				name1.appendChild(document.createTextNode(musicname.name))
				nameWrapper1.appendChild(name1)

				const artistWrapper1 = document.createElement('a')
				artistWrapper1.style = 'text-decoration:none; cursor: pointer;'
				artistWrapper1.href = musicartist.link // would be passed in by user
				const artist1 = document.createElement('h1')
				artist1.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:black'
				for(let key in musicartist){
					const artistRef = document.createElement('a')
					artistRef.href = musicartist[key].link
					artistRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
					artistRef.appendChild(document.createTextNode(`${musicartist[key].artist}`))
					artistRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					artistRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					artist1.appendChild(artistRef)
					if(key != musicartist.length-1){
						artist1.appendChild(document.createTextNode(', '))
					}
				}
				artistWrapper1.appendChild(artist1)

				const genres1 = document.createElement('div')
				genres1.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; max-height:35px; padding-top: 5px; font-weight: 600'
				for(let key in musicgenre){
					const genreRef = document.createElement('a')
					genreRef.href = musicgenre[key].link
					genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
					genreRef.appendChild(document.createTextNode(`${musicgenre[key].genre}`))
					genreRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					genreRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					genres1.appendChild(genreRef)
					if(key != musicgenre.length-1){
						genres1.appendChild(document.createTextNode(', '))
					}
				}

				titles1.appendChild(nameWrapper1)
				titles1.appendChild(artistWrapper1)
				titles1.appendChild(genres1)
				
				const rating1 = document.createElement('div')
				rating1.className = 'rating1'
				rating1.style = 'display:flex; width: 60px; height: 90px; justify-content: center; padding-top:20px'

				const ratingWrapper1 = document.createElement('div')
				ratingWrapper1.style = 'width: 35px; height: 35px; border-radius: 50%; text-align:center; align-items:center;'
				if(musicrating >= 7) ratingWrapper1.style.backgroundColor = '#2cd916'
				else if (musicrating >= 3) ratingWrapper1.style.backgroundColor = '#fc3'
				else ratingWrapper1.style.backgroundColor = 'red'

				const ratingRef1 = document.createElement('a')
				ratingRef1.style = 'text-decoration:none; cursor: pointer;'
				ratingRef1.href = musicname.link  // would be passed in by user
				const ratingText1 = document.createElement('p')
				ratingText1.style = 'padding-top: 7px; margin: 0px; color:white; font-weight:600; transition: color 150ms ease-in-out;'
				ratingText1.appendChild(document.createTextNode(musicrating))
				ratingText1.addEventListener("mouseover", function( event ) {
					event.target.style.color = "black";
				});
				ratingText1.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				ratingRef1.appendChild(ratingText1)

				rating1.appendChild(ratingWrapper1)
				ratingWrapper1.appendChild(ratingRef1)

				wrapper1.appendChild(picWrapper1)
				wrapper1.appendChild(titles1)
				wrapper1.appendChild(rating1)
				parent.append(wrapper1)
				this._albums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
				_allAlbums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
				break;
			case 2: // album picture view
				const wrapper2 = document.createElement('div')
				wrapper2.style = 'width:210px; height:290px; display: inline-flex; background-color: #fcfcf7; flex-direction:column; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
				wrapper2.className = 'musicProfileType2'
				wrapper2.id = _generateID() + _totalAlbums()
				if(popup === 1){
					wrapper2.addEventListener('mouseenter', function(event){
						const popoutID = `${wrapper2.id}1`
						MusicGenerator.prototype._createPopout(musicPic, musicname, musicartist, musicgenre, musicintroduction, musicrating, popoutID, reviewLink)
					})
					wrapper2.addEventListener("mouseleave", function(event) {
						const removerID = `${wrapper2.id}1`
						const toremove = document.getElementById(removerID)
						toremove.remove()
					})
				}

				wrapper2.draggable = true
				wrapper2.addEventListener("dragstart", function(event) {		
					event.target.style.opacity = .6;
					event.dataTransfer.setData("id", event.target.id);
					event.dataTransfer.setData("musicPic", musicPic);
					event.dataTransfer.setData("musicname", JSON.stringify(musicname));
					event.dataTransfer.setData("musicartist",  JSON.stringify(musicartist));
					event.dataTransfer.setData("musicgenre",  JSON.stringify(musicgenre));
					event.dataTransfer.setData("musicrating", musicrating);
				}, false);

				wrapper2.addEventListener("dragend", function(event) {
					event.target.style.opacity = "";
				}, false);

				wrapper2.addEventListener("dragover", function(event) {
					event.preventDefault();
				}, false);

				wrapper2.addEventListener("drop", function(event) {
					event.preventDefault();
					const firedId = event.dataTransfer.getData("id");
					const targetMusicPic = event.dataTransfer.getData("musicPic");
					const targetMusicName = JSON.parse(event.dataTransfer.getData("musicname")); 
					const targetMusicArtist = JSON.parse(event.dataTransfer.getData("musicartist"));
					const targetMusicGenre = JSON.parse(event.dataTransfer.getData("musicgenre"));
					const targetMusicRating = event.dataTransfer.getData("musicrating");


					if (event.currentTarget.className.includes('musicProfileType') && firedId != event.currentTarget.id) {
						// comparison view
						MusicGenerator.prototype._createComparison(targetMusicPic, musicPic, targetMusicName, musicname, targetMusicArtist, musicartist, targetMusicGenre, musicgenre, targetMusicRating, musicrating)
					}
				}, false);

				const picWrapper2 = document.createElement('div')
				picWrapper2.style = 'width: fit-content'

				const picRef2 = document.createElement('a')
				picRef2.href = musicname.link  // would be passed in by user
				picRef2.style = 'text-decoration:none; cursor: pointer;'

				const pic2 = document.createElement('img')
				pic2.className = 'picture'
				pic2.style = 'display:flex; width: 210px; height: 210px; '
				pic2.src = musicPic
				picWrapper2.appendChild(picRef2)
				picRef2.appendChild(pic2)

				const titles2 = document.createElement('div')
				titles2.className = 'titles2'
				titles2.style = 'width: 210px; height: 70px; padding-top: 10px; text-align:center '

				const nameWrapper2 = document.createElement('a')
				nameWrapper2.style = 'text-decoration:none; cursor: pointer; '
				nameWrapper2.href = musicname.link // would be passed in by user
				const name2 = document.createElement('h1')
				name2.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
				name2.appendChild(document.createTextNode(musicname.name))
				name2.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				name2.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				nameWrapper2.appendChild(name2)

				const artistWrapper2 = document.createElement('a')
				artistWrapper2.style = 'text-decoration:none; cursor: pointer;'
				artistWrapper2.href = musicartist.link // would be passed in by user
				const artist2 = document.createElement('h1')
				artist2.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:black'
				for(let key in musicartist){
					const artistRef = document.createElement('a')
					artistRef.href = musicartist[key].link
					artistRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
					artistRef.appendChild(document.createTextNode(`${musicartist[key].artist}`))
					artistRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					artistRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					artist2.appendChild(artistRef)
					if(key != musicartist.length-1){
						artist2.appendChild(document.createTextNode(', '))
					}
				}
				artistWrapper2.appendChild(artist2)


				const genres2 = document.createElement('div')
				genres2.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; max-height:35px; padding-top: 5px; font-weight: 600'
				for(let key in musicgenre){
					const genreRef = document.createElement('a')
					genreRef.href = musicgenre[key].link
					genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
					genreRef.appendChild(document.createTextNode(`${musicgenre[key].genre}`))
					genreRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					genreRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					genres2.appendChild(genreRef)
					if(key != musicgenre.length-1){
						genres2.appendChild(document.createTextNode(', '))
					}
				}

				titles2.appendChild(nameWrapper2)
				titles2.appendChild(artistWrapper2)
				titles2.appendChild(genres2)
				
				const ratingWrapper2 = document.createElement('div')
				ratingWrapper2.style = 'width: 36px; height: 36px; border-radius: 50%; text-align:center; align-items:center; position:absolute; z-index: 1; margin-left:87px; margin-top: 180px;'
				if(musicrating >= 7) ratingWrapper2.style.backgroundColor = '#2cd916'
				else if (musicrating >= 3) ratingWrapper2.style.backgroundColor = '#fc3'
				else ratingWrapper2.style.backgroundColor = 'red'

				const ratingRef2 = document.createElement('a')
				ratingRef2.style = 'text-decoration:none; cursor: pointer; text-align:center'
				ratingRef2.href = musicname.link  // would be passed in by user
				const ratingText2 = document.createElement('p')
				ratingText2.style = 'padding-top: 10px; margin: 0px; color:white; font-weight:600; transition: color 150ms ease-in-out;'
				ratingText2.addEventListener("mouseover", function( event ) {
					event.target.style.color = "black";
				});
				ratingText2.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				ratingText2.appendChild(document.createTextNode(musicrating))
				ratingRef2.appendChild(ratingText2)
				ratingWrapper2.appendChild(ratingRef2)

				wrapper2.appendChild(picWrapper2)
				wrapper2.appendChild(ratingWrapper2)
				wrapper2.appendChild(titles2)
				parent.append(wrapper2)
				this._albums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
				_allAlbums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
				break;
			case 3: // horizontal table cell view
				const wrapper3 = document.createElement('div')
				wrapper3.style = 'width:290px; height:45px; display: inline-flex; flex-direction: row; background-color: #fcfcf7; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
				wrapper3.className = 'musicProfileType3'
				wrapper3.id = _generateID() + _totalAlbums()
				if(popup === 1){
					wrapper3.addEventListener('mouseenter', function(event){
						const popoutID = `${wrapper3.id}1`
						MusicGenerator.prototype._createPopout(musicPic, musicname, musicartist, musicgenre, musicintroduction, musicrating, popoutID, reviewLink)
					})
					wrapper3.addEventListener("mouseleave", function(event) {
						const removerID = `${wrapper3.id}1`
						const toremove = document.getElementById(removerID)
						toremove.remove()
					})
				}

				wrapper3.draggable = true
				wrapper3.addEventListener("dragstart", function(event) {		
					event.target.style.opacity = .6;
					event.dataTransfer.setData("id", event.target.id);
					event.dataTransfer.setData("musicPic",  musicPic);
					event.dataTransfer.setData("musicname", JSON.stringify(musicname));
					event.dataTransfer.setData("musicartist",  JSON.stringify(musicartist));
					event.dataTransfer.setData("musicgenre",  JSON.stringify(musicgenre));
					event.dataTransfer.setData("musicrating", musicrating);
				}, false);

				wrapper3.addEventListener("dragend", function(event) {
					event.target.style.opacity = "";
				}, false);

				wrapper3.addEventListener("dragover", function(event) {
					event.preventDefault();
				}, false);

				wrapper3.addEventListener("drop", function(event) {
					event.preventDefault();
					const firedId = event.dataTransfer.getData("id");
					const targetMusicPic = event.dataTransfer.getData("musicPic"); 
					const targetMusicName = JSON.parse(event.dataTransfer.getData("musicname")); 
					const targetMusicArtist = JSON.parse(event.dataTransfer.getData("musicartist"));
					const targetMusicGenre = JSON.parse(event.dataTransfer.getData("musicgenre"));
					const targetMusicRating = event.dataTransfer.getData("musicrating");

					if (event.currentTarget.className.includes('musicProfileType') && firedId != event.currentTarget.id) {
						MusicGenerator.prototype._createComparison(targetMusicPic, musicPic, targetMusicName, musicname, targetMusicArtist, musicartist, targetMusicGenre, musicgenre, targetMusicRating, musicrating)
					}
				}, false);
				
				const titles3 = document.createElement('div')
				titles3.className = musicPic
				titles3.style = 'width: 220px; padding-left: 20px; height: 40px; padding-top: 5px'

				const nameWrapper3 = document.createElement('a')
				nameWrapper3.style = 'text-decoration:none; cursor: pointer; '
				nameWrapper3.href = musicname.link // would be passed in by user
				const name3 = document.createElement('h1')
				name3.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
				name3.appendChild(document.createTextNode(musicname.name))
				name3.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				name3.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				nameWrapper3.appendChild(name3)

				const artistWrapper3 = document.createElement('a')
				artistWrapper3.style = 'text-decoration:none; cursor: pointer;'
				artistWrapper3.href = musicartist.link // would be passed in by user
				const artist3 = document.createElement('h1')
				artist3.style = 'font-size:12px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: grey'
				for(let key in musicartist){
					const artistRef = document.createElement('a')
					artistRef.href = musicartist[key].link
					artistRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
					artistRef.appendChild(document.createTextNode(`${musicartist[key].artist}`))
					artistRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					artistRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					artist3.appendChild(artistRef)
					if(key != musicartist.length-1){
						artist3.appendChild(document.createTextNode(', '))
					}
				}
				artistWrapper3.appendChild(artist3)

				titles3.appendChild(nameWrapper3)
				titles3.appendChild(artistWrapper3)

				const rating3 = document.createElement('div')
				rating3.className = 'rating3'
				rating3.style = 'display:flex; width: 50px; height: 45px; justify-content: center; align-items:center; '

				const ratingWrapper3 = document.createElement('div')
				ratingWrapper3.style = 'width: 35px; height: 35px; border-radius: 50%; text-align:center; align-items:center;'
				if(musicrating >= 7) ratingWrapper3.style.backgroundColor = '#2cd916'
				else if (musicrating >= 3) ratingWrapper3.style.backgroundColor = '#fc3'
				else ratingWrapper3.style.backgroundColor = 'red'

				const ratingRef3 = document.createElement('a')
				ratingRef3.href = musicname.link // would be passed in by user
				ratingRef3.style = 'text-decoration:none; cursor: pointer; font-weight:600'

				const ratingText3 = document.createElement('p')
				ratingText3.style = 'padding-top: 7px; margin: 0px; color:white; font-weight:600; transition: color 150ms ease-in-out;'
				ratingText3.addEventListener("mouseover", function( event ) {
					event.target.style.color = "black";
				});
				ratingText3.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				ratingText3.appendChild(document.createTextNode(musicrating))
				ratingRef3.appendChild(ratingText3)
				ratingWrapper3.appendChild(ratingRef3)
				rating3.appendChild(ratingWrapper3)

				wrapper3.appendChild(titles3)
				wrapper3.appendChild(rating3)
				parent.append(wrapper3)
				this._albums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
				_allAlbums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
				break;
			case 4: // square slide show view
				const wrapper4 = document.createElement('div')
				wrapper4.style = 'width:150px; height:150px; display: inline-flex; flex-direction: column; position:relative; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
				wrapper4.className = 'musicProfileType4'
				wrapper4.id = _generateID() + _totalAlbums()
				if(popup === 1){
					wrapper4.addEventListener('mouseenter', function(event){
						const popoutID = `${wrapper4.id}1`
						MusicGenerator.prototype._createPopout(musicPic, musicname, musicartist, musicgenre, musicintroduction, musicrating, popoutID, reviewLink)
					})
					wrapper4.addEventListener("mouseleave", function(event) {
						const removerID = `${wrapper4.id}1`
						const toremove = document.getElementById(removerID)
						toremove.remove()
					})
				}

				wrapper4.draggable = true
				wrapper4.addEventListener("dragstart", function(event) {		
					event.target.style.opacity = .6;
					event.dataTransfer.setData("id", event.target.id);
					event.dataTransfer.setData("musicPic",  musicPic);
					event.dataTransfer.setData("musicname", JSON.stringify(musicname));
					event.dataTransfer.setData("musicartist",  JSON.stringify(musicartist));
					event.dataTransfer.setData("musicgenre",  JSON.stringify(musicgenre));
					event.dataTransfer.setData("musicrating", musicrating);
				}, false);

				wrapper4.addEventListener("dragend", function(event) {
					event.target.style.opacity = "";
				}, false);

				wrapper4.addEventListener("dragover", function(event) {
					event.preventDefault();
				}, false);

				wrapper4.addEventListener("drop", function(event) {
					event.preventDefault();
					const firedId = event.dataTransfer.getData("id");
					const targetMusicPic = event.dataTransfer.getData("musicPic"); 
					const targetMusicName = JSON.parse(event.dataTransfer.getData("musicname")); 
					const targetMusicArtist = JSON.parse(event.dataTransfer.getData("musicartist"));
					const targetMusicGenre = JSON.parse(event.dataTransfer.getData("musicgenre"));
					const targetMusicRating = event.dataTransfer.getData("musicrating");

					if (event.currentTarget.className.includes('musicProfileType') && firedId != event.currentTarget.id) {
						MusicGenerator.prototype._createComparison(targetMusicPic, musicPic, targetMusicName, musicname, targetMusicArtist, musicartist, targetMusicGenre, musicgenre, targetMusicRating, musicrating)
					}
				}, false);

				const wrapperRef4 = document.createElement('a')
				wrapperRef4.href = musicname.link  // would be passed in by user
				wrapperRef4.style = 'text-decoration:none; cursor: pointer;'

				const pic4 = document.createElement('img')
				pic4.className = 'picture'
				pic4.style = 'display:flex; width: 150px; height: 150px; '
				pic4.src = musicPic
				wrapperRef4.appendChild(pic4)
				
				const titles4 = document.createElement('div')
				titles4.className = 'titles4'
				titles4.style = 'width: 134px; height: 35px; padding: 8px; position: absolute; background-color: rgba(0,0,0,.75); z-index:1; bottom: 0'

				const nameWarpper4 = document.createElement('a')
				nameWarpper4.href = musicname.link 
				nameWarpper4.style = 'text-decoration:none; cursor: pointer;'
				const name4 = document.createElement('h1')
				name4.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; transition: color 150ms ease-in-out;'
				name4.appendChild(document.createTextNode(musicname.name))
				name4.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				name4.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				nameWarpper4.appendChild(name4)
				titles4.appendChild(nameWarpper4)

				const artistWarpper4 = document.createElement('a')
				artistWarpper4.href = musicartist.link
				artistWarpper4.style = 'text-decoration:none; cursor: pointer;'
				const artist4 = document.createElement('h1')
				artist4.style = 'font-size:11px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white'
				for(let key in musicartist){
					const artistRef = document.createElement('a')
					artistRef.href = musicartist[key].link
					artistRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
					artistRef.appendChild(document.createTextNode(`${musicartist[key].artist}`))
					artistRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					artistRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "white";
					});
					artist4.appendChild(artistRef)
					if(key != musicartist.length-1){
						artist4.appendChild(document.createTextNode(', '))
					}
				}
				artistWarpper4.appendChild(artist4)
				titles4.appendChild(artistWarpper4)

				wrapper4.appendChild(wrapperRef4)
				wrapper4.appendChild(titles4)
				parent.append(wrapper4)
				this._albums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
				_allAlbums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
				break;
			default:
				const wrapperd = document.createElement('div')
				wrapperd.style = 'width:290px; height:90px; display: inline-flex; background-color: #fcfcf7; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
				wrapperd.className = 'musicProfileTypeD'
				wrapperd.id = _generateID() + _totalAlbums()
				if(popup === 1){
					wrapperd.addEventListener('mouseenter', function(event){
						const popoutID = `${wrapperd.id}1`
						MusicGenerator.prototype._createPopout(musicPic, musicname, musicartist, musicgenre, musicintroduction, musicrating, popoutID, reviewLink)
					})
					wrapperd.addEventListener("mouseleave", function(event) {
						const removerID = `${wrapperd.id}1`
						const toremove = document.getElementById(removerID)
						toremove.remove()
					})
				}

				wrapperd.draggable = true
				wrapperd.addEventListener("dragstart", function(event) {		
					event.target.style.opacity = .6;
					event.dataTransfer.setData("id", event.target.id);
					event.dataTransfer.setData("musicPic",  musicPic);
					event.dataTransfer.setData("musicname", JSON.stringify(musicname));
					event.dataTransfer.setData("musicartist",  JSON.stringify(musicartist));
					event.dataTransfer.setData("musicgenre",  JSON.stringify(musicgenre));
					event.dataTransfer.setData("musicrating", musicrating);
				}, false);

				wrapperd.addEventListener("dragend", function(event) {
					event.target.style.opacity = "";
				}, false);

				wrapperd.addEventListener("dragover", function(event) {
					event.preventDefault();
				}, false);

				wrapperd.addEventListener("drop", function(event) {
					event.preventDefault();
					const firedId = event.dataTransfer.getData("id");
					const targetMusicPic = event.dataTransfer.getData("musicPic"); 
					const targetMusicName = JSON.parse(event.dataTransfer.getData("musicname")); 
					const targetMusicArtist = JSON.parse(event.dataTransfer.getData("musicartist"));
					const targetMusicGenre = JSON.parse(event.dataTransfer.getData("musicgenre"));
					const targetMusicRating = event.dataTransfer.getData("musicrating");

					if (event.currentTarget.className.includes('musicProfileType') && firedId != event.currentTarget.id) {
						MusicGenerator.prototype._createComparison(targetMusicPic, musicPic, targetMusicName, musicname, targetMusicArtist, musicartist, targetMusicGenre, musicgenre, targetMusicRating, musicrating)
					}
				}, false);

				const picWrapperd = document.createElement('div')
				picWrapperd.style = 'padding-top: 5px; padding-left: 5px; width: fit-content'

				const picRefd = document.createElement('a')
				picRefd.href = musicname.link  // would be passed in by user
				picRefd.style = 'text-decoration:none; cursor: pointer;'

				const picd = document.createElement('img')
				picd.className = 'picture'
				picd.style = 'display:flex; width: 60px; padding-left: 5px; padding-top: 5px; height: 60px; '
				picd.src = musicPic
				picWrapperd.appendChild(picRefd)
				picRefd.appendChild(picd)

				const titlesd = document.createElement('div')
				titlesd.className = 'titlesd'
				titlesd.style = 'width: 145px; padding-left: 15px; height: 85px; padding-top: 5px '

				const nameWrapperd = document.createElement('a')
				nameWrapperd.style = 'text-decoration:none; cursor: pointer; '
				nameWrapperd.href = musicname.link // would be passed in by user
				const named = document.createElement('h1')
				named.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
				named.appendChild(document.createTextNode(musicname.name))
				named.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				named.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				nameWrapperd.appendChild(named)

				const artistWrapperd = document.createElement('a')
				artistWrapperd.style = 'text-decoration:none; cursor: pointer;'
				artistWrapperd.href = musicartist.link // would be passed in by user
				const artistd = document.createElement('h1')
				artistd.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:black'
				for(let key in musicartist){
					const artistRef = document.createElement('a')
					artistRef.href = musicartist[key].link
					artistRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
					artistRef.appendChild(document.createTextNode(`${musicartist[key].artist}`))
					artistRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					artistRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					artistd.appendChild(artistRef)
					if(key != musicartist.length-1){
						artistd.appendChild(document.createTextNode(', '))
					}
				}
				artistWrapperd.appendChild(artistd)

				const genred = document.createElement('div')
				genred.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; max-height:35px; padding-top: 5px; font-weight: 600'
				for(let key in musicgenre){
					const genreRef = document.createElement('a')
					genreRef.href = musicgenre[key].link
					genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
					genreRef.appendChild(document.createTextNode(`${musicgenre[key].genre}`))
					genreRef.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					genreRef.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					genred.appendChild(genreRef)
					if(key != musicgenre.length-1){
						genred.appendChild(document.createTextNode(', '))
					}
				}

				titlesd.appendChild(nameWrapperd)
				titlesd.appendChild(artistWrapperd)
				titlesd.appendChild(genred)
				
				const ratingd = document.createElement('div')
				ratingd.className = 'ratingd'
				ratingd.style = 'display:flex; width: 60px; height: 90px; justify-content: center; padding-top:15px'

				const ratingWrapperd = document.createElement('div')
				ratingWrapperd.style = 'width: 35px; height: 35px; border-radius: 50%; text-align:center; align-items:center;'
				if(musicrating >= 7) ratingWrapperd.style.backgroundColor = '#2cd916'
				else if (musicrating >= 3) ratingWrapperd.style.backgroundColor = '#fc3'
				else ratingWrapperd.style.backgroundColor = 'red'

				const ratingRefd = document.createElement('a')
				ratingRefd.style = 'text-decoration:none; cursor: pointer;'
				ratingRefd.href = musicname.link  // would be passed in by user
				const ratingTextd = document.createElement('p')
				ratingTextd.style = 'padding-top: 7px; margin: 0px; color:white; font-weight:600; transition: color 150ms ease-in-out;'
				ratingTextd.addEventListener("mouseover", function( event ) {
					event.target.style.color = "black";
				});
				ratingTextd.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				ratingTextd.appendChild(document.createTextNode(musicrating))
				ratingRefd.appendChild(ratingTextd)

				ratingd.appendChild(ratingWrapperd)
				ratingWrapperd.appendChild(ratingRefd)

				wrapperd.appendChild(picWrapperd)
				wrapperd.appendChild(titlesd)
				wrapperd.appendChild(ratingd)
				parent.append(wrapperd)
				this._albums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
				_allAlbums.push({
					"musicPic": musicPic,
					"musicname": musicname, 
					"musicartist": musicartist, 
					"musicgenre": musicgenre, 
					"musicrating": musicrating, 
					"musicintroduction": musicintroduction,
					"reviewLink": reviewLink
				})
			}
		},
		addToCollection: function(musicPic, musicname, musicartist, musicgenre, musicrating, musicintroduction, reviewLink) {
			this._albums.push({
				"musicPic": musicPic,
				"musicname": musicname, 
				"musicartist": musicartist, 
				"musicgenre": musicgenre, 
				"musicrating": musicrating, 
				"musicintroduction": musicintroduction,
				"reviewLink": reviewLink
			})
			_allAlbums.push({
				"musicPic": musicPic,
				"musicname": musicname, 
				"musicartist": musicartist, 
				"musicgenre": musicgenre, 
				"musicrating": musicrating, 
				"musicintroduction": musicintroduction,
				"reviewLink": reviewLink
			})
		}
	}

	MovieGenerator.prototype = {
		// movie comparison
		_createComparison : function(targetMoviePic, moviePic, targetMovieName, moviename, targetMovieActor, movieactor, targetMovieDirector, moviedirector, targetMovieGenre, moviegenre, targetMovieRating, movierating) {
			const comparisonBack = document.createElement('div')
			comparisonBack.className = 'musicComparison'
			comparisonBack.style = 'width: 100%; height: 100%; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index:150; background-color: black; background-color: rgba(0, 0, 0, 0.6);  overflow: auto; transition: all 0.3s linear; font-family: Times New Roman'

			const comparison = document.createElement('div')
			comparison.style = 'width: 1000px; height: 650px; background-color: white; position: absolute; top: 110px; left: 460px;'

			const closeButton = document.createElement('div')
			closeButton.style = 'width: 65px; height: 50px; float: right; display: flex; cursor: pointer; background-color: white; align-items: center; justify-content: center;'
			closeButton.addEventListener('click', function(event){
				event.currentTarget.parentNode.parentNode.remove()
			})
			const closeIcon = document.createElement('span')
			closeIcon.style = 'color: grey; font-size: 30px; font-weight:800; transition: color 150ms ease-in-out;'
			closeIcon.addEventListener('mouseover', function(event){
				event.currentTarget.style.color = "black";
			})
			closeIcon.addEventListener('mouseout', function(event){
				event.currentTarget.style.color = "grey";
			})
			closeIcon.appendChild(document.createTextNode("\u2573")) // "\u274C"
			closeButton.appendChild(closeIcon)
			comparison.appendChild(closeButton)

			const compTable = document.createElement('table')
			compTable.style = 'display: flex; width: 800px; margin-left: 110px; margin-right: auto; height: 500px; font-size: 20px; font-weight: 600; text-align: center; border-collapse: collapse; table-layout: auto; margin-top: 60px; display:table'
			const compTbody = document.createElement('tbody') 
			compTable.appendChild(compTbody)

			const picContent = ['Movie Poster', targetMoviePic, moviePic]
			const nameContent = ['Movie Name', targetMovieName, moviename]
			const actorContent = ['Staring Actor', targetMovieActor, movieactor]
			const directorContent = ['Director', targetMovieDirector, moviedirector]
			const genreContent = ['Genre', targetMovieGenre, moviegenre]
			const ratingContent = ['Rating', targetMovieRating, movierating]
			const allContent = [picContent, nameContent, directorContent, actorContent, genreContent, ratingContent]
			console.log(allContent)

			for(let key1 in allContent){
				let tr = compTbody.insertRow()
				tr.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; width = 100%'
				for(let key in allContent[key1]){
					if(key1 == 0){ // add pic
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding-top: 5px'
							td.style.width = '40%'
							let tdRef = document.createElement('a')
							tdRef.style = 'cursor: pointer;'
							tdRef.href = allContent[1][key].link
							const pic = document.createElement('img')
							pic.className = 'picture'
							pic.style = 'display:flex; width: 117px; height: 182px; object-fit: cover; display: inherit'
							pic.src = allContent[key1][key]
							tdRef.appendChild(pic)
							td.appendChild(tdRef)
						}
					}else if(key1 == 1){ // add names
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '40%'
							let tdRef = document.createElement('a')
							tdRef.style = 'text-decoration: none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
							tdRef.addEventListener("mouseover", function( event ) {
								event.target.style.color = "orange";
							});
							tdRef.addEventListener("mouseout", function( event ) {
								event.target.style.color = "black";
							});
							tdRef.href = allContent[key1][key].link
							tdRef.appendChild(document.createTextNode(allContent[key1][key].name))
							td.appendChild(tdRef)
						}
					}else if(key1 == 2 || key1 == 3 || key1 == 4){
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '40%'
							for(let key2 in allContent[key1][key]){
								let tdRef = document.createElement('a')
								tdRef.style = 'text-decoration: none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
								tdRef.addEventListener("mouseover", function( event ) {
									event.target.style.color = "orange";
								});
								tdRef.addEventListener("mouseout", function( event ) {
									event.target.style.color = "black";
								});
								tdRef.href = allContent[key1][key][key2].link 
								if(key1 == 2) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].director}`))
								else if(key1 == 3) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].actor}`))
								else if(key1 == 4) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].genre}`))
								td.appendChild(tdRef)
								if(key2 != allContent[key1][key].length-1) td.appendChild(document.createTextNode(', '))
							}
						}
					}else{
						let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							if(key == 0){
								td.style.width = '20%'
							}
							if(key != 0){
								td.style.width = '40%'
							}
							td.appendChild(document.createTextNode(allContent[key1][key]))
					}
				}
			}

			comparison.appendChild(compTable)
			comparisonBack.appendChild(comparison)
			const body = $('body')
			body.append(comparisonBack)
		},
		// movie popout
		_createPopout : function(moviePic, moviename, movieactor, moviedirector, moviegenre, movieintroduction, movierating, id, reviewLink) {
			const profile = document.createElement('div')
			profile.className = 'moviePopup'
			profile.id = id
			profile.style = 'width:350px; height:350px; position: absolute; background-color: #fcfcf7; z-index:10; margin-top: -20px; margin-left: -80px; display: flex; border-radius: 15px; border-width: 3px; border-style:groove; flex-direction: column; font-family: Times New Roman'

			const hitem1 = document.createElement('div')
			hitem1.style = 'display:flex; flex-direction: row; width: 100%; align-items: center; '
			const hitem2 = document.createElement('div')
			hitem2.style = 'display:flex; flex-direction: column; width: 100%; align-items: center; '

			const vitem1 = document.createElement('div')
			vitem1.className = 'vitem1'
			vitem1.style = 'display:flex; flex-direction: column; width: 140px; align-items: center; '

			const vitem2 = document.createElement('div')
			vitem2.className = 'vitem2'
			vitem2.style = 'display:flex; flex-direction: column; width: 210px; align-items: center;'

			const picWrapper = document.createElement('a')
			picWrapper.href = moviename.link
			picWrapper.style = 'text-decoration: none; cursor: pointer'
			const pic = document.createElement('img')
			pic.className = 'picture'
			pic.style = 'float: left; display:flex; width: 90px; padding-left: 5px; height: 140px; object-fit: cover; padding-top: 10px;'
			pic.src = moviePic
			picWrapper.appendChild(pic)
			vitem1.appendChild(picWrapper)

			const rating = document.createElement('h1')
			rating.className = 'rating'
			rating.style = 'text-align: center; font-size: 18px; height: fit-content; margin:0px;'
			if(movierating >= 7) rating.style.color = '#2cd916'
			else if (movierating >= 3) rating.style.color = '#fc3'
			else rating.style.color = 'red'
			rating.appendChild(document.createTextNode(`Rating: ${movierating}`))

			const nameAndArtist = document.createElement('div')
			nameAndArtist.className = 'nameAndArtist'
			nameAndArtist.style = 'display:flex; height: 140px; flex-direction:column; padding-top: 10px; '

			const nameWrapper = document.createElement('a')
			nameWrapper.href = moviename.link
			nameWrapper.style = 'text-decoration: none; cursor: pointer'
			const name = document.createElement('h1')
			name.className = 'name'
			name.style = 'color:black; text-align: center; font-size: 20px; height: fit-content; margin:0px; overflow:auto; transition: color 150ms ease-in-out;'
			name.appendChild(document.createTextNode(moviename.name))
			name.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			name.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			nameWrapper.appendChild(name)

			const directors = document.createElement('div')
			directors.style = 'font-size:15px; overflow: hidden; text-overflow: ellipsis; padding-top:5px; color: black; max-height:32px; font-weight: 600; text-align:center;'
			directors.appendChild(document.createTextNode('by '))
			for(let key in moviedirector){
				const directorRef = document.createElement('a')
				directorRef.href = moviedirector[key].link
				directorRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				directorRef.appendChild(document.createTextNode(`${moviedirector[key].director}`))
				directorRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				directorRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				directors.appendChild(directorRef)
				if(key != moviedirector.length-1) directors.appendChild(document.createTextNode(', '))
			}

			const actors = document.createElement('div')
			actors.style = 'font-size:15px; overflow: hidden; text-overflow: ellipsis; padding-top:5px; color: black; max-height:65px; font-weight: 600; text-align:center; word-break: break-word;'
			actors.appendChild(document.createTextNode('Staring: '))
			for(let key in movieactor){
				const actorRef = document.createElement('a')
				actorRef.href = movieactor[key].link
				actorRef.style = 'text-decoration:none; cursor: pointer; color: black'
				actorRef.appendChild(document.createTextNode(`${movieactor[key].actor}`))
				actorRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				actorRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				actors.appendChild(actorRef)
				if(key != movieactor.length-1) actors.appendChild(document.createTextNode(', '))
			}

			const genres = document.createElement('div')
			genres.style = 'font-size:15px; overflow: hidden; text-overflow: ellipsis; height:fit-content; font-weight: 600; text-align:center;'
			for(let key in moviegenre){
				const genreRef = document.createElement('a')
				genreRef.href = moviegenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${moviegenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				genres.appendChild(genreRef)
				if(key != moviegenre.length-1) genres.appendChild(document.createTextNode(', '))
			}

			nameAndArtist.appendChild(nameWrapper)
			nameAndArtist.appendChild(genres)
			nameAndArtist.appendChild(directors)
			nameAndArtist.appendChild(actors)
			vitem2.appendChild(nameAndArtist)
			vitem2.appendChild(rating)

			const introduction = document.createElement('div')
			introduction.className = 'introduction'
			introduction.style = 'display:flex; height: 135px; text-align:left; word-break: break-word; overflow:auto; flex-direction: row; padding: 5px 10px 5px 10px; text-indent: 30px'
			const introWrapper = document.createElement('a')
			introWrapper.href = moviename.link
			introWrapper.style = 'text-decoration:none; cursor: pointer; color: black'
			introWrapper.appendChild(document.createTextNode(movieintroduction))
			introduction.appendChild(introWrapper)
			hitem2.appendChild(introduction)
		
			const buttonWrapper = document.createElement('div')
			buttonWrapper.style = "display:flex; flex-direction: row; height: 30px;"
			const compareButtonWrapper = document.createElement('a')
			// compareButtonWrapper.href = compareLink
			compareButtonWrapper.style = 'text-decoration: none; cursor: pointer; margin-right: 60px'
			const compareButton = document.createElement('button')
			compareButton.textContent = 'Compare'
			compareButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation;'
			compareButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			compareButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			compareButton.addEventListener("click", function( event ) {
				MovieGenerator.prototype._generateComparisonList(moviePic, moviename, movieactor, moviedirector, moviegenre, movierating, id, '')
			});
			compareButtonWrapper.appendChild(compareButton)
			buttonWrapper.appendChild(compareButtonWrapper)

			const reviewButtonWrapper = document.createElement('a')
			reviewButtonWrapper.href = reviewLink
			reviewButtonWrapper.style = 'text-decoration: none; cursor: pointer'
			const reviewButton = document.createElement('button')
			reviewButton.textContent = 'Review'
			reviewButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation;'
			reviewButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "#0024ff";
			});
			reviewButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			reviewButtonWrapper.appendChild(reviewButton)
			buttonWrapper.appendChild(reviewButtonWrapper)
			hitem2.appendChild(buttonWrapper)

			hitem1.appendChild(vitem1)
			hitem1.appendChild(vitem2)
			profile.appendChild(hitem1)
			profile.appendChild(hitem2)
			const parentID = profile.id.slice(0, -1)
			const parent = $(`#${parentID}`)
			parent.append(profile)
		},

		_generateComparisonList: function(moviePic, moviename, movieactor, moviedirector, moviegenre, movierating, id, searchValue){
			const comparisonBack = document.createElement('div')
			comparisonBack.className = 'movieComparison'
			comparisonBack.style = 'width: 100%; height: 100%; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index:150; background-color: black; background-color: rgba(0, 0, 0, 0.6);  overflow: auto; transition: all 0.3s linear; font-family: Times New Roman'

			const comparison = document.createElement('div')
			comparison.style = 'width: 600px; height: 850px; background-color: white; position: absolute; top: 50px; left: 650px;'

			const utility = document.createElement('div')
			utility.style = 'display: flex; width: 600px; height: 50px; flex-direction: row'

			const searchWrapper = document.createElement('div')
			searchWrapper.style = 'display: flex; width: 550px; height: 50px; flex-direction: row;'
			const searchBar = document.createElement('input')
			searchBar.placeholder = 'Search'
			searchBar.style = 'display: flex; width: 250px; height: 30px; margin: 16px 0px 0px 75px; padding: 0px; font-size: 20px; overflow: auto; border-style: ridge; border-width: 2px; text-indent: 5px'
			const serarchButton = document.createElement('button')
			serarchButton.textContent = 'Search'
			serarchButton.style = 'background-color: rgb(36, 65, 181); border-radius: 12px; color: white; cursor: pointer; font-weight: bold; padding: 3px 0px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 14px; user-select: none; -webkit-user-select: none; touch-action: manipulation; margin-left: 15px; margin-top: 16px;'
			serarchButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "#ffdb00";
			});
			serarchButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "white";
			});
			serarchButton.addEventListener('click', function(event){
				const search = searchBar.value
				MovieGenerator.prototype._generateComparisonList(moviePic, moviename, movieactor, moviedirector, moviegenre, movierating, id, search)
				event.currentTarget.parentNode.parentNode.parentNode.parentNode.remove()

			})

			searchWrapper.appendChild(searchBar)
			searchWrapper.appendChild(serarchButton)

			const closeButton = document.createElement('div')
			closeButton.style = 'width: 65px; height: 50px; float: right; display: flex; cursor: pointer; background-color: white; align-items: center; justify-content: center;'
			closeButton.addEventListener('click', function(event){
				event.currentTarget.parentNode.parentNode.parentNode.remove()
			})
			const closeIcon = document.createElement('span')
			closeIcon.style = 'color: grey; font-size: 30px; font-weight:800; transition: color 150ms ease-in-out;'
			closeIcon.addEventListener('mouseover', function(event){
				event.currentTarget.style.color = "black";
			})
			closeIcon.addEventListener('mouseout', function(event){
				event.currentTarget.style.color = "grey";
			})
			closeIcon.appendChild(document.createTextNode("\u2573")) // "\u274C"
			closeButton.appendChild(closeIcon)
			utility.appendChild(searchWrapper)
			utility.appendChild(closeButton)
			comparison.appendChild(utility)

			const tableWrapper = document.createElement('div')
			tableWrapper.style = 'overflow:auto; height: 800px; width: 600px; position: relative; margin-top: 0px'
			const compTable = document.createElement('table')
			compTable.style = 'display: flex; width: 500px; margin-left: 55px; margin-right: auto; height: 700px; text-align: center; border-collapse: seperate; border-spacing: 0 1em; table-layout: auto; display:table; margin-top: 30px'
			const compTbody = document.createElement('tbody') 
			compTable.appendChild(compTbody)

			for(let key in _allMovies){
				if(key === id.charAt(id.length - 2) || (!_allMovies[key].moviename.name.toLowerCase().includes(searchValue.toLowerCase()) && !_genreIncludes(_allMovies[key].moviegenre, searchValue) && !_actorIncludes(_allMovies[key].movieactor, searchValue) && !_directorIncludes(_allMovies[key].moviedirector, searchValue))) continue;
				let tr = compTbody.insertRow()
				tr.id = _generateID() +`${key}`
				MovieGenerator.prototype._createCompProfile(tr, _allMovies[key].moviePic, _allMovies[key].moviename, _allMovies[key].movieactor, _allMovies[key].moviedirector, _allMovies[key].moviegenre, _allMovies[key].movientroduction, _allMovies[key].movierating, _allMovies[key].reviewLink, 0)
				const compareButton = document.createElement('button')
				compareButton.textContent = 'Compare'
				compareButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation; margin-left: 80px; margin-top: 85px;'
				compareButton.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				compareButton.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				compareButton.addEventListener("click", function( event ) {
					const targetKey = event.currentTarget.parentNode.id.slice(-1)
					MovieGenerator.prototype._createComparison(_allMovies[targetKey].moviePic, moviePic, _allMovies[targetKey].moviename, moviename, _allMovies[targetKey].movieactor, movieactor, _allMovies[targetKey].moviedirector, moviedirector, _allMovies[targetKey].moviegenre, moviegenre,  _allMovies[targetKey].movierating, movierating)
				});

				tr.appendChild(compareButton)
			}

			tableWrapper.appendChild(compTable)
			comparison.appendChild(tableWrapper)
			comparisonBack.appendChild(comparison)
			const body = $('body')
			body.append(comparisonBack)
		},

		_createCompProfile: function(parent, moviePic, moviename, movieactor, moviedirector, moviegenre, movientroduction, movierating, reviewLink, popup) {
			const wrapper2 = document.createElement('div')
			wrapper2.style = 'width:150px; height:225px; display: inline-flex; flex-direction: column; position:relative; vertical-align: top; font-family: Times New Roman'
			wrapper2.className = 'movieProfileType'
			wrapper2.id = _generateID() + _totalMovies()
			if(popup === 1){
				wrapper2.addEventListener('mouseenter', function(event){
					const popoutID = `${wrapper2.id}1`
					MovieGenerator.prototype._createPopout(moviePic, moviename, movieactor, moviedirector, moviegenre, movientroduction, movierating, popoutID, reviewLink)
				})
				wrapper2.addEventListener("mouseleave", function(event) {
					const removerID = `${wrapper2.id}1`
					const toremove = document.getElementById(removerID)
					toremove.remove()
				})
			}

			wrapper2.draggable = true
			wrapper2.addEventListener("dragstart", function(event) {		
				event.target.style.opacity = .6;
				event.dataTransfer.setData("id", event.currentTarget.id);
				event.dataTransfer.setData("moviePic", moviePic);
				event.dataTransfer.setData("moviename", JSON.stringify(moviename));
				event.dataTransfer.setData("movieactor", JSON.stringify(movieactor));
				event.dataTransfer.setData("moviedirector",  JSON.stringify(moviedirector));
				event.dataTransfer.setData("moviegenre",  JSON.stringify(moviegenre));
				event.dataTransfer.setData("movierating", movierating);
			}, false);

			wrapper2.addEventListener("dragend", function(event) {
				event.target.style.opacity = "";
			}, false);

			wrapper2.addEventListener("dragover", function(event) {
				event.preventDefault();
			}, false);

			wrapper2.addEventListener("drop", function(event) {
				event.preventDefault();
				const firedId = event.dataTransfer.getData("id");
				const targetMoviePic = event.dataTransfer.getData("moviePic");
				const targetMovieName = JSON.parse(event.dataTransfer.getData("moviename")); 
				const targetMovieActor = JSON.parse(event.dataTransfer.getData("movieactor"));
				const targetMovieGenre = JSON.parse(event.dataTransfer.getData("moviegenre"));
				const targetMovieRating = event.dataTransfer.getData("movierating");
				const targetMovieDirector = JSON.parse(event.dataTransfer.getData("moviedirector"))

				if (event.currentTarget.className.includes('movieProfileType') && firedId != event.currentTarget.id) {
					MovieGenerator.prototype._createComparison(targetMoviePic, moviePic, targetMovieName, moviename, targetMovieActor, movieactor, targetMovieDirector, moviedirector, targetMovieGenre, moviegenre, targetMovieRating, movierating)
				}
			}, false);

			const wrapperRef2 = document.createElement('a')
			wrapperRef2.href = moviename.link // would be passed in by user
			wrapperRef2.style = 'text-decoration:none; cursor: pointer;'

			const pic2 = document.createElement('img')
			pic2.className = 'picture'
			pic2.style = 'display:flex; width: 150px; height: 225px; '
			pic2.src = moviePic
			wrapperRef2.appendChild(pic2)
			
			const titles2 = document.createElement('div')
			titles2.className = 'titles2'
			titles2.style = 'width: 134px; height: 59px; padding: 8px; position: absolute; background-color: rgba(0,0,0,.75); bottom: 0'

			const name2 = document.createElement('h1')
			name2.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white;'
			name2.appendChild(document.createTextNode(moviename.name))
			titles2.appendChild(name2)

			const genres2 = document.createElement('div')
			genres2.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; max-height:36px'
			for(let key in moviegenre){
				const genreRef = document.createElement('a')
				genreRef.href = moviegenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${moviegenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				genres2.appendChild(genreRef)
				if(key != moviegenre.length-1) genres2.appendChild(document.createTextNode(', '))
			}
			titles2.appendChild(genres2)

			wrapper2.appendChild(wrapperRef2)
			wrapper2.appendChild(titles2)
			parent.append(wrapper2)
		},

		_createSlideProfile: function(parent, moviePic, moviename, movieactor, moviedirector, moviegenre, movierating) {
			const wrapper2 = document.createElement('div')
			wrapper2.style = 'width:150px; height:225px; display: inline-flex; flex-direction: column; position:relative; padding-right: 7px; font-family: Times New Roman'
			wrapper2.className = 'movieProfileType'
			wrapper2.id = _generateID() + _totalMovies()

			wrapper2.draggable = true
			wrapper2.addEventListener("dragstart", function(event) {		
				event.target.style.opacity = .6;
				event.dataTransfer.setData("id", event.currentTarget.id);
				event.dataTransfer.setData("moviePic", moviePic);
				event.dataTransfer.setData("moviename", JSON.stringify(moviename));
				event.dataTransfer.setData("movieactor", JSON.stringify(movieactor));
				event.dataTransfer.setData("moviedirector",  JSON.stringify(moviedirector));
				event.dataTransfer.setData("moviegenre",  JSON.stringify(moviegenre));
				event.dataTransfer.setData("movierating", movierating);
			}, false);

			wrapper2.addEventListener("dragend", function(event) {
				event.target.style.opacity = "";
			}, false);

			wrapper2.addEventListener("dragover", function(event) {
				event.preventDefault();
			}, false);

			wrapper2.addEventListener("drop", function(event) {
				event.preventDefault();
				const firedId = event.dataTransfer.getData("id");
				const targetMoviePic = event.dataTransfer.getData("moviePic");
				const targetMovieName = JSON.parse(event.dataTransfer.getData("moviename")); 
				const targetMovieActor = JSON.parse(event.dataTransfer.getData("movieactor"));
				const targetMovieGenre = JSON.parse(event.dataTransfer.getData("moviegenre"));
				const targetMovieRating = event.dataTransfer.getData("movierating");
				const targetMovieDirector = JSON.parse(event.dataTransfer.getData("moviedirector"))

				if (event.currentTarget.className.includes('movieProfileType') && firedId != event.currentTarget.id) {
					MovieGenerator.prototype._createComparison(targetMoviePic, moviePic, targetMovieName, moviename, targetMovieActor, movieactor, targetMovieDirector, moviedirector, targetMovieGenre, moviegenre, targetMovieRating, movierating)
				}
			}, false);

			const wrapperRef2 = document.createElement('a')
			wrapperRef2.href = moviename.link // would be passed in by user
			wrapperRef2.style = 'text-decoration:none; cursor: pointer;'

			const pic2 = document.createElement('img')
			pic2.className = 'picture'
			pic2.style = 'display:flex; width: 150px; height: 225px; '
			pic2.src = moviePic
			wrapperRef2.appendChild(pic2)
			
			const titles2 = document.createElement('div')
			titles2.className = 'titles2'
			titles2.style = 'width: 134px; height: 59px; padding: 8px; position: absolute; background-color: rgba(0,0,0,.75); bottom: 0'

			const name2 = document.createElement('h1')
			name2.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white;'
			name2.appendChild(document.createTextNode(moviename.name))
			titles2.appendChild(name2)

			const genres2 = document.createElement('div')
			genres2.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; max-height:36px'
			for(let key in moviegenre){
				const genreRef = document.createElement('a')
				genreRef.href = moviegenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${moviegenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				genres2.appendChild(genreRef)
				if(key != moviegenre.length-1) genres2.appendChild(document.createTextNode(', '))
			}
			titles2.appendChild(genres2)

			wrapper2.appendChild(wrapperRef2)
			wrapper2.appendChild(titles2)
			parent.append(wrapper2)
		},

		createNewSlideshow: function(parent) {
			var hover = 1;
			const slideLength = Math.ceil(this._movies.length / 4) - 1
			const wrapper = document.createElement('div')
			wrapper.style = 'height: 255px; display: flex; flex-direction: column; font-family: Times New Roman'
			wrapper.addEventListener("mouseover", function( event ) {
				hover = 0
			});
			wrapper.addEventListener("mouseout", function( event ) {
				hover = 1
			});
			const slideWrapper = document.createElement('div')
			slideWrapper.style = 'display: flex; justify-content: center; overflow: hidden;'

			const slide = document.createElement('div')
			slide.style = ' display: flex; transition: transform 250ms ease-in-out; width: 620px; height: 225px; --slider-index: 0; transform: translateX(calc(var(--slider-index) * -100%));'

			for(let key in this._movies){
				MovieGenerator.prototype._createSlideProfile(slide, this._movies[key].moviePic, this._movies[key].moviename, this._movies[key].movieactor, this._movies[key].moviedirector, this._movies[key].moviegenre, this._movies[key].movierating)
			}

			const leftButton = document.createElement('button')
			leftButton.style = 'border: none; border-radius: 15px;  border-top-left-radius: 0; border-bottom-left-radius: 0;flex-grow: 0;flex-shrink: 0;background-color: rgba(100, 100, 100, 0.6);z-index: 100;margin: 0;width: 56px; height: 225px; cursor: pointer;font-size: 65px;display: flex;align-items: center;justify-content: center;color: white;line-height: 0;transition: background-color 150ms ease-in-out; transition: font-size 150ms ease-in-out;'
			leftButton.addEventListener("mouseover", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.9)";
				event.target.style.fontSize = '90px';
			});
			leftButton.addEventListener("mouseout", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.6)";
				event.target.style.fontSize = '65px';
			});
			leftButton.addEventListener("click", function( event ) {
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(sliderIndex !== 0){
					slide.style.setProperty("--slider-index", sliderIndex - 1)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (sliderIndex - 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (sliderIndex - 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
				else if(sliderIndex === 0){
					slide.style.setProperty("--slider-index", slideLength)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (slideLength)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (slideLength)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
			});
			const leftButtonText = document.createElement('div')
			leftButton.innerHTML = '\&#8249;'
			leftButton.appendChild(leftButtonText)

			const rightButton = document.createElement('button')
			rightButton.style = 'border: none; border-radius: 15px; border-top-right-radius: 0; border-bottom-right-radius: 0;flex-grow: 0;flex-shrink: 0;background-color: rgba(100, 100, 100, 0.6);z-index: 10;margin: 0; width: 60px; height: 225px; cursor: pointer;font-size: 65px;display: flex;align-items: center;justify-content: center;color: white;line-height: 0; transition: background-color 150ms ease-in-out; transition: font-size 150ms ease-in-out;'
			rightButton.addEventListener("mouseover", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.9)";
				event.target.style.fontSize = '90px';
			});
			rightButton.addEventListener("mouseout", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.6)";
				event.target.style.fontSize = '65px';
				
			});
			rightButton.addEventListener("click", function( event ) {
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(sliderIndex !== slideLength){
					slide.style.setProperty("--slider-index", sliderIndex + 1)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
				else if(sliderIndex === slideLength){
					slide.style.setProperty("--slider-index",  0)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
			});
			const rightButtonText = document.createElement('div')
			rightButton.innerHTML = '\&#8250;'
			rightButton.appendChild(rightButtonText)

			const progressBarWrapper = document.createElement('div')
			progressBarWrapper.style = 'height: 30px; display: flex; align-items: center; justify-content: center;'
			for(let i = 0; i < slideLength+1; i++){
				let progressBar = document.createElement('div')
				progressBar.id = i
				progressBar.style = 'width: 24px; height: 8px; background-color: rgba(100, 100, 100, 0.4); margin-right: 5px; transition: background-color 150ms ease-in-out; cursor: pointer'
				if(i == 0) progressBar.style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
				progressBar.addEventListener("click", function( event ) {
					slide.style.setProperty("--slider-index",  event.currentTarget.id)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i != event.currentTarget.id) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i == event.currentTarget.id) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				})
				progressBarWrapper.appendChild(progressBar)
			}
			
			slideWrapper.appendChild(leftButton)
			slideWrapper.appendChild(slide)
			slideWrapper.appendChild(rightButton)
			wrapper.appendChild(slideWrapper)
			wrapper.appendChild(progressBarWrapper)
			parent.append(wrapper)
			setInterval(function (){
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(hover == 1){
					if(sliderIndex !== slideLength){
						slide.style.setProperty("--slider-index", sliderIndex + 1)
						const progressBars = progressBarWrapper.children
						for(let i = 0; i < progressBars.length; i++){
							if(i !== (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
							else if(i === (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
						}
					}
					else if(sliderIndex == slideLength){
						slide.style.setProperty("--slider-index",  0)
						const progressBars = progressBarWrapper.children
						for(let i = 0; i < progressBars.length; i++){
							if(i != 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)';
							else if(i == 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
						}
					}
				}
			}, 3000);
		},

		createNewProfile: function(parent, template, moviePic, moviename, movieactor, moviedirector, moviegenre, movientroduction, movierating, reviewLink, popup) {
			switch(template) {
				case 1: // slide show version
					const wrapper1 = document.createElement('div')
					wrapper1.style = 'width:180px; height:450px; display: inline-flex; flex-direction: column; position:relative; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapper1.className = 'movieProfileType1'
					wrapper1.id = _generateID() + _totalMovies()
					if(popup === 1){
						wrapper1.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper1.id}1`
							MovieGenerator.prototype._createPopout(moviePic, moviename, movieactor, moviedirector, moviegenre, movientroduction, movierating, popoutID, reviewLink)
						})
						wrapper1.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper1.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper1.draggable = true
					wrapper1.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("moviePic", moviePic);
						event.dataTransfer.setData("moviename", JSON.stringify(moviename));
						event.dataTransfer.setData("movieactor", JSON.stringify(movieactor));
						event.dataTransfer.setData("moviedirector",  JSON.stringify(moviedirector));
						event.dataTransfer.setData("moviegenre",  JSON.stringify(moviegenre));
						event.dataTransfer.setData("movierating", movierating);
					}, false);

					wrapper1.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper1.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper1.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetMoviePic = event.dataTransfer.getData("moviePic");
						const targetMovieName = JSON.parse(event.dataTransfer.getData("moviename")); 
						const targetMovieActor = JSON.parse(event.dataTransfer.getData("movieactor"));
						const targetMovieGenre = JSON.parse(event.dataTransfer.getData("moviegenre"));
						const targetMovieRating = event.dataTransfer.getData("movierating");
						const targetMovieDirector = JSON.parse(event.dataTransfer.getData("moviedirector"))

						if (event.currentTarget.className.includes('movieProfileType') && firedId != event.currentTarget.id) {
							MovieGenerator.prototype._createComparison(targetMoviePic, moviePic, targetMovieName, moviename, targetMovieActor, movieactor, targetMovieDirector, moviedirector, targetMovieGenre, moviegenre, targetMovieRating, movierating)
						}
					}, false);

					const wrapperRef1 = document.createElement('a')
					wrapperRef1.href = moviename.link // would be passed in by user
					wrapperRef1.style = 'text-decoration:none; cursor: pointer;'

					const pic1 = document.createElement('img')
					pic1.className = 'picture'
					pic1.style = 'display:flex; width: 180px; height: 280px; '
					pic1.src = moviePic
					wrapperRef1.appendChild(pic1)

					const rating1 = document.createElement('div')
					rating1.style = 'position: absolute; z-index: 2; text-align: center; border-radius:50%; width: 40px; height:41px; margin-top: 250px; margin-left: 68px; '
					if(movierating >= 7) rating1.style.backgroundColor = '#2cd916'
					else if (movierating >= 3) rating1.style.backgroundColor = '#fc3'
					else rating1.style.backgroundColor = 'red'
					const ratingRef1 = document.createElement('a')
					ratingRef1.href = moviename.link
					ratingRef1.style = 'text-decoration:none; cursor: pointer;'
					
					const ratingText1 = document.createElement('div')
					ratingText1.style = 'font-size: 15px; color: white; padding-top:13px; transition: color 150ms ease-in-out;'
					ratingText1.addEventListener("mouseover", function( event ) {
						event.target.style.color = "black";
					});
					ratingText1.addEventListener("mouseout", function( event ) {
						event.target.style.color = "white";
					});
					ratingText1.appendChild(document.createTextNode(movierating))
					ratingRef1.appendChild(ratingText1)
					rating1.appendChild(ratingRef1)

					const titles1 = document.createElement('div')
					titles1.className = 'titles1'
					titles1.style = 'width: 160px; height: 150px; padding: 10px; display: flex; flex-direction:column; background-color: rgba(0,0,0,.75); z-index:1;'

					const name1 = document.createElement('div')
					name1.style = 'font-size:20px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; text-align: center; max-height:30px'
					name1.appendChild(document.createTextNode(moviename.name))
					titles1.appendChild(name1)

					const actors1 = document.createElement('div')
					actors1.style = 'font-size:15px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; max-height:70px;'
					actors1.appendChild(document.createTextNode('Staring: '))
					for(let key in movieactor){
						const actorRef = document.createElement('a')
						actorRef.href = movieactor[key].link
						actorRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
						actorRef.appendChild(document.createTextNode(`${movieactor[key].actor}`))
						actorRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						actorRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "white";
						});
						actors1.appendChild(actorRef)
						if(key != movieactor.length-1) actors1.appendChild(document.createTextNode(', '))
					}
					titles1.appendChild(actors1)

					const director1 = document.createElement('div')
					director1.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; max-height:35px; padding-top: 3px'
					director1.appendChild(document.createTextNode('Directed by: '))
					for(let key in moviedirector){
						const directorRef = document.createElement('a')
						directorRef.href = moviedirector[key].link
						directorRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
						directorRef.appendChild(document.createTextNode(`${moviedirector[key].director}`))
						directorRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						directorRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "white";
						});
						director1.appendChild(directorRef)
						if(key != moviedirector.length-1) director1.appendChild(document.createTextNode(', '))
					}
					titles1.appendChild(director1)

					const genres1 = document.createElement('div')
					genres1.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; max-height:16px; padding-top: 3px'
					genres1.appendChild(document.createTextNode('Genre: '))
					for(let key in moviegenre){
						const genreRef = document.createElement('a')
						genreRef.href = moviegenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${moviegenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "white";
						});
						genres1.appendChild(genreRef)
						if(key != moviegenre.length-1) genres1.appendChild(document.createTextNode(', '))
					}
					titles1.appendChild(genres1)

					wrapper1.appendChild(wrapperRef1)
					wrapper1.appendChild(rating1)
					wrapper1.appendChild(titles1)
					parent.append(wrapper1)
					this._movies.push({
						"moviePic": moviePic,
						"moviename": moviename, 
						"movieactor": movieactor, 
						"moviedirector": moviedirector, 
						"moviegenre": moviegenre, 
						"movientroduction": movientroduction, 
						"movierating": movierating,
						"reviewLink": reviewLink
					})
					_allMovies.push({
						"moviePic": moviePic,
						"moviename": moviename, 
						"movieactor": movieactor, 
						"moviedirector": moviedirector, 
						"moviegenre": moviegenre, 
						"movientroduction": movientroduction, 
						"movierating": movierating,
						"reviewLink": reviewLink
					})
					break;
				case 2: // square view
					const wrapper2 = document.createElement('div')
					wrapper2.style = 'width:150px; height:225px; display: inline-flex; flex-direction: column; position:relative; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapper2.className = 'movieProfileType'
					wrapper2.id = _generateID() + _totalMovies()
					if(popup === 1){
						wrapper2.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper2.id}1`
							MovieGenerator.prototype._createPopout(moviePic, moviename, movieactor, moviedirector, moviegenre, movientroduction, movierating, popoutID, reviewLink)
						})
						wrapper2.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper2.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper2.draggable = true
					wrapper2.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("moviePic", moviePic);
						event.dataTransfer.setData("moviename", JSON.stringify(moviename));
						event.dataTransfer.setData("movieactor", JSON.stringify(movieactor));
						event.dataTransfer.setData("moviedirector",  JSON.stringify(moviedirector));
						event.dataTransfer.setData("moviegenre",  JSON.stringify(moviegenre));
						event.dataTransfer.setData("movierating", movierating);
					}, false);

					wrapper2.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper2.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper2.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetMoviePic = event.dataTransfer.getData("moviePic");
						const targetMovieName = JSON.parse(event.dataTransfer.getData("moviename")); 
						const targetMovieActor = JSON.parse(event.dataTransfer.getData("movieactor"));
						const targetMovieGenre = JSON.parse(event.dataTransfer.getData("moviegenre"));
						const targetMovieRating = event.dataTransfer.getData("movierating");
						const targetMovieDirector = JSON.parse(event.dataTransfer.getData("moviedirector"))

						if (event.currentTarget.className.includes('movieProfileType') && firedId != event.currentTarget.id) {
							MovieGenerator.prototype._createComparison(targetMoviePic, moviePic, targetMovieName, moviename, targetMovieActor, movieactor, targetMovieDirector, moviedirector, targetMovieGenre, moviegenre, targetMovieRating, movierating)
						}
					}, false);

					const wrapperRef2 = document.createElement('a')
					wrapperRef2.href = moviename.link // would be passed in by user
					wrapperRef2.style = 'text-decoration:none; cursor: pointer;'

					const pic2 = document.createElement('img')
					pic2.className = 'picture'
					pic2.style = 'display:flex; width: 150px; height: 225px; '
					pic2.src = moviePic
					wrapperRef2.appendChild(pic2)
					
					const titles2 = document.createElement('div')
					titles2.className = 'titles2'
					titles2.style = 'width: 134px; height: 59px; padding: 8px; position: absolute; background-color: rgba(0,0,0,.75); bottom: 0'

					const name2 = document.createElement('h1')
					name2.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white;'
					name2.appendChild(document.createTextNode(moviename.name))
					titles2.appendChild(name2)

					const genres2 = document.createElement('div')
					genres2.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; max-height:36px'
					for(let key in moviegenre){
						const genreRef = document.createElement('a')
						genreRef.href = moviegenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${moviegenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "white";
						});
						genres2.appendChild(genreRef)
						if(key != moviegenre.length-1) genres2.appendChild(document.createTextNode(', '))
					}
					titles2.appendChild(genres2)

					wrapper2.appendChild(wrapperRef2)
					wrapper2.appendChild(titles2)
					parent.append(wrapper2)
					this._movies.push({
						"moviePic": moviePic,
						"moviename": moviename, 
						"movieactor": movieactor, 
						"moviedirector": moviedirector, 
						"moviegenre": moviegenre, 
						"movientroduction": movientroduction, 
						"movierating": movierating,
						"reviewLink": reviewLink
					})
					_allMovies.push({
						"moviePic": moviePic,
						"moviename": moviename, 
						"movieactor": movieactor, 
						"moviedirector": moviedirector, 
						"moviegenre": moviegenre, 
						"movientroduction": movientroduction, 
						"movierating": movierating,
						"reviewLink": reviewLink
					})
					break;
				case 3: // simplified view
					const wrapper3 = document.createElement('div')
					wrapper3.style = 'width:180px; height:55px; display: inline-flex; flex-direction: row; background-color: #fcfcf7; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapper3.className = 'movieProfileType'
					wrapper3.id = _generateID() + _totalMovies()
					if(popup === 1){
						wrapper3.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper3.id}1`
							MovieGenerator.prototype._createPopout(moviePic, moviename, movieactor, moviedirector, moviegenre, movientroduction, movierating, popoutID, reviewLink)
						})
						wrapper3.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper3.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper3.draggable = true
					wrapper3.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("moviePic", moviePic);
						event.dataTransfer.setData("moviename", JSON.stringify(moviename));
						event.dataTransfer.setData("movieactor", JSON.stringify(movieactor));
						event.dataTransfer.setData("moviedirector",  JSON.stringify(moviedirector));
						event.dataTransfer.setData("moviegenre",  JSON.stringify(moviegenre));
						event.dataTransfer.setData("movierating", movierating);
					}, false);

					wrapper3.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper3.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper3.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetMoviePic = event.dataTransfer.getData("moviePic");
						const targetMovieName = JSON.parse(event.dataTransfer.getData("moviename")); 
						const targetMovieActor = JSON.parse(event.dataTransfer.getData("movieactor"));
						const targetMovieGenre = JSON.parse(event.dataTransfer.getData("moviegenre"));
						const targetMovieRating = event.dataTransfer.getData("movierating");
						const targetMovieDirector = JSON.parse(event.dataTransfer.getData("moviedirector"))

						if (event.currentTarget.className.includes('movieProfileType') && firedId != event.currentTarget.id) {
							MovieGenerator.prototype._createComparison(targetMoviePic, moviePic, targetMovieName, moviename, targetMovieActor, movieactor, targetMovieDirector, moviedirector, targetMovieGenre, moviegenre, targetMovieRating, movierating)
						}
					}, false);
					
					const titles3 = document.createElement('div')
					titles3.className = 'titles3'
					titles3.style = 'width: 120px; padding-left: 10px; height: 45px; padding-top: 10px'

					const nameWrapper3 = document.createElement('a')
					nameWrapper3.style = 'text-decoration:none; cursor: pointer; '
					nameWrapper3.href = moviename.link // would be passed in by user
					const name3 = document.createElement('h1')
					name3.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
					name3.appendChild(document.createTextNode(moviename.name))
					name3.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					name3.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					nameWrapper3.appendChild(name3)
					titles3.appendChild(nameWrapper3)

					const genres3 = document.createElement('div')
					genres3.style = 'font-size:12px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px;'
					for(let key in moviegenre){
						const genreRef = document.createElement('a')
						genreRef.href = moviegenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${moviegenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						genres3.appendChild(genreRef)
						if(key != moviegenre.length-1) genres3.appendChild(document.createTextNode(', '))
					}
					titles3.appendChild(genres3)

					const rating3 = document.createElement('div')
					rating3.className = 'rating3'
					rating3.style = 'display:flex; width: 50px; height: 55px; justify-content: center; align-items:center;'

					const ratingWrapper3 = document.createElement('div')
					ratingWrapper3.style = 'width: 30px; height: 30px; border-radius:50%; text-align:center; align-items:center;'
					if(movierating >= 7) ratingWrapper3.style.backgroundColor = '#2cd916'
					else if (movierating >= 3) ratingWrapper3.style.backgroundColor = '#fc3'
					else ratingWrapper3.style.backgroundColor = 'red'

					const ratingRef3 = document.createElement('a')
					ratingRef3.href = moviename.link // would be passed in by user
					ratingRef3.style = 'text-decoration:none; cursor: pointer;'

					const ratingText3 = document.createElement('p')
					ratingText3.style = 'padding-top: 6px; margin: 0px; transition: color 150ms ease-in-out;'
					ratingText3.appendChild(document.createTextNode(movierating))
					ratingText3.addEventListener("mouseover", function( event ) {
						event.target.style.color = "white";
					});
					ratingText3.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					ratingRef3.appendChild(ratingText3)
					ratingWrapper3.appendChild(ratingRef3)
					rating3.appendChild(ratingWrapper3)

					wrapper3.appendChild(titles3)
					wrapper3.appendChild(rating3)
					parent.append(wrapper3)
					this._movies.push({
						"moviePic": moviePic,
						"moviename": moviename, 
						"movieactor": movieactor, 
						"moviedirector": moviedirector, 
						"moviegenre": moviegenre, 
						"movientroduction": movientroduction, 
						"movierating": movierating,
						"reviewLink": reviewLink
					})
					_allMovies.push({
						"moviePic": moviePic,
						"moviename": moviename, 
						"movieactor": movieactor, 
						"moviedirector": moviedirector, 
						"moviegenre": moviegenre, 
						"movientroduction": movientroduction, 
						"movierating": movierating,
						"reviewLink": reviewLink
					})
					break;
				default:
					const wrapperd = document.createElement('div')
					wrapperd.style = 'width:180px; height:450px; display: inline-flex; flex-direction: column; position:relative; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapperd.className = 'movieProfileType1'
					wrapperd.id = _generateID() + _totalMovies()
					if(popup === 1){
						wrapperd.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapperd.id}1`
							MovieGenerator.prototype._createPopout(moviePic, moviename, movieactor, moviedirector, moviegenre, movientroduction, movierating, popoutID, reviewLink)
						})
						wrapperd.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapperd.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapperd.draggable = true
					wrapperd.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("moviePic", moviePic);
						event.dataTransfer.setData("moviename", JSON.stringify(moviename));
						event.dataTransfer.setData("movieactor", JSON.stringify(movieactor));
						event.dataTransfer.setData("moviedirector",  JSON.stringify(moviedirector));
						event.dataTransfer.setData("moviegenre",  JSON.stringify(moviegenre));
						event.dataTransfer.setData("movierating", movierating);
					}, false);

					wrapperd.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapperd.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapperd.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetMoviePic = event.dataTransfer.getData("moviePic");
						const targetMovieName = JSON.parse(event.dataTransfer.getData("moviename")); 
						const targetMovieActor = JSON.parse(event.dataTransfer.getData("movieactor"));
						const targetMovieGenre = JSON.parse(event.dataTransfer.getData("moviegenre"));
						const targetMovieRating = event.dataTransfer.getData("movierating");
						const targetMovieDirector = JSON.parse(event.dataTransfer.getData("moviedirector"))

						if (event.currentTarget.className.includes('movieProfileType') && firedId != event.currentTarget.id) {
							MovieGenerator.prototype._createComparison(targetMoviePic, moviePic, targetMovieName, moviename, targetMovieActor, movieactor, targetMovieDirector, moviedirector, targetMovieGenre, moviegenre, targetMovieRating, movierating)
						}
					}, false);

					const wrapperRefd = document.createElement('a')
					wrapperRefd.href = moviename.link // would be passed in by user
					wrapperRefd.style = 'text-decoration:none; cursor: pointer;'

					const picd = document.createElement('img')
					picd.className = 'picture'
					picd.style = 'display:flex; width: 180px; height: 280px; '
					picd.src = moviePic
					wrapperRefd.appendChild(picd)

					const ratingd = document.createElement('div')
					ratingd.style = 'position: absolute; z-index: 2; text-align: center; border-radius:50%; width: 40px; height:41px; margin-top: 250px; margin-left: 68px; '
					if(movierating >= 7) ratingd.style.backgroundColor = '#2cd916'
					else if (movierating >= 3) ratingd.style.backgroundColor = '#fc3'
					else ratingd.style.backgroundColor = 'red'
					const ratingRefd = document.createElement('a')
					ratingRefd.href = moviename.link
					ratingRefd.style = 'text-decoration:none; cursor: pointer;'
					
					const ratingTextd = document.createElement('div')
					ratingTextd.style = 'font-size: 15px; color: white; padding-top:13px; transition: color 150ms ease-in-out;'
					ratingTextd.addEventListener("mouseover", function( event ) {
						event.target.style.color = "black";
					});
					ratingTextd.addEventListener("mouseout", function( event ) {
						event.target.style.color = "white";
					});
					ratingTextd.appendChild(document.createTextNode(movierating))
					ratingRefd.appendChild(ratingTextd)
					ratingd.appendChild(ratingRefd)

					const titlesd = document.createElement('div')
					titlesd.className = 'titles1'
					titlesd.style = 'width: 160px; height: 150px; padding: 10px; display: flex; flex-direction:column; background-color: rgba(0,0,0,.75); z-index:1;'

					const named = document.createElement('div')
					named.style = 'font-size:20px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; text-align: center; max-height:30px'
					named.appendChild(document.createTextNode(moviename.name))
					titlesd.appendChild(named)

					const actorsd = document.createElement('div')
					actorsd.style = 'font-size:15px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; max-height:70px;'
					actorsd.appendChild(document.createTextNode('Staring: '))
					for(let key in movieactor){
						const actorRef = document.createElement('a')
						actorRef.href = movieactor[key].link
						actorRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
						actorRef.appendChild(document.createTextNode(`${movieactor[key].actor}`))
						actorRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						actorRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "white";
						});
						actorsd.appendChild(actorRef)
						if(key != movieactor.length-1) actorsd.appendChild(document.createTextNode(', '))
					}
					titlesd.appendChild(actorsd)

					const directord = document.createElement('div')
					directord.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; max-height:35px; padding-top: 3px'
					directord.appendChild(document.createTextNode('Directed by: '))
					for(let key in moviedirector){
						const directorRef = document.createElement('a')
						directorRef.href = moviedirector[key].link
						directorRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
						directorRef.appendChild(document.createTextNode(`${moviedirector[key].director}`))
						directorRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						directorRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "white";
						});
						directord.appendChild(directorRef)
						if(key != moviedirector.length-1) directord.appendChild(document.createTextNode(', '))
					}
					titlesd.appendChild(directord)

					const genresd = document.createElement('div')
					genresd.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; max-height:16px; padding-top: 3px'
					genresd.appendChild(document.createTextNode('Genre: '))
					for(let key in moviegenre){
						const genreRef = document.createElement('a')
						genreRef.href = moviegenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${moviegenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "white";
						});
						genresd.appendChild(genreRef)
						if(key != moviegenre.length-1) genresd.appendChild(document.createTextNode(', '))
					}
					titlesd.appendChild(genresd)

					wrapperd.appendChild(wrapperRefd)
					wrapperd.appendChild(ratingd)
					wrapperd.appendChild(titlesd)
					parent.append(wrapperd)
					this._movies.push({
						"moviePic": moviePic,
						"moviename": moviename, 
						"movieactor": movieactor, 
						"moviedirector": moviedirector, 
						"moviegenre": moviegenre, 
						"movientroduction": movientroduction, 
						"movierating": movierating,
						"reviewLink": reviewLink
					})
					_allMovies.push({
						"moviePic": moviePic,
						"moviename": moviename, 
						"movieactor": movieactor, 
						"moviedirector": moviedirector, 
						"moviegenre": moviegenre, 
						"movientroduction": movientroduction, 
						"movierating": movierating,
						"reviewLink": reviewLink
					})
			}
		},
		addToCollection: function(moviePic, moviename, movieactor, moviedirector, moviegenre, movientroduction, movierating, reviewLink) {
			this._movies.push({
				"moviePic": moviePic,
				"moviename": moviename, 
				"movieactor": movieactor, 
				"moviedirector": moviedirector, 
				"moviegenre": moviegenre, 
				"movientroduction": movientroduction, 
				"movierating": movierating,
				"reviewLink": reviewLink
			})
			_allMovies.push({
				"moviePic": moviePic,
				"moviename": moviename, 
				"movieactor": movieactor, 
				"moviedirector": moviedirector, 
				"moviegenre": moviegenre, 
				"movientroduction": movientroduction, 
				"movierating": movierating,
				"reviewLink": reviewLink
			})
		}
	}

	GameGenerator.prototype = {
		// game comparison
		_createComparison : function(targetGamePic, gamePic, targetGameName, gamename, targetGameDeveloper, gamedeveloper, targetGamePlatform, gameplatform, targetGameGenre, gamegenre, targetGameRating, gamerating) {
			const comparisonBack = document.createElement('div')
			comparisonBack.className = 'musicComparison'
			comparisonBack.style = 'width: 100%; height: 100%; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index:150; background-color: black; background-color: rgba(0, 0, 0, 0.6);  overflow: auto; transition: all 0.3s linear; font-family: Times New Roman'

			const comparison = document.createElement('div')
			comparison.style = 'width: 1000px; height: 650px; background-color: white; position: absolute; top: 110px; left: 460px;'

			const closeButton = document.createElement('div')
			closeButton.style = 'width: 65px; height: 50px; float: right; display: flex; cursor: pointer; background-color: white; align-items: center; justify-content: center;'
			closeButton.addEventListener('click', function(event){
				event.currentTarget.parentNode.parentNode.remove()
			})
			const closeIcon = document.createElement('span')
			closeIcon.style = 'color: grey; font-size: 30px; font-weight:800; transition: color 150ms ease-in-out;'
			closeIcon.addEventListener('mouseover', function(event){
				event.currentTarget.style.color = "black";
			})
			closeIcon.addEventListener('mouseout', function(event){
				event.currentTarget.style.color = "grey";
			})
			closeIcon.appendChild(document.createTextNode("\u2573")) // "\u274C"
			closeButton.appendChild(closeIcon)
			comparison.appendChild(closeButton)
			
			const compTable = document.createElement('table')
			compTable.style = 'display: flex; width: 800px; margin-left: 110px; margin-right: auto; height: 500px; font-size: 20px; font-weight: 600; text-align: center; border-collapse: collapse; table-layout: auto; margin-top: 60px; display:table'
			const compTbody = document.createElement('tbody') 
			compTable.appendChild(compTbody)

			const picContent = ['Game Poster', targetGamePic, gamePic]
			const nameContent = ['Game Name', targetGameName, gamename]
			const developerContent = ['Developer', targetGameDeveloper, gamedeveloper]
			const platformContent = ['Platform', targetGamePlatform, gameplatform]
			const genreContent = ['Genre', targetGameGenre, gamegenre]
			const ratingContent = ['Rating', targetGameRating, gamerating]
			const allContent = [picContent, nameContent, developerContent, platformContent, genreContent, ratingContent]

			for(let key1 in allContent){
				let tr = compTbody.insertRow()
				tr.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; width = 100%'
				for(let key in allContent[key1]){
					if(key1 == 0){ // add pic
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding-top: 5px'
							td.style.width = '40%'
							let tdRef = document.createElement('a')
							tdRef.style = 'cursor: pointer;'
							tdRef.href = allContent[1][key].link
							const pic = document.createElement('img')
							pic.className = 'picture'
							pic.style = 'display:flex; width: 117px; height: 182px; object-fit: cover; display: inherit'
							pic.src = allContent[key1][key]
							tdRef.appendChild(pic)
							td.appendChild(tdRef)
						}
					}else if(key1 == 1){
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '40%'
							let tdRef = document.createElement('a')
							tdRef.style = 'text-decoration: none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
							tdRef.addEventListener("mouseover", function( event ) {
								event.target.style.color = "orange";
							});
							tdRef.addEventListener("mouseout", function( event ) {
								event.target.style.color = "black";
							});
							tdRef.href = allContent[key1][key].link
							tdRef.appendChild(document.createTextNode(allContent[key1][key].name))
							td.appendChild(tdRef)
						}
					}else if(key1 == 2 || key1 == 3 || key1 == 4){
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '40%'
							for(let key2 in allContent[key1][key]){
								let tdRef = document.createElement('a')
								tdRef.style = 'text-decoration: none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
								tdRef.addEventListener("mouseover", function( event ) {
									event.target.style.color = "orange";
								});
								tdRef.addEventListener("mouseout", function( event ) {
									event.target.style.color = "black";
								});
								tdRef.href = allContent[key1][key][key2].link 
								if(key1 == 2) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].developer}`))
								else if(key1 == 3) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].platform}`))
								else if(key1 == 4) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].genre}`))
								td.appendChild(tdRef)
								if(key2 != allContent[key1][key].length-1) td.appendChild(document.createTextNode(', '))
							}
						}
					}else{
						let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							if(key == 0){
								td.style.width = '20%'
							}
							if(key != 0){
								td.style.width = '40%'
							}
							td.appendChild(document.createTextNode(allContent[key1][key]))
					}
				}
			}

			comparison.appendChild(compTable)
			comparisonBack.appendChild(comparison)
			const body = $('body')
			body.append(comparisonBack)
		},
		// game popout
		_createPopout : function(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gameintro, gamerating, id, reviewLink) {
			const profile = document.createElement('div')
			profile.className = 'gamePopup'
			profile.id = id
			profile.style = 'width:350px; height:350px; position: absolute; background-color: #fcfcf7; z-index:10; margin-top: -30px; margin-left: -20px; display: flex; border-radius: 15px; border-width: 3px; border-style:groove; flex-direction: column; font-family: Times New Roman'

			const hitem1 = document.createElement('div')
			hitem1.style = 'display:flex; flex-direction: row; width: 100%; align-items: center; '
			const hitem2 = document.createElement('div')
			hitem2.style = 'display:flex; flex-direction: column; width: 100%; align-items: center; '

			const vitem1 = document.createElement('div')
			vitem1.className = 'vitem1'
			vitem1.style = 'display:flex; flex-direction: column; width: 140px; align-items: center; '

			const vitem2 = document.createElement('div')
			vitem2.className = 'vitem2'
			vitem2.style = 'display:flex; flex-direction: column; width: 210px; align-items: center;'

			const picWrapper = document.createElement('a')
			picWrapper.href = gamename.link 
			picWrapper.style = 'text-decoration: none; cursor: pointer'
			const pic = document.createElement('img')
			pic.className = 'picture'
			pic.style = 'float: left; display:flex; width: 90px; padding-left: 5px; padding-top: 10px; height: 140px; object-fit: cover;'
			pic.src = gamePic
			picWrapper.appendChild(pic)
			vitem1.appendChild(picWrapper)

			const rating = document.createElement('h1')
			rating.className = 'rating'
			rating.style = 'color:black; text-align: center; font-size: 18px; height: fit-content; margin:0px;'
			if(gamerating >= 7) rating.style.color = '#2cd916'
			else if (gamerating >= 3) rating.style.color = '#fc3'
			else rating.style.color = 'red'
			rating.appendChild(document.createTextNode(`Rating: ${gamerating}`))

			const nameAndArtist = document.createElement('div')
			nameAndArtist.className = 'nameAndArtist'
			nameAndArtist.style = 'display:flex; height: 105px; text-align:center; flex-direction:column; padding-top: 6px; '

			const nameWrapper = document.createElement('a')
			nameWrapper.href = gamename.link 
			nameWrapper.style = 'text-decoration: none; cursor: pointer'
			const name = document.createElement('h1')
			name.className = 'name'
			name.style = 'color:black; text-align: center; font-size: 20px; height: fit-content; margin:0px; overflow:auto; transition: color 150ms ease-in-out;'
			name.appendChild(document.createTextNode(gamename.name))
			name.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			name.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			nameWrapper.appendChild(name)

			const platforms = document.createElement('div')
			platforms.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; height:fit-content; font-weight: 600; padding-top: 3px; '
			for(let key in gameplatform){
				const platformRef = document.createElement('a')
				platformRef.href = gameplatform[key].link
				platformRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				platformRef.appendChild(document.createTextNode(`${gameplatform[key].platform}`))
				platformRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				platformRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				platforms.appendChild(platformRef)
				if(key != gameplatform.length-1) platforms.appendChild(document.createTextNode(', '))
			}

			const developers = document.createElement('div')
			developers.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; height:fit-content; font-weight: 600; padding-top: 3px; max-height: 36px'
			for(let key in gamedeveloper){
				const developerRef = document.createElement('a')
				developerRef.href = gamedeveloper[key].link
				developerRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				developerRef.appendChild(document.createTextNode(`${gamedeveloper[key].developer}`))
				developerRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				developerRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				developers.appendChild(developerRef)
				if(key != gamedeveloper.length-1) developers.appendChild(document.createTextNode(', '))
			}

			const genres = document.createElement('div')
			genres.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; height:fit-content; font-weight: 600; padding-top: 3px'
			for(let key in gamegenre){
				const genreRef = document.createElement('a')
				genreRef.href = gamegenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${gamegenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				genres.appendChild(genreRef)
				if(key != gamegenre.length-1) genres.appendChild(document.createTextNode(', '))
			}

			nameAndArtist.appendChild(nameWrapper)
			nameAndArtist.appendChild(platforms)
			nameAndArtist.appendChild(developers)
			nameAndArtist.appendChild(genres)
			vitem2.appendChild(nameAndArtist)
			vitem2.appendChild(rating)

			const buttonWrapper = document.createElement('div')
			buttonWrapper.style = "display:flex; flex-direction: row; height: 30px; padding-top: 3px"
			const compareButtonWrapper = document.createElement('a')
			// compareButtonWrapper.href = compareLink
			compareButtonWrapper.style = 'text-decoration: none; cursor: pointer; margin-right: 20px'
			const compareButton = document.createElement('button')
			compareButton.textContent = 'Compare'
			compareButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation;'
			compareButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			compareButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			compareButtonWrapper.appendChild(compareButton)
			buttonWrapper.appendChild(compareButtonWrapper)

			const reviewButtonWrapper = document.createElement('a')
			reviewButtonWrapper.href = reviewLink
			reviewButtonWrapper.style = 'text-decoration: none; cursor: pointer'
			const reviewButton = document.createElement('button')
			reviewButton.textContent = 'Review'
			reviewButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation;'
			reviewButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "#0024ff";
			});
			reviewButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			compareButton.addEventListener("click", function( event ) {
				GameGenerator.prototype._generateComparisonList(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gamerating, id, '')
			});
			reviewButtonWrapper.appendChild(reviewButton)
			buttonWrapper.appendChild(reviewButtonWrapper)
			vitem2.appendChild(buttonWrapper)

			const introduction = document.createElement('div')
			introduction.className = 'introduction'
			introduction.style = 'display:flex; text-align:left; height: 165px; word-break: break-word; text-indent: 30px; overflow:auto; flex-direction:row; padding: 10px 10px 5px 10px'
			const introWrapper = document.createElement('a')
			introWrapper.href = gamename.link 
			introWrapper.style = 'text-decoration:none; cursor: pointer; color: black'
			introWrapper.appendChild(document.createTextNode(gameintro))
			introduction.appendChild(introWrapper)
			hitem2.appendChild(introduction)


			hitem1.appendChild(vitem1)
			hitem1.appendChild(vitem2)
			profile.appendChild(hitem1)
			profile.appendChild((hitem2))
			const parentID = profile.id.slice(0, -1)
			const parent = $(`#${parentID}`)
			parent.append(profile)
		},

		_generateComparisonList: function(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gamerating, id, searchValue){
			const comparisonBack = document.createElement('div')
			comparisonBack.className = 'musicComparison'
			comparisonBack.style = 'width: 100%; height: 100%; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index:150; background-color: black; background-color: rgba(0, 0, 0, 0.6);  overflow: auto; transition: all 0.3s linear; font-family: Times New Roman'

			const comparison = document.createElement('div')
			comparison.style = 'width: 600px; height: 850px; background-color: white; position: absolute; top: 50px; left: 650px;'

			const utility = document.createElement('div')
			utility.style = 'display: flex; width: 600px; height: 50px; flex-direction: row'

			const searchWrapper = document.createElement('div')
			searchWrapper.style = 'display: flex; width: 550px; height: 50px; flex-direction: row;'
			const searchBar = document.createElement('input')
			searchBar.placeholder = 'Search'
			searchBar.style = 'display: flex; width: 250px; height: 30px; margin: 16px 0px 0px 75px; padding: 0px; font-size: 20px; overflow: auto; border-style: ridge; border-width: 2px; text-indent: 5px'
			const serarchButton = document.createElement('button')
			serarchButton.textContent = 'Search'
			serarchButton.style = 'background-color: rgb(36, 65, 181); border-radius: 12px; color: white; cursor: pointer; font-weight: bold; padding: 3px 0px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 14px; user-select: none; -webkit-user-select: none; touch-action: manipulation; margin-left: 15px; margin-top: 16px;'
			serarchButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "#ffdb00";
			});
			serarchButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "white";
			});
			serarchButton.addEventListener('click', function(event){
				const search = searchBar.value
				GameGenerator.prototype._generateComparisonList(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gamerating, id, search)
				event.currentTarget.parentNode.parentNode.parentNode.parentNode.remove()

			})

			searchWrapper.appendChild(searchBar)
			searchWrapper.appendChild(serarchButton)

			const closeButton = document.createElement('div')
			closeButton.style = 'width: 65px; height: 50px; float: right; display: flex; cursor: pointer; background-color: white; align-items: center; justify-content: center;'
			closeButton.addEventListener('click', function(event){
				event.currentTarget.parentNode.parentNode.parentNode.remove()
			})
			const closeIcon = document.createElement('span')
			closeIcon.style = 'color: grey; font-size: 30px; font-weight:800; transition: color 150ms ease-in-out;'
			closeIcon.addEventListener('mouseover', function(event){
				event.currentTarget.style.color = "black";
			})
			closeIcon.addEventListener('mouseout', function(event){
				event.currentTarget.style.color = "grey";
			})
			closeIcon.appendChild(document.createTextNode("\u2573")) // "\u274C"
			closeButton.appendChild(closeIcon)
			utility.appendChild(searchWrapper)
			utility.appendChild(closeButton)
			comparison.appendChild(utility)

			const tableWrapper = document.createElement('div')
			tableWrapper.style = 'overflow:auto; height: 800px; width: 600px; position: relative; margin-top: 0px'
			const compTable = document.createElement('table')
			compTable.style = 'display: flex; width: 500px; margin-left: 55px; margin-right: auto; height: 700px; text-align: center; border-collapse: seperate; border-spacing: 0 1em; table-layout: auto; display:table; margin-top: 30px'
			const compTbody = document.createElement('tbody') 
			compTable.appendChild(compTbody)

			for(let key in _allGames){
				if(key === id.charAt(id.length - 2) || (!_allGames[key].gamename.name.toLowerCase().includes(searchValue.toLowerCase()) && !_genreIncludes(_allGames[key].gamegenre, searchValue) && !_developerIncludes(_allGames[key].gamedeveloper, searchValue) && !_platformIncludes(_allGames[key].gameplatform, searchValue))) continue;
				let tr = compTbody.insertRow()
				tr.id = _generateID() +`${key}`
				GameGenerator.prototype._createCompProfile(tr, _allGames[key].gamePic, _allGames[key].gamename, _allGames[key].gamedeveloper, _allGames[key].gameplatform, _allGames[key].gamegenre, _allGames[key].gameintro, _allGames[key].gamerating, _allGames[key].reviewLink, 0)
				const compareButton = document.createElement('button')
				compareButton.textContent = 'Compare'
				compareButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation; margin-left: 80px; margin-top: 30px;'
				compareButton.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				compareButton.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				compareButton.addEventListener("click", function( event ) {
					const targetKey = event.currentTarget.parentNode.id.slice(-1)
					GameGenerator.prototype._createComparison(_allGames[targetKey].gamePic, gamePic, _allGames[targetKey].gamename, gamename, _allGames[targetKey].gamedeveloper, gamedeveloper, _allGames[targetKey].gameplatform, gameplatform, _allGames[targetKey].gamegenre, gamegenre, _allGames[targetKey].gamerating, gamerating)
				});

				tr.appendChild(compareButton)
			}

			tableWrapper.appendChild(compTable)
			comparison.appendChild(tableWrapper)
			comparisonBack.appendChild(comparison)
			const body = $('body')
			body.append(comparisonBack)
		},

		_createCompProfile: function(parent, gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gameintro, gamerating, reviewLink, popup) {
			const wrapper1 = document.createElement('div')
			wrapper1.style = 'width:290px; height:90px; display: inline-flex; background-color: #fcfcf7; vertical-align: top; border-style: groove; font-family: Times New Roman'
			wrapper1.className = 'gameProfileType1'
			wrapper1.id = _generateID() + _totalGames()
			if(popup === 1){
				wrapper1.addEventListener('mouseenter', function(event){
					const popoutID = `${wrapper1.id}1`
					GameGenerator.prototype._createPopout(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gameintro, gamerating, popoutID, reviewLink)
				})
				wrapper1.addEventListener("mouseleave", function(event) {
					const removerID = `${wrapper1.id}1`
					const toremove = document.getElementById(removerID)
					toremove.remove()
				})
			}

			wrapper1.draggable = true
			wrapper1.addEventListener("dragstart", function(event) {		
				event.target.style.opacity = .6;
				event.dataTransfer.setData("id", event.currentTarget.id);
				event.dataTransfer.setData("gamePic",gamePic);
				event.dataTransfer.setData("gamename", JSON.stringify(gamename));
				event.dataTransfer.setData("gamedeveloper", JSON.stringify(gamedeveloper));
				event.dataTransfer.setData("gameplatform",  JSON.stringify(gameplatform));
				event.dataTransfer.setData("gamegenre",  JSON.stringify(gamegenre));
				event.dataTransfer.setData("gamerating", gamerating);
			}, false);

			wrapper1.addEventListener("dragend", function(event) {
				event.target.style.opacity = "";
			}, false);

			wrapper1.addEventListener("dragover", function(event) {
				event.preventDefault();
			}, false);

			wrapper1.addEventListener("drop", function(event) {
				event.preventDefault();
				const firedId = event.dataTransfer.getData("id");
				const targetGamePic = event.dataTransfer.getData("gamePic");
				const targetGameName = JSON.parse(event.dataTransfer.getData("gamename")); 
				const targetGameDeveloper = JSON.parse(event.dataTransfer.getData("gamedeveloper"));
				const targetGameGenre = JSON.parse(event.dataTransfer.getData("gamegenre"));
				const targetGameRating = event.dataTransfer.getData("gamerating");
				const targetGamePlatform = JSON.parse(event.dataTransfer.getData("gameplatform"));

				if (event.currentTarget.className.includes('gameProfileType') && firedId != event.currentTarget.id) {
					GameGenerator.prototype._createComparison(targetGamePic, gamePic, targetGameName, gamename, targetGameDeveloper, gamedeveloper, targetGamePlatform, gameplatform, targetGameGenre, gamegenre, targetGameRating, gamerating)
				}
			}, false);

			const picWrapper1 = document.createElement('div')
			picWrapper1.style = 'padding: 5px; width: fit-content'

			const picRef1 = document.createElement('a')
			picRef1.href = gamename.link   // would be passed in by user
			picRef1.style = 'text-decoration:none; cursor: pointer;'

			const pic1 = document.createElement('img')
			pic1.className = 'picture'
			pic1.style = 'display:flex; width: 50px; height: 80px; '
			pic1.src = gamePic
			picWrapper1.appendChild(picRef1)
			picRef1.appendChild(pic1)

			const titles1 = document.createElement('div')
			titles1.className = 'titles1'
			titles1.style = 'width: 150px; padding-left: 15px; height: 85px; padding-top: 3px;'

			const nameWrapper1 = document.createElement('a')
			nameWrapper1.style = 'text-decoration:none; cursor: pointer; '
			nameWrapper1.href = gamename.link // would be passed in by user
			const name1 = document.createElement('h1')
			name1.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
			name1.addEventListener("mouseover", function( event ) {
				event.currentTarget.style.color = "orange";
			});
			name1.addEventListener("mouseout", function( event ) {
				event.currentTarget.style.color = "black";
			});
			name1.appendChild(document.createTextNode(gamename.name))
			nameWrapper1.appendChild(name1)

			const developer1 = document.createElement('div')
			developer1.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:black; font-weight: 600;'
			for(let key in gamedeveloper){
				const developerRef = document.createElement('a')
				developerRef.href = gameplatform[key].link
				developerRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				developerRef.appendChild(document.createTextNode(`${gamedeveloper[key].developer}`))
				developerRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				developerRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				developer1.appendChild(developerRef)
				if(key != gamedeveloper.length-1) developer1.appendChild(document.createTextNode(', '))
			}


			const platform1 = document.createElement('div')
			platform1.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:grey; padding-top: 3px; font-weight: 600;'
			for(let key in gameplatform){
				const platformRef = document.createElement('a')
				platformRef.href = gameplatform[key].link
				platformRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				platformRef.appendChild(document.createTextNode(`${gameplatform[key].platform}`))
				platformRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				platformRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				platform1.appendChild(platformRef)
				if(key != gameplatform.length-1) platform1.appendChild(document.createTextNode(', '))
			}

			titles1.appendChild(nameWrapper1)
			titles1.appendChild(developer1)
			titles1.appendChild(platform1)

			const genres1 = document.createElement('div')
			genres1.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; padding-top: 3px; font-weight: 600;'
			for(let key in gamegenre){
				const genreRef = document.createElement('a')
				genreRef.href = gamegenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${gamegenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				genres1.appendChild(genreRef)
				if(key != gamegenre.length-1) genres1.appendChild(document.createTextNode(', '))
			}
			titles1.appendChild(genres1)
			
			const rating1 = document.createElement('div')
			rating1.className = 'rating1'
			rating1.style = 'display:flex; width: 65px; height: 90px; justify-content: center; padding-top:15px'

			const ratingWrapper1 = document.createElement('div')
			ratingWrapper1.style = 'width: 31px; height: 31px; border-radius:50%; text-align:center; align-items:center;'
			if(gamerating >= 7) ratingWrapper1.style.backgroundColor = '#2cd916'
			else if (gamerating >= 3) ratingWrapper1.style.backgroundColor = '#fc3'
			else ratingWrapper1.style.gamerating = 'red'

			const ratingRef1 = document.createElement('a')
			ratingRef1.style = 'text-decoration:none; cursor: pointer;'
			ratingRef1.href = gamename.link   // would be passed in by user
			const ratingText1 = document.createElement('p')
			ratingText1.style = 'padding-top: 8px; margin: 0px; color: white; transition: color 150ms ease-in-out;'
			ratingText1.addEventListener("mouseover", function( event ) {
				event.currentTarget.style.color = "black";
			});
			ratingText1.addEventListener("mouseout", function( event ) {
				event.currentTarget.style.color = "white";
			});
			ratingText1.appendChild(document.createTextNode(gamerating))
			ratingRef1.appendChild(ratingText1)

			rating1.appendChild(ratingWrapper1)
			ratingWrapper1.appendChild(ratingRef1)

			wrapper1.appendChild(picWrapper1)
			wrapper1.appendChild(titles1)
			wrapper1.appendChild(rating1)
			parent.append(wrapper1)
		},

		_createSlideProfile: function(parent, gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gamerating){
			const wrapper2 = document.createElement('div')
			wrapper2.style = 'width:180px; height:290px; display: inline-flex; background-color: #fcfcf7; flex-direction:column; padding-right: 7px; font-family: Times New Roman'
			wrapper2.className = 'gameProfileType2'
			wrapper2.id = _generateID() + _totalGames()

			wrapper2.draggable = true
			wrapper2.addEventListener("dragstart", function(event) {		
				event.target.style.opacity = .6;
				event.dataTransfer.setData("id", event.currentTarget.id);
				event.dataTransfer.setData("gamePic",gamePic);
				event.dataTransfer.setData("gamename", JSON.stringify(gamename));
				event.dataTransfer.setData("gamedeveloper", JSON.stringify(gamedeveloper));
				event.dataTransfer.setData("gameplatform",  JSON.stringify(gameplatform));
				event.dataTransfer.setData("gamegenre",  JSON.stringify(gamegenre));
				event.dataTransfer.setData("gamerating", gamerating);
			}, false);

			wrapper2.addEventListener("dragend", function(event) {
				event.target.style.opacity = "";
			}, false);

			wrapper2.addEventListener("dragover", function(event) {
				event.preventDefault();
			}, false);

			wrapper2.addEventListener("drop", function(event) {
				event.preventDefault();
				const firedId = event.dataTransfer.getData("id");
				const targetGamePic = event.dataTransfer.getData("gamePic");
				const targetGameName = JSON.parse(event.dataTransfer.getData("gamename")); 
				const targetGameDeveloper = JSON.parse(event.dataTransfer.getData("gamedeveloper"));
				const targetGameGenre = JSON.parse(event.dataTransfer.getData("gamegenre"));
				const targetGameRating = event.dataTransfer.getData("gamerating");
				const targetGamePlatform = JSON.parse(event.dataTransfer.getData("gameplatform"));

				if (event.currentTarget.className.includes('gameProfileType') && firedId != event.currentTarget.id) {
					GameGenerator.prototype._createComparison(targetGamePic, gamePic, targetGameName, gamename, targetGameDeveloper, gamedeveloper, targetGamePlatform, gameplatform, targetGameGenre, gamegenre, targetGameRating, gamerating)
				}
			}, false);

			const picWrapper2 = document.createElement('div')
			picWrapper2.style = 'width: fit-content'

			const picRef2 = document.createElement('a')
			picRef2.href = gamename.link   // would be passed in by user
			picRef2.style = 'text-decoration:none; cursor: pointer;'

			const pic2 = document.createElement('img')
			pic2.className = 'picture'
			pic2.style = 'display:flex; width: 180px; height: 210px; '
			pic2.src = gamePic
			picWrapper2.appendChild(picRef2)
			picRef2.appendChild(pic2)

			const titles2 = document.createElement('div')
			titles2.className = 'titles4'
			titles2.style = 'width: 180px; height: 70px; padding-top: 10px; text-align:center '

			const nameWrapper2 = document.createElement('a')
			nameWrapper2.style = 'text-decoration:none; cursor: pointer; '
			nameWrapper2.href = gamename.link // would be passed in by user
			const name2 = document.createElement('h1')
			name2.style = 'font-size:17px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
			name2.addEventListener("mouseover", function( event ) {
				event.currentTarget.style.color = "orange";
			});
			name2.addEventListener("mouseout", function( event ) {
				event.currentTarget.style.color = "black";
			});
			name2.appendChild(document.createTextNode(gamename.name))
			nameWrapper2.appendChild(name2)
			

			const developer2 = document.createElement('div')
			developer2.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:black; font-weight: 600;'
			for(let key in gamedeveloper){
				const developerRef = document.createElement('a')
				developerRef.href = gameplatform[key].link
				developerRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				developerRef.appendChild(document.createTextNode(`${gamedeveloper[key].developer}`))
				developerRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				developerRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				developer2.appendChild(developerRef)
				if(key != gamedeveloper.length-1) developer2.appendChild(document.createTextNode(', '))
			}


			const genre2 = document.createElement('div')
			genre2.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; padding-top: 3px; font-weight: 600;'
			for(let key in gamegenre){
				const genreRef = document.createElement('a')
				genreRef.href = gamegenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${gamegenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				genre2.appendChild(genreRef)
				if(key != gamegenre.length-1) genre2.appendChild(document.createTextNode(', '))
			}

			titles2.appendChild(nameWrapper2)
			titles2.appendChild(developer2)
			titles2.appendChild(genre2)
			
			const ratingWrapper2 = document.createElement('div')
			ratingWrapper2.style = 'width: 36px; height: 36px; border-radius:50%; position:absolute; z-index: 1; margin-left:72px; margin-top: 180px; text-align:center; background-color:white'
			if(gamerating >= 7) ratingWrapper2.style.backgroundColor = '#2cd916'
			else if (gamerating >= 3) ratingWrapper2.style.backgroundColor = '#fc3'
			else ratingWrapper2.style.backgroundColor = 'red'

			const ratingRef2 = document.createElement('a')
			ratingRef2.style = 'text-decoration:none; cursor: pointer; text-align:center'
			ratingRef2.href = gamename.link   // would be passed in by user
			const ratingText2 = document.createElement('p')
			ratingText2.style = 'padding-top: 10px; margin: 0px; color: white; transition: color 150ms ease-in-out;'
			ratingText2.addEventListener("mouseover", function( event ) {
				event.currentTarget.style.color = "black";
			});
			ratingText2.addEventListener("mouseout", function( event ) {
				event.currentTarget.style.color = "white";
			});
			ratingText2.appendChild(document.createTextNode(gamerating))
			ratingRef2.appendChild(ratingText2)
			ratingWrapper2.appendChild(ratingRef2)

			wrapper2.appendChild(picWrapper2)
			wrapper2.appendChild(ratingWrapper2)
			wrapper2.appendChild(titles2)
			parent.append(wrapper2)
		},

		createNewSlideshow: function(parent) {
			var hover = 1;
			const slideLength = Math.ceil(this._games.length / 4) - 1
			const wrapper = document.createElement('div')
			wrapper.style = 'height: 320px; display: flex; flex-direction: column; font-family: Times New Roman'
			wrapper.addEventListener("mouseover", function( event ) {
				hover = 0
			});
			wrapper.addEventListener("mouseout", function( event ) {
				hover = 1
			});
			const slideWrapper = document.createElement('div')
			slideWrapper.style = 'display: flex; justify-content: center; overflow: hidden;'

			const slide = document.createElement('div')
			slide.style = ' display: flex; transition: transform 250ms ease-in-out; width: 742px; height: 290px; --slider-index: 0; transform: translateX(calc(var(--slider-index) * -100%));'

			for(let key in this._games){ 
				GameGenerator.prototype._createSlideProfile(slide, this._games[key].gamePic, this._games[key].gamename, this._games[key].gamedeveloper, this._games[key].gameplatform, this._games[key].gamegenre, this._games[key].gamerating)
			}

			const leftButton = document.createElement('button')
			leftButton.style = 'border: none; border-radius: 15px;  border-top-left-radius: 0; border-bottom-left-radius: 0;flex-grow: 0;flex-shrink: 0;background-color: rgba(100, 100, 100, 0.6);z-index: 100;margin: 0;width: 56px; height: 290px; cursor: pointer;font-size: 65px;display: flex;align-items: center;justify-content: center;color: white;line-height: 0;transition: background-color 150ms ease-in-out; transition: font-size 150ms ease-in-out;'
			leftButton.addEventListener("mouseover", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.9)";
				event.target.style.fontSize = '90px';
			});
			leftButton.addEventListener("mouseout", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.6)";
				event.target.style.fontSize = '65px';
			});
			leftButton.addEventListener("click", function( event ) {
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(sliderIndex !== 0){
					slide.style.setProperty("--slider-index", sliderIndex - 1)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (sliderIndex - 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (sliderIndex - 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
				else if(sliderIndex === 0){
					slide.style.setProperty("--slider-index", slideLength)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (slideLength)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (slideLength)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
			});
			const leftButtonText = document.createElement('div')
			leftButton.innerHTML = '\&#8249;'
			leftButton.appendChild(leftButtonText)

			const rightButton = document.createElement('button')
			rightButton.style = 'border: none; border-radius: 15px; border-top-right-radius: 0; border-bottom-right-radius: 0;flex-grow: 0;flex-shrink: 0;background-color: rgba(100, 100, 100, 0.6);z-index: 10;margin: 0; width: 60px; height: 290px; cursor: pointer;font-size: 65px;display: flex;align-items: center;justify-content: center;color: white;line-height: 0; transition: background-color 150ms ease-in-out; transition: font-size 150ms ease-in-out;'
			rightButton.addEventListener("mouseover", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.9)";
				event.target.style.fontSize = '90px';
			});
			rightButton.addEventListener("mouseout", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.6)";
				event.target.style.fontSize = '65px';
				
			});
			rightButton.addEventListener("click", function( event ) {
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(sliderIndex !== slideLength){
					slide.style.setProperty("--slider-index", sliderIndex + 1)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
				else if(sliderIndex === slideLength){
					slide.style.setProperty("--slider-index",  0)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
			});
			const rightButtonText = document.createElement('div')
			rightButton.innerHTML = '\&#8250;'
			rightButton.appendChild(rightButtonText)

			const progressBarWrapper = document.createElement('div')
			progressBarWrapper.style = 'height: 30px; display: flex; align-items: center; justify-content: center;'
			for(let i = 0; i < slideLength+1; i++){
				let progressBar = document.createElement('div')
				progressBar.id = i
				progressBar.style = 'width: 24px; height: 8px; background-color: rgba(100, 100, 100, 0.4); margin-right: 5px; transition: background-color 150ms ease-in-out; cursor: pointer'
				if(i == 0) progressBar.style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
				progressBar.addEventListener("click", function( event ) {
					slide.style.setProperty("--slider-index",  event.currentTarget.id)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i != event.currentTarget.id) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i == event.currentTarget.id) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				})
				progressBarWrapper.appendChild(progressBar)
			}
			
			slideWrapper.appendChild(leftButton)
			slideWrapper.appendChild(slide)
			slideWrapper.appendChild(rightButton)
			wrapper.appendChild(slideWrapper)
			wrapper.appendChild(progressBarWrapper)
			parent.append(wrapper)
			setInterval(function (){
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(hover == 1){
					if(sliderIndex !== slideLength){
						slide.style.setProperty("--slider-index", sliderIndex + 1)
						const progressBars = progressBarWrapper.children
						for(let i = 0; i < progressBars.length; i++){
							if(i !== (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
							else if(i === (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
						}
					}
					else if(sliderIndex == slideLength){
						slide.style.setProperty("--slider-index",  0)
						const progressBars = progressBarWrapper.children
						for(let i = 0; i < progressBars.length; i++){
							if(i != 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)';
							else if(i == 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
						}
					}
				}
			}, 3000);
		},

		createNewProfile: function(parent, template, gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gameintro, gamerating, reviewLink, popup) {
			switch(template) {
				case 1: // normal view
					const wrapper1 = document.createElement('div')
					wrapper1.style = 'width:290px; height:90px; display: inline-flex; background-color: #fcfcf7; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapper1.className = 'gameProfileType1'
					wrapper1.id = _generateID() + _totalGames()
					if(popup === 1){
						wrapper1.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper1.id}1`
							GameGenerator.prototype._createPopout(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gameintro, gamerating, popoutID, reviewLink)
						})
						wrapper1.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper1.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper1.draggable = true
					wrapper1.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("gamePic",gamePic);
						event.dataTransfer.setData("gamename", JSON.stringify(gamename));
						event.dataTransfer.setData("gamedeveloper", JSON.stringify(gamedeveloper));
						event.dataTransfer.setData("gameplatform",  JSON.stringify(gameplatform));
						event.dataTransfer.setData("gamegenre",  JSON.stringify(gamegenre));
						event.dataTransfer.setData("gamerating", gamerating);
					}, false);

					wrapper1.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper1.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper1.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetGamePic = event.dataTransfer.getData("gamePic");
						const targetGameName = JSON.parse(event.dataTransfer.getData("gamename")); 
						const targetGameDeveloper = JSON.parse(event.dataTransfer.getData("gamedeveloper"));
						const targetGameGenre = JSON.parse(event.dataTransfer.getData("gamegenre"));
						const targetGameRating = event.dataTransfer.getData("gamerating");
						const targetGamePlatform = JSON.parse(event.dataTransfer.getData("gameplatform"));

						if (event.currentTarget.className.includes('gameProfileType') && firedId != event.currentTarget.id) {
							GameGenerator.prototype._createComparison(targetGamePic, gamePic, targetGameName, gamename, targetGameDeveloper, gamedeveloper, targetGamePlatform, gameplatform, targetGameGenre, gamegenre, targetGameRating, gamerating)
						}
					}, false);

					const picWrapper1 = document.createElement('div')
					picWrapper1.style = 'padding: 5px; width: fit-content'

					const picRef1 = document.createElement('a')
					picRef1.href = gamename.link   // would be passed in by user
					picRef1.style = 'text-decoration:none; cursor: pointer;'

					const pic1 = document.createElement('img')
					pic1.className = 'picture'
					pic1.style = 'display:flex; width: 50px; height: 80px; '
					pic1.src = gamePic
					picWrapper1.appendChild(picRef1)
					picRef1.appendChild(pic1)

					const titles1 = document.createElement('div')
					titles1.className = 'titles1'
					titles1.style = 'width: 150px; padding-left: 15px; height: 85px; padding-top: 3px;'

					const nameWrapper1 = document.createElement('a')
					nameWrapper1.style = 'text-decoration:none; cursor: pointer; '
					nameWrapper1.href = gamename.link // would be passed in by user
					const name1 = document.createElement('h1')
					name1.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
					name1.addEventListener("mouseover", function( event ) {
						event.currentTarget.style.color = "orange";
					});
					name1.addEventListener("mouseout", function( event ) {
						event.currentTarget.style.color = "black";
					});
					name1.appendChild(document.createTextNode(gamename.name))
					nameWrapper1.appendChild(name1)

					const developer1 = document.createElement('div')
					developer1.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:black; font-weight: 600;'
					for(let key in gamedeveloper){
						const developerRef = document.createElement('a')
						developerRef.href = gameplatform[key].link
						developerRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						developerRef.appendChild(document.createTextNode(`${gamedeveloper[key].developer}`))
						developerRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						developerRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						developer1.appendChild(developerRef)
						if(key != gamedeveloper.length-1) developer1.appendChild(document.createTextNode(', '))
					}


					const platform1 = document.createElement('div')
					platform1.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:grey; padding-top: 3px; font-weight: 600;'
					for(let key in gameplatform){
						const platformRef = document.createElement('a')
						platformRef.href = gameplatform[key].link
						platformRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						platformRef.appendChild(document.createTextNode(`${gameplatform[key].platform}`))
						platformRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						platformRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						platform1.appendChild(platformRef)
						if(key != gameplatform.length-1) platform1.appendChild(document.createTextNode(', '))
					}

					titles1.appendChild(nameWrapper1)
					titles1.appendChild(developer1)
					titles1.appendChild(platform1)

					const genres1 = document.createElement('div')
					genres1.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; padding-top: 3px; font-weight: 600;'
					for(let key in gamegenre){
						const genreRef = document.createElement('a')
						genreRef.href = gamegenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${gamegenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						genres1.appendChild(genreRef)
						if(key != gamegenre.length-1) genres1.appendChild(document.createTextNode(', '))
					}
					titles1.appendChild(genres1)
					
					const rating1 = document.createElement('div')
					rating1.className = 'rating1'
					rating1.style = 'display:flex; width: 65px; height: 90px; justify-content: center; padding-top:15px'

					const ratingWrapper1 = document.createElement('div')
					ratingWrapper1.style = 'width: 31px; height: 31px; border-radius:50%; text-align:center; align-items:center;'
					if(gamerating >= 7) ratingWrapper1.style.backgroundColor = '#2cd916'
					else if (gamerating >= 3) ratingWrapper1.style.backgroundColor = '#fc3'
					else ratingWrapper1.style.gamerating = 'red'

					const ratingRef1 = document.createElement('a')
					ratingRef1.style = 'text-decoration:none; cursor: pointer;'
					ratingRef1.href = gamename.link   // would be passed in by user
					const ratingText1 = document.createElement('p')
					ratingText1.style = 'padding-top: 8px; margin: 0px; color: white; transition: color 150ms ease-in-out;'
					ratingText1.addEventListener("mouseover", function( event ) {
						event.currentTarget.style.color = "black";
					});
					ratingText1.addEventListener("mouseout", function( event ) {
						event.currentTarget.style.color = "white";
					});
					ratingText1.appendChild(document.createTextNode(gamerating))
					ratingRef1.appendChild(ratingText1)

					rating1.appendChild(ratingWrapper1)
					ratingWrapper1.appendChild(ratingRef1)

					wrapper1.appendChild(picWrapper1)
					wrapper1.appendChild(titles1)
					wrapper1.appendChild(rating1)
					parent.append(wrapper1)
					this._games.push({
						"gamePic": gamePic,
						"gamename": gamename, 
						"gamedeveloper": gamedeveloper, 
						"gameplatform": gameplatform, 
						"gamegenre": gamegenre, 
						"gameintro": gameintro, 
						"gamerating": gamerating,
						"reviewLink": reviewLink
					})
					_allGames.push({
						"gamePic": gamePic,
						"gamename": gamename, 
						"gamedeveloper": gamedeveloper, 
						"gameplatform": gameplatform, 
						"gamegenre": gamegenre, 
						"gameintro": gameintro, 
						"gamerating": gamerating,
						"reviewLink": reviewLink
					})
					break;
				case 2: // slide view
					const wrapper2 = document.createElement('div')
					wrapper2.style = 'width:180px; height:290px; display: inline-flex; background-color: #fcfcf7; flex-direction:column; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapper2.className = 'gameProfileType2'
					wrapper2.id = _generateID() + _totalGames()
					if(popup === 1){
						wrapper2.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper2.id}1`
							GameGenerator.prototype._createPopout(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gameintro, gamerating, popoutID, reviewLink)
						})
						wrapper2.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper2.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper2.draggable = true
					wrapper2.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("gamePic",gamePic);
						event.dataTransfer.setData("gamename", JSON.stringify(gamename));
						event.dataTransfer.setData("gamedeveloper", JSON.stringify(gamedeveloper));
						event.dataTransfer.setData("gameplatform",  JSON.stringify(gameplatform));
						event.dataTransfer.setData("gamegenre",  JSON.stringify(gamegenre));
						event.dataTransfer.setData("gamerating", gamerating);
					}, false);

					wrapper2.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper2.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper2.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetGamePic = event.dataTransfer.getData("gamePic");
						const targetGameName = JSON.parse(event.dataTransfer.getData("gamename")); 
						const targetGameDeveloper = JSON.parse(event.dataTransfer.getData("gamedeveloper"));
						const targetGameGenre = JSON.parse(event.dataTransfer.getData("gamegenre"));
						const targetGameRating = event.dataTransfer.getData("gamerating");
						const targetGamePlatform = JSON.parse(event.dataTransfer.getData("gameplatform"));

						if (event.currentTarget.className.includes('gameProfileType') && firedId != event.currentTarget.id) {
							GameGenerator.prototype._createComparison(targetGamePic, gamePic, targetGameName, gamename, targetGameDeveloper, gamedeveloper, targetGamePlatform, gameplatform, targetGameGenre, gamegenre, targetGameRating, gamerating)
						}
					}, false);

					const picWrapper2 = document.createElement('div')
					picWrapper2.style = 'width: fit-content'

					const picRef2 = document.createElement('a')
					picRef2.href = gamename.link   // would be passed in by user
					picRef2.style = 'text-decoration:none; cursor: pointer;'

					const pic2 = document.createElement('img')
					pic2.className = 'picture'
					pic2.style = 'display:flex; width: 180px; height: 210px; '
					pic2.src = gamePic
					picWrapper2.appendChild(picRef2)
					picRef2.appendChild(pic2)

					const titles2 = document.createElement('div')
					titles2.className = 'titles4'
					titles2.style = 'width: 180px; height: 70px; padding-top: 10px; text-align:center '

					const nameWrapper2 = document.createElement('a')
					nameWrapper2.style = 'text-decoration:none; cursor: pointer; '
					nameWrapper2.href = gamename.link // would be passed in by user
					const name2 = document.createElement('h1')
					name2.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
					name2.addEventListener("mouseover", function( event ) {
						event.currentTarget.style.color = "orange";
					});
					name2.addEventListener("mouseout", function( event ) {
						event.currentTarget.style.color = "black";
					});
					name2.appendChild(document.createTextNode(gamename.name))
					nameWrapper2.appendChild(name2)
					

					const developer2 = document.createElement('div')
					developer2.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:black; font-weight: 600;'
					for(let key in gamedeveloper){
						const developerRef = document.createElement('a')
						developerRef.href = gameplatform[key].link
						developerRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						developerRef.appendChild(document.createTextNode(`${gamedeveloper[key].developer}`))
						developerRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						developerRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						developer2.appendChild(developerRef)
						if(key != gamedeveloper.length-1) developer2.appendChild(document.createTextNode(', '))
					}


					const genre2 = document.createElement('div')
					genre2.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; padding-top: 3px; font-weight: 600;'
					for(let key in gamegenre){
						const genreRef = document.createElement('a')
						genreRef.href = gamegenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${gamegenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						genre2.appendChild(genreRef)
						if(key != gamegenre.length-1) genre2.appendChild(document.createTextNode(', '))
					}

					titles2.appendChild(nameWrapper2)
					titles2.appendChild(developer2)
					titles2.appendChild(genre2)
					
					const ratingWrapper2 = document.createElement('div')
					ratingWrapper2.style = 'width: 36px; height: 36px; border-radius:50%; position:absolute; z-index: 1; margin-left:72px; margin-top: 180px; text-align:center; background-color:white'
					if(gamerating >= 7) ratingWrapper2.style.backgroundColor = '#2cd916'
					else if (gamerating >= 3) ratingWrapper2.style.backgroundColor = '#fc3'
					else ratingWrapper2.style.backgroundColor = 'red'

					const ratingRef2 = document.createElement('a')
					ratingRef2.style = 'text-decoration:none; cursor: pointer; text-align:center'
					ratingRef2.href = gamename.link   // would be passed in by user
					const ratingText2 = document.createElement('p')
					ratingText2.style = 'padding-top: 10px; margin: 0px; color: white; transition: color 150ms ease-in-out;'
					ratingText2.addEventListener("mouseover", function( event ) {
						event.currentTarget.style.color = "black";
					});
					ratingText2.addEventListener("mouseout", function( event ) {
						event.currentTarget.style.color = "white";
					});
					ratingText2.appendChild(document.createTextNode(gamerating))
					ratingRef2.appendChild(ratingText2)
					ratingWrapper2.appendChild(ratingRef2)

					wrapper2.appendChild(picWrapper2)
					wrapper2.appendChild(ratingWrapper2)
					wrapper2.appendChild(titles2)
					parent.append(wrapper2)
					this._games.push({
						"gamePic": gamePic,
						"gamename": gamename, 
						"gamedeveloper": gamedeveloper, 
						"gameplatform": gameplatform, 
						"gamegenre": gamegenre, 
						"gameintro": gameintro, 
						"gamerating": gamerating,
						"reviewLink": reviewLink
					})
					_allGames.push({
						"gamePic": gamePic,
						"gamename": gamename, 
						"gamedeveloper": gamedeveloper, 
						"gameplatform": gameplatform, 
						"gamegenre": gamegenre, 
						"gameintro": gameintro, 
						"gamerating": gamerating,
						"reviewLink": reviewLink
					})
					break;
				case 3: // simple view
					const wrapper3 = document.createElement('div')
					wrapper3.style = 'width:230px; height:55px; display: inline-flex; flex-direction: row; background-color: #fcfcf7; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapper3.className = 'gameProfileType3'
					wrapper3.id = _generateID() + _totalGames()
					if(popup === 1){
						wrapper3.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper3.id}1`
							GameGenerator.prototype._createPopout(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gameintro, gamerating, popoutID, reviewLink)
						})
						wrapper3.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper3.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper3.draggable = true
					wrapper3.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("gamePic",gamePic);
						event.dataTransfer.setData("gamename", JSON.stringify(gamename));
						event.dataTransfer.setData("gamedeveloper", JSON.stringify(gamedeveloper));
						event.dataTransfer.setData("gameplatform",  JSON.stringify(gameplatform));
						event.dataTransfer.setData("gamegenre",  JSON.stringify(gamegenre));
						event.dataTransfer.setData("gamerating", gamerating);
					}, false);

					wrapper3.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper3.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper3.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetGamePic = event.dataTransfer.getData("gamePic");
						const targetGameName = JSON.parse(event.dataTransfer.getData("gamename")); 
						const targetGameDeveloper = JSON.parse(event.dataTransfer.getData("gamedeveloper"));
						const targetGameGenre = JSON.parse(event.dataTransfer.getData("gamegenre"));
						const targetGameRating = event.dataTransfer.getData("gamerating");
						const targetGamePlatform = JSON.parse(event.dataTransfer.getData("gameplatform"));

						if (event.currentTarget.className.includes('gameProfileType') && firedId != event.currentTarget.id) {
							GameGenerator.prototype._createComparison(targetGamePic, gamePic, targetGameName, gamename, targetGameDeveloper, gamedeveloper, targetGamePlatform, gameplatform, targetGameGenre, gamegenre, targetGameRating, gamerating)
						}
					}, false);

					const titles3 = document.createElement('div')
					titles3.className = 'titles3'
					titles3.style = 'width: 170px; padding-left: 10px; height: 45px; padding-top: 10px'

					const nameWrapper3 = document.createElement('a')
					nameWrapper3.style = 'text-decoration:none; cursor: pointer; '
					nameWrapper3.href = gamename.link  // would be passed in by user
					const name3 = document.createElement('h1')
					name3.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
					name3.appendChild(document.createTextNode(`${gamename.name}`))
					name3.addEventListener("mouseover", function( event ) {
						event.currentTarget.style.color = "orange";
					});
					name3.addEventListener("mouseout", function( event ) {
						event.currentTarget.style.color = "black";
					});
					nameWrapper3.appendChild(name3)
					titles3.appendChild(nameWrapper3)

					const genres3 = document.createElement('div')
					genres3.style = 'font-size:12px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; padding-top: 3px; font-weight: 600;'
					for(let key in gamegenre){
						const genreRef = document.createElement('a')
						genreRef.href = gamegenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${gamegenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						genres3.appendChild(genreRef)
						if(key != gamegenre.length-1) genres3.appendChild(document.createTextNode(', '))
					}
					titles3.appendChild(genres3)

					const rating3 = document.createElement('div')
					rating3.className = 'rating3'
					rating3.style = 'display:flex; width: 50px; height: 55px; justify-content: center; align-items:center;'

					const ratingWrapper3 = document.createElement('div')
					ratingWrapper3.style = 'width: 30px; height: 30px; border-radius:50%; text-align:center; align-items:center;'
					if(gamerating >= 7) ratingWrapper3.style.backgroundColor = '#2cd916'
					else if (gamerating >= 3) ratingWrapper3.style.backgroundColor = '#fc3'
					else ratingWrapper3.style.gamerating = 'red'

					const ratingRef3 = document.createElement('a')
					ratingRef3.href = gamename.link // would be passed in by user
					ratingRef3.style = 'text-decoration:none; cursor: pointer;'
					const ratingText3 = document.createElement('p')
					ratingText3.style = 'padding-top: 6px; margin: 0px; color: white; transition: color 150ms ease-in-out;'
					ratingText3.addEventListener("mouseover", function( event ) {
						event.currentTarget.style.color = "black";
					});
					ratingText3.addEventListener("mouseout", function( event ) {
						event.currentTarget.style.color = "white";
					});
					ratingText3.appendChild(document.createTextNode(gamerating))
					ratingRef3.appendChild(ratingText3)
					ratingWrapper3.appendChild(ratingRef3)
					rating3.appendChild(ratingWrapper3)

					wrapper3.appendChild(titles3)
					wrapper3.appendChild(rating3)
					parent.append(wrapper3)
					this._games.push({
						"gamePic": gamePic,
						"gamename": gamename, 
						"gamedeveloper": gamedeveloper, 
						"gameplatform": gameplatform, 
						"gamegenre": gamegenre, 
						"gameintro": gameintro, 
						"gamerating": gamerating,
						"reviewLink": reviewLink
					})
					_allGames.push({
						"gamePic": gamePic,
						"gamename": gamename, 
						"gamedeveloper": gamedeveloper, 
						"gameplatform": gameplatform, 
						"gamegenre": gamegenre, 
						"gameintro": gameintro, 
						"gamerating": gamerating,
						"reviewLink": reviewLink
					})
					break;
				default:
					const wrapperd = document.createElement('div')
					wrapperd.style = 'width:290px; height:90px; display: inline-flex; background-color: #fcfcf7; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapperd.className = 'gameProfileType1'
					wrapperd.id = _generateID() + _totalGames()
					if(popup === 1){
						wrapperd.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapperd.id}1`
							GameGenerator.prototype._createPopout(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gameintro, gamerating, popoutID, reviewLink)
						})
						wrapperd.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapperd.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapperd.draggable = true
					wrapperd.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("gamePic",gamePic);
						event.dataTransfer.setData("gamename", JSON.stringify(gamename));
						event.dataTransfer.setData("gamedeveloper", JSON.stringify(gamedeveloper));
						event.dataTransfer.setData("gameplatform",  JSON.stringify(gameplatform));
						event.dataTransfer.setData("gamegenre",  JSON.stringify(gamegenre));
						event.dataTransfer.setData("gamerating", gamerating);
					}, false);

					wrapperd.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapperd.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapperd.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetGamePic = event.dataTransfer.getData("gamePic");
						const targetGameName = JSON.parse(event.dataTransfer.getData("gamename")); 
						const targetGameDeveloper = JSON.parse(event.dataTransfer.getData("gamedeveloper"));
						const targetGameGenre = JSON.parse(event.dataTransfer.getData("gamegenre"));
						const targetGameRating = event.dataTransfer.getData("gamerating");
						const targetGamePlatform = JSON.parse(event.dataTransfer.getData("gameplatform"));

						if (event.currentTarget.className.includes('gameProfileType') && firedId != event.currentTarget.id) {
							GameGenerator.prototype._createComparison(targetGamePic, gamePic, targetGameName, gamename, targetGameDeveloper, gamedeveloper, targetGamePlatform, gameplatform, targetGameGenre, gamegenre, targetGameRating, gamerating)
						}
					}, false);

					const picWrapperd = document.createElement('div')
					picWrapperd.style = 'padding: 5px; width: fit-content'

					const picRefd = document.createElement('a')
					picRefd.href = gamename.link   // would be passed in by user
					picRefd.style = 'text-decoration:none; cursor: pointer;'

					const picd = document.createElement('img')
					picd.className = 'picture'
					picd.style = 'display:flex; width: 50px; height: 80px; '
					picd.src = gamePic
					picWrapperd.appendChild(picRefd)
					picRefd.appendChild(picd)

					const titlesd = document.createElement('div')
					titlesd.className = 'titles1'
					titlesd.style = 'width: 150px; padding-left: 15px; height: 85px; padding-top: 3px;'

					const nameWrapperd = document.createElement('a')
					nameWrapperd.style = 'text-decoration:none; cursor: pointer; '
					nameWrapperd.href = gamename.link // would be passed in by user
					const named = document.createElement('h1')
					named.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
					named.addEventListener("mouseover", function( event ) {
						event.currentTarget.style.color = "orange";
					});
					named.addEventListener("mouseout", function( event ) {
						event.currentTarget.style.color = "black";
					});
					named.appendChild(document.createTextNode(gamename.name))
					nameWrapperd.appendChild(named)

					const developerd = document.createElement('div')
					developerd.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:black; font-weight: 600;'
					for(let key in gamedeveloper){
						const developerRef = document.createElement('a')
						developerRef.href = gameplatform[key].link
						developerRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						developerRef.appendChild(document.createTextNode(`${gamedeveloper[key].developer}`))
						developerRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						developerRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						developerd.appendChild(developerRef)
						if(key != gamedeveloper.length-1) developerd.appendChild(document.createTextNode(', '))
					}


					const platformd = document.createElement('div')
					platformd.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color:grey; padding-top: 3px; font-weight: 600;'
					for(let key in gameplatform){
						const platformRef = document.createElement('a')
						platformRef.href = gameplatform[key].link
						platformRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						platformRef.appendChild(document.createTextNode(`${gameplatform[key].platform}`))
						platformRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						platformRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						platformd.appendChild(platformRef)
						if(key != gameplatform.length-1) platformd.appendChild(document.createTextNode(', '))
					}

					titlesd.appendChild(nameWrapperd)
					titlesd.appendChild(developerd)
					titlesd.appendChild(platformd)

					const genresd = document.createElement('div')
					genresd.style = 'font-size:14px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: black; padding-top: 3px; font-weight: 600;'
					for(let key in gamegenre){
						const genreRef = document.createElement('a')
						genreRef.href = gamegenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${gamegenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						genresd.appendChild(genreRef)
						if(key != gamegenre.length-1) genresd.appendChild(document.createTextNode(', '))
					}
					titlesd.appendChild(genresd)
					
					const ratingd = document.createElement('div')
					ratingd.className = 'rating1'
					ratingd.style = 'display:flex; width: 65px; height: 90px; justify-content: center; padding-top:15px'

					const ratingWrapperd = document.createElement('div')
					ratingWrapperd.style = 'width: 31px; height: 31px; border-radius:50%; text-align:center; align-items:center;'
					if(gamerating >= 7) ratingWrapperd.style.backgroundColor = '#2cd916'
					else if (gamerating >= 3) ratingWrapperd.style.backgroundColor = '#fc3'
					else ratingWrapperd.style.gamerating = 'red'

					const ratingRefd = document.createElement('a')
					ratingRefd.style = 'text-decoration:none; cursor: pointer;'
					ratingRefd.href = gamename.link   // would be passed in by user
					const ratingTextd = document.createElement('p')
					ratingTextd.style = 'padding-top: 8px; margin: 0px; color: white; transition: color 150ms ease-in-out;'
					ratingTextd.addEventListener("mouseover", function( event ) {
						event.currentTarget.style.color = "black";
					});
					ratingTextd.addEventListener("mouseout", function( event ) {
						event.currentTarget.style.color = "white";
					});
					ratingTextd.appendChild(document.createTextNode(gamerating))
					ratingRefd.appendChild(ratingTextd)

					ratingd.appendChild(ratingWrapperd)
					ratingWrapperd.appendChild(ratingRefd)

					wrapperd.appendChild(picWrapperd)
					wrapperd.appendChild(titlesd)
					wrapperd.appendChild(ratingd)
					parent.append(wrapperd)
					this._games.push({
						"gamePic": gamePic,
						"gamename": gamename, 
						"gamedeveloper": gamedeveloper, 
						"gameplatform": gameplatform, 
						"gamegenre": gamegenre, 
						"gameintro": gameintro, 
						"gamerating": gamerating,
						"reviewLink": reviewLink
					})
					_allGames.push({
						"gamePic": gamePic,
						"gamename": gamename, 
						"gamedeveloper": gamedeveloper, 
						"gameplatform": gameplatform, 
						"gamegenre": gamegenre, 
						"gameintro": gameintro, 
						"gamerating": gamerating,
						"reviewLink": reviewLink
					})
			}
		},
		addToCollection: function(gamePic, gamename, gamedeveloper, gameplatform, gamegenre, gameintro, gamerating, reviewLink) {
			this._games.push({
				"gamePic": gamePic,
				"gamename": gamename, 
				"gamedeveloper": gamedeveloper, 
				"gameplatform": gameplatform, 
				"gamegenre": gamegenre, 
				"gameintro": gameintro, 
				"gamerating": gamerating,
				"reviewLink": reviewLink
			})
			_allGames.push({
				"gamePic": gamePic,
				"gamename": gamename, 
				"gamedeveloper": gamedeveloper, 
				"gameplatform": gameplatform, 
				"gamegenre": gamegenre, 
				"gameintro": gameintro, 
				"gamerating": gamerating,
				"reviewLink": reviewLink
			})
		}
	}

	BookGenerator.prototype = {
		// book comparison
		_createComparison : function(targetBookPic, bookPic, targetBookName, bookname, targetBookAuthor, bookauthor, targetBookGenre, bookgenre, targetBookRating, bookrating) {
			const comparisonBack = document.createElement('div')
			comparisonBack.className = 'musicComparison'
			comparisonBack.style = 'width: 100%; height: 100%; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index:150; background-color: black; background-color: rgba(0, 0, 0, 0.6);  overflow: auto; transition: all 0.3s linear; font-family: Times New Roman'

			const comparison = document.createElement('div')
			comparison.style = 'width: 1000px; height: 650px; background-color: white; position: absolute; top: 110px; left: 460px;'

			const closeButton = document.createElement('div')
			closeButton.style = 'width: 65px; height: 50px; float: right; display: flex; cursor: pointer; background-color: white; align-items: center; justify-content: center;'
			closeButton.addEventListener('click', function(event){
				event.currentTarget.parentNode.parentNode.remove()
			})
			const closeIcon = document.createElement('span')
			closeIcon.style = 'color: grey; font-size: 30px; font-weight:800; transition: color 150ms ease-in-out;'
			closeIcon.addEventListener('mouseover', function(event){
				event.currentTarget.style.color = "black";
			})
			closeIcon.addEventListener('mouseout', function(event){
				event.currentTarget.style.color = "grey";
			})
			closeIcon.appendChild(document.createTextNode("\u2573")) // "\u274C"
			closeButton.appendChild(closeIcon)
			comparison.appendChild(closeButton)

			const compTable = document.createElement('table')
			compTable.style = 'display: flex; width: 800px; margin-left: 110px; margin-right: auto; height: 500px; font-size: 20px; font-weight: 600; text-align: center; border-collapse: collapse; table-layout: auto; margin-top: 60px; display:table'
			const compTbody = document.createElement('tbody') 
			compTable.appendChild(compTbody)

			const picContent = ['Book Cover', targetBookPic, bookPic]
			const nameContent = ['Book Name', targetBookName, bookname]
			const actorContent = ['Author', targetBookAuthor, bookauthor]
			const genreContent = ['Genre', targetBookGenre, bookgenre]
			const ratingContent = ['Rating', targetBookRating, bookrating]
			const allContent = [picContent, nameContent, actorContent, genreContent, ratingContent]

			for(let key1 in allContent){
				let tr = compTbody.insertRow()
				tr.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; width = 100%'
				for(let key in allContent[key1]){
					if(key1 == 0){ // add pic
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding-top: 5px'
							td.style.width = '40%'
							let tdRef = document.createElement('a')
							tdRef.style = 'cursor: pointer;'
							tdRef.href = allContent[1][key].link
							const pic = document.createElement('img')
							pic.className = 'picture'
							pic.style = 'display:flex; width: 117px; height: 182px; object-fit: cover; display: inherit'
							pic.src = allContent[key1][key]
							tdRef.appendChild(pic)
							td.appendChild(tdRef)
						}
					}else if(key1 == 1){
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '40%'
							let tdRef = document.createElement('a')
							tdRef.style = 'text-decoration: none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
							tdRef.addEventListener("mouseover", function( event ) {
								event.target.style.color = "orange";
							});
							tdRef.addEventListener("mouseout", function( event ) {
								event.target.style.color = "black";
							});
							tdRef.href = allContent[key1][key].link
							tdRef.appendChild(document.createTextNode(allContent[key1][key].name))
							td.appendChild(tdRef)
						}
					}else if(key1 == 2 || key1 == 3){
						if(key == 0){
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '20%'
							td.appendChild(document.createTextNode(allContent[key1][key]))
						}else{
							let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							td.style.width = '40%'
							for(let key2 in allContent[key1][key]){
								let tdRef = document.createElement('a')
								tdRef.style = 'text-decoration: none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
								tdRef.addEventListener("mouseover", function( event ) {
									event.target.style.color = "orange";
								});
								tdRef.addEventListener("mouseout", function( event ) {
									event.target.style.color = "black";
								});
								tdRef.href = allContent[key1][key][key2].link 
								if(key1 == 2) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].author}`))
								else if(key1 == 3) tdRef.appendChild(document.createTextNode(`${allContent[key1][key][key2].genre}`))
								td.appendChild(tdRef)
								if(key2 != allContent[key1][key].length-1) td.appendChild(document.createTextNode(', '))
							}
						}
					}else{
						let td = tr.insertCell()
							td.style = 'border-collapse: collapse; border: 1px solid black; padding: 20px; overflow: hidden; text-overflow: ellipsis;'
							if(key == 0){
								td.style.width = '20%'
							}
							if(key != 0){
								td.style.width = '40%'
							}
							td.appendChild(document.createTextNode(allContent[key1][key]))
					}
				}
			}

			comparison.appendChild(compTable)
			comparisonBack.appendChild(comparison)
			const body = $('body')
			body.append(comparisonBack)
		},
		// book popout
		_createPopout : function(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, id, reviewLink) {
			const profile = document.createElement('div')
			profile.className = 'bookPopup'
			profile.id = id
			profile.style = 'width:350px; height:350px; position: absolute; background-color: #fcfcf7; z-index:10; margin-top: -30px; margin-left: -50px; display: flex; border-radius: 15px; border-width: 3px; border-style:groove; flex-direction: column; font-family: Times New Roman; z-index: 120'

			const hitem1 = document.createElement('div')
			hitem1.style = 'display:flex; flex-direction: row; width: 100%; align-items: center; '
			const hitem2 = document.createElement('div')
			hitem2.style = 'display:flex; flex-direction: column; width: 100%; align-items: center; '
			
			const vitem1 = document.createElement('div')
			vitem1.className = 'vitem1'
			vitem1.style = 'display:flex; flex-direction: column; width: 140px; align-items: center; '

			const vitem2 = document.createElement('div')
			vitem2.className = 'vitem2'
			vitem2.style = 'display:flex; flex-direction: column; width: 210px; align-items: center;'

			const picWrapper = document.createElement('a')
			picWrapper.href = bookname.link
			picWrapper.style = 'text-decoration: none; cursor: pointer'
			const pic = document.createElement('img')
			pic.className = 'picture'
			pic.style = 'float: left; display:flex; width: 90px; padding-left: 5px; padding-top: 10px;height: 140px; object-fit: cover;'
			pic.src = bookPic
			picWrapper.appendChild(pic)
			vitem1.appendChild(picWrapper)

			const rating = document.createElement('h1')
			rating.className = 'rating'
			rating.style = 'text-align: center; font-size: 17px; height: fit-content; margin: 0px; padding-top: 1px'
			if(bookrating >= 7) rating.style.color = '#2cd916'
			else if (bookrating >= 3) rating.style.color = '#fc3'
			else rating.style.color = 'red'
			rating.appendChild(document.createTextNode(`Rating: ${bookrating}`))

			const nameAndArtist = document.createElement('div')
			nameAndArtist.className = 'nameAndArtist'
			nameAndArtist.style = 'display:flex; height: 90px; text-align:center; flex-direction:column; padding-top: 0px; '

			const nameWrapper = document.createElement('a')
			nameWrapper.href = bookname.link
			nameWrapper.style = 'text-decoration: none; cursor: pointer'
			const name = document.createElement('h1')
			name.className = 'name'
			name.style = 'color:black; text-align: center; font-size: 20px; height: fit-content; margin:0px; overflow:auto; '
			name.appendChild(document.createTextNode(bookname.name))
			name.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			name.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			nameWrapper.appendChild(name)

			const authors = document.createElement('div')
			authors.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; height:fit-content; font-weight: 600; padding-top: 5px; max-height:42px'
			for(let key in bookauthor){
				const authorRef = document.createElement('a')
				authorRef.href = bookauthor[key].link
				authorRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				authorRef.appendChild(document.createTextNode(`${bookauthor[key].author}`))
				authorRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				authorRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				authors.appendChild(authorRef)
				if(key != bookauthor.length-1) authors.appendChild(document.createTextNode(', '))
			}

			const genres = document.createElement('div')
			genres.style = 'font-size:16px; margin:0px; overflow: hidden; text-overflow: ellipsis; height:fit-content; font-weight: 600; padding-top: 5px; max-height:25px'
			for(let key in bookgenre){
				const genreRef = document.createElement('a')
				genreRef.href = bookgenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${bookgenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				genres.appendChild(genreRef)
				if(key != bookgenre.length-1) genres.appendChild(document.createTextNode(', '))
			}

			nameAndArtist.appendChild(nameWrapper)
			nameAndArtist.appendChild(authors)
			nameAndArtist.appendChild(genres)

			vitem2.appendChild(nameAndArtist)
			vitem2.appendChild(rating)

			const buttonWrapper = document.createElement('div')
			buttonWrapper.style = "display:flex; flex-direction: row; height: 30px; padding-top: 5px; padding-bottom: 4px"
			const compareButtonWrapper = document.createElement('a')
			// compareButtonWrapper.href = compareLink
			compareButtonWrapper.style = 'text-decoration: none; cursor: pointer'
			const compareButton = document.createElement('button')
			compareButton.textContent = 'Compare'
			compareButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation; margin-right: 20px'
			compareButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			compareButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			compareButtonWrapper.appendChild(compareButton)
			buttonWrapper.appendChild(compareButtonWrapper)

			const reviewButtonWrapper = document.createElement('a')
			reviewButtonWrapper.href = reviewLink
			reviewButtonWrapper.style = 'text-decoration: none; cursor: pointer'
			const reviewButton = document.createElement('button')
			reviewButton.textContent = 'Review'
			reviewButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation;'
			reviewButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "#0024ff";
			});
			reviewButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "black";
			});
			compareButton.addEventListener("click", function( event ) {
				BookGenerator.prototype._generateComparisonList(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, id, '')
			});
			reviewButtonWrapper.appendChild(reviewButton)
			buttonWrapper.appendChild(reviewButtonWrapper)
			vitem2.appendChild(buttonWrapper)

			const introduction = document.createElement('div')
			introduction.className = 'introduction'
			introduction.style = 'display:flex; height: 185px; text-align:left; word-break: break-word; text-indent: 30px; overflow:auto; flex-direction:column; padding: 10px 10px 10px 10px'
			const introWrapper = document.createElement('a')
			introWrapper.href = bookname.link
			introWrapper.style = 'text-decoration:none; cursor: pointer; color: black'
			introWrapper.appendChild(document.createTextNode(bookIntro))
			introduction.appendChild(introWrapper)
			hitem2.appendChild(introduction)

			hitem1.appendChild(vitem1)
			hitem1.appendChild(vitem2)
			profile.appendChild(hitem1)
			profile.appendChild(hitem2)
			const parentID = profile.id.slice(0, -1)
			const parent = $(`#${parentID}`)
			parent.append(profile)
		},

		_generateComparisonList: function(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, id, searchValue){
			const comparisonBack = document.createElement('div')
			comparisonBack.className = 'movieComparison'
			comparisonBack.style = 'width: 100%; height: 100%; position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index:150; background-color: black; background-color: rgba(0, 0, 0, 0.6);  overflow: auto; transition: all 0.3s linear; font-family: Times New Roman'

			const comparison = document.createElement('div')
			comparison.style = 'width: 600px; height: 850px; background-color: white; position: absolute; top: 50px; left: 650px;'

			const utility = document.createElement('div')
			utility.style = 'display: flex; width: 600px; height: 50px; flex-direction: row'

			const searchWrapper = document.createElement('div')
			searchWrapper.style = 'display: flex; width: 550px; height: 50px; flex-direction: row;'
			const searchBar = document.createElement('input')
			searchBar.placeholder = 'Search'
			searchBar.style = 'display: flex; width: 250px; height: 30px; margin: 16px 0px 0px 75px; padding: 0px; font-size: 20px; overflow: auto; border-style: ridge; border-width: 2px; text-indent: 5px'
			const serarchButton = document.createElement('button')
			serarchButton.textContent = 'Search'
			serarchButton.style = 'background-color: rgb(36, 65, 181); border-radius: 12px; color: white; cursor: pointer; font-weight: bold; padding: 3px 0px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 14px; user-select: none; -webkit-user-select: none; touch-action: manipulation; margin-left: 15px; margin-top: 16px;'
			serarchButton.addEventListener("mouseover", function( event ) {
				event.target.style.color = "#ffdb00";
			});
			serarchButton.addEventListener("mouseout", function( event ) {
				event.target.style.color = "white";
			});
			serarchButton.addEventListener('click', function(event){
				const search = searchBar.value
				BookGenerator.prototype._generateComparisonList(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, id, search)
				event.currentTarget.parentNode.parentNode.parentNode.parentNode.remove()

			})

			searchWrapper.appendChild(searchBar)
			searchWrapper.appendChild(serarchButton)

			const closeButton = document.createElement('div')
			closeButton.style = 'width: 65px; height: 50px; float: right; display: flex; cursor: pointer; background-color: white; align-items: center; justify-content: center;'
			closeButton.addEventListener('click', function(event){
				event.currentTarget.parentNode.parentNode.parentNode.remove()
			})
			const closeIcon = document.createElement('span')
			closeIcon.style = 'color: grey; font-size: 30px; font-weight:800; transition: color 150ms ease-in-out;'
			closeIcon.addEventListener('mouseover', function(event){
				event.currentTarget.style.color = "black";
			})
			closeIcon.addEventListener('mouseout', function(event){
				event.currentTarget.style.color = "grey";
			})
			closeIcon.appendChild(document.createTextNode("\u2573")) // "\u274C"
			closeButton.appendChild(closeIcon)
			utility.appendChild(searchWrapper)
			utility.appendChild(closeButton)
			comparison.appendChild(utility)

			const tableWrapper = document.createElement('div')
			tableWrapper.style = 'overflow:auto; height: 800px; width: 600px; position: relative; margin-top: 0px'
			const compTable = document.createElement('table')
			compTable.style = 'display: flex; width: 500px; margin-left: 55px; margin-right: auto; height: 700px; text-align: center; border-collapse: seperate; border-spacing: 0 1em; table-layout: auto; display:table; margin-top: 30px'
			const compTbody = document.createElement('tbody') 
			compTable.appendChild(compTbody)

			for(let key in _allBooks){
				if(key === id.charAt(id.length - 2) || (!_allBooks[key].bookname.name.toLowerCase().includes(searchValue.toLowerCase()) && !_genreIncludes(_allBooks[key].bookgenre, searchValue) && !_authorIncludes(_allBooks[key].bookauthor, searchValue))) continue;
				let tr = compTbody.insertRow()
				tr.id = _generateID() +`${key}`
				BookGenerator.prototype._createCompProfile(tr, _allBooks[key].bookPic, _allBooks[key].bookname, _allBooks[key].bookauthor, _allBooks[key].bookgenre, _allBooks[key].bookIntro, _allBooks[key].bookrating, _allBooks[key].reviewLink, 0)
				const compareButton = document.createElement('button')
				compareButton.textContent = 'Compare'
				compareButton.style = 'background-color: #ffdb00; border-radius: 12px; color: #000; cursor: pointer; font-weight: bold; padding: 5px 5px; text-align: center; transition: 200ms; width: 86px; box-sizing: border-box; border: 0; font-size: 16px; user-select: none; -webkit-user-select: none; touch-action: manipulation; margin-left: 80px; margin-top: 85px;'
				compareButton.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				compareButton.addEventListener("mouseout", function( event ) {
					event.target.style.color = "black";
				});
				compareButton.addEventListener("click", function( event ) {
					const targetKey = event.currentTarget.parentNode.id.slice(-1)
					BookGenerator.prototype._createComparison(_allBooks[targetKey].bookPic, bookPic, _allBooks[targetKey].bookname, bookname, _allBooks[targetKey].bookauthor, bookauthor, _allBooks[targetKey].bookgenre, bookgenre,  _allBooks[targetKey].bookrating, bookrating)
				});

				tr.appendChild(compareButton)
			}

			tableWrapper.appendChild(compTable)
			comparison.appendChild(tableWrapper)
			comparisonBack.appendChild(comparison)
			const body = $('body')
			body.append(comparisonBack)
		},

		_createCompProfile: function(parent, bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, reviewLink, popup) {
			const wrapper2 = document.createElement('div')
			wrapper2.style = 'width:150px; height:225px; display: inline-flex; flex-direction: column; position:relative; vertical-align: top; font-family: Times New Roman' 
			wrapper2.className = 'bookProfileType2'
			wrapper2.id = _generateID() + _totalBooks()
			if(popup === 1){
				wrapper2.addEventListener('mouseenter', function(event){
					const popoutID = `${wrapper2.id}1`
					BookGenerator.prototype._createPopout(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, popoutID, reviewLink)
				})
				wrapper2.addEventListener("mouseleave", function(event) {
					const removerID = `${wrapper2.id}1`
					const toremove = document.getElementById(removerID)
					toremove.remove()
				})
			}

			wrapper2.draggable = true
			wrapper2.addEventListener("dragstart", function(event) {		
				event.target.style.opacity = .6;
				event.dataTransfer.setData("id", event.currentTarget.id);
				event.dataTransfer.setData("bookPic", bookPic);
				event.dataTransfer.setData("bookname", JSON.stringify(bookname));
				event.dataTransfer.setData("bookauthor",  JSON.stringify(bookauthor));
				event.dataTransfer.setData("bookgenre",  JSON.stringify(bookgenre));
				event.dataTransfer.setData("bookrating", bookrating);
			}, false);

			wrapper2.addEventListener("dragend", function(event) {
				event.target.style.opacity = "";
			}, false);

			wrapper2.addEventListener("dragover", function(event) {
				event.preventDefault();
			}, false);

			wrapper2.addEventListener("drop", function(event) {
				event.preventDefault();
				const firedId = event.dataTransfer.getData("id");
				const targetBookPic = event.dataTransfer.getData("bookPic");
				const targetBookName = JSON.parse(event.dataTransfer.getData("bookname")); 
				const targetBookGenre = JSON.parse(event.dataTransfer.getData("bookgenre"));
				const targetBookRating = event.dataTransfer.getData("bookrating");
				const targetBookAuthor = JSON.parse(event.dataTransfer.getData("bookauthor"));

				if (event.currentTarget.className.includes('bookProfileType') && firedId != event.currentTarget.id) {
					BookGenerator.prototype._createComparison(targetBookPic, bookPic, targetBookName, bookname, targetBookAuthor, bookauthor, targetBookGenre, bookgenre, targetBookRating, bookrating)
				}
			}, false);

			const wrapperRef2 = document.createElement('a')
			wrapperRef2.href = bookname.link  // would be passed in by user
			wrapperRef2.style = 'text-decoration:none; cursor: pointer;'

			const pic2 = document.createElement('img')
			pic2.className = 'picture'
			pic2.style = 'display:flex; width: 150px; height: 225px; '
			pic2.src = bookPic
			wrapperRef2.appendChild(pic2)
			
			const titles2 = document.createElement('div')
			titles2.className = 'titles2'
			titles2.style = 'width: 134px; height: 59px; padding: 8px; position: absolute; background-color: rgba(0,0,0,.75); bottom: 0'

			const nameWarpper2 = document.createElement('a')
			nameWarpper2.style = 'text-decoration:none; cursor: pointer;'
			nameWarpper2.href = bookname.link 
			const name2 = document.createElement('h1')
			name2.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; transition: color 150ms ease-in-out;'
			name2.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			name2.addEventListener("mouseout", function( event ) {
				event.target.style.color = "white";
			});
			name2.appendChild(document.createTextNode(bookname.name))
			nameWarpper2.appendChild(name2)
			titles2.appendChild(nameWarpper2)

			const genres2 = document.createElement('div')
			genres2.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; max-height:36px; font-weight: 600;'
			for(let key in bookgenre){
				const genreRef = document.createElement('a')
				genreRef.href = bookgenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${bookgenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				genres2.appendChild(genreRef)
				if(key != bookgenre.length-1) genres2.appendChild(document.createTextNode(', '))
			}
			titles2.appendChild(genres2)

			wrapper2.appendChild(wrapperRef2)
			wrapper2.appendChild(titles2)
			parent.append(wrapper2)
		},

		_createSlideProfile: function(parent, bookPic, bookname, bookauthor, bookgenre, bookrating){
			const wrapper2 = document.createElement('div')
			wrapper2.style = 'width:150px; height:225px; display: inline-flex; flex-direction: column; position:relative; padding-right: 7px; font-family: Times New Roman'
			wrapper2.className = 'bookProfileType2'
			wrapper2.id = _generateID() + _totalBooks()

			wrapper2.draggable = true
			wrapper2.addEventListener("dragstart", function(event) {		
				event.target.style.opacity = .6;
				event.dataTransfer.setData("id", event.currentTarget.id);
				event.dataTransfer.setData("bookPic", bookPic);
				event.dataTransfer.setData("bookname", JSON.stringify(bookname));
				event.dataTransfer.setData("bookauthor",  JSON.stringify(bookauthor));
				event.dataTransfer.setData("bookgenre",  JSON.stringify(bookgenre));
				event.dataTransfer.setData("bookrating", bookrating);
			}, false);

			wrapper2.addEventListener("dragend", function(event) {
				event.target.style.opacity = "";
			}, false);

			wrapper2.addEventListener("dragover", function(event) {
				event.preventDefault();
			}, false);

			wrapper2.addEventListener("drop", function(event) {
				event.preventDefault();
				const firedId = event.dataTransfer.getData("id");
				const targetBookPic = event.dataTransfer.getData("bookPic");
				const targetBookName = JSON.parse(event.dataTransfer.getData("bookname")); 
				const targetBookGenre = JSON.parse(event.dataTransfer.getData("bookgenre"));
				const targetBookRating = event.dataTransfer.getData("bookrating");
				const targetBookAuthor = JSON.parse(event.dataTransfer.getData("bookauthor"));

				if (event.currentTarget.className.includes('bookProfileType') && firedId != event.currentTarget.id) {
					BookGenerator.prototype._createComparison(targetBookPic, bookPic, targetBookName, bookname, targetBookAuthor, bookauthor, targetBookGenre, bookgenre, targetBookRating, bookrating)
				}
			}, false);

			const wrapperRef2 = document.createElement('a')
			wrapperRef2.href = bookname.link  // would be passed in by user
			wrapperRef2.style = 'text-decoration:none; cursor: pointer;'

			const pic2 = document.createElement('img')
			pic2.className = 'picture'
			pic2.style = 'display:flex; width: 150px; height: 225px; '
			pic2.src = bookPic
			wrapperRef2.appendChild(pic2)
			
			const titles2 = document.createElement('div')
			titles2.className = 'titles2'
			titles2.style = 'width: 134px; height: 59px; padding: 8px; position: absolute; background-color: rgba(0,0,0,.75); bottom: 0'

			const nameWarpper2 = document.createElement('a')
			nameWarpper2.style = 'text-decoration:none; cursor: pointer;'
			nameWarpper2.href = bookname.link 
			const name2 = document.createElement('h1')
			name2.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; transition: color 150ms ease-in-out;'
			name2.addEventListener("mouseover", function( event ) {
				event.target.style.color = "orange";
			});
			name2.addEventListener("mouseout", function( event ) {
				event.target.style.color = "white";
			});
			name2.appendChild(document.createTextNode(bookname.name))
			nameWarpper2.appendChild(name2)
			titles2.appendChild(nameWarpper2)

			const genres2 = document.createElement('div')
			genres2.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; max-height:36px; font-weight: 600;'
			for(let key in bookgenre){
				const genreRef = document.createElement('a')
				genreRef.href = bookgenre[key].link
				genreRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
				genreRef.appendChild(document.createTextNode(`${bookgenre[key].genre}`))
				genreRef.addEventListener("mouseover", function( event ) {
					event.target.style.color = "orange";
				});
				genreRef.addEventListener("mouseout", function( event ) {
					event.target.style.color = "white";
				});
				genres2.appendChild(genreRef)
				if(key != bookgenre.length-1) genres2.appendChild(document.createTextNode(', '))
			}
			titles2.appendChild(genres2)

			wrapper2.appendChild(wrapperRef2)
			wrapper2.appendChild(titles2)
			parent.append(wrapper2)
		},

		createNewSlideshow: function(parent) {
			var hover = 1;
			const slideLength = Math.ceil(this._books.length / 4) - 1
			const wrapper = document.createElement('div')
			wrapper.style = 'height: 255px; display: flex; flex-direction: column; font-family: Times New Roman'
			wrapper.addEventListener("mouseover", function( event ) {
				hover = 0
			});
			wrapper.addEventListener("mouseout", function( event ) {
				hover = 1
			});
			const slideWrapper = document.createElement('div')
			slideWrapper.style = 'display: flex; justify-content: center; overflow: hidden;'

			const slide = document.createElement('div')
			slide.style = ' display: flex; transition: transform 250ms ease-in-out; width: 622px; height: 225px; --slider-index: 0; transform: translateX(calc(var(--slider-index) * -100%));'

			for(let key in this._books){ 
				BookGenerator.prototype._createSlideProfile(slide, this._books[key].bookPic, this._books[key].bookname, this._books[key].bookauthor, this._books[key].bookgenre, this._books[key].bookrating)
			}

			const leftButton = document.createElement('button')
			leftButton.style = 'border: none; border-radius: 15px;  border-top-left-radius: 0; border-bottom-left-radius: 0;flex-grow: 0;flex-shrink: 0;background-color: rgba(100, 100, 100, 0.6);z-index: 100;margin: 0;width: 56px; height: 225px; cursor: pointer;font-size: 65px;display: flex;align-items: center;justify-content: center;color: white;line-height: 0;transition: background-color 150ms ease-in-out; transition: font-size 150ms ease-in-out;'
			leftButton.addEventListener("mouseover", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.9)";
				event.target.style.fontSize = '90px';
			});
			leftButton.addEventListener("mouseout", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.6)";
				event.target.style.fontSize = '65px';
			});
			leftButton.addEventListener("click", function( event ) {
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(sliderIndex !== 0){
					slide.style.setProperty("--slider-index", sliderIndex - 1)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (sliderIndex - 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (sliderIndex - 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
				else if(sliderIndex === 0){
					slide.style.setProperty("--slider-index", slideLength)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (slideLength)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (slideLength)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
			});
			const leftButtonText = document.createElement('div')
			leftButton.innerHTML = '\&#8249;'
			leftButton.appendChild(leftButtonText)

			const rightButton = document.createElement('button')
			rightButton.style = 'border: none; border-radius: 15px; border-top-right-radius: 0; border-bottom-right-radius: 0;flex-grow: 0;flex-shrink: 0;background-color: rgba(100, 100, 100, 0.6);z-index: 10;margin: 0; width: 60px; height: 225px; cursor: pointer;font-size: 65px;display: flex;align-items: center;justify-content: center;color: white;line-height: 0; transition: background-color 150ms ease-in-out; transition: font-size 150ms ease-in-out;'
			rightButton.addEventListener("mouseover", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.9)";
				event.target.style.fontSize = '90px';
			});
			rightButton.addEventListener("mouseout", function( event ) {
				event.target.style.backgroundColor = "rgba(100, 100, 100, 0.6)";
				event.target.style.fontSize = '65px';
				
			});
			rightButton.addEventListener("click", function( event ) {
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(sliderIndex !== slideLength){
					slide.style.setProperty("--slider-index", sliderIndex + 1)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
				else if(sliderIndex === slideLength){
					slide.style.setProperty("--slider-index",  0)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i !== 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i === 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				}
			});
			const rightButtonText = document.createElement('div')
			rightButton.innerHTML = '\&#8250;'
			rightButton.appendChild(rightButtonText)

			const progressBarWrapper = document.createElement('div')
			progressBarWrapper.style = 'height: 30px; display: flex; align-items: center; justify-content: center;'
			for(let i = 0; i < slideLength+1; i++){
				let progressBar = document.createElement('div')
				progressBar.id = i
				progressBar.style = 'width: 24px; height: 8px; background-color: rgba(100, 100, 100, 0.4); margin-right: 5px; transition: background-color 150ms ease-in-out; cursor: pointer'
				if(i == 0) progressBar.style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
				progressBar.addEventListener("click", function( event ) {
					slide.style.setProperty("--slider-index",  event.currentTarget.id)
					const progressBars = progressBarWrapper.children
					for(let i = 0; i < progressBars.length; i++){
						if(i != event.currentTarget.id) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
						else if(i == event.currentTarget.id) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
					}
				})
				progressBarWrapper.appendChild(progressBar)
			}
			
			slideWrapper.appendChild(leftButton)
			slideWrapper.appendChild(slide)
			slideWrapper.appendChild(rightButton)
			wrapper.appendChild(slideWrapper)
			wrapper.appendChild(progressBarWrapper)
			parent.append(wrapper)
			setInterval(function (){
				const sliderIndex = parseInt(
					getComputedStyle(slide).getPropertyValue("--slider-index")
				)
				if(hover == 1){
					if(sliderIndex !== slideLength){
						slide.style.setProperty("--slider-index", sliderIndex + 1)
						const progressBars = progressBarWrapper.children
						for(let i = 0; i < progressBars.length; i++){
							if(i !== (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)'
							else if(i === (sliderIndex + 1)) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
						}
					}
					else if(sliderIndex == slideLength){
						slide.style.setProperty("--slider-index",  0)
						const progressBars = progressBarWrapper.children
						for(let i = 0; i < progressBars.length; i++){
							if(i != 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.4)';
							else if(i == 0) progressBars[i].style.backgroundColor = 'rgba(100, 100, 100, 0.9)'
						}
					}
				}
			}, 3000);
		},
		
		createNewProfile: function(parent, template, bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, reviewLink, popup) {
			switch(template) {
				case 1: // normal view
					const wrapper1 = document.createElement('div')
					wrapper1.style = 'width:290px; height:180px; display: inline-flex; background-color: #fcfcf7; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapper1.className = 'bookProfileType1'
					wrapper1.id = _generateID() + _totalBooks()
					if(popup === 1){
						wrapper1.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper1.id}1`
							BookGenerator.prototype._createPopout(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, popoutID, reviewLink)
						})
						wrapper1.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper1.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper1.draggable = true
					wrapper1.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("bookPic", bookPic);
						event.dataTransfer.setData("bookname", JSON.stringify(bookname));
						event.dataTransfer.setData("bookauthor",  JSON.stringify(bookauthor));
						event.dataTransfer.setData("bookgenre",  JSON.stringify(bookgenre));
						event.dataTransfer.setData("bookrating", bookrating);
					}, false);

					wrapper1.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper1.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper1.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetBookPic = event.dataTransfer.getData("bookPic");
						const targetBookName = JSON.parse(event.dataTransfer.getData("bookname")); 
						const targetBookGenre = JSON.parse(event.dataTransfer.getData("bookgenre"));
						const targetBookRating = event.dataTransfer.getData("bookrating");
						const targetBookAuthor = JSON.parse(event.dataTransfer.getData("bookauthor"));

						if (event.currentTarget.className.includes('bookProfileType') && firedId != event.currentTarget.id) {
							BookGenerator.prototype._createComparison(targetBookPic, bookPic, targetBookName, bookname, targetBookAuthor, bookauthor, targetBookGenre, bookgenre, targetBookRating, bookrating)
						}
					}, false);

					const picWrapper1 = document.createElement('div')
					picWrapper1.style = 'width: fit-content'

					const picRef1 = document.createElement('a')
					picRef1.href = bookname.link   // would be passed in by user
					picRef1.style = 'text-decoration:none; cursor: pointer;'

					const pic1 = document.createElement('img')
					pic1.className = 'picture'
					pic1.style = 'display:flex; width: 115px; height: 180px; '
					pic1.src = bookPic
					picWrapper1.appendChild(picRef1)
					picRef1.appendChild(pic1)

					const titles1 = document.createElement('div')
					titles1.className = 'titles1'
					titles1.style = 'width: 160px; padding-left: 15px; height: 125px; padding-top: 5px '

					const nameWrapper1 = document.createElement('a')
					nameWrapper1.style = 'text-decoration:none; cursor: pointer; '
					nameWrapper1.href = bookname.link // would be passed in by user
					const name1 = document.createElement('h1')
					name1.style = 'font-size:20px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; max-height:40px; transition: color 150ms ease-in-out;'
					name1.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					name1.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					name1.appendChild(document.createTextNode(bookname.name))
					nameWrapper1.appendChild(name1)

					const author1 = document.createElement('div')
					author1.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; max-height:32px; font-weight: 600;'
					for(let key in bookauthor){
						const authorRef = document.createElement('a')
						authorRef.href = bookauthor[key].link
						authorRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						authorRef.appendChild(document.createTextNode(`${bookauthor[key].author}`))
						authorRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						authorRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						author1.appendChild(authorRef)
						if(key != bookauthor.length-1) author1.appendChild(document.createTextNode(', '))
					}


					const genres1 = document.createElement('div')
					genres1.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; max-height:34px; font-weight: 600;'
					for(let key in bookgenre){
						const genreRef = document.createElement('a')
						genreRef.href = bookgenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${bookgenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						genres1.appendChild(genreRef)
						if(key != bookgenre.length-1) genres1.appendChild(document.createTextNode(', '))
					}

					titles1.appendChild(nameWrapper1)
					titles1.appendChild(author1)
					titles1.appendChild(genres1)

					const rating1 = document.createElement('div')
					rating1.style = 'padding-top:5px; '

					const ratingRef1 = document.createElement('a')
					ratingRef1.style = 'text-decoration:none; cursor: pointer;'
					ratingRef1.href = bookname.link  // would be passed in by user
					const ratingStar = document.createElement('div')
					ratingStar.style = 'height: 20px; width:20px; display: inline-block; vertical-align: top;'
					ratingStar.appendChild(document.createTextNode('\u2B50'))
					rating1.appendChild(ratingStar)

					const ratingText1 = document.createElement('p')
					ratingText1.style = 'padding-top: 3px; margin: 0px; color:black; display: inline-block; padding-left: 3px; vertical-align: top; transition: color 150ms ease-in-out;'
					ratingText1.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					ratingText1.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					ratingText1.appendChild(document.createTextNode(bookrating))
					ratingRef1.appendChild(ratingText1)

					rating1.appendChild(ratingRef1)
					titles1.appendChild(rating1)

					wrapper1.appendChild(picWrapper1)
					wrapper1.appendChild(titles1)
					parent.append(wrapper1)
					this._books.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
					_allBooks.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
					break;
				case 2:	// slide view
					const wrapper2 = document.createElement('div')
					wrapper2.style = 'width:150px; height:225px; display: inline-flex; flex-direction: column; position:relative; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman' 
					wrapper2.className = 'bookProfileType2'
					wrapper2.id = _generateID() + _totalBooks()
					if(popup === 1){
						wrapper2.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper2.id}1`
							BookGenerator.prototype._createPopout(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, popoutID, reviewLink)
						})
						wrapper2.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper2.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper2.draggable = true
					wrapper2.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("bookPic", bookPic);
						event.dataTransfer.setData("bookname", JSON.stringify(bookname));
						event.dataTransfer.setData("bookauthor",  JSON.stringify(bookauthor));
						event.dataTransfer.setData("bookgenre",  JSON.stringify(bookgenre));
						event.dataTransfer.setData("bookrating", bookrating);
					}, false);

					wrapper2.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper2.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper2.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetBookPic = event.dataTransfer.getData("bookPic");
						const targetBookName = JSON.parse(event.dataTransfer.getData("bookname")); 
						const targetBookGenre = JSON.parse(event.dataTransfer.getData("bookgenre"));
						const targetBookRating = event.dataTransfer.getData("bookrating");
						const targetBookAuthor = JSON.parse(event.dataTransfer.getData("bookauthor"));

						if (event.currentTarget.className.includes('bookProfileType') && firedId != event.currentTarget.id) {
							BookGenerator.prototype._createComparison(targetBookPic, bookPic, targetBookName, bookname, targetBookAuthor, bookauthor, targetBookGenre, bookgenre, targetBookRating, bookrating)
						}
					}, false);

					const wrapperRef2 = document.createElement('a')
					wrapperRef2.href = bookname.link  // would be passed in by user
					wrapperRef2.style = 'text-decoration:none; cursor: pointer;'

					const pic2 = document.createElement('img')
					pic2.className = 'picture'
					pic2.style = 'display:flex; width: 150px; height: 225px; '
					pic2.src = bookPic
					wrapperRef2.appendChild(pic2)
					
					const titles2 = document.createElement('div')
					titles2.className = 'titles2'
					titles2.style = 'width: 134px; height: 59px; padding: 8px; position: absolute; background-color: rgba(0,0,0,.75); bottom: 0'

					const nameWarpper2 = document.createElement('a')
					nameWarpper2.style = 'text-decoration:none; cursor: pointer;'
					nameWarpper2.href = bookname.link 
					const name2 = document.createElement('h1')
					name2.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; transition: color 150ms ease-in-out;'
					name2.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					name2.addEventListener("mouseout", function( event ) {
						event.target.style.color = "white";
					});
					name2.appendChild(document.createTextNode(bookname.name))
					nameWarpper2.appendChild(name2)
					titles2.appendChild(nameWarpper2)

					const genres2 = document.createElement('div')
					genres2.style = 'font-size:13px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; max-height:36px; font-weight: 600;'
					for(let key in bookgenre){
						const genreRef = document.createElement('a')
						genreRef.href = bookgenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${bookgenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "white";
						});
						genres2.appendChild(genreRef)
						if(key != bookgenre.length-1) genres2.appendChild(document.createTextNode(', '))
					}
					titles2.appendChild(genres2)

					wrapper2.appendChild(wrapperRef2)
					wrapper2.appendChild(titles2)
					parent.append(wrapper2)
					this._books.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
					_allBooks.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
					break;
				case 3: // simple view
					const wrapper3 = document.createElement('div')
					wrapper3.style = 'width:230px; height:55px; display: inline-flex; flex-direction: row; background-color: #fcfcf7; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapper3.className = 'bookProfileType3'
					wrapper3.id = _generateID() + _totalBooks()
					if(popup === 1){
						wrapper3.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper3.id}1`
							BookGenerator.prototype._createPopout(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, popoutID, reviewLink)
						})
						wrapper3.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper3.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper3.draggable = true
					wrapper3.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("bookPic", bookPic);
						event.dataTransfer.setData("bookname", JSON.stringify(bookname));
						event.dataTransfer.setData("bookauthor",  JSON.stringify(bookauthor));
						event.dataTransfer.setData("bookgenre",  JSON.stringify(bookgenre));
						event.dataTransfer.setData("bookrating", bookrating);
					}, false);

					wrapper3.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper3.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper3.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetBookPic = event.dataTransfer.getData("bookPic");
						const targetBookName = JSON.parse(event.dataTransfer.getData("bookname")); 
						const targetBookGenre = JSON.parse(event.dataTransfer.getData("bookgenre"));
						const targetBookRating = event.dataTransfer.getData("bookrating");
						const targetBookAuthor = JSON.parse(event.dataTransfer.getData("bookauthor"));

						if (event.currentTarget.className.includes('bookProfileType') && firedId != event.currentTarget.id) {
							BookGenerator.prototype._createComparison(targetBookPic, bookPic, targetBookName, bookname, targetBookAuthor, bookauthor, targetBookGenre, bookgenre, targetBookRating, bookrating)
						}
					}, false);
					
					const titles3 = document.createElement('div')
					titles3.className = 'titles3'
					titles3.style = 'width: 170px; padding-left: 10px; height: 45px; padding-top: 10px'

					const nameWrapper3 = document.createElement('a')
					nameWrapper3.style = 'text-decoration:none; cursor: pointer; '
					nameWrapper3.href = bookname.link // would be passed in by user
					const name3 = document.createElement('h1')
					name3.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; color:black; transition: color 150ms ease-in-out;'
					name3.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					name3.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});
					name3.appendChild(document.createTextNode(`${bookname.name}`))
					nameWrapper3.appendChild(name3)
					titles3.appendChild(nameWrapper3)

					const genres3 = document.createElement('div')
					genres3.style = 'font-size:12px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; font-weight: 600;'
					for(let key in bookgenre){
						const genreRef = document.createElement('a')
						genreRef.href = bookgenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: black; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${bookgenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "black";
						});
						genres3.appendChild(genreRef)
						if(key != bookgenre.length-1) genres3.appendChild(document.createTextNode(', '))
					}
					titles3.appendChild(genres3)

					const rating3 = document.createElement('div')
					rating3.className = 'rating3'
					rating3.style = 'display:flex; width: 50px; height: 55px; justify-content: center; align-items:center;'

					const ratingWrapper3 = document.createElement('div')
					ratingWrapper3.style = 'width: 30px; height: 30px; border-radius:50%; text-align:center; align-items:center;'
					if(bookrating >= 7) ratingWrapper3.style.backgroundColor = '#2cd916'
					else if (bookrating >= 3) ratingWrapper3.style.backgroundColor = '#fc3'
					else ratingWrapper3.style.backgroundColor = 'red'

					const ratingRef3 = document.createElement('a')
					ratingRef3.href = bookname.link // would be passed in by user
					ratingRef3.style = 'text-decoration:none; cursor: pointer;'

					const ratingText3 = document.createElement('p')
					ratingText3.style = 'padding-top: 6px; margin: 0px; color: white; transition: color 150ms ease-in-out;'
					ratingText3.appendChild(document.createTextNode(bookrating))
					ratingText3.addEventListener("mouseover", function( event ) {
						event.target.style.color = "black";
					});
					ratingText3.addEventListener("mouseout", function( event ) {
						event.target.style.color = "white";
					});
					ratingRef3.appendChild(ratingText3)
					ratingWrapper3.appendChild(ratingRef3)
					rating3.appendChild(ratingWrapper3)

					wrapper3.appendChild(titles3)
					wrapper3.appendChild(rating3)
					parent.append(wrapper3)
					this._books.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
					_allBooks.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
					break;
				case 4: // shelf view
					const wrapper4 = document.createElement('div')
					wrapper4.style = 'width:150px; height:225px; display: inline-flex; flex-direction: column; position:relative; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman'
					wrapper4.className = 'bookProfileType4'
					wrapper4.id = _generateID() + _totalBooks()
					if(popup === 1){
						wrapper4.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapper4.id}1`
							BookGenerator.prototype._createPopout(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, popoutID, reviewLink)
						})
						wrapper4.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapper4.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapper4.draggable = true
					wrapper4.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("bookPic", bookPic);
						event.dataTransfer.setData("bookname", JSON.stringify(bookname));
						event.dataTransfer.setData("bookauthor",  JSON.stringify(bookauthor));
						event.dataTransfer.setData("bookgenre",  JSON.stringify(bookgenre));
						event.dataTransfer.setData("bookrating", bookrating);
					}, false);

					wrapper4.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapper4.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapper4.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetBookPic = event.dataTransfer.getData("bookPic");
						const targetBookName = JSON.parse(event.dataTransfer.getData("bookname")); 
						const targetBookGenre = JSON.parse(event.dataTransfer.getData("bookgenre"));
						const targetBookRating = event.dataTransfer.getData("bookrating");
						const targetBookAuthor = JSON.parse(event.dataTransfer.getData("bookauthor"));

						if (event.currentTarget.className.includes('bookProfileType') && firedId != event.currentTarget.id) {
							BookGenerator.prototype._createComparison(targetBookPic, bookPic, targetBookName, bookname, targetBookAuthor, bookauthor, targetBookGenre, bookgenre, targetBookRating, bookrating)
						}
					}, false);

					const wrapperRef4 = document.createElement('a')
					wrapperRef4.href = bookname.link // would be passed in by user
					wrapperRef4.style = 'text-decoration:none; cursor: pointer;'

					const booksideWrapper = document.createElement('div')
					booksideWrapper.style = 'display:flex; width: 150px; height: 175px; background-color: #f4f2e0'

					const bookside = document.createElement('div')
					bookside.style = 'width: 30px; background-color: white; position: absolute; height: 160px; left: 59px; border: 1px solid black; border-radius: 6px; margin-top:5px; background-color: #D2AD98; line-height: 15px;'
					const booksideName = document.createElement('p')
					booksideName.style = 'font-size:11px; color:black; text-align:center; overflow-wrap: break-word;word-wrap: break-word; hyphens: auto; word-break: auto; transition: color 150ms ease-in-out;'
					booksideName.appendChild(document.createTextNode(`${bookname.name}`))
					booksideName.addEventListener("mouseover", function( event ) {
						event.target.style.color = "white";
					});
					booksideName.addEventListener("mouseout", function( event ) {
						event.target.style.color = "black";
					});

					bookside.appendChild(booksideName)
					booksideWrapper.appendChild(bookside)

					const shelf = document.createElement('div')
					shelf.style = 'width: 150px; height: 30px; background: linear-gradient(0deg, rgba(190,180,170,1) 0%, rgba(220,220,190,1) 100%); align-self: end;'
					booksideWrapper.appendChild(shelf)
					wrapperRef4.appendChild(booksideWrapper)
					
					const titles4 = document.createElement('div')
					titles4.className = 'titles4'
					titles4.style = 'width: 134px; height: 37px; padding:5px 8px 8px 8px; position: absolute; background-color: rgba(0,0,0,.75); bottom: 0'

					const nameWarpper4 = document.createElement('a')
					nameWarpper4.style = 'text-decoration:none; cursor: pointer;'
					nameWarpper4.href = bookname.link
					const name4 = document.createElement('h1')
					name4.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; transition: color 150ms ease-in-out;'
					name4.appendChild(document.createTextNode(bookname.name))
					name4.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					name4.addEventListener("mouseout", function( event ) {
						event.target.style.color = "white";
					});
					nameWarpper4.appendChild(name4)
					titles4.appendChild(nameWarpper4)

					const genres4 = document.createElement('div')
					genres4.style = 'font-size:12px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; padding-top: 1px; max-height:36px; font-weight: 600;'
					for(let key in bookgenre){
						const genreRef = document.createElement('a')
						genreRef.href = bookgenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: lightgrey; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${bookgenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "lightgrey";
						});
						genres4.appendChild(genreRef)
						if(key != bookgenre.length-1) genres4.appendChild(document.createTextNode(', '))
					}
					titles4.appendChild(genres4)

					wrapper4.appendChild(wrapperRef4)
					wrapper4.appendChild(titles4)
					parent.append(wrapper4)
					this._books.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
					_allBooks.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
					break;
				default:
					const wrapperd = document.createElement('div')
					wrapperd.style = 'width:150px; height:225px; display: inline-flex; flex-direction: column; position:relative; vertical-align: top; box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px; font-family: Times New Roman' 
					wrapperd.className = 'bookProfileType2'
					wrapperd.id = _generateID() + _totalBooks()
					if(popup === 1){
						wrapperd.addEventListener('mouseenter', function(event){
							const popoutID = `${wrapperd.id}1`
							BookGenerator.prototype._createPopout(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, popoutID, reviewLink)
						})
						wrapperd.addEventListener("mouseleave", function(event) {
							const removerID = `${wrapperd.id}1`
							const toremove = document.getElementById(removerID)
							toremove.remove()
						})
					}

					wrapperd.draggable = true
					wrapperd.addEventListener("dragstart", function(event) {		
						event.target.style.opacity = .6;
						event.dataTransfer.setData("id", event.currentTarget.id);
						event.dataTransfer.setData("bookPic", bookPic);
						event.dataTransfer.setData("bookname", JSON.stringify(bookname));
						event.dataTransfer.setData("bookauthor",  JSON.stringify(bookauthor));
						event.dataTransfer.setData("bookgenre",  JSON.stringify(bookgenre));
						event.dataTransfer.setData("bookrating", bookrating);
					}, false);

					wrapperd.addEventListener("dragend", function(event) {
						event.target.style.opacity = "";
					}, false);

					wrapperd.addEventListener("dragover", function(event) {
						event.preventDefault();
					}, false);

					wrapperd.addEventListener("drop", function(event) {
						event.preventDefault();
						const firedId = event.dataTransfer.getData("id");
						const targetBookPic = event.dataTransfer.getData("bookPic");
						const targetBookName = JSON.parse(event.dataTransfer.getData("bookname")); 
						const targetBookGenre = JSON.parse(event.dataTransfer.getData("bookgenre"));
						const targetBookRating = event.dataTransfer.getData("bookrating");
						const targetBookAuthor = JSON.parse(event.dataTransfer.getData("bookauthor"));

						if (event.currentTarget.className.includes('bookProfileType') && firedId != event.currentTarget.id) {
							BookGenerator.prototype._createComparison(targetBookPic, bookPic, targetBookName, bookname, targetBookAuthor, bookauthor, targetBookGenre, bookgenre, targetBookRating, bookrating)
						}
					}, false);

					const wrapperRefd = document.createElement('a')
					wrapperRefd.href = bookname.link  // would be passed in by user
					wrapperRefd.style = 'text-decoration:none; cursor: pointer;'

					const picd = document.createElement('img')
					picd.className = 'picture'
					picd.style = 'display:flex; width: 150px; height: 225px; '
					picd.src = bookPic
					wrapperRefd.appendChild(picd)
					
					const titlesd = document.createElement('div')
					titlesd.className = 'titles2'
					titlesd.style = 'width: 134px; height: 59px; padding: 8px; position: absolute; background-color: rgba(0,0,0,.75); bottom: 0'

					const nameWarpperd = document.createElement('a')
					nameWarpperd.style = 'text-decoration:none; cursor: pointer;'
					nameWarpperd.href = bookname.link 
					const named = document.createElement('h1')
					named.style = 'font-size:18px; margin:0px; overflow: hidden; text-overflow: ellipsis; color: white; transition: color 150ms ease-in-out;'
					named.addEventListener("mouseover", function( event ) {
						event.target.style.color = "orange";
					});
					named.addEventListener("mouseout", function( event ) {
						event.target.style.color = "white";
					});
					named.appendChild(document.createTextNode(bookname.name))
					nameWarpperd.appendChild(named)
					titlesd.appendChild(nameWarpperd)

					const genresd = document.createElement('div')
					genresd.style = 'font-size:15px; margin:0px; overflow: hidden; text-overflow: ellipsis; padding-top:3px; color: white; padding-top: 3px; max-height:36px; font-weight: 600;'
					for(let key in bookgenre){
						const genreRef = document.createElement('a')
						genreRef.href = bookgenre[key].link
						genreRef.style = 'text-decoration:none; cursor: pointer; color: white; transition: color 150ms ease-in-out;'
						genreRef.appendChild(document.createTextNode(`${bookgenre[key].genre}`))
						genreRef.addEventListener("mouseover", function( event ) {
							event.target.style.color = "orange";
						});
						genreRef.addEventListener("mouseout", function( event ) {
							event.target.style.color = "white";
						});
						genresd.appendChild(genreRef)
						if(key != bookgenre.length-1) genresd.appendChild(document.createTextNode(', '))
					}
					titlesd.appendChild(genresd)

					wrapperd.appendChild(wrapperRefd)
					wrapperd.appendChild(titlesd)
					parent.append(wrapperd)
					this._books.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
					_allBooks.push({
						"bookPic": bookPic,
						"bookname": bookname, 
						"bookauthor": bookauthor, 
						"bookgenre": bookgenre, 
						"bookIntro": bookIntro, 
						"bookrating": bookrating,
						"reviewLink": reviewLink
					})
			}
		},
		addToCollection: function(bookPic, bookname, bookauthor, bookgenre, bookIntro, bookrating, reviewLink) {
			this._books.push({
				"bookPic": bookPic,
				"bookname": bookname, 
				"bookauthor": bookauthor, 
				"bookgenre": bookgenre, 
				"bookIntro": bookIntro, 
				"bookrating": bookrating,
				"reviewLink": reviewLink
			})
			_allBooks.push({
				"bookPic": bookPic,
				"bookname": bookname, 
				"bookauthor": bookauthor, 
				"bookgenre": bookgenre, 
				"bookIntro": bookIntro, 
				"bookrating": bookrating,
				"reviewLink": reviewLink
			})
		}
	}

	function _generateID() {
		var firstPart = (Math.random() * 725320) | 0;
		var secondPart = (Math.random() * 322570) | 0;
		firstPart = ("111" + firstPart.toString(16)).slice(-4);
		secondPart = ("222" + secondPart.toString(16)).slice(-4);
		return firstPart + secondPart;
	}

	function _genreIncludes(genre, search){
		for(let i = 0; i < genre.length; i++){
			if(genre[i].genre.toLowerCase().includes(search.toLowerCase())) return true
		}
		return false
	}

	function _artistIncludes(artist, search){
		for(let i = 0; i < artist.length; i++){
			if(artist[i].artist.toLowerCase().includes(search.toLowerCase())) return true
		}
		return false
	}

	function _actorIncludes(actor, search){
		for(let i = 0; i < actor.length; i++){
			if(actor[i].actor.toLowerCase().includes(search.toLowerCase())) return true
		}
		return false
	}

	function _directorIncludes(director, search){
		for(let i = 0; i < director.length; i++){
			if(director[i].director.toLowerCase().includes(search.toLowerCase())) return true
		}
		return false
	}

	function _platformIncludes(platform, search){
		for(let i = 0; i < platform.length; i++){
			if(platform[i].platform.toLowerCase().includes(search.toLowerCase())) return true
		}
		return false
	}

	function _developerIncludes(developer, search){
		for(let i = 0; i < developer.length; i++){
			if(developer[i].developer.toLowerCase().includes(search.toLowerCase())) return true
		}
		return false
	}

	function _authorIncludes(author, search){
		for(let i = 0; i < author.length; i++){
			if(author[i].author.toLowerCase().includes(search.toLowerCase())) return true
		}
		return false
	}


	global.MusicGenerator = global.MusicGenerator || MusicGenerator
	global.MovieGenerator = global.MovieGenerator || MovieGenerator
	global.BookGenerator = global.BookGenerator || BookGenerator
	global.GameGenerator = global.GameGenerator || GameGenerator

})(window, window.document, $); // pass the global window object and jquery to the anonymous function. They will now be locally scoped inside of the function.