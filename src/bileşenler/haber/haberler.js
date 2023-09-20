import "./haberler.less";
// Haberleri üretmek için aşağıdaki data kullanılacak. Önce inceleyin sonra 94. satıra geçin.
// OPSİYONEL: Kendinizi maceracı hissediyorsanız, bu verileri farklı bir modülden dışa aktarmaya çalışın ve buraya aktarın.
// ES6 Modülleri ile ilgili bilgi için bakabilirsiniz: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules


import { data } from "../db-news/data.js";


/*
  Adım 1: Haber oluşturmak için 'haberYapici' adında bir bileşen(component) oluşturun.
  Bileşeniniz, argümanı haberleri içeren dizi olarak alan bir fonksiyon olacak,
  ve aşağıdaki gibi görünen bir DOM düğümü döndürecek:

  <div class="article">
    <h2>{haber başlığı}</h2>
    <p class="tarih">{haber tarihi}</p>

    {üç ayrı paragraf elementi}

    <button class="expandButton">+</button>
  </div>

  Adım 2: Hala `haberYapici` içindeyiz, button.expandButton 'a bir click event dinleyici ekleyin.
  Bu dinleyici div.article öğesine 'article-open' class'ını ekleyip/çıkaracak (toogle).

  Adım 3: Fonksiyonunuzdan bir öğe döndürmeyi unutmayın.

  Adım 4: Fonksiyonunuzun dışında, tüm datayı döngüye sokun(loop). Bir div.article öğesi oluşturmak ve bunu div.articles içindeki DOM'a eklemek için
  her yinelemede oluşturduğunuz bileşeninizi kullanacaksınız(bknz. index.html).

  Adım 5: Veri dizisine yeni haber nesnesi eklemeyi deneyin. Diğer verilerle aynı yapıda olmasına dikkat edin.
  Eklediğiniz yeni haberi görmek için sayfayı yenileyin.
*/


function haberYapici(newsItem)
{
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");
      const h2NewsTitle = document.createElement("h2");
      h2NewsTitle.textContent = newsItem.baslik;
      articleDiv.append(h2NewsTitle);

      const pNewsDate = document.createElement("p");
      pNewsDate.textContent = newsItem.tarih;
      articleDiv.append(pNewsDate);
      
      const idxStartOfNewsParagraphs = Object.keys(newsItem).indexOf("ilkParagraf");
      const newsParagraphs = Object.values(newsItem).slice(idxStartOfNewsParagraphs);

      for (const paragraph of newsParagraphs) {
        const pNews = document.createElement("p");
        pNews.textContent = paragraph;
        articleDiv.append(pNews);
      }

      const button = document.createElement("button");
      button.classList.add("expandButton");
      button.addEventListener("click", (e) => {
        articleDiv.classList.toggle("article-open");
      })
      articleDiv.append(button);

    return articleDiv;
}

data.forEach((datum) => {
  document.querySelector("div.articles").append(haberYapici(datum));
})