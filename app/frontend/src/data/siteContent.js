
Action: file_editor create /app/frontend/src/data/siteContent.js --file-text "// =====================================================================
// SITE CONTENT — Edit easily here without touching component code.
// =====================================================================

// Ganti placeholder berikut dengan nomor WA admin yang aktif (format internasional, tanpa \"+\").
export const WHATSAPP_NUMBER = \"628xxxxxxxxxx\";
export const WHATSAPP_MESSAGE =
    \"Halo Admin, saya mau pesan Madu Vitagerd\";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
)}`;

export const BRAND = {
    name: \"NUTRIFLAKES\",
    product: \"Madu Vitagerd\",
    tagline: \"Solusi Herbal untuk Kenyamanan Lambung\",
};

// Gambar produk — silakan ganti dengan upload pribadi nanti.
export const PRODUCT_IMAGE =
    \"https://images.unsplash.com/photo-1587049352847-81a56d773c1c?q=80&w=1000&auto=format&fit=crop\";

export const HERO_IMAGE = PRODUCT_IMAGE;

export const PRICE = {
    normal: \"Rp xxx.xxx\",
    promo: \"Rp xxx.xxx\",
    discountText: \"Diskon hingga 35%\",
};

export const FAQ_ITEMS = [
    {
        q: \"Asam lambung kronis disebabkan karena apa?\",
        a: \"Asam lambung kronis umumnya muncul karena kombinasi pola makan yang kurang teratur, sering mengonsumsi makanan pemicu (pedas, gorengan, kopi berlebihan), stres berkepanjangan, kebiasaan makan terlalu malam, dan pelemahan otot sfingter di kerongkongan bagian bawah sehingga isi lambung mudah naik kembali.\",
    },
    {
        q: \"Apa saja yang dirasakan penderita asam lambung?\",
        a: \"Keluhan yang sering muncul antara lain sensasi panas di dada (heartburn), mual, perut begah, sering bersendawa, ada rasa mengganjal di tenggorokan, mudah kenyang, dan terkadang batuk kering terutama di malam hari.\",
    },
    {
        q: \"Apakah asam lambung yang dibiarkan bisa berbahaya?\",
        a: \"Jika dibiarkan dalam jangka panjang, keluhan asam lambung dapat mengganggu kualitas tidur, menurunkan produktivitas, serta berpotensi memicu iritasi pada kerongkongan. Disarankan untuk segera mengelola pola makan dan berkonsultasi ke tenaga kesehatan bila keluhan berat atau tidak membaik.\",
    },
    {
        q: \"Apakah asam lambung bisa dibantu dengan pola hidup dan herbal?\",
        a: \"Banyak orang merasa lebih nyaman setelah memperbaiki pola makan, menghindari pemicu, mengelola stres, dan menambahkan ramuan herbal yang membantu menjaga kenyamanan lambung. Hasil dapat berbeda pada setiap orang tergantung kondisi tubuh dan cara konsumsinya.\",
    },
];

export const SYMPTOMS = [
    \"Bau mulut\",
    \"Tenggorokan seperti ada yang mengganjal\",
    \"Mudah kenyang\",
    \"Sering bersendawa\",
    \"Suara serak\",
    \"Perut atau dada terasa sesak\",
    \"Sakit tenggorokan\",
    \"Sakit saat menelan\",
    \"Mual dan muntah\",
    \"Batuk kering terutama malam hari\",
    \"Dada terasa panas atau heartburn\",
    \"Perut kembung atau begah\",
];

export const CAUSES = [
    {
        title: \"Pola Makan\",
        desc: \"Konsumsi makanan pedas, gorengan, makanan tinggi lemak, atau porsi yang terlalu besar dapat memicu naiknya asam lambung.\",
        icon: \"Utensils\",
    },
    {
        title: \"Kebiasaan Harian\",
        desc: \"Makan terlalu malam, langsung berbaring setelah makan, merokok, serta konsumsi kopi atau alkohol secara berlebihan.\",
        icon: \"Moon\",
    },
    {
        title: \"Kondisi Tubuh\",
        desc: \"Kelebihan berat badan, tekanan pada perut, kehamilan, dan stres berkepanjangan turut menjadi faktor pemicu.\",
        icon: \"HeartPulse\",
    },
    {
        title: \"Faktor Obat Tertentu\",
        desc: \"Beberapa obat tertentu dapat memengaruhi produksi asam lambung. Konsultasikan dengan tenaga kesehatan bila ragu.\",
        icon: \"Pill\",
    },
];

export const RISKS = [
    { title: \"Tidur Terganggu\", icon: \"BedDouble\" },
    { title: \"Dada Terasa Panas\", icon: \"Flame\" },
    { title: \"Mual dan Begah\", icon: \"CircleAlert\" },
    { title: \"Tenggorokan Tidak Nyaman\", icon: \"Mic2\" },
    { title: \"Aktivitas Menurun\", icon: \"TrendingDown\" },
    { title: \"Mood Mudah Terganggu\", icon: \"CloudRain\" },
];

export const BENEFITS = [
    \"Membantu menjaga kenyamanan lambung\",
    \"Membantu meredakan rasa begah\",
    \"Membantu mengurangi mual\",
    \"Membantu meredakan dada panas\",
    \"Membantu menjaga pencernaan tetap nyaman\",
    \"Membantu mengurangi rasa tidak nyaman di ulu hati\",
    \"Membantu menjaga daya tahan tubuh\",
    \"Membantu tubuh terasa lebih nyaman saat aktivitas\",
];

export const USAGE_TIPS = [
    \"Konsumsi sesuai anjuran pada kemasan.\",
    \"Gunakan secara rutin untuk hasil yang lebih terasa.\",
    \"Imbangi dengan pola makan yang lebih teratur.\",
    \"Hindari makanan pemicu seperti pedas, gorengan, kopi berlebihan, dan makan terlalu malam.\",
    \"Jika sedang hamil, menyusui, punya penyakit tertentu, atau konsumsi obat dokter, konsultasikan terlebih dahulu.\",
];

export const TESTIMONIALS = [
    {
        name: \"Ibu S.\",
        location: \"Jakarta\",
        text: \"Sudah beberapa minggu rutin konsumsi, perut terasa lebih nyaman dan tidur saya jadi lebih nyenyak. Kemasannya praktis dibawa.\",
    },
    {
        name: \"Bapak A.\",
        location: \"Bandung\",
        text: \"Saya sering begah setelah makan malam. Setelah coba Madu Vitagerd, rasa tidak nyaman di ulu hati lebih cepat mereda.\",
    },
    {
        name: \"Ibu N.\",
        location: \"Surabaya\",
        text: \"Rasanya enak, tidak terlalu manis. Cocok untuk orang tua saya yang sering mengeluh perih di lambung.\",
    },
    {
        name: \"Bapak R.\",
        location: \"Yogyakarta\",
        text: \"Sudah konsumsi sebulan, dada panas berkurang dan saya jadi lebih percaya diri saat aktivitas seharian.\",
    },
];

export const AUTHENTICITY_TIPS = [
    \"Periksa kemasan produk secara teliti.\",
    \"Pastikan segel dalam kondisi baik dan tidak rusak.\",
    \"Beli hanya dari penjual resmi atau admin terverifikasi.\",
    \"Cek informasi BPOM bila tersedia pada kemasan.\",
    \"Jangan konsumsi jika kemasan terlihat rusak atau mencurigakan.\",
];
"
Observation: Create successful: /app/frontend/src/data/siteContent.js
