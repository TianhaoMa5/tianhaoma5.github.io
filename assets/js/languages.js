(function () {
  'use strict';

  // Paper titles, author lists, conference names, and asset links stay unchanged.
  var translations = {
    name: ['马天昊', '馬天昊'],
    university: ['东京大学', '東京大学'],
    role: ['东京大学硕士研究生', '東京大学 修士課程'],
    location: ['日本东京', '日本・東京'],
    email: ['邮箱', 'メール'],
    scholar: ['谷歌学术', 'Google Scholar'],
    home: ['主页', 'ホーム'],
    about: ['关于我', '自己紹介'],
    publications: ['论文', '研究業績'],
    honors: ['获奖经历', '受賞歴'],
    education: ['教育经历', '学歴'],
    talks: ['受邀报告', '招待講演'],
    services: ['学术服务', '学術活動'],
    venueSydney: ['澳大利亚悉尼', 'オーストラリア・シドニー'],
    venueAtlanta: ['美国亚特兰大', 'アメリカ・アトランタ'],
    venueParis: ['法国巴黎', 'フランス・パリ'],
    venueRio: ['巴西里约热内卢', 'ブラジル・リオデジャネイロ'],
    venueNashville: ['美国田纳西州纳什维尔', 'アメリカ・テネシー州ナッシュビル'],
    venueDenver: ['美国科罗拉多州丹佛', 'アメリカ・コロラド州デンバー'],
    reliable: ['大语言模型可靠性', '大規模言語モデルの信頼性'],
    weak: ['弱监督学习 / 统计机器学习', '弱教師あり学習 / 統計的機械学習'],
    llp: ['标签比例学习（LLP）', 'ラベル比率からの学習（LLP）'],
    pml: ['偏多标签学习（PML）', '部分マルチラベル学習（PML）'],
    bio: [
      '我是马天昊，目前在东京大学读硕士二年级，在{{0}}教授和{{1}}教授的指导下做研究，也与{{2}}博士合作。本科就读于吉林大学，师从{{3}}教授。',
      '東京大学の修士課程2年に在籍している馬天昊です。{{0}}先生と{{1}}先生の指導のもと、{{2}}博士とも共同研究を進めています。学部は吉林大学で、{{3}}先生にご指導いただきました。'
    ],
    interests: [
      '我现在主要研究可信机器学习，尤其关注大语言模型的可靠性和安全性，之前做的是统计机器学习和弱监督学习。研究之外，我也踢业余足球，是国家二级运动员，也有足球三级裁判员资格。',
      '今は、信頼できる機械学習、なかでも大規模言語モデルの信頼性と安全性に関心があります。以前は統計的機械学習と弱教師あり学習に取り組んでいました。研究のほかには、アマチュアとしてサッカーを続けています。中国の国家二級運動員とサッカー三級審判員の資格も持っています。'
    ],
    contact: [
      '如果想聊聊研究，欢迎给我发邮件：matianhao2120 at g.ecc.u-tokyo.ac.jp。',
      '研究の話など、お気軽にメールをいただけるとうれしいです。連絡先は matianhao2120 at g.ecc.u-tokyo.ac.jp です。'
    ],
    phd: [
      '我正在寻找博士阶段的研究机会，也很愿意和大家聊聊未来的研究方向与合作可能。',
      '現在、博士課程で研究を続けられる機会を探しています。今後の研究や共同研究についても、お話しできればうれしいです。'
    ],
    reflection: [
      '说实话，我也不知道自己的研究能不能比得过 AI scientist 做出来的成果，不知道继续磨练自己的研究能力能不能跟上它们，更不知道自己还会做多久研究。但研究确实给我带来过很多快乐，所以我很珍惜，也很享受现在做研究的这段日子。',
      '正直、自分の研究が AI scientist の成果にかなうのか、研究を続けて力をつければ追いつけるのかは、まだ分かりません。自分がいつまで研究を続けるのかも分かりません。でも、研究をしていて楽しいと感じた瞬間は、これまでたくさんありました。だからこそ、今こうして研究できる時間を大切にしながら、楽しんでいたいと思っています。'
    ],
    transition: [
      '最近，我开始从经典统计机器学习转向大语言模型相关的新问题。扩散语言模型水印是我迈向这个方向的第一次尝试。',
      '最近は、これまでの統計的機械学習から、大規模言語モデルに関する新しい課題へと研究の幅を広げています。拡散言語モデルの透かしは、その最初の取り組みです。'
    ],
    llpJourney: [
      '从本科到硕士，我一直在做标签比例学习。最初更关心怎样把实验效果做得更好，后来逐渐开始追问：这个问题本身有什么统计结构？能不能从这些结构出发，设计出更有依据的学习目标？当然，最后还是要回到实验，看看这些想法能不能真正带来提升。',
      '学部から修士課程まで、ラベル比率からの学習に取り組んできました。最初は実験でよい性能を出すことに力を入れていましたが、次第に「この問題にはどんな統計的構造があるのか」「そこから学習の目的関数を導けないか」と考えるようになりました。理論だけで終わらず、実際に性能がよくなるかも確かめています。'
    ],
    denmark: [
      'DenMark 是扩散语言模型的<strong>首个鲁棒语义级</strong>水印框架。核心思路是用一步补全来做前瞻，把水印信号逐步累积在语义 embedding 中，而不是写进 token。这样，即使模型按任意顺序、以高度并行的方式生成文本，也能加入语义水印，绕开自回归拒绝采样无法直接迁移到 DLM 的问题。在 4 个 DLM、3 个数据集和 4 种攻击组成的 48 组语义攻击实验中，1% 假阳性率下的平均真阳性率达到 <strong>71.89%</strong>，比平均表现最强的基线 DGMark 高 <strong>27.88 个百分点</strong>。',
      'DenMark は、拡散言語モデルのための<strong>初の頑健な意味レベルの</strong>透かしフレームワークです。生成途中の文章を1ステップで補完して先読みし、トークンではなく意味埋め込みに透かし信号を少しずつ蓄積します。自己回帰モデルで使われる棄却サンプリングに頼らないため、生成順序が自由で並列性の高い DLM にも意味レベルの透かしを入れられます。4つの DLM、3つのデータセット、4種類の攻撃を組み合わせた48設定では、偽陽性率1%での平均真陽性率が <strong>71.89%</strong> となり、平均性能が最も高いベースライン DGMark を <strong>27.88ポイント</strong>上回りました。'
    ],
    mm: [
      '这项工作的出发点是：在较为现实的假设下，包内各类别的样本数服从泊松多项分布（PMD）。直接计算这个分布开销很大，所以我们转而匹配多个阶数的经验矩，以较低的计算代价利用更多分布信息。方法在半真实和合成数据集上都取得了不错的效果。',
      '出発点は、比較的現実的な仮定のもとで、バッグ内のクラスごとのサンプル数がポアソン多項分布（PMD）に従うという点です。この分布を直接計算するのは大変なので、代わりに複数の次数の経験モーメントを合わせ、分布の情報をより多く学習に使います。semi-real データと合成データの両方で、よい性能が得られました。'
    ],
    pvc: [
      '我们不再直接拟合包里的标签比例，而是把 LLP 转成一个辅助的“比例值分类”任务。关键是建立包级比例值后验概率与样本级标签后验概率之间的联系，让分类器更有区分力，也缓解预测过度平滑的问题。方法既有理论保证，也有实验结果支持。',
      'バッグのラベル比率を直接合わせるのではなく、比率の値そのものを分類する補助タスクとして LLP を捉え直しました。バッグの比率値の事後確率と、各サンプルのラベルの事後確率を結びつけるのがポイントです。これにより識別力を高め、予測が過度に平滑化される問題を抑えます。理論的保証と実験の両面から有効性を示しました。'
    ],
    ahil: [
      '我们用两种熵指标给伪标签加权，挑出更可信的标签来构造辅助的样本级损失，再和包级损失一起训练。在 5 个数据集、5 种包大小共 25 组实验中，每组等权计算的平均准确率比 <strong>LLP-VAT 高 9.13 个百分点，比 ROT 高 17.99 个百分点</strong>。',
      '2つのエントロピーを使って疑似ラベルに重みを付け、信頼度の高いものからサンプル単位の補助損失を作ります。これをバッグ単位の損失と組み合わせて学習します。5つのデータセットと5種類のバッグサイズ、計25設定を等しく平均した精度は、<strong>LLP-VAT より9.13ポイント、ROT より17.99ポイント</strong>高くなりました。'
    ],
    multi: [
      '我们从一阶和二阶信息出发，重新构造汉明损失和排序损失的风险估计，不需要估计标签是如何生成的，也不依赖均匀生成假设。除了得到无偏估计量，我们还证明了一致性、给出了估计误差界，并在真实和合成数据上检验了方法的效果。',
      '一次・二次の情報を使って、ハミング損失とランキング損失のリスク推定を組み立て直しました。ラベルがどう生成されたかを推定する必要も、一様に生成されると仮定する必要もありません。不偏推定量を導き、一致性と推定誤差の上界を示したうえで、実データと合成データでも性能を確かめました。'
    ],
    dc: [
      '这项工作把打伪标签看成一个带比例约束的分配问题：用最小费用最大流，在所有满足包内类别比例的方案中，选出模型置信度最高的一组硬伪标签。训练时，一边用这些标签做样本级学习，一边让包内的平均预测匹配给定比例。不同数据集和包大小上的实验都显示，这种双重约束能稳定优于已有的 LLP 方法。',
      '各バッグのラベル比率を守りながら、モデルの予測に最もよく合う疑似ラベルの割り当てを、最小費用最大流で求めます。そのラベルを使った個々のサンプルの学習と、バッグ全体の比率を合わせる学習を組み合わせたのが LLP-DC です。複数のデータセットとバッグサイズで、既存の LLP 手法より高い精度が得られました。'
    ],
    equal: ['*共同贡献（共同第一作者）', '*同等の貢献（共同筆頭著者）'],
    morePapers: ['合作论文', '共同研究の論文'],
    summary: ['摘要', '概要'],
    code: ['代码', 'コード'],
    moreAwards: ['更多成绩', 'その他の成績'],
    awardIntro: [
      '我到大三才开始学习计算机和 AI，也没拿过太多学业方面的奖项。',
      'コンピュータサイエンスと AI を学び始めたのは、学部3年の頃でした。学業での受賞歴は、あまりありません。'
    ],
    schoolFootball: ['<strong>高中足球：</strong>2019 年云南省校园足球比赛 — <strong>第一名</strong>', '<strong>高校時代のサッカー：</strong>2019年 雲南省学校サッカー大会 — <strong>優勝</strong>'],
    universityFootball: ['<strong>大学足球：</strong>2021 年吉林省大学生足球联赛超级组 — <strong>第五名</strong>', '<strong>大学時代のサッカー：</strong>2021年 吉林省大学生サッカーリーグ・スーパー部門 — <strong>5位</strong>'],
    school2018: ['2018 年云南省校园足球比赛 — <strong>第五名</strong>', '2018年 雲南省学校サッカー大会 — <strong>5位</strong>'],
    school2019: ['2019 年昆明市 U17 足球锦标赛 — <strong>第三名</strong>', '2019年 昆明市 U17 サッカー選手権 — <strong>3位</strong>'],
    uni2021: ['2021 年吉林大学校内十一人制足球比赛 — <strong>第二名</strong>', '2021年 吉林大学学内11人制サッカー大会 — <strong>準優勝</strong>'],
    uni2023: ['2023 年吉林大学校内十一人制足球比赛 — <strong>第一名</strong>', '2023年 吉林大学学内11人制サッカー大会 — <strong>優勝</strong>'],
    uniFive: ['2023 年吉林大学校内五人制足球比赛 — <strong>第三名</strong>', '2023年 吉林大学学内5人制サッカー大会 — <strong>3位</strong>'],
    master: ['<em>2025.04 – 2027.03（预计毕业）</em>，东京大学，计算机科学硕士，东京。', '<em>2025.04 – 2027.03（修了予定）</em> 東京大学 修士課程（コンピュータ科学）、東京。'],
    bachelor: ['<em>2020.09 – 2024.07</em>，吉林大学，网络空间安全学士，吉林。', '<em>2020.09 – 2024.07</em> 吉林大学 学士課程（サイバーセキュリティ）、吉林。'],
    invited: ['<em>Top Conference Session on Learning Theory and Its Applications</em>，Forum on Information Technology (FIT 2026)，日本北九州，2026 年 9 月。', '<em>Top Conference Session on Learning Theory and Its Applications</em>、Forum on Information Technology (FIT 2026)、日本・北九州、2026年9月。'],
    reviewer: ['会议审稿人：ICLR 2027；NeurIPS 2026', '国際会議査読：ICLR 2027、NeurIPS 2026']
  };

  var biographyNames = {
    'Masashi Sugiyama': '杉山将',
    'Takashi Ishida': '石田隆',
    'Gang Niu': '牛罡',
    'Ximing Li': '李熙铭'
  };
  var bindings = [];
  function bind(element, key) {
    if (!element) return;
    var english = element.innerHTML;
    var links = Array.from(element.querySelectorAll('a')).map(function (link) {
      var translatedLink = link.cloneNode(true);
      // Titles belong in the surrounding sentence, not in the proper name.
      translatedLink.textContent = translatedLink.textContent.replace(/^(Prof\.|Dr\.)\s+/, '');
      if (key === 'bio' && biographyNames[translatedLink.textContent]) {
        translatedLink.textContent = biographyNames[translatedLink.textContent];
      }
      return translatedLink.outerHTML;
    });
    bindings.push({ element: element, key: key, english: english, links: links });
  }
  function bindSelector(selector, key) {
    document.querySelectorAll(selector).forEach(function (element) { bind(element, key); });
  }

  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    bind(element, element.dataset.i18n);
  });
  var headings = {
    'about-me': 'about', publications: 'publications', 'reliable-llm': 'reliable',
    'weak-supervision-statistical-ml': 'weak', 'learning-from-label-proportions': 'llp',
    'partial-multi-label-learning': 'pml', 'honors-and-awards': 'honors',
    educations: 'education', 'invited-talks': 'talks', 'academic-services': 'services'
  };
  Object.keys(headings).forEach(function (id) { bindSelector('h1#' + id + ', h2#' + id + ', h3#' + id, headings[id]); });
  document.querySelectorAll('#site-nav a').forEach(function (link) {
    var id = link.getAttribute('href').split('#')[1];
    bind(link, link.closest('.masthead__menu-home-item') ? 'home' : headings[id]);
    link.setAttribute('href', '#' + id);
    link.setAttribute('target', '_self');
  });
  bindSelector('.author__name', 'name');
  bindSelector('.author__bio', 'university');
  bindSelector('.author__urls > li:first-child > div', 'role');
  // Keep the existing contact icons intact when translating their labels.
  [['.fa-map-marker', 'location'], ['.fa-envelope', 'email'], ['.fa-graduation-cap', 'scholar']].forEach(function (entry) {
    var icon = document.querySelector('.author__urls ' + entry[0]);
    if (!icon) return;
    var label = document.createElement('span');
    while (icon.nextSibling) label.appendChild(icon.nextSibling);
    icon.parentNode.appendChild(label);
    bind(label, entry[1]);
  });
  var summaries = { denmark: 'denmark', 'llp-mm': 'mm', 'llp-pvc': 'pvc', 'llp-ahil': 'ahil', 'multi-label': 'multi', 'llp-dc': 'dc' };
  Object.keys(summaries).forEach(function (id) { bindSelector('#summary-' + id + ' > p', summaries[id]); });
  bindSelector('.paper-summary-toggle', 'summary');
  bindSelector('.paper-asset a[href*="github.com"]', 'code');
  bindSelector('.page__content > p > small', 'equal');
  bindSelector('.page__content > details > summary > strong', 'morePapers');
  bindSelector('#honors-and-awards + p + ul summary', 'moreAwards');
  var football = document.querySelectorAll('#honors-and-awards + p + ul > li');
  ['schoolFootball', 'universityFootball'].forEach(function (key, index) {
    var item = football[index];
    if (!item) return;
    var label = document.createElement('span');
    while (item.firstChild && item.firstChild.nodeName !== 'DETAILS') label.appendChild(item.firstChild);
    item.insertBefore(label, item.firstChild);
    bind(label, key);
  });
  var awardKeys = ['school2018', 'school2019', 'uni2021', 'uni2023', 'uniFive'];
  document.querySelectorAll('#honors-and-awards + p + ul details li').forEach(function (item, index) { bind(item, awardKeys[index]); });
  var education = document.querySelectorAll('#educations + ul > li');
  bind(education[0], 'master');
  bind(education[1], 'bachelor');
  bindSelector('#invited-talks + ul > li', 'invited');
  bindSelector('#academic-services + ul > li', 'reviewer');

  function setLanguage(language) {
    if (!['en', 'zh', 'ja'].includes(language)) return;
    var index = language === 'zh' ? 0 : 1;
    bindings.forEach(function (binding) {
      var text = language === 'en' ? binding.english : translations[binding.key][index];
      text = text.replace(/\{\{(\d+)\}\}/g, function (_, number) { return binding.links[Number(number)] || ''; });
      binding.element.innerHTML = text;
    });
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    document.querySelectorAll('[data-language]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.querySelectorAll('.paper-summary-toggle').forEach(function (button) {
      var name = button.getAttribute('aria-controls').replace('summary-', '');
      button.setAttribute('aria-label', (language === 'zh' ? '论文摘要：' : language === 'ja' ? '論文の概要：' : 'Summary of ') + name);
    });
    // Recalculate the existing overflow menu after translated labels change width.
    window.dispatchEvent(new Event('resize'));
  }
  document.querySelectorAll('[data-language]').forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(button.dataset.language); });
  });
  // No browser-language detection or persisted preference: new visits start in English.
  setLanguage('en');
}());
