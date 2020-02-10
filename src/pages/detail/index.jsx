import Taro, { Component } from '@tarojs/taro'
// 引入 WebView 组件
import { WebView, RichText } from '@tarojs/components'

const htmlString = "<div class=\"content-wrapper\"> <div class=\"sp sgl\"> <div class=\"cntr\"> <div class=\"sp-wrap\"> <div class=\"sp-artl\"> <div class=\"sp-left\"> <div class=\"amp-wp-content breadcrumb\"><ul id=\"breadcrumbs\" class=\"breadcrumbs\"><li class=\"item-home\"><a class=\"bread-link bread-home\" href=\"https://gonglue.us/amp\" title=\"Homepage\">Homepage</a></li><li class=\"item-cat item-cat-2\"><a class=\"bread-cat bread-cat-2 bread-cat-健康医药\" href=\"https://gonglue.us/category/health/amp\" title=\"健康医药\">健康医药</a></li></ul></div> <div class=\"amp-category\"> <span>Categories: </span> <span class=\"amp-cat amp-cat-2\"><a href=\"https://gonglue.us/category/health/amp\" title=\"健康医药\">健康医药</a></span> </div> <h2 class=\"amp-post-title\">美国药剂师推荐的骨骼和关节保健品</h2> <div class=\"amp-ad-wrapper amp_ad_5\" oq33swj=\"\" hidden=\"\"><amp-ad class=\"amp-ad-5 i-amphtml-element i-amphtml-notbuilt amp-notbuilt i-amphtml-layout-fixed i-amphtml-layout-size-defined amp-unresolved i-amphtml-unresolved\" type=\"adsense\" width=\"100vw\" height=\"320\" data-ad-client=\"ca-pub-1321851078093530\" data-ad-slot=\"3936314111\" data-auto-format=\"rspv\" data-full-width=\"\" oq33swj=\"\" hidden=\"\" i-amphtml-layout=\"fixed\" style=\"width: 100vw; height: 320px;\"><div overflow=\"\"></div></amp-ad> </div> <div class=\"sp-cnt\"> <div class=\"sp-rl\"> <div class=\"sp-rt\"> <div class=\"cntn-wrp artl-cnt\"> <p>骨骼矿物质密度（bone mineral density、BMD ）是骨骼强度的指标，人体通常在25～35岁达到峰值，之后随着年龄增长，骨密度呈下降趋势（我今年体检的时候就发现骨密度偏低，所以现在要补充钙和维他命D3）。</p> <p>均衡饮食、多摄入高钙食物如牛奶和绿叶蔬菜等，可以减缓骨质流失。此外，一些骨骼和关节保健品也能帮助减缓关节软骨退化、维持关节灵活性以及强化软骨。根据 U.S. News 的数据， Osteo Bi-Flex 是美国药剂师最认可的此类保健品。U.S. News 原文请<a target=\"_blank\" href=\"https://health.usnews.com/health-products/top-rec-bone-joint-strengtheners-16\" rel=\"nofollow\">点击这里</a>；下面是常见品牌的得票数。</p> <h2><strong>美国药剂师推荐的骨骼和关节保健品</strong></h2> <table><tbody><tr><th>品牌</th> <th>得票</th> <th>链接</th> </tr><tr><td>Osteo Bi-Flex</td> <td>75%</td> <td><a target=\"_blank\" rel=\"norewrite\" href=\"https://amzn.to/2O5zDXb\">Amazon</a> / <a target=\"_blank\" rel=\"norewrite\" href=\"https://www.iherb.com/c/osteo-bi-flex?rcode=HEM4573\">iHerb</a></td> </tr><tr><td>Cosamin DS</td> <td>15%</td> <td><a target=\"_blank\" rel=\"norewrite\" href=\"https://amzn.to/2N0fXaR\">Amazon</a> / <a target=\"_blank\" rel=\"norewrite\" href=\"https://www.iherb.com/c/nutramax?rcode=HEM4573\">iHerb</a></td> </tr><tr><td>Schiff Move Free</td> <td>7%</td> <td><a target=\"_blank\" rel=\"norewrite\" href=\"https://amzn.to/2CQOrbk\">Amazon</a> / <a target=\"_blank\" rel=\"norewrite\" href=\"https://www.iherb.com/search?kw=schiff%20move%20free&amp;rcode=HEM4573\">iHerb</a></td> </tr><tr><td>Arthro-7</td> <td>2%</td> <td><a target=\"_blank\" rel=\"norewrite\" href=\"https://amzn.to/2x0vbBU\">Amazon</a></td> </tr><tr><td>Instaflex</td> <td>1%</td> <td><a target=\"_blank\" rel=\"norewrite\" href=\"https://amzn.to/2N1T6M7\">Amazon</a></td> </tr></tbody></table><p>Osteo Bi-Flex 是美国 Nature's Bounty 自然之宝公司旗下专攻关节健康的保健品品牌，产品包括针对关节软骨修复和重生所需要的各类营养素，为与关节炎、关节疼痛、运动损伤等关节损伤有关的健康问题提供营养补充剂，国内一些平台给它起名叫「关节卫士」。它常见的三种配方如下。</p> <h2><strong>Osteo Bi-Flex 常见的三种配方</strong></h2> <table cellspacing=\"0\" cellpadding=\"0\"><thead><tr><th>成分</th> <th>配方一</th> <th>配方二</th> <th>配方三</th> </tr></thead><tbody><tr><td>葡萄糖胺</td> <td>1,500毫克</td> <td>1,500毫克</td> <td>N/A</td> </tr><tr><td>软骨素／MSM</td> <td>275毫克</td> <td>1,100毫克</td> <td>N/A</td> </tr><tr><td>Joint Shield</td> <td>100毫克</td> <td>100毫克</td> <td>100毫克</td> </tr><tr><td>UC-II 骨胶原</td> <td>N/A</td> <td>N/A</td> <td>40毫克</td> </tr><tr><td>维他命D3</td> <td>2,000 IU</td> <td>N/A</td> <td>400 IU</td> </tr><tr><td>维他命C</td> <td>N/A</td> <td>60毫克</td> <td>N/A</td> </tr><tr><td>钠</td> <td>20毫克</td> <td>30毫克</td> <td>N/A</td> </tr><tr><td>锰</td> <td>N/A</td> <td>2毫克</td> <td>N/A</td> </tr><tr><td>特点</td> <td>大量维他命D3</td> <td>大量软骨素／MSM</td> <td>骨胶原</td> </tr><tr><td>链接</td> <td><a target=\"_blank\" rel=\"norewrite\" href=\"https://amzn.to/2wZCcmv\">Amazon</a> / <a target=\"_blank\" rel=\"norewrite\" href=\"https://www.iherb.com/pr/Osteo-Bi-Flex-Joint-Health-Triple-Strength-Vitamin-D-120-Coated-Tablets/66910?rcode=HEM4573\">iHerb</a></td> <td><a target=\"_blank\" rel=\"norewrite\" href=\"https://amzn.to/2x0vEVm\">Amazon</a> / <a target=\"_blank\" rel=\"norewrite\" href=\"https://www.iherb.com/pr/Osteo-Bi-Flex-Joint-Health-Triple-Strength-120-Coated-Tablets/33142?rcode=HEM4573\">iHerb</a></td> <td><a target=\"_blank\" rel=\"norewrite\" href=\"https://amzn.to/2wXu1qU\">Amazon</a> / <a target=\"_blank\" rel=\"norewrite\" href=\"https://www.iherb.com/pr/Osteo-Bi-Flex-Joint-Health-Ease-Advanced-Triple-Action-28-Mini-Tablets/66913?rcode=HEM4573\">iHerb</a></td> </tr></tbody></table><div id=\"attachment_14564\" class=\"wp-caption aligncenter acssad925\"><a target=\"_blank\" rel=\"norewrite\" href=\"https://amzn.to/2wZCcmv\"><amp-img class=\"wp-image-14564 size-medium amp-wp-enforced-sizes i-amphtml-element i-amphtml-layout-intrinsic i-amphtml-layout-size-defined i-amphtml-layout\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-500x490.jpg\" alt=\"美国药剂师推荐的骨骼和关节保健品\" width=\"500\" height=\"490\" srcset=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-500x490.jpg 500w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-300x294.jpg 300w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-768x753.jpg 768w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-640x627.jpg 640w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1.jpg 800w\" layout=\"intrinsic\" i-amphtml-layout=\"intrinsic\"><i-amphtml-sizer class=\"i-amphtml-sizer\"><img alt=\"\" role=\"presentation\" aria-hidden=\"true\" class=\"i-amphtml-intrinsic-sizer\" src=\"data:image/svg+xml;charset=utf-8,<svg height=&quot;490px&quot; width=&quot;500px&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; version=&quot;1.1&quot;/>\"></i-amphtml-sizer><amp-img fallback=\"\" class=\"wp-image-14564 size-medium amp-wp-enforced-sizes i-amphtml-element i-amphtml-layout-intrinsic i-amphtml-layout-size-defined\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-500x490.jpg\" alt=\"美国药剂师推荐的骨骼和关节保健品\" width=\"500\" height=\"490\" srcset=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-500x490.jpg 500w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-300x294.jpg 300w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-768x753.jpg 768w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-640x627.jpg 640w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1.jpg 800w\" layout=\"intrinsic\" i-amphtml-layout=\"intrinsic\"><i-amphtml-sizer class=\"i-amphtml-sizer\"><img alt=\"\" role=\"presentation\" aria-hidden=\"true\" class=\"i-amphtml-intrinsic-sizer\" src=\"data:image/svg+xml;charset=utf-8,<svg height=&quot;490px&quot; width=&quot;500px&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; version=&quot;1.1&quot;/>\"></i-amphtml-sizer></amp-img><img decoding=\"async\" sizes=\"(max-width: 1440px) 500px, 100vw\" alt=\"美国药剂师推荐的骨骼和关节保健品\" srcset=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-500x490.jpg 500w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-300x294.jpg 300w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-768x753.jpg 768w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-640x627.jpg 640w, https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1.jpg 800w\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/09/1-1-500x490.jpg\" class=\"i-amphtml-fill-content i-amphtml-replaced-content\"></amp-img></a><p id=\"caption-attachment-14564\" class=\"wp-caption-text\">Osteo Bi-Flex 三倍强度+维生素D（配方一）</p></div> <ul><li>葡萄糖胺（glucosamine）、软骨素（chondroitin）和 MSM 是骨骼保健品最常见的三种成分，很多同类产品都含有此3种成分。</li> <li>Joint Shield 是&nbsp;Osteo Bi-Flex 产品的专有成分，是一种高浓缩乳香提取物 （Joint Shild 5-Loxin Advanced Boswellia serrata Extract），有生肌止痛的功效，也会被用来治疗跌打损伤和痛经等。</li> <li>UC-II 型胶原蛋白（Undenatured Collagen Type II）<span class=\"case\">也叫原性骨胶原，是构成骨骼和软骨的主要成分，在增加关节灵活性、维持人体运动功能、缓冲人体自身体重和外力对骨骼和关节的压力等方面有重要作用。</span></li> <li>人的身体需要维他命D才能吸收钙。没有足够的维他命D，人体无法从饮食中摄取足够的钙，若是儿童，可能导致佝偻病，若是成人，则容易出现骨质疏松。人体所需钙和维他命D的摄入量可参考<a target=\"_blank\" rel=\"norewrite\" href=\"http://cn.derekyang.us/44.html\">这篇文章</a>。</li> <li>Osteo Bi-Flex 还生产用于关节炎和关节疼痛的止疼药，主要成分是薄荷醇和水杨酸。</li> </ul><p></p><div class=\"embed-card\"> <div class=\"embed-card-info\"><p> <a target=\"_blank\" href=\"https://gonglue.us/14281/amp\"> <span class=\"card-name\">美国药剂师推荐的关节炎和关节疼痛外用药</span> </a> <span class=\"card-excerpt acss1bc2d\">外用镇痛药可能缓解关节炎和关节疼痛，本文介绍一下美国药剂师推荐的品牌。</span> <span class=\"card-controls\"> <span class=\"group-data\"> Derek <wdautohl-customtag style=\"font-weight:bold;color:red;font-size:inherit;display:inline;\" id=\"wdautohl_id_1\" class=\"wdautohl_eWFuZw__\">Yang</wdautohl-customtag></span> <span class=\"group-data\"> 2019-07-29</span> <span class=\"group-data\"> 2 评论</span> <span class=\"group-data\"> <a target=\"_blank\" href=\"https://gonglue.us/14281/amp\">阅读全文</a></span> </span> </p></div> </div><div class=\"embed-card\"> <div class=\"embed-card-info\"><p> <a target=\"_blank\" href=\"https://gonglue.us/36555/amp\"> <span class=\"card-name\">20种常见骨关节炎保健品的功效回顾</span> </a> <span class=\"card-excerpt acss1bc2d\">《英国医学杂志》综述了20种常见骨关节炎保健品的功效，其中9种有「临床重要效果」。</span> <span class=\"card-controls\"> <span class=\"group-data\"> Jia Liu</span> <span class=\"group-data\"> 2019-07-30</span> <span class=\"group-data\"> 0 评论</span> <span class=\"group-data\"> <a target=\"_blank\" href=\"https://gonglue.us/36555/amp\">阅读全文</a></span> </span> </p></div> </div> <h2>其他的几个品牌</h2> <ul><li>Cosamin DS 的主要成分是较大量的葡萄糖胺（1500毫克）+ 较大量的软骨素（1200毫克）+100毫克钠 + 6毫克维他命C + 1毫克锰，跟 Osteo Bi-Flex 的配方二接近。</li> <li>Schiff Move Free 维骨力在华人圈里备受推崇，它的核心成分就是葡萄糖胺、软骨素和 MSM，我们之前专门写过一篇文章，可<a target=\"_blank\" rel=\"norewrite\" href=\"https://gonglue.us/move-free/amp\">点击这里</a>阅读。</li> <li>Arthro-7 隶属于 U.S. Doctors' Clinical 公司，主要成分是骨胶原，官方宣称不含谷蛋白、转基因及贝类。大多数葡萄糖胺提取自虾蟹外壳，因此对海鲜和贝类过敏的人不宜服用，而 Arthro-7 就没有这个问题。当然，市面上也有少数品牌的葡萄糖胺是从真菌或谷物发酵制成，参见<a target=\"_blank\" rel=\"norewrite\" href=\"https://gonglue.us/glucosamine/amp\">这篇文章</a>。</li> <li>Instaflex 的特点是草本配方，主要成分包括：姜黄素（turmeric）200毫克 +&nbsp;白藜芦醇（resveratrol）100毫克 +&nbsp;齿叶乳香（boswellia serrata）100毫克 + UC-II 骨胶原40毫克 + 玻尿酸（hyaluronic acid）5毫克 + 黑胡椒精华5毫克。</li> </ul><p></p><div class=\"embed-card\"> <div class=\"embed-card-info\"><p> <a target=\"_blank\" href=\"https://gonglue.us/16100/amp\"> <span class=\"card-name\">美国常见保健品的功效与注意事项</span> </a> <span class=\"card-excerpt acss1bc2d\">持续更新的保健品知识，参考国立卫生研究院、FDA、Mayo Clinic 等权威信息。</span> <span class=\"card-controls\"> <span class=\"group-data\"> Derek <wdautohl-customtag style=\"font-weight:bold;color:red;font-size:inherit;display:inline;\" id=\"wdautohl_id_2\" class=\"wdautohl_eWFuZw__\">Yang</wdautohl-customtag></span> <span class=\"group-data\"> 2019-09-19</span> <span class=\"group-data\"> 186 评论</span> <span class=\"group-data\"> <a target=\"_blank\" href=\"https://gonglue.us/16100/amp\">阅读全文</a></span> </span> </p></div> </div> <div class=\"embed-card\"> <div class=\"embed-card-info\"><p> <a target=\"_blank\" href=\"https://gonglue.us/28687/amp\"> <span class=\"card-name\">【收藏】美国保健品推荐和攻略</span> </a> <span class=\"card-excerpt acss1bc2d\">美国保健品的种类和品牌都很多，相比中国市场来说更安全可靠，不管是自己用，还是带回国给家人朋友送礼都很好。</span> <span class=\"card-controls\"> <span class=\"group-data\"> Derek <wdautohl-customtag style=\"font-weight:bold;color:red;font-size:inherit;display:inline;\" id=\"wdautohl_id_3\" class=\"wdautohl_eWFuZw__\">Yang</wdautohl-customtag></span> <span class=\"group-data\"> 2019-11-12</span> <span class=\"group-data\"> 15 评论</span> <span class=\"group-data\"> <a target=\"_blank\" href=\"https://gonglue.us/28687/amp\">阅读全文</a></span> </span> </p></div> </div> <div class=\"ampforwp-last-modified-date\"> <p> This post was last modified on 2019-07-29 11:53 PM </p> </div> <div class=\"amp-ad-wrapper amp_ad_4\" oq33swj=\"\" hidden=\"\"><amp-ad class=\"amp-ad-4 i-amphtml-element i-amphtml-notbuilt amp-notbuilt i-amphtml-layout-fixed i-amphtml-layout-size-defined amp-unresolved i-amphtml-unresolved\" type=\"adsense\" data-loading-strategy=\"1\" width=\"100vw\" height=\"320\" data-ad-client=\"ca-pub-1321851078093530\" data-ad-slot=\"7875559124\" data-auto-format=\"rspv\" data-full-width=\"\" oq33swj=\"\" hidden=\"\" i-amphtml-layout=\"fixed\" style=\"width: 100vw; height: 320px;\"><div overflow=\"\"></div></amp-ad> </div><amp-addthis width=\"320\" height=\"92\" data-pub-id=\"ra-5cc8551aa4f16f5c\" data-widget-id=\"cwgj\" class=\"i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout\" i-amphtml-layout=\"fixed\" style=\"width: 320px; height: 92px;\"><div placeholder=\"\" style=\"background-color: rgb(255, 255, 255);\" class=\"amp-hidden\"><amp-img src=\"https://cache.addthiscdn.com/icons/v3/thumbs/32x32/addthis.png\" layout=\"fixed\" width=\"32\" height=\"32\" referrerpolicy=\"origin\" alt=\"AddThis Website Tools\" class=\"i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout\" i-amphtml-layout=\"fixed\" style=\"width: 32px; height: 32px; --loader-delay-offset:8ms !important;\"><img decoding=\"async\" alt=\"AddThis Website Tools\" referrerpolicy=\"origin\" src=\"https://cache.addthiscdn.com/icons/v3/thumbs/32x32/addthis.png\" class=\"i-amphtml-fill-content i-amphtml-replaced-content\"></amp-img></div><iframe frameborder=\"0\" title=\"AddThis Website Tools\" src=\"https://s7.addthis.com/dc/amp-addthis.html\" id=\"cwgj\" pco=\"\" containerclassname=\"\" class=\"i-amphtml-fill-content\"></iframe></amp-addthis> </div> <div class=\"ss-ic\"> </div> <div class=\"amp-author \"> <div class=\"amp-author-image \"> <amp-img src=\"https://secure.gravatar.com/avatar/f6047c3ff843c6824645c4bad9ca60ba?s=60&amp;d=mm&amp;r=g\" width=\"60\" height=\"60\" layout=\"fixed\" class=\"i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout\" i-amphtml-layout=\"fixed\" style=\"width: 60px; height: 60px;\"><img decoding=\"async\" src=\"https://secure.gravatar.com/avatar/f6047c3ff843c6824645c4bad9ca60ba?s=60&amp;d=mm&amp;r=g\" class=\"i-amphtml-fill-content i-amphtml-replaced-content\"></amp-img> </div> <div class=\"author-details \"><span class=\"author-name\"> <a href=\"https://gonglue.us/author/5/amp\" title=\"Jia Liu\"> Jia Liu</a></span><p>Jia Liu, 80后，不会讲东北话的东北人，家有爱搞怪小儿一名。目标 - 希望自己很靠谱。</p> </div> </div> <div class=\"cmts\"> <div class=\"amp-comments\"> <div id=\"comments\" class=\"amp-comments-wrapper\"> <h3><span>View Comments</span></h3> <ul> <li id=\"li-comment-28999\" class=\"comment even thread-even depth-1\"> <article id=\"comment-28999\" class=\"comment-body\"> <footer class=\"comment-meta\"> <amp-img src=\"https://secure.gravatar.com/avatar/d859a140927558d4b0e9f0159864fd81?s=96&amp;d=mm&amp;r=g\" width=\"40\" height=\"40\" layout=\"fixed\" class=\"comment-author-img i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout\" i-amphtml-layout=\"fixed\" style=\"width: 40px; height: 40px;\"><img decoding=\"async\" src=\"https://secure.gravatar.com/avatar/d859a140927558d4b0e9f0159864fd81?s=96&amp;d=mm&amp;r=g\" class=\"i-amphtml-fill-content i-amphtml-replaced-content\"></amp-img> <div class=\"comment-author vcard\"> <b class=\"fn\">Liu</b> <span class=\"says\">says:</span> </div> <div class=\"comment-metadata\"> <a href=\"https://gonglue.us/14472#comment-28999/\"> 2019-04-21 at 8:41 AM </a> </div> </footer> <div class=\"comment-content\"> <p>这篇文章末尾的“ 美国常见保健品功效与注意事项”的链接错误，链接的是“2019年中华人民共和国进境物品表”文章。我非常想看“美国常见保健品功效与注意事项”这篇文章，请问链接在哪里？谢谢🙏</p> </div> </article> </li> <ul class=\"children\"> <li id=\"li-comment-29050\" class=\"comment odd alt depth-2\"> <article id=\"comment-29050\" class=\"comment-body\"> <footer class=\"comment-meta\"> <amp-img src=\"https://secure.gravatar.com/avatar/83c5fc3f25956ffc02306bc37b9474b8?s=96&amp;d=mm&amp;r=g\" width=\"40\" height=\"40\" layout=\"fixed\" class=\"comment-author-img i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout\" i-amphtml-layout=\"fixed\" style=\"width: 40px; height: 40px;\"><img decoding=\"async\" src=\"https://secure.gravatar.com/avatar/83c5fc3f25956ffc02306bc37b9474b8?s=96&amp;d=mm&amp;r=g\" class=\"i-amphtml-fill-content i-amphtml-replaced-content\"></amp-img> <div class=\"comment-author vcard\"> <b class=\"fn\">Derek <wdautohl-customtag style=\"font-weight:bold;color:red;font-size:inherit;display:inline;\" id=\"wdautohl_id_4\" class=\"wdautohl_eWFuZw__\">Yang</wdautohl-customtag></b> <span class=\"says\">says:</span> </div> <div class=\"comment-metadata\"> <a href=\"https://gonglue.us/14472#comment-29050/\"> 2019-04-24 at 1:12 PM </a> </div> </footer> <div class=\"comment-content\"> <p>哦，不小心放错了链接。正确链接在这里： <a href=\"https://gonglue.us/16100\" rel=\"nofollow\">https://gonglue.us/16100</a></p> </div> </article> </li>  </ul>  </ul> </div>  <div class=\"amp-comment-button\"> <a href=\"https://gonglue.us/14472?nonamp=1#commentform\" title=\"Leave a Comment\" rel=\"nofollow\">Leave a Comment</a> </div> </div> </div> <div class=\"srp\"> <h3 class=\"amp-related-posts-title\">Related Post</h3> <ul class=\"clearfix\"> <li class=\"has_thumbnail\"> <div class=\"rlp-image\"> <a href=\"https://gonglue.us/50934/amp\" rel=\"bookmark\" title=\"美国购买口罩的网站\"> <amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/2020013111082387-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/2020013111082387-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img><img decoding=\"async\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/2020013111082387-346x188.jpg\" class=\"i-amphtml-fill-content i-amphtml-replaced-content\"></amp-img> </a> </div> <div class=\"rlp-cnt\"> <div class=\"related_link\"> <a href=\"https://gonglue.us/50934/amp\" title=\"美国购买口罩的网站\">美国购买口罩的网站</a> </div> </div> </li> <li class=\"has_thumbnail\"> <div class=\"rlp-image\"> <a href=\"https://gonglue.us/50896/amp\" rel=\"bookmark\" title=\"增强免疫力、预防流感和肺炎，试试这个保健品\"> <amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/2020013123121196-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/2020013123121196-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img><img decoding=\"async\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/2020013123121196-346x188.jpg\" class=\"i-amphtml-fill-content i-amphtml-replaced-content\"></amp-img> </a> </div> <div class=\"rlp-cnt\"> <div class=\"related_link\"> <a href=\"https://gonglue.us/50896/amp\" title=\"增强免疫力、预防流感和肺炎，试试这个保健品\">增强免疫力、预防流感和肺炎，试试这个保健品</a> </div> </div> </li> <li class=\"has_thumbnail\"> <div class=\"rlp-image\"> <a href=\"https://gonglue.us/50580/amp\" rel=\"bookmark\" title=\"怎么选择医用口罩和 N95 口罩？\"> <amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/2020012701515272-346x188.jpeg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/2020012701515272-346x188.jpeg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img><img decoding=\"async\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/2020012701515272-346x188.jpeg\" class=\"i-amphtml-fill-content i-amphtml-replaced-content\"></amp-img> </a> </div> <div class=\"rlp-cnt\"> <div class=\"related_link\"> <a href=\"https://gonglue.us/50580/amp\" title=\"怎么选择医用口罩和 N95 口罩？\">怎么选择医用口罩和 N95 口罩？</a> </div> </div> </li> <li class=\"has_thumbnail\"> <div class=\"rlp-image\"> <a href=\"https://gonglue.us/25022/amp\" rel=\"bookmark\" title=\"美国预防及治疗流感的常识\"> <amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/2019091703351026-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-layout\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/2019091703351026-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img><img decoding=\"async\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/2019091703351026-346x188.jpg\" class=\"i-amphtml-fill-content i-amphtml-replaced-content\"></amp-img> </a> </div> <div class=\"rlp-cnt\"> <div class=\"related_link\"> <a href=\"https://gonglue.us/25022/amp\" title=\"美国预防及治疗流感的常识\">美国预防及治疗流感的常识</a> </div> </div> </li> </ul> </div> </div> </div> </div> <div class=\"r-pf\"> <h3>Recent Posts</h3> <div class=\"loop-wrapper\"> <div class=\"fsp\"> <div class=\"fsp-img\"> <div class=\"loop-img image-container\"><a href=\"https://gonglue.us/16357/amp\" title=\"2020 美国情人节礼物推荐\"><amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/02/202002090042015-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"2020 美国情人节礼物推荐\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2020/02/202002090042015-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"2020 美国情人节礼物推荐\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img></amp-img></a></div> </div> <div class=\"fsp-cnt\"> <ul class=\"loop-category\"><li class=\"amp-cat-22\"><a href=\"https://gonglue.us/category/expatriate/amp\">移民生活</a></li></ul> <h2 class=\"loop-title\"><a href=\"https://gonglue.us/16357/amp\">2020 美国情人节礼物推荐</a></h2> <p class=\"\">马上又到情人节啦。</p> <div class=\"pt-dt\"> <div class=\"loop-date\">3 days ago</div> </div> </div> </div> <div class=\"fsp\"> <div class=\"fsp-img\"> <div class=\"loop-img image-container\"><a href=\"https://gonglue.us/40107/amp\" title=\"Chase 银行2月开户奖励最高 $2,000\"><amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2019/08/2019082603125250-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"Chase 银行2月开户奖励最高 $2,000\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2019/08/2019082603125250-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"Chase 银行2月开户奖励最高 $2,000\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img></amp-img></a></div> </div> <div class=\"fsp-cnt\"> <ul class=\"loop-category\"><li class=\"amp-cat-32\"><a href=\"https://gonglue.us/category/finance/amp\">信用理财</a></li></ul> <h2 class=\"loop-title\"><a href=\"https://gonglue.us/40107/amp\">Chase 银行2月开户奖励最高 $2,000</a></h2> <p class=\"\">这个奖励看着十分诱人，但要达到奖励要求……你要有很多闲钱。</p> <div class=\"pt-dt\"> <div class=\"loop-date\">4 days ago</div> </div> </div> </div> <div class=\"fsp\"> <div class=\"fsp-img\"> <div class=\"loop-img image-container\"><a href=\"https://gonglue.us/25022/amp\" title=\"美国预防及治疗流感的常识\"><amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/2019091703351026-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"美国预防及治疗流感的常识\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/2019091703351026-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"美国预防及治疗流感的常识\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img></amp-img></a></div> </div> <div class=\"fsp-cnt\"> <ul class=\"loop-category\"><li class=\"amp-cat-2\"><a href=\"https://gonglue.us/category/health/amp\">健康医药</a></li></ul> <h2 class=\"loop-title\"><a href=\"https://gonglue.us/25022/amp\">美国预防及治疗流感的常识</a></h2> <p class=\"\">美国的流感季通常从十月开始持续到第二年五月，其中十二月至二月是流感高峰季节。根据美国疾病预防控制中心（CDC）在发布的最新报告来看，美国目前正处于流感高峰季节。</p> <div class=\"pt-dt\"> <div class=\"loop-date\">6 days ago</div> </div> </div> </div> <div class=\"fsp\"> <div class=\"fsp-img\"> <div class=\"loop-img image-container\"><a href=\"https://gonglue.us/51178/amp\" title=\"B1/B2 延期被拒绝可以申诉吗？\"><amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/10/2019050604301313-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"B1/B2 延期被拒绝可以申诉吗？\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/10/2019050604301313-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"B1/B2 延期被拒绝可以申诉吗？\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img></amp-img></a></div> </div> <div class=\"fsp-cnt\"> <ul class=\"loop-category\"><li class=\"amp-cat-371\"><a href=\"https://gonglue.us/category/coronavirus/amp\">武汉疫情</a></li><li class=\"amp-cat-9\"><a href=\"https://gonglue.us/category/immigration/amp\">签证移民</a></li></ul> <h2 class=\"loop-title\"><a href=\"https://gonglue.us/51178/amp\">B1/B2 延期被拒绝可以申诉吗？</a></h2> <p class=\"\">收到 USCIS 的拒信，除了乖乖接受外，有三种「申诉」方式：Appeal、Reopen、Reconsider。</p> <div class=\"pt-dt\"> <div class=\"loop-date\">1 week ago</div> </div> </div> </div> <div class=\"fsp\"> <div class=\"fsp-img\"> <div class=\"loop-img image-container\"><a href=\"https://gonglue.us/50548/amp\" title=\"美国各州车险最低保额要求\"><amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2000/01/2019050405375864-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"美国各州车险最低保额要求\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2000/01/2019050405375864-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"美国各州车险最低保额要求\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img></amp-img></a></div> </div> <div class=\"fsp-cnt\"> <ul class=\"loop-category\"><li class=\"amp-cat-309\"><a href=\"https://gonglue.us/category/car/amp\">买车用车</a></li><li class=\"amp-cat-1\"><a href=\"https://gonglue.us/category/tips/amp\">生活常识</a></li></ul> <h2 class=\"loop-title\"><a href=\"https://gonglue.us/50548/amp\">美国各州车险最低保额要求</a></h2> <p class=\"\">美国绝大部分的州都规定车主需购买汽车保险，但是每个州对于最低保额的要求是不一样的。</p> <div class=\"pt-dt\"> <div class=\"loop-date\">1 week ago</div> </div> </div> </div> <div class=\"fsp\"> <div class=\"fsp-img\"> <div class=\"loop-img image-container\"><a href=\"https://gonglue.us/383/amp\" title=\"I-94 过期、首次延期还未批准，能申请二次延期吗？\"><amp-img src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/10/2019050604301313-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"I-94 过期、首次延期还未批准，能申请二次延期吗？\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer><amp-img fallback=\"\" src=\"https://fm90ppa3yi-flywheel.netdna-ssl.com/wp-content/uploads/2018/10/2019050604301313-346x188.jpg\" width=\"346\" height=\"188\" layout=\"responsive\" class=\"i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined\" alt=\"I-94 过期、首次延期还未批准，能申请二次延期吗？\" i-amphtml-layout=\"responsive\"><i-amphtml-sizer style=\"padding-top: 54.3353%;\"></i-amphtml-sizer></amp-img></amp-img></a></div> </div> <div class=\"fsp-cnt\"> <ul class=\"loop-category\"><li class=\"amp-cat-371\"><a href=\"https://gonglue.us/category/coronavirus/amp\">武汉疫情</a></li><li class=\"amp-cat-9\"><a href=\"https://gonglue.us/category/immigration/amp\">签证移民</a></li></ul> <h2 class=\"loop-title\"><a href=\"https://gonglue.us/383/amp\">I-94 过期、首次延期还未批准，能申请二次延期吗？</a></h2> <p class=\"\">通常情况下不可以。但凡事都有例外。现在就是例外。</p> <div class=\"pt-dt\"> <div class=\"loop-date\">1 week ago</div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <amp-next-page class=\"i-amphtml-element i-amphtml-layout-container i-amphtml-next-page\" i-amphtml-layout=\"container\"> <script type=\"application/json\">{\"pages\": [{\"title\":\"2020 \u7f8e\u56fd\u60c5\u4eba\u8282\u793c\u7269\u63a8\u8350\",\"image\":\"https:\\/\\/gonglue.us\\/wp-content\\/uploads\\/2020\\/02\\/202002090042015.jpg\",\"ampUrl\":\"https:\\/\\/gonglue.us\\/16357\\/amp\"},{\"title\":\"Chase \u94f6\u884c2\u6708\u5f00\u6237\u5956\u52b1\u6700\u9ad8 $2,000\",\"image\":\"https:\\/\\/gonglue.us\\/wp-content\\/uploads\\/2019\\/08\\/2019082603125250.jpg\",\"ampUrl\":\"https:\\/\\/gonglue.us\\/40107\\/amp\"}],\"hideSelectors\": [\".p-m-fl\",\".loop-pagination\",\".footer\",\".r-pf\",\".srp ul\",\".srp h3\",\"#pagination\",\".h_m_w\",\".f-w\"]       }</script> </amp-next-page> </div>";

class Detail extends Component {
  handleMessage () {}

  render () {
    return (
      <RichText nodes={htmlString} />
    )
  }
}

export default Detail;
