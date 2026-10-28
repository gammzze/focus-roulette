// --- 1. DEĞİŞKENLER VE KONU HAVUZU ---
// Buraya istediğin kadar araştırma konusu ekleyebilirsin
const topics = [
    // --- TEKNOLOJİ, YAZILIM VE GELECEK ---
    "Yapay zeka modellerinde karar süreçleri ve SHAP açıklanabilirliği",
    "Klinik tıpta ve kardiyolojide makine öğrenmesi uygulamaları",
    "Flash Sale (Flaş İndirim) sistemlerinde yüksek trafik yönetimi ve Redis",
    "C# ve .NET Core ile mikroservis mimarileri",
    "Python FastAPI ile yüksek performanslı web API tasarımı",
    "Veri biliminde Scikit-learn ve Pandas'ın tarihsel gelişimi",
    "Progressive Web App (PWA) ile çevrimdışı web uygulamaları",
    "2D piksel sanatının (Pixel Art) oyun dünyasındaki yükselişi",
    "Unity oyun motorunda durum yönetimi (State Machine)",
    "Git versiyon kontrol sisteminin çekirdek çalışma mantığı",
    "Algoritmaların günlük hayatımızı ve tüketimimizi nasıl yönlendirdiği",
    "Siber güvenlikte sosyal mühendislik taktikleri ve psikolojisi",
    "Kriptografi ve uçtan uca şifreleme algoritmalarının matematiği",
    "İlişkisel veritabanları (MS SQL) ve NoSQL arasındaki yapısal farklar",
    "Web tasarımında karanlık mod (Dark Mode) UI/UX prensipleri",
    "Açık kaynak kodlu (Open Source) projelerin yazılım ekosistemine katkısı",
    "API tabanlı veri entegrasyonu ve RESTful standartları",
    "Birim testlerin (Unit Test) yazılım kalitesine ve hatasızlığa etkisi",
    "Giyilebilir teknolojilerin kişisel sağlık verisi analizindeki rolü",
    "Veri görselleştirmede renk paletleri, ısı haritaları ve Seaborn kütüphanesi",
    "Otonom araçların LiDAR ve sensör teknolojileri",
    "Kuantum bilgisayarların kuantum dolanıklık çalışma prensipleri",
    "Blokzincir (Blockchain) teknolojisinin finans dışı (sağlık/hukuk) kullanım alanları",
    "Bilişim sistemleri mühendisliğinin gelecekteki evrimi ve yeni iş alanları",
    "Bulut bilişim (Cloud Computing) ve sunucusuz (Serverless) mimariler",
    "Yazılımda 'Temiz Kod' (Clean Code) felsefesi ve okunabilirlik",
    "Veri madenciliğinde kümeleme (Clustering) algoritmaları",
    "Doğal Dil İşleme (NLP) ile metin duygu analizi mekanizmaları",
    "Yapay zekanın sanat/kod üretimindeki telif hakları ve etik sorunları",
    "Derin öğrenme (Deep Learning) ile tıbbi görüntü işleme",
    "Metaverse konseptinin ardındaki altyapı ve grafik teknolojileri",
    "Artırılmış Gerçeklik (AR) ile online perakende deneyimi",
    "Nesnelerin İnterneti (IoT) ağlarında güvenlik protokolleri",
    "5G ve 6G teknolojilerinin telekomünikasyon sektörüne etkisi",
    "Biyometrik güvenlik sistemlerinin hata payları ve yanıltılma ihtimalleri",
    "Uzay çöpü sorunu ve yörünge temizlik teknolojileri",
    "Mars kolonizasyonu için geliştirilen kapalı yaşam destek sistemleri",
    "Akıllı şehirlerde trafik optimizasyon algoritmaları",
    "E-ticarette kullanıcı davranışlarının tahmine dayalı analizi (Predictive Analytics)",
    "Otomasyonun bankacılık ve finans sektöründeki iş gücüne etkisi",
    "Programlama dillerinin sözdizimi (Syntax) evrimi",
    "DevOps kültürünün yazılım yaşam döngüsündeki kritik yeri",
    "Tarayıcı motorlarının (V8, WebKit) kodu ekrana dökme prensipleri",
    "Görüntü sıkıştırma (JPEG/PNG) algoritmalarının matematiği",
    "Fiber optik denizaltı kablolarının kıtalararası veri iletim fizyolojisi",
    "Yazılım hatalarının (Bug) tarihçesindeki en büyük sistem felaketleri",
    "Açık veri (Open Data) hareketinin şeffaflığa ve sivil gelişime etkisi",
    "3D yazıcı teknolojilerinin medikal protez üretimindeki rolü",
    "Çevik (Agile) ve Scrum proje yönetim metodolojileri",
    "Makine öğrenmesinde aşırı öğrenme (Overfitting) problemi ve çözümleri",

    // --- SANAT, TASARIM VE ESTETİK ---
    "Tuval üzerine akrilik ve yağlı boya tekniklerinin katman (layering) kimyası",
    "Kil ve seramik şekillendirmede antik çağ fırınlama yöntemleri",
    "İç mimaride koyu ceviz, antrasit ve bordo renklerinin psikolojik etkisi",
    "Ambiyans aydınlatmalarında LED sıcaklıklarının (Kelvin) mekana etkisi",
    "Karakalem eskiz çizimlerinde perspektif ve altın oran kullanımı",
    "Evlerdeki 'kahve köşesi' (Coffee Bar) tasarımının sosyolojik arka planı",
    "Rönesans resminde ışık ve gölge (Chiaroscuro) tekniği",
    "Sürrealizm akımı ve Salvador Dali'nin eriyen sembol dünyası",
    "Bauhaus tasarım okulunun modern mimariye ve endüstriyel tasarıma etkileri",
    "Gotik mimaride devasa vitray sanatı ve mekana ışık kullanımı",
    "Pop-Art akımının tüketim toplumuna renkli ve ironik eleştirisi",
    "Japon Kintsugi sanatı ve kırılanı altınla onararak kusuru sevme felsefesi",
    "Barok dönemi müzik ve mimarisindeki şatafat ve asimetri",
    "Renk teorisinde tamamlayıcı ve zıt renklerin beyindeki görsel algısı",
    "Minimalist tasarımın kökenleri ve 'Az Çoktur' (Less is More) felsefesi",
    "Grafiti ve sokak sanatının politik bir ifade aracı olarak doğuşu",
    "Art Deco akımının 1920'lerin caz çağı yaşam tarzına yansıması",
    "Leonardo da Vinci'nin eskiz defterlerindeki mühendislik ve anatomi çizimleri",
    "Vincent van Gogh'un fırça darbelerindeki psikolojik yansımalar ve renk seçimi",
    "Kübizm ve Pablo Picasso'nun perspektifi parçalama tekniği",
    "Modern dijital sanat, Pixel Art ve NFT'lerin sanat piyasasına etkisi",
    "İslami geometrik çini desenlerinin matematiksel altyapısı",
    "Antik Mısır duvar sanatında sembolizm ve hiyerogliflerin yapısı",
    "Heykel sanatında mermerin işleniş tarihi ve Michelangelo",
    "Soyut Dışavurumculuk (Jackson Pollock) ve içgüdüsel hareket sanatı",
    "Tipografi sanatı: Serif ve Sans-serif yazı tiplerinin duygu iletimi",
    "Endüstriyel tasarımda ergonomi, fonksiyon ve estetik dengesi",
    "Moda tarihinde 1960'lar ve fütüristik (Uzay çağı) giyim tasarımları",
    "Sinematografide film renk paletlerinin (Color Grading) anlatıya katkısı",
    "Tiyatro sahnelerinde dekor ve optik illüzyon teknikleri",
    "Çizgi roman (Comics) panellerinde zaman geçişleri ve görsel ritim",
    "Ukiyo-e (Japon ahşap baskı sanatı) ve Hokusai'nin Büyük Dalga'sı",
    "Kinetik sanat, rüzgar heykelleri ve hareketin sanata dahil olması",
    "Geleneksel Türk ebru sanatında su ve öd kimyası",
    "Fotoğrafçılıkta alan derinliği (Bokeh) ve üçler kuralı (Rule of Thirds)",
    "Mimari restorasyonlarda etik yaklaşımlar ve Venedik Tüzüğü standartları",
    "Dışavurumcu (Ekspresyonist) Alman sinemasının çarpık gölge oyunları",
    "Kamusal alan (Meydan) heykellerinin kent kimliğine ve hafızasına etkisi",
    "Zanaattan sanata: Venedik cam üfleme sanatının incelikleri",
    "Moda tasarımında sürdürülebilirlik, doğal kumaşlar ve ileri dönüşüm (Upcycling)",
    "Doğadan ilham alan mimari: Biyomimikri ve organik yapılar",
    "Geleneksel 2D çizgi film animasyonlarında Disney'in 12 temel prensibi",
    "İllüstrasyonda karakter tasarımı, şekil dili ve silüet önemi",
    "Sergileme tasarımı: Müzelerde eserlerin ziyaretçi psikolojisine göre yerleşimi",
    "Kağıt katlama sanatı Origami'nin uzay panellerinde kullanılan matematiği",
    "Halı ve kilim (Elibelinde, Pıtrak) motiflerindeki anadolu efsaneleri",
    "Land Art (Arazi Sanatı) ve doğayla bütünleşip zamanla yok olan eserler",
    "Afiş tasarımının Soğuk Savaş ve propaganda dönemlerindeki kitle gücü",
    "Kaligrafi ve el yazısı sanatının (Lettering) meditatif yönü",
    "Çağdaş sanatta enstalasyon (mekana özgü yerleştirme) mantığı",

    // --- MİSTİK, SPİRİTÜEL VE PSİKOLOJİ ---
    "Türk kahvesi falında hayvan sembollerinin (Kuş, Yılan vb.) kolektif arketipleri",
    "Numerolojide doğum tarihi sayıları ve yaşam yolu hesaplamalarının kökeni",
    "Doğal taşların (ametist, pembe kuvars, oniks) mitolojik geçmişi ve titreşimleri",
    "Astroloji haritasında evlerin anlamı, Ay düğümleri ve kadersel temalar",
    "Rüyaların psikanalitik yorumu ve bilinçaltı sembolizmi",
    "Carl Jung'un kolektif bilinçdışı, gölge arketipi ve anima/animus kavramları",
    "Tarot kartlarının Büyük Arkana sembolizmi ve Kahramanın Yolculuğu",
    "Uyku evreleri, REM uykusu ve lucid (bilinçli) rüya kontrol teknikleri",
    "İnsan psikolojisinde Barnum / Forer etkisi (Astroloji neden doğru hissettirir?)",
    "Çakralar, enerji merkezleri ve doğu felsefesindeki bedensel karşılıkları",
    "Feng Shui felsefesine göre mekan ve eşya enerjisi düzenleme sanat",
    "Senkronizasyon (Eşzamanlılık) kavramı ve evrensel anlamlı tesadüfler",
    "Renklerin insan psikolojisi ve satın alma karar mekanizmasındaki etkisi",
    "İçe dönük (İntrovert) ve dışa dönük (Ekstrovert) kişilik enerjilerinin kaynağı",
    "Plasebo ve Nosebo etkisinin zihin-beden inanç ilişkisindeki inanılmaz gücü",
    "Hafıza sarayı (Method of Loci) ile zihinsel depolama ve hatırlama tekniği",
    "Bilişsel çelişki (Cognitive Dissonance) ve inançlarımızı meşrulaştırma çabası",
    "Aura inancı, Kirlian fotoğrafçılığı ve bedensel biyoelektromanyetik alanlar",
    "Ay evrelerinin (Dolunay vb.) insan biyolojik ritmine etkisi efsanesi",
    "Beden dili okuma, çapraz kollar ve göz seğirmesi gibi mikro ifadeler",
    "Mitolojideki yaratılış efsanelerinin dünyadaki farklı kültürlerdeki ortak noktaları",
    "Günlük tutmanın (Journaling) anksiyete, planlama ve zihinsel berraklığa etkisi",
    "Maslow'un ihtiyaçlar hiyerarşisi piramidi ve 'Kendini Gerçekleştirme' evresi",
    "Şamanizm'de doğa ruhları, şifa ritüelleri ve ritmik trans halleri",
    "Simyacılık tarihi ve kurşunu altına çevirme metaforunun içsel anlamı",
    "Nostalji hissinin beyindeki nörolojik kökeni ve rahatlatıcı etkisi",
    "Optik illüzyonlar, kör noktalar ve beynin görsel verileri tamamlama hataları",
    "Bilinçaltı (Subliminal) mesajların reklamcılıktaki algı yönetimi sınırları",
    "Analitik zeka (IQ) ve duygusal zekanın (EQ) beyindeki merkezleri ve farkları",
    "Asosyal ve antisosyal kavramlarının psikolojik ve klinik farkları",
    "Karar yorgunluğu (Decision Fatigue) ve başarılı insanların minimalizm tercihi",
    "Stanford hapishane deneyi ve iyi insanların otorite altında değişen psikolojisi",
    "Flow (Akış) durumu ve bir işe tam odaklanmanın getirdiği mutluluk psikolojisi",
    "Deja vu (Bunu daha önce yaşamıştım) hissinin nörolojik ve zaman algısı açıklamaları",
    "Mandala boyama sanatının zihin üzerindeki meditatif ve odaklayıcı etkileri",
    "Joseph Campbell ve Kahramanın Sonsuz Yolculuğu (Monomyth) yapı taşı",
    "Doğrulamaya sapması (Confirmation Bias) zihnimizi gerçeklikten nasıl yanıltır?",
    "Enneagram kişilik tipleri, mizaçlar ve strese/rahatlığa geçiş seviyeleri",
    "Stoacılık felsefesinde 'Amor Fati' (Kaderini Sev) kavramı ve kabullenme",
    "Solfeggio müzik frekanslarının (Örn: 432 Hz) ruh haline etkileri üzerine tartışmalar",
    "İkigai: Japonların uzun ve mutlu yaşamı bulma, varoluş amacı felsefesi",
    "Imposter (Sahtekar) sendromu: Başarılı insanların kendini yetersiz hissetmesi",
    "Renk auriküler akupunktur ve alternatif tamamlayıcı şifa yöntemleri",
    "Hipnozun psikiyatrideki travma çözme alanları ve bilinçaltı sınırları",
    "Arketiplerin (Bilge, Asi, Soytarı) sinema, marka ve edebiyattaki yansımaları",
    "Koku duyusunun (Limbik sistem) hafıza ve geçmiş duygularla olan doğrudan bağlantısı",
    "Somatizasyon: Söylenmemiş psikolojik acının fiziksel bedensel ağrıya dönüşümü",
    "İkna psikolojisi (Robert Cialdini'nin kıtlık, otorite, karşılıklılık ilkeleri)",
    "Zeigarnik etkisi: Beynimiz yarım kalan işleri ve filmleri neden unutamaz?",
    "İnsanın anlam arayışı ve Viktor Frankl'ın toplama kampında doğan Logoterapi yaklaşımı",

    // --- BİLİM, SAĞLIK, DOĞA VE İNSAN BEDENİ ---
    "Direnç bandı antrenmanlarında kas gerilim sürelerinin (Time under tension) hipertrofiye etkisi",
    "Pilatesin core (merkez) bölgesi ve omurga hizalamasındaki fizyolojik iyileştirici rolü",
    "Deniz kenarında yapılan sahil yürüyüşlerinin stres (Kortizol) düşürücü nörokimyasal etkisi",
    "Dumbbell ile yapılan serbest ağırlık çalışmalarının kadınlarda kemik yoğunluğuna etkisi",
    "Süzme yoğurt ve labne yapımındaki laktik asit fermantasyonunun mikrobiyoma faydaları",
    "Saf sızma zeytinyağındaki fenolik bileşiklerin kalp ve damar sağlığındaki antioksidan gücü",
    "Bütün zeytin yemenin sindirimi ile doğrudan zeytinyağı tüketiminin metabolik farkı",
    "İkinci beyin (Bağırsak-Beyin ekseni) ve mikrobiyota sağlığının psikolojiye etkisi",
    "Ev antrenmanlarında (Home workout) progresif aşırı yüklenme (Progressive Overload) kuralları",
    "Kahve ve kafein tüketiminin antrenman performansına ve merkezi sinir sistemine etkisi",
    "Klinik farmakolojide kardiyovasküler sistem (Kardiyotoksisite) ve çevresel stres faktörleri",
    "Akdeniz diyeti piramidinin hücresel yaşlanma (Telomer boyu uzaması) üzerindeki etkisi",
    "Yüksek şiddetli aralıklı antrenman (HIIT) sonrası egzersiz sonrası kalori yakımı (EPOC)",
    "Tavuk gibi hayvansal proteinler ile bitkisel proteinlerin vücuttaki biyoyararlanım farkları",
    "Makarnanın (Kompleks karbonhidrat) glisemik indeksi ve beyne enerji sağlama süreci",
    "Düzenli yürüyüşlerin kardiyovasküler kapasite (VO2 Max) gelişimi ve akciğer sağlığı",
    "Kas lifi tipleri (Tip 1 Yavaş, Tip 2 Hızlı) ve antrenmana verdikleri hücresel tepkiler",
    "Esneme (Stretching) ve mobilite çalışmalarının kas-iskelet sistemi sakatlıklarını önlemesi",
    "Ev yapımı kemikli çorbaların eklem sağlığı, kolajen sentezi ve cilt yapısına etkisi",
    "Oksidatif stres ve hücre yenilenmesinde derin uykunun (NREM) kritik rolü",
    "Sirkadiyen ritim ve karanlık oda uyumalarında melatonin hormonunun gece salınımı",
    "Postür (Duruş) bozukluklarında teknoloji boynu (Tech neck) sendromu ve düzeltici egzersizler",
    "Düzenli hidrasyonun (Su tüketiminin) beyin fonksiyonları, odaklanma ve yorgunluğa etkisi",
    "Rafine şekerin (Glukoz) beyin ödül sistemine (Dopaminerjik yollar) uyuşturucu benzeri etkisi",
    "Laktik asit birikiminin kas yorgunluğundaki gerçek rolü (Gerçekten ağrı yapar mı?)",
    "Besinlerdeki makro (Protein/Yağ) ve mikro (Vitamin/Mineral) besinlerin günlük alınım dengesi",
    "Vücut kitle indeksi (BMI) yanılgısı ve kas/vücut yağ oranının (Body Fat) asıl önemi",
    "Intermittent Fasting (Aralıklı Oruç) sırasındaki hücresel temizlik (Otofaji) süreci",
    "Kriyoterapi ve antrenman sonrası soğuk duşların/buz banyolarının kas onarımına etkisi",
    "D vitamini sentezinde cilt tipinin ve güneş ışığı açısının deri altındaki mekanizması",
    "Nefes egzersizlerinin (4-7-8 veya Diyafram nefesi) parasempatik (Rahatlama) sinir sistemine etkisi",
    "Kas hafızası: Uzun süre spora ara verince kaslar nasıl ve neden daha hızlı toparlar?",
    "İzometrik (Plank vb.) ve izotonik kas kasılmaları arasındaki kas geliştirme farkları",
    "B12 vitamininin sinir hücresi zarları (Miyelin kılıfı) üzerindeki koruyucu ve hayati görevi",
    "Fonksiyonel antrenmanların günlük yaşam hareketlerine ve çevikliğe (Agility) katkısı",
    "Antioksidanların hücre bozucu serbest radikallerle hücre bazındaki elektron savaşı",
    "Kronik stresin bağışıklık sistemi hücreleri (Makrofajlar) üzerindeki çökertici baskısı",
    "Bağırsak mikrobiyotasında probiyotik ve prebiyotik (Lifli gıdalar) beslenme dengesi",
    "Sedanter (Sürekli oturan/hareketsiz) yaşamın insülin direnci ve metabolik sendroma etkileri",
    "Fasyanın (Kasları saran zar sistemi) esnekliğinin bedensel duruş ve rahatlama üzerindeki önemi",
    "Yüksek irtifa (Dağ) antrenmanlarında vücudun kırmızı kan hücresi üretim mekanizması",
    "Plometrik (Zıplama vb.) antrenmanların kaslardaki patlayıcı güce ve hızlanmaya etkisi",
    "Kıkırdak dokusunun kan damarsız (avasküler) yapısı, yenilenme hızı ve eklem koruması",
    "Ağrı kesicilerin (Ibuprofen vb.) antrenman sonrası kas büyümesini (hipertrofiyi) yavaşlatma ihtimali",
    "Termojenez: Vücudun sindirim ve üşüme sırasında ısı üreterek kalori harcama süreci",
    "Zihinsel antrenman (İmgeleme) yapan sporcuların kas aktivasyonunda görülen sinirsel artış",
    "Kinesiotape (Renkli ağrı bantları) uygulamasının fiziksel mekanizması (Deri altı boşluk yaratma)",
    "Elektrolitlerin (Sodyum, Potasyum, Magnezyum) sinir iletimi ve kas kramplarındaki görevi",
    "Sağlıklı yağların (Omega-3, Ceviz, Zeytinyağı) beyin dokusundaki yapısal ve onarıcı işlevi",
    "Hipertrofi (Kas büyütme) antrenmanlarında setler arası dinlenme sürelerinin (1-3 dk) hücresel bilimi",

    // --- TARİH, MİTOLOJİ VE MEDENİYETLER ---
    "İskenderiye Kütüphanesi'nin inşası, içerdiği parşömenler ve yıkılışının bilim tarihine etkisi",
    "Sümer tabletlerinde geçen Gılgamış Destanı, ölümsüzlük arayışı ve tufan efsaneleri",
    "Roma İmparatorluğu'nda gladyatör dövüşlerinin sosyo-politik 'Ekmek ve Eğlence' işlevi",
    "Antik Mısır'da Ölüler Kitabı, mumyalama ritüelleri ve ölümden sonraki yaşam inancı",
    "Göbeklitepe'nin T biçimli dikilitaşları, inşası ve tarım öncesi avcı-toplayıcı inanç sistemleri",
    "Vikinglerin uzun gemi (Longship) denizcilik teknolojileri, güneş taşı ve pusula kullanımları",
    "Ortaçağ Avrupası'nda veba (Kara Ölüm) salgını, tıbbi çaresizlik ve sonrasındaki ekonomik devrim",
    "Çin Seddi'nin yapım aşamaları, malzeme yapısı (yapışkan pirinç) ve mimari savunma stratejileri",
    "Rönesans döneminde İtalya'daki Medici ailesinin sanata, bilime ve mimariye devasa sponsorluğu",
    "Aztek ve Maya takvimlerindeki güneş tutulmaları ve matematiksel astronomi hesaplamaları",
    "Sanayi Devrimi'nin buhar makineleri, çocuk işçiler, çevre kirliliği ve şehirleşme üzerindeki etkileri",
    "Soğuk Savaş döneminde uzay yarışı: Sputnik uydusundan Apollo ay görevlerine uzanan rekabet",
    "İpek Yolu'nun sadece baharat ve ipek değil, Asya-Avrupa kültür/din etkileşimindeki rolü",
    "Osmanlı İmparatorluğu'nda Lale Devrinin kültürel yenilikleri, matbaanın gelişi ve estetik anlayışı",
    "Fransız İhtilali'nin monarşi yıkımı, giyotin kullanımları ve modern insan hakları evrimindeki yeri",
    "İnkaların And Dağları'nda kurduğu zorlu teras tarımı, taş işçiliği ve mühendislik su yolları",
    "Truva Savaşı'nın mitolojik İlyada kurgusu (Akhilleus/Hektor) ve Truva Antik Kenti'nin arkeolojik gerçekleri",
    "Antik Yunan'da şehir devletlerinde (Polis) demokrasi kavramının doğuşu ve uygulanış biçimi",
    "Samurai kültürü, onur ölümcüllüğü (Seppuku), Bushido felsefesi ve kılıç yapım sanatı (Katana)",
    "2. Dünya Savaşı'nda Alman Enigma şifreleme makinesinin kırılması, Alan Turing ve bilgisayarın doğuşu",
    "Jeanne d'Arc'ın (Jan Dark) Yüzyıl Savaşları'ndaki köylü kızından ordu komutanına yükselen mistik rolü",
    "Ürdün'deki Petra Antik Kenti'nin (Nebatiler) doğrudan pembe kayalara oyulma mühendislik teknikleri",
    "Çarlık Rusyası'nın son yıllarında Grigori Rasputin'in Romanov sarayı üzerindeki mistik ve iyileştirici etkisi",
    "Haçlı Seferleri'nin askeri kayıpları ve sonrasında Doğu-Batı ticaretine, pusula ve kağıt aktarımına yansımaları",
    "Rönesans astronomisinde Galileo Galilei'nin teleskop keşifleri ve Engizisyon/Kilise ile Dünya'nın dönüşü çatışması",
    "Büyük İskender'in durdurulamaz askeri taktikleri (Makedon Falanksı) ve Helenistik dönemin doğuşu",
    "Piri Reis haritasının 16. yüzyıl denizciliğindeki doğruluğu, Antarktika çizimi ve dönemin kartografi önemi",
    "Feodal Japonya'da Ninja (Shinobi) casusluk/suikast örgütlenmeleri, silahları ve gizlilik teknikleri",
    "Maya medeniyetinde sıfır sayısının keşfi, yirmi tabanlı sayı sistemi ve mimari astronomi hizalamaları",
    "Cadı avları döneminin (Salem vb.) toplumsal histerisi, psikolojik, dini ve sosyolojik altyapısı",
    "Nikola Tesla (Alternatif Akım) ve Thomas Edison (Doğru Akım) arasındaki acımasız Akım Savaşları",
    "1215 Magna Carta sözleşmesinin İngiltere'de kralın yetkilerini kısıtlaması ve anayasal hukukun temeli",
    "Antik Hindistan'da Veda metinleri, reenkarnasyon inancı, kast sistemi ve Brahmanizm felsefesi",
    "Cengiz Han'ın kurduğu Moğol İmparatorluğu'nun acımasız savaş taktikleri ve kıtalararası posta sistemi (Yam)",
    "Antik Sparta'da zayıf bebeklerin ayrılması ve Agoge adı verilen acımasız çocukluk askeri eğitim sistemi",
    "İstanbul'un Fethi'nde Urban Usta'nın döktüğü devasa Şahi toplarının balistik ve döküm teknolojisi",
    "Vahşi Batı (Wild West) mitinin, altın hücumunun ve kovboy kültürünün Amerikan sinemasına kuruluşu",
    "Marco Polo'nun seyahatnamelerinde Asya (Kubilay Han) tasvirleri, matbaa ve makarna aktarımı efsaneleri",
    "Rönesans'ta felsefe taşını arayan simyadan (Alşimi), elementleri inceleyen modern kimyaya geçiş süreci",
    "Dünyanın 7 Harikasından Babil'in Asma Bahçeleri efsanesinin kurak çölde su yükseltme mühendislik analizi",
    "Kuzey Amerika Kızılderili (Yerli) kabilelerinde totem direkleri, şamanistik doğa kültürü ve rüya kapanı (Dreamcatcher)",
    "Kelt (İrlanda/İskoçya) mitolojisinde doğa perileri, devler, klan kültürü ve ağaçlara tapan Druid rahipleri",
    "Antik çağlarda kütüphanecilik (Pergamon/Bergama Kütüphanesi), kil tablet, parşömen ve papirüs üretimi",
    "Wright Kardeşler'in 1903'teki ilk motorlu ve kontrollü uçuş denemelerinin kanat bükme aerodinamiği",
    "İspanyol Engizisyonu'nun hukuki sorgulama, toplum kontrolü ve dinsel arındırma (Torquemada) politik yöntemleri",
    "Amerikan İç Savaşı'nın (Kuzey-Güney) tarım/sanayi ekonomik nedenleri ve köleliğin Abraham Lincoln ile kaldırılması süreci",
    "Titanik'in batışında rol oynayan çelik perçin zayıflıkları, yetersiz filika planlaması ve buzdağı dinamiği",
    "İngiltere'deki gizemli Stonehenge anıtının dev taşlarının nasıl taşındığı ve yaz dönümü astronomik hizalamaları",
    "Japonların dış dünyaya tamamen kapandığı 250 yıllık izolasyon dönemi (Sakoku) ve modernleşmeye (Meiji) dışa açılışı",
    "Birinci Dünya Savaşı'nda siper hayatı, hardal gazı teknolojisi ve askerlerdeki şok (Shell Shock) psikolojisi",

    // --- KÜLTÜR, SİNEMA, EDEBİYAT VE GÜNDELİK YAŞAM ---
    "Yaprak Dökümü, Aşk-ı Memnu gibi aile dramalarının ve edebiyat uyarlamalarının Türk televizyon tarihindeki sosyolojisi",
    "Kiralık Aşk benzeri romantik komedi (Romcom) dizilerindeki ofis aşkı, karakter dönüşümü ve senaryo klişeleri",
    "Şehirlerarası otobüs terminallerinin ve uzun gece yolculuklarının edebiyat ve sinemadaki 'ayrılık/kavuşma/kaçış' teması",
    "Filtre kahve demleme tekniklerinin (V60, French Press, Chemex) akış hızları, su sıcaklığı ve tat profilleri",
    "Geleneksel Türk kahvesi pişirme ritüelinin (köpük, telve, lokum) tarihçesi ve UNESCO somut olmayan mirası",
    "Öğrenci yurtlarında/apartlarda kalan genç yetişkinlerin geliştirdikleri ekonomik menüler ve hayatta kalma pratikleri",
    "Yüksek lisans (Master) programlarına hazırlıkta etkili zaman/odak yönetimi, araştırma konuları bulma ve ALES stratejileri",
    "İngilizce ve Fransızca gibi dilleri öğrenirken her gün düzenli kişisel günlük (Journal) yazmanın dil hafızasına etkisi",
    "Sessiz ve loş kafelerde (Coffee Shop) çalışmanın, hafif ortam gürültüsü sayesinde üretkenliği (Coffee Shop Effect) artırması",
    "Telekomünikasyon, telemetri ve bankacılık altyapılarında veri paketlerinin hızlı ve güvenli iletim mimarileri",
    "Bankacılık ve telekomünikasyon sektöründe arka plan (Backend) yazılım geliştiricilerinin çözdüğü büyük veri (Big Data) krizleri",
    "Kocaeli, İzmit ve Gebze bölgesinin Türkiye sanayisindeki, otomotiv ve bilişim teknolojilerindeki (Teknoparklar) evrimi",
    "Türkiye'den Almanya/Berlin'e işçi göçü edenlerin 1960'lardan günümüze kadar değişen edebiyat, sinema ve kültürel uyumu",
    "Düzenli ev işleri, çamaşır ve oda temizliği (Decluttering) rutinlerinin zihinsel toparlanma ve ders çalışma motivasyonuna etkisi",
    "Kurgu dışı (Non-fiction) kitaplar, felsefe, sanat tarihi ve otobiyografi okumanın insanın analitik düşünmesine katkısı",
    "Sanat tarihi kitaplarında mimari akımların ve tabloların dönemin siyasi (Savaş/Barış) ve ekonomik durumuna yansımaları",
    "Kişisel gelişim ve yaşam koçluğu sektörünün, modern insanın şehir hayatındaki stres ve anlam arayışındaki milyar dolarlık pazarı",
    "Spotify, Netflix, YouTube gibi platformların tavsiye (Recommendation) algoritmalarının müzik ve içerik zevkimizi nasıl yönlendirdiği",
    "Sosyal medya güzellik filtrelerinin beden algısı (Dismorfi) ve gerçek hayattaki estetik cerrahi beklentilere tehlikeli etkisi",
    "Büyük şehirlerde sahil bantlarının ve bisiklet yollarının kentsel psikolojiye, stresi azaltmaya ve sosyalleşmeye katkısı",
    "Uygulamalarda Oyunlaştırma (Gamification) mantığının (seviye atlama, rozet kazanma) eğitim ve spor rutinlerindeki dopamin başarısı",
    "Dijital yazışmalarda emojilerin modern dil yapısındaki yeri, noktalama işaretlerinin yerini alması ve duygu aktarımı",
    "Minimalizm, 'Kapsül Dolap' akımının ve sadeleşmenin hızlı tüketim (Fast Fashion) toplumu üzerindeki frenleyici ve özgürleştirici gücü",
    "Sokak yemekleri kültürünün (Street Food) dünya gastronomi turizmindeki yeri ve Netflix belgesellerine yansıması",
    "Podcast dinleme ve YouTube arka plan sohbetleri kültürünün, günlük ev işleri/yolculuk sırasında radyoculuğun yerini alması",
    "Zaman kapsülleri: İnsanlığın gelecekteki medeniyetlere bugünün kültürünü anlatmak için yeraltına mesaj bırakma takıntısı",
    "Dövme (Tattoo) sanatının eski denizciler ve kabilelerden çıkıp modern modaya, kendini ifade aracı olmaya evrimi",
    "Gündelik objelerin (ofis sandalyeleri, çalışma lambaları, klavyeler) estetik ve fonksiyonu birleştirerek tasarım klasikleri haline gelmesi",
    "İnternet memelerinin (Meme) dijital çağın anlık karikatürlerine dönüşmesi ve evrensel bir mizah dili oluşturması",
    "Sesli asistanların (Siri, Alexa vb.) Doğal Dil İşleme (NLP) ile insan ses tonunu algılama ve sohbet edebilme gelişimi",
    "Sürdürülebilir ve yavaş moda (Slow Fashion) hareketinin su ayak izi, karbon salınımı ve tekstil endüstrisine çevreci tepkisi",
    "ASMR (Otonom Duyusal Meridyen Tepkisi) videolarının fısıltı ve tıklatma sesleriyle beyinde yarattığı karıncalanma ve rahatlama etkisi",
    "Kutu oyunlarının (Board games, FRP) dijital ekrandan uzaklaşmak isteyen yetişkinler arasında yeniden sosyalleşme aracı olarak popülerleşmesi",
    "Açık plan ofis mimarilerinin (Open-space) çalışan iletişimi üzerindeki pozitif, odaklanma ve gürültü üzerindeki negatif etkileri",
    "Z jenerasyonunun (Gen-Z) çalışma hayatından esneklik, anlam, ruh sağlığı hakları ve yatay hiyerarşi beklentileri",
    "Yabancı dizi ve filmlerdeki o kültüre has esprilerin, kelime oyunlarının ve referansların altyazı/dublaj çeviri (Yerelleştirme) zorlukları",
    "Uzaktan (Remote) ve hibrit çalışma kültürünün beyaz yakalı göçüne, emlak fiyatlarına ve kırsal şehirleşmeye etkisi",
    "Yemek blogları ve YouTube sayesinde dünyadaki yöresel mutfakların (Örn: Sushi, Taco) küreselleşip ev mutfaklarına girmesi",
    "Analog film fotoğrafçılığının, Polaroid ve kasetlerin mükemmel dijital dünyada kusurlu, nostaljik bir estetik arayışıyla geri dönüşü",
    "İkinci el kıyafet pazarının (Thrifting / Vintage mağazalar) hem ekonomik döngüsel modelde hem de özgün giyim tarzındaki rolü",
    "Büyük şehir parklarının (Central Park vb.) betonarme kentsel ısı adası etkisini azaltmadaki ve ekolojik nefes alanlarındaki devasa işlevi",
    "Tatil, otel ve seyahat planlamalarında Enuygun, Tripadvisor gibi platformlardaki kullanıcı yorumlarının algısal güvenilirliği",
    "Geleneksel el işlerinin (örgü, kil seramik, tuval) Etsy ve Instagram gibi dijital pazar yerlerinde global bir iş modeline dönüşmesi",
    "George Orwell, Aldous Huxley gibi yazarların bilim kurgu edebiyatındaki distopyalarının günümüz veri takip sistemleriyle benzerliği",
    "Dijital detoks ve doğa kamplarının, akıllı telefon ekran süresi bağımlılığı ve bilgi bombardımanı (Information Overload) tedavisindeki yeri",
    "Mikro hobiler: Günde sadece 15-20 dakika ayrılan kısa süreli el sanatları ve boyamaların günün stresini sıfırlamadaki, mutluluğa etkisi",
    "Sosyal medyada 'Cancel Culture' (İptal Kültürü), anonim hesaplar üzerinden yapılan kitle linç psikolojisi ve itibar yönetimi",
    "Vegan, vejetaryen ve bitki bazlı et teknolojisi trendlerinin küresel gıda endüstrisine, restoran menülerine ve iklim krizine etkisi",
    "Uzay turizminin milyarder yarışlarından çıkıp ticari potansiyele ulaşması, alt yörünge uçuşları ve gelecekteki muhtemel rotalar",
    "Hayvan destekli terapilerin, evcil hayvan bakımının yalnızlık, anksiyete, depresyon ve insan psikolojisindeki şifalandırıcı bağ kurma rolü"
];

// HTML'deki elemanları (kutuları ve butonları) JavaScript'e çekiyoruz
const topicBox = document.getElementById('topic-box');
const step1Start = document.getElementById('step-1-start');
const step2Decision = document.getElementById('step-2-decision');
const btnStart = document.getElementById('btn-start');
const btnRetry = document.getElementById('btn-retry');

let flipInterval; // Dönen takvim sayacını tutacağımız değişken
let isFlipping = false; // Animasyon oynarken tekrar tıklanmasını önlemek için

// Sayfa ilk yüklendiğinde kutuda yazacak mesaj
topicBox.innerText = "Konu çekmek için başlata bas...";

// --- 2. TAKVİM YAPRAĞI GİBİ DÖNME (ANİMASYON) FONKSİYONU ---
function startRoulette() {
    // Eğer zaten dönüyorsa, tekrar çalışmasını engelle
    if (isFlipping) return;
    isFlipping = true;

    // 1. Adımdaki "başlat" butonunu gizle
    step1Start.classList.add('hidden');
    // Eğer 2. adımdan (tekrar dene'den) geliyorsa orayı da gizle
    step2Decision.classList.add('hidden');

    // Hızlıca konuları değiştirme (setInterval ile her 60 milisaniyede bir)
    flipInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * topics.length);
        topicBox.innerText = topics[randomIndex];
    }, 60); // 60ms = takvim yapraklarının dönme hızı

    // 2.5 saniye sonra animasyonu durdur ve nihai konuyu seç (setTimeout)
    setTimeout(() => {
        clearInterval(flipInterval); // Hızlı dönmeyi durdur
        
        // Son bir nihai rastgele konu seç ve ekrana bas
        const finalTopic = topics[Math.floor(Math.random() * topics.length)];
        topicBox.innerText = finalTopic;
        
        isFlipping = false;

        // 2. Adım butonlarını (devam / tekrar dene) ekranda göster
        step2Decision.classList.remove('hidden');
    }, 2500); // 2500 milisaniye (2.5 saniye) sonra duracak
}

// --- 3. BUTONLARA TIKLANMA OLAYLARINI (EVENT) DİNLEME ---

// "başlat" yazısına tıklanınca çarkı döndür
btnStart.addEventListener('click', startRoulette);

// "tekrar dene" yazısına tıklanınca çarkı baştan döndür
btnRetry.addEventListener('click', startRoulette);

// --- 4. ZAMANLAYICI VE NOT DEFTERİ İÇİN GEREKLİ ELEMANLAR ---
const btnContinue = document.getElementById('btn-continue');
const step3TimeSetup = document.getElementById('step-3-timesetup');
const timeInput = document.getElementById('time-input');
const btnStartTimer = document.getElementById('btn-start-timer');
const step4Timer = document.getElementById('step-4-timer');
const timeDisplay = document.getElementById('time-display');
const notepadPanel = document.getElementById('notepad-panel');
const btnSave = document.getElementById('btn-save');

let countdownInterval;
let totalSeconds;

// --- 5. EKRAN GEÇİŞLERİ VE SAYACIN ÇALIŞMASI ---

// "devam" butonuna basılınca süre seçme alanını göster
btnContinue.addEventListener('click', () => {
    step2Decision.classList.add('hidden'); // Karar butonlarını gizle
    step3TimeSetup.classList.remove('hidden'); // Süre girişini aç
});

// "başla" butonuna basılınca geri sayımı başlat
btnStartTimer.addEventListener('click', () => {
    const minutes = parseInt(timeInput.value);

    // Kullanıcı geçerli bir süre girmediyse uyar
    if (isNaN(minutes) || minutes <= 0) {
        alert("Lütfen geçerli bir dakika (örn: 15) gir!");
        return;
    }

    // Dakikayı saniyeye çeviriyoruz
    totalSeconds = minutes * 60;

    // Ekran geçişi: Süre girme kutusunu gizle, Sayacı göster
    step3TimeSetup.classList.add('hidden');
    step4Timer.classList.remove('hidden');

    // Sayacı ekrana ilk kez yazdır
    updateTimerDisplay();

    // JavaScript'in setInterval motoru ile her 1000ms'de (1 saniye) bir süreyi düşür
    countdownInterval = setInterval(() => {
        totalSeconds--;
        updateTimerDisplay();

        // Süre sıfıra ulaştığında
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval); // Sayacı durdur
            finishTimer(); // Not defterini aç
        }
    }, 1000);
});

// Sayacı dijital saat (MM:SS) formatına çeviren fonksiyon
function updateTimerDisplay() {
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;
    
    // toString().padStart(2, '0') kodu, 9 gibi tek haneli sayıları 09 yapar
    timeDisplay.innerText = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

// --- 6. SÜRE BİTİMİ VE NOT ALMA ---
function finishTimer() {
    // Süre bitince sağ taraftaki not defteri panelini görünür yap
    notepadPanel.classList.remove('hidden');
}

// --- 6. SÜRE BİTİMİ VE NOTLARI LOCALSTORAGE'A KAYDETME ---
function finishTimer() {
    notepadPanel.classList.remove('hidden');
}

btnSave.addEventListener('click', () => {
    const userNote = document.querySelector('.notepad-input').value;
    
    if(userNote.trim() === "") {
        alert("Lütfen kaydetmeden önce araştırdığın konuyla ilgili birkaç not yaz!");
        return;
    }

    // 1. Kaydedilecek verileri toparlıyoruz
    const currentTopic = topicBox.innerText; // Ekranda yazan konu
    const timeSpent = timeInput.value;       // Harcanan dakika
    const today = new Date().toLocaleDateString('tr-TR'); // Günün tarihi

    // 2. Verileri bir obje (Object) haline getiriyoruz
    const researchRecord = {
        id: Date.now(), // Benzersiz bir kimlik
        date: today,
        topic: currentTopic,
        duration: timeSpent,
        note: userNote
    };

    // 3. LocalStorage'da önceden kaydedilmiş notlar var mı diye bakıyoruz
    // Varsa onları alıyoruz, yoksa boş bir liste (Array) oluşturuyoruz
    let archive = JSON.parse(localStorage.getItem('focusRouletteArchive')) || [];

    // 4. Yeni araştırmamızı bu listeye ekliyoruz
    archive.push(researchRecord);

    // 5. Güncel listeyi tekrar tarayıcının hafızasına (LocalStorage) yazıyoruz
    localStorage.setItem('focusRouletteArchive', JSON.stringify(archive));

    alert("Harika! Araştırma notların başarıyla kişisel arşivine kaydedildi.");

    // Kayıt bittikten sonra yeni bir araştırma yapabilmek için sayfayı sıfırla/yenile
    location.reload(); 
});

// --- 7. ARŞİVİ GÖRÜNTÜLEME VE KAPATMA ---
const btnShowArchive = document.getElementById('btn-show-archive');
const archivePanel = document.getElementById('archive-panel');
const btnCloseArchive = document.getElementById('btn-close-archive');
const archiveList = document.getElementById('archive-list');

// "arşivim" butonuna tıklayınca paneli aç ve notları yükle
btnShowArchive.addEventListener('click', () => {
    archivePanel.classList.remove('hidden');
    loadArchive();
});

// "kapat" butonuna tıklayınca paneli gizle
btnCloseArchive.addEventListener('click', () => {
    archivePanel.classList.add('hidden');
});

// Tarayıcı hafızasındaki (LocalStorage) notları ekrana basan fonksiyon
function loadArchive() {
    archiveList.innerHTML = ""; // Listeyi temizle

    // LocalStorage'dan arşivi çek (Yoksa boş liste getir)
    let archive = JSON.parse(localStorage.getItem('focusRouletteArchive')) || [];

    // Eğer henüz hiç not kaydedilmemişse
    if(archive.length === 0) {
        archiveList.innerHTML = "<p>Henüz kaydedilmiş bir araştırma notun yok. Haydi ilk konunu araştır!</p>";
        return;
    }

    // Listeyi tersine çevir (En son yazdığın not en üstte çıksın)
    archive.reverse();

    // Her bir kayıt için HTML oluştur ve listeye ekle
    archive.forEach(record => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('archive-item');

        itemDiv.innerHTML = `
            <h3>${record.topic}</h3>
            <p>🕒 ${record.duration} dakika | 📅 ${record.date}</p>
            <div class="note-text">${record.note}</div>
        `;

        archiveList.appendChild(itemDiv);
    });
}