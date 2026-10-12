(function () {
  'use strict';

  // Paper titles, author lists, conference names, and asset links stay unchanged.
  var translations = {
    name: ['马天昊', '馬天昊'],
    university: ['东京大学', '東京大学'],
    role: ['东京大学硕士研究生', '東京大学 修士課程'],
    location: ['日本，东京', '日本・東京'],
    email: ['邮箱', 'メール'],
    scholar: ['谷歌学术', 'Google Scholar'],
    home: ['主页', 'ホーム'],
    about: ['关于我', '自己紹介'],
    publications: ['论文', '研究業績'],
    honors: ['获奖经历', '受賞歴'],
    education: ['教育经历', '学歴'],
    talks: ['受邀报告', '招待講演'],
    services: ['学术服务', '学術活動'],
    reliable: ['大语言模型可靠性', '大規模言語モデルの信頼性'],
    weak: ['弱监督学习 / 统计机器学习', '弱教師あり学習 / 統計的機械学習'],
    llp: ['标签比例学习（LLP）', 'ラベル比率からの学習（LLP）'],
    pml: ['偏多标签学习（PML）', '部分的なマルチラベルからの学習（PML）'],
    bio: [
      '马天昊目前是东京大学硕士二年级学生，导师为 {{0}} 和 {{1}}，同时与 {{2}} 合作开展研究。本科毕业于吉林大学，导师为 {{3}}。',
      '馬天昊は東京大学の修士課程2年に在籍し、{{0}} と {{1}} の指導を受けながら、{{2}} と共同研究を行っています。吉林大学で学士号を取得し、学部時代は {{3}} の指導を受けました。'
    ],
    interests: [
      '目前的研究方向是可信机器学习，重点关注大语言模型的可靠性与安全性。此前主要研究统计机器学习和弱监督学习。研究之外，我也是一名业余足球运动员，拥有中国国家二级运动员和足球三级裁判员资格。',
      '現在は、信頼できる機械学習、特に大規模言語モデルの信頼性と安全性を研究しています。以前は統計的機械学習と弱教師あり学習に取り組んでいました。研究以外ではアマチュアのサッカー選手として活動しており、中国の国家二級運動員およびサッカー三級審判員の資格を持っています。'
    ],
    contact: [
      '欢迎交流，随时给我发邮件：matianhao2120 at g.ecc.u-tokyo.ac.jp。',
      '研究についてのご相談や意見交換は、matianhao2120 at g.ecc.u-tokyo.ac.jp までお気軽にご連絡ください。'
    ],
    phd: [
      '我目前正在寻找博士阶段的研究机会，也很愿意聊聊潜在的合作与研究方向。',
      '現在、博士課程での研究機会を探しています。研究の方向性や共同研究の可能性についても、ぜひお話しできればと思います。'
    ],
    reflection: [
      '我不确定自己的研究能否比得过 AI scientists 生成的成果，也不知道持续接受科研训练能否让我跟上它们，更不知道自己还会做多久研究。但我很确定，研究曾带给我许多快乐，我也珍惜并享受现在做研究的时光。',
      '自分の研究が AI scientists の生み出す成果に及ぶのか、研究者として鍛え続けることで追いつけるのか、そして自分がいつまで研究を続けるのか、正直なところ分かりません。ただ、研究がこれまでたくさんの喜びを与えてくれたことは確かです。今、研究に取り組める時間を大切にし、楽しんでいます。'
    ],
    transition: [
      '我正在从经典统计机器学习转向大语言模型相关的前沿研究。扩散语言模型水印是我在这个方向上的第一次尝试。',
      '現在、従来の統計的機械学習から大規模言語モデルに関する最先端の研究へと軸足を移しています。拡散言語モデルの透かしは、この方向での最初の取り組みです。'
    ],
    llpJourney: [
      '从本科到硕士阶段，我的标签比例学习研究逐渐从追求领先实验表现的算法设计，转向理解问题背后的统计结构。我尝试利用这些结构重新表述学习任务、推导有理论依据的优化目标，并检验它们能否在实际任务中带来有意义的提升。',
      '学部から修士課程にかけて、ラベル比率からの学習では、実験性能の向上を目指すアルゴリズム設計から、問題の背後にある統計的構造を理解する研究へと関心が移ってきました。その構造に基づいて学習問題を捉え直し、理論的な根拠を持つ最適化目標を導くとともに、実際の性能向上につながるかを検証しています。'
    ],
    denmark: [
      'DenMark 是<strong>首个具有鲁棒性的语义级</strong>扩散语言模型水印框架。它通过一步补全前瞻，逐步在语义嵌入空间中累积水印信号，而不是在 token 层面嵌入水印。这使语义水印能够适用于任意顺序、高度并行的生成过程，解决了自回归拒绝采样无法直接用于这类生成方式的问题。在 48 种语义攻击设置（4 个 DLM、3 个数据集和 4 种攻击）上，DenMark 在 1% 假阳性率下的平均真阳性率达到 <strong>71.89%</strong>，比平均真阳性率最高的基线 DGMark 高出 <strong>27.88 个百分点</strong>。',
      'DenMark は、拡散言語モデルに対する<strong>初の頑健な意味レベル</strong>の透かしフレームワークです。1ステップでの補完を用いた先読みを通じて、トークンではなく意味埋め込み空間に透かし信号を徐々に蓄積します。これにより、自己回帰モデルの棄却サンプリングをそのまま適用できない任意順序・高並列の生成でも、意味レベルの透かしを実現します。48通りの意味的攻撃設定（4つの DLM、3つのデータセット、4種類の攻撃）で、偽陽性率1%における平均真陽性率は <strong>71.89%</strong> に達し、平均真陽性率が最も高いベースライン DGMark を <strong>27.88ポイント</strong>上回りました。'
    ],
    mm: [
      '在较为现实的假设下，包内各类别的样本数服从泊松多项分布（PMD）。由于直接计算 PMD 的代价较高，我们采用易于计算的多阶经验矩匹配目标，捕捉更丰富的分布信息。该方法在半真实与合成数据集上均取得了良好的实验表现。',
      '比較的現実的な仮定の下で、バッグ内のクラス別サンプル数はポアソン多項分布（PMD）に従います。PMD の直接計算は高コストなため、計算しやすい複数次数の経験モーメントを一致させる目的関数を用い、より多くの分布情報を取り込みます。半実データと合成データの両方で良好な性能を確認しました。'
    ],
    pvc: [
      '我们将标签比例学习重新表述为一个辅助的比例值分类任务，而不再直接拟合包级标签比例。通过连接包级比例值的后验概率与样本级标签后验概率，方法能够学到更有区分力的分类器，并缓解过度平滑。该方法具有理论保证，也取得了良好的实验效果。',
      'バッグ単位のラベル比率を直接当てはめるのではなく、補助的な比率値の分類問題として LLP を捉え直します。バッグの比率値の事後確率と各サンプルのラベルの事後確率を結びつけることで、識別力の高い分類器を学習し、過度な平滑化を抑えます。理論的保証に加え、実験でも良好な性能を示しました。'
    ],
    ahil: [
      '我们通过基于双重熵的加权机制筛选高置信度伪标签，构造辅助的样本级损失，并与包级损失联合优化。在 5 个数据集、5 种包大小共 25 种设置上等权平均，准确率比 <strong>LLP-VAT 高 9.13 个百分点，比 ROT 高 17.99 个百分点</strong>。',
      '2つのエントロピーに基づく重み付けによって信頼度の高い疑似ラベルを選び、補助的なサンプル単位の損失を構成して、バッグ単位の損失と同時に最適化します。5つのデータセットと5種類のバッグサイズからなる25設定を等しく平均すると、精度は <strong>LLP-VAT より9.13ポイント、ROT より17.99ポイント</strong>高くなりました。'
    ],
    multi: [
      '我们利用一阶和二阶策略重新构造汉明损失与排序损失的风险，无需估计标签生成机制或假设标签均匀生成，即可得到无偏估计量。我们证明了一致性并给出估计误差界，在真实与合成数据上的实验也展示了相较领先方法的良好表现。',
      '一次・二次の手法を用いてハミング損失とランキング損失のリスクを再定式化し、ラベルの生成過程の推定や一様生成の仮定なしに不偏推定量を導きます。一致性と推定誤差の上界を示し、実データと合成データの実験でも、最先端の手法に対して良好な性能を確認しました。'
    ],
    dc: [
      'LLP-DC 利用最小费用最大流，在严格满足每个包的类别比例约束的前提下，找到置信度最高的硬伪标签分配方案。方法将基于这些伪标签的样本级训练与包级比例匹配结合，在两个层面同时施加比例约束。多个基准数据集和不同包大小下的实验表明，该方法能持续改善现有 LLP 方法的表现。',
      'LLP-DC は最小費用最大流を用いて、各バッグのクラス比率を厳密に満たす割り当ての中から、最も信頼度の高いハードな疑似ラベルを求めます。その疑似ラベルによるサンプル単位の学習と、バッグ単位の比率を一致させる学習を組み合わせ、両方の段階で比率制約を課します。複数のベンチマークとバッグサイズで、既存の LLP 手法を一貫して上回る性能を確認しました。'
    ],
    equal: ['*共同贡献（共同第一作者）', '*同等の貢献（共同筆頭著者）'],
    morePapers: ['合作论文', '共同研究の論文'],
    summary: ['摘要', '概要'],
    code: ['代码', 'コード'],
    moreAwards: ['更多成绩', 'その他の成績'],
    awardIntro: [
      '我直到本科三年级才开始学习计算机科学和人工智能，因此没有获得过太多学业方面的奖项。',
      'コンピュータサイエンスと AI を学び始めたのは学部3年の頃で、学業に関する受賞歴はあまりありません。'
    ],
    schoolFootball: ['<strong>高中足球：</strong>2019 年云南省校园足球比赛 — <strong>第一名</strong>', '<strong>高校時代のサッカー：</strong>2019年 雲南省学校サッカー大会 — <strong>優勝</strong>'],
    universityFootball: ['<strong>大学足球：</strong>2021 年吉林省大学生足球联赛超级组 — <strong>第五名</strong>', '<strong>大学時代のサッカー：</strong>2021年 吉林省大学生サッカーリーグ・スーパー部門 — <strong>5位</strong>'],
    school2018: ['2018 年云南省校园足球比赛 — <strong>第五名</strong>', '2018年 雲南省学校サッカー大会 — <strong>5位</strong>'],
    school2019: ['2019 年昆明市 U17 足球锦标赛 — <strong>第三名</strong>', '2019年 昆明市 U17 サッカー選手権 — <strong>3位</strong>'],
    uni2021: ['2021 年吉林大学校内十一人制足球比赛 — <strong>第二名</strong>', '2021年 吉林大学学内11人制サッカー大会 — <strong>準優勝</strong>'],
    uni2023: ['2023 年吉林大学校内十一人制足球比赛 — <strong>第一名</strong>', '2023年 吉林大学学内11人制サッカー大会 — <strong>優勝</strong>'],
    uniFive: ['2023 年吉林大学校内五人制足球比赛 — <strong>第三名</strong>', '2023年 吉林大学学内5人制サッカー大会 — <strong>3位</strong>'],
    master: ['<em>2025.04 – 2027.03（预计）</em>，东京大学，计算机科学硕士，东京。', '<em>2025.04 – 2027.03（修了予定）</em>，東京大学 修士課程・コンピュータ科学，東京。'],
    bachelor: ['<em>2020.09 – 2024.07</em>，吉林大学，网络空间安全学士，吉林。', '<em>2020.09 – 2024.07</em>，吉林大学 学士課程・サイバーセキュリティ，吉林。'],
    invited: ['<em>Top Conference Session on Learning Theory and Its Applications</em>，Forum on Information Technology (FIT 2026)，日本北九州，2026 年 9 月。', '<em>Top Conference Session on Learning Theory and Its Applications</em>，Forum on Information Technology (FIT 2026)，日本・北九州，2026年9月。'],
    reviewer: ['会议审稿人：ICLR 2027；NeurIPS 2026', '国際会議査読：ICLR 2027、NeurIPS 2026']
  };

  var bindings = [];
  function bind(element, key) {
    if (!element) return;
    var english = element.innerHTML;
    var links = Array.from(element.querySelectorAll('a')).map(function (link) { return link.outerHTML; });
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
