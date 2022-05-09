//2) bundan once film.js de film consturactor oluşturmalıyız.İnputları ulaşmak

const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardbody = document.querySelectorAll('.card-body')[1];

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
		//Burda ilk başta localstoragedan tüm arry alınacak. ve loadAllFilms fonksiyonu ui.js te oluşturulacak
		let films = storage.getFilmsFromStorage();
		ui.loadAllFilms(films);
	});

	//14-adım silme işlemleri için ikinci cardbodye ulaşıp oradan deleteFilm fonksiyonu  silme işlemini gerçekleşitireceğiz
	cardbody.addEventListener('click', deleteFilm);
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

//Film Silme işlemi-15adım a etiketinin parentının parentına ulaşarak o tablodaki film kaldırılacak
function deleteFilm(e) {
	if (e.target.id === 'delete-film') {
		ui.deleteFilmFromUI(e.target);
	}
}
