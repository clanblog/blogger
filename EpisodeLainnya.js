//<![CDATA[
/** @type {!Array} */
var _0x81ec = ['<ul class="rel-container">', "write", "entry", "feed", "$t", "title", "length", "link", "replies", "rel", "text/html", "type", "href", "alternate", "url", "media$thumbnail", "content", "<img", "indexOf", 'src="', '"', "substr", "", "http://2.bp.blogspot.com/-C3Mo0iKKiSw/VGdK808U7rI/AAAAAAAAAmI/W7Ae_dsEVAE/s1600/no-thumb.png", "published", "substring", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", '<li class="rel-posts-list">', '<div class="rel-img"><a href="', 
'"><img class="rel-post-img" src="', '"/></a></div>', '<div class="rel-post-title"><a href="', '" target ="_top">', "</a></div>", "summary", '<div class="rel-summary">', "replace", " ", "lastIndexOf", "...", "</div>", '<div class="rel-posts-inf">', ", ", " <br> ", "1 Comments", "1 Comment", "0 Comments", "No Comments", '<a href="', '">', "</a>", "</li>", "</ul>"];
/** @type {number} */
var jmh_post = 100;
img_post = false, comment_post = false, kpn_post = true, isi_posting = false, isi_post = 70;
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function reltd_post(canCreateDiscussions) {
  document[_0x81ec[1]](_0x81ec[0]);
  /** @type {number} */
  var signedTransactionsCounter = 0;
  for (; signedTransactionsCounter < jmh_post; signedTransactionsCounter++) {
    var _0xd64fx5;
    var payload = canCreateDiscussions[_0x81ec[3]][_0x81ec[2]][signedTransactionsCounter];
    var _0xd64fx7 = payload[_0x81ec[5]][_0x81ec[4]];
    if (signedTransactionsCounter == canCreateDiscussions[_0x81ec[3]][_0x81ec[2]][_0x81ec[6]]) {
      break;
    }
    /** @type {number} */
    var fbid = 0;
    for (; fbid < payload[_0x81ec[7]][_0x81ec[6]]; fbid++) {
      if (_0x81ec[8] == payload[_0x81ec[7]][fbid][_0x81ec[9]] && _0x81ec[10] == payload[_0x81ec[7]][fbid][_0x81ec[11]]) {
        var chroma = payload[_0x81ec[7]][fbid][_0x81ec[5]];
        var _0xd64fxa = payload[_0x81ec[7]][fbid][_0x81ec[12]];
      }
      if (_0x81ec[13] == payload[_0x81ec[7]][fbid][_0x81ec[9]]) {
        _0xd64fx5 = payload[_0x81ec[7]][fbid][_0x81ec[12]];
        break;
      }
    }
    var e;
    try {
      e = payload[_0x81ec[15]][_0x81ec[14]];
    } catch (h) {
      s = payload[_0x81ec[16]][_0x81ec[4]];
      a = s[_0x81ec[18]](_0x81ec[17]);
      b = s[_0x81ec[18]](_0x81ec[19], a);
      c = s[_0x81ec[18]](_0x81ec[20], b + 5);
      d = s[_0x81ec[21]](b + 5, c - b - 5);
      e = -1 != a && -1 != b && -1 != c && _0x81ec[22] != d ? d : _0x81ec[23];
    }
    var _0xd64fxc = payload[_0x81ec[24]][_0x81ec[4]];
    var chroma = _0xd64fxc[_0x81ec[25]](0, 4);
    var name = _0xd64fxc[_0x81ec[25]](5, 7);
    var _0xd64fxf = _0xd64fxc[_0x81ec[25]](8, 10);
    /** @type {!Array} */
    var w = new Array;
    if (w[1] = _0x81ec[26], w[2] = _0x81ec[27], w[3] = _0x81ec[28], w[4] = _0x81ec[29], w[5] = _0x81ec[30], w[6] = _0x81ec[31], w[7] = _0x81ec[32], w[8] = _0x81ec[33], w[9] = _0x81ec[34], w[10] = _0x81ec[35], w[11] = _0x81ec[36], w[12] = _0x81ec[37], document[_0x81ec[1]](_0x81ec[38]), 1 == img_post && document[_0x81ec[1]](_0x81ec[39] + _0xd64fx5 + _0x81ec[40] + e + _0x81ec[41]), document[_0x81ec[1]](_0x81ec[42] + _0xd64fx5 + _0x81ec[43] + _0xd64fx7 + _0x81ec[44]), _0x81ec[16] in payload) {
      var prefix = payload[_0x81ec[16]][_0x81ec[4]];
    } else {
      if (_0x81ec[45] in payload) {
        prefix = payload[_0x81ec[45]][_0x81ec[4]];
      } else {
        prefix = _0x81ec[22];
      }
    }
    /** @type {!RegExp} */
    var _reEndsWithWhitespace = /<\S[^>]*>/g;
    document[_0x81ec[1]](_0x81ec[46]);
    if (prefix = prefix[_0x81ec[47]](_reEndsWithWhitespace, _0x81ec[22]), 1 == isi_posting) {
      if (prefix[_0x81ec[6]] < isi_post) {
        document[_0x81ec[1]](prefix);
      } else {
        prefix = prefix[_0x81ec[25]](0, isi_post);
        var negativeLeftPos = prefix[_0x81ec[49]](_0x81ec[48]);
        prefix = prefix[_0x81ec[25]](0, negativeLeftPos);
        document[_0x81ec[1]](prefix + _0x81ec[50]);
      }
    }
    var b = _0x81ec[22];
    /** @type {number} */
    var _0xd64fx15 = 0;
    document[_0x81ec[1]](_0x81ec[51]);
    document[_0x81ec[1]](_0x81ec[52]);
    if (1 == kpn_post) {
      b = b + w[parseInt(name, 10)] + _0x81ec[48] + _0xd64fxf + _0x81ec[53] + chroma;
      /** @type {number} */
      _0xd64fx15 = 1;
    }
    if (1 == comment_post) {
      if (1 == _0xd64fx15) {
        b = b + _0x81ec[54];
      }
      if (_0x81ec[55] == chroma) {
        chroma = _0x81ec[56];
      }
      if (_0x81ec[57] == chroma) {
        chroma = _0x81ec[58];
      }
      chroma = _0x81ec[59] + _0xd64fxa + _0x81ec[60] + chroma + _0x81ec[61];
      b = b + chroma;
      /** @type {number} */
      _0xd64fx15 = 1;
    }
    document[_0x81ec[1]](b);
    document[_0x81ec[1]](_0x81ec[51]);
    document[_0x81ec[1]](_0x81ec[62]);
  }
  document[_0x81ec[1]](_0x81ec[63]);
}
;
//]]>
