$(window).on("load", function () {
	if ($(".preloader").length) {
		$(".preloader").fadeOut("slow");
	}
});

var x = document.getElementById("nameSurname");
var hatira = document.getElementById("hatira");
var bilet = hatira.getContext("2d");
var resim = new Image();

function buyuk() {
	isim = x.value.toLocaleUpperCase("tr-TR");
	isim = isim.trim();
	if (isim.length < 3) {
		$("#validation").html("Lütfen en az 3 karakter giriniz.");
		$("#validation").removeClass("d-none");
		$("#indirButton").attr("disabled", "disabled");
		$("#indirButton").addClass("disabled");
	} else if (isim.length > 25) {
		$("#validation").html("Lütfen en çok 25 karakter giriniz.");
		$("#validation").removeClass("d-none");
	} else {
		$("#validation").addClass("d-none");
		$("#indirButton").removeAttr("disabled", "disabled");
		$("#indirButton").removeClass("disabled");
		// Fonksiyonu yazmaya başlamadan önce fontu yükleyin
		const font = new FontFace(
			"gothamblack",
			"url('assets/fonts/gotham/gotham-black-webfont.woff2')"
		);
		font.load().then((loadedFont) => {
			document.fonts.add(loadedFont);
			var resimler = ["assets/images/back.jpg"];

			var secilenResim = resimler[Math.floor(Math.random() * resimler.length)];
			resim.src = secilenResim;
			// Seçilen resime göre font rengini değiştir
			renk = "#FFFFFF"; // Kırmızı renk için örnek
			// Resim yüklendikten sonra çizimi başlatın
			resim.onload = function () {
				bilet.drawImage(resim, 0, 0);
				bilet.font = "45pt greycliff_demibold";
				bilet.textAlign = "center";
				bilet.fillStyle = renk;
				bilet.fillText("Değerli Kardeşim ", 540, 435);
				bilet.font = "50pt gothamblack";
				bilet.textAlign = "center";
				bilet.fillStyle = renk;
				bilet.fillText(isim, 540, 530);
				bilet.font = "45pt greycliff_demibold";
				bilet.textAlign = "center";
				bilet.fillStyle = renk;
				bilet.fillText("21 Yıllık Kazanımları ile Büyüyen", 540, 600);
				bilet.font = "45pt greycliff_demibold";
				bilet.textAlign = "center";
				bilet.fillStyle = renk;
				bilet.fillText("Türkiye Sana Emanet", 540, 660);
				// bilet.font = "45px greycliff_demibold";
				// bilet.textAlign = "center";
				// bilet.fillStyle = "#232951";
				// bilet.fillText("sunuyorum.", 540, 860);
			};
		});
	}
}

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
}

function indir() {
	isim = x.value.toLocaleUpperCase("tr-TR");
	isim = isim.trim();

	if (isim.length < 3) {
		$("#validation").html("Lütfen en az 3 karakter giriniz.");
		$("#validation").removeClass("d-none");
	} else if (isim.length > 25) {
		$("#validation").html("Lütfen en çok 25 karakter giriniz.");
		$("#validation").removeClass("d-none");
	} else {
		$("#validation").addClass("d-none");
		const tuval = document.getElementById("hatira");
		var url = tuval.toDataURL("image/jpg", 1);
		$(".imageWrapper").html('<img class="w-100 h-auto"  src="' + url + '" />');
		$("#modalTse").modal("show");
	}
}

function download() {
	const tuval = document.getElementById("hatira");
	var dosya = isim.toLocaleLowerCase("tr-TR");
	var url = tuval.toDataURL("image/jpg", 1);
	var yeniSekme = window.open();
	yeniSekme.document.write('<img src="' + url + '"/>');
	yeniSekme.document.title = dosya + "-kardesime";
}

function toggleKeyboard(open) {
	const body = document.getElementById("mainBody");

	if (open) {
		// Klavye açıldığında
		const scrollY = window.scrollY; // Kaydırma konumunu al
		body.style.position = "fixed"; // Sayfa pozisyonunu sabitle
		body.style.top = `-${scrollY}px`; // Kaydırma konumunu negatif olarak ayarla
	} else {
		// Klavye kapandığında
		const scrollY = body.style.top;
		body.style.position = "";
		body.style.top = "";
		window.scrollTo(0, parseInt(scrollY || "0") * -1);
	}
}
