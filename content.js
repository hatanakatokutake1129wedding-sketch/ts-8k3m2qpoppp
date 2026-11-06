/* =====================================================
   サイトの中身はすべてこのファイルで編集します。
   index.html をダブルクリックで開けば、その場で確認できます。
   ★ = 差し替え・追記が必要な箇所
   画像は assets/ フォルダに置き、ファイル名だけ書き換えてください。
   画像が無い間は「PHOTO」の仮枠が表示されます。
   ===================================================== */
window.CONTENT = {
  site: {
    title: "Tasuku & Chisato wedding party",
    expires: "2026-12-31",                    // この日(日本時間)の終わりまで表示。過ぎると「公開は終了しました」だけ表示
    date: "2026.11.29",
    venue: "JW Marriott Hotel Tokyo",
    heroImage: "assets/hero.jpg",
    lastImage: "assets/last.jpg",             // ページ最後の写真(お礼の文の上)
    thanks: "今日はお越しいただき、ありがとうございます。",
    /* 表紙の下を流れる写真帯 */
    ribbon: [
      "assets/z3.jpg", "assets/r22_flower.jpg", "assets/m_jump.jpg", "assets/r23_disney.jpg",
      "assets/z15.jpg", "assets/r24_beach.jpg", "assets/s15.jpg", "assets/r22_disney.jpg",
      "assets/pr_studio2.jpg", "assets/y24.jpg", "assets/t_lantern.jpg", "assets/z1.jpg"
    ]
  },

  /* ---------- Profile(紹介 → 手書きメッセージ の順で新郎・新婦) ---------- */
  profiles: [
    {
      role: "Groom",
      roleJp: "新郎",
      name: "畠中 翼",
      nameEn: "Tasuku Hatanaka",
      photo: "assets/groom2.jpg",
      photo2: { src: "assets/groom.jpg", cap: "前撮りにて。袴、着慣れません", ratio: "2 / 3", pos: "50% 40%" },
      kids: [
        { src: "assets/k_t_baby.jpg", ratio: "3 / 2", cap: "赤ちゃんのころ" },
        { src: "assets/k_t_753.jpg", ratio: "3 / 4", cap: "七五三" },
        { src: "assets/k_t_play.jpg", ratio: "3 / 2", cap: "遊び場で" },
        { src: "assets/k_t_pond.jpg", ratio: "3 / 2", cap: "お出かけ中" }
      ],
      chips: ["🦦 ラッコ", "🍣 お寿司", "🍶 日本酒(梵)", "🎺 トランペット", "💪 筋トレ", "📺 VIVANT"],
      rows: [
        ["誕生日", "1999年11月25日"],
        ["出身地", "埼玉県富士見市"],
        ["血液型", "B型"],
        ["MBTI", "まだ調べていません"],         // ★ 診断したら差し替え
        ["お仕事", "IT営業(トレンドマイクロ)"],
        ["家族", "父・母・妹の4人家族"],
        ["学生時代", "吹奏楽部・ジャズサークルでトランペット"],
        ["趣味", "筋トレ・カメラ"],
        ["好きなもの", "ラッコ・お寿司・日本酒"],
      ],
      history: [
        ["幼少期", "体を動かすのが苦手で、レゴブロックが大好きな子。土日は親友たちと公園で遊んでいました。"],
        ["小中学生", "プール・書道・剣道に通い、地元のボランティア団体「おむすび少年団」でも遊んでもらっていました。"],
        ["中学", "塾に通いながら生徒会長を務めました。剣道は外部の中学校で続けました。"],
        ["高校", "吹奏楽部でトランペット。初心者ばかりで全国大会に出るほどハードな毎日でした。"],
        ["大学", "慶應大学でラッコの考古学を専攻。単位を落として1年留年、5年間通いました。ビッグバンドジャズサークルでもトランペットを吹いていました。"]
      ],
      message: {
        label: "たすくからの手書きメッセージ",
        image: "assets/message-groom.png",
        text: "本日は、私たちのためにお集まりありがとうございます！\nいっぱいお喋りして、笑って楽しい日にできたらと思います！\nこれからも夫婦共々仲良くしてください！\nたすく" // 画像が読み込めない時に表示
      }
    },
    {
      role: "Bride",
      roleJp: "新婦",
      name: "德嵩 千里",
      nameEn: "Chisato Tokutake",
      photo: "assets/bride2.jpg",
      photo2: { src: "assets/bride.jpg", cap: "白無垢と金の扇子", ratio: "3 / 2", pos: "55% 35%" },
      kids: [
        { src: "assets/k_c_smile.jpg", ratio: "45 / 32", cap: "にこにこ" },
        { src: "assets/k_c_toy.jpg", ratio: "5 / 7", cap: "おもちゃと" },
        { src: "assets/k_c_fest.jpg", ratio: "3 / 2", cap: "お祭りで" },
        { src: "assets/k_c_school.jpg", ratio: "3 / 2", cap: "制服で" }
      ],
      chips: ["🍜 お蕎麦", "🍡 あんこ", "📷 カメラ", "🎷 クラリネット", "☕ コメダ珈琲", "🎬 キングダム"],
      rows: [
        ["誕生日", "1999年8月16日"],
        ["出身地", "埼玉県富士見市"],
        ["血液型", "O型"],
        ["MBTI", "まだ調べていません"],         // ★
        ["お仕事", "金融営業(飯能信用金庫)"],
        ["家族", "父・母・妹の4人家族"],
        ["学生時代", "吹奏楽部でクラリネット"],
        ["趣味", "カメラ"],
        ["好きなもの", "お蕎麦・あんこ・コメダ珈琲"],
      ],
      history: [
        ["幼少期", "好奇心いっぱいで、カメラを向けるとにこにこ笑う子。妹とごっこ遊びをして過ごしました。"],
        ["中学", "たすくと同じ中学。吹奏楽部でクラリネットを吹いていました。"],
        ["高校", "坂戸西高校に進学。引き続き吹奏楽部でクラリネット。"],
        ["大学", "西武文理大学でサービス経営を学びました。高3の冬から大学卒業まで、コメダ珈琲でアルバイト。"]
      ],
      message: {
        label: "千里からの手書きメッセージ",
        image: "assets/message-bride.png",
        text: "大切な人たちに囲まれたこの日を楽しみにしていました。\n2人で精いっぱい込めた感謝の気持ちを受け取って、楽しんでください♪\n千里" // 画像が読み込めない時に表示
      }
    }
  ],

  /* ---------- Numbers(数字で見るふたり) ---------- */
  numbers: [
    { big: "4年8ヶ月", small: "交際期間", note: "2022年3月14日にスタート" },
    { big: "3/14", small: "告白の日 = 入籍の日", note: "2022年に告白、2026年に入籍" },
    { big: "2人とも", small: "吹奏楽部", note: "トランペット × クラリネット" },
    { big: "同郷", small: "埼玉県富士見市", note: "同じ中学の幼なじみ" },
    { big: "80kg", small: "たすくのベンチプレス", note: "ジムでコツコツ鍛えています" },
    { big: "約4年", small: "千里のコメダ珈琲バイト", note: "高3の冬から大学卒業まで" }
  ],

  /* ---------- Story(ふたりの物語。年表+写真) ---------- */
  story: {
    lead: "昔の短い恋も、その後の時間も、全部がふたりの物語です。",
    items: [
      { when: "小学生〜中学時代", title: "クラスも部活も別の幼なじみ",
        body: "同じ中学で、クラスも部活も別々。でも、お互いに信頼している幼なじみでした。",
        photos: [{ src: "assets/k_both.jpg", cap: "ふたりとも小学生のとき", ratio: "45 / 36" }] },
      { when: "高校1年の夏", title: "ほんの短い、最初の恋",
        body: "1ヶ月に満たない短い間だけ、おつきあいをしました。それも今では、ふたりの大切な想い出です。",
        emoji: "🌻" },
      { when: "2022年1月", title: "一通のLINEから、再会",
        body: "たすくが運営に関わっていた「おむすび少年団」の活動が、市の広報誌に載りました。それを見た千里からLINEが届いて、またやり取りが始まりました。ランチ、ドライブ、長瀞でお蕎麦。3回目のデートで、昔とは違う深いつながりを感じるようになりました。",
        photos: [{ src: "assets/r22_flower.jpg", cap: "菜の花畑で", ratio: "4 / 3" }, { src: "assets/r22_tulip.jpg", cap: "チューリップ畑で", ratio: "4 / 3" }] },
      { when: "2022年3月14日", title: "もんじゃ屋さんで告白",
        body: "お台場〜月島のもんじゃデートで告白して、正式に交際スタート。コロナ禍がぎりぎり落ち着く最後のタイミングでした。",
        photos: [{ src: "assets/r22_disney.jpg", cap: "ディズニーでおそろい", ratio: "3 / 2" }, { src: "assets/r22_selfie.jpg", cap: "交際1年目", ratio: "3 / 2" }] },
      { when: "2023年", title: "博多&大分へ、初めての旅行",
        body: "2年目に初めての旅行へ。IKEAデートも印象的でした。何も買わないのに一周するのにすごく時間がかかった、あのIKEAです。",
        photos: [{ src: "assets/r23_beppu.jpg", cap: "別府駅", ratio: "3 / 4" }, { src: "assets/r23_onsen.jpg", cap: "別府の温泉", ratio: "3 / 4" }, { src: "assets/r23_house.jpg", cap: "海辺の席で", ratio: "1 / 1" }] },
      { when: "2023年11月〜", title: "ふたり暮らしのはじまり",
        body: "久米川駅の1DKで同棲スタート。クリスマスやお正月など季節のイベントを、一緒に過ごしました。2025年9月からは国分寺へ。",
        photos: [{ src: "assets/r24_beach.jpg", cap: "海へ", ratio: "4 / 3" }, { src: "assets/r24_aqua.jpg", cap: "水族館", ratio: "4 / 3" }] },
      { when: "2025年8月16日", title: "千里の26歳の誕生日に、プロポーズ",
        body: "ホテルにチェックインして、ディナーへ。食事の間にスタッフの方が部屋にお花と指輪を用意してくれていました。戻ってから「ずっと一緒にいてください」と伝えると、千里が珍しく涙を見せてくれました。",
        photos: [{ src: "assets/pr_roses.jpg", cap: "真っ赤なバラ", ratio: "3 / 2" }, { src: "assets/pr_ring.jpg", cap: "指輪", ratio: "4 / 3" }, { src: "assets/pr_close.jpg", cap: "バラの花束と", ratio: "2 / 3", pos: "50% 40%" }, { src: "assets/pr_dinner.jpg", cap: "お祝いのディナー", ratio: "3 / 4" }] },
      { when: "2025年8月17日", title: "翌日は、セルフ写真館へ",
        body: "プロポーズの翌日、ふたりで写真を撮りに行きました。たくさん笑って撮りました。",
        photos: [{ src: "assets/p_roses.jpg", cap: "婚約の記念に", ratio: "2 / 3" }, { src: "assets/pr_studio1.jpg", cap: "バラを持って", ratio: "2 / 3" }, { src: "assets/pr_studio2.jpg", cap: "ノリノリ", ratio: "2 / 3" }] },
      { when: "2026年3月14日", title: "入籍",
        body: "告白と同じ3月14日に、ふたりは夫婦になりました。入籍の日のディナーは、式場に選んだJWマリオット東京で。",
        photos: [{ src: "assets/p_nyuseki.jpg", cap: "婚姻届を持って", ratio: "4 / 3" }, { src: "assets/p_rings.jpg", cap: "黄色いお花と指輪", ratio: "4 / 3" }] },
      { when: "2026年", title: "前撮り、そして宮古島",
        body: "和装の前撮りを撮影。夏には宮古島で、星空の撮影と、サンセットSUPも楽しみました。",
        photos: [{ src: "assets/z3.jpg", cap: "和装前撮り", ratio: "3 / 2" }, { src: "assets/s15.jpg", cap: "宮古島の星空と", ratio: "2 / 3" }, { src: "assets/y24.jpg", cap: "宮古島のビーチ", ratio: "16 / 9" }] },
      { when: "2026年11月29日", title: "そして、今日",
        body: "たくさんの大切な人に囲まれて、この日を迎えられました。ありがとうございます。",
        photos: [{ src: "assets/last.jpg", cap: "今日の主役です", ratio: "3 / 2" }], today: true }
    ]
  },

  /* ---------- Favorites(好きなものカード) ---------- */
  favorites: [
    { tag: "ANIMAL", by: "たすく", title: "ラッコ",
      photos: [{ src: "assets/f-lantern.jpg", ratio: "4 / 5", pos: "50% 30%", cap: "台湾のランタンにも「ラッコ再生」の文字" }],
      body: "大学ではラッコの考古学を専攻していました。\nラッコの話ならいくらでもできます。" },
    { tag: "FOOD", by: "千里", title: "お蕎麦とあんこ",
      photos: [{ src: "assets/f-soba.jpg", cap: "日光の三たてそば" }],
      body: "長瀞や日光など、デートではいつの間にかお蕎麦屋さんに向かっています。\nおすすめのお蕎麦屋さんがあれば、ぜひ教えてください。" },
    { tag: "SAKE", by: "たすく", title: "日本酒(梵)",
      photos: [{ src: "assets/pr_sake.jpg", ratio: "3 / 2", cap: "好きな蔵は「梵」" }],
      body: "お寿司と日本酒が大好きです。\n好きな蔵は梵。おすすめのお酒があれば教えてください。" },
    { tag: "HOBBY", by: "ふたり", title: "カメラ",
      photos: [{ src: "assets/f-camera1.jpg", pos: "60% 50%" }, { src: "assets/f-camera2.jpg", pos: "60% 50%" }],
      body: "二人でカメラを買いました。\nこれから行く先々で、たくさん思い出を残したいです。" },
    { tag: "HOBBY", by: "たすく", title: "筋トレ",
      body: "最近ベンチプレスが80kgまで上がりました。\nゴルフにも誘われていて、ちょっと気になっています。" },
    { tag: "CAFE", by: "千里", title: "コメダ珈琲",
      body: "高3の冬から大学卒業まで、4年ちょっとバイトをしていました。\n休日はコメダでモーニングするのが定番です。" },
    { tag: "MUSIC", by: "ふたり", title: "吹奏楽",
      body: "たすくはトランペット、千里はクラリネット。\nふたりとも吹奏楽部でした。" },
    { tag: "DRAMA & MOVIE", by: "ふたり", title: "VIVANTとキングダム",
      photos: [{ src: "assets/f-vivant.jpg", cap: "VIVANT", ratio: "16 / 9", pos: "50% 60%" }, { src: "assets/f-kingdom1.jpg", cap: "キングダム", pos: "50% 60%" }, { src: "assets/f-kingdom2.jpg", cap: "映画も観ました", pos: "50% 75%" }],
      body: "たすくはドラマのVIVANT、千里はキングダムが大好きです。千里はアニメも映画も漫画も追いかけています。\n好きな方がいたら、ぜひ一緒に語りましょう。" },
    { tag: "GIFT", by: "たすく", title: "名刺入れ",
      body: "つきあって初めての誕生日に、千里がプレゼントしてくれた名刺入れ。\n今でも、仕事のたびに使っています。" }
  ],

  /* ---------- Memorial Map(思い出の場所) ---------- */
  places: [
    { pin: "沖縄", name: "宮古島", sub: "ふたりのナンバーワン旅行地",
      photos: [{ src: "assets/f-miyako.jpg", ratio: "4 / 3", pos: "50% 60%" }, { src: "assets/y19.jpg", ratio: "1 / 1" }],
      body: "海がきれいすぎて、4日間ずっと海で遊んでいました。のんびりした時間が流れる、吸い込まれそうな海。また絶対に行きたいです。" },
    { pin: "台湾", name: "台湾", sub: "千里の初めての海外旅行",
      photos: [{ src: "assets/f-taiwan.jpg", ratio: "3 / 2" }, { src: "assets/t_shifen.jpg", ratio: "2 / 3", pos: "50% 40%" }, { src: "assets/t_tea.jpg", ratio: "2 / 3" }],
      body: "美味しいごはんを食べて、バーでカラオケもしました。ランタンにもラッコ。千里にとって記念すべき海外旅行です。" },
    { pin: "東京", name: "IKEA", sub: "マンゴー事件の現場",
      photos: [{ src: "assets/r23_ikea.jpg", ratio: "3 / 2" }, { src: "assets/r23_ikea2.jpg", ratio: "3 / 4" }],
      body: "初めて行った日は、何も買わないのに一周するのにすごく時間がかかりました。千里が「マンゴーそんなに好きじゃないんだよね」と言いながら、たすくのマンゴーデザートを大きく一口食べたことを、たすくは今も優しく根に持っています。" },
    { pin: "福島", name: "たなべ", sub: "福島のお寿司屋さん",
      emoji: "🍣",
      body: "たすくが友人との旅行で訪れて、好きになったお店。たすくは3回、千里は2回食べに行きました。ふたりの思い出が詰まった大切な場所です。" },
    { pin: "東京", name: "JWマリオット東京 saki", sub: "入籍の日のディナー",
      photos: [{ src: "assets/p_saki.jpg", ratio: "4 / 3", cap: "2026年3月14日、入籍の日のディナー" }],
      body: "入籍の日に、式場として選んだこのホテルの29階のレストランでお祝いしました。今日は、ここがふたりの特別な場所です。" }
  ],

  /* ---------- Photo Album(最後のアルバム) ---------- */
  album: {
    lead: "ふたりのお気に入りの写真を、最後に並べました。",
    photos: [
      { src: "assets/z6.jpg", ratio: "3 / 2", cap: "和装前撮り" },
      { src: "assets/z20.jpg", ratio: "2 / 3" },
      { src: "assets/z7.jpg", ratio: "16 / 9", cap: "結婚しました" },
      { src: "assets/s0.jpg", ratio: "2 / 3", cap: "宮古島の星空" },
      { src: "assets/z15.jpg", ratio: "3 / 2" },
      { src: "assets/y33.jpg", ratio: "9 / 16", cap: "宮古島の夕日" },
      { src: "assets/m_jump.jpg", ratio: "16 / 9", cap: "ジャンプ!" },
      { src: "assets/z14.jpg", ratio: "3 / 2" },
      { src: "assets/s1.jpg", ratio: "2 / 3" },
      { src: "assets/m_sunset.jpg", ratio: "2 / 3", cap: "夕日と、手" },
      { src: "assets/z21.jpg", ratio: "2 / 3", cap: "前撮りにて" },
      { src: "assets/y21.jpg", ratio: "16 / 9", cap: "持ち上げてみた" }
    ]
  },

  /* ---------- Playlist ---------- */
  playlist: {
    title: "Wedding Day Playlist",
    caption: "当日に流れる、ふたりのお気に入りの曲です。\n気になる曲があれば聴いてみてください。",
    url: "https://open.spotify.com/playlist/5C3ZpYZY6nYPzu1VIeYSIm?si=0b7206b117f8473d",
    cta: "Spotifyで聴く",
    cover: "assets/playlist-cover.jpg",       // プレイリストのカバー画像
    embed: "https://open.spotify.com/embed/playlist/5C3ZpYZY6nYPzu1VIeYSIm?utm_source=generator&theme=0&si=e7b88fdd65304915", // Spotify埋め込みプレイヤー
    covers: [],                               // ★ 任意: ["assets/cover1.jpg", ...] ジャケ写(最大4枚)
    visible: 8,                               // 最初に表示する曲数(残りは「もっと見る」)
    tracks: [
      {"title": "Good Day", "artist": "Jake Scott"},
      {"title": "VIVANT <Main theme>", "artist": "Akira Senju"},
      {"title": "気分爽快", "artist": "Chisato Moritaka"},
      {"title": "Wave of You", "artist": "Surfaces"},
      {"title": "Love Someone", "artist": "Lukas Graham"},
      {"title": "Perfect", "artist": "One Direction"},
      {"title": "Just the Way You Are", "artist": "Bruno Mars"},
      {"title": "What My World Spins Around", "artist": "Jordan Davis"},
      {"title": "10,000 Hours (with Justin Bieber)", "artist": "Dan + Shay, Justin Bieber"},
      {"title": "I Like Me Better", "artist": "Lauv"},
      {"title": "Young, Wild & Free (feat. Bruno Mars)", "artist": "Snoop Dogg, Wiz Khalifa, Bruno Mars"},
      {"title": "Blueberry Eyes (feat. SUGA of BTS)", "artist": "MAX, SUGA"},
      {"title": "I'm In Love With You", "artist": "The 1975"},
      {"title": "I Saw Love", "artist": "Forest Blakk"},
      {"title": "us. (feat. Taylor Swift)", "artist": "Gracie Abrams, Taylor Swift"},
      {"title": "Angel In My View", "artist": "Rachael Sage"},
      {"title": "Love Never Felt So Good", "artist": "Michael Jackson, Justin Timberlake"},
      {"title": "Love Story (Taylor’s Version)", "artist": "Taylor Swift"},
      {"title": "超めでたいソング 〜こんなに幸せでいいのかな？〜", "artist": "FRUITS ZIPPER"},
      {"title": "おもかげ (produced by Vaundy)", "artist": "milet, Aimer, Lilas"},
      {"title": "ともに", "artist": "WANIMA"},
      {"title": "OVERTURE", "artist": "Nogizaka46"},
      {"title": "Clap & Clap！", "artist": "Erika Ikuta"},
      {"title": "I see...", "artist": "Nogizaka46"},
      {"title": "GRATEFUL", "artist": "TENDRE"},
      {"title": "GIRLS", "artist": "Michael Kaneko, Ohashi Trio"},
      {"title": "ハルノヒ", "artist": "Aimyon"},
      {"title": "お嫁においで2015", "artist": "PUNPEE"},
      {"title": "CHE.R.RY", "artist": "YUI"},
      {"title": "ボーイフレンド", "artist": "aiko"},
      {"title": "うれしい！たのしい！大好き！", "artist": "DREAMS COME TRUE"},
      {"title": "One - CHRISTMAS CLASSIC version", "artist": "RIP SLYME"},
      {"title": "One Love", "artist": "ARASHI"},
      {"title": "世界に一つだけの花", "artist": "Noriyuki Makihara"},
      {"title": "Soranji", "artist": "Mrs. GREEN APPLE"},
      {"title": "旅路", "artist": "Fujii Kaze"},
      {"title": "When We Were Young", "artist": "Michael Kaneko"},
      {"title": "Thinking out Loud", "artist": "Ed Sheeran"},
      {"title": "好き", "artist": "Gen Hoshino"}
    ]
  },

  /* ---------- Q&A(ゲストからの質問) ---------- */
  qa: [
    { q: "プロポーズの思い出は？",
      photos: [{ src: "assets/q-proposal.jpg", ratio: "4 / 5", pos: "50% 40%" }, { src: "assets/pr_petals.jpg", ratio: "3 / 2", cap: "戻った部屋には、バラの花びらが" }],
      a: "ホテルに泊まって、ディナーの間にスタッフの方が部屋にお花と指輪を用意してくれました。\n部屋に戻って「ずっと一緒にいてください」と伝えると、千里が珍しく泣いてくれました。\nたすくは緊張しすぎて、ディナーが美味しかったこと以外ほとんど覚えていません。" },
    { q: "お互いの名前の由来は？",
      a: "たすく：漢字の画数から決まったそうです。「たすく」という呼び方は、叔父がアドバイスしてくれたと聞いています。\n\n千里：父が森高千里さんのファンだったからです。名字の「德嵩」とのバランスで、名前の画数は控えめにしたかったそうです。" },
    { q: "お互いを動物に例えると？",
      a: "千里からたすくへ：コアラ\n顔が似ているから、というシンプルな理由です。\n\nたすくから千里へ：ミーアキャット\n少し離れたところから周りを見張っているような雰囲気が、なんとなく似ています。外では人のことをよく見ていて、気づかいができるところも重なります。" },
    { q: "お互いに作ってほしい好きなご飯は？",
      a: "千里：手抜きスンドゥブ\n気合いを入れすぎない、気軽に食べられるごはんがうれしいです。\n\nたすく：唐揚げ\n定番ですが、やっぱり大好きです。" },
    { q: "お互いの似てるなと思うところは？",
      photos: [{ src: "assets/q-meal.jpg", ratio: "4 / 3", pos: "50% 50%" }],
      a: "食の趣味です。\n美味しいと感じるものが近くて、ごはんを食べながら「おいしいね」と言い合えます。\n\nそれ以外は似ていないところの方が多いのですが、「これいいね！」と思うポイントは同じなので、一緒にいて心地いいです。" },
    { q: "お互いの好きなところは？",
      photos: [{ src: "assets/q-like.jpg", ratio: "4 / 5", pos: "50% 60%" }],
      a: "たすく：千里は、外では人のことをよく見ていて、気づかいのできるしっかり者です。二人のときは歌っていたり、よく話しかけてくれる陽気な人で、無理や背伸びをしなくていいところが大好きです。あと、顔も好みです。\n\n千里：たすくは、私に対して手を抜かない人です。私のことを大事にしてくれているのが伝わってきます。" },
    { q: "お互いの理想の家庭は？",
      photos: [{ src: "assets/q-home.jpg", ratio: "4 / 5", pos: "50% 50%" }],
      a: "たすく：笑顔があふれる家庭にしたいです。\n千里：家族みんなが仲良しな家庭にしたいです。\n\n二人で相談しながら、毎日よく笑って、ごはんが美味しい家庭を目指します。" }
  ]
};
