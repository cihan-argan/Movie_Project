function Storage() {
	//11.adım olarak storage constructor oluşturduk ve proto type kısmına ilgili işlemler için fonksionlar oluşturucaz..
}

//12.adım Storage a film ekleyen fonksiyonu Storage Constructorın prototype kısmında oluşturucaz.
Storage.prototype.addFilmToStorage = function(newFilm) {
	//varsa sotarege içindeki filmleri  bu diziye attıyoruz.
	let films = this.getFilmsFromStorage();
	//array içine yeni film objesini attıyoruz
	films.push(newFilm);
	//yeni eleman eklenmiş diziyi tekrardan storage içine kaydetmeliyiz.
	localStorage.setItem('films', JSON.stringify(films));
};

//burada local storage içinde olan filmleri getiren fonksiyonu yazdık.12.adım ve sonraki adımlarda kullanmak için hazırladık.
Storage.prototype.getFilmsFromStorage = function() {
	//Not: Local Storage içinde bizim bir arrayimiz olabilir yani içinde bir yada iki  film bulunan bu yüzden ilk başta onu almalıyız.
	let films;
	if (localStorage.getItem('films') === null) {
		//films keyine karşılık gelen herhangi bir eleman yoksa bizim burda boş bir array oluşturmamız lazım yani ilk ekleme gerçekleşecek.
		films = [];
	} else {
		//eğer varsa olan değeri almamız gerekiyor fakat ls içinde string değer barınır bunu parse edip orjinal array haline getirmemiz gerekiyor
		films = JSON.parse(localStorage.getItem('films'));
	}
	return films;
};
