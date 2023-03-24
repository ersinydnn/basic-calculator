const sonuc = document.querySelector('.sonuc input'); // Sonuc alanını seçiyoruz

const buttons = document.querySelectorAll('button'); // Tüm butonları seçiyoruz

let islem = ''; // Hesaplama işlemlerini ve sonucu tutacak değişken

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Tıklanan butonun içeriği (text) alınıyor
    const buttonValue = button.textContent;
    
    if (buttonValue === '=') { // Eşittir butonuna basıldıysa hesaplama yapılır
      sonuc.value = eval(islem); // eval fonksiyonu ile işlem değişkenindeki matematiksel ifade hesaplanır
      islem = ''; // İşlem değişkeni sıfırlanır
    } else if (buttonValue === 'C') { // Temizle butonuna basıldıysa sonuç sıfırlanır
      sonuc.value = '0';
      islem = '';
    } else { // Diğer butonlara basıldıysa işlem değişkenine ekleme yapılır
      islem += buttonValue;
      sonuc.value = islem;
    }
  });
});


