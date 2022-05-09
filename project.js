//2) bundan once film.js de film consturactor oluşturmalıyız.İnputları ulaşmak

const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');

//3)UI objesini Başlatma bundan önce ui.js de constructar oluşturmalıyız.

const ui = new UI();

//11.adım -Storage Objesi Üret
const storage = new Storage();

//4) Tüm eventleri Yükleme

EventListeners();

function EventListeners() {
	//5)-Forma submit eventi katmamız gerekli
	form.addEventListener('submit', addFilm);
	//13-Sayfa yüklendiğinde LS deki Kayıtlı filmler için işlem
	document.addEventListener('DOMContentLoaded', function() {
		//Burda ilk başta localstoragedan tüm arry alınacak.
		let films = storage.getFilmsFromStorage();
		ui.loadAllFilms(films);
	});
}

function addFilm(e) {
	//6-inputlara giren valueları değişkene attık.
	const title = titleElement.value;
	const director = directorElement.value;
	const url = urlElement.value;

	if (title === '' || director === '' || url === '') {
		//hata mesajını yazdıracağız
		//10.adımda alert mesajı taslağını ve mesajın nerde ne kadar süre olacapı fonksiyon oluşturuldu ui içinde.
		ui.displayMessage('Boş alan bırakmayınız...', 'danger');
	} else {
		//7-Yeni Film
		const newFilm = new Film(title, director, url);
		ui.addfilmtoUI(newFilm); //arayüze film ekleme bu fonksiyon sayesinde gerçekleşti.-8.adımda bu fonksiyonu ui içinde oluşturduk.

		storage.addFilmToStorage(newFilm); //Storage Film ekleme işlemini gerçekleştirdik -12 adım olarak ve hemen Storage.js içinde bu fonksiyonu oluşturucaz.
		ui.displayMessage('Tebrikler.. İşleminiz başarıyla eklendi..', 'success');
	}
	//9.adımda ekleme işlemi sonrası input kutuları temizleyecek fonksiyonu ui içinde oluşturduk
	ui.clearInputs(titleElement, directorElement, urlElement);
	e.preventDefault();
}
