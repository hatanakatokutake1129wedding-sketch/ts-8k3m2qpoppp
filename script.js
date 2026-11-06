(function () {
  var C = window.CONTENT;

  /* 公開期限: 過ぎたら中身は一切表示しない(画像も読み込まない) */
  if (C.site.expires && Date.now() > new Date(C.site.expires + "T23:59:59+09:00").getTime()) {
    document.body.innerHTML = '<main class="closed"><p class="closed-title">Tasuku <i>&amp;</i> Chisato</p>' +
      '<p>このページの公開は終了しました。<br>ご覧いただき、ありがとうございました。</p></main>';
    return;
  }

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  var pad = function (n) { return String(n).padStart(2, "0"); };

  /* 画像つきの枠。画像が読み込めない間は .ph の「PHOTO」仮枠が見える */
  function photo(src, alt, cls, pos) {
    var box = el("div", "ph" + (cls ? " " + cls : ""));
    if (src) {
      var img = new Image();
      img.alt = alt || "";
      img.decoding = "async";
      if (pos) img.style.objectPosition = pos;
      img.onload = function () { box.appendChild(img); };
      img.src = src;
    }
    return box;
  }

  /* 項目に添える写真。{src, ratio, pos, cap} の配列 */
  function shots(list) {
    if (!list || !list.length) return null;
    var wrap = el("div", "shots n" + list.length);
    list.forEach(function (s, i) {
      var fig = el("figure", "shot");
      fig.style.setProperty("--tilt", ((i % 2 ? 1.6 : -1.6)) + "deg");
      var box = photo(s.src, s.cap || "", "", s.pos);
      box.style.aspectRatio = s.ratio || (list.length > 1 ? "1 / 1" : "4 / 3");
      fig.appendChild(box);
      if (s.cap) fig.appendChild(el("figcaption", "", s.cap));
      wrap.appendChild(fig);
    });
    return wrap;
  }

  /* ---- site / cover ---- */
  var parts = C.site.date.split(".");           // 2026.11.29
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var day = parseInt(parts[2], 10);
  var suffix = (day % 10 === 1 && day !== 11) ? "st" : (day % 10 === 2 && day !== 12) ? "nd" : (day % 10 === 3 && day !== 13) ? "rd" : "th";
  $("#site-title").textContent = C.site.title;
  $("#cover-date").innerHTML = "<b>" + day + "<sup>" + suffix + "</sup></b><span>" + months[parseInt(parts[1], 10) - 1] + "</span>";
  $("#cover-issue").textContent = "ISSUE " + parts[1] + pad(day) + " ・ " + parts[0];
  $("#hero-meta").innerHTML = C.site.date + " ・ " + C.site.venue;
  $("#footer-thanks").textContent = C.site.thanks;
  $("#footer-photo").replaceWith(photo(C.site.lastImage, "Tasuku & Chisato", "footer-photo reveal"));
  $("#hero-photo").replaceWith(photo(C.site.heroImage, "Tasuku & Chisato", "hero-photo", "38% 50%"));

  /* ---- cover ribbon(流れる写真帯) ---- */
  (function () {
    var rb = $("#ribbon"), track = el("div", "ribbon-track");
    for (var rep = 0; rep < 2; rep++) {
      C.site.ribbon.forEach(function (src, i) {
        var f = el("span", "ribbon-item");
        f.style.setProperty("--tilt", (i % 2 ? 2 : -2) + "deg");
        var im = new Image(); im.src = src; im.alt = ""; im.decoding = "async";
        f.appendChild(im); track.appendChild(f);
      });
    }
    rb.appendChild(track);
  })();

  /* ---- message modal ---- */
  var modal = $("#modal"), modalBody = $("#modal-body");
  function openModal(m) {
    $("#modal-label").textContent = m.label;
    modalBody.innerHTML = "";
    modalBody.appendChild(el("p", "", "")).textContent = m.text; // 画像の読み込み前/失敗時の表示
    var img = new Image();
    img.alt = m.label;
    img.onload = function () { modalBody.innerHTML = ""; modalBody.appendChild(img); };
    img.src = m.image;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  modal.addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* ---- profile: 見開きページ(新郎=イエロー / 新婦=ピンク) ---- */
  var pbody = $("#profile-body");
  C.profiles.forEach(function (p, idx) {
    var wrap = el("div", "person " + (idx === 0 ? "groom" : "bride"));
    wrap.appendChild(el("p", "role reveal", "<span class=\"role-en\">" + p.role + "</span><span class=\"role-jp\">" + p.roleJp + "</span>"));
    var card = el("div", "profile-card reveal");
    var ph = el("div", "profile-photo");
    ph.appendChild(photo(p.photo, p.name));
    ph.appendChild(el("span", "tape", ""));
    card.appendChild(ph);
    card.appendChild(el("h3", "profile-name", "<span class=\"script\">" + p.nameEn + "</span>" + p.name));
    if (p.chips) card.appendChild(el("ul", "chips", p.chips.map(function (c) { return "<li>" + c + "</li>"; }).join("")));
    var ul = el("ul", "rows");
    p.rows.forEach(function (r) { ul.appendChild(el("li", "", "<span>" + r[0] + "</span><b>" + r[1] + "</b>")); });
    card.appendChild(ul);
    if (p.photo2) {
      var s2 = shots([p.photo2]); s2.classList.add("p2");
      card.appendChild(s2);
    }
    if (p.kids) {
      card.appendChild(el("p", "hist-head", "ALBUM<small>小さいころ</small>"));
      var ks = shots(p.kids); ks.classList.add("kids"); card.appendChild(ks);
    }
    if (p.history) {
      card.appendChild(el("p", "hist-head", "HISTORY<small>これまでの歩み</small>"));
      var hl = el("ol", "history");
      p.history.forEach(function (h) { var li = el("li", "", "<b>" + h[0] + "</b><span></span>"); $("span", li).textContent = h[1]; hl.appendChild(li); });
      card.appendChild(hl);
    }
    wrap.appendChild(card);
    var b = el("button", "letter reveal", "<i class=\"env\" aria-hidden=\"true\"></i><span><b>" + p.message.label + "</b><em>TAP して読む！</em></span>");
    b.addEventListener("click", function () { openModal(p.message); });
    wrap.appendChild(b);
    pbody.appendChild(wrap);
  });

  /* ---- numbers ---- */
  var nb = $("#numbers");
  C.numbers.forEach(function (n, i) {
    var t = el("div", "num c" + (i % 4) + " reveal", "<b>" + n.big + "</b><span>" + n.small + "</span><em>" + n.note + "</em>");
    t.style.setProperty("--rot", (i % 2 ? 1.2 : -1.2) + "deg");
    nb.appendChild(t);
  });

  /* ---- story(年表) ---- */
  $("#story-lead").textContent = C.story.lead;
  var tlst = $("#timeline");
  C.story.items.forEach(function (it, i) {
    var li = el("li", "t-item c" + (i % 4) + (it.today ? " today" : "") + " reveal");
    li.appendChild(el("i", "t-dot", ""));
    var card = el("div", "t-card");
    card.appendChild(el("span", "t-when", it.when));
    var h = el("h3", "", ""); h.textContent = it.title; card.appendChild(h);
    var ph = shots(it.photos); if (ph) card.appendChild(ph);
    if (it.emoji) card.appendChild(el("div", "t-emoji", it.emoji));
    var pp = el("p", "", ""); pp.textContent = it.body; card.appendChild(pp);
    li.appendChild(card);
    tlst.appendChild(li);
  });

  /* ---- places(思い出の場所) ---- */
  var plc = $("#places-body");
  C.places.forEach(function (x, i) {
    var a = el("article", "place c" + ((i + 1) % 4) + " reveal");
    a.style.setProperty("--rot", (i % 2 ? .8 : -.8) + "deg");
    a.appendChild(el("span", "pin", "<i aria-hidden=\"true\">📍</i>" + x.pin));
    var h = el("h3", "", ""); h.innerHTML = x.name + "<small>" + x.sub + "</small>"; a.appendChild(h);
    var ph = shots(x.photos); if (ph) a.appendChild(ph);
    if (x.emoji) a.appendChild(el("div", "t-emoji", x.emoji));
    var pp = el("p", "", ""); pp.textContent = x.body; a.appendChild(pp);
    plc.appendChild(a);
  });

  /* ---- album ---- */
  $("#album-lead").textContent = C.album.lead;
  var alb = $("#album-body");
  C.album.photos.forEach(function (ph, i) {
    var fig = el("figure", "shot al reveal");
    fig.style.setProperty("--rot", [-1.8, 1.4, -.8, 2, -1.4, .9][i % 6] + "deg");
    var box = photo(ph.src, ph.cap || "", "", ph.pos);
    box.style.aspectRatio = ph.ratio;
    fig.appendChild(box);
    if (ph.cap) fig.appendChild(el("figcaption", "", ph.cap));
    alb.appendChild(fig);
  });

  /* ---- favorites ---- */
  var stack = $("#stack");
  C.favorites.forEach(function (f, i) {
    var c = el("article", "fav c" + (i % 4) + " reveal");
    c.style.setProperty("--rot", (i % 2 ? .9 : -.9) + "deg");
    c.innerHTML = "<span class=\"fav-no\">" + pad(i + 1) + "</span><span class=\"fav-tag\">" + f.tag + "</span>" +
      "<h3>" + f.title + "<small>by " + f.by + "</small></h3><p></p>";
    $("p", c).textContent = f.body;
    var fs = shots(f.photos);
    if (fs) c.insertBefore(fs, $("p", c));
    stack.appendChild(c);
  });

  /* ---- playlist ---- */
  var pl = C.playlist;
  $("#playlist-caption").innerHTML = pl.caption.split("\n").join("<br>");
  var pb = $("#playlist-body");
  if (pl.cover) {
    var cv = photo(pl.cover, "Our Wedding Playlist", "pl-cover");
    pb.appendChild(cv);
  }
  if (pl.embed) {
    var fr = el("iframe", "embed");
    fr.src = pl.embed; fr.height = 352; fr.loading = "lazy"; fr.title = "Spotify プレイリスト";
    fr.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture");
    fr.setAttribute("frameborder", "0");
    pb.appendChild(fr);
  } else {
    var covers = el("div", "covers");
    for (var k = 0; k < 4; k++) covers.appendChild(photo(pl.covers[k], "", ""));
    pb.appendChild(covers);
  }
  pb.appendChild(el("h3", "pl-title", pl.title + '<span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>'));
  var tl = el("ol", "tracks");
  pl.tracks.forEach(function (t, i) {
    tl.appendChild(el("li", "", '<span class="no">' + pad(i + 1) + "</span><div><b>" + t.title + "</b><small>" + t.artist + "</small></div>"));
  });
  pb.appendChild(tl);
  var vis = pl.visible || pl.tracks.length;
  if (pl.tracks.length > vis) {
    tl.classList.add("collapsed");
    Array.prototype.forEach.call(tl.children, function (li, i) { if (i >= vis) li.classList.add("more"); });
    var mb = el("button", "more-btn", "全" + pl.tracks.length + "曲を見る ▼");
    mb.addEventListener("click", function () {
      var c = tl.classList.toggle("collapsed");
      mb.textContent = c ? "全" + pl.tracks.length + "曲を見る ▼" : "閉じる ▲";
    });
    pb.appendChild(mb);
  }
  var cta = el("a", "cta", pl.cta + " <span aria-hidden=\"true\">&rarr;</span>");
  cta.href = pl.url; cta.target = "_blank"; cta.rel = "noopener";
  pb.appendChild(cta);

  /* ---- Q&A accordion ---- */
  var qa = $("#qa-body");
  var plus = '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M7 2v10M2 7h10"/></svg>';
  C.qa.forEach(function (x, i) {
    var item = el("div", "qa-item c" + (i % 4) + " reveal");
    var q = el("button", "qa-q", "<i class=\"qn\">Q" + (i + 1) + "</i><span>" + x.q + "</span>" + plus);
    q.setAttribute("aria-expanded", "false");
    var a = el("div", "qa-a", "<div><p></p></div>");
    $("p", a).textContent = x.a;
    var qs = shots(x.photos);
    if (qs) $("p", a).parentNode.insertBefore(qs, $("p", a));
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open);
    });
    item.appendChild(q); item.appendChild(a);
    qa.appendChild(item);
  });

  /* ---- menu ---- */
  var menu = $("#menu"), mbtn = $("#menu-btn");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", !open);
    mbtn.setAttribute("aria-expanded", open);
    mbtn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    document.body.style.overflow = open ? "hidden" : "";
  }
  mbtn.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });

  /* ---- scroll reveal ---- */
  var targets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -5% 0px" });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add("in"); });
  }
})();
