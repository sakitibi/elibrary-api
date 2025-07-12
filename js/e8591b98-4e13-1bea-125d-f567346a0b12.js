const keyMap = {
  "warning-list": "d2FybmluZy1saXN0",
  "1": "MQ==",
  "friend-code": "ZnJpZW5kLWNvZGU=",
  "username": "dXNlcm5hbWU=",
  "2": "Mg==",
  "3": "Mw==",
  "4": "NA==",
  "5": "NQ==",
  "network-id": "bmV0d29yay1pZA==",
  "6": "Ng==",
  "7": "Nw==",
  "8": "OA==",
  "9": "OQ==",
  "10": "MTA=",
  "11": "MTE=",
  "12": "MTI=",
  "13": "MTM=",
  "14": "MTQ=",
  "15": "MTU=",
  "16": "MTY=",
  "email": "ZW1haWw=",
  "17": "MTc=",
  "riyuu": "cml5dXU=",
  "danger-list": "ZGFuZ2VyLWxpc3Q=",
  "browser-id": "YnJvd3Nlci1pZA==",
  "18": "MTg=",
  "19": "MTk=",
  "taisaku": "dGFpc2FrdQ==",
  "20": "MjA=",
  "21": "MjE=",
  "22": "MjI=",
  "23": "MjM=",
  "24": "MjQ=",
  "25": "MjU=",
  "ipaddress": "aXBhZGRyZXNz",
  "company": "Y29tcGFueQ==",
  "cookie": "Y29va2ll",
  "Hostname": "SG9zdG5hbWU=",
  "UA": "VUE=",
  "26": "MjY=",
  "super-danger-list": "c3VwZXItZGFuZ2VyLWxpc3Q=",
  "SMS-token": "U01TLXRva2Vu",
  "country": "Y291bnRyeQ==",
  "region": "cmVnaW9u",
  "provider": "cHJvdmlkZXI=",
  "amongus-username": "YW1vbmd1cy11c2VybmFtZQ==",
  "youtube-name": "eW91dHViZS1uYW1l",
  "blacklist": "YmxhY2tsaXN0",
  "x-name": "eC1uYW1l",
  "hidden": "aGlkZGVu",
  "birthday": "YmlydGhkYXk=",
  "month": "bW9udGg=",
  "date": "ZGF0ZQ=="
};

const valueMap = {
  "unknown": "dW5rbm93bg==",
  "あ": "44GC",
  "jetbass#5533": "amV0YmFzcyM1NTMz",
  "Poetsleek": "UG9ldHNsZWVr",
  "小学3年生": "5bCP5a2mM+W5tOeUnw==",
  "ゴルシ": "44K044Or44K3",
  "onlypolka#2844": "b25seXBvbGthIzI4NDQ=",
  "4OVclkhP": "NE9WY2xraFA=",
  "A": "QQ==",
  "scarablate#5401": "c2NhcmFibGF0ZSM1NDAx",
  "SUSHI": "U1VTSEk=",
  "chiefbaby#2393": "Y2hpZWZiYWJ5IzIzOTM=",
  "3HjNoB9s": "M0hqTm9COXM=",
  "雪大根": "6Zuq5aSn5qC5",
  "chewyhusky#4955": "Y2hld3lodXNreSM0OTU1",
  "Reward": "UmV3YXJk",
  "looprimed#8348": "bG9vcHJpbWVkIzgzNDg=",
  "パンダ好き": "44OR44Oz44OA5aW944GN",
  "planktall#9413": "cGxhbmt0YWxsIzk0MTM=",
  "焼き鳥": "54S844GN6bOl",
  "oursilk#3577": "b3Vyc2lsayMzNTc3",
  "ボンド": "44Oc44Oz44OJ",
  "wingerleft#5358": "d2luZ2VybGVmdCM1MzU4",
  "あもんぐたのしい": "44GC44KC44KT44GQ44Gf44Gu44GX44GE",
  "auntyherby#2848": "YXVudHloZXJieSMyODQ4",
  "しいたけ": "44GX44GE44Gf44GR",
  "unusedoval#7025": "dW51c2Vkb3ZhbCM3MDI1",
  "erawer@awera.com": "ZXJhd2VyQGF3ZXJhLmNvbQ==",
  "a@awerawer.com": "YUBhd2VyYXdlci5jb20=",
  "awera@a.com": "YXdlcmFAYS5jb20=",
  "mafu.mafu.roboro@gmail.com": "bWFmdS5tYWZ1LnJvYm9yb0BnbWFpbC5jb20=",
  "riceball": "cmljZWJhbGw=",
  "termsbaggy#3497": "dGVybXNiYWdneSMzNDk3",
  "意味不明な事を言ったから": "5oSP5ZGz5LiN5piO44Gq5LqL44KS6KiA44Gj44Gf44GL44KJ",
  "rrI2L5t": "cnJJMkw1dA==",
  "Gwkt0106": "R3drdDAxMDY=",
  "FaudalOwl336510": "RmF1ZGFsT3dsMzM2NTEw",
  "56EjqG1Y": "NTZFanFHMVk=",
  "kPngazH": "a1BuZ2F6SA==",
  "3kBfXl81": "M2tCZlhsODE=",
  "Nevvvd": "TmV2dnZk",
  "ロードプリンス": "44Ot44O844OJ44OX44Oq44Oz44K5",
  "中身は初心者": "5Lit6Lqr44Gv5Yid5b+D6ICF",
  "dapperfire#1991": "ZGFwcGVyZmlyZSMxOTkx",
  "まさかず": "44G+44GV44GL44Ga",
  "firsingle#4189": "Zmlyc2luZ2xlIzQxODk=",
  "3": "Mw==",
  "loggerfit#1912": "bG9nZ2VyZml0IzE5MTI=",
  "、": "44CB",
  "voterocky#6996": "dm90ZXJvY2t5IzY5OTY=",
  "スカニア好き": "44K544Kr44OL44Ki5aW944GN",
  "投票": "5oqV56Wo",
  "snacksworn#7311": "c25hY2tzd29ybiM3MzEx",
  "人外の原石": "5Lq65aSW44Gu5Y6f55+z",
  "usedskill#4275": "dXNlZHNraWxsIzQyNzU=",
  "U5UCSCt": "VTVVQ1NDdA==",
  "4sVvHoqQ": "NHNWdkhvcVE=",
  "AFN運営委員会": "QUZO6YGL5Za25aeU5ZOh5Lya",
  "コメント荒らし": "44Kz44Oh44Oz44OI6I2S44KJ44GX",
  "ワッサンマッド許さん": "44Ov44OD44K144Oz44Oe44OD44OJ6Kix44GV44KT",
  "arrowsnowy#7134": "YXJyb3dzbm93eSM3MTM0",
  "名前は長い方が有利とグル": "5ZCN5YmN44Gv6ZW344GE5pa544GM5pyJ5Yip44Go44Kw44Or",
  "とんかつ味のアソライ": "44Go44KT44GL44Gk5ZGz44Gu44Ki44K944Op44Kk",
  "ablazetofu#6484": "YWJsYXpldG9mdSM2NDg0",
  "名前はだいの方が有利": "5ZCN5YmN44Gv44Gg44GE44Gu5pa544GM5pyJ5Yip",
  "がまねむ": "44GM44G+44Gt44KA",
  "flitlanded#9228": "ZmxpdGxhbmRlZCM5MjI4",
  "㍌村I鶏煎餅": "442M5p2RSem2j+eFjumkhQ==",
  "ミニトマト隊　隊長": "44Of44OL44OI44Oe44OI6ZqK44CA6ZqK6ZW3",
  "daichan": "ZGFpY2hhbg==",
  "只今規制中": "5Y+q5LuK6KaP5Yi25Lit",
  "2t6Avku7": "MnQ2QXZrdTc=",
  "fOWimF8": "Zk9XaW1GOA==",
  "匿名(偽物)": "5Yy/5ZCNKOWBveeJqSk=",
  "なりすまし": "44Gq44KK44GZ44G+44GX",
  "KIREねこ": "S0lSReOBreOBkw==",
  "ラムネ様への誹謗中傷": "44Op44Og44ON5qeY44G444Gu6Kq56KyX5Lit5YK3",
  "WhitePAWA": "V2hpdGVQQVdB",
  "4qIzMvJU": "NHFJek12SlU=",
  "2Ei4IiSz": "MkVpNElpU3o=",
  "みぞれさんの活動の妨害": "44G/44Ge44KM44GV44KT44Gu5rS75YuV44Gu5aao5a6z",
  "1OXfPCcI": "MU9YZlBDY0k=",
  "cXdbMOx": "Y1hkYk1PeA==",
  "2OTsrFKq": "Mk9Uc3JGS3E=",
  "4388UWFO": "NDM4OFVXRk8=",
  "122.196.202.142": "MTIyLjE5Ni4yMDIuMTQy",
  "マグロのユッケ": "44Oe44Kw44Ot44Gu44Om44OD44Kx",
  "草原急行": "6I2J5Y6f5oCl6KGM",
  "d1537239810d8b39555cec623d559368c8070b17871": "ZDE1MzcyMzk4MTBkOGIzOTU1NWNlYzYyM2Q1NTkzNjhjODA3MGIxNzg3MQ==",
  "zaq7ac4ca8e.rev.zaq.ne.jp": "emFxN2FjNGNhOGUucmV2LnphcS5uZS5qcA==",
  "Chrome Mobile WebView 136.0.7103/Android 14": "Q2hyb21lIE1vYmlsZSBXZWJWaWV3IDEzNi4wLjcxMDMvQW5kcm9pZCAxNA==",
  "マイ鉄荒らし対策委員会に同一名があった為": "44Oe44Kk6YmE6I2S44KJ44GX5a++562W5aeU5ZOh5Lya44Gr5ZCM5LiA5ZCN44GM44GC44Gj44Gf54K6",
  "4J20db1l": "NEoyMGRiMWw=",
  "K9uigye": "Szl1aWd5ZQ==",
  "BMR (Bedrock Minecraft Railway)": "Qk1SIChCZWRyb2NrIE1pbmVjcmFmdCBSYWlsd2F5KQ==",
  "理由：利用規約第20条要注意人物リスト及び指定団体リストに入らない事に違反した為また本人否定確信犯": "55CG55Sx77ya5Yip55So6KaP57SE56ysMjDmnaHopoHms6jmhI/kurrnianjg6rjgrnjg4jlj4rjgbPmjIflrprlm6PkvZPjg6rjgrnjg4jjgavlhaXjgonjgarjgYTkuovjgavpgZXlj43jgZfjgZ/ngrrjgb7jgZ/mnKzkurrlkKblrprnorrkv6Hniq8=",
  "vzblh0q": "dnpibGgwcQ==",
  "2EYHDDHF": "MkVZSERESEY=",
  "4yrbHtev": "NHlyYkh0ZXY=",
  "3n7qv8ra": "M243cXY4cmE=",
  "3gBOywbY": "M2dCT3l3Ylk=",
  "4BaNXiVu": "NEJhTlhpVnU=",
  "2oOBjXLQ": "Mm9PQmpYTFE=",
  "4iJoKmwl": "NGlKb0ttd2w=",
  "熟成牛タン": "54af5oiQ54mb44K/44Oz",
  "秋月": "56eL5pyI",
  "高浜電気鉄道": "6auY5rWc6Zu75rCX6YmE6YGT",
  "raWy4ml": "cmFXeTRtbA==",
  "2A1siZM3": "MkExc2laTTM=",
  "f735d3f4043164721acb6cd3eef197c4ac055dff8da": "ZjczNWQzZjQwNDMxNjQ3MjFhY2I2Y2QzZWVmMTk3YzRhYzA1NWRmZjhkYQ==",
  "softbank221044137228.bbtec.net": "c29mdGJhbmsyMjEwNDQxMzcyMjguYmJ0ZWMubmV0",
  "221.44.137.228": "MjIxLjQ0LjEzNy4yMjg=",
  "K-Generic_Android-K/Android-10/Chrome Mobile-132.0.0": "Sy1HZW5lcmljX0FuZHJvaWQtSy9BbmRyb2lkLTEwL0Nocm9tZSBNb2JpbGUtMTMyLjAuMA==",
  "bddcde8c-9f87-4847-ad85-0161ed50c103": "YmRkY2RlOGMtOWY4Ny00ODQ3LWFkODUtMDE2MWVkNTBjMTAz",
  "1GLLCE0B": "MUdMTENFMEI=",
  "HTbEfTI": "SFRiRWZUSQ==",
  "1tCyuB2U": "MXRDeXVCMlU=",
  "カワシマ": "44Kr44Ov44K344Oe",
  "chunkyodds#3153": "Y2h1bmt5b2RkcyMzMTUz",
  "20uRMcQt": "MjB1Uk1jUXQ=",
  "4GY335U1": "NEdZMzM1VTE=",
  "138.201.224.59": "MTM4LjIwMS4yMjQuNTk=",
  "e10ca098423f1bfcfee380d36f6d82123a22828f038": "ZTEwY2EwOTg0MjNmMWJmY2ZlZTM4MGQzNmY2ZDgyMTIzYTIyODI4ZjAzOA==",
  "static.59.224.201.138.clients.your-server.de": "c3RhdGljLjU5LjIyNC4yMDEuMTM4LmNsaWVudHMueW91ci1zZXJ2ZXIuZGU=",
  "Chrome 119.0.0/Windows 10": "Q2hyb21lIDExOS4wLjAvV2luZG93cyAxMA==",
  "🇩🇪ドイツ": "8J+HqfCfh6rjg4njgqTjg4Q=",
  "ザクセン": "44K244Kv44K744Oz",
  "Hetzner Online GmbH": "SGV0em5lciBPbmxpbmUgR21iSA==",
  "名前は猫の方が有利": "5ZCN5YmN44Gv54yr44Gu5pa544GM5pyJ5Yip",
  "fineown#3933": "ZmluZW93biMzOTMz",
  "九尾": "5Lmd5bC+",
  "blaseshape#4922": "Ymxhc2VzaGFwZSM0OTIy",
  "ゆどうふ": "44KG44Gp44GG44G1",
  "多方面への悪口": "5aSa5pa56Z2i44G444Gu5oKq5Y+j",
  "牛3円偽": "54mbM+WGhuWBvQ==",
  "匿名のDiscordでの荒らし": "5Yy/5ZCN44GuRGlzY29yZOOBp+OBruiNkuOCieOBlw==",
  "インポスター引きたい": "44Kk44Oz44Od44K544K/44O85byV44GN44Gf44GE",
  "likerain#0448": "bGlrZXJhaW4jMDQ0OA==",
  "不明": "5LiN5piO",
  "kellelhome#1482": "a2VsbGVsaG9tZSMxNDgy",
  "いちごミルクの素": "44GE44Gh44GU44Of44Or44Kv44Gu57Sg",
  "galajokey#3559": "Z2FsYWpva2V5IzM1NTk=",
  "2TO9gM3a": "MlRPOWdNM2E=",
  "3iQ21BGA": "M2lRMjFCR0E=",
  "153.242.253.143": "MTUzLjI0Mi4yNTMuMTQz",
  "36480e41595a33739e9e0e27d6b618ff4d3f91344bc": "MzY0ODBlNDE1OTVhMzM3MzllOWUwZTI3ZDZiNjE4ZmY0ZDNmOTEzNDRiYw==",
  "p896144-ipoe.ipoe.ocn.ne.jp": "cDg5NjE0NC1pcG9lLmlwb2Uub2NuLm5lLmpw",
  "Mobile Safari 15.6.6/iOS 15.8.3": "TW9iaWxlIFNhZmFyaSAxNS42LjYvaU9TIDE1LjguMw==",
  "wikiページ荒らし": "d2lraeODmuODvOOCuOiNkuOCieOBlw==",
  "しおん(紫音ちゃんじゃない方)": "44GX44GK44KTKOe0q+mfs+OBoeOCg+OCk+OBmOOCg+OBquOBhOaWuSk=",
  "unlinedyea#3406": "dW5saW5lZHllYSMzNDA2",
  "lowergoody#2833": "bG93ZXJnb29keSMyODMz",
  "1p6LXgw3": "MXA2TFhndzM=",
  "3cXGwELF": "M2NYR3dFTEY=",
  "14.9.86.64": "MTQuOS44Ni42NA==",
  "M014009086064.v4.enabler.ne.jp": "TTAxNDAwOTA4NjA2NC52NC5lbmFibGVyLm5lLmpw",
  "8f408a2cabb2c21ce69103d2df32153edbad2c070f3": "OGY0MDhhMmNhYmIyYzIxY2U2OTEwM2QyZGYzMjE1M2VkYmFkMmMwNzBmMw==",
  "Chrome 137.0.0/Windows 10": "Q2hyb21lIDEzNy4wLjAvV2luZG93cyAxMA==",
  "2f044389-7cb8-414c-9fde-d141c9df70da": "MmYwNDQzODktN2NiOC00MTRjLTlmZGUtZDE0MWM5ZGY3MGRh",
  "青森県八戸市": "6Z2S5qOu55yM5YWr5oi45biC",
  "日本ネットワークイネイブラー株式会社": "5pel5pys44ON44OD44OI44Ov44O844Kv44Kk44ON44Kk44OW44Op44O85qCq5byP5Lya56S+",
  "大規模なWikiページ荒らし": "5aSn6KaP5qih44GqV2lraeODmuODvOOCuOiNkuOCieOBlw==",
  "名前は長い方が有利": "5ZCN5YmN44Gv6ZW344GE5pa544GM5pyJ5Yip",
  "ourluck#4319": "b3VybHVjayM0MzE5",
  "名前は長い方が有利🐦": "5ZCN5YmN44Gv6ZW344GE5pa544GM5pyJ5Yip8J+Qpg==",
  "12ninstudio様&ラムネ様が部屋に入った際、あらぬ疑いをかけ部屋から追放した上に、視聴者が悪口を言い、雰囲気が良くないためまた、この雰囲気を改善しようとしない、複数人に対して冤罪をかけているが反省の色が見えない": "MTJuaW5zdHVkaW/mp5gm44Op44Og44ON5qeY44GM6YOo5bGL44Gr5YWl44Gj44Gf6Zqb44CB44GC44KJ44Gs55aR44GE44KS44GL44GR6YOo5bGL44GL44KJ6L+95pS+44GX44Gf5LiK44Gr44CB6KaW6IG06ICF44GM5oKq5Y+j44KS6KiA44GE44CB6Zuw5Zuy5rCX44GM6Imv44GP44Gq44GE44Gf44KBCuOBvuOBn+OAgeOBk+OBrumbsOWbsuawl+OCkuaUueWWhOOBl+OCiOOBhuOBqOOBl+OBquOBhOOAgeikh+aVsOS6uuOBq+WvvuOBl+OBpuWGpOe9quOCkuOBi+OBkeOBpuOBhOOCi+OBjOWPjeecgeOBruiJsuOBjOimi+OBiOOBquOBhA==",
  "全面戦争する": "5YWo6Z2i5oim5LqJ44GZ44KL",
  "法的措置を取る": "5rOV55qE5o6q572u44KS5Y+W44KL",
  "カービィ大好き!": "44Kr44O844OT44Kj5aSn5aW944GNIQ==",
  "過度な概要欄要求": "6YGO5bqm44Gq5qaC6KaB5qyE6KaB5rGC",
  "ウォーターチャレンジ": "44Km44Kp44O844K/44O844OB44Oj44Os44Oz44K4",
  "すまない先生": "44GZ44G+44Gq44GE5YWI55Sf",
  "04": "MDQ=",
  "21": "MjE=",
  "ミスター赤ちゃん": "44Of44K544K/44O86LWk44Gh44KD44KT",
  "ミスター銀さん": "44Of44K544K/44O86YqA44GV44KT",
  "ミスターバナナ": "44Of44K544K/44O844OQ44OK44OK",
  "ミスターマネー": "44Of44K544K/44O844Oe44ON44O8",
  "ミスターブルー": "44Of44K544K/44O844OW44Or44O8",
  "ミスターレッド": "44Of44K544K/44O844Os44OD44OJ",
  "ミスターブラック": "44Of44K544K/44O844OW44Op44OD44Kv",
  "3TpPOgru": "M1RwUE9ncnU=",
  "4ukSGQzf": "NHVrU0dRemY=",
  "122.135.139.195": "MTIyLjEzNS4xMzkuMTk1",
  "8e4dd215b144ad1083ef9cd95ebd7889b85d00298e9": "OGU0ZGQyMTViMTQ0YWQxMDgzZWY5Y2Q5NWViZDc4ODliODVkMDAyOThlOQ==",
  "FL1-122-135-139-195.hyg.mesh.ad.jp": "RkwxLTEyMi0xMzUtMTM5LTE5NS5oeWcubWVzaC5hZC5qcA==",
  "Opera 117.0.0/Windows 10": "T3BlcmEgMTE3LjAuMC9XaW5kb3dzIDEw",
  "153HUhxM": "MTUzSFVoeE0=",
  "1grkU4Xh": "MWdya1U0WGg=",
  "14.9.13.224": "MTQuOS4xMy4yMjQ=",
  "9ffdbf6d43b80e6d410970357f1aa255d7be9437d9d": "OWZmZGJmNmQ0M2I4MGU2ZDQxMDk3MDM1N2YxYWEyNTVkN2JlOTQzN2Q5ZA==",
  "M014009013224.v4.enabler.ne.jp": "TTAxNDAwOTAxMzIyNC52NC5lbmFibGVyLm5lLmpw",
  "Chrome 134.0.0/Chrome OS 14541.0.0": "Q2hyb21lIDEzNC4wLjAvQ2hyb21lIE9TIDE0NTQxLjAuMA==",
  "3kcX4O48": "M2tjWDRPNDg=",
  "4gCaAGBy": "NGdDYUFHQnk=",
  "60.94.79.163": "NjAuOTQuNzkuMTYz",
  "d2ff5fe6ff226e63f277b056d4337dee1674b653953": "ZDJmZjVmZTZmZjIyNmU2M2YyNzdiMDU2ZDQzMzdkZWUxNjc0YjY1Mzk1Mw==",
  "softbank060094079163.bbtec.net": "c29mdGJhbmswNjAwOTQwNzkxNjMuYmJ0ZWMubmV0",
  "Mobile Safari 18.3.1/iOS 18.3.2": "TW9iaWxlIFNhZmFyaSAxOC4zLjEvaU9TIDE4LjMuMg==",
  "2YUi8xLu": "MllVaTh4THU=",
  "GgiSWKH": "R2dpU1dLSA==",
  "111.188.188.186": "MTExLjE4OC4xODguMTg2",
  "815c46f002f31c5b9fcd9fd6225acdcd63cd9ab2107": "ODE1YzQ2ZjAwMmYzMWM1YjlmY2Q5ZmQ2MjI1YWNkY2Q2M2NkOWFiMjEwNw==",
  "softbank111188188186.bbtec.net": "c29mdGJhbmsxMTExODgxODgxODYuYmJ0ZWMubmV0",
  "LINE 15.2.1/Android 15": "TElORSAxNS4yLjEvQW5kcm9pZCAxNQ==",
  "SkTMFGv": "U2tUTUZHdg==",
  "1tpzypoC": "MXRwenlwb0M=",
  "124.18.233.93": "MTI0LjE4LjIzMy45Mw==",
  "d92e5b49e5f3c8e414fcdad83158f0e35f773cfb864": "ZDkyZTViNDllNWYzYzhlNDE0ZmNkYWQ4MzE1OGYwZTM1Zjc3M2NmYjg2NA==",
  "124-18-233-93.area56a.commufa.jp": "MTI0LTE4LTIzMy05My5hcmVhNTZhLmNvbW11ZmEuanA=",
  "Chrome 134.0.0/Windows 10": "Q2hyb21lIDEzNC4wLjAvV2luZG93cyAxMA==",
  "4W56iEyZ": "NFc1NmlFeVo=",
  "2OYvXuyC": "Mk9Zdlh1eUM=",
  "118.7.71.129": "MTE4LjcuNzEuMTI5",
  "caecc6e75af52f8fc61994edca8ea5356784958724f": "Y2FlY2M2ZTc1YWY1MmY4ZmM2MTk5NGVkY2E4ZWE1MzU2Nzg0OTU4NzI0Zg==",
  "p1738130-ipoe.ipoe.ocn.ne.jp": "cDE3MzgxMzAtaXBvZS5pcG9lLm9jbi5uZS5qcA==",
  "LINE 15.2.3/iOS 18.3.1": "TElORSAxNS4yLjMvaU9TIDE4LjMuMQ==",
  "4QbUlJdQ": "NFFiVWxKZFE=",
  "4gqjJxEd": "NGdxakp4RWQ=",
  "49.109.163.33": "NDkuMTA5LjE2My4zMw==",
  "5493b91665d2f72289a4d2d0af144e266a43085b3dc": "NTQ5M2I5MTY2NWQyZjcyMjg5YTRkMmQwYWYxNDRlMjY2YTQzMDg1YjNkYw==",
  "sp49-109-163-33.tck02.spmode.ne.jp": "c3A0OS0xMDktMTYzLTMzLnRjazAyLnNwbW9kZS5uZS5qcA==",
  "Chrome Mobile 134.0.0/Android 10": "Q2hyb21lIE1vYmlsZSAxMzQuMC4wL0FuZHJvaWQgMTA=",
  "fa203b43952a869ceb953c7d4edcd833511b0bce91a": "ZmEyMDNiNDM5NTJhODY5Y2ViOTUzYzdkNGVkY2Q4MzM1MTFiMGJjZTkxYQ==",
  "Chrome 133.0.0/Chrome OS 14541.0.0": "Q2hyb21lIDEzMy4wLjAvQ2hyb21lIE9TIDE0NTQxLjAuMA==",
  "180.20.39.172": "MTgwLjIwLjM5LjE3Mg==",
  "p13207172-ipxg46001marunouchi.tokyo.ocn.ne.jp": "cDEzMjA3MTcyLWlweGc0NjAwMW1hcnVub3VjaGkudG9reW8ub2NuLm5lLmpw",
  "L2svhr7": "TDJzdmhyNw==",
  "143.189.209.108": "MTQzLjE4OS4yMDkuMTA4",
  "fs8fbdd16c.tkyc002.ap.nuro.jp": "ZnM4ZmJkZDE2Yy50a3ljMDAyLmFwLm51cm8uanA=",
  "219.104.135.53": "MjE5LjEwNC4xMzUuNTM=",
  "94830debb30941f4a1c3b58c249be0ddfd2a7671ed1": "OTQ4MzBkZWJiMzA5NDFmNGExYzNiNThjMjQ5YmUwZGRmZDJhNzY3MWVkMQ==",
  "madb688735.ap.nuro.jp": "bWFkYjY4ODczNS5hcC5udXJvLmpw",
  "Windows-10/Edge-135.0.0": "V2luZG93cy0xMC9FZGdlLTEzNS4wLjA=",
  "118.241.250.176": "MTE4LjI0MS4yNTAuMTc2",
  "mp76f1fab0.ap.nuro.jp": "bXA3NmYxZmFiMC5hcC5udXJvLmpw",
  "Windows-10 / Edge-135.0.0": "V2luZG93cy0xMCAvIEVkZ2UtMTM1LjAuMA==",
  "211.132.93.141": "MjExLjEzMi45My4xNDE=",
  "619e8fac852e3f78601af7a8eace0cf1ca33e569854": "NjE5ZThmYWM4NTJlM2Y3ODYwMWFmN2E4ZWFjZTBjZjFjYTMzZTU2OTg1NA==",
  "opt-211-132-93-141.client.pikara.ne.jp": "b3B0LTIxMS0xMzItOTMtMTQxLmNsaWVudC5waWthcmEubmUuanA=",
  "iPhone-Apple-iPhone / iOS-17.6.1 / Google-367.0.752095380": "aVBob25lLUFwcGxlLWlQaG9uZSAvIGlPUy0xNy42LjEgLyBHb29nbGUtMzY3LjAuNzUyMDk1Mzgw",
  "D6zol7r": "RDZ6b2w3cg==",
  "4LrRpffy": "NExyUnBmZnk=",
  "126.219.88.117": "MTI2LjIxOS44OC4xMTc=",
  "d28875fb5f0add7c5d9cf922d5d9d9bed12cfc5f333": "ZDI4ODc1ZmI1ZjBhZGQ3YzVkOWNmOTIyZDVkOWQ5YmVkMTJjZmM1ZjMzMw==",
  "softbank126219088117.bbtec.net": "c29mdGJhbmsxMjYyMTkwODgxMTcuYmJ0ZWMubmV0",
  "Safari 18.3/Mac OS X 10.15.7": "U2FmYXJpIDE4LjMvTWFjIE9TIFggMTAuMTUuNw==",
  "118.9.16.2": "MTE4LjkuMTYuMg==",
  "ee6219bb1b6ddc1bb05763b766a376e9445de43aab7": "ZWU2MjE5YmIxYjZkZGMxYmIwNTc2M2I3NjZhMzc2ZTk0NDVkZTQzYWFiNw==",
  "p2131003-ipoe.ipoe.ocn.ne.jp": "cDIxMzEwMDMtaXBvZS5pcG9lLm9jbi5uZS5qcA==",
  "Windows-10 / Firefox-139.0": "V2luZG93cy0xMCAvIEZpcmVmb3gtMTM5LjA=",
  "1PuQhzVN": "MVB1UWh6Vk4=",
  "2iNbclOR": "MmlOYmNsT1I=",
  "101.111.180.186": "MTAxLjExMS4xODAuMTg2",
  "6c2c493eea6045567a7fe783e16b784d723528c30e6": "NmMyYzQ5M2VlYTYwNDU1NjdhN2ZlNzgzZTE2Yjc4NGQ3MjM1MjhjMzBlNg==",
  "h101-111-180-186.hikari.itscom.jp": "aDEwMS0xMTEtMTgwLTE4Ni5oaWthcmkuaXRzY29tLmpw",
  "Chrome Mobile iOS 135.0.7049/iOS 18.5.0": "Q2hyb21lIE1vYmlsZSBpT1MgMTM1LjAuNzA0OS9pT1MgMTguNS4w"
};
// keyMap: プレーン→難読済み、valueMap: 日本語→難読済み
const reverseKeyMap = Object.fromEntries(
    Object.entries(keyMap).map(([plain, obf]) => [obf, plain])
);
const reverseValueMap = Object.fromEntries(
    Object.entries(valueMap).map(([plain, obf]) => [obf, plain])
);

function deobfuscate(obj) {
    if (typeof obj === 'string') {
        return reverseValueMap[obj] || obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(deobfuscate);
    }
    if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (const [k, v] of Object.entries(obj)) {
            const originalKey = reverseKeyMap[k] || k;
            result[originalKey] = deobfuscate(v);
        }
        return result;
    }
    return obj;
}

let jsonData = null;

async function fetchData() {
    const response = await fetch("./manifest/youchuuijinbutsulist.json");
    const obfuscated = await response.json();
    jsonData = deobfuscate(obfuscated);
}

async function searchUser() {
    if (!jsonData) await fetchData();

    // 動作確認ログ
    console.log("復号済み warning-list keys:", Object.keys(jsonData["warning-list"]));
    console.log("復号後データ全体:", jsonData);
    console.log(reverseKeyMap["dXNlcm5hbWU="]); // 期待値: "username"
    console.log(reverseKeyMap["dGFpc2FrdQ=="]); // 期待値: "taisaku"

    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    let found = false;
    for (const category of ["warning-list", "danger-list", "super-danger-list", "blacklist", "hidden"]) {
        const list = jsonData[category];
        if (!list) continue;
        for (const key in list) {
            const person = list[key];
            if (person.username?.toLowerCase().includes(input)) {
                found = true;
                const div = document.createElement("div");
                div.innerHTML = `
                <h3>カテゴリ: ${category}</h3>
                <p>ユーザー名: ${person.username || "なし"}</p>
                <p>フレンドコード: ${person["friend-code"] || "なし"}</p>
                <p>メールアドレス: ${person.email || "なし"}</p>
                <p>ネットワークID: ${person["network-id"] || "なし"}</p>
                <p>ブラウザID: ${person["browser-id"] || "なし"}</p>
                <p>理由: ${person.riyuu || "なし"}</p>
                <p>対策: ${person.taisaku || "なし"}</p>
                `;
                resultDiv.appendChild(div);
            }
        }
    }
    if (!found) {
        resultDiv.innerHTML = "<p>該当する人物は見つかりませんでした。</p>";
    }
}
