// Detail Pages Data and Rendering
// This file handles the destination cards for all detail pages

const propertyAddress = '京都府京都市中京区壬生高樋町43-8';

// Heritage Site Destinations
const heritageDestinations = {
    EN: [
        { name: 'Mibu-dera Temple', desc: 'Ancient Buddhist temple famous for its unique Kyogen performances', distance: '300 m', time: '4 min walk', destination: 'Mibu-dera Temple, Kyoto' },
        { name: 'Mibu Yagi Residence', desc: 'Former Shinsengumi headquarters with preserved samurai artifacts', distance: '350 m', time: '5 min walk', destination: 'Mibu Yagi Residence, Kyoto' },
        { name: 'Motogion-Nagijinja', desc: 'Historic shrine dedicated to the deity of healing and protection', distance: '450 m', time: '6 min walk', destination: 'Motogion Nagi Shrine, Kyoto' },
        { name: 'Nijo-jo Castle', desc: 'UNESCO World Heritage site with spectacular gardens and nightingale floors', distance: '1.5 km', time: '20 min walk', destination: 'Nijo Castle, Kyoto' },
        { name: 'Sanjusangendo', desc: 'Temple hall housing 1,001 golden statues of Kannon in serene gardens', distance: '1.8 km', time: '37 min by bus', destination: 'Sanjusangendo Temple, Kyoto' },
        { name: 'Kiyomizu Dera', desc: 'UNESCO World Heritage temple with stunning mountain views and sacred waterfall', distance: '2.3 km', time: '40 min by bus', destination: 'Kiyomizu-dera Temple, Kyoto' }
    ],
    JP: [
        { name: 'Mibu-dera Temple', desc: '独特な狂言で有名な古代仏教寺院', distance: '300 m', time: '徒歩4分', destination: '壬生寺, 京都' },
        { name: 'Mibu Yagi Residence', desc: '新選組の旧屯所で武士の遺物が保存されている', distance: '350 m', time: '徒歩5分', destination: '壬生八木邸, 京都' },
        { name: 'Motogion-Nagijinja', desc: '癒しと守護の神を祀る歴史的な神社', distance: '450 m', time: '徒歩6分', destination: '元祇園梛神社, 京都' },
        { name: 'Nijo-jo Castle', desc: 'ユネスコ世界遺産で壮大な庭園とうぐいす張りの廊下がある', distance: '1.5 km', time: '徒歩20分', destination: '二条城, 京都' },
        { name: 'Sanjusangendo', desc: '1,001体の黄金の観音像が並ぶ静かな庭園のある本堂', distance: '1.8 km', time: 'バスで37分', destination: '三十三間堂, 京都' },
        { name: 'Kiyomizu Dera', desc: 'ユネスコ世界遺産の寺院で見事な山景色と霊験あらたかな滝', distance: '2.3 km', time: 'バスで40分', destination: '清水寺, 京都' }
    ],
    '中文': [
        { name: 'Mibu-dera Temple', desc: '以独特狂言表演闻名的古老佛教寺庙', distance: '300米', time: '步行4分钟', destination: '壬生寺, 京都' },
        { name: 'Mibu Yagi Residence', desc: '新选组旧总部，保存着武士文物', distance: '350米', time: '步行5分钟', destination: '壬生八木邸, 京都' },
        { name: 'Motogion-Nagijinja', desc: '供奉治愈和守护之神的历史神社', distance: '450米', time: '步行6分钟', destination: '元祇园梛神社, 京都' },
        { name: 'Nijo-jo Castle', desc: '联合国教科文组织世界遗产，拥有壮丽园林和夜莺地板', distance: '1.5公里', time: '步行20分钟', destination: '二条城, 京都' },
        { name: 'Sanjusangendo', desc: '寺庙大殿内供奉1001尊金色观音像，环境宁静', distance: '1.8公里', time: '乘公交37分钟', destination: '三十三间堂, 京都' },
        { name: 'Kiyomizu Dera', desc: '联合国教科文组织世界遗产寺庙，拥有壮丽山景和神圣瀑布', distance: '2.3公里', time: '乘公交40分钟', destination: '清水寺, 京都' }
    ]
};

// Natural Landscape Destinations
const natureDestinations = {
    EN: [
        { name: 'Kamogawa River', desc: 'Scenic river with walking paths and seasonal cherry blossoms', distance: '2 km', time: '25 min walk', destination: 'Kamogawa River, Kyoto' },
        { name: 'Shosei En', desc: 'Traditional Japanese garden with ponds, bridges and tea houses', distance: '2.2 km', time: '12 min by train', destination: 'Shosei-en Garden, Kyoto' },
        { name: 'Maruyama Park', desc: 'Famous for weeping cherry trees and peaceful garden settings', distance: '2.5 km', time: '25 min by bus', destination: 'Maruyama Park, Kyoto' },
        { name: 'Kyoto Gyoen', desc: 'Expansive imperial park with historic gardens and seasonal flowers', distance: '3 km', time: '25 min by bus', destination: 'Kyoto Gyoen National Garden, Kyoto' },
        { name: 'Philosopher\'s Path', desc: 'Cherry blossom-lined canal path perfect for contemplative walks', distance: '4.8 km', time: '40 min by bus', destination: 'Philosopher\'s Path, Kyoto' },
        { name: 'Arashiyama Bamboo Grove', desc: 'Walk through towering bamboo stalks creating a magical atmosphere', distance: '8 km', time: '30 min by train', destination: 'Arashiyama Bamboo Grove, Kyoto' }
    ],
    JP: [
        { name: 'Kamogawa River', desc: '散策路と季節の桜が美しい風光明媚な川', distance: '2 km', time: '徒歩25分', destination: '鴨川, 京都' },
        { name: 'Shosei En', desc: '池、橋、茶室のある伝統的な日本庭園', distance: '2.2 km', time: '電車で12分', destination: '渉成園, 京都' },
        { name: 'Maruyama Park', desc: '枝垂れ桜と静かな庭園で有名', distance: '2.5 km', time: 'バスで25分', destination: '山公園, 京都' },
        { name: 'Kyoto Gyoen', desc: '歴史的な庭園と季節の花々が楽しめる広大な皇室公園', distance: '3 km', time: 'バスで25分', destination: '京都御苑, 京都' },
        { name: 'Philosopher\'s Path', desc: '桜並木の運河沿いの瞑想的な散歩道', distance: '4.8 km', time: 'バスで40分', destination: '哲学の道, 京都' },
        { name: 'Arashiyama Bamboo Grove', desc: '幻想的な雰囲気を作り出す高い竹林を歩く', distance: '8 km', time: '電車で30分', destination: '嵐山竹林の小径, 京都' }
    ],
    '中文': [
        { name: 'Kamogawa River', desc: '拥有步行道和季节性樱花的风景河流', distance: '2公里', time: '步行25分钟', destination: '鸭川, 京都' },
        { name: 'Shosei En', desc: '拥有池塘、桥梁和茶室的传统日本庭园', distance: '2.2公里', time: '电车12分钟', destination: '涉成园, 京都' },
        { name: 'Maruyama Park', desc: '以垂樱和宁静的花园环境而闻名', distance: '2.5公里', time: '公交25分钟', destination: '円山公园, 京都' },
        { name: 'Kyoto Gyoen', desc: '拥有历史园林和季节性花卉的广阔皇家公园', distance: '3公里', time: '公交25分钟', destination: '京都御苑, 京都' },
        { name: 'Philosopher\'s Path', desc: '樱花环绕的运河小径，适合沉思漫步', distance: '4.8公里', time: '公交40分钟', destination: '哲学之道, 京都' },
        { name: 'Arashiyama Bamboo Grove', desc: '漫步于高耸竹林中，营造魔幻氛围', distance: '8公里', time: '电车30分钟', destination: '岚山竹林, 京都' }
    ]
};

// Urban Exploration Destinations
const urbanDestinations = {
    EN: [
        { name: 'Teramachi & Shinkyogoku', desc: 'Covered shopping arcades with traditional crafts and modern boutiques', distance: '2 km', time: '20 min by bus', destination: 'Teramachi Shopping Street, Kyoto' },
        { name: 'Kawaramachi', desc: 'Kyoto\'s premier shopping district with department stores and restaurants', distance: '2.3 km', time: '20 min by bus', destination: 'Kawaramachi, Kyoto' },
        { name: 'Nishiki Market', desc: 'Kyoto\'s kitchen: 400-year-old market street with local delicacies', distance: '2.1 km', time: '19 min by bus', destination: 'Nishiki Market, Kyoto' },
        { name: 'Gion', desc: 'Historic geisha district with traditional teahouses and architecture', distance: '3.3 km', time: '25 min by bus', destination: 'Gion, Kyoto' },
        { name: 'Pontocho Alley', desc: 'Narrow atmospheric alley lined with traditional restaurants and bars', distance: '3.3 km', time: '25 min by bus', destination: 'Pontocho, Kyoto' }
    ],
    JP: [
        { name: 'Teramachi & Shinkyogoku', desc: '伝統工芸品と現代的なブティックが並ぶアーケード街', distance: '2 km', time: 'バスで20分', destination: '寺町通り, 京都' },
        { name: 'Kawaramachi', desc: 'デパートとレストランが集まる京都のプレミアショッピング地区', distance: '2.3 km', time: 'バスで20分', destination: '河原町, 京都' },
        { name: 'Nishiki Market', desc: '京都の台所：地元の珍味が並ぶ400年の歴史を持つ市場', distance: '2.1 km', time: 'バスで19分', destination: '錦市場, 京都' },
        { name: 'Gion', desc: '伝統的な茶屋と建築が残る歴史的な芸者地区', distance: '3.3 km', time: 'バスで25分', destination: '祇園, 京都' },
        { name: 'Pontocho Alley', desc: '伝統的な料理店とバーが並ぶ狭い路地', distance: '3.3 km', time: 'バスで25分', destination: '先斗町, 京都' }
    ],
    '中文': [
        { name: 'Teramachi & Shinkyogoku', desc: '拥有传统工艺品和现代精品店的有盖购物街', distance: '2公里', time: '巴士20分钟', destination: '寺町通, 京都' },
        { name: 'Kawaramachi', desc: '京都主要购物区，拥有百货商店和餐厅', distance: '2.3公里', time: '巴士20分钟', destination: '河原町, 京都' },
        { name: 'Nishiki Market', desc: '京都的厨房有400年历史的市场街，出售当地美食', distance: '2.1公里', time: '巴士19分钟', destination: '锦市场, 京都' },
        { name: 'Gion', desc: '历史悠久的艺伎区，拥有传统茶室和建筑', distance: '3.3公里', time: '巴士25分钟', destination: '祇园, 京都' },
        { name: 'Pontocho Alley', desc: '狭窄的氛围小巷，两旁是传统餐厅和酒吧', distance: '3.3公里', time: '巴士25分钟', destination: '先斗町, 京都' }
    ]
};

// Cafe & Restaurant Destinations
const cafeDestinations = {
    EN: [
        { name: 'Sukiya Restaurant', desc: 'Affordable Japanese dining chain with rice bowls and set meals', distance: '250 m', time: '3 min walk', destination: 'Sukiya, Kyoto' },
        { name: 'Hama Sushi', desc: 'Popular conveyor belt sushi restaurant with fresh selections', distance: '650 m', time: '9 min walk', destination: 'Hama Sushi, Kyoto' },
        { name: 'Convenience Stores', desc: 'Multiple 24/7 convenience stores (Lawson, FamilyMart, 7-Eleven) nearby', distance: '200-500 m', time: '3-7 min walk', destination: 'Convenience Stores, Kyoto' }
    ],
    JP: [
        { name: 'すき家', desc: '手頃な価格の日本食チェーン、丼ものと定食', distance: '250 m', time: '徒歩3分', destination: 'すき家, 京都' },
        { name: 'はま寿司', desc: '新鮮なネタが楽しめる人気の回転寿司', distance: '650 m', time: '徒歩9分', destination: 'はま寿司, 京都' },
        { name: 'コンビニエンスストア', desc: '複数の24時間営業コンビニ（ローソン、ファミリーマート、セブンイレブン）が近くに', distance: '200-500 m', time: '徒歩3-7分', destination: 'コンビニ, 京都' }
    ],
    '中文': [
        { name: 'Sukiya Restaurant', desc: '实惠的日本连锁餐厅，提供盖饭和套餐', distance: '250米', time: '步行3分钟', destination: 'Sukiya, 京都' },
        { name: 'Hama Sushi', desc: '受欢迎的回转寿司店，提供新鲜选择', distance: '650米', time: '步行9分钟', destination: 'Hama Sushi, 京都' },
        { name: 'Convenience Stores', desc: '附近有多家24小时便利店（罗森、全家、7-11）', distance: '200-500米', time: '步行3-7分钟', destination: '便利店, 京都' }
    ]
};

// Supermarket Destinations
const supermarketDestinations = {
    EN: [
        { name: 'Fresco Mibu', desc: 'Full-service supermarket with fresh produce, meat, and daily essentials', distance: '350 m', time: '5 min walk', destination: 'Fresco Mibu, Kyoto' },
        { name: 'Life Nijo Station', desc: 'Large supermarket chain with wide selection and competitive prices', distance: '800 m', time: '11 min walk', destination: 'Life Nijo Station, Kyoto' },
        { name: 'Drugstores', desc: 'Multiple drugstores (Matsumoto Kiyoshi, Sundrug) for toiletries and medicine', distance: '300-600 m', time: '4-8 min walk', destination: 'Drugstores, Kyoto' }
    ],
    JP: [
        { name: 'フレスコ壬生店', desc: '新鮮な生鮮食品と日用品が揃うフルサービススーパー', distance: '350 m', time: '徒歩5分', destination: 'フレスコ壬生店, 京都' },
        { name: 'ライフ二条駅前店', desc: '幅広い品揃えと競争力のある価格の大型スーパーチェーン', distance: '800 m', time: '徒歩11分', destination: 'ライフ二条駅前店, 京都' },
        { name: 'ドラッグストア', desc: '複数のドラッグストア（マツモトキヨシ、サンドラッグ）でトイレタリーと医薬品', distance: '300-600 m', time: '徒歩4-8分', destination: 'ドラッグストア, 京都' }
    ],
    '中文': [
        { name: 'Fresco Mibu', desc: '提供新鲜农产品、肉类和日常必需品的全服务超市', distance: '350米', time: '步行5分钟', destination: 'Fresco Mibu, 京都' },
        { name: 'Life Nijo Station', desc: '大型连锁超市，品种丰富，价格实惠', distance: '800米', time: '步行11分钟', destination: 'Life Nijo Station, 京都' },
        { name: 'Drugstores', desc: '多家药妆店（松本清、Sundrug）提供洗漱用品和药品', distance: '300-600米', time: '步行4-8分钟', destination: 'Drugstores, 京都' }
    ]
};

// Transportation Destinations
const transportDestinations = {
    EN: [
        { name: 'Mibu Station (Hankyu)', desc: 'Nearest train station with connections to central Kyoto and Osaka', distance: '650 m', time: '9 min walk', destination: 'Mibu Station, Kyoto' },
        { name: 'Omiya Station (Hankyu)', desc: 'Major transfer station connecting to Kawaramachi and Arashiyama lines', distance: '1 km', time: '14 min walk', destination: 'Omiya Station, Kyoto' },
        { name: 'Nijo Station (JR)', desc: 'JR station with direct access to Kyoto Station and beyond', distance: '1.2 km', time: '16 min walk', destination: 'Nijo Station, Kyoto' },
        { name: 'Bus Stops', desc: 'Multiple city bus stops within walking distance serving major routes', distance: '200-400 m', time: '3-6 min walk', destination: 'Bus Stops, Kyoto' }
    ],
    JP: [
        { name: '壬生駅（阪急）', desc: '京都中心部と大阪への接続がある最寄りの駅', distance: '650 m', time: '徒歩9分', destination: '壬生駅, 京都' },
        { name: '大宮駅（阪急）', desc: '河原町線と嵐山線に接続する主要乗換駅', distance: '1 km', time: '徒歩14分', destination: '大宮駅, 京都' },
        { name: '二条駅（JR）', desc: '京都駅へ直接アクセスできるJR駅', distance: '1.2 km', time: '徒歩16分', destination: '二条駅, 京都' },
        { name: 'バス停', desc: '主要路線を運行する複数の市バス停留所が徒歩圏内', distance: '200-400 m', time: '徒歩3-6分', destination: 'バス停, 京都' }
    ],
    '中文': [
        { name: 'Mibu Station (Hankyu)', desc: '最近的火车站，可连接京都市中心和大阪', distance: '650米', time: '步行9分钟', destination: 'Mibu Station, 京都' },
        { name: 'Omiya Station (Hankyu)', desc: '主要换乘站，连接河原町线和岚山线', distance: '1公里', time: '步行14分钟', destination: 'Omiya Station, 京都' },
        { name: 'Nijo Station (JR)', desc: 'JR车站，可直达京都站及更远地区', distance: '1.2公里', time: '步行16分钟', destination: 'Nijo Station, 京都' },
        { name: 'Bus Stops', desc: '步行范围内有多个市营巴士站，服务主要路线', distance: '200-400米', time: '步行3-6分钟', destination: 'Bus Stops, 京都' }
    ]
};

// Utility function to generate Google Maps URL
function generateGoogleMapsUrl(destination) {
    const origin = encodeURIComponent(propertyAddress);
    const dest = encodeURIComponent(destination);
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=walking`;
}

// Get map link text based on language
function getMapLinkText(lang) {
    const texts = {
        EN: 'View on Google Maps',
        JP: 'Googleマップで見る',
        '中文': '在Google地图中查看'
    };
    return texts[lang] || texts.EN;
}

// Render destination cards
function renderDestinations(containerId, destinationsData, currentLang) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const destinations = destinationsData[currentLang] || destinationsData.EN;
    
    container.innerHTML = destinations.map(dest => `
        <div class="destination-card">
            <h3>${dest.name}</h3>
            <p>${dest.desc}</p>
            <div class="destination-info">
                <div class="info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>${dest.distance}</span>
                </div>
                <div class="info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>${dest.time}</span>
                </div>
            </div>
            <a href="${generateGoogleMapsUrl(dest.destination)}" target="_blank" rel="noopener noreferrer" class="btn-maps">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${getMapLinkText(currentLang)}</span>
            </a>
        </div>
    `).join('');
}

// Initialize detail page
function initDetailPage() {
    const currentLang = localStorage.getItem('preferredLanguage') || 'EN';
    const path = window.location.pathname;
    
    // Determine which page we're on and render appropriate destinations
    if (path.includes('heritage-site.html')) {
        renderDestinations('heritage-destinations', heritageDestinations, currentLang);
        updateHeroText('area.heritage');
    } else if (path.includes('natural-landscape.html')) {
        renderDestinations('nature-destinations', natureDestinations, currentLang);
        updateHeroText('area.nature');
    } else if (path.includes('urban-exploration.html')) {
        renderDestinations('urban-destinations', urbanDestinations, currentLang);
        updateHeroText('area.urban');
    } else if (path.includes('cafe-restaurant.html')) {
        renderDestinations('cafe-destinations', cafeDestinations, currentLang);
        updateHeroText('area.cafe');
    } else if (path.includes('supermarket.html')) {
        renderDestinations('supermarket-destinations', supermarketDestinations, currentLang);
        updateHeroText('area.supermarket');
    } else if (path.includes('transportation.html')) {
        renderDestinations('transport-destinations', transportDestinations, currentLang);
        updateHeroText('area.transport');
    }
}

// Update hero text for detail pages
function updateHeroText(areaKey) {
    const titleEl = document.querySelector('[data-i18n-heritage="title"]');
    const descEl = document.querySelector('[data-i18n-heritage="desc"]');
    
    if (titleEl && descEl) {
        const currentLang = localStorage.getItem('preferredLanguage') || 'EN';
        const keys = areaKey.split('.');
        let content = translations[currentLang];
        
        for (const key of keys) {
            content = content[key];
        }
        
        if (content) {
            titleEl.textContent = content.title;
            descEl.textContent = content.desc;
        }
    }
}

// Re-render when language changes
window.addEventListener('languageChanged', (e) => {
    initDetailPage();
});

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDetailPage);
} else {
    initDetailPage();
}