let infoWindow = []

// スプレッドシートAPIのURL
const REQUEST_URL = "https://script.google.com/macros/s/AKfycbyU4AbIhyVPz9OJdaxYNZgowuYDPHFNcS3_XvsytNmLCzg2oCSa/exec"

// マーカーを立てる場所名・緯度・経度
let locations = [
{ "rc_kana": "ひおかだいに",  "rc_name": "日岡第二",  "rc_address": "兵庫県加古川市加古川町中津字樋掛388-2",  "lng": "134.850095",  "lat": "34.770854"}, 
{ "rc_kana": "ひおかだいさん",  "rc_name": "日岡第三",  "rc_address": "兵庫県加古川市加古川町大野字穴バリ388-2",  "lng": "134.8525032",  "lat": "34.77349074"}, 
{ "rc_kana": "ひおかだいよん",  "rc_name": "日岡第四",  "rc_address": "兵庫県加古川市加古川町大野字穴バリ388-2",  "lng": "134.8546208",  "lat": "34.77579868"}, 
{ "rc_kana": "ひおか",  "rc_name": "日岡",  "rc_address": "兵庫県加古川市加古川町大野字イトミ203-4",  "lng": "134.8561799",  "lat": "34.77752217"}, 
{ "rc_kana": "おおのにし",  "rc_name": "大野西",  "rc_address": "兵庫県加古川市加古川町大野字早瀬1155-3",  "lng": "134.8578001",  "lat": "34.77926162"}, 
{ "rc_kana": "みやのした",  "rc_name": "宮ノ下",  "rc_address": "兵庫県加古川市加古川町大野字大町50-2",  "lng": "134.8590729",  "lat": "34.78050569"}, 
{ "rc_kana": "つりばし",  "rc_name": "釣橋",  "rc_address": "兵庫県加古川市神野町西ノ山字迎野248-2",  "lng": "134.8664236",  "lat": "34.78550002"}, 
{ "rc_kana": "かんのだいいち",  "rc_name": "神野第一",  "rc_address": "兵庫県加古川市神野町神野字茶ノ木1648-3",  "lng": "134.8725488",  "lat": "34.78995541"}, 
{ "rc_kana": "かんのだいに",  "rc_name": "神野第二",  "rc_address": "兵庫県加古川市神野町下西条字渡り上り146-3",  "lng": "134.8762811",  "lat": "34.79056709"}, 
{ "rc_kana": "かんのえきにし",  "rc_name": "神野駅西",  "rc_address": "兵庫県加古川市神野町西条字中川原610-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しもさいじょう",  "rc_name": "下西条",  "rc_address": "兵庫県加古川市神野町下西条字山崎804-9",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かんのだいさん",  "rc_name": "神野第三",  "rc_address": "兵庫県加古川市神野町下西条字山崎763",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかさいじょう",  "rc_name": "中西条",  "rc_address": "兵庫県加古川市八幡町中西条字城山930-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひらまつ",  "rc_name": "平松",  "rc_address": "兵庫県加古川市八幡町中西条字岩ノ上906-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかさいじょうだいいち",  "rc_name": "中西条第一",  "rc_address": "兵庫県加古川市八幡町中西条字古川通り839",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかさいじょうだいに",  "rc_name": "中西条第二",  "rc_address": "兵庫県加古川市八幡町中西条字外開719-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かみさいじょう",  "rc_name": "上西条",  "rc_address": "兵庫県加古川市八幡町上西条字開1073-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ふなまちだいに",  "rc_name": "船町第二",  "rc_address": "兵庫県加古川市八幡町船町字辻外165-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "くにかね",  "rc_name": "国包",  "rc_address": "兵庫県加古川市上荘町国包字土堤外846",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いのくちだいいち",  "rc_name": "井之口第一",  "rc_address": "兵庫県加古川市上荘町井之口字南浦434-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いのくちだいに",  "rc_name": "井之口第二",  "rc_address": "兵庫県加古川市上荘町井之口字山茶前312-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いのくち",  "rc_name": "井之口",  "rc_address": "兵庫県加古川市上荘町井之口字堀垣内331-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いのくちだいさん",  "rc_name": "井之口第三",  "rc_address": "兵庫県加古川市上荘町井之口字上条135-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きびただいいち",  "rc_name": "黍田第一",  "rc_address": "兵庫県小野市黍田町黍田字岡ノ垣内537-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きびただいさん",  "rc_name": "黍田第三",  "rc_address": "兵庫県小野市黍田町黍田字屋敷田664-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きびただいよん",  "rc_name": "黍田第四",  "rc_address": "兵庫県小野市下来住町字下野723-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかむらだいいち",  "rc_name": "中村第一",  "rc_address": "兵庫県小野市下来住町字田中前883-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかむらだいに",  "rc_name": "中村第二",  "rc_address": "兵庫県小野市下来住町字田中前940-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかむらだいさん",  "rc_name": "中村第三",  "rc_address": "兵庫県小野市下来住町字松ヶ内965-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たかた",  "rc_name": "高田",  "rc_address": "兵庫県小野市下来住町字屋形1194-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ふかた",  "rc_name": "深田",  "rc_address": "兵庫県小野市下来住町字深田749-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ふなもとだいいち",  "rc_name": "船本第一",  "rc_address": "兵庫県小野市下来住町字三反田890-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしわき",  "rc_name": "西脇",  "rc_address": "兵庫県小野市阿形町字山林下320-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しま",  "rc_name": "嶋",  "rc_address": "兵庫県小野市栗生町字嶋田1714-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "もりおか",  "rc_name": "森岡",  "rc_address": "兵庫県小野市栗生町字栗生城1195-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ちょうだ",  "rc_name": "丁田",  "rc_address": "兵庫県小野市栗生町字アラゴ1011-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "あわしま",  "rc_name": "粟島",  "rc_address": "兵庫県小野市栗生町字田井814",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ほうじょうだいに",  "rc_name": "北条第二",  "rc_address": "兵庫県小野市栗生町字北条376-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いけむかい",  "rc_name": "池向",  "rc_address": "兵庫県小野市栗生町字高堰425-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしもり",  "rc_name": "西森",  "rc_address": "兵庫県小野市三和町字カト川569-6",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかじま",  "rc_name": "中島",  "rc_address": "兵庫県小野市三和町字畑ノ下777-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかた",  "rc_name": "中田",  "rc_address": "兵庫県小野市新部町字仲田938-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かわいにし",  "rc_name": "河合西",  "rc_address": "兵庫県小野市新部町字西久保田645-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "りきまんおもて",  "rc_name": "力万表",  "rc_address": "兵庫県小野市新部町字力万468-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしむらみなみ",  "rc_name": "西村南",  "rc_address": "兵庫県小野市河合西町字城成281-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしむら",  "rc_name": "西村",  "rc_address": "兵庫県小野市河合西町字阿東27-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やまつ",  "rc_name": "矢松",  "rc_address": "兵庫県小野市河合中町字都宿垣内1045-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "とねがいけ",  "rc_name": "トネガ池",  "rc_address": "兵庫県小野市河合中町字大木770-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ばんもん",  "rc_name": "番門",  "rc_address": "兵庫県小野市河合中町字中座901-7",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "じゆうろう",  "rc_name": "十郎",  "rc_address": "兵庫県小野市復井町字十郎363-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "だいもんしょうしゃせいもん",  "rc_name": "大門廠舎正門",  "rc_address": "兵庫県小野市復井町字カワラヤ1295-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "だいもんしょうしゃうらもん",  "rc_name": "大門廠舎裏門",  "rc_address": "兵庫県小野市復井町字西ノ澤1573-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "あつとり",  "rc_name": "安取",  "rc_address": "兵庫県加東市河高字オケ谷2960-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "あつとりきたざか",  "rc_name": "安取北坂",  "rc_address": "兵庫県加東市河高オケ谷2954-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やしろ",  "rc_name": "社",  "rc_address": "兵庫県加東市河高字下ノ池2459-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "こうだかだいに",  "rc_name": "河高第二",  "rc_address": "兵庫県加東市河高字上ノ池尻1924-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "こうだかだいさん",  "rc_name": "河高第三",  "rc_address": "兵庫県加東市河高字西坂1481-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "うにだに",  "rc_name": "宇仁谷",  "rc_address": "兵庫県加東市河高字西ノ前1256-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おちゃやま",  "rc_name": "御茶山",  "rc_address": "兵庫県加東市河高字御茶山658-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やきやま",  "rc_name": "焼山",  "rc_address": "兵庫県加東市河高字中川原63-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やくじんみち",  "rc_name": "厄神道",  "rc_address": "兵庫県加東市下滝野字林之元137-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "くにまさ",  "rc_name": "国正",  "rc_address": "兵庫県加東市下滝野字下之山913-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしむらだいに",  "rc_name": "西村第二",  "rc_address": "兵庫県加東市下滝野字行里1032-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "こうみょうじみち",  "rc_name": "光明寺道",  "rc_address": "兵庫県加東市下滝野字八之坪1221-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かみたきの",  "rc_name": "上滝野",  "rc_address": "兵庫県加東市上滝野字三反郷893-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやまえ",  "rc_name": "宮前Ａ",  "rc_address": "兵庫県加東市上滝野字梅田849-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かみたきちょう",  "rc_name": "上滝町",  "rc_address": "兵庫県加東市上滝野字滝之端618-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "へんでんしょ",  "rc_name": "変電所",  "rc_address": "兵庫県加東市上滝野字大歳323-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおたに",  "rc_name": "大谷",  "rc_address": "兵庫県加東市上滝野字芝崎248-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たき",  "rc_name": "滝",  "rc_address": "兵庫県加東市上滝野字西長瀬185-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いたば",  "rc_name": "板波",  "rc_address": "兵庫県西脇市板波町字三高710-8",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いたばはかみち",  "rc_name": "板波墓道",  "rc_address": "兵庫県西脇市板波町字西池町468-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いたばだいに",  "rc_name": "板波第二",  "rc_address": "兵庫県西脇市板波町字中垣内598-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いたばだいさん",  "rc_name": "板波第三",  "rc_address": "兵庫県西脇市板波町字北垣内574-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "のむらだいに",  "rc_name": "野村第二",  "rc_address": "兵庫県西脇市野村町字薬師ノ下857-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "のむらだいさん",  "rc_name": "野村第三",  "rc_address": "兵庫県西脇市野村町字八幡垣内1006-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "のむら",  "rc_name": "野村",  "rc_address": "兵庫県西脇市野村町字八幡垣内1054-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "わふだいいち",  "rc_name": "和布第一",  "rc_address": "兵庫県西脇市和布町字山根110-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "わふだいに",  "rc_name": "和布第二",  "rc_address": "兵庫県西脇市堀町字前山199-10",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ほり",  "rc_name": "堀",  "rc_address": "兵庫県西脇市堀町字東河原184-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たかしまだいいち",  "rc_name": "高島第一",  "rc_address": "兵庫県西脇市堀町字東河原192-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たかしまだいさん",  "rc_name": "高島第三",  "rc_address": "兵庫県西脇市高島町字山添239-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しもひえ",  "rc_name": "下比延",  "rc_address": "兵庫県西脇市鹿野町字中ノ垣内430-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しもひえだいに",  "rc_name": "下比延第二",  "rc_address": "兵庫県西脇市鹿野町字五明449-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひえ",  "rc_name": "比延",  "rc_address": "兵庫県西脇市比延町字西川原397-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かみひえ",  "rc_name": "上比延",  "rc_address": "兵庫県西脇市黒田庄町福地字百合661-37",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ふくぢ",  "rc_name": "福地",  "rc_address": "兵庫県西脇市黒田庄町福地字島田610-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおた",  "rc_name": "大田",  "rc_address": "兵庫県西脇市黒田庄町福地字大田358-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かみふくぢ",  "rc_name": "上福地",  "rc_address": "兵庫県西脇市黒田庄町福地字北張田315-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しもおか",  "rc_name": "下岡",  "rc_address": "兵庫県西脇市黒田庄町岡字出口831-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おか",  "rc_name": "岡",  "rc_address": "兵庫県西脇市黒田庄町岡字二ノ門385-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやまえ",  "rc_name": "宮前Ｂ",  "rc_address": "兵庫県西脇市黒田庄町岡字二ノ門377-15",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きただいいち",  "rc_name": "喜多第一",  "rc_address": "兵庫県西脇市黒田庄町喜多字東所242-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きただいに",  "rc_name": "喜多第二",  "rc_address": "兵庫県西脇市黒田庄町喜多字出栗337-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きただいさん",  "rc_name": "喜多第三",  "rc_address": "兵庫県西脇市黒田庄町喜多字東天神546-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まえさか",  "rc_name": "前坂",  "rc_address": "兵庫県西脇市黒田庄町喜多字下曽根937-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まえさかだいに",  "rc_name": "前坂第二",  "rc_address": "兵庫県西脇市黒田庄町喜多字置土居1028-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まえさかだいよん",  "rc_name": "前坂第四",  "rc_address": "兵庫県西脇市黒田庄町前坂字中島1000-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やまはな",  "rc_name": "山鼻",  "rc_address": "兵庫県西脇市黒田庄町前坂字山端1071-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にし",  "rc_name": "西",  "rc_address": "兵庫県西脇市黒田庄町黒田字大年ノ本149-14",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "くろだ",  "rc_name": "黒田",  "rc_address": "兵庫県西脇市黒田庄町黒田字西内1114-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおつぼ",  "rc_name": "大坪",  "rc_address": "兵庫県西脇市黒田庄町黒田字柏木谷1581-42",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "だん",  "rc_name": "段",  "rc_address": "兵庫県西脇市黒田庄町船町字川東706-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まえやま",  "rc_name": "前山",  "rc_address": "兵庫県西脇市黒田庄町小苗字前山587-43",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "こなえだいに",  "rc_name": "小苗第二",  "rc_address": "兵庫県西脇市黒田庄町小苗字前田109-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "こなえ",  "rc_name": "小苗",  "rc_address": "兵庫県西脇市黒田庄町小苗字大森585-27",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "さくらのき",  "rc_name": "桜の木",  "rc_address": "兵庫県丹波市山南町谷川字野田775-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "くげむら",  "rc_name": "久下村",  "rc_address": "兵庫県丹波市山南町谷川字柳ノ本571-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たにがわ",  "rc_name": "谷川",  "rc_address": "兵庫県丹波市山南町谷川字柳ノ本528-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かねや",  "rc_name": "金屋",  "rc_address": "兵庫県丹波市山南町谷川字北ノ下361-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しもい",  "rc_name": "下井",  "rc_address": "兵庫県丹波市山南町谷川字下井217-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おかもとだいいち",  "rc_name": "岡本第一",  "rc_address": "兵庫県丹波市山南町岡本字北条183-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みなみはた",  "rc_name": "南畑",  "rc_address": "兵庫県明石市小久保南畑120-25",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかたにだいいち",  "rc_name": "中谷第一",  "rc_address": "兵庫県明石市藤江字三ツ池981-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "むらみなみだいいち",  "rc_name": "村南第一",  "rc_address": "兵庫県明石市大久保町森田字宅地148-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやのさきだいいち",  "rc_name": "宮の先第一",  "rc_address": "兵庫県明石市大久保町大久保町宮の先955-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやのさきだいさん",  "rc_name": "宮の先第三",  "rc_address": "兵庫県明石市大久保町大久保町宮の先914-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ばんがく",  "rc_name": "板額",  "rc_address": "兵庫県明石市大久保町大久保町字板額309-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みのいけ",  "rc_name": "巳野池",  "rc_address": "兵庫県明石市魚住町金ヶ崎字芦谷164-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "のじひがし",  "rc_name": "野路東",  "rc_address": "兵庫県明石市魚住町金ヶ崎字永長626-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひがしたにがみ",  "rc_name": "東谷上",  "rc_address": "兵庫県明石市魚住町長坂寺字五反田442",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "じにし",  "rc_name": "地西",  "rc_address": "兵庫県明石市魚住町長坂寺字越前259-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "むかいやまにし",  "rc_name": "向山西",  "rc_address": "兵庫県明石市魚住町中尾字新田609",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やまのかみだいに",  "rc_name": "山の神第二",  "rc_address": "兵庫県明石市魚住町西岡字アタマ503-18",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やまのかみだいよん",  "rc_name": "山の神第四",  "rc_address": "兵庫県明石市魚住町西岡字山畑502-7",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いのこだにだいいち",  "rc_name": "猪之方谷第一",  "rc_address": "兵庫県明石市魚住町西岡字戊ノ方谷2177-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "むかいがわだいいち",  "rc_name": "向川第一",  "rc_address": "兵庫県明石市二見町福里字高野161-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "だいどうさとだいに",  "rc_name": "大道里第二",  "rc_address": "兵庫県明石市二見町福里字大道里320-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしかみおか",  "rc_name": "西上岡",  "rc_address": "兵庫県明石市二見町西二見字中上岡2027-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "てっちゅうば",  "rc_name": "鉄鋳場",  "rc_address": "兵庫県播磨町野添字鉄鋳場1701-8",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やくしうらだいに",  "rc_name": "薬師浦第二",  "rc_address": "兵庫県加古川市平岡町土山字南浦978-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しょうぶなか",  "rc_name": "勝負中",  "rc_address": "兵庫県加古川市平岡町土山字勝負881-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しょうぶした",  "rc_name": "勝負下",  "rc_address": "兵庫県加古川市平岡町土山字勝負853-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ばばださん",  "rc_name": "馬場田三",  "rc_address": "兵庫県加古川市平岡町高畑字馬場田686-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ちょうがばやしひがし",  "rc_name": "長ヶ林東",  "rc_address": "兵庫県加古川市平岡町高畑字長林820-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおわりかみ",  "rc_name": "大割上",  "rc_address": "兵庫県加古川市平岡町西谷字大割26-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かみどていち",  "rc_name": "上土堤一",  "rc_address": "兵庫県加古川市平岡町新在家字上戸手1567-8",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひろはたひがし",  "rc_name": "広畑東",  "rc_address": "兵庫県加古川市平岡町新在家字広畑823-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやひがしだいいち",  "rc_name": "宮東第一",  "rc_address": "兵庫県加古川市野口町野口字大坪305-9",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやひがしだいさん",  "rc_name": "宮東第三",  "rc_address": "兵庫県加古川市野口町北野字宮の前352-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "つじひがしかみ",  "rc_name": "辻東上",  "rc_address": "兵庫県加古川市野口町野口字古屋敷416-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "つじひがしした",  "rc_name": "辻東下",  "rc_address": "兵庫県加古川市野口町野口字辻の東855-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "でばりなか",  "rc_name": "出張中",  "rc_address": "兵庫県加古川市東神吉町西井之口字出張885-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たなだかみ",  "rc_name": "棚田上",  "rc_address": "兵庫県加古川市米田町平津字谷田231-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いちのつぼ",  "rc_name": "一の坪",  "rc_address": "兵庫県高砂市米田町神瓜字一の坪106-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "あずまがわ",  "rc_name": "東川",  "rc_address": "兵庫県高砂市米田町島字才田47-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まつもとにし",  "rc_name": "松本西",  "rc_address": "兵庫県高砂市阿弥陀町魚橋字壱丁田323-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おのしたひがし",  "rc_name": "尾の下東",  "rc_address": "兵庫県高砂市阿弥陀町魚橋字茶屋前502-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いけざきひがし",  "rc_name": "池崎東",  "rc_address": "兵庫県高砂市阿弥陀町魚橋字池崎1042-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "むかいおきひがし",  "rc_name": "向沖東",  "rc_address": "兵庫県高砂市阿弥陀町南池字庄境12-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "あみだ",  "rc_name": "阿弥陀",  "rc_address": "兵庫県高砂市阿弥陀町阿弥陀字南出口1365-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たかおひがし",  "rc_name": "高尾東",  "rc_address": "兵庫県高砂市阿弥陀町字高尾東1749-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "むらみなみいち",  "rc_name": "村南一",  "rc_address": "兵庫県高砂市阿弥陀町字寺ノ前2845-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かなげだ",  "rc_name": "金ケ田",  "rc_address": "兵庫県高砂市阿弥陀町阿弥陀1丁目2556-2",  "lng": "134.780077",  "lat": "34.793637"}, 
{ "rc_kana": "ほっけはらいち",  "rc_name": "法華原一",  "rc_address": "兵庫県姫路市別所町小林字法ヶ原337-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "くろばたかみ",  "rc_name": "黒畑上",  "rc_address": "兵庫県姫路市別所町北宿字堂田1126-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひがしたがみ",  "rc_name": "東田上",  "rc_address": "兵庫県垂水区西舞子2-3-2",  "lng": "135.030432",  "lat": "34.637025"}, 
{ "rc_kana": "にしかわしも",  "rc_name": "西川下",  "rc_address": "兵庫県垂水区西舞子5-1-7",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおたにがみこう",  "rc_name": "大谷上甲",  "rc_address": "兵庫県垂水区西舞子6丁目",  "lng": "135.024821",  "lat": "34.642752"}, 
{ "rc_kana": "いちのてにし",  "rc_name": "一の手西",  "rc_address": "兵庫県須磨区松風町7-1-8",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "りきゅうみち",  "rc_name": "離宮道",  "rc_address": "兵庫県須磨区行幸2-2-14",  "lng": "135.121587",  "lat": "34.644828"}, 
{ "rc_kana": "にしてんじん",  "rc_name": "西天神",  "rc_address": "兵庫県須磨区須磨浦通り2-1-30",  "lng": "135.112963",  "lat": "34.643123"}, 
{ "rc_kana": "やどのみちうえ",  "rc_name": "宿道上",  "rc_address": "兵庫県須磨区須磨浦2-3-20",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ちもり",  "rc_name": "千守",  "rc_address": "兵庫県須磨区須磨浦3-3-11",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "すまうら",  "rc_name": "須磨浦",  "rc_address": "兵庫県須磨区須磨浦6-1-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしのぶすえ",  "rc_name": "西延末",  "rc_address": "兵庫県姫路市西延末字加々杭392-11",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かぶとやま",  "rc_name": "胄山",  "rc_address": "兵庫県姫路市西延末字胄341-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かぶとやまに",  "rc_name": "胄山弐",  "rc_address": "兵庫県姫路市西延末字伏田203-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にししょうひがし",  "rc_name": "西庄東",  "rc_address": "兵庫県姫路市西庄字九堀121-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にししょうにし",  "rc_name": "西庄西",  "rc_address": "兵庫県姫路市西庄字九堀121-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "はっちょう",  "rc_name": "八町",  "rc_address": "兵庫県姫路市西庄字九堀154-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まえかわいち",  "rc_name": "前川一",  "rc_address": "兵庫県姫路市土山四丁目630-2",  "lng": "134.669186",  "lat": "34.832388"}, 
{ "rc_kana": "まえかわ",  "rc_name": "前川",  "rc_address": "兵庫県姫路市土山四丁目648-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやのまえ",  "rc_name": "宮の前（1）",  "rc_address": "兵庫県姫路市土山四丁目545-2",  "lng": "134.669186",  "lat": "34.832388"}, 
{ "rc_kana": "みやのにし",  "rc_name": "宮の西",  "rc_address": "兵庫県姫路市土山六丁目744-2",  "lng": "134.665659",  "lat": "34.833083"}, 
{ "rc_kana": "わたしょ",  "rc_name": "綿所",  "rc_address": "兵庫県姫路市土山七丁目831-3",  "lng": "134.665795",  "lat": "34.836685"}, 
{ "rc_kana": "べっしょ",  "rc_name": "別所",  "rc_address": "兵庫県姫路市東今宿三丁目781-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なわてのした",  "rc_name": "縄手の下",  "rc_address": "兵庫県姫路市西今宿一丁目626-6",  "lng": "134.657287",  "lat": "34.841737"}, 
{ "rc_kana": "ての",  "rc_name": "手野",  "rc_address": "兵庫県姫路市下手野字梅ヶ坪374-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやまえ",  "rc_name": "宮前",  "rc_address": "兵庫県姫路市下手野字内田355-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "うちだ",  "rc_name": "内田",  "rc_address": "兵庫県姫路市下手野字内田340-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "むこうはた",  "rc_name": "向畑",  "rc_address": "兵庫県姫路市下手野字向畑786-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "とおやま",  "rc_name": "遠山",  "rc_address": "兵庫県姫路市青山字南上野田111-7",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "とりて",  "rc_name": "取手",  "rc_address": "兵庫県姫路市飾西字下地垣内599-12",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かわはらだ",  "rc_name": "川原田",  "rc_address": "兵庫県姫路市飾西字川原田439-8",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかぞえ",  "rc_name": "中添",  "rc_address": "兵庫県姫路市飾西字中添496-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "さんたんちょう",  "rc_name": "三反長",  "rc_address": "兵庫県姫路市飾西字三反長265-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ながのいけ",  "rc_name": "長の池",  "rc_address": "兵庫県姫路市飾西字大平745-39",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しじゅうまち",  "rc_name": "四十町",  "rc_address": "兵庫県姫路市飾西字長尾四十町577-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "あいの",  "rc_name": "相野",  "rc_address": "兵庫県姫路市飾西字高田317-6",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしわき",  "rc_name": "西脇",  "rc_address": "兵庫県姫路市西脇字構の内444-8",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "がっこうまえ",  "rc_name": "学校前",  "rc_address": "兵庫県姫路市西脇字構の内428-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "てらにし",  "rc_name": "寺西",  "rc_address": "兵庫県姫路市西脇字構の内522-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "さんまい",  "rc_name": "三味",  "rc_address": "兵庫県姫路市西脇字構の内607-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しんてらもん",  "rc_name": "新寺門",  "rc_address": "兵庫県姫路市西脇字池の下810-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まるやま",  "rc_name": "丸山",  "rc_address": "兵庫県姫路市西脇字鷹の子1582-9",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "はやしだがわ",  "rc_name": "林田川",  "rc_address": "兵庫県たつの市龍野町未政字向川原249-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "すえまさ",  "rc_name": "末政",  "rc_address": "兵庫県たつの市龍野町未政字藪下149-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかむらだいいち",  "rc_name": "中村第一",  "rc_address": "兵庫県たつの市龍野町中村字宮川232-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかむらだいに",  "rc_name": "中村第二",  "rc_address": "兵庫県たつの市龍野町中村字向田256-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかむらだいさん",  "rc_name": "中村第三",  "rc_address": "兵庫県たつの市龍野町中村字向田284-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "とみなが",  "rc_name": "富永",  "rc_address": "兵庫県たつの市龍野町日飼字柿本199-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たっちゅうまえ",  "rc_name": "竜中前",  "rc_address": "兵庫県たつの市龍野町日飼字柿本206-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かたやま",  "rc_name": "片山",  "rc_address": "兵庫県たつの市龍野町日飼字川の上81-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かたやまだいいち",  "rc_name": "片山第一",  "rc_address": "兵庫県たつの市龍野町島田字下山根809-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たかだ",  "rc_name": "高田",  "rc_address": "兵庫県たつの市龍野町島田字高田345-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しまだだいさん",  "rc_name": "島田第三",  "rc_address": "兵庫県たつの市龍野町島田字宝満251-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かみおか",  "rc_name": "神岡",  "rc_address": "兵庫県たつの市神岡町東觜崎字小那田541-4",  "lng": "134.556395",  "lat": "34.881857"}, 
{ "rc_kana": "さようかいどう",  "rc_name": "佐用街道",  "rc_address": "兵庫県たつの市神岡町字大住寺449-3",  "lng": "134.558237",  "lat": "34.889988"}, 
{ "rc_kana": "いぼがわていぼう",  "rc_name": "揖保川堤防",  "rc_address": "兵庫県たつの市新宮町觜崎字天満445-2",  "lng": "134.553619",  "lat": "34.893933"}, 
{ "rc_kana": "きたむらだいに",  "rc_name": "北村第二",  "rc_address": "兵庫県たつの市新宮町北村字車田71-2",  "lng": "134.550644",  "lat": "34.897901"}, 
{ "rc_kana": "かわはら",  "rc_name": "河原",  "rc_address": "兵庫県たつの市新宮町北村字車田122-3",  "lng": "134.550357",  "lat": "34.899099"}, 
{ "rc_kana": "ちはら",  "rc_name": "千原",  "rc_address": "兵庫県たつの市新宮町北村字車田151-2",  "lng": "134.550112",  "lat": "34.900427"}, 
{ "rc_kana": "いのはらいち",  "rc_name": "猪の原一",  "rc_address": "兵庫県たつの市新宮町井野原字竹端694-2",  "lng": "134.550225",  "lat": "34.90586"}, 
{ "rc_kana": "いのはらに",  "rc_name": "猪の原二",  "rc_address": "兵庫県たつの市新宮町井野原字下向川原719-3",  "lng": "134.55026",  "lat": "34.90711"}, 
{ "rc_kana": "たていし",  "rc_name": "立石",  "rc_address": "兵庫県たつの市新宮町井野原字井口941-3",  "lng": "134.550359",  "lat": "34.910788"}, 
{ "rc_kana": "すなご",  "rc_name": "砂子",  "rc_address": "兵庫県たつの市新宮町井野原字上新田1-25",  "lng": "134.550015",  "lat": "34.913177"}, 
{ "rc_kana": "うおよし",  "rc_name": "魚芳",  "rc_address": "兵庫県たつの市新宮町新宮字中河原982-7",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやのまえ",  "rc_name": "宮の前（2）",  "rc_address": "兵庫県たつの市新宮町新宮字元町1044-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やまざきかいどう",  "rc_name": "山崎街道",  "rc_address": "兵庫県たつの市新宮町新宮字元町1054-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しんぐうさん",  "rc_name": "新宮三",  "rc_address": "兵庫県たつの市新宮町新宮字元町1050-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きゅうやまざきかいどう",  "rc_name": "旧山崎街道",  "rc_address": "兵庫県たつの市新宮町新宮字新町575-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおとり",  "rc_name": "大鳥",  "rc_address": "兵庫県たつの市新宮町新宮字境田204-7",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひらのだいに",  "rc_name": "平野第二",  "rc_address": "兵庫県たつの市新宮町平野字丁田397-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひらのだいさん",  "rc_name": "平野第三",  "rc_address": "兵庫県たつの市新宮町平野字門田665-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "でぢゃや",  "rc_name": "出茶屋",  "rc_address": "兵庫県たつの市新宮町平野字岸ノ下820-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "のうちだいいち",  "rc_name": "能地第一",  "rc_address": "兵庫県たつの市新宮町能地字バントメ128-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ふくす",  "rc_name": "福栖",  "rc_address": "兵庫県たつの市新宮町福栖字森本678-6",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かない",  "rc_name": "金井",  "rc_address": "兵庫県たつの市新宮町千本字下河原2280-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "せんぼんかいどう",  "rc_name": "千本街道",  "rc_address": "兵庫県たつの市新宮町千本字出口1948-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "せんぼんだいに",  "rc_name": "千本第二",  "rc_address": "兵庫県たつの市新宮町千本字南1863-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおうど",  "rc_name": "大宇登",  "rc_address": "兵庫県たつの市新宮町千本字大宇登12-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひろこげ",  "rc_name": "広芝",  "rc_address": "兵庫県たつの市新宮町栗町字岡の下164-7",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まちや",  "rc_name": "町屋",  "rc_address": "兵庫県たつの市新宮町栗町字岡の下66-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やのはらだいに",  "rc_name": "矢野原第二",  "rc_address": "兵庫県たつの市新宮町鍛冶屋字小別当477-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "こたにだいに",  "rc_name": "小谷第二",  "rc_address": "兵庫県たつの市新宮町下莇原字小谷284-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "のうたに",  "rc_name": "能谷",  "rc_address": "兵庫県佐用町三日月字上河原1824-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いのたに",  "rc_name": "猪谷",  "rc_address": "兵庫県佐用町三日月字向1716-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしだ",  "rc_name": "西田",  "rc_address": "兵庫県佐用町三日月字西田1631-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ちゃや",  "rc_name": "茶屋",  "rc_address": "兵庫県佐用町三日月字折口987-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みかづき",  "rc_name": "三日月",  "rc_address": "兵庫県佐用町乃井野字赤社1573-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "のむらだいいち",  "rc_name": "野村第一",  "rc_address": "兵庫県佐用町乃井野字赤社1496-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いちのうえ",  "rc_name": "市の上",  "rc_address": "兵庫県佐用町末広字南木の上163-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しんじゅく",  "rc_name": "新宿",  "rc_address": "兵庫県佐用町末広字前田302-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "すえひろ",  "rc_name": "末広",  "rc_address": "兵庫県佐用町末広字樋の元900-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "だいいちおさだ",  "rc_name": "第一長田",  "rc_address": "兵庫県佐用町末広字後谷1401-98",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ほうぞうじ",  "rc_name": "宝蔵寺",  "rc_address": "兵庫県佐用町土井字下長田44-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "だいにどい",  "rc_name": "第二土居",  "rc_address": "兵庫県佐用町土井字下川原476-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおやまだに",  "rc_name": "大山谷",  "rc_address": "兵庫県佐用町佐用字大坪3404-4",  "lng": "134.358161",  "lat": "34.995576"}, 
{ "rc_kana": "ましまだ",  "rc_name": "間島田",  "rc_address": "兵庫県佐用町佐用字間島田2896-9",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やまひら",  "rc_name": "山平",  "rc_address": "兵庫県佐用町佐用字山平2494-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まえだ",  "rc_name": "前田",  "rc_address": "兵庫県佐用町佐用字前田2388-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおつぼ",  "rc_name": "大坪",  "rc_address": "兵庫県佐用町佐用字前田2377-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "はるくさだいいち",  "rc_name": "春草第一",  "rc_address": "兵庫県佐用町山脇字ソウ木谷20-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やまわきだいに",  "rc_name": "山脇第二",  "rc_address": "兵庫県佐用町山脇字前川原533-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やまわきだいさん",  "rc_name": "山脇第三",  "rc_address": "兵庫県佐用町山脇字才田1068-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "はやせだいいち",  "rc_name": "早瀬第一",  "rc_address": "兵庫県佐用町山脇字浜河原1206-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "はやせだいに",  "rc_name": "早瀬第二",  "rc_address": "兵庫県佐用町早瀬字四拾代81-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にい",  "rc_name": "仁位",  "rc_address": "兵庫県佐用町仁位字岡631-6",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "こうづき",  "rc_name": "上月",  "rc_address": "兵庫県佐用町上月字小山ヶ鼻509-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "こひやま",  "rc_name": "小日山",  "rc_address": "兵庫県佐用町力万字西畑239-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "りきまん",  "rc_name": "力万",  "rc_address": "兵庫県佐用町西大畠字竹田1-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なかがわらに",  "rc_name": "中川原二",  "rc_address": "兵庫県姫路市別所町別所字西芝崎799-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ごたんつぼに",  "rc_name": "五反坪二",  "rc_address": "兵庫県姫路市御国野町御着字深見210-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "よこたにし",  "rc_name": "横田西",  "rc_address": "兵庫県姫路市御国野町御着字横田432-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "うしどうまえ",  "rc_name": "牛堂前",  "rc_address": "兵庫県姫路市御国野町御着字牛堂前636-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "くりのもり",  "rc_name": "栗の森",  "rc_address": "兵庫県姫路市岡田字北の町625-6",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たなだ",  "rc_name": "棚田",  "rc_address": "兵庫県姫路市町の坪字棚田170-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まめだだいさん",  "rc_name": "豆田第三",  "rc_address": "兵庫県姫路市町の坪字豆田493-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いけのしただいいち",  "rc_name": "池の下第一",  "rc_address": "兵庫県姫路市苫編字池の下41-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "むらまえだいいち",  "rc_name": "村前第一",  "rc_address": "兵庫県姫路市苫編字村前184-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおのだいいち",  "rc_name": "大野第一",  "rc_address": "兵庫県姫路市飾磨区付城字大野68-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かすが",  "rc_name": "春日",  "rc_address": "兵庫県姫路市飾磨区山崎字村東311-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "はいふ",  "rc_name": "配賦",  "rc_address": "兵庫県姫路市広畑区才字西配賦663-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひがしはいふだいに",  "rc_name": "東配賦第二",  "rc_address": "兵庫県姫路市広畑区才字西配賦653-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いしだ",  "rc_name": "石田",  "rc_address": "兵庫県姫路市広畑区才字上石田1008-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "とみつ",  "rc_name": "富津",  "rc_address": "兵庫県姫路市広畑区才字富津107-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まちだ",  "rc_name": "町田",  "rc_address": "兵庫県姫路市広畑区則直字八反町52-2",  "lng": "134.6177634",  "lat": "34.81024443"}, 
{ "rc_kana": "つつみのしたいち",  "rc_name": "堤の下壱",  "rc_address": "兵庫県姫路市勝原区熊見字堤の下407",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ごたんだに",  "rc_name": "五反田弐",  "rc_address": "兵庫県姫路市勝原区山戸字五反長52-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ごたんださん",  "rc_name": "五反田参",  "rc_address": "兵庫県姫路市勝原区山戸字五反長56-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かみのつぼいち",  "rc_name": "上の坪壱",  "rc_address": "兵庫県姫路市勝原区山戸字山戸243-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かみのつぼさん",  "rc_name": "上の坪参",  "rc_address": "兵庫県姫路市勝原区山戸字恵美穂364-1",  "lng": "134.5960505",  "lat": "34.81174919"}, 
{ "rc_kana": "きじおち",  "rc_name": "雉子落",  "rc_address": "兵庫県姫路市勝原区朝日谷字雉子落233-1",  "lng": "134.5923626",  "lat": "34.81246574"}, 
{ "rc_kana": "いわがつぼ",  "rc_name": "岩ケ坪",  "rc_address": "兵庫県姫路市網干区和久字岩ヶ坪426-4",  "lng": "134.5863709",  "lat": "34.8138098"}, 
{ "rc_kana": "ちゃのき",  "rc_name": "茶ノ木",  "rc_address": "兵庫県姫路市網干区高田字茶の木362-1",  "lng": "134.5820931",  "lat": "34.8148524"}, 
{ "rc_kana": "かきのつぼ",  "rc_name": "柿の坪",  "rc_address": "兵庫県揖保郡太子町糸井字柿ヶ坪308-1",  "lng": "134.5802004",  "lat": "34.8152834"}, 
{ "rc_kana": "ふなだい",  "rc_name": "船代",  "rc_address": "兵庫県揖保郡太子町船代字稲荷66-22",  "lng": "134.559974",  "lat": "34.818912"}, 
{ "rc_kana": "しもがはらさん",  "rc_name": "下河原三",  "rc_address": "兵庫県揖保郡太子町船代字下河原100-1",  "lng": "134.557298",  "lat": "34.819362"}, 
{ "rc_kana": "むらひがし",  "rc_name": "村東",  "rc_address": "兵庫県たつの市揖保町東用字村東402-1",  "lng": "134.547927",  "lat": "34.821618"}, 
{ "rc_kana": "きたかきうち",  "rc_name": "北垣内",  "rc_address": "兵庫県たつの市揖保町西構字今木239-7",  "lng": "134.541227",  "lat": "34.824995"}, 
{ "rc_kana": "らいこうじ",  "rc_name": "来光寺",  "rc_address": "兵庫県たつの市揖保町今市字才の前36-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "しみず",  "rc_name": "清水",  "rc_address": "兵庫県たつの市揖保川町黍田字口入50-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやのした",  "rc_name": "宮の下",  "rc_address": "兵庫県たつの市揖保川町黍田字宮の下28-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たなだ",  "rc_name": "田灘",  "rc_address": "兵庫県たつの市揖保川町原字田灘562-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いけだいち",  "rc_name": "池田一",  "rc_address": "兵庫県たつの市揖保川町大門字池田459-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "どいさん",  "rc_name": "土居三",  "rc_address": "兵庫県相生市那波野字土居651-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まやよん",  "rc_name": "磨屋四",  "rc_address": "兵庫県相生市那波野字研屋垣内765-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "いえのしたさん",  "rc_name": "家の下三",  "rc_address": "兵庫県相生市池の内字家の下543-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ひがしおか",  "rc_name": "東岡",  "rc_address": "兵庫県相生市大石町字東岡736-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みどりがおか",  "rc_name": "緑ケ丘",  "rc_address": "兵庫県相生市若狭野町入野字横山115-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まえだいち",  "rc_name": "前田一",  "rc_address": "兵庫県相生市若狭野町入野字池の内903-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まえだよん",  "rc_name": "前田四",  "rc_address": "兵庫県相生市若狭野町入野字池の内806-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおまちすじ",  "rc_name": "大町筋",  "rc_address": "兵庫県相生市若狭野町野々字大町筋363-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "にしあげさいち",  "rc_name": "西上佐一",  "rc_address": "兵庫県相生市若狭野町野々字中上在460-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "あまうち",  "rc_name": "雨内",  "rc_address": "兵庫県相生市若狭野町野々字西原88-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おおつぼに",  "rc_name": "大坪二",  "rc_address": "兵庫県相生市若狭野町福井字大坪407-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やきまた",  "rc_name": "焼間田",  "rc_address": "兵庫県相生市若狭野町福井字焼間田65-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "おやまだに",  "rc_name": "小山田二",  "rc_address": "兵庫県相生市若狭野町若狭野字小山田131-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "あまどおりに",  "rc_name": "天通り二",  "rc_address": "兵庫県赤穂市牟礼字天通り321",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "はたに",  "rc_name": "畑二",  "rc_address": "兵庫県赤穂市横尾字畑64-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まつがせ",  "rc_name": "松ヶ瀬 (廃止)",  "rc_address": "兵庫県赤穂市有年横尾(付近)",  "lng": "134.3983228",  "lat": "34.82964016"}, 
{ "rc_kana": "きたはら",  "rc_name": "北原",  "rc_address": "兵庫県赤穂市原字北原191-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かんのんいち",  "rc_name": "観音一",  "rc_address": "兵庫県赤穂市原字観音下1064-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かしはら",  "rc_name": "柏原",  "rc_address": "兵庫県赤穂市有年楢原",  "lng": "134.376716",  "lat": "34.849444"}, 
{ "rc_kana": "みなみに",  "rc_name": "南二",  "rc_address": "兵庫県上郡町釜島字南396-78",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "てらのしたさん",  "rc_name": "寺の下三",  "rc_address": "兵庫県赤穂郡上郡町釜島字寺の下260-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "たかおさん",  "rc_name": "高尾三",  "rc_address": "兵庫県赤穂群上郡町釜島字高畑131-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まとうちいち",  "rc_name": "的打一",  "rc_address": "兵庫県赤穂郡上郡町与井新字的打255-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まとうちに",  "rc_name": "的打二",  "rc_address": "兵庫県赤穂郡上郡町与井新字的打204-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ばばさん",  "rc_name": "馬場参",  "rc_address": "兵庫県赤穂郡上郡町与井字東門553-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みやのした",  "rc_name": "宮の下",  "rc_address": "兵庫県赤穂郡上郡町与井字長通268-5",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "てらまえいち",  "rc_name": "寺前一",  "rc_address": "兵庫県赤穂郡上郡町与井字大倉174-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ふるやしきいち",  "rc_name": "古屋敷一",  "rc_address": "兵庫県赤穂郡上郡町竹万字古屋敷319-1",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "やまのさと",  "rc_name": "山の里",  "rc_address": "兵庫県赤穂郡上郡町山の里字下神田2362-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "はしりあがり",  "rc_name": "走り上り",  "rc_address": "兵庫県赤穂郡上郡町船坂字五反田82-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "むぎじりのまえ",  "rc_name": "麦尻の前",  "rc_address": "兵庫県赤穂郡上郡町船坂字麦尻前297-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "さいほうじ",  "rc_name": "西方寺",  "rc_address": "兵庫県赤穂郡上郡町船坂字コハカ免707",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なしがはらこくどう",  "rc_name": "梨ケ原国道",  "rc_address": "兵庫県赤穂郡上郡町梨ヶ原字尾の鼻104",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "なば",  "rc_name": "那波",  "rc_address": "兵庫県相生市那波字深辺1888-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "はまいちだいに",  "rc_name": "浜市第二",  "rc_address": "兵庫県赤穂市坂越字寺内314-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まなご",  "rc_name": "砂子",  "rc_address": "兵庫県赤穂市坂越字茶木内99-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きたのなかだいに",  "rc_name": "北野中第二",  "rc_address": "兵庫県赤穂市北野中字瓦師289-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きたのなかだいさん",  "rc_name": "北野中第三",  "rc_address": "兵庫県赤穂市北野中字新田402-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "きたのなかだいよん",  "rc_name": "北野中第四",  "rc_address": "兵庫県赤穂市南野中字島田166-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みなみのなかだいいち",  "rc_name": "南野中第一",  "rc_address": "兵庫県赤穂市南野中字島田203-19",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みなみのなかだいに",  "rc_name": "南野中第二",  "rc_address": "兵庫県赤穂市南野中字島田251-2",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かりやだいいち",  "rc_name": "加里屋第一",  "rc_address": "兵庫県赤穂市中広字別所108-11",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かりやだいさん",  "rc_name": "加里屋第三",  "rc_address": "兵庫県赤穂市加里屋字中州22-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "かりやだいよん",  "rc_name": "加里屋第四",  "rc_address": "兵庫県赤穂市加里屋字岩453-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "みつひもとだいいち",  "rc_name": "三ツ樋元第一",  "rc_address": "兵庫県赤穂市新田字三ツ樋元999-6",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "まえだ",  "rc_name": "前田",  "rc_address": "兵庫県赤穂市鷆和字古浜623",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ののうちだいに",  "rc_name": "野々内第二",  "rc_address": "兵庫県赤穂市鷆和字野々内1121-3",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ののうちだいよん",  "rc_name": "野々内第四",  "rc_address": "兵庫県赤穂市鷆和字野々内1096-4",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ののうちだいご",  "rc_name": "野々内第五",  "rc_address": "兵庫県赤穂市鷆和字野々内1079-26",  "lng": "0",  "lat": "0"}, 
{ "rc_kana": "ふくうらだいいち",  "rc_name": "福浦第一",  "rc_address": "兵庫県赤穂市福浦字東木場3103-8",  "lng": "134.329729",  "lat": "34.746761"}
];
  // 空白部分を避けるコードを書く
 for (let i = 0; i < locations.length; i++) {
   locations[i].lat = parseFloat(locations[i].lat);
   locations[i].lng = parseFloat(locations[i].lng);
 }

let mapInfo;

function initMap() {
  // 地図の作成
  mapInfo = new google.maps.LatLng({
    lat: locations[0]['lat'],
    lng: locations[0]['lng']
  }); // 緯度経度のデータ作成

  map = new google.maps.Map(document.getElementById('map'), { // #mapに地図を埋め込む
    center: mapInfo, // 地図の中心を指定
    zoom: 11 // 地図のズームを指定
  });

  // Styleのオプション（名前非表示など）
  const styleOptions = [{
    featureType: 'all',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }];
  const mapType = new google.maps.StyledMapType(styleOptions);
  map.mapTypes.set('noText', mapType);
  map.setMapTypeId('noText');

  const markers = locations.map(function (locations, i) {
    return new google.maps.Marker({
      position: locations,
      // ラベルの表示(今回はInfoWindowがあるためなしでもOK？)
      // label: locations.rc_name,
      icon: {
        url: 'img/icon/humikiri.png'
      }
    });
  });

  for (let i = 0; i < locations.length; i++) {
    const mapContent =
      `<div class="map">
      <p style="margin:0;padding:0;">${locations[i]['rc_kana']}</p>
      <h1 style="margin:0;padding:0;">${locations[i]['rc_name']}</h1>
      <ons-button modifier="quiet" id="datail" style="margin:0;padding:0;">詳細をみる</ons-button></div>`;
    infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
      content: mapContent // 吹き出しに表示する内容
    });
    markerEvent(i); // マーカーにクリックイベントを追加
    function markerEvent(i) {
      markers[i].addListener('click', function () { // マーカーをクリックしたとき
        // クリックされたマーカーの情報を保持
        infoWindow[i].open(map, markers[i]); // 吹き出しの表示
        // 前のマーカーを消す
      });
    }
 }

  const markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  }, { style: [{ color: 'white'}] });
}

// Ajex通信用の関数/

function get(REQUEST_URL) {

  return new Promise(function (resolve) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', REQUEST_URL);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let result = xhr;
        resolve(result.responseText);
      } else if (xhr.status !== 200) {
        reject('エラーです！');
      }
    }
  });
}

get(REQUEST_URL)
  .then(function (response) {
    console.log("Scucess!", response);
  },function (error) {
    //エラー処理を記述する
    console.error(error);

  })