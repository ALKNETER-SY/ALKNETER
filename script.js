$(document).ready(function() {
    // Mobil Menü Toggle
    $('.mobile-menu-btn').click(function() {
        $('.nav-links').toggleClass('active');
    });

    // Arama Sekmeleri
    $('.tab-btn').click(function() {
        const tabId = $(this).data('tab');
        
        // Tüm sekme butonlarını ve içeriklerini devre dışı bırak
        $('.tab-btn').removeClass('active');
        $('.tab-panel').removeClass('active');
        
        // Tıklanan sekme butonunu ve içeriğini etkinleştir
        $(this).addClass('active');
        $(`#${tabId}-tab`).addClass('active');
    });

    // Tarih Seçici
    const today = moment();
    const tomorrow = moment().add(1, 'days');

    $('.check-in').val(today.format('YYYY-MM-DD'));
    $('.check-out').val(tomorrow.format('YYYY-MM-DD'));

    $('.check-in, .check-out').click(function() {
        // Gerçek uygulamada bir tarih seçici eklentisi kullanılacak
        alert('Tarih seçici açılacak');
    });

    // Konuk Seçici
    $('.guests-input').click(function() {
        $('.guests-dropdown').toggleClass('active');
    });

    $('.counter-btn').click(function() {
        const $counter = $(this).closest('.guests-counter');
        const $count = $counter.find('.count');
        let count = parseInt($count.text());
        
        if ($(this).hasClass('plus')) {
            count++;
        } else if (count > 0) {
            count--;
        }
        
        $count.text(count);
        updateGuestsInput();
    });

    $('.apply-guests').click(function() {
        $('.guests-dropdown').removeClass('active');
    });

    function updateGuestsInput() {
        const adults = parseInt($('.guests-row:nth-child(1) .count').text());
        const children = parseInt($('.guests-row:nth-child(2) .count').text());
        const rooms = parseInt($('.guests-row:nth-child(3) .count').text());
        
        let guestsText = `${adults} بالغين`;
        if (children > 0) {
            guestsText += `، ${children} أطفال`;
        }
        guestsText += `، ${rooms} غرفة`;
        
        $('.guests-input').val(guestsText);
    }

    // Öne Çıkan Otelleri Yükle
    function loadFeaturedHotels() {
        const featuredHotels = [
            {
                id: 1,
                name: "فندق الشام الكبير",
                location: "دمشق، سوريا",
                price: "75,000 ل.س",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                amenities: ["واي فاي مجاني", "مسبح", "موقف سيارات", "مطعم"]
            },
            {
                id: 2,
                name: "فندق الأموي",
                location: "دمشق، سوريا",
                price: "90,000 ل.س",
                rating: 5,
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                amenities: ["سبا", "صالة ألعاب رياضية", "غرف عائلية"]
            },
            {
                id: 3,
                name: "فندق اللاذقية الدولي",
                location: "اللاذقية، سوريا",
                price: "60,000 ل.س",
                rating: 4,
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                amenities: ["إطلالة على البحر", "كافيه", "نادي ليلي"]
            },
            {
                id: 4,
                name: "فندق حلب الجديد",
                location: "حلب، سوريا",
                price: "55,000 ل.س",
                rating: 3.5,
                image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                amenities: ["واي فاي مجاني", "موقف سيارات"]
            }
        ];

        let hotelsHTML = '';
        featuredHotels.forEach(hotel => {
            const amenities = hotel.amenities.map(item => `<li>${item}</li>`).join('');
            
            hotelsHTML += `
                <div class="hotel-card">
                    <div class="hotel-image" style="background-image: url('${hotel.image}')">
                        <div class="hotel-rating">
                            <i class="fas fa-star"></i> ${hotel.rating}
                        </div>
                    </div>
                    <div class="hotel-info">
                        <h3 class="hotel-name">${hotel.name}</h3>
                        <p class="hotel-location">
                            <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                        </p>
                        <ul class="hotel-amenities">
                            ${amenities}
                        </ul>
                        <div class="hotel-price">
                            <span>ابتداءً من</span>
                            <strong>${hotel.price}</strong>
                            <a href="#" class="book-btn">احجز الآن</a>
                        </div>
                    </div>
                </div>
            `;
        });

        $('.featured-hotels').html(hotelsHTML);
    }

    // Sayfa yüklendiğinde öne çıkan otelleri yükle
    loadFeaturedHotels();

    // Otel arama formu gönderimi
    $('#hotel-search').submit(function(e) {
        e.preventDefault();
        
        const destination = $('#hotel-destination').val();
        const checkIn = $('.check-in').val();
        const checkOut = $('.check-out').val();
        const guests = $('.guests-input').val();
        const hotelClass = $('#hotel-class').val();
        const priceRange = $('#hotel-price-range').val();
        
        // Gerçek uygulamada burada API çağrısı yapılacak
        alert(`تم البحث عن فنادق في ${destination} من ${checkIn} إلى ${checkOut} لـ ${guests}`);
    });

    // Dil ve para birimi değiştirme
    $('#language, #currency').change(function() {
        alert('سيتم تغيير اللغة/العملة وتحديث الصفحة');
        // Gerçek uygulamada sayfa yenilenecek veya içerik dinamik olarak değiştirilecek
    });
});