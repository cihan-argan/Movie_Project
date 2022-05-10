function UI() {
	//UI Constructor
}

UI.prototype.addfilmtoUI = function(newFilm) {
	//8.adımda bu fonksiyon oluşturuldu ve ekleme işlemlerini gerçekleştirdik alttaki taslağa göre
	/*  <!-- <tr>
                                            <td><img src="" class="img-fluid img-thumbnail"></td>
                                            <td></td>
                                            <td></td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr> -->
                                         */
	const filmList = document.getElementById('films');
	filmList.innerHTML += `
                            <tr>
                                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style = "height:300px; width:300px;"></td>
                                <td>${newFilm.title}</td>
                                <td>${newFilm.director}</td>
                                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                            </tr>
                         `;
};
UI.prototype.clearInputs = function(element1, element2, element3) {
	//9- eklemeden sonra input kutularının temizlenmesi işlemi
	element1.value = '';
	element2.value = '';
	element3.value = '';
};
UI.prototype.displayMessage = function(message, type) {
	//10-adımda duruma göre bize alert verecek alert mesajlarını oluşturduk.
	const cardBody = document.querySelectorAll('.card-body')[0];
	//Mesajı yazdıracağımız yere karar verdik alert divini oluşturacağız
	const div = document.createElement('div');
	div.className = `alert alert-${type}`;
	div.textContent = message;
	cardBody.appendChild(div);

	setTimeout(function() {
		div.remove();
	}, 2000);
};
//13.adım da loadAllFilms fonksiyonu oluşturulacak.
UI.prototype.loadAllFilms = function(films) {
	const filmList = document.querySelector('#films');
	films.forEach(function(film) {
		filmList.innerHTML += `
                            <tr>
                                <td><img src="${film.url}" class="img-fluid img-thumbnail" style = "height:300px; width:300px;"></td>
                                <td>${film.title}</td>
                                <td>${film.director}</td>
                                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                            </tr>
                            `;
	});
};

//15.adım deleteFilmFromUI bu fonksiyonu oluşturup arayüzden ilgili filmin silinmesini sağlayacağız

UI.prototype.deleteFilmFromUI = function(element) {
	element.parentElement.parentElement.remove();
};

//18.adım da burada ilk uidan kaldırmak için fonksiyon oluşturacağız
UI.prototype.clearAllFilmsFromUI = function() {
	const filmList = document.querySelector('#films');

	//filmList.innerHTML=""; 1.yöntem  bu yöntemde işe yarar fakat yavaş çalışmaktadır.
	while (filmList.firstElementChild !== null) {
		//ids films olan elemanı filmList içine aldık film list içinde firstElementChild olduğu sürece bu while döngüsü dönecek.hiç eleman kalmayınca bu iş tamamlanmış olacak.

		filmList.firstElementChild.remove();
	}
};
