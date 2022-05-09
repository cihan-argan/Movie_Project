//2) bundan once film.js de film consturactor oluşturmalıyız.İnputları ulaşmak

const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');

//3)UI objesini Başlatma bundan önce ui.js de constructar oluşturmalıyız.

const ui = new UI();

//4) Tüm eventleri Yükleme

EventListeners();

function EventListeners() {
	//5)-Forma submit eventi katmamız gerekli
	form.addEventListener('submit', addFilm);
}

function addFilm(e) {
	//6-inputlara giren valueları değişkene attık.
	const title = titleElement.value;
	const director = directorElement.value;
	const url = urlElement.value;

	if (title === '' || director === '' || url === '') {
		//hata mesajını yazdıracağız

		ui.displayMessage('Boş alan bırakmayınız...', 'danger');
	} else {
		//Yeni Film
		const newFilm = new Film(title, director, url);
		ui.addfilmtoUI(newFilm); //arayüze film ekleme bu fonksiyon sayesinde gerçekleşti.
		ui.displayMessage('Tebrikler.. İşleminiz başarıyla eklendi..', 'success');
	}
	ui.clearInputs(titleElement, directorElement, urlElement);
	e.preventDefault();
}
