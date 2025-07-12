$(function() {
  setTimeout(() => {
    $("a.inner-link").click(function() {
  		var e = $($(this).attr("href")).offset().top;
  		return $("html,body").animate({
  			scrollTop: e + "px"
  		}, 1e3, "easeInOutCubic"), !1
  	}), $("header .bar-wrap").click(function() {
  		$("header").toggleClass("menu-on"), $(".header2 .pc-nav").fadeToggle()
  	});
  	let i = {
  		scrollTopPos: 0,
  		upOrDwon: null,
  		main: function() {
  			var e = 0 < $("html").scrollTop() ? $("html").scrollTop() : 0,
  				t = 0 < $("body").scrollTop() ? $("body").scrollTop() : 0,
  				e = t < e ? e : t;
  			let n = $("header");
  			t = 768 < window.innerWidth ? 154 : 77, i.scrollTopPos < e ? i.upOrDwon =
  				"down" : i.scrollTopPos > e && (i.upOrDwon = "up"), t < e ? (n.addClass(
  						"fixed"), "down" == i.upOrDwon ? n.removeClass("half") : "up" == i.upOrDwon &&
  					n.addClass("half")) : n.removeClass("fixed").removeClass("half"), i.scrollTopPos =
  				e
  		}
  	};
  
  	function e() {
  		if (1 == $(".pageID-top").length) {
  			let e = $("#ticket .tickets-wrap0"),
  				t = $("#ticket .tickets");
  			var n = $("#ticket .tickets li").length,
  				i = 323 * n + 8 * (n - 1);
  			t.css("width", "auto"), e.removeClass("left-margin").removeClass(
  				"sp-box-width"), 768 <= window.innerWidth ? 3 <= n && (e.addClass(
  				"left-margin"), t.width(i)) : window.innerWidth < 768 && 2 <= n && (e.addClass(
  				"sp-box-width"), t.width(i))
  		}
  	}
  	i.main(), $(".modal-trigger").click(function() {
  		return $("#modal-base, #modal-cont").fadeIn(), !1
  	}), $(".modal-close, #modal-base").click(function() {
  		return $("#modal-base, #modal-cont").fadeOut(), !1
  	}), $(".basic-btn").click(function() {
  		if ($(this).hasClass("disabled") || $(this).prop("disabled")) return !1
  	}), $(".pageType-cart #modal-cont .btn").click(function() {
  		if ($(this).hasClass("disabled") || $(this).prop("disabled")) return !1
  	}), $('.required-trigger input[type="checkbox"]').change(function() {
  		let e = "OK";
  		$('.required-trigger input[type="checkbox"]').each(function() {
  			$(this).prop("checked") || (e = "NG")
  		}), "OK" == e ? $(".required-target").prop("disabled", !1).removeClass(
  			"disabled") : $(".required-target").prop("disabled", !0).addClass(
  			"disabled")
  	}), $("#agree0").on("change", function() {
  		$(this).prop("checked") ? $("#next").prop("disabled", !1) : $("#next").prop(
  			"disabled", !0)
  	}), e();
  	let t = {
  		sum: function(e) {
  			let n = 0,
  				i = 0;
  			e.find('input[type="text"]').each(function() {}), e.find(
  				".generation .left").each(function() {
  				var e = parseInt($(this).find('input[type="text"]').val()),
  					t = parseInt($(this).find(".price-num").text().replace(",", ""));
  				n += e, i += e * t
  			}), e.find(".sum-num").text(n), e.find(".sum-price").text(i.toLocaleString())
  		},
  		main: function() {
  			$(".pageID-buy01").length && ($(".generation .plus").click(function() {
  				var e = parseInt($(this).prev("input").val()) + 1;
  				$(this).prev("input").val(e), t.sum($(this).parents(".acc-target"))
  			}), $(".generation .minus").click(function() {
  				let e = parseInt($(this).next("input").val()) - 1;
  				e < 0 && (e = 0), $(this).next("input").val(e), t.sum($(this).parents(
  					".acc-target"))
  			}))
  		}
  	};
  
  	function n(e) {
  		var t = e.target.value.replace(/[^(\x21-\x7E)]/g, "");
  		e.target.value = t
  	}
  
  	function a(e) {
  		return e.target.matches("input.halfwidthinputlimit")
  	}
  	t.main(), $(".pageID-buy01").length && $(".item:not(.sold-out) .acc-trigger")
  		.click(function() {
  			$(this).toggleClass("on").next(".acc-target").slideToggle()
  		}), $(window).scroll(function() {
  			i.main()
  		}), $(window).resize(function() {
  			i.main(), e()
  		}), document.addEventListener("input", function(e) {
  			e.isComposing || a(e) && n(e)
  		}), document.addEventListener("compositionend", function(e) {
  			a(e) && setTimeout(function() {
  				n(e)
  			}, 0)
  		})
  });
  const checkPasswordStrength = e => {
  		var l = {
  			"lang-ja": {
  				text: "繝代せ繝ｯ繝ｼ繝峨�螳牙�諤ｧ",
  				weak: "辟｡蜉ｹ",
  				medium: "荳ｭ",
  				strong: "蠑ｷ"
  			},
  			"lang-en": {
  				text: "Password Safety Level",
  				weak: "Invalid",
  				medium: "Medium",
  				strong: "Strong"
  			},
  			"lang-fr": {
  				text: "Niveau de sﾃｩcuritﾃｩ du mot de passe",
  				weak: "Non valide",
  				medium: "Moyen",
  				strong: "Fort"
  			},
  			"lang-tc": {
  				text: "蟇�｢ｼ逧�ｮ牙�諤ｧ",
  				weak: "辟｡謨�",
  				medium: "荳ｭ",
  				strong: "蠑ｷ"
  			},
  			"lang-sc": {
  				text: "蟇��∫噪螳牙�諤ｧ",
  				weak: "譌�謨�",
  				medium: "荳ｭ",
  				strong: "蠑ｺ"
  			},
  			"lang-ko": {
  				text: "��ｰ�逸从�� �溢��┳",
  				weak: "�ｴ巐ｨ",
  				medium: "��",
  				strong: "��"
  			}
  		};
  		const r = ['"', "'", "<", ">", "password", "123456"],
  			t = $("#" + e),
  			d = $("#check-strength"),
  			n = d.find(".check-text"),
  			i = d.find(".check-level"),
  			c = $("body").attr("class");
  		(e = Object.keys(l).find(e => c.includes(e))) && (e = l[e], n.html(e.text)),
  		$(window).on("load", function() {
  			var e = t.val();
  			e && (d.removeClass("weak medium strong"), e = a(e), i.text(e))
  		}), t.on("input", function() {
  			d.removeClass("weak medium strong");
  			var e = $(this).val(),
  				e = a(e);
  			i.text(e)
  		});
  		const a = t => {
  			let n = 0;
  			if (0 === t.length) return "";
  			if (r.some(e => t.includes(e))) n = 0;
  			else if (1 <= t.length) {
  				if (10 <= t.length && t.length <= 20) {
  					var i = /[A-Z]/.test(t),
  						a = /[a-z]/.test(t),
  						s = /[\W_]/.test(t),
  						o = /\d/.test(t);
  					let e = 0;
  					i && e++, a && e++, s && e++, o && e++, 3 === e && (n = 1), 4 === e && (n =
  						2)
  				}
  			} else n = 0;
  			return (o = Object.keys(l).find(e => c.includes(e))) ? (o = l[o], 0 === n ?
  				(d.addClass("weak"), o.weak) : 1 === n ? (d.addClass("medium"), o.medium) :
  				2 === n ? (d.addClass("strong"), o.strong) : void 0) : void 0
  		}
  	},
  	togglePasswordVisibility = (e, t) => {
  		const n = document.getElementById(e),
  			i = document.getElementById(t);
  		n.addEventListener("change", function() {
  			n.checked ? i.type = "text" : i.type = "password"
  		})
	}
    }, 300);
};
