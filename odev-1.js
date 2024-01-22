// ? SORU
// Bir öğrenicinin bir dersten geçip geçmediğini hesaplayan bir program yazacaksınız. Eğerki öğrencinin notu 50 den büyük ise
// ekrana "öğrenci dersten geçti" şeklinde bir ileti yazdırın. Geçmedi ise "öğrenci dersten geçemedi" iletisini yazdırın.
// "not" adında bir değişken tanımlayarak başlayan. not = 50 veya not = 75 gibi bir şey olabilir.
// Bu soruyu 3 şekilde çözmeniz bekleniyor.

// ilk olarak not değişkeni tanımlandıktan sonra if else yapılarını kullanarak kullanıcının notunun 50 den yüksek veya düşük olma durumlarını kontrol edin. İlk çözümünüzü aşağıda verilen 1. çözün alanında * işaretleri arasında kodlayın.

//! 1.çözüm
// ******************
not = 99;
a = 50;
if (not > a) {
    console.log("dersi geçtiniz");
} else {
   console.log("dersten kaldınız");
}

// ******************

// ikinci olarak not değişkenini tanımladıktan sonra "hesapla" adında bir fonksiyon yazacaksınız. Bu fonksiyon içerisinde if else yapılarını öğrencinin dersten kalıp kalmama durumlarını kontrol edin ve ekrana yazdırma işlemlerini yapın. Daha sonra bu fonksiyonu çalıştırın

// ! 2.çözüm
// ******************

function hesapla() {
  if (not > a) {
     console.log("dersi geçtiniz");
  } else {  
    console.log("dersten kaldınız");
  }
}

hesapla();

// ******************


// parametreyleHesapla adında bir fonksiyon tanımla. Bu fonksiyon bir not paramtresi alacak. aldığı not değerini dersten geçip geçmem durumunu kontrol edip ekrana yazdıracak. 

function parametreyleHesapla(not) {
    if(not > 50) {
        console.log("dersi geçtiniz.");
    }else {
        console.log("dersten kaldınız")
    }
} 
parametreyleHesapla()
